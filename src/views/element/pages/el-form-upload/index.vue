<template>
  <div class="el-form-container">
    <el-form-upload />
    <el-img-upload-view />
    <el-img-upload-group-view />
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
  name: 'ElFormContainer',
  components: modules
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">
.el-form-container{
  &>div{
    margin-top: 20px;
  }
  &>div:first-of-type{
    margin-top: 0;
  }
}
</style>
