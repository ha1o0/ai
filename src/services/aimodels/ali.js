import OpenAI from 'openai';

class AliAIAdapter {
  model = ''

  constructor(model = 'deepseek-v3') {
    this.client = new OpenAI({
      apiKey: process.env.ALI_DEEPSEEK_API_KEY,
      baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1"
    });
    this.model = model;
  }

  async generateResponse(prompt) {
    const response = await this.client.chat.completions.create({
      model: this.model,
      messages: [{ role: 'user', content: prompt }],
    });
    console.log("思考过程：")
    console.log(response.choices[0].message.reasoning_content)
    console.log("最终答案：")
    console.log(response.choices[0].message.content)
    return response.choices[0].message.content;
  }
}

export default AliAIAdapter;
