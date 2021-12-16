export type iList = iOptions[];

export interface iHome {
  list: iList
}

export interface iOptions {
  uid: string;
  sdp: string;
  user: string;
  title: string;
  banner: string;
}
