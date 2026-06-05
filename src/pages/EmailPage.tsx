import { useState } from "react";

interface EmailForm {
  recipientEmail: string;
  subject: string;
  body: string;
  scheduledAt: string;
}

interface EmailRecord extends EmailForm {
  id: string;
  status: "draft" | "pending" | "sending" | "sent" | "failed";
  retryCount: number;
  sentAt?: string;
  createdAt: string;
}

const API_BASE = "http://localhost:3001/api";

export default function EmailPage() {
  const [form, setForm] = useState<EmailForm>({
    recipientEmail: "",
    subject: "",
    body: "",
    scheduledAt: "",
  });
  const [emails, setEmails] = useState<EmailRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const showMessage = (type: "success" | "error", text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleCreate = async () => {
    if (!form.recipientEmail || !form.subject) {
      showMessage("error", "请填写收件人和邮件主题");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/emails`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("创建失败");
      const email = await res.json();
      setEmails((prev) => [email, ...prev]);
      setForm({ recipientEmail: "", subject: "", body: "", scheduledAt: "" });
      showMessage("success", "邮件已创建");
    } catch {
      showMessage("error", "创建邮件失败，请检查后端服务");
    } finally {
      setLoading(false);
    }
  };

  const handleSchedule = async (id: string) => {
    const email = emails.find((e) => e.id === id);
    if (!email?.scheduledAt) {
      showMessage("error", "请先设置发送时间");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/emails/${id}/schedule`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sendAt: email.scheduledAt }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "调度失败");
      }
      const data = await res.json();
      setEmails((prev) => prev.map((e) => (e.id === id ? data.email : e)));
      showMessage("success", "邮件已调度发送");
    } catch (err) {
      showMessage("error", err instanceof Error ? err.message : "调度失败");
    } finally {
      setLoading(false);
    }
  };

  const handleTestSend = async (id: string) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/emails/${id}/test-send`, {
        method: "POST",
      });
      const data = await res.json();
      if (data.status === "sent") {
        setEmails((prev) =>
          prev.map((e) =>
            e.id === id ? { ...e, status: "sent" as const, sentAt: new Date().toISOString() } : e,
          ),
        );
        showMessage("success", "测试邮件发送成功！");
      } else {
        showMessage("error", `发送失败: ${data.error || "未知错误"}`);
      }
    } catch {
      showMessage("error", "发送失败，请检查后端服务");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (id: string) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/emails/${id}/cancel`, { method: "POST" });
      if (!res.ok) throw new Error("取消失败");
      const data = await res.json();
      setEmails((prev) => prev.map((e) => (e.id === id ? data.email : e)));
      showMessage("success", "邮件已取消");
    } catch {
      showMessage("error", "取消失败");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/emails/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("删除失败");
      setEmails((prev) => prev.filter((e) => e.id !== id));
      showMessage("success", "邮件已删除");
    } catch {
      showMessage("error", "删除失败");
    } finally {
      setLoading(false);
    }
  };

  const loadEmails = async () => {
    try {
      const res = await fetch(`${API_BASE}/emails`);
      const data = await res.json();
      setEmails(data);
    } catch {
      showMessage("error", "加载邮件列表失败");
    }
  };

  const statusColor = (status: string) => {
    switch (status) {
      case "sent":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "sending":
        return "bg-blue-100 text-blue-800";
      case "failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const statusLabel = (status: string) => {
    switch (status) {
      case "draft":
        return "草稿";
      case "pending":
        return "待发送";
      case "sending":
        return "发送中";
      case "sent":
        return "已发送";
      case "failed":
        return "发送失败";
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-3xl font-bold text-[#722F37]">📧 定时邮件发送</h1>
        <p className="mb-8 text-gray-600">创建邮件并设置定时发送，在纪念日当天自动送达</p>

        {message && (
          <div
            className={`mb-4 rounded-lg p-3 ${message.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}
          >
            {message.text}
          </div>
        )}

        {/* Create Email Form */}
        <div className="mb-8 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">创建新邮件</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">收件人邮箱 *</label>
              <input
                type="email"
                value={form.recipientEmail}
                onChange={(e) => setForm({ ...form, recipientEmail: e.target.value })}
                placeholder="partner@example.com"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-[#722F37]"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">邮件主题 *</label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="💕 纪念日快乐"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-[#722F37]"
              />
            </div>
            <div className="md:col-span-2">
              <label className="mb-1 block text-sm font-medium text-gray-700">邮件正文</label>
              <textarea
                value={form.body}
                onChange={(e) => setForm({ ...form, body: e.target.value })}
                placeholder="亲爱的，今天是我们的纪念日..."
                rows={4}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-[#722F37]"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">定时发送</label>
              <input
                type="datetime-local"
                value={form.scheduledAt}
                onChange={(e) => setForm({ ...form, scheduledAt: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-[#722F37]"
              />
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <button
              onClick={handleCreate}
              disabled={loading}
              className="rounded-lg bg-[#722F37] px-6 py-2 text-white hover:bg-[#5a2530] disabled:opacity-50"
            >
              {loading ? "处理中..." : "创建邮件"}
            </button>
            <button
              onClick={loadEmails}
              className="rounded-lg border border-gray-300 px-6 py-2 text-gray-700 hover:bg-gray-50"
            >
              刷新列表
            </button>
          </div>
        </div>

        {/* Email List */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">邮件列表</h2>
          {emails.length === 0 ? (
            <p className="py-8 text-center text-gray-500">暂无邮件，创建一封试试吧</p>
          ) : (
            <div className="space-y-4">
              {emails.map((email) => (
                <div key={email.id} className="rounded-lg border border-gray-200 p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{email.subject}</h3>
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusColor(email.status)}`}
                        >
                          {statusLabel(email.status)}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">收件人: {email.recipientEmail}</p>
                      {email.body && (
                        <p className="mt-1 line-clamp-2 text-sm text-gray-600">{email.body}</p>
                      )}
                      <div className="mt-2 flex gap-4 text-xs text-gray-400">
                        <span>创建: {new Date(email.createdAt).toLocaleString("zh-CN")}</span>
                        {email.scheduledAt && (
                          <span>计划: {new Date(email.scheduledAt).toLocaleString("zh-CN")}</span>
                        )}
                        {email.sentAt && (
                          <span>已发送: {new Date(email.sentAt).toLocaleString("zh-CN")}</span>
                        )}
                        {email.retryCount > 0 && <span>重试: {email.retryCount}次</span>}
                      </div>
                    </div>
                    <div className="ml-4 flex gap-2">
                      {email.status === "draft" && email.scheduledAt && (
                        <button
                          onClick={() => handleSchedule(email.id)}
                          disabled={loading}
                          className="rounded bg-yellow-500 px-3 py-1 text-xs text-white hover:bg-yellow-600"
                        >
                          调度
                        </button>
                      )}
                      {email.status === "draft" && (
                        <button
                          onClick={() => handleTestSend(email.id)}
                          disabled={loading}
                          className="rounded bg-blue-500 px-3 py-1 text-xs text-white hover:bg-blue-600"
                        >
                          测试发送
                        </button>
                      )}
                      {email.status === "pending" && (
                        <button
                          onClick={() => handleCancel(email.id)}
                          disabled={loading}
                          className="rounded bg-orange-500 px-3 py-1 text-xs text-white hover:bg-orange-600"
                        >
                          取消
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(email.id)}
                        disabled={loading}
                        className="rounded bg-red-500 px-3 py-1 text-xs text-white hover:bg-red-600"
                      >
                        删除
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
