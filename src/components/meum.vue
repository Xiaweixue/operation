<template>
  <div>
    <el-menu
      :default-active="getRouter"
      class="el-menu-vertical-demo menu"
      background-color="#ffffff"
      text-color="#000"
      router
      unique-opened
      :collapse="status"
      collapse-transition
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
import { mapGetters } from 'vuex'
import submeum from './submeum.vue'
export default {
  name: 'meum',
  components: {
    submeum
  },
  props: {
    menuList: {
      type: Array,
      defailt: () => []
    }
  },
  computed: {
    ...mapGetters('meum', ['status']),
    getRouter() {
      return this.$route.path
    }
  }
}
</script>

<style>
.menu {
  border: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}
</style>
