"use client";
import { useState } from "react";

export default function StorePage() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");

  const storeData = async () => {
    setStatus("Storing data... ⏳");

    try {
      const response = await fetch("/api/store", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        setStatus(`❌ Error: ${response.status} - ${response.statusText}`);
        return;
      }

      const textResponse = await response.text();
      if (!textResponse) {
        setStatus("❌ Error: Empty response from API");
        return;
      }

      const result = JSON.parse(textResponse);
      setStatus(result.message || "✅ Stored successfully!");

    } catch (error) {
      if (error instanceof Error) {
        setStatus(`❌ Error: ${error.message}`);
      } else {
        setStatus("❌ An unknown error occurred");
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-gray-50 shadow-lg rounded-xl">
      <h1 className="text-4xl font-extrabold text-purple-700 mb-6 text-center">
        📂 Pineconeにテキストを保存する
      </h1>

      <div className="flex flex-col gap-5">
        {/* Bigger Textarea */}
        <textarea
          placeholder="Enter text to store..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-green-500 focus:outline-none resize-none h-60 text-lg"
        ></textarea>

        {/* Store Button */}
        <button
          onClick={storeData}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-bold text-xl hover:opacity-90 transition-all duration-300 shadow-lg"
        >
          📥 テキストを保存
        </button>
      </div>

      {/* Status Message */}
      {status && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-md text-center border border-gray-300">
          <p className="text-xl font-semibold text-gray-800">{status}</p>
        </div>
      )}
    </div>
  );
}