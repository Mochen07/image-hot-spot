<template>
  <div class="operationFloor">
    <!--<div class="header">
      <div class="titleBox">
        <div class="name">
          网页名称:618大降价
        </div>
        <div class="btnBox">
          <el-button type="primary" @click="saveAreaData">
            保存热区
          </el-button>
        </div>
      </div>
      <div class="textBox">
        提示提示提示提示
      </div>
    </div>-->
    <div
      class="imgBox"
      @mouseup.left.stop="changeStop()"
    >
      <div class="container">
        <img
          ref="backgroundImg"
          src="../../../assets/hotAreaImage.png"
          ondragstart="return false;"
          oncontextmenu="return false;"
          onselect="document.selection.empty();"
          alt=""
          @mousedown.left.stop="mouseDown($event)"
        >
        <!--绘制的热区-->
        <div
          v-show="caseShow"
          class="area"
          :style="{width: areaWidth+'px',height: areaHeight+'px',left: starX+'px',top: starY+'px'}"
        />
        <!--已有的热区-->
        <AreaBox
          v-for="(item, index) in areaData"
          :id="index"
          :key="index"
          :area-init.sync="item"
          @DelAreaBox="DelAreaBox"
          @addURL="addURL"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AreaBox from './AreaBox'

export default {
  name: 'OperationFloor',
  components: {
    AreaBox
  },
  data() {
    return {
      starX: 0,
      // endX: 0,
      starY: 0,
      // endY: 0,
      areaWidth: 0,
      areaHeight: 0,
      caseShow: false,
      nowImgWidth: null,
      areaData: []
    }
  },
  mounted() {
    // 显示之前添加的热区
    const areaData = JSON.parse(localStorage.getItem('areaData'))
    if (areaData && areaData.length) {
      this.areaData = areaData
    }
  },
  methods: {
    // 绘画热区开始
    mouseDown(e) {
      this.caseShow = true
      // 记录滑动的初始值
      this.starX = e.layerX
      this.starY = e.layerY
      // 鼠标滑动的过程
      if (!document.onmousemove) {
        document.onmousemove = (ev) => {
          this.areaWidth = ev.layerX - this.starX
          this.areaHeight = ev.layerY - this.starY
        }
      }
    },
    // 绘画热区结束
    changeStop() {
      document.onmousemove = null
      if (this.caseShow && this.areaWidth > 10 && this.areaHeight > 10) {
        const data = {
          starX: this.starX,
          starY: this.starY,
          areaWidth: this.areaWidth,
          areaHeight: this.areaHeight,
          nowImgWidth: this.$refs.backgroundImg.width,
          url: null,
          target: '_self'
        }
        this.areaData.push(data)
        // console.log(this.areaData)
      }
      // 初始化绘图
      this.caseShow = false
      this.starX = 0
      this.starY = 0
      this.areaWidth = 0
      this.areaHeight = 0
    },
    // 删除指定热区
    DelAreaBox(id) {
      this.areaData.splice(id, 1)
    },
    // 添加网址
    addURL(id, urlData) {
      this.areaData[id].url = urlData.url
      this.areaData[id].target = urlData.select
      this.$message.success('添加成功')
      console.log(this.areaData)
    },
    // 保存热区信息
    saveAreaData() {
      if (this.areaData === []) {
        this.$message.error('没有可保存的信息')
      } else {
        localStorage.setItem('areaData', JSON.stringify(this.areaData))
        this.$message.success('保存成功')
        // console.log(this.areaData)
      }
    },
    // 清除热区信息
    clearHotSpotInfo() {
      localStorage.removeItem('areaData')
      this.areaData = []
    }
  }
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">
  .operationFloor {
    position: relative;
    .header{
      .titleBox{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        .name{
          font-size: 13px;
          font-weight: bold;
        }
      }
      .textBox{
        font-size: 12px;
        color: #777;
        margin-bottom: 10px;
      }
    }
    .imgBox {
      display: flex;
      justify-content: center;
      .container{
        position: relative;
        overflow: hidden;
      }
      img {
        cursor: crosshair;
      }
      .area {
        position: absolute;
        width: 200px;
        height: 200px;
        left: 200px;
        top: 300px;
        background: rgba(#2980b9, 0.3);
        border: 1px dashed #34495e;
      }
    }
  }
</style>
