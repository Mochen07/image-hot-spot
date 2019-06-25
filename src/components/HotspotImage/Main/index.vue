<template>
  <div class="draw-hot">
    <div class="header">
      <div class="textBox">
        <span>活动专题管理</span> /
        <span>设置</span> /
        <span>设置热区</span>
      </div>
      <el-button type="primary" @click="$router.go(-1)">返回</el-button>
    </div>
    <div class="content">
      <OperationFloor/>
    </div>
  </div>
</template>

<script>
import OperationFloor from './OperationFloor'

export default {
  name: 'index',
  components: {
    OperationFloor
  }
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">
.draw-hot{
  .header{
    width: 100%;
    height: 50px;
    background: #ecf0f1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    .textBox{
      border-left: 5px solid #409EFF;
      padding-left: 3px;
      font-size:15px;
      color: #333;
    }
  }
}
</style>
