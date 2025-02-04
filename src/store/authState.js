import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "localStorage",
  storage: localStorage,
});

export const authState = atom({
  key: "authState",
  default: {
    success: null,
    isLoggedIn: false,
  }, // 기본값은 로그인되지 않은 상태
  effects_UNSTABLE: [persistAtom],
});
