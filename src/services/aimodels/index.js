import OpenAIAdapter from './openai.js';
import DeepseekAdapter from './deepseek.js';
import AliAdapter from './ali.js';

// 适配器映射表，键为模型名称，值为适配器
const adapters = {
  openai: OpenAIAdapter,
  deepseek: DeepseekAdapter,
  ali: AliAdapter,
};

// 获取适配器实例
const getAdapter = (model = 'ali') => {
  if (!adapters[model]) {
    throw new Error(`未知的模型: ${model}`);
  }
  return new adapters[model]();
}

export {
  getAdapter,
}
