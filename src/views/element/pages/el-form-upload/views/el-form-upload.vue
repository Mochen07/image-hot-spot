<template>
  <div class="el-form-upload">
    <el-card>
      <div slot="header" class="clearfix">
        <span>表单提交组件Demo</span>
      </div>
      <ElFormGroup
        :label-width="200"
        :init-data="initData"
        :form-rules="formRules"
        :form-item-list="formItemList"
        @handleConfirm="handleConfirm"
      >
        <div slot="selectSpecialty">
          <span>123</span>
        </div>
      </ElFormGroup>
    </el-card>
  </div>
</template>

<script>
import ElFormGroup from '@/components/plugin/element/form/el-form-group'

/* 手机号*/
function validateMobile(rule, value, callback) {
  if (/^[1][0-9]{10}$/.test(value)) {
    callback()
  } else {
    callback(new Error('请输入正确的手机号码'))
  }
}

/* 图片上传不为空*/
function validateUploadImg(rule, value, callback) {
  if (value) {
    callback()
  } else {
    callback(new Error('请上传图片'))
  }
}
export default {
  name: 'ElFormUpload',
  components: { ElFormGroup },
  data() {
    return {
      initData: null,
      formItemList: [
        {
          key: 'staffName',
          type: 'input',
          labelName: '店员姓名：',
          placeholder: '请输入店员姓名'
        },
        {
          key: 'job',
          type: 'select',
          labelName: '选择职位：',
          placeholder: '请选择职位',
          option: [
            {
              label: '店长',
              value: 1
            }, {
              label: '销售顾问',
              value: 2
            }, {
              label: '收银员',
              value: 3
            }, {
              label: '维修工程师',
              value: 4
            }
          ]
        },
        {
          key: 'entryTime',
          type: 'date',
          labelName: '入职时间：',
          placeholder: '请选择入职时间'
        },
        {
          key: 'headImg',
          type: 'upload',
          labelName: '店员头像：',
          placeholder: '最多支持上传1张图片，大小不超过2M，格式为JPG或PNG'
        },
        {
          key: 'mobile',
          isNumber: true,
          type: 'input',
          labelName: '联系电话（登录账号）：',
          placeholder: '请输入联系电话'
        },
        {
          key: 'passWord',
          password: true,
          type: 'input',
          labelName: '登录密码：',
          placeholder: '请输入登录密码'
        },
        {
          key: 'sex',
          type: 'radio',
          labelName: '性别：',
          option: [
            { label: '男', value: '10' },
            { label: '女', value: '20' }
          ]
        },
        {
          key: 'specialty',
          slotName: 'selectSpecialty',
          labelName: '擅长品类（限4个）：'
        },
        {
          key: 'suffer',
          type: 'input',
          labelName: '行业经验：',
          placeholder: '请输入店员从业经验年限（1-15）'
        },
        {
          key: 'introduce',
          type: 'textarea',
          labelName: '自述介绍：',
          placeholder: '请输入店员自述，自述简介会展示在用户端（不超过100字）'
        }
      ],
      formRules: {
        staffName: [{
          required: true,
          trigger: 'blur',
          message: '请输入店员姓名'
        }],
        job: [{
          required: true,
          trigger: 'blur',
          message: '请选择店员职位'
        }],
        entryTime: [{
          required: true,
          trigger: 'blur',
          message: '请选择入职日期'
        }],
        sex: [{
          required: true
        }],
        headImg: [{
          required: true,
          validator: validateUploadImg,
          trigger: 'change'
        }],
        mobile: [{
          required: true,
          validator: validateMobile,
          trigger: 'blur'
        }],
        passWord: [
          {
            required: true,
            trigger: 'blur',
            message: '请输入密码'
          },
          {
            min: 6,
            trigger: 'blur',
            message: '请输入6位以上密码'
          }
        ]
      }
    }
  },
  methods: {
    handleConfirm(data, cd) {
      cd()
      console.log('提交了form', data)
    }
  }
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">
.el-form-upload{}
</style>
