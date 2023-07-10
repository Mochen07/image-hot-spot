<template>
  <el-row>
    <el-col :span="12">
      <label for="input">输入：</label>
      <el-input
        v-model="input"
        type="textarea"
        :rows="200"
        placeholder="请输入内容"
      />
    </el-col>
    <el-col :span="12">
      <label for="output">输出：</label>
      <el-input
        type="textarea"
        :rows="200"
        placeholder="请输入内容"
        :value="output"
      />
    </el-col>
  </el-row>
</template>

<script>
function func1(code) {
  return code.replace(/(?<=\n\s*)\/\*\*\s*([\s\S]*?)\s*\*\//g, function(match) {
    return match.replace(/\/\*\*\s*([\s\S]*?)\s*(?:\*\/|$)/g, '//$1')
  })
}
function func2(code) {
  return code.replace(/(^|\n)(\s*)\/\/\*\s*(.*?)(\s*)\n/g, function(
    match,
    p1,
    p2,
    p3,
    p4
  ) {
    return p1 + p2 + '// ' + p3.trim() + '\n'
  })
}
export default {
  data() {
    return {
      input: ''
    }
  },
  computed: {
    output() {
      return func2(func1(this.input))
    }
  }
}
</script>
