<template>
  <div class="el-img-upload-group">
    <ElImgUpload
      v-for="(i,index) in imgList"
      :key="index"
      :exist-image="i"
      @handleDelete="handleDelete(index)"
      @handleChange="handleChange($event, index)"
    />
    <el-upload
      :action="uploadUrl"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      class="avatar-uploader"
    >
      <i class="el-icon-plus avatar-uploader-icon" />
    </el-upload>
  </div>
</template>

<script>
import ElImgUpload from './el-img-upload'

const uploadUrl = process.env.NODE_ENV === 'production' ? 'https://jsonplaceholder.typicode.com/posts/' : 'https://jsonplaceholder.typicode.com/posts/'
export default {
  name: 'ElImgUploadGroup',
  components: {
    ElImgUpload
  },
  props: {
    existImgList: {
      type: Array,
      default() {
        return []
      }
    },
    length: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      uploadUrl,
      imgList: []
    }
  },
  watch: {
    existImgList(val) {
      this.imgList = this.existImgList
    }
  },
  created() {
    this.imgList = this.existImgList
  },
  methods: {
    handleDelete(index) {
      this.imgList.splice(index, 1)
    },
    handleChange(e, index) {
      this.imgList[index] = e
    },
    handleAvatarSuccess(res, file) {
      if (this.imgList.length <= this.length - 1) {
        this.imgList.push(res.fileUrl)
      } else {
        // 超出最后一张替换
        // this.imgList.splice(this.length - 1, 1, res.fileUrl)
        // 提示
        this.$message.error('超出上传限制')
      }
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
    }
  }
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">
.el-img-upload-group{
  display: flex;
  >div{
    margin-right: 20px;
  }
}
</style>
<style lang="scss">
  .el-img-upload-group{
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
