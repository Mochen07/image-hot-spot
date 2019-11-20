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
            <span slot="title">Home</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-picture-outline-round" />
              <span>Feature</span>
            </template>
            <el-menu-item index="1-1" @click="routerLinks('/feature/image-hot-area')">
              Image Hot Area
            </el-menu-item>
            <el-menu-item index="1-1" @click="addTabsView">
              Tabs View
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-message" />
              <span>Element</span>
            </template>
            <el-menu-item index="1-1" @click="routerLinks('/element/table')">
              Table
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header>
          <TagsView />
        </el-header>

        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { TagsView } from './components'
export default {
  name: 'Layout',
  components: { TagsView },
  methods: {
    routerLinks(path) {
      if (this.$route.path !== path) {
        this.$router.push(path)
      }
    },
    addTabsView() {
      console.log('作弊添加TabsView')
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
