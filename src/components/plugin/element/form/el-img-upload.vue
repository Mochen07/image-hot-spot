<template>
  <div class="el-img-upload">
    <el-upload
      :action="uploadUrl"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      class="avatar-uploader"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon" />
      <i v-if="imageUrl" class="el-icon-circle-close" @click.stop="handleDelete" />
      <div slot="tip" class="el-upload__tip">
        {{ placeTxt }}
      </div>
    </el-upload>
  </div>
</template>

<script>
const uploadUrl = process.env.NODE_ENV === 'production' ? 'https://jsonplaceholder.typicode.com/posts/' : 'https://jsonplaceholder.typicode.com/posts/'
export default {
  name: 'ElImgUpload',
  props: {
    existImage: {
      type: String,
      default: ''
    },
    placeTxt: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      uploadUrl,
      imageUrl: ''
    }
  },
  watch: {
    existImage(val) {
      this.imageUrl = val
    }
  },
  created() {
    this.imageUrl = this.existImage
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = res.fileUrl
      this.$emit('handleChange', this.imageUrl)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG或者PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    handleDelete() {
      this.$confirm('确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.imageUrl = ''
        this.$emit('handleDelete')
      })
    }
  }
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">
.el-img-upload{}
</style>

<style lang="scss">
  .el-img-upload{
    .el-upload {
      width: 120px;
      height: 120px;
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      .el-icon-plus{
        font-size: 30px;
        color: #999999;
      }
      .el-icon-circle-close{
        position: absolute;
        color: #999999;
        top: 2px;
        right: 2px;
        z-index: 100;
        font-size: 15px;
        opacity: 0.5;
        transition: opacity 0.2s;
        &:hover{
          opacity: 0.8;
          color: #ef032a;
        }
      }
    }
  }
</style>
