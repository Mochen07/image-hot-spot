<template>
  <div class="emoji">
    <EmojiBox
      @skinChange="skinChange"
    />
  </div>
</template>

<script>
import EmojiBox from '@/components/plugin/emoji/emoji'
export default {
  name: 'Emoji',
  components: { EmojiBox },
  methods: {
    skinChange(item) {
      this.$notify({
        title: '表情',
        message: item,
        type: 'success'
      })
    }
  }
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">
.emoji{
  display: flex; justify-content: center;
}
</style>
