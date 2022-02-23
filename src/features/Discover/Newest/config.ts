export type SongConfigType = "全部" | "华语" | "欧美" | "韩国" | "日本";

type SongConfig = {
  [key in SongConfigType]: number;
};

export const songNavs = ["全部", "华语", "欧美", "韩国", "日本"];

export const songCode: SongConfig = {
  全部: 0,
  华语: 7,
  欧美: 96,
  韩国: 16,
  日本: 8,
};

export const arealist = [
  {
    name: "全部",
    code: "ALL",
  },
  {
    name: "华语",
    code: "ZH",
  },
  {
    name: "欧美",
    code: "EA",
  },
  {
    name: "韩国",
    code: "KR",
  },
  {
    name: "日本",
    code: "JP",
  },
];
