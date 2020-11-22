import baseurl from "./url";

let cookie = window.localStorage.getItem("cookie");

export function setCookie(c) {
  window.localStorage.setItem("cookie", c);
  cookie = c;
}

const defaultOptions = {
  withCredentials: true
};
export const get = async (url, params) => {
  return await fetch(`${baseurl}${url}`, {
    ...params
  }).then((res) => res.json());
};

export const post = async (url, params, head) => {
  return await fetch(`${baseurl}${url}?timestamp=${Date.now()}`, {
    method: "POST",
    body: params,
    head
  }).then((res) => res.json());
};
