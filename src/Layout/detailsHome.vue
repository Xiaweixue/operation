<template>
  <div class="details">
    <el-main>
      <div class="detailsHade">
        <flexible></flexible>
        <reminder></reminder>
      </div>
      <div class="detailscontent">
        <router-view></router-view>
      </div>
      <div class="detailsbottom">
        Copyright © 2020 - 2021 . 秘咖学堂.All Rights Reserved
      </div>
    </el-main>
  </div>
</template>

<script>
import flexible from '../components/flexible.vue'
import reminder from '../components/reminder.vue'
export default {
  components: {
    flexible,
    reminder
  }
}
</script>

<style>
.details {
  width: 100%;
}
.el-main {
  width: 100%;
  background-color: #ffffff;
  padding: 0;
  color: #000;
  height: 91vh;
}
.detailsHade {
  width: 100%;
  height: 41px;
  border-bottom: 1px solid #ccc;
  display: flex;
}
.detailscontent {
  width: 100%;
  height: 760px;
}
.detailsbottom {
  height: 50px;
  border-top: 1px solid #ccc;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
}
</style>
