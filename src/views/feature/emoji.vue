<template>
  <div class="emoji">
    <EmojiBox
      width="auto"
      height="370px"
      @skinChange="skinChange"
    />
  </div>
</template>

<script>
import EmojiBox from '@/components/plugin/emoji/emoji'
import { handleCopy } from '@/utils/func.js'
export default {
  name: 'Emoji',
  components: { EmojiBox },
  methods: {
    skinChange(item) {
      handleCopy(item, () => {
        this.$notify({
          title: '复制成功',
          message: item,
          type: 'success'
        })
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
