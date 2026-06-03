import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { getDb } from "./db";
import { consultations, accessRequests } from "../drizzle/schema";
import { desc, eq } from "drizzle-orm";
import { notifyOwner } from "./_core/notification";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import crypto from "crypto";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  access: router({
    // Submit access request - stores in DB and notifies owner
    request: publicProcedure
      .input(z.object({
        sectionId: z.string().min(1).max(64),
        name: z.string().min(1).max(128),
        email: z.string().email().max(320),
        company: z.string().max(256).optional(),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });

        // Insert request record
        await db.insert(accessRequests).values({
          name: input.name,
          email: input.email,
          company: input.company ?? null,
          status: "pending",
        });

        // Notify owner
        await notifyOwner({
          title: `🔓 新的访问申请 — ${input.name}`,
          content: `姓名：${input.name}\n邮箱：${input.email}\n公司：${input.company ?? 'N/A'}\n\n请登录管理端 /admin 审核并生成解锁链接。`,
        });

        return { success: true };
      }),

    // List all access requests (admin only)
    list: protectedProcedure
      .query(async ({ ctx }) => {
        if (ctx.user.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN", message: "Admin access required" });
        }
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });
        return db.select().from(accessRequests).orderBy(desc(accessRequests.createdAt));
      }),

    // Approve a request and generate unlock token (admin only)
    approve: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN", message: "Admin access required" });
        }
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });

        // Generate a secure random token
        const token = crypto.randomBytes(24).toString("hex");

        await db.update(accessRequests)
          .set({ status: "approved", unlockToken: token, reviewedAt: new Date() })
          .where(eq(accessRequests.id, input.id));

        return { token };
      }),

    // Reject a request (admin only)
    reject: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN", message: "Admin access required" });
        }
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });

        await db.update(accessRequests)
          .set({ status: "rejected", reviewedAt: new Date() })
          .where(eq(accessRequests.id, input.id));

        return { success: true };
      }),

    // Verify an unlock token (public - called by visitor with token in URL)
    verify: publicProcedure
      .input(z.object({ token: z.string().min(1).max(128) }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });

        const [record] = await db.select()
          .from(accessRequests)
          .where(eq(accessRequests.unlockToken, input.token))
          .limit(1);

        if (!record || record.status !== "approved") {
          throw new TRPCError({ code: "NOT_FOUND", message: "Invalid or expired unlock token" });
        }

        return { success: true, name: record.name };
      }),
  }),

  consultation: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1).max(128),
        email: z.string().email().max(320),
        company: z.string().max(256).optional(),
        position: z.string().max(128).optional(),
        investmentStage: z.string().max(64).optional(),
        message: z.string().max(2000).optional(),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });
        await db.insert(consultations).values({
          name: input.name,
          email: input.email,
          company: input.company ?? null,
          position: input.position ?? null,
          investmentStage: input.investmentStage ?? null,
          message: input.message ?? null,
        });
        await notifyOwner({
          title: `New Investor Inquiry: ${input.name}`,
          content: `Name: ${input.name}\nEmail: ${input.email}\nCompany: ${input.company ?? 'N/A'}\nPosition: ${input.position ?? 'N/A'}\nInvestment Stage: ${input.investmentStage ?? 'N/A'}\nMessage: ${input.message ?? 'N/A'}`,
        });
        return { success: true };
      }),

    list: protectedProcedure
      .query(async ({ ctx }) => {
        if (ctx.user.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN", message: "Admin access required" });
        }
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });
        return db.select().from(consultations).orderBy(desc(consultations.createdAt));
      }),
  }),
});

export type AppRouter = typeof appRouter;
