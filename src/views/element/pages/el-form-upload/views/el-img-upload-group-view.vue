<template>
  <div class="el-img-upload-group-view">
    <el-card>
      <div slot="header" class="clearfix">
        <span>图片组上传Demo</span>
      </div>
      <ElImgUploadGroup
        :exist-img-list="existImgList"
        :length="3"
      />
    </el-card>
  </div>
</template>

<script>
import ElImgUploadGroup from '@/components/plugin/element/form/el-img-upload-group'
export default {
  name: 'ElImgUploadGroupView',
  components: { ElImgUploadGroup },
  data() {
    return {
      existImgList: [this.$store.state.imgDemoUrl]
    }
  }
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">
.el-img-upload-group-view{}
</style>
