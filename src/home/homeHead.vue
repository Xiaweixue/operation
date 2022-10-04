<template>
  <div>
    <div class="hade">
      <h2>Vue、Element UI权限管理系统开发实战</h2>
      <div class="righthade">
        <el-dropdown>
          <img src="../assets/下载.jpg" alt="" />
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>还原数据</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div>
          <div>欢迎您，张明</div>
          <div>{{ timeId }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  data() {
    return {
      arr: undefined,
      timeId: ''
    }
  },
  created() {
    this.arr = setInterval(() => {
      this.timeId = dayjs().format(
        'YYYY.MM.DD.HH:mm:ss' + '星期' + this.toChinesNum(dayjs().day())
      )
    })
  },
  methods: {
    toChinesNum(num) {
      let changeNum = [
        '零',
        '一',
        '二',
        '三',
        '四',
        '五',
        '六',
        '七',
        '八',
        '九'
      ]
      let unit = ['', '十', '百', '千', '万']
      num = parseInt(num)
      let getWan = (temp) => {
        let strArr = temp.toString().split('').reverse()
        let newNum = ''
        let newArr = []
        strArr.forEach((item, index) => {
          newArr.unshift(
            item === '0' ? changeNum[item] : changeNum[item] + unit[index]
          )
        })
        let numArr = []
        newArr.forEach((m, n) => {
          if (m !== '零') numArr.push(n)
        })
        if (newArr.length > 1) {
          newArr.forEach((m, n) => {
            if (newArr[newArr.length - 1] === '零') {
              if (n <= numArr[numArr.length - 1]) {
                newNum += m
              }
            } else {
              newNum += m
            }
          })
        } else {
          newNum = newArr[0]
        }

        return newNum
      }
      let overWan = Math.floor(num / 10000)
      let noWan = num % 10000
      if (noWan.toString().length < 4) {
        noWan = '0' + noWan
      }
      return overWan ? getWan(overWan) + '万' + getWan(noWan) : getWan(num)
    }
  },
  beforeDestroy() {
    clearInterval(this.arr)
  }
}
</script>
<style lang="scss">
.hade {
  height: 80px;
  background-color: #167bd8;
  display: flex;
  justify-content: space-between;
  h2 {
    height: 100%;
    line-height: 80px;
    margin-left: 30px;
    color: #fff;
  }
  .righthade {
    margin-top: 15px;
    display: flex;
    padding-right: 30px;
    img {
      width: 50px;
      height: 50px;
      vertical-align: middle;
      border-radius: 50px;
    }
    div {
      padding-left: 10px;
      font-size: 17px;
      color: #fff;
    }
  }
}
</style>
