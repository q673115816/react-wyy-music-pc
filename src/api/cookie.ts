
export function setCookie(cookie: string) {
  localStorage.setItem('cookie', cookie);
}

export function removeCookie() {
  localStorage.removeItem('cookie');
}
