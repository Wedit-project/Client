import { serverInstance } from "../utils/apiIntance.js";

const fetchUserInfo = async (setAuth) => {
  try {
    const response = await serverInstance.get("/api/auth/renew", {
      withCredentials: true,
    });

    setAuth(response.data.success);
  } catch (error) {
    console.error("로그인 상태 갱신 실패:", error.response?.data || error.message);
    alert("로그인 상태 갱신에 실패했습니다. 다시 시도해주세요.");
    setAuth(null);
  }
};

const fetchUserLogout = async (setAuth) => {
    try {
      await serverInstance.post("/api/auth/logout", {
        withCredentials: true,
      });
  
      setAuth(null);
      return true;

    } catch (error) {
      console.error("로그아웃 실패:", error.response?.data || error.message);
      alert("로그아웃에 실패했습니다. 다시 시도해주세요.");
      return false;
    }
  };

export { fetchUserInfo, fetchUserLogout };