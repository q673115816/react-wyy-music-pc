import axios, { AxiosRequestConfig } from "axios";

const cookie = localStorage.getItem("cookie") || "";

type Params = {
  [key: string]: any;
};

const CancelToken = axios.CancelToken;
const source = CancelToken.source();
const axiosInstance = axios.create({
  baseURL: process.env.VITE_API_URL,
  withCredentials: true,
  cancelToken: source.token,
});

axiosInstance.prototype.cacel = () => {
  source.cancel("Query was cancelled by React Query");
};

function POSTPlugin<T extends AxiosRequestConfig>(req: T): T {
  if (req.method !== "post") return req;
  if (!cookie) return req;
  req.data = {
    ...req.data,
    cookie,
  };
  // cookie && req.data ? req.data.cookie = cookie : req.data = {cookie}
  // res.data.cookie ||= cookie
  return req;
}

axiosInstance.interceptors.request.use(
  (req) => {
    POSTPlugin(req);
    return req;
  },
  (err) => err
);

axiosInstance.interceptors.response.use(
  (res) => {
    if (res.data.code === 400) {
      console.log(400);
    }
    return res.data;
  },
  (err) => err
);

export const get = (url: string) => axiosInstance.get(url);

export const post = (url: string, params?: Params): any =>
  axiosInstance.post(url, params, {
    params: {
      timestamp: Date.now(),
    },
  });
