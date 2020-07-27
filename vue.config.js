// vue.config.js
const InjectPlugin = require('webpack-inject-plugin').default;

const s = require('./src/injection/index'); // stringified version of injection.js

var stringifiedFile = s || "console.log('nothing happned!')";

module.exports = {
  configureWebpack: {
    plugins: [
      new InjectPlugin(function () {
        return stringifiedFile;
      }),
    ],
  },
};
