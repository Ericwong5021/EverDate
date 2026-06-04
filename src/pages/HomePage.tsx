import AnniversaryForm from '../components/AnniversaryForm';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Logo / Brand */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 mb-4 shadow-lg shadow-rose-500/30">
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
        <h1
          className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-rose-600 via-pink-500 to-rose-500 bg-clip-text text-transparent"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          EverDate
        </h1>
        <p
          className="mt-3 text-lg text-rose-400/80"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          让每一个纪念日都值得期待
        </p>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-md">
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl shadow-rose-100/50 border border-rose-100/50">
          <h2
            className="text-2xl font-bold text-center mb-6 text-rose-800"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            创建你的纪念日
          </h2>
          <AnniversaryForm />
        </div>

        {/* Footer */}
        <p
          className="text-center mt-6 text-sm text-rose-300"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          用心记录，让爱永不褪色
        </p>
      </div>
    </div>
  );
}
