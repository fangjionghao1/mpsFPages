<template>
<el-collapse v-model="activeNames">
    <el-collapse-item title="一致性 Consistency" name="1">
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
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
  