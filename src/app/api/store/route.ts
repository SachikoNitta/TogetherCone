import { NextRequest, NextResponse } from "next/server";
import PineconeUtil from "@/lib/pineconeUtil";

export async function POST(req: NextRequest) {
  // テキストを取得.
  const { text } = await req.json();

  // Pineconeインスタンスを生成.
  const { pineconeKey, pineconeIndex, pineconeIndexHost } = await PineconeUtil.getPineconeKeys();
  const pinecone = new PineconeUtil(pineconeKey, pineconeIndex, pineconeIndexHost);

  // エンベッドを取得.
  const embeddings = await pinecone.getEmbedding(text) as { data: { values: number[] }[] };

  // ベクトルを作成.
  const record = pinecone.createRecord(text, embeddings.data[0].values);

  // インデックスに保存.
  await pinecone.upsert(record);

  return NextResponse.json({ message: "Data stored in Pinecone!" });
}