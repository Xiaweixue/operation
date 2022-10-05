<template>
  <div>
    <el-tabs
      v-model="editableTabsValue"
      @tab-click="qieh"
      type="card"
      closable
      @tab-remove="removeTab"
    >
      <el-tab-pane
        v-for="(item) in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    qieh(val) {
      this.$router.push(val.name)
    },
    removeTab(targetName) {
      if (targetName === '/home') return
      let tabs = this.editableTabs
      let activeName = this.editableTabsValue

      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
              // console.log(activeName)
            }
          }
        })
      }

      this.editableTabsValue = activeName
      this.$router.push(activeName)
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName)
    }
  },
  computed: {
    editableTabsValue: {
      get() {
        return this.$store.state.tabs.editableTabsValue
      },
      set(val) {
        this.$store.state.tabs.editableTabsValue = val
      }
    },
    editableTabs: {
      get() {
        return this.$store.state.tabs.editableTabs
      },
      set(val) {
        this.$store.state.tabs.editableTabs = val
      }
    }
  },
  watch: {
    $route: {
      handler(val, val1) {
        // console.log(val)
        this.$store.commit('tabs/getAdd', {
          title: val.meta.title,
          name: val.path
        })
        this.$store.commit('tabs/geteditable', val.path)
      }
    },
    immediate: true,
    deep: true
  }
}
</script>

<style></style>
