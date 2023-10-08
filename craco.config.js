const path = require('path')
const CracoLessPlugin = require('craco-less')

const resolve = (dir) => path.resolve(__dirname, dir)
module.exports = {
  plugins: [{ plugin: CracoLessPlugin }],
  webpack: {
    alias: {
      '@': resolve('src')
    }
  },
  server: {
    host: '0.0.0.0'
  },
  devServer: {
    open: false
  }
  // rules: [
  //   {
  //     test:  /\.(css|less)$/,
  //     use: [
  //       {
  //         loader: require.resolve('less-loader')
  //       }
  //     ]
  //   }
  // ]
}
