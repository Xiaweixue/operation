<template>
  <div>
    <el-aside width="auto">
      <meum :menuList="menuList"></meum>
    </el-aside>
  </div>
</template>
<script>
import http from '../api/sidebar'
import meum from '../components/meum.vue'
export default {
  components: {
    meum
  },
  data() {
    return {
      list: [],
      isCollapse: false,
      menuList: []
    }
  },
  methods: {
    async Sidebarrendering() {
      try {
        const response = await http.Sidebarrendering()
        this.menuList = response.data.data.menuList
        console.log(this.menuList)
      } catch (e) {
        console.log(e)
      }
    }
  },
  created() {
    this.Sidebarrendering()
  },
}
</script>
<style lang="scss">
.el-aside {
  background-color: #ffffff;
  border-right: 1px solid #ccc;
  color: #000;
  height: 91vh;
  transition: all 0.5s; 
  cursor: pointer;
}
</style>
