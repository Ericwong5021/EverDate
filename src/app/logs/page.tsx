"use client";

import { useEffect, useState } from "react";

interface EmailLogEntry {
  id: string;
  status: string;
  scheduledFor: string;
  sentAt: string | null;
  errorMessage: string | null;
  retryCount: number;
  commemorative: {
    title: string;
    recipientEmail: string;
  };
}

export default function LogsPage() {
  const [logs, setLogs] = useState<EmailLogEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/email-logs")
      .then((res) => res.json())
      .then((data) => {
        setLogs(data);
        setLoading(false);
      });
  }, []);

  const statusStyles: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-800",
    sending: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    failed: "bg-red-100 text-red-800",
  };

  const statusLabels: Record<string, string> = {
    pending: "待发送",
    sending: "发送中",
    success: "已送达",
    failed: "发送失败",
  };

  if (loading) {
    return <div className="text-center py-12 text-gray-500">加载中...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">发送记录</h1>

      {logs.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg">暂无发送记录</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">
                  纪念日
                </th>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">
                  收件人
                </th>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">
                  计划时间
                </th>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">
                  发送时间
                </th>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">
                  状态
                </th>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">
                  重试
                </th>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">
                  错误信息
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm">
                    {log.commemorative.title}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {log.commemorative.recipientEmail}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {new Date(log.scheduledFor).toLocaleDateString("zh-CN")}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {log.sentAt
                      ? new Date(log.sentAt).toLocaleString("zh-CN")
                      : "-"}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${statusStyles[log.status] || "bg-gray-100 text-gray-800"}`}
                    >
                      {statusLabels[log.status] || log.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {log.retryCount}
                  </td>
                  <td className="px-4 py-3 text-sm text-red-500 max-w-xs truncate">
                    {log.errorMessage || "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
