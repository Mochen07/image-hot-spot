<template>
  <div id="layout" class="layout">
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu
          default-active="0"
          :default-openeds="['1']"
        >
          <el-menu-item index="0" @click="routerLinks('/')">
            <i class="el-icon-s-home" />
            <span slot="title">home</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-picture-outline-round" />
              <span>feature</span>
            </template>
            <el-menu-item index="1-1" @click="routerLinks('/feature/image-hot-area')">
              image-hot-spot
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-message" />
              <span>element</span>
            </template>
            <el-menu-item index="1-1" @click="routerLinks('/element/table')">
              table
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header>
          header
        </el-header>

        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  methods: {
    routerLinks(path) {
      if (this.$route.path !== path) {
        this.$router.push(path)
      }
    }
  }
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
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
}
</style>
