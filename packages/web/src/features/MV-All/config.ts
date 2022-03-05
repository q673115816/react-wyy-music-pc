export type Keys = "area" | "type" | "order";

export const filters: [Keys, string, string[]][] = [
  ["area", "地区", ["全部", "内地", "港台", "欧美", "韩国", "日本"]],
  ["type", "类型", ["全部", "官方版", "原声", "现场版", "网易出品"]],
  ["order", "排序", ["上升最快", "最热", "最新"]],
];

export const defaultSearch: { [key in Keys]: string } = {
  area: "全部",
  type: "全部",
  order: "上升最快",
};
