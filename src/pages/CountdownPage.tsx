import { useParams, Link } from 'react-router-dom';
import { useMemo, useState, useEffect } from 'react';
import type { Anniversary } from '../types/anniversary';
import { ANNIVERSARY_TYPE_LABELS } from '../types/anniversary';

function calculateCountdown(dateStr: string) {
  const now = new Date();
  const target = new Date(dateStr);
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) {
    const pastDiff = Math.abs(diff);
    const days = Math.floor(pastDiff / (1000 * 60 * 60 * 24));
    return { days, isPast: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return { days, isPast: false };
}

function loadAnniversary(id: string | undefined): Anniversary | null {
  if (!id) return null;
  const data = localStorage.getItem(`everdate-${id}`);
  if (!data) return null;
  try {
    return JSON.parse(data) as Anniversary;
  } catch {
    return null;
  }
}

export default function CountdownPage() {
  const { id } = useParams<{ id: string }>();
  const anniversary = useMemo(() => loadAnniversary(id), [id]);
  const [countdown, setCountdown] = useState<{ days: number; isPast: boolean } | null>(
    () => (anniversary ? calculateCountdown(anniversary.date) : null)
  );

  useEffect(() => {
    if (!anniversary) return;
    const timer = setInterval(() => {
      setCountdown(calculateCountdown(anniversary.date));
    }, 60 * 1000);
    return () => clearInterval(timer);
  }, [anniversary]);

  if (!anniversary || !countdown) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-rose-400">加载中...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Back link */}
      <Link
        to="/"
        className="absolute top-6 left-6 text-rose-400 hover:text-rose-600 transition-colors text-sm flex items-center gap-1"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        返回
      </Link>

      {/* Countdown Card */}
      <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-10 shadow-xl shadow-rose-100/50 border border-rose-100/50 text-center max-w-md w-full">
        {/* Heart icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 mb-6 shadow-lg shadow-rose-500/20">
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        <h2
          className="text-2xl font-bold text-rose-800 mb-2"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {anniversary.partnerName}的{ANNIVERSARY_TYPE_LABELS[anniversary.type]}
        </h2>

        <p
          className="text-rose-400 text-sm mb-8"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {new Date(anniversary.date).toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>

        {/* Countdown number */}
        <div className="mb-4">
          <span
            className="text-7xl font-bold bg-gradient-to-br from-rose-500 to-pink-500 bg-clip-text text-transparent"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {countdown.days}
          </span>
          <p
            className="text-lg text-rose-500 mt-2"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {countdown.isPast ? '天前' : '天'}
          </p>
        </div>

        {countdown.isPast ? (
          <p className="text-rose-400 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            这个纪念日已经过去啦
          </p>
        ) : (
          <p className="text-rose-400 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            距离纪念日还有
          </p>
        )}
      </div>

      {/* ID display */}
      <p className="mt-6 text-xs text-rose-300/60" style={{ fontFamily: 'var(--font-body)' }}>
        纪念日 ID: {id}
      </p>
    </div>
  );
}
