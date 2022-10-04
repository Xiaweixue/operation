<template>
  <div class="icon" @click="flag">
    <i :class="status ? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters('meum', ['status'])
  },
  methods: {
    ...mapMutations('meum', ['Changestatus']),
    flag() {
      this.Changestatus()
    }
  }
}
</script>

<style>
.icon {
  width: 40px;
  height: 100%;
  background-color: #ccc;
  text-align: center;
  line-height: 39px;
  font-size: 20px;
}
</style>
