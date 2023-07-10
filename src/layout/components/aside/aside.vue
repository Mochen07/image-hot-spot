<template>
  <el-aside id="aside" class="aside" width="200px">
    <el-menu
      :default-active="defaultActive"
      :default-openeds="defaultOpeneds"
    >
      <div v-for="tab in routersList" :key="tab.path">
        <el-menu-item
          v-if="tab.type==='menu-item'"
          :index="tab.path"
          @click="tab.method || routerLinks(tab.path)"
        >
          <i :class="tab.icon" />
          <span slot="title">{{ tab.name }}</span>
        </el-menu-item>

        <el-submenu v-if="tab.type==='submenu'" :index="tab.path">
          <template slot="title">
            <i :class="tab.icon" />
            <span>{{ tab.name }}</span>
          </template>
          <div
            v-for="item in tab.children"
            :key="item.path"
          >
            <el-menu-item
              v-if="!item.method"
              :index="item.path"
              @click="routerLinks(item.path)"
            >
              {{ item.name }}
            </el-menu-item>
            <!--使用三目运算不能正常触发method，改成if-->
            <el-menu-item
              v-else
              :index="item.path"
              @click="item.method"
            >
              {{ item.name }}
            </el-menu-item>
          </div>
        </el-submenu>
      </div>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'Aside',
  data() {
    return {
      /*
      * type: 'menu-item'(单个菜单)、'submenu'(菜单组)
      * */
      routersList: [
        {
          path: '/',
          type: 'menu-item',
          icon: 'el-icon-s-home',
          name: 'Home'
        },
        {
          type: 'submenu',
          path: '/feature',
          icon: 'el-icon-picture-outline-round',
          name: 'Feature',
          children: [
            {
              path: '/feature/image-hot-area',
              name: 'Image Hot Area'
            },
            {
              path: '/feature/TabsView',
              name: 'Tabs View',
              method: this.addTabsView
            },
            {
              path: '/feature/emoji',
              name: 'Emoji'
            },
            {
              path: '/feature/yapi-to-typescript-format',
              name: 'YapiTSFormat'
            }
          ]
        },
        {
          type: 'submenu',
          path: '/element',
          icon: 'el-icon-message',
          name: 'Element',
          children: [
            {
              path: '/element/table',
              name: 'Table'
            },
            {
              path: '/element/form',
              name: 'Form'
            }
          ]
        }
      ],
      defaultActive: this.activeTab,
      // 默认打开的tabs: ['/feature']
      defaultOpeneds: []
    }
  },
  mounted() {
    const path = this.$route.path
    if (path.indexOf('/feature/TabsView') === -1) {
      this.defaultActive = path
    } else {
      this.defaultActive = '/feature/TabsView'
    }
  },
  methods: {
    routerLinks(path) {
      if (this.$route.path !== path) {
        this.$router.push(path)
      }
    },
    addTabsView() {
      console.log('作弊添加TabsView')
      this.$router.push(`/feature/TabsView${new Date() + Math.floor(Math.random() * 100)}`)
    }
  }
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">
.aside{
  background-color: rgb(238, 241, 246)
}
</style>
