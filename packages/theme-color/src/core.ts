// https://css-tricks.com/converting-color-spaces-in-javascript/
export function HSLToHex(h: number, s: number, l: number) {
  h %= 360;
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;

  if (h >= 0 && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h >= 60 && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h >= 180 && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h >= 240 && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (h >= 300 && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  // Having obtained RGB, convert channels to hex
  r = Math.round((r + m) * 255)
    .toString(16)
    .padStart(2, "0");
  g = Math.round((g + m) * 255)
    .toString(16)
    .padStart(2, "0");
  b = Math.round((b + m) * 255)
    .toString(16)
    .padStart(2, "0");

  // Prepend 0s, if necessary
  // if (r.length == 1) {
  //   r = `0${r}`;
  // }
  // if (g.length == 1) {
  //   g = `0${g}`;
  // }
  // if (b.length == 1) {
  //   b = `0${b}`;
  // }

  return `#${r}${g}${b}`;
}

export function hexToHSL(H: string) {
  // Convert hex to RGB first
  let r: number | string = 0;
  let g: number | string = 0;
  let b: number | string = 0;
  if (H.length == 4) {
    r = `0x${H[1]}${H[1]}`;
    g = `0x${H[2]}${H[2]}`;
    b = `0x${H[3]}${H[3]}`;
  } else if (H.length == 7) {
    r = `0x${H[1]}${H[2]}`;
    g = `0x${H[3]}${H[4]}`;
    b = `0x${H[5]}${H[6]}`;
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

  if (delta == 0) {
    h = 0;
  } else if (cmax == r) {
    h = ((g - b) / delta) % 6;
  } else if (cmax == g) {
    h = (b - r) / delta + 2;
  } else {
    h = (r - g) / delta + 4;
  }

  h = Math.round(h * 60);

  if (h < 0) {
    h += 360;
  }

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);
  return [h, s, l];
  // return "hsl(" + h + "," + s + "%," + l + "%)";
}

export const themes = [
  ["酷炫黑", "#393D44"],
  ["官方红", "#EC4141"],
  ["可爱粉", "#F95A92"],
  ["天际蓝", "#5AB4F9"],
  ["清新绿", "#38B277"],
  ["土豪金", "#D18E35"],
];

export const colors = [
  "#F5F5F5",
  "#FF5C8A",
  "#FF7A9E",
  "#717FF9",
  "#4791EB",
  "#39AFEA",
  "#2BB669",
  "#6ACC19",
  "#E2AB12",
  "#FF8F57",
  "#FD726D",
  "#FD544E",
];
