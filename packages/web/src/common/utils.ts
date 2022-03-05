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

export const sleep = (delay = 1000) =>
  new Promise((resolve) => setTimeout(resolve, delay));

type Dir = "x" | "y";

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
