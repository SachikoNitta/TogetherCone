import { cookies } from "next/headers";
import { EmbeddingsList, Pinecone } from "@pinecone-database/pinecone";

class PineconeUtil {
  pineconeKey: string;
  pineconeIndex: string;
  pineconeIndexHost: string;
  pinecone: Pinecone;

  constructor(pineconeKey: string, pineconeIndex: string, pineconeIndexHost: string) {
    this.pineconeKey = pineconeKey;
    this.pineconeIndex = pineconeIndex;
    this.pineconeIndexHost = pineconeIndexHost;
    this.pinecone = this.getPinecone();
  }

  static async getPineconeKeys() {
    const cookiesAll = await cookies();
    const pineconeKey = cookiesAll.get("pineconeKey")?.value;
    const pineconeIndex = cookiesAll.get("pineconeIndex")?.value;
    const pineconeIndexHost = cookiesAll.get("pineconeIndexHost")?.value;
    if (!pineconeKey || !pineconeIndex || !pineconeIndexHost) {
      throw new Error("Pinecone index not found in cookies");
    }
    return new PineconeUtil(pineconeKey, pineconeIndex, pineconeIndexHost);
  }

  getPinecone() {
    return new Pinecone({ apiKey: this.pineconeKey });
  }

  async getEmbedding(text: string): Promise<EmbeddingsList> {
    return await this.pinecone.inference.embed(
      'multilingual-e5-large',
      [text],
      { inputType: 'passage', truncate: 'END' }
    );
  }

  createRecord(text: string, embedding: number[]) {
    return {
      id: new Date().getTime().toString(),
      values: embedding,
      metadata: {
        text: text
      }
    };
  }

  async upsert(record: { id: string; values: number[]; metadata: { text: string } }) {
    await this.pinecone.Index(this.pineconeIndex, this.pineconeIndexHost).namespace('ns1').upsert([record]);
  }

  async searchSimilarDocuments(vector: number[]) {
    const response = await this.pinecone.index(this.pineconeIndex, this.pineconeIndexHost).namespace("ns1").query({
      topK: 5,
      vector: vector,
      includeValues: false,
      includeMetadata: true
    });

    // 元の文章の配列を返す.
    return response.matches.map((result) => result.metadata?.text ?? '');
  }
}

export default PineconeUtil;