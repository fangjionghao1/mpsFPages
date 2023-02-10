<template>
    <!-- <el-row :gutter="20">
        <el-col :span="12">是否生产环境<div class="grid-content bg-purple"></div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row> -->
    <!-- <div>生产环境开关</div>
    <el-switch
  v-model="data.config.product.switch"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch> -->
<el-collapse v-model="activeNames">
    <el-collapse-item title="基本配置" name="1">
        
        <div>生产环境开关
        <el-switch
        v-model="data.config.Product.Swtich"
        disabled
        active-color="#13ce66"
        inactive-color="#ff4949">
        </el-switch>
        </div>
    </el-collapse-item>
    <el-collapse-item title="数据库配置" name="2">
    <div>
        <el-row :gutter="20">
        <el-col :span="6">ip：<div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6">{{this.data.config.DbIp}}<div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6">端口(port)：<div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6">
            <el-tag
    :key="this.data.config.Server.DBName"
    :type="success"
    effect="light">
            {{ this.data.config.DbPort }}
            </el-tag><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="20">
        <el-col :span="6">密码：<div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6">{{this.data.config.DbPassWord}}<div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6">账号(Account)：<div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6">{{ this.data.config.Account }}<div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="6">数据库名称:<div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6">
            <el-tag
    :key="this.data.config.Server.DBName"
    :type="success"
    effect="light">
    {{this.data.config.Server.DBName}}
  </el-tag>
            <div class="grid-content bg-purple"></div></el-col>
        </el-row>
    </div>
    </el-collapse-item>
    <el-collapse-item title="代理服务器信息" name="3">
        <div>
        <el-row :gutter="20">
        <el-col :span="6">ip:<div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6">{{this.data.config.ProxyIp}}<div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6">端口(Port)：<div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6">
            <el-tag
    :key="this.data.config.Server.DBName"
    :type="success"
    effect="light">
            {{ this.data.config.ProxyPort }}
            </el-tag><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="20">
       
        <el-col :span="6">注册路由与方式:<div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6">{{this.data.config.RegisterInfo.Url}}
            <el-tag
    :key="this.data.config.RegisterInfo.Method"
    :type="info"
    effect="dark">
    {{ this.data.config.RegisterInfo.Method }}
  </el-tag>
  <div class="grid-content bg-purple"></div></el-col>
    
        </el-row>    
    </div>
    </el-collapse-item>
    <el-collapse-item title="服务器信息" name="4">
        <div>
        <el-row :gutter="20">
        <el-col :span="6">ip:<div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6">{{this.data.config.Server.Ip}}<div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6">端口(Port)：<div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6">{{ this.data.config.Server.Port}}<div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="20">
        <el-col :span="6">静态文件存储地址:<div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6">{{this.data.config.Server.FileAddr}}<div class="grid-content bg-purple"></div></el-col>
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
        data:null,
        activeNames:["1"],
      }
    },
    created() {
      this.getList()
    },
    methods: {
      getList() {
        getFPages().then(response => {
          this.data = response.data
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
  