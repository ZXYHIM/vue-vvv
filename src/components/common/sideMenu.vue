<template>
  <div class="sideMenu">
    <el-breadcrumb separator="/" style="display:flex;flex:1;padding-left:24px">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown menu-align='start'>
      <!-- <img :src="baseImgPath + adminInfo.avatar" class="avator"> -->
      <el-avatar> user </el-avatar>
      <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="home">首页</el-dropdown-item>
      <el-dropdown-item command="signout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.sideMenu{
  width: 100%;
  height: 60px;
  display: flex;
  background-color: #eff2f7;
  align-items: center;
}
</style>