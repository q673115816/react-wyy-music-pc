import { transTextEmoji } from "@/components/Emoji";

export const transContent = (str: string) => {
  str = transTextEmoji(str);
};
