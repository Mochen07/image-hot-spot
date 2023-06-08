<!--
@Description: 封装element table select组件
@Last-edit-date: 2019.11.16
@Easy o.o <<<<<<<
<ElTableSelect
  :columns="tableColumns"
  :data="tableData"
  :operation="['check']"
  :is-selection="true"
  :page-size="5"
  :total="total"
  :judgeValue="'index'"
  @handleCurrentChange="handleCurrentChange"
  @handleConfirm="handleConfirm"
  @handleCancel="handleCancel"
/>
-->
<template>
  <section class="el-table-container">
    <el-table
      ref="tableGroup"
      :data="data"
      :highlight-current-row="true"
      :row-key="getRowKeys"
      border
      stripe
      size="small"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      @select="handleSelect"
      @select-all="handleSelectAll"
    >
      <!--多选列-->
      <el-table-column
        v-if="isSelection"
        type="selection"
        align="center"
        width="55"
        :selectable="isCheckbox"
      />

      <!-- 展示列 -->
      <template v-for="(column, index) in columns">
        <slot
          v-if="column.slotName"
          :name="column.slotName"
        />
        <component
          :is="column.component"
          v-if="column.component"
          :key="index"
          :params="column.params"
        />
        <el-table-column
          v-if="column.prop"
          :key="index"
          :label="column.label"
          :prop="column.prop"
          :width="column.width"
          :class-name="column.className"
          align="center"
        />
      </template>

      <!-- 操作列 -->
      <el-table-column
        :width="fixedWidth"
        label="操作"
        fixed="right"
        align="center"
      >
        <template slot-scope="scope">
          <el-button v-if="operationGroup('edit')" icon="el-icon-edit" type="success" size="mini" @click="handleEdit(scope.$index, scope.row)">
            编辑
          </el-button>
          <el-button v-if="operationGroup('insert')" icon="el-icon-plus" size="mini" @click="handleInsert(scope.$index, scope.row)">
            增加
          </el-button>
          <el-button v-if="operationGroup('delete')" icon="el-icon-close" type="danger" size="mini" @click="handleDelete(scope.$index, scope.row)">
            删除
          </el-button>
          <el-button v-if="operationGroup('check')" icon="el-icon-info" type="info" size="mini" @click="handleCheck(scope.$index, scope.row)">
            查看
          </el-button>
          <!-- 自定义按钮 -->
          <span
            v-if="operationGroup('custom')"
            style="display:inline-block;"
          >
            <!--eslint-disable-->
            <el-button
              v-for="(i,index) in customList"
              v-if="!i.condition || i.condition.value.indexOf(scope.row[i.condition.key]) >= 0"
              :key="index"
              :icon="i.icon"
              :type="i.btnType"
              size="mini"
              @click="handleCustom(scope.$index, scope.row, i.handler)"
            >
              {{ i.buttonName }}
            </el-button>
          </span>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      v-if="isPagination"
      background
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      :layout="layout"
      :total="total"
      class="el-pagination-c"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />

    <el-row class="el-row-select">
      <el-col :offset="18" :span="3" class="el-col-select">
        <el-button type="primary" size="small" @click="handleConfirm">确定</el-button>
      </el-col>
      <el-col :span="3" class="el-col-select">
        <el-button size="small" @click="handleCancel">取消</el-button>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  name: 'ElTableSelect',
  props: {
    /*
    * 表格
    * */
    // 表格展示列
    columns: {
      type: Array,
      required: true
    },
    // 表格数据
    data: {
      type: Array,
      required: true
    },
    // 是否显示多选列
    isSelection: {
      type: Boolean,
      default: false
    },
    // 操作组
    // 自定义按钮{icon: '图标', btnType: '按钮类型', handler: '执行的方法', buttonName: '按钮名字',condition: {} 显示判别值}
    operation: {
      type: Array,
      default: () => []
    },
    // 传入自定义按钮时，需要延展宽度的最大值
    operationCustomLength: {
      type: Number,
      default: 0
    },
    // 回显判别值的name
    judgeValue: {
      required: true,
      type: String
    },

    /*
    * 分页
    * */
    // 是否显示
    isPagination: {
      type: Boolean,
      default: true
    },
    total: {
      type: Number,
      default: 0
    },
    // 当前页面
    currentPage: {
      type: Number,
      default: 1
    },
    // 自定义每页面数量组
    pageSizes: {
      type: Array,
      default: () => [10, 20, 50, 100]
    },
    // 每页面数量
    pageSize: {
      type: Number,
      default: 10
    },
    // total 数据总量, sizes 每页面数量组, prev 上一页, pager, next 下一页, jumper 页面跳转
    layout: {
      type: String,
      default: 'prev, pager, next, jumper'
    },
    // 判断选择是否禁用
    isCheckbox: {
      type: Function,
      default: (row, index) => {
        return true
      }
    }
  },
  data() {
    return {
      getRowKeys(row) {
        return row.index
      },
      cacheCurrentPage: 1,
      cacheSelectData: []
    }
  },
  computed: {
    // 操作按钮的宽度自适应
    fixedWidth() {
      return this.operationCustomLength ? this.operationCustomLength * 110 - 5 : this.operation.length * 110 - 5
    }
  },
  mounted() {
    this.cacheCurrentPage = this.currentPage
  },
  methods: {
    /*
    * 表格
    * */
    // 筛选行的操作
    operationGroup(affix) {
      if (affix === 'custom') {
        // 自定义列表
        this.customList = this.operation.filter(n => {
          return typeof n === 'object'
        })
        return this.customList
      } else {
        // 固定
        return this.operation.indexOf(affix) >= 0
      }
    },
    // 自定义事件触发
    handleCustom(index, row, handler) {
      this.$emit(handler, index, row)
    },
    // 编辑事件
    handleEdit(index, row) {
      this.$emit('handleEdit', index, row)
    },
    // 插入事件
    handleInsert(index, row) {
      this.$emit('handleInsert', index, row)
    },
    // 删除事件
    handleDelete(index, row) {
      this.$confirm('确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$emit('handleDelete', index, row)
      })
    },
    // 查看事件
    handleCheck(index, row) {
      this.$emit('handleCheck', index, row)
    },
    // 选中改变事件
    handleSelectionChange(val) {
      this.$emit('handleSelectionChange', val)
    },
    // 单个选中事件
    handleSelect(list) {
      this.cacheSelectData[this.cacheCurrentPage] = list
      this.$emit('handleSelect', list)
    },
    // 全选事件
    handleSelectAll(list) {
      // 防止指针错乱
      this.cacheSelectData[this.cacheCurrentPage] = list.length ? list : null
      this.$emit('handleSelect', list)
    },
    // 单行选中
    setSelection(row, bool) {
      this.$refs.tableGroup.toggleRowSelection(row, bool)
    },
    // 清空选中
    clearSelection() {
      this.$refs.tableGroup.clearSelection()
    },
    // 分页选择回显
    echoSelection(currentPageSelectList) {
      if (currentPageSelectList) {
        const _list = this.data.filter(row => {
          return currentPageSelectList.some(item => {
            return item[this.judgeValue] === row[this.judgeValue]
          })
        })
        _list.forEach(row => {
          this.setSelection(row)
          // or
          // this.$refs.tableGroup.toggleRowSelection(row)
        })
      }
    },

    /*
    * 分页
    * */
    handleSizeChange(num) {
      this.$emit('handleSizeChange', num)
    },
    handleCurrentChange(page) {
      this.$emit('handleCurrentChange', page)
      this.cacheCurrentPage = page
      // 等待表格数据回显
      setTimeout(() => {
        this.echoSelection(this.cacheSelectData[page])
      }, 500)
    },

    /*
    * 按钮
    * */
    // 确定
    handleConfirm() {
      // 所有选中的数据
      const _AllSelectData = [].concat(...this.cacheSelectData).filter((item) => {
        return item !== null && typeof item === 'object'
      })
      this.$emit('handleConfirm', _AllSelectData)
      this.cacheSelectData = []
      this.clearSelection()
    },
    // 取消
    handleCancel() {
      this.cacheSelectData = []
      this.$emit('handleCancel')
      this.clearSelection()
    }
  }
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">
  .el-table-container{
    .el-pagination-c{
      float: right;
      margin-top: 1.5em;
    }
    .el-row-select{
      margin-top: 6em;
      .el-col-select{
        text-align: center;
      }
    }
  }
</style>
