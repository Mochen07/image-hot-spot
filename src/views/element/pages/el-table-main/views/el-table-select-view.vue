<template>
  <div class="el-table-select-view">
    <el-card>
      <div slot="header">
        <span>分页多选表格</span>
      </div>
      <el-button type="text" @click="handlePopup">
        弹出
      </el-button>
    </el-card>
    <el-dialog title="学生成绩" :visible.sync="dialogTableVisible">
      <ElTableSelect
        :columns="tableColumns"
        :data="tableData"
        :operation="['check']"
        :is-selection="true"
        :page-size="5"
        :total="total"
        :judge-value="'index'"
        @handleCurrentChange="handleCurrentChange"
        @handleConfirm="handleConfirm"
        @handleCancel="handleCancel"
      />
    </el-dialog>
  </div>
</template>

<script>
import ElTableSelect from '@/components/plugin/element/table/el-table-select'
export default {
  name: 'ElTableSelectView',
  components: { ElTableSelect },
  data() {
    return {
      total: 0,
      dialogTableVisible: false,
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
      a.push(...b)
    }
    this.totalData = JSON.parse(JSON.stringify(a))
    this.totalData.forEach((item, index) => {
      item.index = index + 1
    })
    this.total = this.totalData.length
  },
  methods: {
    handlePopup() {
      // 模拟数据
      this.dialogTableVisible = true
      this.handleCurrentChange(1)
    },
    handleCurrentChange(page) {
      this.$message.success(`当前第${page}页面`)
      const a = JSON.parse(JSON.stringify(this.totalData))
      this.tableData = a.splice((page - 1) * 5, 5)
    },
    handleConfirm(data) {
      this.dialogTableVisible = false
      this.$notify({
        title: '选择的数据',
        message: `一共选择了${data.length}条数据`,
        duration: 4500,
        type: 'success'
      })
      console.log(data)
    },
    handleCancel() {
      this.dialogTableVisible = false
    }
  }
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">
.el-table-select-view{}
</style>
