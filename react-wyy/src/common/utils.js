export const transPlayCount = (playCount) => String(playCount).replace(/(?<=\d{2,})\d{4}$/, '万');
