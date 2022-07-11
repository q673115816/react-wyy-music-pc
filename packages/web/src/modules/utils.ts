import store from "store2";
interface iProps<T> {
  key: string;
  value?: T;
  base?: T;
  callback?: () => void;
}

export const Set = <T>({ key, value, callback }: iProps<T>) => {
  store(key, value);
  callback && callback();
};

export const Get = <T>({ key, callback, base }: iProps<T>): T => {
  const value = store(key) || base;
  callback && callback();
  return value;
};

export const Remove = <T>({ key }: iProps<T>): T => {
  return store.remove(key);
};
