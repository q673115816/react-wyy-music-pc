import request from '@/utils/request'

const 首页 = '/homepage'

export const 首页_发现 = (id) => request.get(首页 + '/top/song', {id})