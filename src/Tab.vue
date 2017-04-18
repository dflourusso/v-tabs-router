<script>
export default{
  render () { },
  props: {
    'name': { type: String, required: true },
    'path': { type: String, required: true },
    'icon': { type: String, required: true, default: 'fa fa-2x fa-home'},
    'label': { type: String }
  },
  created () {
    let self = this
    let tab = {name: this.name, path: this.path, icon: this.icon, label: this.label}
    this.$parent.$data.tabs.push(tab)
  }
}
</script>

<style lang="stylus">
</style>
