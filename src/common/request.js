export const prodUrl = 'https://neteasecloudmusicapi.herokuapp.com';

export const devUrl = 'http://localhost:3000';

const baseUrl = process.env.NODE_ENV === 'production' ? prodUrl : devUrl;
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
export const get = async (url) => await fetch(`${baseUrl}${url}`, {
  // headers: {
  //   Cookie: cookie,
  // },
}).then((res) => res.json());

export const post = async (url, params) => {
  console.log(params);
  return await fetch(`${baseUrl}${url}?timestamp=${Date.now()}`, {
    method: 'POST',
    body: format({ cookie, ...params }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      // Cookie: cookie,
    },
  }).then((res) => res.json());
};
