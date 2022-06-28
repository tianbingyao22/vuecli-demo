const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
    // 开发服务器的配置
  // devServer:{
  //   open:true,
  //   host:"localhost",
  // },
  // 代码检查工具：禁用代码检查
  lintOnSave:false,
})

