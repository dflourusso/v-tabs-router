<template lang="pug">
div.tabs-component
  .pure-g.tabs
    router-link(:class='gridClass(tab)', v-for='tab in tabs', :to='tab.path', :key='tab.name')
      .tab
        i.fa.fa-2x(:class="tabIconClass(tab.icon)", v-if='tab.icon')
        span(v-else) {{ tab.label }}
  slot
  router-view
</template>

<script>
export default {
  data () {
    return {
      tabs: []
    }
  },
  methods: {
    gridClass (tab) {
      let classes = { }
      classes[`pure-u-1-${this.tabs.length}`] = true
      return classes
    },
    tabIconClass (icon) {
      let tmp = {}
      tmp[icon] = true
      return tmp
    }
  }
}
</script>
<style lang="stylus">
.tabs-component
  .tabs
    text-align center
    position absolute
    bottom 0
    right 0
    left 0
    .tab
      padding 5px
      background-color #E6E6E6
      color #5295CF
      border-top 2px solid transparent
    .router-link-active
      .tab
        color #306B9F
        border-top 2px solid #306B9F
</style>
