import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  retry,
} from "@reduxjs/toolkit/query/react";
import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { Get } from "@/modules/utils";

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  // prepareHeaders: (headers, { getState }) => {
  //   // By default, if we have a token in the store, let's use that for authenticated requests
  //   const token = (getState() as RootState).auth.token;
  //   if (token) {
  //     headers.set("authentication", `Bearer ${token}`);
  //   }
  //   return headers;
  // },
});

const _baseQueryWithIntercept: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result: QueryReturnValue<any, FetchBaseQueryError, FetchBaseQueryMeta> =
    await baseQuery(args, api, extraOptions);
  console.log(result, "拦截器");
  const { data, error, meta } = result;
  // 如果遇到错误的时候
  if (error) {
    const { status } = error as FetchBaseQueryError;
    const { request } = meta as FetchBaseQueryMeta;
    const url: string = request.url;
    // 根据状态来处理错误
    printHttpError(Number(status), url);
    // TODO 自己处理错误信息提示给前端
  }
  if (Object.is(data?.code, 0)) {
    return result;
  }
  throw new Error(data.message);
};

export const printHttpError = (httpStatus: number, path: string): void => {
  switch (httpStatus) {
    case 400:
      console.log(`错误的请求:${path}`);
      break;
    // 401: 未登录
    // 未登录则跳转登录页面，并携带当前页面的路径
    case 401:
      console.log("你没有登录,请先登录");
      window.location.reload();
      break;
    // 跳转登录页面
    case 403:
      console.log("登录过期，请重新登录");
      // 清除全部的缓存数据
      window.localStorage.clear();
      window.location.reload();
      break;
    // 404请求不存在
    case 404:
      console.log("网络请求不存在");
      break;
    // 其他错误，直接抛出错误提示
    default:
      console.log("我也不知道是什么错误");
      break;
  }
};

const baseQueryWithIntercept: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  if (typeof args !== "string") {
    args.body ??= {};
    // args.body.cookie ??= Get({ key: "cookie" });
    args.body = { ...args.body, cookie: Get({ key: "cookie" }) };
    args.url += `?timestamp=${Date.now()}`;
  }
  console.log("baseQueryWithIntercept", args, api, extraOptions);
  const result: QueryReturnValue<any, FetchBaseQueryError, FetchBaseQueryMeta> =
    await baseQuery(args, api, extraOptions);
  const { data, meta, error } = result;
  console.log("data", data, "meta", meta, "error", error);
  if (error) {
    const { status, data } = error;
    if (status === 301) {
      console.log("弹出登录窗口");
    }
    if (status === 400) {
      if (data.code === -462) {
        console.log(data.data.blockText);
      }
    }
  }
  return result;
};

const baseQueryWithRetry = retry(baseQueryWithIntercept, { maxRetries: 2 });

export const base = createApi({
  reducerPath: "daily",
  baseQuery: baseQueryWithRetry,
  tagTypes: ["artist/detail", "user/followeds", "user/account"],
  endpoints: (build) => ({}),
});
