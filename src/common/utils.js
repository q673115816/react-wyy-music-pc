export const transPlayCount = (playCount) => String(playCount).replace(/(?<=\d{2,})\d{4}$/, '万');

export const wordLength = (word = '') => {
  console.log(word);
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
  return typeToString(value) === typeToString(base) ? value : base;
};
