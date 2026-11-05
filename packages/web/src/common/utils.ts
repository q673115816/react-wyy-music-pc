export const transPlayCount = (playCount = 0) => {
  return String(playCount).replace(
    /(((?<=\d+)\d{8})|((?<=\d{2,})\d{4}))$/,
    (reg, $1, $2, $3) => {
      if ($2) return "亿";
      if ($3) return "万";
      return reg;
    }
  );
};

export const transSubscribeCount = (subscribeCount = 0) => {
  return String(subscribeCount).replace(/(?<=\d+)\d{4}$/, "万");
};
