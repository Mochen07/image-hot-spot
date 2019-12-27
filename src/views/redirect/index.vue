<script>
export default {
  created() {
    const { params, query } = this.$route
    let { path } = params
    path = path || '' // 暂时这样处理首页params.path为空
    this.$router.replace({ path: '/' + path, query })
  },
  render: function(h) {
    return h() // avoid warning message
  }
}
</script>
