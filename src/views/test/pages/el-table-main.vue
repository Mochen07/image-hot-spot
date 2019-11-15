<template>
  <div class="container">
    <el-card>
      <ElTableMain
        :columns="tableColumns"
        :data="tableData"
        :operation="['check']"
        :operation-custom-length="2"
        :page-size="5"
        :total="total"
        @handleCheck="handleCheck"
        @handleCurrentChange="handleCurrentChange"
      />
    </el-card>

    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <ElTableSelect
        :columns="tableColumns"
        :data="tableData"
        :operation="['check']"
        :is-selection="true"
        :page-size="5"
        :total="total"
        @handleCurrentChange="handleCurrentChange"
      />
    </el-dialog>
  </div>
</template>

<script>
import ElTableMain from '@/components/plugin/element/el-table-man'
import ElTableSelect from '@/components/plugin/element/el-table-select'
export default {
  name: 'Container',
  components: {
    ElTableMain, ElTableSelect
  },
  data() {
    return {
      total: 0,
      dialogTableVisible: true,
      tableColumns: [
        {
          prop: 'index',
          label: '序号',
          width: 70
        },
        {
          prop: 'name',
          label: '名称'
        },
        {
          prop: 'sex',
          label: '性别'
        },
        {
          prop: 'pint',
          label: '学分'
        },
        {
          prop: 'remark',
          label: '备注'
        }
      ],
      tableData: [],
      totalData: []
    }
  },
  mounted() {
    // 模拟数据
    const a = []
    const b = [
      {
        index: 1,
        name: '张飞',
        sex: '男',
        pint: 0,
        remark: '学习态度不端正'
      },
      {
        index: 2,
        name: '项羽',
        sex: '男',
        pint: 6,
        remark: '🐖鼻子插大葱'
      },
      {
        index: 3,
        name: '诸葛亮',
        sex: '男',
        pint: 100,
        remark: '神童！'
      }
    ]
    for (let i = 0; i < 7; i++) {
      for (const j in b) {
        a.push(b[j])
      }
    }
    this.totalData = JSON.parse(JSON.stringify(a))
    this.totalData.forEach((item, index) => {
      item.index = index + 1
    })
    this.total = this.totalData.length
    // 模拟数据
    this.handleCurrentChange(1)
  },
  methods: {
    handleCheck() {
      this.$message.success('点击了查看')
      this.dialogTableVisible = !this.dialogTableVisible
    },
    handleCurrentChange(page) {
      this.$message.success(`当前第${page}页面`)
      const a = JSON.parse(JSON.stringify(this.totalData))
      this.tableData = a.splice((page - 1) * 5, 5)
    }
  }
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">
.container{
  padding: 20px;
}
</style>
