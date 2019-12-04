<template>
  <div id="aside" class="aside">
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
          <el-menu-item index="1-2" @click="addTabsView">
            Tabs View
          </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-message" />
            <span>Element</span>
          </template>
          <el-menu-item index="2-1" @click="routerLinks('/element/table')">
            Table
          </el-menu-item>
          <el-menu-item index="2-2" @click="routerLinks('/element/form')">
            Form
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  methods: {
    routerLinks(path) {
      if (this.$route.path !== path) {
        this.$router.push(path)
      }
    },
    addTabsView() {
      console.log('作弊添加TabsView')
      this.$router.push(`/feature/${new Date() + Math.floor(Math.random() * 100)}`)
    }
  }
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">
.aside{}
</style>
