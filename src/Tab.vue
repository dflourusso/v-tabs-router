<template lang="pug">
.tab-component
  router-link.decoration-none(:to='to', :exact='exact', :style='{color: $parent.$props.color}')
    .tab-content(:class="{'tab-label': label}")
      i(:class="tabIconClass")
      span(v-if='label') {{ label }}
</template>

<script>
export default{
  props: {
    name: { type: String, required: true },
    to: { type: Object, required: true },
    icon: { type: String, required: true, default: 'fa fa-2x fa-home'},
    label: { type: String },
    exact: { type: Boolean, default: false } //https://jsfiddle.net/8xrk1n9f/
  },
  computed: {
    tabIconClass () {
      let tmp = {}
      tmp[this.icon] = true
      return tmp
    }
  }
}
</script>

<style lang="stylus">
.tab-component
  width 100%
  .decoration-none
    text-decoration none
  .tab-content
    &:not(.tab-label)
      i
        margin-top 5px
    &.tab-label
      i
        display block !important
        font-size 1.6em
      span
        font-size 0.6em
        display inline-block
        white-space nowrap
  .router-link-active
    .tab-content
      transition all 0.3s
      filter invert(38%)
</style>
