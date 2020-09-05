<template>
  <div class="home">
    <h3>数据统计</h3>
    <div id="myChart"></div>
  </div>
</template>

<script>
export default {
  name:'home',
  data(){
    return{
      msg:'home charts'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods:{
    drawLine(){
      let myChart =this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        title: { text: '在Vue中使用echarts' },//为图表配置标题
            tooltip: {},//配置提示信息
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },//配置要在X轴显示的项
            yAxis: {},//配置要在y轴显示的项
            series: [{//系列列表，每个系列通过type决定自己的图标类型
                name: '销量',//系列名称
                type: 'bar',//系列图表类型
                data: [5, 20, 36, 10, 10, 20]//系列中的数据内容
            }]
      })
    }
  }
}
</script>

<style>
#myChart{
  width: 300px;
  height: 300px;
}

</style>