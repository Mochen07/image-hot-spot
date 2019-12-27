<template>
  <div id="tags-view-container" class="tags-view-container">
    <!--@wheel.native.prevent="handleScroll"-->
    <scroll-pane ref="scrollPane" class="tags-view-wrapper">
      <router-link
        v-for="tag in visitedViews"
        :key="tag.path"
        :to="tag.path"
        :class="isActive(tag)?'active':''"
        class="tags-view-item"
        @click.middle.native="!isAffix(tag)?closeSelectedTag(tag):''"
        @contextmenu.prevent.native="openMenu(tag,$event)"
      >
        {{ tag.title }}
        <span v-if="!isAffix(tag)" class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)" />
      </router-link>
    </scroll-pane>
    <ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
      <li @click="refreshSelectedTag(selectedTag)">
        刷新
      </li>
      <li v-if="!isAffix(selectedTag)" @click="closeSelectedTag(selectedTag)">
        关闭
      </li>
      <li @click="closeOthersTags(selectedTag)">
        关闭其他
      </li>
      <li @click="closeAllTags">
        关闭所有
      </li>
    </ul>
  </div>
</template>

<script>
import ScrollPane from './ScrollPane'

export default {
  name: 'TagsView',
  components: { ScrollPane },
  data() {
    return {
      visible: false,
      top: 0,
      left: 0,
      selectedTag: {}
    }
  },
  computed: {
    visitedViews() {
      return this.$store.state.tagsView.visitedViews
    }
  },
  watch: {
    $route() {
      this.addTags()
    },
    visible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  mounted() {
    this.addTags()
  },
  methods: {
    handleScroll(e) {
      console.log(e)
    },
    isActive(route) {
      return route.path === this.$route.path
    },
    isAffix(tag) {
      return tag.meta && tag.meta.affix
    },
    addTags() {
      const { name } = this.$route
      if (name) {
        this.$store.dispatch('tagsView/addVisitedView', this.$route)
      }
      return false
    },
    closeSelectedTag(view) {
      this.$store.dispatch('tagsView/delVisitedView', view).then((visitedViews) => {
        if (this.isActive(view)) {
          this.toLastView(visitedViews, view)
        }
      })
    },
    toLastView(visitedViews, view) {
      const latestView = visitedViews.slice(-1)[0]
      if (latestView) {
        this.$router.push(latestView.fullPath)
      } else {
        this.$router.push('/')
      }
    },
    openMenu(tag, e) {
      console.log('鼠标右键事件', tag, e)
      const menuMinWidth = 105
      const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
      const offsetWidth = this.$el.offsetWidth // container width
      const maxLeft = offsetWidth - menuMinWidth // left boundary
      const left = e.clientX - offsetLeft + 15 // 15: margin right

      if (left > maxLeft) {
        this.left = maxLeft
      } else {
        this.left = left
      }

      this.top = e.layerY
      this.visible = true
      this.selectedTag = tag
    },
    closeMenu() {
      console.log('关闭菜单')
      this.visible = false
    },
    refreshSelectedTag(view) {
      const { fullPath } = view
      this.$nextTick(() => {
        this.$router.replace({
          path: '/redirect' + fullPath
        })
      })
    },
    closeOthersTags(view) {
      this.$store.dispatch('tagsView/delOthersVisitedViews', view).then((visitedViews) => {
        this.toLastView(visitedViews, view)
      })
    },
    closeAllTags(view) {
      this.$store.dispatch('tagsView/delAllVisitedViews').then((visitedViews) => {
        // if (this.affixTags.some(tag => tag.path === view.path)) {
        //   return
        // }
        this.toLastView(visitedViews, view)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  $themeColors: #409EFF;

  .tags-view-container{
    white-space: nowrap;
    border-top: 1px solid #d8dce5;
    border-bottom: 1px solid #d8dce5;
    position: relative;

    .tags-view-wrapper {
      padding: 4px 0;

      .tags-view-item{
        display: inline-block;
        position: relative;
        cursor: pointer;
        height: 26px;
        line-height: 26px;
        border: 1px solid #d8dce5;
        color: #495060;
        background: #fff;
        padding: 0 8px;
        font-size: 12px;
        margin-left: 5px;
        text-decoration: none;
        &:first-of-type {
          margin-left: 15px;
        }
        &:last-of-type {
          margin-right: 15px;
        }
        &.active {
          background-color: $themeColors;
          color: #fff;
          border-color: $themeColors;
          &::before {
            content: '';
            background: #fff;
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            position: relative;
            margin-right: 2px;
          }
        }
        .el-icon-close {
          width: 16px;
          height: 16px;
          vertical-align: 2px;
          border-radius: 50%;
          text-align: center;
          transition: all .3s cubic-bezier(.645, .045, .355, 1);
          transform-origin: 100% 50%;
          &:before {
            transform: scale(.6);
            display: inline-block;
            vertical-align: -3px;
          }
          &:hover {
            background-color: #b4bccc;
            color: #fff;
          }
        }
      }
    }

    .contextmenu {
      margin: 0;
      background: #fff;
      z-index: 3000;
      position: absolute;
      list-style-type: none;
      padding: 5px 0;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 400;
      color: #333;
      box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
      li {
        margin: 0;
        padding: 7px 16px;
        cursor: pointer;
        &:hover {
          background: #eee;
        }
      }
    }
  }
</style>
