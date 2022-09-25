/** @type { import('prettier').Config } */
const prettierConfig = {
  /**
   * 仅在行的开头添加可能引入 ASI 故障的分号
   */
  semi: false,

  /**
   * 使用单引号而不是双引号
   */
  singleQuote: true,

  /**
   * 如果对象中的至少一个属性需要引号，则其他属性也需要引号
   */
  quoteProps: 'consistent',
}

module.exports = prettierConfig
