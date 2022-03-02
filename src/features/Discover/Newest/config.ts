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

export const albumCode = {
  全部: "ALL",
  华语: "ZH",
  欧美: "EA",
  韩国: "KR",
  日本: "JP",
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
export const areas = ["全部", "华语", "欧美", "韩国", "日本"];

export const albumTypes = {
  全部: "new",
  推荐: "hot",
};

export const types = ["推荐", "全部"];
