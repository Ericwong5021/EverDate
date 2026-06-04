"use client";

import React from "react";
import { EmailStyle, FONT_OPTIONS, LAYOUT_OPTIONS, COLOR_OPTIONS } from "@/types";

interface StyleEditorProps {
  style: EmailStyle;
  onStyleChange: (style: EmailStyle) => void;
}

export default function StyleEditorComponent({
  style,
  onStyleChange,
}: StyleEditorProps) {
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

  const handleHeaderStyleChange = (
    headerStyle: "default" | "image" | "gradient"
  ) => {
    onStyleChange({ ...style, headerStyle });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          字体样式
        </label>
        <div className="flex flex-wrap gap-2">
          {FONT_OPTIONS.map((font) => (
            <button
              key={font.value}
              onClick={() => handleFontChange(font.value)}
              className={`px-3 py-1 text-sm rounded-md border transition-colors ${
                style.fontFamily === font.value
                  ? "bg-rose-gold text-white border-rose-gold"
                  : "bg-white text-gray-700 border-gray-300 hover:border-rose-gold"
              }`}
              style={{ fontFamily: font.value }}
            >
              {font.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          字体大小：{style.fontSize}px
        </label>
        <input
          type="range"
          min="12"
          max="24"
          value={style.fontSize}
          onChange={handleFontSizeChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-rose-gold"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          文字颜色
        </label>
        <div className="flex flex-wrap gap-2">
          {COLOR_OPTIONS.map((color) => (
            <button
              key={color.value}
              onClick={() => handleColorChange(color.value)}
              className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${
                style.textColor === color.value
                  ? "border-gray-800 ring-2 ring-offset-2 ring-gray-400"
                  : "border-gray-200"
              }`}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          背景颜色
        </label>
        <div className="flex flex-wrap gap-2">
          {COLOR_OPTIONS.map((color) => (
            <button
              key={color.value}
              onClick={() => handleBackgroundColorChange(color.value)}
              className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${
                style.backgroundColor === color.value
                  ? "border-gray-800 ring-2 ring-offset-2 ring-gray-400"
                  : "border-gray-200"
              }`}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
          <button
            onClick={() => handleBackgroundColorChange("#FFFFFF")}
            className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${
              style.backgroundColor === "#FFFFFF"
                ? "border-gray-800 ring-2 ring-offset-2 ring-gray-400"
                : "border-gray-200"
            }`}
            style={{ backgroundColor: "#FFFFFF" }}
            title="白色"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          强调色
        </label>
        <div className="flex flex-wrap gap-2">
          {COLOR_OPTIONS.map((color) => (
            <button
              key={color.value}
              onClick={() => handleAccentColorChange(color.value)}
              className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${
                style.accentColor === color.value
                  ? "border-gray-800 ring-2 ring-offset-2 ring-gray-400"
                  : "border-gray-200"
              }`}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          布局样式
        </label>
        <div className="grid grid-cols-3 gap-2">
          {LAYOUT_OPTIONS.map((layout) => (
            <button
              key={layout.id}
              onClick={() =>
                handleLayoutChange(layout.id as "standard" | "centered" | "minimal")
              }
              className={`p-3 text-sm rounded-lg border transition-colors ${
                style.layout === layout.id
                  ? "bg-rose-gold text-white border-rose-gold"
                  : "bg-white text-gray-700 border-gray-300 hover:border-rose-gold"
              }`}
            >
              <div className="font-medium">{layout.name}</div>
              <div className="text-xs mt-1 opacity-75">{layout.description}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          头部样式
        </label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { id: "default", name: "默认", description: "简洁头部" },
            { id: "image", name: "图片", description: "图片背景" },
            { id: "gradient", name: "渐变", description: "渐变背景" },
          ].map((header) => (
            <button
              key={header.id}
              onClick={() =>
                handleHeaderStyleChange(
                  header.id as "default" | "image" | "gradient"
                )
              }
              className={`p-3 text-sm rounded-lg border transition-colors ${
                style.headerStyle === header.id
                  ? "bg-rose-gold text-white border-rose-gold"
                  : "bg-white text-gray-700 border-gray-300 hover:border-rose-gold"
              }`}
            >
              <div className="font-medium">{header.name}</div>
              <div className="text-xs mt-1 opacity-75">{header.description}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
