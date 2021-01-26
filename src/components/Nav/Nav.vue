<template>
  <div class="nav">
    <mt-navbar v-model="selected">
      <mt-tab-item :id="i"
      v-for="(item,i) in NavRoutes"
      :key="i"
      @touchstart.native="gotoCom(item.name)"
      >{{item.meta.title}}</mt-tab-item>
     
    </mt-navbar>
  </div>
</template>

<script>
import Vue from "vue";
import { Navbar, TabItem } from "mint-ui";
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
import NavRoutes from '@/router/nav.js'
export default {
  data(){
    return {
      selected: 0,
      NavRoutes
    }
  },
  methods: {
    gotoCom(name){
      // console.log(this);
      this.$router.push({name})
    }
  }

};
</script>

<style>

</style>