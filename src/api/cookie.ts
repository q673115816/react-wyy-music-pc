
export function setCookie(c: string) {
  localStorage.setItem('cookie', c);
}

export function removeCookie() {
  localStorage.removeItem('cookie');
}
