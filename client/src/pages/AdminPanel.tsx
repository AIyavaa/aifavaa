import { useState } from 'react';
import { trpc } from '@/lib/trpc';
import { useAuth } from '@/_core/hooks/useAuth';
import { getLoginUrl } from '@/const';

type RequestStatus = 'pending' | 'approved' | 'rejected';

const STATUS_LABEL: Record<RequestStatus, { label: string; color: string }> = {
  pending: { label: '待审核', color: 'text-amber-400 bg-amber-400/10 border-amber-400/30' },
  approved: { label: '已通过', color: 'text-green-400 bg-green-400/10 border-green-400/30' },
  rejected: { label: '已拒绝', color: 'text-red-400 bg-red-400/10 border-red-400/30' },
};

export default function AdminPanel() {
  const { user, loading } = useAuth();
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [generatedLinks, setGeneratedLinks] = useState<Record<number, string>>({});

  const { data: requests, isLoading, refetch } = trpc.access.list.useQuery(undefined, {
    enabled: !!user && user.role === 'admin',
  });

  const approveMutation = trpc.access.approve.useMutation({
    onSuccess: (data, variables) => {
      const link = `${window.location.origin}/?unlock=${data.token}`;
      setGeneratedLinks(prev => ({ ...prev, [variables.id]: link }));
      refetch();
    },
  });

  const rejectMutation = trpc.access.reject.useMutation({
    onSuccess: () => refetch(),
  });

  const copyLink = (id: number, link: string) => {
    navigator.clipboard.writeText(link);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-slate-400 text-sm">加载中...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400 mb-4">请先登录</p>
          <a
            href={getLoginUrl()}
            className="inline-block rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2.5 text-sm font-bold text-white hover:opacity-90 transition"
          >
            登录
          </a>
        </div>
      </div>
    );
  }

  if (user.role !== 'admin') {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl mb-2">🔒</p>
          <p className="text-slate-400 text-sm">需要管理员权限</p>
          <p className="text-slate-600 text-xs mt-2">当前账号：{user.name || user.email}</p>
        </div>
      </div>
    );
  }

  const pending = requests?.filter(r => r.status === 'pending') ?? [];
  const reviewed = requests?.filter(r => r.status !== 'pending') ?? [];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="border-b border-white/8 bg-slate-900/80 backdrop-blur px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="/" className="text-slate-400 hover:text-white transition text-sm">← 返回网站</a>
          <span className="text-slate-700">|</span>
          <h1 className="text-white font-bold">访问申请管理</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500">{user.name || user.email}</span>
          <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-2 py-0.5 text-xs text-blue-400">Admin</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { label: '待审核', value: pending.length, color: 'text-amber-400' },
            { label: '已通过', value: requests?.filter(r => r.status === 'approved').length ?? 0, color: 'text-green-400' },
            { label: '已拒绝', value: requests?.filter(r => r.status === 'rejected').length ?? 0, color: 'text-red-400' },
          ].map(stat => (
            <div key={stat.label} className="rounded-xl border border-white/8 bg-white/4 p-5 text-center">
              <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Pending requests */}
        <section className="mb-10">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            待审核 ({pending.length})
          </h2>
          {isLoading ? (
            <div className="text-slate-500 text-sm py-8 text-center">加载中...</div>
          ) : pending.length === 0 ? (
            <div className="rounded-xl border border-white/8 bg-white/2 py-10 text-center text-slate-500 text-sm">
              暂无待审核申请
            </div>
          ) : (
            <div className="space-y-3">
              {pending.map(req => (
                <RequestCard
                  key={req.id}
                  req={req}
                  generatedLink={generatedLinks[req.id]}
                  copiedId={copiedId}
                  onApprove={() => approveMutation.mutate({ id: req.id })}
                  onReject={() => rejectMutation.mutate({ id: req.id })}
                  onCopy={(link) => copyLink(req.id, link)}
                  approving={approveMutation.isPending && approveMutation.variables?.id === req.id}
                  rejecting={rejectMutation.isPending && rejectMutation.variables?.id === req.id}
                />
              ))}
            </div>
          )}
        </section>

        {/* Reviewed requests */}
        {reviewed.length > 0 && (
          <section>
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
              已审核 ({reviewed.length})
            </h2>
            <div className="space-y-3">
              {reviewed.map(req => (
                <RequestCard
                  key={req.id}
                  req={req}
                  generatedLink={generatedLinks[req.id]}
                  copiedId={copiedId}
                  onApprove={() => approveMutation.mutate({ id: req.id })}
                  onReject={() => rejectMutation.mutate({ id: req.id })}
                  onCopy={(link) => copyLink(req.id, link)}
                  approving={false}
                  rejecting={false}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

interface RequestCardProps {
  req: {
    id: number;
    name: string;
    email: string;
    company: string | null;
    status: string;
    unlockToken: string | null;
    createdAt: Date;
    reviewedAt: Date | null;
  };
  generatedLink: string | undefined;
  copiedId: number | null;
  onApprove: () => void;
  onReject: () => void;
  onCopy: (link: string) => void;
  approving: boolean;
  rejecting: boolean;
}

function RequestCard({ req, generatedLink, copiedId, onApprove, onReject, onCopy, approving, rejecting }: RequestCardProps) {
  const statusInfo = STATUS_LABEL[req.status as RequestStatus] ?? STATUS_LABEL.pending;
  const unlockLink = generatedLink || (req.unlockToken ? `${window.location.origin}/?unlock=${req.unlockToken}` : null);

  return (
    <div className="rounded-xl border border-white/8 bg-white/3 p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-white">{req.name}</span>
            <span className={`rounded-full border px-2 py-0.5 text-xs ${statusInfo.color}`}>
              {statusInfo.label}
            </span>
          </div>
          <p className="text-sm text-slate-400">{req.email}</p>
          {req.company && <p className="text-xs text-slate-500 mt-0.5">{req.company}</p>}
          <p className="text-xs text-slate-600 mt-2">
            申请时间：{new Date(req.createdAt).toLocaleString('zh-CN')}
            {req.reviewedAt && ` · 审核时间：${new Date(req.reviewedAt).toLocaleString('zh-CN')}`}
          </p>
        </div>

        {/* Actions */}
        {req.status === 'pending' && (
          <div className="flex gap-2 shrink-0">
            <button
              onClick={onReject}
              disabled={rejecting}
              className="rounded-lg border border-red-400/30 bg-red-400/10 px-3 py-1.5 text-xs text-red-400 hover:bg-red-400/20 transition disabled:opacity-50"
            >
              {rejecting ? '...' : '拒绝'}
            </button>
            <button
              onClick={onApprove}
              disabled={approving}
              className="rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-1.5 text-xs font-bold text-white hover:opacity-90 transition disabled:opacity-50"
            >
              {approving ? '生成中...' : '通过 & 生成链接'}
            </button>
          </div>
        )}
      </div>

      {/* Unlock link */}
      {unlockLink && (
        <div className="mt-4 rounded-lg border border-green-400/20 bg-green-400/5 p-3">
          <p className="text-xs text-green-400 mb-2 font-medium">✅ 解锁链接（发送给申请人）</p>
          <div className="flex items-center gap-2">
            <code className="flex-1 text-xs text-slate-300 bg-black/30 rounded px-2 py-1.5 truncate">
              {unlockLink}
            </code>
            <button
              onClick={() => onCopy(unlockLink)}
              className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/10 transition"
            >
              {copiedId === req.id ? '已复制 ✓' : '复制'}
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            将此链接发送给申请人，他们打开后即可自动解锁全部内容。
          </p>
        </div>
      )}
    </div>
  );
}
