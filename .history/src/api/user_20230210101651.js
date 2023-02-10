import request from '@/utils/request'

export function login (username, password) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'get',
    params: { username, password }
  })
}

export function getInfo (token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout () {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
