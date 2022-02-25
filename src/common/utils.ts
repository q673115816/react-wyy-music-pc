export const transPlayCount = (playCount: number = 0) => {
  return String(playCount).replace(/(?<=\d{2,})\d{4}$/, "万");
};

export const transSubscribeCount = (subscribeCount: number = 0) => {
  return String(subscribeCount).replace(/(?<=\d+)\d{4}$/, "万");
};

export const wordLength = (words: string = ""): number => {
  // console.log(word);
  let length = 0;
  for (let i = 0; i < words.length; i++) {
    const code = words.codePointAt(i);
    if (!code) continue;
    length += code < 0x080 ? 0.5 : 1;
  }
  return length;
};

function typeToString(target: any) {
  return Object.prototype.toString.call(target);
}

export const sleep = (delay = 1000) =>
  new Promise((resolve) => setTimeout(resolve, delay));

type Dir = "x" | "y";

type Dist = {
  [key in Dir]: string[];
};

export const computedPositionPercentage = (
  event: MouseEvent,
  dom: HTMLElement,
  dir: Dir = "x"
) => {
  const inset: DOMRect = dom.getBoundingClientRect();
  let percentage =
    dir === "x"
      ? (event.clientX - inset.x) / inset.width
      : (inset.bottom - event.clientY) / inset.height;
  if (percentage < 0) percentage = 0;
  if (percentage > 1) percentage = 1;
  return percentage;
};

export const isInTheRect = (event: MouseEvent, dom: HTMLElement) => {
  const inset: DOMRect = dom.getBoundingClientRect();
  const [x, y] = [event.clientX, event.clientY];
  return (
    x <= inset.right && x >= inset.left && y <= inset.bottom && y >= inset.top
  );
};

export const UUIDGeneratorBrowser = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
