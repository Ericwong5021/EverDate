"use client";

import React, { useState, useEffect } from "react";
import { EmailEditor, EmailStyle, EmailPreview } from "@/types";
import { EMAIL_TEMPLATES } from "@/data/emailTemplates";
import EmailEditorComponent from "@/components/EmailEditorComponent";
import EmailPreviewComponent from "@/components/EmailPreviewComponent";
import StyleEditorComponent from "@/components/StyleEditorComponent";
import SendTimePicker from "@/components/SendTimePicker";
import RecipientEmailInput from "@/components/RecipientEmailInput";
import TemplateSelector from "@/components/TemplateSelector";

const DEFAULT_STYLE: EmailStyle = {
  fontFamily: "inherit",
  fontSize: 16,
  textColor: "#333333",
  backgroundColor: "#FFFFFF",
  accentColor: "#722F37",
  layout: "standard",
  headerStyle: "default",
};

export default function EmailPage() {
  const [editor, setEditor] = useState<EmailEditor>({
    subject: "",
    body: "",
    photos: [],
    scheduledAt: "",
    recipientEmail: "",
    templateId: "classic",
    style: DEFAULT_STYLE,
  });

  const [activeTab, setActiveTab] = useState<"editor" | "style" | "time" | "recipient">("editor");

  const handleEditorChange = (newEditor: EmailEditor) => {
    setEditor(newEditor);
  };

  const handleStyleChange = (style: EmailStyle) => {
    setEditor({ ...editor, style });
  };

  const handleTimeChange = (time: string) => {
    setEditor({ ...editor, scheduledAt: time });
  };

  const handleEmailChange = (email: string) => {
    setEditor({ ...editor, recipientEmail: email });
  };

  const handleTemplateSelect = (template: (typeof EMAIL_TEMPLATES)[0]) => {
    setEditor({
      ...editor,
      templateId: template.id,
      subject: template.subject,
      body: template.body,
    });
  };

  const handleSave = () => {
    console.log("保存邮件配置:", editor);
    alert("邮件配置已保存！");
  };

  const handleSendTest = () => {
    if (!editor.recipientEmail) {
      alert("请先设置收件人邮箱");
      return;
    }
    console.log("发送测试邮件:", editor);
    alert("测试邮件已发送！");
  };

  const previewData: EmailPreview = {
    subject: editor.subject,
    body: editor.body,
    photos: editor.photos,
    recipientEmail: editor.recipientEmail,
    scheduledAt: editor.scheduledAt,
    style: editor.style,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-wine text-2xl font-bold">邮件预览与编辑</h1>
          <p className="mt-1 text-sm text-gray-500">自定义邮件内容，预览最终效果，设置发送时间</p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-6 flex space-x-1 border-b border-gray-200">
                {[
                  { id: "editor", name: "邮件内容" },
                  { id: "style", name: "样式设置" },
                  { id: "time", name: "发送时间" },
                  { id: "recipient", name: "收件人" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`border-b-2 px-4 py-2 text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? "border-rose-gold text-rose-gold"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>

              {activeTab === "editor" && (
                <div className="space-y-6">
                  <TemplateSelector
                    templates={EMAIL_TEMPLATES}
                    selectedTemplateId={editor.templateId}
                    onTemplateSelect={handleTemplateSelect}
                  />
                  <EmailEditorComponent
                    editor={editor}
                    onEditorChange={handleEditorChange}
                    onStyleChange={handleStyleChange}
                  />
                </div>
              )}

              {activeTab === "style" && (
                <StyleEditorComponent style={editor.style} onStyleChange={handleStyleChange} />
              )}

              {activeTab === "time" && (
                <SendTimePicker scheduledAt={editor.scheduledAt} onTimeChange={handleTimeChange} />
              )}

              {activeTab === "recipient" && (
                <RecipientEmailInput
                  email={editor.recipientEmail}
                  onEmailChange={handleEmailChange}
                />
              )}
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handleSave}
                className="flex-1 rounded-lg bg-gray-200 px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-300"
              >
                保存配置
              </button>
              <button
                onClick={handleSendTest}
                className="bg-rose-gold hover:bg-wine flex-1 rounded-lg px-4 py-3 font-medium text-white transition-colors"
              >
                发送测试邮件
              </button>
            </div>
          </div>

          <div className="lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-gray-800">实时预览</h2>
              <EmailPreviewComponent preview={previewData} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
