const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  //Uglify관련 수행
  mode: 'production'
});