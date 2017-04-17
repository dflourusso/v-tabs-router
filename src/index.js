import Tabs from './components/Tabs.vue'
import Tab from './components/Tab.vue'

export {
  Tabs,
  Tab
}


const VTabsRouter = {
  install (vue) {
    vue.component('Tabs', Tabs)
    vue.component('Tab', Tab)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VTabsRouter)
}
export default VTabsRouter


// function install(vue) {
//   vue.component('Tabs', Tabs)
//   vue.component('Tab', Tab)
// }
//
// if (window.Vue) {
//   Vue.use(install)
// } else if (typeof exports === "object") {
//   module.exports = install
// } else if (typeof define === "function" && define.amd) {
//   define([], function(){ return install })
// }
