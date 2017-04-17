<script>
export default{
  props: {
    'name': { type: String, required: true },
    'path': { type: String , required: true},
    'icon': { type: String , required: true}
  },
  created () {
    let self = this
    let tab = {name: this.name, path: this.path, icon: this.icon}
    this.$parent.$data.tabs.push(tab)
  }
}
</script>

<style lang="stylus">
</style>
