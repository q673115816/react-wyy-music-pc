import axios, { AxiosRequestConfig } from 'axios'
// export const prodUrl = 'https://neteasecloudmusicapi.herokuapp.com';
export const prodUrl = 'https://netease-cloud-music-api-mlkkrb7ge-q673115816.vercel.app';

export const devUrl = 'http://localhost:3000';

const baseURL = process.env.NODE_ENV === 'production' ? prodUrl : devUrl;
const cookie = localStorage.getItem('cookie') || '';

type Params = {
  [key: string]: any
}

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
})

function format(obj?: Params) {
  const data = new FormData();
  for (const key in obj) {
    data.append(key, obj[key]);
  }
  cookie && data.append('cookie', cookie);
  return data;
}

function POSTPlugin<T extends AxiosRequestConfig>(res: T): T {
  if (res.method !== 'post') return res
  // const { data } = res
  // res.data = format(data)
  cookie && res.data ? res.data.cookie = cookie : res.data = {cookie}
  // res.data.cookie ||= cookie
  return res
}

axiosInstance.interceptors.request.use(
  (res: AxiosRequestConfig) => {
    res = POSTPlugin(res)
    return res
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
  .post(url, params)
