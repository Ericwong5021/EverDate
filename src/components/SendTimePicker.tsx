"use client";

import React from "react";

interface SendTimePickerProps {
  scheduledAt: string;
  onTimeChange: (time: string) => void;
}

export default function SendTimePicker({
  scheduledAt,
  onTimeChange,
}: SendTimePickerProps) {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentDate = scheduledAt ? new Date(scheduledAt) : new Date();
    const newDate = new Date(e.target.value);
    currentDate.setFullYear(newDate.getFullYear(), newDate.getMonth(), newDate.getDate());
    onTimeChange(currentDate.toISOString());
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentDate = scheduledAt ? new Date(scheduledAt) : new Date();
    const [hours, minutes] = e.target.value.split(":").map(Number);
    currentDate.setHours(hours, minutes, 0, 0);
    onTimeChange(currentDate.toISOString());
  };

  const formatDate = () => {
    if (!scheduledAt) return "";
    const date = new Date(scheduledAt);
    return date.toISOString().split("T")[0];
  };

  const formatTime = () => {
    if (!scheduledAt) return "09:00";
    const date = new Date(scheduledAt);
    return `${date.getHours().toString().padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          发送日期
        </label>
        <input
          type="date"
          value={formatDate()}
          onChange={handleDateChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-gold focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          发送时间
        </label>
        <input
          type="time"
          value={formatTime()}
          onChange={handleTimeChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-gold focus:border-transparent"
        />
      </div>

      <div className="bg-gray-50 p-3 rounded-lg">
        <p className="text-sm text-gray-600">
          <span className="font-medium">预定发送时间：</span>
          {scheduledAt
            ? new Date(scheduledAt).toLocaleString("zh-CN", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })
            : "未设置"}
        </p>
      </div>

      <div className="flex space-x-2">
        <button
          onClick={() => {
            const now = new Date();
            now.setMinutes(now.getMinutes() + 5);
            onTimeChange(now.toISOString());
          }}
          className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
        >
          5分钟后
        </button>
        <button
          onClick={() => {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(9, 0, 0, 0);
            onTimeChange(tomorrow.toISOString());
          }}
          className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
        >
          明天9点
        </button>
        <button
          onClick={() => {
            const nextWeek = new Date();
            nextWeek.setDate(nextWeek.getDate() + 7);
            nextWeek.setHours(9, 0, 0, 0);
            onTimeChange(nextWeek.toISOString());
          }}
          className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
        >
          下周9点
        </button>
      </div>
    </div>
  );
}
