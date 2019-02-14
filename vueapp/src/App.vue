<template>
  <div id="app">
      <c-header></c-header>
      <div id="content">
          <router-view></router-view>
      </div>
      <c-footer :menu="menu" ></c-footer>
  </div>
</template>
<script>
import CHeader from "@/components/CHeader.vue";
import CFooter from "@/components/CFooter.vue";
export default {
  data(){
    return {
       menu:[
         {
           path:"/movie",
           name:"电影",
           bgColor:"#ff0036"
         },
         {
           path:"/music",
           name:"音乐",
           bgColor:"#e9f460"
         },{
           path:"/book",
           name:"书籍",
           bgColor:"#96c2f1"
         },{
           path:"/photo",
           name:"图片",
           bgColor:"#4abce8"
         }
       ]

    }
  },
  components: {
    CHeader,
    CFooter
  }
};
</script>
<style>
#content {
  margin: 1rem 0;
}
</style>
