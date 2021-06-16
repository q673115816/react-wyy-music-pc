// export const prodUrl = 'https://neteasecloudmusicapi.herokuapp.com';
export const prodUrl = 'https://netease-cloud-music-api-mlkkrb7ge-q673115816.vercel.app';

export const devUrl = 'http://localhost:3000';

const baseUrl = process.env.NODE_ENV === 'production' ? prodUrl : devUrl;
const cookie = localStorage.getItem('cookie') || '';

function format(obj) {
  const data = new FormData();
  for (const key in obj) {
    data.append(key, obj[key]);
  }
  cookie && data.append('cookie', cookie);
  return data;
}

// const defaultOptions = {
//   withCredentials: true,
// };

export const get = (url) => fetch(`${baseUrl}${url}`, {
  credentials: 'include',
}).then((res) => res.json());

export const post = (url, params) => {
  console.log(params);
  return fetch(`${baseUrl}${url}?timestamp=${Date.now()}`, {
    method: 'POST',
    body: format(params),
    // body: new FormData(new URLSearchParams(params).toString()),
    // xhrFields: { withCredentials: true },
    credentials: 'include',
  }).then((res) => res.json());
};
