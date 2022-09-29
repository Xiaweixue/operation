import request from '../uslit/request'

const getLogin = (ruleForm) => {
    return request({
        url: `/user/login?username=${ruleForm.username}&password=${ruleForm.password}&code=${ruleForm.code}`,
        method: 'POST',

    })
}
const verification = () => {
    return request({
        url: '/sysUser/image',
        method: 'POST',
        responseType: 'blob'

    })
}

export default {
    getLogin,
    verification
}