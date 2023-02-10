<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
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
  