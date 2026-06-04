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
        <label className="block text-sm font-medium text-gray-700 mb-2">
          邮件主题
        </label>
        <input
          type="text"
          value={editor.subject}
          onChange={handleSubjectChange}
          placeholder="输入邮件主题..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-gold focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          邮件正文
        </label>
        <textarea
          value={editor.body}
          onChange={handleBodyChange}
          placeholder="输入邮件内容..."
          rows={8}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-gold focus:border-transparent resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          照片附件
        </label>
        <div className="flex flex-wrap gap-4">
          {editor.photos.map((photo, index) => (
            <div key={index} className="relative group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo}
                alt={`照片 ${index + 1}`}
                className="w-24 h-24 object-cover rounded-lg border border-gray-200"
              />
              <button
                onClick={() => removePhoto(index)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity"
              >
                ×
              </button>
            </div>
          ))}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500 hover:border-rose-gold hover:text-rose-gold transition-colors"
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
