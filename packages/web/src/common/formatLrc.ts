const LINE_REG = /^\[\d*:\d*(?:\.\d+)?\][^\r\n]*/gm;
const TIME_REG = /\[\d*:\d*(?:\.\d+)?\]/g;
const TAG_REG = /^(\[[^\]]+\])([\s\S]*)$/;

export default function formatLrc(
  lrc: string = "",
  callback: (onetime: string, word: string) => void
) {
  if (!lrc) return;
  const lines = lrc.match(LINE_REG);
  if (!lines) return;
  for (const line of lines) {
    const matched = line.match(TAG_REG);
    if (!matched) continue;
    const [, tag, word = ""] = matched;
    const times = tag.match(TIME_REG);
    if (!times) continue;
    for (const onetime of times) callback(onetime, word);
  }
}
