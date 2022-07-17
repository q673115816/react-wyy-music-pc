export const transPlayCount = (playCount = 0) => {
  return String(playCount).replace(/(?<=\d{2,})\d{4}$/, "万");
};

export const transSubscribeCount = (subscribeCount = 0) => {
  return String(subscribeCount).replace(/(?<=\d+)\d{4}$/, "万");
};

export const computedPositionPercentage = (
  event: MouseEvent,
  dom: HTMLElement,
  dir: "x" | "y" = "x"
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
