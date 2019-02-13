<template>
    <div>
        <h1>count页面</h1>
        <p>
            {{$store.state.count}}
        </p>
        <p>{{count}}<p>
        <p>{{a}}</p>
        <p> getters sum结果是 {{sum}}</p>

        <button @click="$store.commit('add',2)">add</button>
        <button @click="add(3)">add</button>
        <button @click="addAction(5)">actionAdd</button>
    </div>
</template>
<script>
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
    export default {
        // computed:{
        //     count(){
        //         return this.$store.state.count;
        //     }
        // }
        computed: {
            ... mapState(["count","a"]),
            ... mapGetters(["sum"])
        },
        methods: {
            ...mapMutations(["add"]),
            ...mapActions(["addAction"])
        }
    }
</script>

<style scoped>

</style>