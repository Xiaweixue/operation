import request from '../uslit/request'

const Sidebarrendering = () => {
  return request({
    url: '/sysUser/getPermissionList',
    method: 'GET'
  })
}

export default {
  Sidebarrendering
}
