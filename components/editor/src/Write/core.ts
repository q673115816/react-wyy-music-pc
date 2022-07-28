export const wordLength = (words = ""): number => {
  // console.log(word);
  let length = 0;
  for (let i = 0; i < words.length; i++) {
    const code = words.codePointAt(i);
    if (!code) continue;
    length += code < 0x080 ? 0.5 : 1;
  }
  return length;
};
