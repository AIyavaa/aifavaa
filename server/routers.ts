import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { getDb } from "./db";
import { consultations } from "../drizzle/schema";
import { desc } from "drizzle-orm";
import { notifyOwner } from "./_core/notification";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  consultation: router({
    // Submit a new consultation form
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

        // Notify owner of new consultation
        await notifyOwner({
          title: `New Investor Inquiry: ${input.name}`,
          content: `Name: ${input.name}\nEmail: ${input.email}\nCompany: ${input.company ?? 'N/A'}\nPosition: ${input.position ?? 'N/A'}\nInvestment Stage: ${input.investmentStage ?? 'N/A'}\nMessage: ${input.message ?? 'N/A'}`,
        });

        return { success: true };
      }),

    // List all consultations (admin only)
    list: protectedProcedure
      .query(async ({ ctx }) => {
        if (ctx.user.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN", message: "Admin access required" });
        }
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });

        const results = await db.select().from(consultations).orderBy(desc(consultations.createdAt));
        return results;
      }),
  }),
});

export type AppRouter = typeof appRouter;
