import store from "store2";
interface iSetProps<T> {
  key: string;
  value?: T;
  base?: T;
  callback?: Function;
}

export const Set = <T>({ key, value, callback }: iSetProps<T>) => {
  store(key, value);
  callback && callback();
};

export const Get = <T>({ key, callback, base }: iSetProps<T>): T => {
  const value = store(key) || base;
  callback && callback();
  return value;
};
