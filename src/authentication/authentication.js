import router from '../router'
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token')
  if (token) {
    if (to.path !== '/') {
      next()
    } else {
      next('/home')
    }
  } else {
    if (to.path == '/') {
      next()
    } else {
      next('/')
    }
  }
})
