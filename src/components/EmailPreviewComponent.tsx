"use client";

import React from "react";
import { EmailPreview } from "@/types";

interface EmailPreviewProps {
  preview: EmailPreview;
}

export default function EmailPreviewComponent({ preview }: EmailPreviewProps) {
  const getLayoutClass = () => {
    switch (preview.style.layout) {
      case "centered":
        return "text-center";
      case "minimal":
        return "text-left max-w-md mx-auto";
      default:
        return "text-left";
    }
  };

  const getHeaderStyle = () => {
    switch (preview.style.headerStyle) {
      case "image":
        return "bg-cover bg-center h-32";
      case "gradient":
        return `bg-gradient-to-r from-[${preview.style.accentColor}] to-[${preview.style.backgroundColor}]`;
      default:
        return "";
    }
  };

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
      <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          <span className="font-medium">收件人：</span>
          {preview.recipientEmail || "未设置"}
        </div>
      </div>

      <div
        className={`p-6 ${getLayoutClass()}`}
        style={{ backgroundColor: preview.style.backgroundColor }}
      >
        {preview.style.headerStyle !== "default" && (
          <div className={`${getHeaderStyle()} mb-6 overflow-hidden rounded-lg`}></div>
        )}

        <h1
          className="mb-4 text-2xl font-bold"
          style={{
            fontFamily: preview.style.fontFamily,
            color: preview.style.textColor,
          }}
        >
          {preview.subject || "邮件主题"}
        </h1>

        <div
          className="mb-6 whitespace-pre-wrap leading-relaxed"
          style={{
            fontFamily: preview.style.fontFamily,
            fontSize: `${preview.style.fontSize}px`,
            color: preview.style.textColor,
          }}
        >
          {preview.body || "邮件内容将在这里显示..."}
        </div>

        {preview.photos.length > 0 && (
          <div className="mb-6 grid grid-cols-2 gap-4">
            {preview.photos.map((photo: string, index: number) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={index}
                src={photo}
                alt={`附件 ${index + 1}`}
                className="h-32 w-full rounded-lg object-cover"
              />
            ))}
          </div>
        )}

        {preview.scheduledAt && (
          <div className="mt-4 border-t border-gray-200 pt-4 text-sm text-gray-500">
            预定发送时间：{new Date(preview.scheduledAt).toLocaleString("zh-CN")}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 px-4 py-3">
        <span className="text-xs text-gray-500">预览模式 - 实际效果可能因收件人邮箱客户端而异</span>
        <div className="flex space-x-2">
          <button className="rounded bg-gray-200 px-3 py-1 text-sm text-gray-700 transition-colors hover:bg-gray-300">
            全屏预览
          </button>
          <button className="bg-rose-gold hover:bg-wine rounded px-3 py-1 text-sm text-white transition-colors">
            发送测试邮件
          </button>
        </div>
      </div>
    </div>
  );
}
