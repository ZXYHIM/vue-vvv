<template>
  <div class="addShop">
    <el-form label-width="100px" class="shopFrom">
      <el-form-item label="店铺名称">
        <el-input v-model="shopFrom.shopName"></el-input>
      </el-form-item>
      <el-form-item label="详细地址">
        <el-input></el-input>
        <p>当前城市：成都</p>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="店铺简介">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="店铺标语">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="店铺分类">
        <el-cascader
          v-model="shopFrom.classifyValue"
          :options="shopFrom.classify"
        ></el-cascader>
      </el-form-item>
      <el-form-item label="店铺特点">
        品牌保证
        <el-switch v-model="shopFrom.feature1" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        蜂鸟专送
        <el-switch v-model="shopFrom.feature2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        新开店铺
        <el-switch v-model="shopFrom.feature3" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        外卖保
        <el-switch v-model="shopFrom.feature4" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        准时达
        <el-switch v-model="shopFrom.feature5" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        开发票
        <el-switch v-model="shopFrom.feature6" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </el-form-item>
      <el-form-item label="配送费">
        <el-input-number :min="1" :max="10" label="描述文字"></el-input-number>
      </el-form-item>
      <el-form-item label="起送价">
        <el-input-number :min="1" :max="10" label="描述文字"></el-input-number>
      </el-form-item>
      <el-form-item label="营业时间">
        <el-time-picker
          :picker-options="{
            selectableRange: '18:30:00 - 20:30:00'
          }"
          placeholder="任意时间点">
        </el-time-picker>
        <el-time-picker
          arrow-control
          :picker-options="{
            selectableRange: '18:30:00 - 20:30:00'
          }"
          placeholder="任意时间点">
        </el-time-picker>
      </el-form-item>
      <!-- <el-form-item label="上传店铺头像">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="上传营业执照">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="上传餐饮服务许可证">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item> -->
      <el-form-item label="优惠活动">
        <el-select placeholder="请选择">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-table></el-table>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      shopFrom:{
        shopName:'',
        address:'',
        city:'',
        telephone:'',
        profile:'',
        slogan:'',
        classify:[],
        classifyValue:[],
        feature1:true,
        feature2:true,
        feature3:true,
        feature4:true,
        feature5:true,
        feature6:true,
        deliveryFee:'',
        startingPrice:'',
        startDate:'',
        endDate:'',
        shopAvatar:'',
        fslLicense:'',
        license:'',
        promotions:['满减优惠','优惠大酬宾','新用户立减','进店领券'],
      }
    }
  },
  methods:{
    getClassify(){
      this.request.get('/shopping/v2/restaurant/category').then(res=>{
      // 此处只接收成功数据，失败数据不返回
        let tmep = [];
        for(let i=0;i<res.length;i++){
          let sutemp={};
          sutemp.label = res[i].name
          if(res[i].sub_categories.length>0){
            let sub_categorie = [];
            for(let y=0;y<res[i].sub_categories.length;y++){
              let subValue= {};
              subValue.label= res[i].sub_categories[y].name;
              sub_categorie[y]=subValue;
            }
            sutemp.children = sub_categorie;
          }
          tmep[i] = sutemp;
        }
        this.shopFrom.classify= tmep;     
        console.log(this.classify);
      }).catch(()=>{
      // catch 可以不要，如果想要捕获异常，就加上去
      })
    }
  },
  mounted(){
    this.getClassify();
  },
}
</script>

<style lang='less'>
  .shopFrom{
    width: 700px;
    margin: 0 auto;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
</style>