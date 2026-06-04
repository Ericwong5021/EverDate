"use client";

import React from "react";
import { EmailStyle, FONT_OPTIONS, LAYOUT_OPTIONS, COLOR_OPTIONS } from "@/types";

interface StyleEditorProps {
  style: EmailStyle;
  onStyleChange: (style: EmailStyle) => void;
}

export default function StyleEditorComponent({ style, onStyleChange }: StyleEditorProps) {
  const handleFontChange = (font: string) => {
    onStyleChange({ ...style, fontFamily: font });
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onStyleChange({ ...style, fontSize: parseInt(e.target.value) });
  };

  const handleColorChange = (color: string) => {
    onStyleChange({ ...style, textColor: color });
  };

  const handleBackgroundColorChange = (color: string) => {
    onStyleChange({ ...style, backgroundColor: color });
  };

  const handleAccentColorChange = (color: string) => {
    onStyleChange({ ...style, accentColor: color });
  };

  const handleLayoutChange = (layout: "standard" | "centered" | "minimal") => {
    onStyleChange({ ...style, layout });
  };

  const handleHeaderStyleChange = (headerStyle: "default" | "image" | "gradient") => {
    onStyleChange({ ...style, headerStyle });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">字体样式</label>
        <div className="flex flex-wrap gap-2">
          {FONT_OPTIONS.map((font) => (
            <button
              key={font.value}
              onClick={() => handleFontChange(font.value)}
              className={`rounded-md border px-3 py-1 text-sm transition-colors ${
                style.fontFamily === font.value
                  ? "border-rose-gold bg-rose-gold text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:border-rose-gold"
              }`}
              style={{ fontFamily: font.value }}
            >
              {font.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          字体大小：{style.fontSize}px
        </label>
        <input
          type="range"
          min="12"
          max="24"
          value={style.fontSize}
          onChange={handleFontSizeChange}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-rose-gold"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">文字颜色</label>
        <div className="flex flex-wrap gap-2">
          {COLOR_OPTIONS.map((color) => (
            <button
              key={color.value}
              onClick={() => handleColorChange(color.value)}
              className={`h-8 w-8 rounded-full border-2 transition-transform hover:scale-110 ${
                style.textColor === color.value
                  ? "border-gray-800 ring-2 ring-gray-400 ring-offset-2"
                  : "border-gray-200"
              }`}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">背景颜色</label>
        <div className="flex flex-wrap gap-2">
          {COLOR_OPTIONS.map((color) => (
            <button
              key={color.value}
              onClick={() => handleBackgroundColorChange(color.value)}
              className={`h-8 w-8 rounded-full border-2 transition-transform hover:scale-110 ${
                style.backgroundColor === color.value
                  ? "border-gray-800 ring-2 ring-gray-400 ring-offset-2"
                  : "border-gray-200"
              }`}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
          <button
            onClick={() => handleBackgroundColorChange("#FFFFFF")}
            className={`h-8 w-8 rounded-full border-2 transition-transform hover:scale-110 ${
              style.backgroundColor === "#FFFFFF"
                ? "border-gray-800 ring-2 ring-gray-400 ring-offset-2"
                : "border-gray-200"
            }`}
            style={{ backgroundColor: "#FFFFFF" }}
            title="白色"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">强调色</label>
        <div className="flex flex-wrap gap-2">
          {COLOR_OPTIONS.map((color) => (
            <button
              key={color.value}
              onClick={() => handleAccentColorChange(color.value)}
              className={`h-8 w-8 rounded-full border-2 transition-transform hover:scale-110 ${
                style.accentColor === color.value
                  ? "border-gray-800 ring-2 ring-gray-400 ring-offset-2"
                  : "border-gray-200"
              }`}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">布局样式</label>
        <div className="grid grid-cols-3 gap-2">
          {LAYOUT_OPTIONS.map((layout) => (
            <button
              key={layout.id}
              onClick={() => handleLayoutChange(layout.id as "standard" | "centered" | "minimal")}
              className={`rounded-lg border p-3 text-sm transition-colors ${
                style.layout === layout.id
                  ? "border-rose-gold bg-rose-gold text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:border-rose-gold"
              }`}
            >
              <div className="font-medium">{layout.name}</div>
              <div className="mt-1 text-xs opacity-75">{layout.description}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">头部样式</label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { id: "default", name: "默认", description: "简洁头部" },
            { id: "image", name: "图片", description: "图片背景" },
            { id: "gradient", name: "渐变", description: "渐变背景" },
          ].map((header) => (
            <button
              key={header.id}
              onClick={() => handleHeaderStyleChange(header.id as "default" | "image" | "gradient")}
              className={`rounded-lg border p-3 text-sm transition-colors ${
                style.headerStyle === header.id
                  ? "border-rose-gold bg-rose-gold text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:border-rose-gold"
              }`}
            >
              <div className="font-medium">{header.name}</div>
              <div className="mt-1 text-xs opacity-75">{header.description}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
