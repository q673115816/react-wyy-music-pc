export interface Daily {
  code: number;
  data: {
    dailySongs: DailySong[];
    orderSongs: [];
    recommendReasons: [];
  };
}

export interface DailySong {
  name: string;
  alia: string[];
  id: number;
  dt: number;
  al: {
    id: number;
    name: string;
    pic: number;
    picUrl: string;
  };
  ar: { id: number; name: string }[];
}
