import Head from 'next/head'
import BlessingGenerator from '../components/BlessingGenerator'

export default function Home() {
  return (
    <>
      <Head>
        <title>EverDate - AI 祝福语生成</title>
        <meta name="description" content="EverDate - 为你的纪念日生成专属祝福语" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 gradient-text">
              EverDate
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              为你的纪念日生成专属祝福语
            </p>
          </header>
          <BlessingGenerator />
        </div>
      </main>
    </>
  )
}
