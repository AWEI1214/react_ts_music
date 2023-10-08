import request from '@/service'

export function getBanners() {
  return request({
    url: '/banner',
    method: 'get'
  })
}

export function getHotRecommend() {
  return request({
    url: '/personalized',
    method: 'get'
  })
}

export function getAlbumRecommend() {
  return request({
    url: '/album/newest',
    method: 'get'
  })
}

export function getTopList(params) {
  return request({
    url: '/playlist/detail',
    method: 'get',
    params
  })
}
