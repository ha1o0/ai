import OpenAI from 'openai';

class OpenAIAdapter {
  constructor() {
    this.client = new OpenAI({
      apiKey: process.env.DEEPSEEK_API_KEY, // 从环境变量获取 API Key
    });
  }

  async generateResponse(prompt) {
    const response = await this.client.chat.completions.create({
      model: 'deepseek-r1',
      messages: [{ role: 'user', content: prompt }],
    });

    return response.choices[0].message.content;
  }
}

export default OpenAIAdapter;
