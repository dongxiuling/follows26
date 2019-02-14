<template>
    <div class="footer">
        <ul>
            <li>
                <router-link to="/movie">电影</router-link>
            </li>
            <li>
                <router-link to="/music">音乐</router-link>
            </li>
            <li>
                <router-link to="/book">图书</router-link>
            </li>
            <li>
                <router-link to="/photo">图片</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        
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