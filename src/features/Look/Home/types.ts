export type iList = [string, iOptions][];
export interface iHome {
  list: iList
}
export interface iOptions {
  uid: string
  user: string;
  title: string;
  banner: string;
}
