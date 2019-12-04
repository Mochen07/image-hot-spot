<template>
  <div id="layout" class="layout">
    <el-container style="height: 100vh; border: 1px solid #eee">
      <Aside />

      <el-container>
        <el-header>
          Header
        </el-header>

        <!--页面标签栏-->
        <TagsView />

        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { TagsView, Aside } from './components'
export default {
  name: 'Layout',
  components: { TagsView, Aside }
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">
.layout{
  aside,main{
    /*滚动条样式设置*/
    &::-webkit-scrollbar {
      width: 0.4em;
      height: 0.4em;
    }
    &:hover::-webkit-scrollbar-thumb {
      background-color: rgba(0,0,0,.1);
      border-radius: 0.5em;
      -webkit-box-shadow: inset 1px 1px 0 rgba(0,0,0,.1);
    }
    /*滑块*/
    &::-webkit-scrollbar-thumb {
      background-color: rgba(0,0,0,.1);
      border-radius: 0.5em;
      -webkit-box-shadow: inset 1px 1px 0 rgba(0,0,0,.1);
    }
    /*滑块轨道*/
    &::-webkit-scrollbar-track {
      border-radius: 0.5em;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0);
    }
  }
  .el-header {
    width: 100%;
    font-size: 12px;
    background-color: #dddd;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
}
</style>
