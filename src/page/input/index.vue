<template>
  <div class="fsl-manage">
    <el-container style="border:1px solid #eee;height: 100%;">
      <el-aside width="200px" style="min-height: 100%;">
        <el-menu
          style="min-height: 100%;"
          :default-active="defaultActive"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          theme="dark"
          router
        >
          <el-menu-item index="index"><i class="el-icon-menu"></i>首页</el-menu-item>
          <el-submenu index='1'>
            <template slot="title"><i class="el-icon-message"></i>数据管理</template>
            <el-menu-item index="userList">用户列表</el-menu-item>
            <el-menu-item index="userManage">用户管理</el-menu-item>
            <el-menu-item index="addShop">添加商铺</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
    <el-container>
      <el-header style="text-align:right;padding:0px;font-size: 14px;">
        <sideMenu></sideMenu>
      </el-header>
      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
    </el-container>
  </div>
</template>
<script>
import sideMenu from '@/components/common/sideMenu'
  export default {
    data() {
      return {}
    },
    components:{
      sideMenu,
    },
    computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
  }
</script>
<style lang="less" scoped>
  @import '@/style/mixin';
  .fsl-manage{
    height: 100vh;
    width: 100%;
    
  }
</style>