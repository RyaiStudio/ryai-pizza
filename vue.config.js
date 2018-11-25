const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, './server/public')
  /* devServer: {
    proxy: {
      '/invoice/submit': {
        target: 'http://ryai-pizza.local',
        ws: true,
        changeOrigin: true
      }
    }
  } */
}