<template>
  <div class="home">
    <homeHead></homeHead>
    <el-container>
      <sidebar></sidebar>
      <detailsHome> </detailsHome>
    </el-container>
  </div>
</template>

<script>
import homeHead from './homeHead.vue'
import sidebar from './sidebar.vue'
import detailsHome from './detailsHome.vue'
export default {
  name: 'home',
  components: {
    homeHead,
    sidebar,
    detailsHome
  }
}
</script>

<style>
.home {
  width: 100%;
}
.el-container {
  width: 100%;
}
</style>
