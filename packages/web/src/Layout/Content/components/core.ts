export default class {
  private ctx: AudioContext = new AudioContext();
  private source = this.ctx.createBufferSource();
  duration: number;
  constructor() {}

  start(buffer) {}

  async asset(src) {
    const res = await fetch(src);
    const arrayBuffer = await res.arrayBuffer();
    return await this.ctx.decodeAudioData(arrayBuffer, (decodedData) => {
      this.source.buffer = decodedData;
      this.duration = decodedData.duration;
      this.source.connect(this.ctx.destination);
      this.source.start(0);
    });
  }

  async toggle() {
    const { ctx } = this;
    if (ctx.state === "running") await ctx.suspend();
    else if (ctx.state === "suspended") await ctx.resume();
  }

  stop() {
    this.source.stop();
  }

  time() {
    const { contextTime, performanceTime } = this.ctx.getOutputTimestamp();
  }
}
