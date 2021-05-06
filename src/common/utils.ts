export const transPlayCount = (playCount) => {
  if (!playCount) return 0;
  return String(playCount).replace(/(?<=\d{2,})\d{4}$/, '万');
};

export const transSubscribeCount = (subscribeCount) => {
  if (!subscribeCount) return 0;
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
  try {
    const item = localStorage.getItem(key);
    const value = JSON.parse(item);
    // console.log(base, typeToString(value) === typeToString(base));
    return typeToString(value) === typeToString(base) ? value : base;
  } catch {
    return base;
  }
};

export const sleep = (delay = 1000) => new Promise((resolve) => setTimeout(resolve, delay));

export const computedPositionPercentage = (e, dom) => {
  const x = e.clientX;
  const inset = dom.getBoundingClientRect();
  let percentage = (x - inset.x) / inset.width;
  if (percentage < 0) percentage = 0;
  if (percentage > 1) percentage = 1;
  return percentage;
};
