"use client";

import React, { useRef } from "react";
import { EmailEditor, EmailStyle } from "@/types";

interface EmailEditorProps {
  editor: EmailEditor;
  onEditorChange: (editor: EmailEditor) => void;
  onStyleChange: (style: EmailStyle) => void;
}

export default function EmailEditorComponent({
  editor,
  onEditorChange,
  onStyleChange,
}: EmailEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onEditorChange({ ...editor, subject: e.target.value });
  };

  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onEditorChange({ ...editor, body: e.target.value });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newPhotos = Array.from(files).map((file) => URL.createObjectURL(file));
      onEditorChange({ ...editor, photos: [...editor.photos, ...newPhotos] });
    }
  };

  const removePhoto = (index: number) => {
    const newPhotos = editor.photos.filter((_, i) => i !== index);
    onEditorChange({ ...editor, photos: newPhotos });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">邮件主题</label>
        <input
          type="text"
          value={editor.subject}
          onChange={handleSubjectChange}
          placeholder="输入邮件主题..."
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-rose-gold"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">邮件正文</label>
        <textarea
          value={editor.body}
          onChange={handleBodyChange}
          placeholder="输入邮件内容..."
          rows={8}
          className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-rose-gold"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">照片附件</label>
        <div className="flex flex-wrap gap-4">
          {editor.photos.map((photo, index) => (
            <div key={index} className="group relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo}
                alt={`照片 ${index + 1}`}
                className="h-24 w-24 rounded-lg border border-gray-200 object-cover"
              />
              <button
                onClick={() => removePhoto(index)}
                className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-red-500 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100"
              >
                ×
              </button>
            </div>
          ))}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex h-24 w-24 flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 text-gray-500 transition-colors hover:border-rose-gold hover:text-rose-gold"
          >
            <span className="text-2xl">+</span>
            <span className="text-xs">添加照片</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handlePhotoUpload}
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
}
