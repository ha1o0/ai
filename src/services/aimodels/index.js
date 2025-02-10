import OpenAIAdapter from './openai.js';
import DeepseekAdapter from './deepseek.js';
import AliAdapter from './ali.js';
import XunfeiAdapter from './xunfei.js';

// 适配器映射表，键为模型名称，值为适配器
const adapters = {
  openai: OpenAIAdapter,
  deepseek: DeepseekAdapter,
  ali: AliAdapter,
  xunfei: XunfeiAdapter,
};

// 获取适配器实例
const getAdapter = (model, serviceProvider = 'ali') => {
  if (!adapters[serviceProvider]) {
    throw new Error(`未知的服务商: ${serviceProvider}`);
  }
  return new adapters[serviceProvider](model);
}

export {
  getAdapter,
}
