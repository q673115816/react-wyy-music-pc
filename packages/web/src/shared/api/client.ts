const API_BASE = API_URL;

export class ApiError extends Error {
  status: number;
  data: any;

  constructor(message: string, status = 0, data: any = null) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

type Params = Record<string, string | number | boolean | undefined | null>;

export interface ApiRequestOptions {
  method?: "GET" | "POST";
  body?: Record<string, unknown>;
  params?: Params;
  signal?: AbortSignal;
}

const buildUrl = (path: string, params?: Params) => {
  const base = API_BASE.endsWith("/") ? API_BASE : `${API_BASE}/`;
  const url = new URL(path.replace(/^\//, ""), base);
  url.searchParams.set("timestamp", String(Date.now()));
  Object.entries(params ?? {}).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    url.searchParams.set(key, String(value));
  });
  return url.toString();
};

export async function apiRequest<T = any>(
  path: string,
  { method = "GET", body, params, signal }: ApiRequestOptions = {}
): Promise<T> {
  const isPost = method === "POST";
  const payload = isPost
    ? { ...(body ?? {}), cookie: localStorage.getItem("cookie") }
    : undefined;

  const response = await fetch(buildUrl(path, params), {
    method,
    credentials: "include",
    signal,
    headers: payload ? { "Content-Type": "application/json" } : undefined,
    body: payload ? JSON.stringify(payload) : undefined,
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new ApiError(
      data?.message ?? `请求失败 (${response.status})`,
      response.status,
      data
    );
  }

  return data as T;
}

export const apiGet = <T = any>(path: string, options?: ApiRequestOptions) =>
  apiRequest<T>(path, { ...options, method: "GET" });

export const apiPost = <T = any>(
  path: string,
  body?: Record<string, unknown>,
  options?: ApiRequestOptions
) => apiRequest<T>(path, { ...options, method: "POST", body });
