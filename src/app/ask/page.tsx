"use client";
import { useState } from "react";

export default function AskPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [completeQuestion, setCompleteQuestion] = useState("");

  const askAI = async () => {
    if (!question.trim()) return; // Prevent empty submissions
    setAnswer("Thinking... 🤔"); // Show loading message

    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        setAnswer(`❌ Error: ${response.status} - ${response.statusText}`);
        return;
      }

      const textResponse = await response.text();
      if (!textResponse) {
        setAnswer("❌ Error: Empty response from API");
        return;
      }

      const result = JSON.parse(textResponse);
      setAnswer(result.answer || "No answer received.");
      setCompleteQuestion(result.question || "No question received");

    } catch (error) {
      setAnswer(`❌ Error: ${(error as Error).message}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 p-8 bg-gray-50 shadow-lg rounded-xl">
      <h1 className="text-4xl font-extrabold text-purple-700 mb-8 text-center">
        💡 Together AIに質問する
      </h1>

      <div className="flex flex-col gap-6">
        {/* Larger Input Field */}
        <input
          type="text"
          placeholder="Ask a question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full h-14 p-4 text-lg border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
        />

        {/* Ask Button - Disabled when input is empty */}
        <button
          onClick={askAI}
          disabled={!question.trim()} // Disable when question is empty
          className={`w-full px-6 py-3 rounded-lg font-bold text-xl shadow-lg transition-all duration-300
            ${question.trim()
              ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
        >
          🚀 質問する
        </button>
      </div>

      {/* Display Question */}
      {completeQuestion && (
        <div className="mt-6 p-5 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">📌 AIへの質問</h2>
          <p className="mt-2 text-gray-600">{completeQuestion}</p>
        </div>
      )}

      {/* Display Answer */}
      {answer && (
        <div className="mt-4 p-5 bg-white rounded-lg shadow-md border border-gray-300">
          <h2 className="text-xl font-semibold text-gray-800">🤖 AIの回答</h2>
          <p className="mt-2 text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}