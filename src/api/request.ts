import axios, { AxiosRequestConfig } from 'axios'
// export const prodUrl = 'https://neteasecloudmusicapi.herokuapp.com';
export const prodUrl = 'https://netease-cloud-music-api-mlkkrb7ge-q673115816.vercel.app';

export const devUrl = 'http://localhost:3333';

const baseURL = process.env.NODE_ENV === 'production' ? prodUrl : devUrl;
const cookie = localStorage.getItem('cookie') || '';

type Params = {
  [key: string]: any
}

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
})

function POSTPlugin<T extends AxiosRequestConfig>(req: T): T {
  if (req.method !== 'post') return req
  if(!cookie) return req
  req.data = {
    ...req.data,
    cookie
  }
  // cookie && req.data ? req.data.cookie = cookie : req.data = {cookie}
  // res.data.cookie ||= cookie
  return req
}

axiosInstance.interceptors.request.use(
  (req) => {
    POSTPlugin(req)
    return req
  },
  err => err
)

axiosInstance.interceptors.response.use(
  (res) => res.data,
  err => err
)


// const defaultOptions = {
//   withCredentials: true,
// };

export const get = (url: string) => axiosInstance
  .get(url)

export const post = (url: string, params?: Params) => axiosInstance
  .post(url, params, {
    params: {
      timestamp: Date.now()
    }
  })
