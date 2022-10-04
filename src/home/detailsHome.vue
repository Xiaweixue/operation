<template>
  <div class="details">
    <el-main>
      <div class="detailsHade"></div>
      <div class="detailscontent">
        <router-view></router-view>
      </div>
      <div class="detailsbottom"></div>
    </el-main>
  </div>
</template>

<script>
export default {}
</script>

<style>
.details {
  width: 100%;
}
.el-main {
  width: 100%;
  background-color: #ffffff;
  padding: 0;
  margin: 0;
  color: #000;
  height: 91vh;
}
.detailsHade {
  width: 100%;
  height: 41px;
  border-bottom: 1px solid #ccc;
}
.detailscontent {
  width: 100%;
  height: 760px;
}
.detailsbottom{
  height: 50px;
  border-top: 1px solid #ccc;
}
</style>
