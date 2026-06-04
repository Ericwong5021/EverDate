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
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          <span className="font-medium">收件人：</span>
          {preview.recipientEmail || "未设置"}
        </div>
      </div>

      <div className={`p-6 ${getLayoutClass()}`} style={{ backgroundColor: preview.style.backgroundColor }}>
        {preview.style.headerStyle !== "default" && (
          <div className={`${getHeaderStyle()} mb-6 rounded-lg overflow-hidden`}></div>
        )}

        <h1
          className="text-2xl font-bold mb-4"
          style={{
            fontFamily: preview.style.fontFamily,
            color: preview.style.textColor,
          }}
        >
          {preview.subject || "邮件主题"}
        </h1>

        <div
          className="whitespace-pre-wrap leading-relaxed mb-6"
          style={{
            fontFamily: preview.style.fontFamily,
            fontSize: `${preview.style.fontSize}px`,
            color: preview.style.textColor,
          }}
        >
          {preview.body || "邮件内容将在这里显示..."}
        </div>

        {preview.photos.length > 0 && (
          <div className="grid grid-cols-2 gap-4 mb-6">
            {preview.photos.map((photo, index) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={index}
                src={photo}
                alt={`附件 ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg"
              />
            ))}
          </div>
        )}

        {preview.scheduledAt && (
          <div className="text-sm text-gray-500 mt-4 pt-4 border-t border-gray-200">
            预定发送时间：{new Date(preview.scheduledAt).toLocaleString("zh-CN")}
          </div>
        )}
      </div>

      <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 flex justify-between items-center">
        <span className="text-xs text-gray-500">
          预览模式 - 实际效果可能因收件人邮箱客户端而异
        </span>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
            全屏预览
          </button>
          <button className="px-3 py-1 text-sm bg-rose-gold text-white rounded hover:bg-wine transition-colors">
            发送测试邮件
          </button>
        </div>
      </div>
    </div>
  );
}
