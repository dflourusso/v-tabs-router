module.exports = ({argv}) => ({
  output: {
    library: 'VTabsRouter',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  entry: {
    "v-tabs-router": "./src/index.js"
  },
  externals: ['vue', 'vuex', 'string-mask', 'fecha']
})
