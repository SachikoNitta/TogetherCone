"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function Home() {
  const [pineconeKey, setPineconeKey] = useState("");
  const [pineconeIndex, setPineconeIndex] = useState("");
  const [pineconeIndexHost, setPineconeIndexHost] = useState("");
  const [togetherApiKey, settogetherApiKey] = useState("");
  const [togetherAiModel, settogetherAiModel] = useState("meta-llama/Llama-3.3-70B-Instruct-Turbo-Free");
  const [showKeys, setShowKeys] = useState(false); // 👀 Toggle key visibility

  useEffect(() => {
    // Load API keys from cookies
    setPineconeKey(Cookies.get("pineconeKey") || "");
    setPineconeIndex(Cookies.get("pineconeIndex") || "");
    setPineconeIndexHost(Cookies.get("pineconeIndexHost") || "");
    settogetherApiKey(Cookies.get("togetherApiKey") || "");
    settogetherAiModel(Cookies.get("togetherAiModel") || "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free");
  }, []);

  const saveKeys = () => {
    // Save API keys in cookies with expiration (7 days)
    Cookies.set("pineconeKey", pineconeKey, { expires: 7 });
    Cookies.set("pineconeIndex", pineconeIndex, { expires: 7 });
    Cookies.set("pineconeIndexHost", pineconeIndexHost, { expires: 7 });
    Cookies.set("togetherApiKey", togetherApiKey, { expires: 7 });
    Cookies.set("togetherAiModel", togetherAiModel, { expires: 7 });
    alert("✅ API Keys saved in cookies!");
  };

  // 🔹 Function to mask API keys (e.g., "sk-1234...5678")
  const maskKey = (key: string) => {
    if (!key) return "";
    if (key.length < 8) return "****"; // Short keys are fully hidden
    return key.slice(0, 4) + "..." + key.slice(-4); // Show first & last 4 chars
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-purple-700 mb-6 text-center">
        🔑 APIキーの設定
      </h1>

      <div className="flex flex-col gap-4">
        {/* Pinecone API Key */}
        <label className="text-sm font-semibold">Pinecone API Key</label>
        <input
          type={showKeys ? "text" : "password"} // 👀 Toggle visibility
          placeholder="Enter Pinecone API Key"
          value={showKeys ? pineconeKey : maskKey(pineconeKey)}
          onChange={(e) => setPineconeKey(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        {/* Pinecone Index */}
        <label className="text-sm font-semibold">Pinecone Index</label>
        <input
          type="text"
          placeholder="Enter Pinecone Index"
          value={pineconeIndex}
          onChange={(e) => setPineconeIndex(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        {/* Pinecone Index Host */}
        <label className="text-sm font-semibold">Pinecone Index Host</label>
        <input
          type="text"
          placeholder="Enter Pinecone Index Host"
          value={pineconeIndexHost}
          onChange={(e) => setPineconeIndexHost(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        {/* Together AI API Key */}
        <label className="text-sm font-semibold">Together AI API Key</label>
        <input
          type={showKeys ? "text" : "password"} // 👀 Toggle visibility
          placeholder="Enter Together AI API Key"
          value={showKeys ? togetherApiKey : maskKey(togetherApiKey)}
          onChange={(e) => settogetherApiKey(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        {/* Together AI LLM options */}
        <label className="text-sm font-semibold">Together AI LLM Model ID</label>
        <input
          type="text"
          placeholder="meta-llama/Llama-3.3-70B-Instruct-Turbo-Free"
          value={togetherAiModel}
          onChange={(e) => settogetherAiModel(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />


        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          {/* Toggle Visibility Button */}
          <button
            onClick={() => setShowKeys(!showKeys)}
            className="w-full bg-gray-300 text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-400 transition-all"
          >
            {showKeys ? "Hide Keys 🔒" : "キーを確認する 👀"}
          </button>

          {/* Save Button */}
          <button
            onClick={saveKeys}
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-md font-semibold hover:opacity-90 transition-all duration-200 shadow-md"
            >
            キーを保存する ✅
          </button>
        </div>
      </div>
    </div>
  );
}
