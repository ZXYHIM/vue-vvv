<template>
  <div class="userList">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        type="index"
        label="#"
        width="180">
      </el-table-column>
      <el-table-column
        :label='col.label'
        :prop='col.props'
        v-for='(col,index) in clos' :key='index'
      >
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="totalz">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data(){
    return{
      clos:[
        {label:'注册日期',props:'registe_time'},
        {label:'用户姓名',props:'username'},
        {label:'注册地址',props:'city'},
      ],
      tableData:[],
      pageNum:'1',
      pageSize:'10',
      totalz:0,
    }
  },
  methods:{
    getUserData(){
      this.request.get('/v1/users/list',{pageNum:this.pageNum,pageSize:this.pageSize}).then(res=>{
      // 此处只接收成功数据，失败数据不返回
        console.log('222');
        console.log(res);
        this.tableData=res;
      }).catch(()=>{
      // catch 可以不要，如果想要捕获异常，就加上去
      })
    },
    getPaging(){
      for(let i=0;i<this.tableData.length;i++){
        this.tableData[i].settlementAmoint= this.tableData[i].settlementAmoint.toFixed(2);
        //10条每页的时候.toFixed(2)

      }
    }
  },
  mounted(){
    this.getUserData()
  },
}
</script>

<style>

</style>