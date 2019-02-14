<template>
  <div id="app">
      <c-header></c-header>
      <div id="content">
          <router-view></router-view>
      </div>
      <c-footer></c-footer>
  </div>
</template>
<script>
import CHeader from "@/components/CHeader.vue";
import CFooter from "@/components/CFooter.vue";
export default {
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
