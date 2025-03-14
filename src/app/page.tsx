"use client";
import Link from "next/link";

/**
 * Renders the usage instructions page for the TogetherCone application.
 *
 * This React component presents warnings about API key storage using cookies, outlines the application's features—including data storage via Pinecone and AI query functionality through Together AI—and provides a three-step guide for users to begin using AI search. The page is styled with Tailwind CSS and utilizes Next.js Link components for navigation.
 */
export default function UsagePage() {
  return (
    <div className="mt-10 p-6  flex flex-col items-expand">
      {/* ⚠️ 注意事項 */}
      <section className="mb-6 p-6 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-yellow-700">⚠️ 注意事項</h2>
        <p className="text-gray-700 mt-2">
          本アプリは <strong>クッキー（Cookie）</strong> に API キーを保存します。
          <strong className="text-red-600"> 共有PCや公共のブラウザでは絶対に使用しないでください！</strong>
        </p>
        <p className="text-gray-700 mt-1">クッキーは<strong>7日後に自動失効</strong>します。</p>
      </section>

      {/* 🚀 このアプリで何ができるの？ */}
      <section className="mb-6 p-6 bg-gray-50 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">🚀 このアプリで何ができるの？</h2>
        <p className="text-gray-600">TogetherCone は以下の機能を提供します：</p>

        <ul className="mt-3 space-y-2 text-gray-600">
          <li>✅ <strong>Pinecone にデータを保存</strong></li>
          <li>✅ <strong>Together AIを通じてAIに質問し、Pinecone のデータを活用して回答を生成</strong></li>
        </ul>

        <details className="mt-4">
          <summary className="text-sm font-semibold text-blue-600 cursor-pointer">
            Pineconeとは？
          </summary>
          <ol className="list-decimal list-inside text-sm text-gray-600 mt-2">
            <li>高速でスケーラブルなベクトルデータベースを提供するクラウドサービスです。</li>
            <li>TogetherConeではドキュメントの保存と類似ドキュメントの抽出に使用しています。</li>
          </ol>
        </details>
        <details className="mt-2">
          <summary className="text-sm font-semibold text-blue-600 cursor-pointer">
            Together AIとは？
          </summary>
          <ol className="list-decimal list-inside text-sm text-gray-600 mt-2">
            <li>MetaのLlama3を始めとするオープンソースのLLMモデルをAPI経由で利用できるクラウドサービスです。</li>
            <li>TogetherConeではAIによる回答の生成に使用しています。</li>
          </ol>
        </details>
      </section>

      {/* 🎯 3ステップで気軽にAI検索をしよう */}
      <section className="mb-6 p-6 bg-gray-50 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">🎯 3ステップで気軽にAI検索をしよう</h2>
        <p className="text-gray-600 mb-4">以下の3ステップで、簡単に AI 検索を始められます。</p>

        {/* Step 1: 設定 */}
        <Link href="/setting" className="block w-full">
          <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-lg font-semibold px-6 py-4 rounded-lg shadow-md hover:opacity-90 transition">
            🔑 APIキーの設定
          </button>
        </Link>

        {/* Step 2: 保存 */}
        <Link href="/store" className="block w-full mt-4">
          <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-lg font-semibold px-6 py-4 rounded-lg shadow-md hover:opacity-90 transition">
            📥 Pinecone にデータを保存
          </button>
        </Link>

        {/* Step 3: 検索 */}
        <Link href="/ask" className="block w-full mt-4">
          <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-lg font-semibold px-6 py-4 rounded-lg shadow-md hover:opacity-90 transition">
            🔎 AI に質問する
          </button>
        </Link>
      </section>

      {/* 🎉 まとめ */}
      <section className="mt-8 p-6 text-center">
        <h2 className="text-3xl font-bold text-purple-700">🎉 今すぐにAI検索を始めよう！</h2>
      </section>
    </div>
  );
}