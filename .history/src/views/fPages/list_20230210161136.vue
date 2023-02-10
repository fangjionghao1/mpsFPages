<template>
 <el-tabs v-model="tabsIdx" @tab-click="handleClick">
    <el-tab-pane label="系统配置" name="first">
        <el-collapse v-model="sysConfigIdx" accordion>
    <el-collapse-item title="基本配置" name="1">
        <el-row :gutter="20">
        <el-col :span="12" :offset="0"><div>生产环境开关
        <el-switch
        v-model="data.config.Product.Swtich"
        disabled
        active-color="#13ce66"
        inactive-color="#ff4949">
        </el-switch>
        </div></el-col>
        </el-row>
        <el-row :gutter="20">
        <el-col :span="12" :offset="0" v-if="this.data.config.Version!==''"><div>版本号
            <el-tag 
    :key="this.data.config.Version"
    :type="success"
    effect="light">
            {{ this.data.config.Version }}
            </el-tag>
        </div></el-col>
        </el-row>
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
    <el-collapse-item title="白名单" name="5">
        <el-row :gutter="20">
            <el-col :span="6">前缀白名单:<div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><li v-for="item in this.data.config.PrefixList" :key="item">
            <el-tag type="success">{{ item }}</el-tag>
            </li><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6">白名单:<div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><li v-for="item in this.data.config.PrefixList" :key="item">
            <el-tag type="success">{{ item }}</el-tag>
            </li><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        
    </el-collapse-item>
</el-collapse>
    </el-tab-pane>
    <el-tab-pane label="通知配置" name="second">
        <el-collapse v-model="sysConfigIdx" accordion>
    <el-collapse-item title="调试信息" name="1">
        <el-row :gutter="20">
        <el-col :span="12" :offset="0"><div>发送给主管
        <el-switch
        v-model="data.noticeConfig.SendToManager"
        disabled
        active-color="#13ce66"
        inactive-color="#ff4949">
        </el-switch>
        </div></el-col>
        </el-row>
        <el-row :gutter="20">
        <el-col :span="12" :offset="0"><div>调试账号:
            <el-tag 
    :key="this.data.noticeConfig.DebugAccount"
    :type="success"
    effect="light">
            {{ this.data.noticeConfig.DebugAccount }}
            </el-tag>
        </div></el-col>
        <el-col :span="12" :offset="0"><div>调试群组号:
            <el-tag 
    :key="this.data.noticeConfig.DebugRoom"
    :type="success"
    effect="light">
            {{ this.data.noticeConfig.DebugRoom }}
            </el-tag>
        </div></el-col>
        </el-row>
        <el-row :gutter="20">
        <el-col :span="12" :offset="0"><div>IC服务发送地址:
            <el-tag 
    :key="this.data.noticeConfig.IggChatInfoSendingURL"
    :type="success"
    effect="light">
            {{ this.data.noticeConfig.IggChatInfoSendingURL }}
            </el-tag>
        </div></el-col>
        <el-col :span="12" :offset="0"><div>IC服务Token:
            <el-tag 
    :key="this.data.noticeConfig.IggChatToken"
    :type="success"
    effect="light">
            {{ this.data.noticeConfig.IggChatToken }}
            </el-tag>
        </div></el-col>
        </el-row>
    </el-collapse-item>
    <el-collapse-item title="各模块通知信息配置" name="2" disabled>
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
    <el-collapse-item title="代理服务器信息" name="3" disabled>
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
    <el-collapse-item title="服务器信息" name="4" disabled>
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
    <el-collapse-item title="白名单" name="5" disabled>
        <el-row :gutter="20">
            <el-col :span="6">前缀白名单:<div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><li v-for="item in this.data.config.PrefixList" :key="item">
            <el-tag type="success">{{ item }}</el-tag>
            </li><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6">白名单:<div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><li v-for="item in this.data.config.PrefixList" :key="item">
            <el-tag type="success">{{ item }}</el-tag>
            </li><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        
    </el-collapse-item>
</el-collapse>
        
    </el-tab-pane>
  </el-tabs>

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
        sysConfigIdx:["1"],
        tabsIdx :"first"
      }
    },
    created() {
      this.getList()
    },
    methods: {
        handleClick(){
            tabsIdx = "first"
        },
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
  