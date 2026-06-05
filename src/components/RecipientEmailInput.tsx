"use client";

import React, { useState } from "react";

interface RecipientEmailInputProps {
  email: string;
  onEmailChange: (email: string) => void;
}

export default function RecipientEmailInput({ email, onEmailChange }: RecipientEmailInputProps) {
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onEmailChange(value);

    if (value && !validateEmail(value)) {
      setError("请输入有效的邮箱地址");
    } else {
      setError(null);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">收件人邮箱</label>
      <input
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="example@email.com"
        className={`focus:ring-rose-gold w-full rounded-lg border px-4 py-2 focus:border-transparent focus:ring-2 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
      <p className="text-xs text-gray-500">纪念日当天将自动发送到此邮箱</p>
    </div>
  );
}
