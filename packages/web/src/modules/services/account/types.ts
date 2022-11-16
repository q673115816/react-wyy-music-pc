import { ResWithCode } from "../types";

export interface Countries extends ResWithCode {
  message: string;
  data: Countrie[];
}

interface Countrie {
  label: string;
  countryList: {
    zh: string;
    en: string;
    locale: string;
    code: string;
  }[];
}

export interface LoginStatus extends ResWithCode {
  account: any;
  profile: any;
}
