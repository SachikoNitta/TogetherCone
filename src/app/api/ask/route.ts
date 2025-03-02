import { NextRequest, NextResponse } from "next/server";
import PineconeUtil from "@/lib/pineconeUtil";
import TogetherUtil from "@/lib/togetherUtil";

export async function POST(req: NextRequest) {
  const { question } = await req.json();

   // Pineconeインスタンスを生成.
   const { pineconeKey, pineconeIndex, pineconeIndexHost } = await PineconeUtil.getPineconeKeys();
   const pinecone = new PineconeUtil(pineconeKey, pineconeIndex, pineconeIndexHost);
  
  // エンベッドを取得.
  const embeddings = await pinecone.getEmbedding(question) as { data: { values: number[] }[] };

  // 似ている文書を取得.
  const similarDocs = await pinecone.searchSimilarDocuments(embeddings.data[0].values);

  // 質問文を作成.
  const completeQuestion = [];
  completeQuestion.push('以下のドキュメントのみを参照して、質問に答えてください。');
  similarDocs.forEach((doc) => {
    completeQuestion.push(doc);
  });
  completeQuestion.push ('質問: ' + question);
  const completeQuestionString = completeQuestion.join('\n');

  // Togetherに質問.
  const { togetherApiKey } = await TogetherUtil.getTogetherApiKeys();
  const together = new TogetherUtil(togetherApiKey);
  const answer = await together.answer(completeQuestionString);

  // レスポンスを返す.
  return NextResponse.json({answer: answer, question: completeQuestionString});
  }