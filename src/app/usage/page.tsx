"use client";
import Link from "next/link";

export default function UsagePage() {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white">
      <h1 className="text-4xl font-bold text-purple-700 mb-6 text-center">
        📖 TogetherCone の使い方
      </h1>

      {/* ⚠️ 注意事項 */}
      <section className="mb-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-yellow-700">⚠️ 注意事項</h2>
        <p className="text-gray-700 mt-2">
          本アプリは <strong>クッキー（Cookie）</strong> に API キーを保存します。
          <strong className="text-red-600"> 共有PCや公共のブラウザでは絶対に使用しないでください！</strong>
        </p>
        <p className="text-gray-700 mt-1">クッキーは<strong>7日後に自動失効</strong>します。</p>
      </section>

      {/* 🔹 Sections Wrapped in Cards */}
      {[
        {
          title: "🚀 何ができるの？",
          content: (
            <>
              <p className="text-gray-600">TogetherCone は以下の機能を提供します：</p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li>✅ <strong>Pinecone にデータを保存</strong> し、後から検索</li>
                <li>✅ <strong>Together AI に質問</strong> して、関連情報を取得</li>
              </ul>
            </>
          ),
        },
        {
          title: "🔑 APIキーの設定",
          content: (
            <>
              <h3 className="text-lg font-semibold text-gray-700 mt-4">📌 1️⃣ Pinecone の APIキー & インデックス</h3>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>🔹 <a href="https://www.pinecone.io/" className="text-blue-500 underline">Pinecone.io</a> に登録</li>
                <li>🔹 APIキー・インデックス名・ホストURLを取得</li>
              </ul>
              <h3 className="text-lg font-semibold text-gray-700 mt-4">📌 2️⃣ Together AI の APIキー</h3>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>🔹 <a href="https://www.together.ai/" className="text-blue-500 underline">Together AI</a> に登録</li>
                <li>🔹 APIキーを取得</li>
              </ul>
              <h3 className="text-lg font-semibold text-gray-700 mt-4">📌 3️⃣ アプリにキーを入力</h3>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>🔹 <Link href="/" className="text-blue-500 underline">Settings</Link> ページへ移動</li>
                <li>🔹 キーを入力し、<strong>「保存」</strong> をクリック</li>
              </ul>
            </>
          ),
        },
        {
          title: "📂 Pinecone にデータを保存",
          content: (
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>📌 <Link href="/store" className="text-blue-500 underline">Store in Pinecone</Link> ページへ移動</li>
              <li>📌 テキストを入力し「Store in Pinecone」をクリック</li>
              <li>📌 保存完了 🎉</li>
              <li>📌 Pinecone ダッシュボードで確認可能 🔍</li>
            </ul>
          ),
        },
        {
          title: "💡 Together AI に質問する",
          content: (
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>📌 <Link href="/ask" className="text-blue-500 underline">Ask Together AI</Link> ページへ移動</li>
              <li>📌 質問を入力し「Ask AI」をクリック</li>
              <li>📌 AI が Pinecone のデータを元に回答！</li>
            </ul>
          ),
        },
      ].map((section, index) => (
        <section key={index} className="mb-6 p-6 bg-gray-50 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">{section.title}</h2>
          {section.content}
        </section>
      ))}

      {/* 🎉 まとめ */}
      <section className="mt-8 p-6 bg-gray-50 shadow-md rounded-lg text-center">
        <h2 className="text-3xl font-bold text-purple-700">🎉 簡単に AI 検索を始めよう！</h2>
      </section>
    </div>
  );
}