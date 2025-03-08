"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function Home() {
  // 🔹 Pinecone State
  const [pineconeKey, setPineconeKey] = useState("");
  const [pineconeIndex, setPineconeIndex] = useState("");
  const [pineconeIndexHost, setPineconeIndexHost] = useState("");

  // 🔹 Together AI State
  const [togetherApiKey, setTogetherApiKey] = useState("");
  const [togetherAiModel, setTogetherAiModel] = useState("meta-llama/Llama-3.3-70B-Instruct-Turbo-Free");

  const [showKeys, setShowKeys] = useState(false); // 👀 Toggle key visibility

  useEffect(() => {
    setPineconeKey(Cookies.get("pineconeKey") || "");
    setPineconeIndex(Cookies.get("pineconeIndex") || "");
    setPineconeIndexHost(Cookies.get("pineconeIndexHost") || "");
    setTogetherApiKey(Cookies.get("togetherApiKey") || "");
    setTogetherAiModel(Cookies.get("togetherAiModel") || "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free");
  }, []);

  const saveKeys = () => {
    Cookies.set("pineconeKey", pineconeKey, { expires: 7 });
    Cookies.set("pineconeIndex", pineconeIndex, { expires: 7 });
    Cookies.set("pineconeIndexHost", pineconeIndexHost, { expires: 7 });
    Cookies.set("togetherApiKey", togetherApiKey, { expires: 7 });
    Cookies.set("togetherAiModel", togetherAiModel, { expires: 7 });
    alert("✅ API Keys saved in cookies!");
  };

  const maskKey = (key: string) => {
    if (!key) return "";
    if (key.length < 8) return "****";
    return key.slice(0, 4) + "..." + key.slice(-4);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-purple-700 mb-6 text-center">
        🔑 APIキーの設定
      </h1>

      {/* 🔹 Pinecone Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">🌲 Pineconeの設定</h2>

        <div className="mb-4">
          <label className="text-sm font-semibold">APIキー</label>
          <input
            type={showKeys ? "text" : "password"}
            placeholder="Enter Pinecone API Key"
            value={showKeys ? pineconeKey : maskKey(pineconeKey)}
            onChange={(e) => setPineconeKey(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm font-semibold">インデックスの名前</label>
          <input
            type="text"
            placeholder="Enter Pinecone Index"
            value={pineconeIndex}
            onChange={(e) => setPineconeIndex(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm font-semibold">インデックスのホスト</label>
          <input
            type="text"
            placeholder="Enter Pinecone Index Host"
            value={pineconeIndexHost}
            onChange={(e) => setPineconeIndexHost(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none mt-1"
          />
        </div>
      </div>

      {/* 🔹 Together AI Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">🤖 Together AIの設定</h2>

        <div className="mb-4">
          <label className="text-sm font-semibold">APIキー</label>
          <input
            type={showKeys ? "text" : "password"}
            placeholder="Enter Together AI API Key"
            value={showKeys ? togetherApiKey : maskKey(togetherApiKey)}
            onChange={(e) => setTogetherApiKey(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm font-semibold">LLM Model ID</label>
          <input
            type="text"
            placeholder="meta-llama/Llama-3.3-70B-Instruct-Turbo-Free"
            value={togetherAiModel}
            onChange={(e) => setTogetherAiModel(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none mt-1"
          />
        </div>
      </div>

      {/* 🔹 Buttons */}
      <div className="flex gap-4 mt-4">
        <button
          onClick={() => setShowKeys(!showKeys)}
          className="w-full bg-gray-300 text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-400 transition-all"
        >
          {showKeys ? "Hide Keys 🔒" : "キーを確認する 👀"}
        </button>

        <button
          onClick={saveKeys}
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-md font-semibold hover:opacity-90 transition-all duration-200 shadow-md"
        >
          キーを保存する ✅
        </button>
      </div>
    </div>
  );
}
