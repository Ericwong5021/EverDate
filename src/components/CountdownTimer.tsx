"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface CountdownValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetDate: Date): CountdownValues {
  const now = new Date().getTime();
  const target = targetDate.getTime();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

interface CountdownUnitProps {
  value: number;
  label: string;
  index: number;
}

function CountdownUnit({ value, label, index }: CountdownUnitProps) {
  const prevValueRef = useRef(value);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    if (prevValueRef.current !== value) {
      setIsChanging(true);
      const timer = setTimeout(() => setIsChanging(false), 400);
      prevValueRef.current = value;
      return () => clearTimeout(timer);
    }
  }, [value]);

  const displayValue = String(value).padStart(2, "0");

  return (
    <div
      className="flex flex-col items-center gap-2"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="relative">
        <div className="glass-card shadow-rose-gold-pale/30 hover:shadow-rose-gold/20 min-w-[72px] rounded-2xl px-4 py-3 text-center shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:min-w-[100px] sm:px-6 sm:py-5">
          <span
            className={`text-3xl font-semibold tracking-wider transition-all duration-400 ease-out sm:text-5xl ${
              isChanging ? "text-wine-red-light scale-105" : "text-wine-red"
            }`}
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            {displayValue}
          </span>
        </div>
      </div>
      <span className="text-rose-gold text-xs font-medium tracking-widest uppercase sm:text-sm">
        {label}
      </span>
    </div>
  );
}

interface CountdownTimerProps {
  targetDate: Date;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<CountdownValues>(() => calculateTimeLeft(targetDate));

  const updateTimer = useCallback(() => {
    setTimeLeft(calculateTimeLeft(targetDate));
  }, [targetDate]);

  useEffect(() => {
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [updateTimer]);

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-5">
      <CountdownUnit value={timeLeft.days} label="天" index={0} />
      <span className="text-rose-gold-light mt-[-24px] text-2xl font-light sm:mt-[-32px] sm:text-4xl">
        :
      </span>
      <CountdownUnit value={timeLeft.hours} label="时" index={1} />
      <span className="text-rose-gold-light mt-[-24px] text-2xl font-light sm:mt-[-32px] sm:text-4xl">
        :
      </span>
      <CountdownUnit value={timeLeft.minutes} label="分" index={2} />
      <span className="text-rose-gold-light mt-[-24px] text-2xl font-light sm:mt-[-32px] sm:text-4xl">
        :
      </span>
      <CountdownUnit value={timeLeft.seconds} label="秒" index={3} />
    </div>
  );
}
