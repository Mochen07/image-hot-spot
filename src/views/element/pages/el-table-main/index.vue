<template>
  <div class="el-table-container">
    <el-table-main />
  </div>
</template>

<script>
const path = require('path')
const files = require.context('./views', false, /\.vue$/)
const modules = {}
files.keys().forEach(key => {
  const name = path.basename(key, '.vue')
  modules[name] = files(key).default || files(key)
})
export default {
  name: 'ElTableContainer',
  components: modules
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">
.el-table-container{}
</style>
