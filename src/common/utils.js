export const transPlayCount = (playCount) => {
  if (!playCount) return null;
  return String(playCount).replace(/(?<=\d{2,})\d{4}$/, '万');
};

export const transSubscribeCount = (subscribeCount) => {
  if (!subscribeCount) return null;
  return String(subscribeCount).replace(/(?<=\d{1,})\d{4}$/, '万');
};

export const wordLength = (word = '') => {
  // console.log(word);
  let length = 0;
  for (const char of word) {
    if (char.codePointAt() < 0x080) {
      length += 0.5;
    } else {
      length += 1;
    }
  }
  return length;
};

function typeToString(target) {
  return Object.prototype.toString.call(target);
}

export const LOCALSTORAGE = (key, base) => {
  const value = JSON.parse(localStorage.getItem(key));
  // console.log(base, typeToString(value) === typeToString(base));
  return typeToString(value) === typeToString(base) ? value : base;
};

export const sleep = (delay = 1000) => new Promise((resolve) => setTimeout(resolve, delay));
