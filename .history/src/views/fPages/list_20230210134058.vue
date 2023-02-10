<template>
   <div>
    <el-descriptions title="用户信息">
    <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
    <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
    <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
    <el-descriptions-item label="备注">
      <el-tag size="small">学校</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
</el-descriptions>
   </div>
  </template>
  
  <script>
  import { getFPages } from '@/api/article'
  import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
  
  export default {
    name: 'ArticleList',
    components: { Pagination },
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
        list: null,
        total: 0,
        listLoading: true,
       
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
  