"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditCommemorative() {
  const router = useRouter();
  const params = useParams();
  const [form, setForm] = useState({
    title: "",
    recipientName: "",
    recipientEmail: "",
    month: 1,
    day: 1,
    year: "",
    subject: "",
    body: "",
    photoUrl: "",
    enabled: true,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch(`/api/commemoratives/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setForm({
          title: data.title || "",
          recipientName: data.recipientName || "",
          recipientEmail: data.recipientEmail || "",
          month: data.month || 1,
          day: data.day || 1,
          year: data.year?.toString() || "",
          subject: data.subject || "",
          body: data.body || "",
          photoUrl: data.photoUrl || "",
          enabled: data.enabled,
        });
        setLoading(false);
      });
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const res = await fetch(`/api/commemoratives/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        year: form.year ? parseInt(form.year) : null,
      }),
    });

    if (res.ok) {
      router.push("/dashboard");
    } else {
      alert("更新失败");
    }
    setSaving(false);
  };

  if (loading) {
    return <div className="py-12 text-center text-gray-500">加载中...</div>;
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-6 text-2xl font-bold">编辑纪念日</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">纪念日名称 *</label>
          <input
            type="text"
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-red-400"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">收件人姓名</label>
            <input
              type="text"
              value={form.recipientName}
              onChange={(e) => setForm({ ...form, recipientName: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">收件人邮箱 *</label>
            <input
              type="email"
              required
              value={form.recipientEmail}
              onChange={(e) => setForm({ ...form, recipientEmail: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-red-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">月份</label>
            <select
              value={form.month}
              onChange={(e) => setForm({ ...form, month: parseInt(e.target.value) })}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-red-400"
            >
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}月
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">日期</label>
            <select
              value={form.day}
              onChange={(e) => setForm({ ...form, day: parseInt(e.target.value) })}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-red-400"
            >
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}日
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">起始年份</label>
            <input
              type="number"
              value={form.year}
              onChange={(e) => setForm({ ...form, year: e.target.value })}
              min="1900"
              max="2100"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-red-400"
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">邮件主题 *</label>
          <input
            type="text"
            required
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-red-400"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">邮件正文 *</label>
          <textarea
            required
            rows={6}
            value={form.body}
            onChange={(e) => setForm({ ...form, body: e.target.value })}
            className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-red-400"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">照片 URL</label>
          <input
            type="url"
            value={form.photoUrl}
            onChange={(e) => setForm({ ...form, photoUrl: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-red-400"
          />
          {form.photoUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={form.photoUrl} alt="预览" className="mt-2 max-h-40 rounded-lg object-cover" />
          )}
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="rounded-lg bg-red-500 px-6 py-2 text-white transition-colors hover:bg-red-600 disabled:opacity-50"
          >
            {saving ? "保存中..." : "保存修改"}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="rounded-lg border border-gray-300 px-6 py-2 text-gray-600 transition-colors hover:border-gray-400"
          >
            取消
          </button>
        </div>
      </form>
    </div>
  );
}
