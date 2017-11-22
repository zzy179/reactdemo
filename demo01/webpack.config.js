
const htmlPlugin = require('html-webpack-plugin');
module.exports = {
  entry:'./src/app.js',
  output:{
    path:__dirname+'/build',
    filename:'bundle.js'
  },
  module:{
    rules:[
    {
      test:/\.(js|jsx)$/,
      exclude:/node_modules/,
      use:{
        loader:'babel-loader?cacheDirectory=true',
        options:{
          presets:['env','react']
        }
      }

    },
    {
      test:/(\.css)$/,
      use:['style-loader','css-loader']
    },
    {
      test:/(\.html)$/,
      use:'html-loader'
    }
  ]
},
plugins:[
  new htmlPlugin({
    template:'./src/index.html',
    filename:'index.html'
  })
],
devServer:{
  inline:true,
  hot:true,
  host:'0.0.0.0'
}
};
