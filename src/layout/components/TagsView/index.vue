<template>
  <div id="tags-view-container" class="tags-view-container">
    <scroll-pane ref="scrollPane" class="tags-view-wrapper">
      tags-view
    </scroll-pane>
  </div>
</template>

<script>
import ScrollPane from './ScrollPane'

export default {
  name: 'TagsView',
  components: { ScrollPane }
}
</script>

<style lang="scss" scoped>
</style>
