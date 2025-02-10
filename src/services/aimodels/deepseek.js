import OpenAI from 'openai';

class DeepseekAIAdapter {
  model = ''
  constructor(model = 'deepseek-r1') {
    this.client = new OpenAI({
      apiKey: process.env.DEEPSEEK_API_KEY,
      baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1"
    });
    this.model = model;
  }

  async generateResponse(prompt) {
    const response = await this.client.chat.completions.create({
      model: this.model,
      messages: [{ role: 'user', content: prompt }],
    });

    return response.choices[0].message.content;
  }
}

export default DeepseekAIAdapter;
