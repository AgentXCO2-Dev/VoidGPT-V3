const VoidErrors = {
  API_KEY_MISSING: {
    code: 'VOIDGPT_ERR_API_KEY_MISSING',
    message: 'AI connection failed: API key is missing.',
    fix: 'Add your AI provider API key to environment variables.'
  },

  API_CONNECTION_FAILED: {
    code: 'VOIDGPT_ERR_API_CONNECTION_FAILED',
    message: 'AI server could not connect to the model provider.',
    fix: 'Check internet connection, API status, and provider settings.'
  },

  MODEL_NOT_FOUND: {
    code: 'VOIDGPT_ERR_MODEL_NOT_FOUND',
    message: 'The selected AI model does not exist or is unavailable.',
    fix: 'Select a supported model or update the model configuration.'
  },

  RATE_LIMITED: {
    code: 'VOIDGPT_ERR_RATE_LIMITED',
    message: 'Too many AI requests were sent too quickly.',
    fix: 'Wait before trying again or increase API limits.'
  },

  INVALID_REQUEST: {
    code: 'VOIDGPT_ERR_INVALID_REQUEST',
    message: 'The AI request format is invalid.',
    fix: 'Check the request body and required parameters.'
  },

  AI_TIMEOUT: {
    code: 'VOIDGPT_ERR_AI_TIMEOUT',
    message: 'The AI model took too long to respond.',
    fix: 'Retry the request or use a faster model.'
  },

  UNKNOWN: {
    code: 'VOIDGPT_ERR_UNKNOWN',
    message: 'An unexpected AI error occurred.',
    fix: 'Check server logs for more details.'
  }
};

module.exports = VoidErrors;
