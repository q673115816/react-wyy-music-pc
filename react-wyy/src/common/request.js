import { devUrl as currentUrl } from '@/config';

let cookie = window.localStorage.getItem('cookie');

export function setCookie(c) {
  window.localStorage.setItem('cookie', c);
  cookie = c;
}

function format(obj) {
  let data = '';
  for (const key in obj) {
    data += `${key}=${obj[key]}&`;
  }
  return data.slice(0, -1);
}

const defaultOptions = {
  withCredentials: true,
};
export const get = async (url, params) => await fetch(`${currentUrl}${url}`, {
  ...params,
}).then((res) => res.json());

export const post = async (url, params, head) => {
  console.log(params);
  return await fetch(`${currentUrl}${url}?timestamp=${Date.now()}`, {
    method: 'POST',
    body: format(params),
    headers: new Headers({
      'content-type': 'application/x-www-form-urlencoded',
      ...head,
    }),
  }).then((res) => res.json());
};
