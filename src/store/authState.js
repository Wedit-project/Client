import { atom } from "recoil";

export const authState = atom({
  key: "authState",
  default: null, // 초기값: 토큰 없음
});
