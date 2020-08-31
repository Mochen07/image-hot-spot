<template>
  <div class="el-form-group">
    <el-form
      ref="validForm"
      :inline="inline"
      :size="size"
      :model="formData"
      :rules="formRules"
      :label-width="labelWidth + 'px'"
    >
      <!--eslint-disable-->
      <el-form-item
        v-for="(item,index) in formItemList"
        v-if="!deleteArr.includes(item.key)"
        :key="index"
        :label="item.labelName"
        :prop="item.key"
      >
        <component
          :is="item.component"
          v-if="item.component"
        />

        <slot
          v-if="item.slotName"
          :name="item.slotName"
        />

        <el-input
          v-if="item.type === 'input' && !item.isNumber"
          v-model="formData[item.key]"
          :placeholder="item.placeholder"
          :disabled="item.readonly"
          :type="item.password ? 'password' : 'text'"
          size="small"
        />

        <el-input
          v-if="item.type === 'input' && item.isNumber"
          v-model.number="formData[item.key]"
          :placeholder="item.placeholder"
          :disabled="item.readonly"
          :type="item.password ? 'password' : 'text'"
          size="small"
        />

        <el-input
          v-if="item.type === 'textarea'"
          v-model="formData[item.key]"
          :rows="item.row || 10"
          :placeholder="item.placeholder"
          type="textarea"
        />

        <el-select
          v-if="item.type === 'select'"
          v-model="formData[item.key]"
          clearable
          size="small"
          :placeholder="item.placeholder"
          @change="handleChange(item, formData[item.key])"
        >
          <el-option
            v-for="o in item.option"
            :key="o.value"
            :label="o.label"
            :value="o.value"
          />
        </el-select>

        <el-radio-group
          v-if="item.type === 'radio'"
          v-model="formData[item.key]"
        >
          <el-radio
            v-for="o in item.option"
            :key="o.value"
            :label="o.value"
          >
            {{ o.label }}
          </el-radio>
        </el-radio-group>

        <el-checkbox-group
          v-if="item.type === 'checkbox'"
          v-model="formData[item.key]"
          clearable
          size="small"
        >
          <el-checkbox
            v-for="o in item.option"
            :key="o.value"
            :disabled="o.disabled"
            :label="o.value"
          >
            {{ o.label }}
          </el-checkbox>
        </el-checkbox-group>

        <el-date-picker
          v-if="item.type === 'daterange'"
          v-model="formData[item.key]"
          :value-format="item.valueFormat || 'yyyy-MM-dd'"
          type="daterange"
          size="small"
          range-separator="~"
          start-placeholder="起始日期"
          end-placeholder="截止日期"
        />

        <el-date-picker
          v-if="item.type === 'date'"
          v-model="formData[item.key]"
          :value-format="item.valueFormat || 'yyyy-MM-dd'"
          type="date"
          size="small"
          :placeholder="item.placeholder"
        />

        <ElImgUpload
          v-if="item.type === 'upload'"
          :exist-image="formData[item.key]"
          :place-txt="item.placeholder"
          @handleDelete="handleUploadDelete(item.key)"
          @handleChange="handleUploadChange($event, item.key)"
        />

        <ElImgUploadGroup
          v-if="item.type === 'uploadGroup'"
          :exist-image-list="formData[item.key]"
          @handleChange="handleUploadGroupChange($event, item.key)"
        />
      </el-form-item>

      <div style="text-align:center">
        <slot name="btnSlot" />
        <el-button :loading="isLoading" type="primary" size="small" @click="handleConfirm">
          {{ confirmBtnName }}
        </el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import ElImgUpload from './el-img-upload'
import ElImgUploadGroup from './el-img-upload-group'

export default {
  name: 'ElFormGroup',
  components: {
    ElImgUpload,
    ElImgUploadGroup
  },
  props: {
    labelWidth: {
      type: Number,
      default: 120
    },
    inline: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'small'
    },
    // 验证规则，参考element
    formRules: {
      type: Object,
      default() {
        return {}
      }
    },
    // 表单子项列表
    formItemList: {
      type: Array,
      required: true
    },
    // 初始化数据
    initData: {
      type: Object,
      default() {
        return null
      }
    },

    confirmBtnName: {
      type: String,
      default: '提交'
    },

    needBtnLoading: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isLoading: false,
      formData: {},
      deleteArr: []
    }
  },
  created() {
    if (this.initData) {
      this.formData = this.initData
      return
    }
    this.formItemList.forEach(n => {
      if (n.type === 'checkbox') {
        this.$set(this.formData, n.key, [])
      } else {
        this.$set(this.formData, n.key, '')
      }
    })
  },
  methods: {
    // 如果删除图片
    handleUploadDelete(key) {
      this.formData[key] = ''
    },

    // 上传图片后，将图片信息保存到对应参数中
    handleUploadChange(url, key) {
      this.formData[key] = url
    },

    // 上传图片后，将图片信息保存到对应参数中
    handleUploadGroupChange(list, key) {
      if (Array.isArray(list)) {
        this.formData[key] = list
      }
    },
    handleConfirm() {
      // 将所有的值加入验证
      this.$refs['validForm'].validate(valid => {
        if (valid) {
          // 如果通过验证 是否需要loading
          if (this.needBtnLoading) {
            this.isLoading = true
          }
          this.$emit('handleConfirm', this.formData, this.completed)
        }
      })
    },

    // 取消loading
    completed() {
      this.isLoading = false
    },

    handleChange(item, value) {
      this.deleteArr = []
      item.option.forEach(e => {
        if (value === e.value) {
          if (e.filter) {
            this.deleteArr.push(...e.filter)
          }
        }
      })
    }
  }
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">
.el-form-group{}
</style>
