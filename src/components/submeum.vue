<template>
  <div>
    <el-menu-item
      :index="item.path"
      v-if="!item.children || item.children.length === 0"
    >
      <i :class="item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu
      :index="item.path"
      v-if="item.children && item.children.length > 0"
    >
      <template slot="title">
        <i :class="item.icon"></i>
        <span>{{ item.label }}</span>
      </template>
      <submeum v-for="ele in item.children" :key="ele.id" :item="ele">
      </submeum>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'submeum',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style></style>
