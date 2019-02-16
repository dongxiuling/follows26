<template>
    <div>
        <img v-for="(obj,index) in music" :key="index" :src="obj.bg"/>
    </div>
</template>

<script>
    import Axios from 'axios';
    export default {
        data(){
            return {
                music:[]
            }
        },
        created () {
            Axios.get("/data/musiclist.json")
            .then((result)=>{
                // console.log(result);  
                this.music = result.data.albums;
            })
            .catch();
        }
    }
</script>

<style scoped>
    img{
        width:50%;
    }
</style>