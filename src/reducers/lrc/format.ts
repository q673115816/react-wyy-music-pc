export default function formatLrc(lrc, callback) {
  lrc
    .match(/^\[\d*:\d*.\d*\].*/mg)
    .forEach((line) => {
      const { groups: { time, word } } = line.match(/(?<time>\[.*\])(?<word>.*)/);
      time
        .match(/\[(\d*:\d*\.?\d*)\]/g)
        .forEach((onetime) => {
          callback(onetime, word);
          // const { groups: { min, sec } } = onetime.match(/(?<min>\d{2,}):(?<sec>\d{2,}\.\d{2,})/);
        });
    });
}
