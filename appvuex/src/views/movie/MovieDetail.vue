<template>
    <div>
        <!-- {{movieDeatil.images}}-->
         {{$route.params.movieId}} 
        {{movieDeatil.title}}
    </div>
</template>

<script>
    import Axios from 'axios'
    export default {
        data(){
            return {
                movieDeatil:{}
            }
        },
        created () {
            Axios.get(`https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/${this.$route.params.movieId}`)
            .then((result)=>{
                console.log(result.data);
                this.movieDeatil = result.data;

                console.log(this.movieDeatil.images)
            }).catch(()=>{

            })
        }
    }
</script>

<style scoped>

</style>