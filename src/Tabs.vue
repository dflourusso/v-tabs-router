<template lang="pug">
div.tabs-component
  .tabs(:style='tabsStyle')
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
  computed: {
    tabsStyle () {
      return {
        color: this.color,
        backgroundColor: this.backgroundColor
      }
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
    height 40px
    padding 5px
</style>
