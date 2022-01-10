export default function formatLrc(
  lrc: string = "",
  callback: (onetime: string, word: string) => void
) {
  const lines = lrc.match(/^\[\d*:\d*.\d*\].*/gm);
  if (!lines) return;
  lines.forEach((line: string) => {
    const match = line.match(/(?<time>\[.*\])(?<word>.*)/);
    if (!match) return;
    const { groups } = match;
    if (!groups) return;
    const { time, word } = groups;
    if (!time) return;
    time.match(/\[(\d*:\d*\.?\d*)\]/g).forEach((onetime: string) => {
      callback(onetime, word);
      // const { groups: { min, sec } } = onetime.match(/(?<min>\d{2,}):(?<sec>\d{2,}\.\d{2,})/);
    });
  });
}
