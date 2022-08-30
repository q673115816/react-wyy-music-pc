export default class {
  private ctx: AudioContext = new AudioContext();
  private source = this.ctx.createBufferSource();
  analyser = this.ctx.createAnalyser();
  duration = 0;
  constructor() {}

  start(buffer) {}

  async asset(src: string) {
    const res = await fetch(src);
    const arrayBuffer = await res.arrayBuffer();
    const decodedData = await this.ctx.decodeAudioData(arrayBuffer);
    this.source.buffer = decodedData;
    this.duration = decodedData.duration;
    this.source.connect(this.ctx.destination);
    this.source.start(0);
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
    return { contextTime, performanceTime };
  }

  draw(canvasCtx) {}
}
