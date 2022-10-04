<template>
  <div>
    <el-menu
      :default-active="getRouter"
      class="el-menu-vertical-demo"
      background-color="#ffffff"
      text-color="#000"
      router
    >
      <submeum
        v-for="(item, index) in menuList"
        :key="index"
        :item="item"
      ></submeum>
    </el-menu>
  </div>
</template>

<script>
import submeum from './submeum.vue'
export default {
  name:'meum',
  components: {
    submeum
  },
  props: {
    menuList: {
      type: Array,
      defailt: () => []
    }
  },computed:{
    getRouter(){
       return this.$route.path
    }
  }
}
</script>

<style></style>
