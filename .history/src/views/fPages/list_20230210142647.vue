<template>
<el-collapse v-model="activeNames">
    <el-collapse-item title="数据库配置" name="1">
    <div>
        <el-row :gutter="20">
        <el-col :span="6">数据库ip：<div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6">{{this.config.DbIp}}<div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6">数据库端口(port)：<div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6">{{ this.config.DbPort }}<div class="grid-content bg-purple"></div></el-col>
        </el-row>
    </div>
    </el-collapse-item>
</el-collapse>
  </template>
  
  <script>
  import { getFPages } from '@/api/article'
  export default {
    name: 'FPages',
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: 'success',
          draft: 'info',
          deleted: 'danger'
        }
        return statusMap[status]
      }
    },
    data() {
      return {
        config:null,
        noticeConfig:null,
      }
    },
    created() {
      this.getList()
    },
    methods: {
      getList() {
        this.listLoading = true
        getFPages().then(response => {
          this.config = (response.config)
          this.noticeConfig = (response.noticeConfig)
          console.log("data"+JSON.stringify(response.config))
        })
      }
    }
  }
  </script>
  
  <style scoped>
  .edit-input {
    padding-right: 100px;
  }
  .cancel-btn {
    position: absolute;
    right: 15px;
    top: 10px;
  }
  </style>
  