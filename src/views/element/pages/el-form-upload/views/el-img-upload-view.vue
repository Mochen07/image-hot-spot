<template>
  <div class="el-img-upload-view">
    <el-card>
      <div slot="header" class="clearfix">
        <span>图片上传Demo</span>
      </div>
      <ElImgUpload
        :exist-image="this.$store.state.imgDemoUrl"
        place-txt="自定义上传图片表述..."
        @handleChange="handleChange"
        @handleDelete="handleDelete"
      />
    </el-card>
  </div>
</template>

<script>
import ElImgUpload from '@/components/plugin/element/form/el-img-upload'
export default {
  name: 'ElImgUploadView',
  components: { ElImgUpload },
  methods: {
    handleChange(imgUrl) {
      console.log('上传成功的图片地址: ' + imgUrl)
    },
    handleDelete() {
      console.log('删除图片信息')
    }
  }
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">
.el-img-upload-view{}
</style>
