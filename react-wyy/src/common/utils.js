export const transplayCount = (playCount) => String(playCount).replace(/(?<=\d{2,})\d{4}$/, '万');
