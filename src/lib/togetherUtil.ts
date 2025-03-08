import Together from "together-ai";
import { cookies } from "next/headers";

class TogetherUtil {
  togetherApiKey: string;
  together: Together;

  constructor(togetherApiKey: string) {
    this.togetherApiKey = togetherApiKey;
    this.together = this.getTogether();
  }

  static async getTogetherApiKeys() {
    const cookiesAll = await cookies();
    const togetherApiKey = cookiesAll.get("togetherApiKey")?.value;
    if (!togetherApiKey) {
      throw new Error("Together API key not found in cookies");
    }
    return new TogetherUtil(togetherApiKey);
  }

  static async getTogetherAiModel() {
    const cookiesAll = await cookies();
    const togetherAiModel = cookiesAll.get("togetherAiModel")?.value || "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free";
    return togetherAiModel;
  }

  getTogether() {
    return new Together({apiKey: this.togetherApiKey});
  }

  async answer(question: string) {
    const model = await TogetherUtil.getTogetherAiModel();
    const response = await this.together.chat.completions.create({
      messages: [{"role": "user", "content": question}],
      model: model,
    });

    return response.choices[0].message?.content;
  }
}

export default TogetherUtil;
