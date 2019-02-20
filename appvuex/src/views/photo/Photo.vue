<template>
    <div class="photo">
        <img v-for="(photoSrc,index) in photo" :key="index" :src="photoSrc.src" @click="goDetail" alt="">
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                photo:[]
            }
        },
        created () {
            axios.get('/data/photodata.json')
            .then((result)=>{
                // console.log(result.data.photoData);
                this.photo = [...result.data.photoData];

            })
        },
        methods:{
            goDetail(){
                this.$router.push('/photodetail');
            }
        }
    }
</script>

<style scoped>
    .photo img{
        width:50%;
    }
</style>