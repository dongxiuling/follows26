<template>
    <div class="footer" :style="{background:bg}">
        <ul>
            <li v-for="(obj,index) in menu" :key="index" >
                <router-link :to="obj.path" @click.native="change(obj)">{{obj.name}}</router-link>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                bg:''
            }
        },
        props:["menu"],
        methods:{
            change(obj){
                this.bg = obj.bgColor;
                // 通过$emit 向父组件app 传参this.bg
                this.$emit('changeBg',this.bg);
            }
        }
    }
</script>

<style scoped>
    .footer{
        position: fixed;
        bottom: 0;
        left:0;
        height: 1rem;
        background: #ff0036;
        width:100%;
    }
    .footer ul{
        display: flex;
    }
    li{
        flex-grow:1;
        color: #fff;
        line-height:  1rem; 
        text-align: center;
    }
    .footer a{
        color: #000;
        outline:none;
    }
    .footer a.router-link-active{
        color: #fff;
    }
</style>