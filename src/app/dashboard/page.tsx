"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface EmailLog {
  id: string;
  status: string;
  scheduledFor: string;
  sentAt: string | null;
  errorMessage: string | null;
}

interface Commemorative {
  id: string;
  title: string;
  recipientName: string;
  recipientEmail: string;
  month: number;
  day: number;
  year: number | null;
  subject: string;
  body: string;
  photoUrl: string | null;
  enabled: boolean;
  createdAt: string;
  emailLogs: EmailLog[];
}

export default function Dashboard() {
  const [items, setItems] = useState<Commemorative[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/commemoratives")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("确定要删除这个纪念日吗？")) return;
    await fetch(`/api/commemoratives/${id}`, { method: "DELETE" });
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleToggle = async (id: string, enabled: boolean) => {
    await fetch(`/api/commemoratives/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ enabled: !enabled }),
    });
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, enabled: !enabled } : item
      )
    );
  };

  const handleTestSend = async (id: string) => {
    const res = await fetch(`/api/commemoratives/${id}/test-send`, {
      method: "POST",
    });
    const result = await res.json();
    alert(result.success ? "测试邮件发送成功！" : `发送失败: ${result.error}`);
  };

  const getStatusBadge = (logs: EmailLog[]) => {
    const latest = logs[0];
    if (!latest) return <span className="text-gray-400 text-xs">未发送</span>;

    const styles: Record<string, string> = {
      pending: "bg-yellow-100 text-yellow-800",
      sending: "bg-blue-100 text-blue-800",
      success: "bg-green-100 text-green-800",
      failed: "bg-red-100 text-red-800",
    };

    return (
      <span
        className={`text-xs px-2 py-1 rounded-full ${styles[latest.status] || "bg-gray-100 text-gray-800"}`}
      >
        {latest.status === "pending"
          ? "待发送"
          : latest.status === "sending"
            ? "发送中"
            : latest.status === "success"
              ? "已送达"
              : "发送失败"}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="text-center py-12 text-gray-500">加载中...</div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">纪念日管理</h1>
        <Link
          href="/dashboard/new"
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm"
        >
          + 新建纪念日
        </Link>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg mb-2">还没有纪念日</p>
          <p className="text-sm">点击右上角按钮创建你的第一个纪念日</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    {getStatusBadge(item.emailLogs)}
                    {!item.enabled && (
                      <span className="text-xs text-gray-400">已禁用</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mb-1">
                    收件人: {item.recipientName} &lt;{item.recipientEmail}&gt;
                  </p>
                  <p className="text-sm text-gray-500">
                    日期: 每年 {item.month}月{item.day}日
                    {item.year ? ` (${item.year}年起)` : ""}
                  </p>
                  <p className="text-sm text-gray-400 mt-1 line-clamp-1">
                    主题: {item.subject}
                  </p>
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => handleTestSend(item.id)}
                    className="text-xs text-blue-500 hover:text-blue-700 px-2 py-1 border border-blue-200 rounded"
                  >
                    测试发送
                  </button>
                  <button
                    onClick={() => handleToggle(item.id, item.enabled)}
                    className="text-xs text-gray-500 hover:text-gray-700 px-2 py-1 border border-gray-200 rounded"
                  >
                    {item.enabled ? "禁用" : "启用"}
                  </button>
                  <Link
                    href={`/dashboard/edit/${item.id}`}
                    className="text-xs text-gray-500 hover:text-gray-700 px-2 py-1 border border-gray-200 rounded"
                  >
                    编辑
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-xs text-red-500 hover:text-red-700 px-2 py-1 border border-red-200 rounded"
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
  );
}
