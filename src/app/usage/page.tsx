"use client";

import Link from "next/link";

export default function UsagePage() {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white">
      <h1 className="text-4xl font-bold text-purple-700 mb-6 text-center">📖 TogetherCone の使い方</h1>

      {/* ⚠️ 注意事項 */}
      <section className="mb-8 p-4 bg-yellow-100 border-l-4 border-yellow-500">
        <h2 className="text-xl font-semibold text-yellow-700">⚠️ 重要な注意事項</h2>
        <p className="text-gray-700 mt-2">
          本アプリは API キーを <strong>クッキー（Cookie）</strong> に保存します。
          <strong className="text-red-600">共有PCや公共のブラウザでは絶対に使用しないでください！</strong>
        </p>
        <p className="text-gray-700 mt-1">
          安全な個人端末でのみご利用ください。セキュリティを確保するために、定期的に Cookie を削除することをおすすめします。
        </p>
        <p className="text-gray-700 mt-1">
          クッキーは<strong>7日後に自動的に失効</strong>します。
        </p>
      </section>

      {/* 🚀 概要 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">🚀 何ができるの？</h2>
        <p className="text-gray-600">
          TogetherCone は、Pinecone にデータを保存し、Together AI に質問すると、関連情報を取得して回答するツールです。
        </p>
        <ul className="mt-3 space-y-2 text-gray-600">
          <li>✅ <strong>Pinecone にテキストを保存</strong> して、あとで検索できる</li>
          <li>✅ <strong>Together AI に質問</strong> すると、保存されたデータを元に回答</li>
        </ul>
      </section>

      {/* 🔑 APIキーの設定 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">🔑 APIキーの設定方法</h2>

        <h3 className="text-lg font-semibold text-gray-700 mt-4">📌 1️⃣ Pinecone の APIキー & インデックスを取得</h3>
        <ul className="mt-2 space-y-2 text-gray-600">
          <li>🔹 <a href="https://www.pinecone.io/" className="text-blue-500 underline">Pinecone.io</a> に登録</li>
          <li>🔹 ダッシュボードでAPIキーとインデックスを作成</li>
          <li>🔹 <strong>APIキー・インデックス名・インデックスホストURL</strong> をコピー</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-700 mt-4">📌 2️⃣ Together AI の APIキーを取得</h3>
        <ul className="mt-2 space-y-2 text-gray-600">
          <li>🔹 <a href="https://www.together.ai/" className="text-blue-500 underline">Together AI</a> に登録</li>
          <li>🔹 <strong>APIキー</strong> をコピー</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-700 mt-4">📌 3️⃣ アプリにキーを入力</h3>
        <ul className="mt-2 space-y-2 text-gray-600">
          <li>🔹 <Link href="/" className="text-blue-500 underline">APIキー設定</Link> ページへ移動</li>
          <li>🔹 キーを入力し、<strong>「保存」</strong> をクリック</li>
        </ul>
      </section>

      {/* 📂 Pinecone にデータを保存 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">📂 Pinecone にデータを保存</h2>
        <ul className="mt-2 space-y-2 text-gray-600">
          <li>📌 <Link href="/store" className="text-blue-500 underline">Store in Pinecone</Link> ページへ移動</li>
          <li>📌 <strong>保存したいテキストを入力</strong></li>
          <li>📌 <strong>「Store in Pinecone」</strong> をクリック</li>
          <li>📌 <strong>保存完了！🎉</strong></li>
          <li>📌 保存したテキストは <strong>Pineconeのダッシュボード</strong> で確認可能 🔍</li>
        </ul>
      </section>

      {/* 💡 Together AI に質問 */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">💡 Together AI に質問する</h2>
        <ul className="mt-2 space-y-2 text-gray-600">
          <li>📌 <Link href="/ask" className="text-blue-500 underline">Ask Together AI</Link> ページへ移動</li>
          <li>📌 <strong>質問を入力</strong></li>
          <li>📌 <strong>「Ask AI」</strong> をクリック</li>
          <li>📌 <strong>AI が Pinecone のデータを検索し、回答！</strong></li>
        </ul>
      </section>

      {/* 🎉 まとめ */}
      <section className="mt-10 text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">🎉 これだけ！簡単に AI 検索を始めよう！</h2>
      </section>
    </div>
  );
}