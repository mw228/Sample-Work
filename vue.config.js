const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // css: {
  //   loaderOptions:{
  //     sass:{
  //       data:
  //         @import "@/scss/_variables.scss"

          
  //     }
  //   }
  // }
   // GitHub Pages project site base path:
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Sample-Work/'
    : '/',
})
