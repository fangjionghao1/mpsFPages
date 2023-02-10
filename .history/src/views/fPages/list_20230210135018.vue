<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
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
  