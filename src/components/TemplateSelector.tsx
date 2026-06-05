"use client";

import React from "react";
import { EmailTemplate } from "@/types";

interface TemplateSelectorProps {
  templates: EmailTemplate[];
  selectedTemplateId: string;
  onTemplateSelect: (template: EmailTemplate) => void;
}

export default function TemplateSelector({
  templates,
  selectedTemplateId,
  onTemplateSelect,
}: TemplateSelectorProps) {
  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">选择模板</label>
      <div className="grid grid-cols-2 gap-3">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => onTemplateSelect(template)}
            className={`rounded-lg border p-4 text-left transition-all ${
              selectedTemplateId === template.id
                ? "border-rose-gold bg-rose-gold/10 shadow-md"
                : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
            }`}
          >
            <div className="font-medium text-gray-800">{template.name}</div>
            <div className="mt-1 line-clamp-2 text-sm text-gray-500">{template.subject}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
