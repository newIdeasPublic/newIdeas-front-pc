// cms内容 api
import axios from './axios'

// 查询内容(带分页)
export const getListPage = (code, page, size) => {
  const params = {
    code: code,
    page: page,
    size: size
  }
  return axios.get('/cmscontent/listPageByCode', { params: params })
}
