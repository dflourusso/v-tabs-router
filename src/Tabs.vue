<template lang="pug">
div.tabs-component
  .tabs
    router-link.decoration-none(:style='columnWidth', v-for='tab in tabs', :to='tab.path', :key='tab.name', :exact='tab.exact')
      .tab(:class="{'tab-label': tab.label}", :style='tabStyle')
        .tab-content
          i(:class="tabIconClass(tab.icon)")
          span(v-if='tab.label') {{ tab.label }}
  slot
  router-view(style='margin-bottom: 45px;')
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: '#E6E6E6'
    },
    color: {
      type: String,
      default: '#5295CF'
    }
  },
  data () {
    return {
      tabs: []
    }
  },
  computed: {
    tabStyle () {
      return {
        color: this.color,
        backgroundColor: this.backgroundColor
      }
    },
    columnWidth () {
      return {
        width: `${(100/this.tabs.length).toFixed(4)}%`
      }
    }
  },
  methods: {
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
    display -webkit-flex
    z-index 999
    text-align center
    position fixed
    bottom 0
    right 0
    left 0
    .decoration-none
      text-decoration none
    .tab
      height 40px
      padding 5px
      &:not(.tab-label)
        .tab-content
          i
            margin-top 5px
      &.tab-label
        .tab-content
          i
            display block !important
            font-size 1.6em
          span
            font-size 0.6em
            display inline-block
            white-space nowrap
    .router-link-active
      .tab
        .tab-content
          transition all 0.3s
          filter invert(38%)
</style>
