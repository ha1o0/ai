import OpenAI from 'openai';

class XunfeiAIAdapter {
  model = ''
  serviceIdModelMap = {
    "deepseek-r1": "xdeepseekr1qwen32b"
  }

  constructor(model = 'deepseek-r1') {
    console.log(process.env.XUNFEI_API_KEY)
    this.client = new OpenAI({
      apiKey: process.env.XUNFEI_API_KEY,
      baseURL: "https://maas-api.cn-huabei-1.xf-yun.com/v1"
    });
    if (!this.serviceIdModelMap[model]) {
      model = 'deepseek-r1';
    }
    this.model = this.serviceIdModelMap[model];
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

export default XunfeiAIAdapter;
