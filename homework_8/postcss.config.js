module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 72, //结果为：rootValue * 20 = 设计稿宽度
      propList: ["*"]
    }
  }
};
