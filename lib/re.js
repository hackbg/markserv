module.exports.emoji = require('emoji-regex')()
module.exports.nonalphanumeric = /[`~!@#$%^&*()+=<>?,./:;"'|{}[\]\\\u2000-\u206F\u2E00-\u2E7F]/g
module.exports.cjkPunctuation = /[\u3000。？！，、；：“”【】（）〔〕［］﹃﹄“”‘’﹁﹂—…－～《》〈〉「」]/g
