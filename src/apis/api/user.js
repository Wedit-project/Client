import { serverInstance } from "../utils/apiIntance.js";

const fetchUserInfo = async (authState) => {
  try {
    const response = await serverInstance.get("/api/auth/renew");

    authState(response.data.success);
  } catch (error) {
    console.error("로그인 상태 갱신 실패:", error.response?.data || error.message);
    authState(null);
  }
};

const fetchUserLogout = async (authState) => {
    try {
      const response = await serverInstance.post("/api/auth/logout", null, {
        withCredentials: true,
      });
      
      if (response.data.success) {
        // Recoil 상태 초기화
        authState(null);
  
        return true;
      }
  
      return false;

    } catch (error) {
      console.error("로그아웃 실패:", error.response?.data || error.message);
      alert("로그아웃에 실패했습니다. 다시 시도해주세요.");
      return false;
    }
  };

export { fetchUserInfo, fetchUserLogout };