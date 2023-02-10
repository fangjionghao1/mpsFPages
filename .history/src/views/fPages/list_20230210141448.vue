<template>
<el-collapse v-model="activeNames">
    <el-collapse-item title="数据库配置" name="1">
    <div>
        <el-row :gutter="20">
        <el-col :span="6">数据库ip：<div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6">{{this.DbIp}}<div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6">数据库端口(port)：<div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6">{{ this.DbPort }}<div class="grid-content bg-purple"></div></el-col>
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
        activeNames: ['1'],
        Account: "",
        DbIp:"",
        DbPort: 0,
        DbPassWord:"",
        Dev:{
            Server:{
                DBName:"",
                FileAddr:"",
                Ip:"",
                Port:0,
            }
        },
        PrefixList:[],
        Product:{
            Switch:null,
            DBName:"",
            FileAddr:"",
            Ip:"",
            Port:0,
        ProxyIp: "",
        ProxyPort:0,
        RegisterInfo:{
            Url:"",
            Method:""
        },
        Server:{
            DBName:"",
            FileAddr:"",
            Ip:"",
            Port:0,
        },
        version:"",
        WhiteList:[],
        listLoading: true,
      }
      }
    },
    created() {
      this.getList()
    },
    methods: {
      getList() {
        this.listLoading = true
        getFPages().then(response => {
          this.list = response.data.items
          this.listLoading = false
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
  