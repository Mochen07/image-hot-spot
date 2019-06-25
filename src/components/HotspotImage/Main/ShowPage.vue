<template>
  <div class="showPage">
    <div
      v-for="(items, indexs) in areaData"
      :key="indexs"
      class="showPageBox"
    >
      <img
        ref="backgrounds"
        ondragstart="return false;"
        oncontextmenu="return false;"
        onselect="document.selection.empty();"
        src="../../../assets/hotAreaImage.png"
        alt=""
        usemap="#linkmap"
      >
      <map id="linkmap" name="linkmap">
        <area
          v-for="(item, index) in items"
          id="area-link-box-1"
          :key="index"
          shape="rect"
          :target="item.target"
          :coords="`${item.starX*ratio},${item.starY*ratio},${(item.starX+item.areaWidth)*ratio},${(item.starY+item.areaHeight)*ratio}`"
          :href="item.url"
        >
      </map>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowPage',
  data() {
    return {
      areaData: [
        [
          {
            'starX': 19,
            'starY': 63,
            'areaWidth': 36,
            'areaHeight': 52,
            'nowImgWidth': 1000,
            'url': 'http://baidu.com',
            'target': '_self'
          }, {
            'starX': 281,
            'starY': 292,
            'areaWidth': 431,
            'areaHeight': 312,
            'nowImgWidth': 1000,
            'url': 'http://baidu.com',
            'target': '_blank'
          }
        ],
        [
          {
            'starX': 19,
            'starY': 63,
            'areaWidth': 36,
            'areaHeight': 52,
            'nowImgWidth': 1000,
            'url': 'http://baidu.com',
            'target': '_self'
          }, {
            'starX': 281,
            'starY': 292,
            'areaWidth': 431,
            'areaHeight': 312,
            'nowImgWidth': 1000,
            'url': 'http://baidu.com',
            'target': '_blank'
          }
        ],
        [
          {
            'starX': 19,
            'starY': 63,
            'areaWidth': 36,
            'areaHeight': 52,
            'nowImgWidth': 1000,
            'url': 'http://baidu.com',
            'target': '_self'
          }, {
            'starX': 281,
            'starY': 292,
            'areaWidth': 431,
            'areaHeight': 312,
            'nowImgWidth': 1000,
            'url': 'http://baidu.com',
            'target': '_blank'
          }
        ]
      ],
      ratio: null
    }
  },
  mounted() {
    // 本地获取热区信息(因为只有一张图片就只接保存在里面)
    const areaData = JSON.parse(localStorage.getItem('areaData'))
    if (areaData && areaData.length) {
      this.areaData = []
      this.areaData[0] = JSON.parse(localStorage.getItem('areaData'))
    }
    // console.log(this.areaData)
    const a = this.areaData[0][0].nowImgWidth
    const timer = setInterval(() => {
      const b = this.$refs.backgrounds[0].width
      if (b !== 0) {
        this.ratio = (b / a).toFixed(2)
        console.log(this.ratio)
        clearInterval(timer)
      }
    }, 0)
  }
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">
  .showPage {
    display: flex;
    flex-direction: column;
    align-items: center;

    .showPageBox {
      img {
        width: 100%;
        vertical-align:middle
      }
    }
  }
</style>
