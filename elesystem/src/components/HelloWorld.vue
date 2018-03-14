<template>
 

<el-container>
  <el-header>
        <div class="Th1Css">
          <h1 ><i class="el-icon-edit"></i>  Ant Design</h1>
        </div>
          <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
           <el-submenu index="2" >
            <template slot="title">我的工作台</template>
          <!--   <el-menu-item index="2-1">个人中心</el-menu-item> -->
            <el-menu-item index="2-2">设置</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">个人中心</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="2-3">退出登录</el-menu-item>
          </el-submenu>
          <el-menu-item index="1">处理中心</el-menu-item>
     
          <el-menu-item index="4"  disabled><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>

          <el-menu-item index="3" class="fr"  @click="open">消息中心  <el-badge class="mark" :value="12" /></el-menu-item>
         

        </el-menu>
   
   
  </el-header>


  <el-container>
    <el-aside width="200px">
     <el-col :span="12">
  <!--   <h6>菜单栏</h6> -->
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"  :router="true">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>基本页</span>
        </template>
        <el-menu-item-group >
          <el-menu-item index="1-3" :route="{path:'/analysis'}" >分析页</el-menu-item> 
        </el-menu-item-group>
        <el-menu-item-group >
          <el-menu-item index="1-3" :route="{path:'/monitor'}">监控页</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group >
            <el-menu-item index="1-3" :route="{path:'/workplace'}">工作台</el-menu-item> 
        </el-menu-item-group>
      </el-submenu>
        <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>列表页</span>
        </template>
        <el-menu-item-group >
          <el-menu-item index="1-3">查询表格</el-menu-item> 
        </el-menu-item-group>
        <el-menu-item-group >
          <el-menu-item index="1-3">标准列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group >
            <el-menu-item index="1-3">卡片列表</el-menu-item> 
        </el-menu-item-group>
      </el-submenu>
      
        <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>表单页</span>
        </template>
        <el-menu-item-group >
          <el-menu-item index="1-3">基础表单</el-menu-item> 
        </el-menu-item-group>
        <el-menu-item-group >
          <el-menu-item index="1-3">分布表单</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group >
            <el-menu-item index="1-3">高级表单</el-menu-item> 
        </el-menu-item-group>
      </el-submenu>
  
     <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>详情页</span>
        </template>
        <el-menu-item-group >
          <el-menu-item index="1-3">基础详情页</el-menu-item> 
        </el-menu-item-group>
        <el-menu-item-group >
          <el-menu-item index="1-3">高级详情页</el-menu-item>
        </el-menu-item-group>
     </el-submenu>

     <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>结果页</span>
        </template>
        <el-menu-item-group >
          <el-menu-item index="1-3">成功</el-menu-item> 
        </el-menu-item-group>
        <el-menu-item-group >
          <el-menu-item index="1-3">失败</el-menu-item>
        </el-menu-item-group>
      
      </el-submenu>
      
    </el-menu>
  </el-col>
</el-row>


    </el-aside>
    <el-container>
      <el-main>
            <!--   <el-table
              v-loading="loading"
              :data="tableData"
              style="width: 100%"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.7)"
    element-loading-text="拼命加载中123">
              <el-table-column
                prop="date"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
            </el-table> -->
                 <keep-alive>
                  <router-view></router-view>
                </keep-alive> 
      </el-main>


      <el-footer>2018@  zhongshiren</el-footer>
    </el-container>
  </el-container>
</el-container>

</template>

<script>

export default {
  
  name: 'HelloWorld',
  data () {
    return {
        /*tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        loading: true*/
        menus:[
            {
               name: '数据统计',
               path: 'count',

            }

        ]
    }
  },
  methods:{
    open(){
      const h = this.$createElement;

        this.$notify({
            title: '警告',
            message: '这是一条警告的提示消息',
            type: 'warning',
            position: 'bottom-right'
        });
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-icon-loading{color:#000;}
  header ul{margin-left: 200px}
  .el-submenu{ width:200px;}
  .fr{float:right;}
   section main{min-height: 460px}
  .Th1Css{min-width: 200px;width:200px; line-height: 30px;float: left}
  .Th1Css h1{color:#fff;}
  .Th1Css i{color:#409eff;}
  .el-header, .el-footer {
    background-color: rgb(84, 92, 100);
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-header{ padding:0; line-height: 71px;height:71px !important;background-color: rgb(67, 74, 80)}
  .el-aside {
     background-color: rgb(67, 74, 80);
    color: #333;
    text-align: center;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
   /* line-height: 160px;*/
  }
  </style>

