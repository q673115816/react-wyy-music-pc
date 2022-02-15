export type SongConfigType = "全部" | "华语" | "欧美" | "韩国" | "日本";

type SongConfig = {
  [key in SongConfigType]: number;
};

export const songConfig: SongConfig = {
  全部: 0,
  华语: 7,
  欧美: 96,
  韩国: 16,
  日本: 8,
};
