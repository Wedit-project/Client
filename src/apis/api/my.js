import { serverInstance } from "../utils/apiIntance.js";

// 마이페이지 청첩장 모두 조회 API
const viewInvitation = async () => {
    try {
        const response = await serverInstance.get("/api/members/mypage", {
            withCredentials: true,
        });

        return response.data.result.map((item, index) => ({
            ...item,
            num: index + 1,
            id: item.id,
        }));
    } catch (error) {
        console.error("API 요청 오류:", error);
        return [];
    }
};

// 청첩장 조회 API
const getInvitationById = async (invitationId) => {
    try {
      const response = await serverInstance.get(`/api/invitations/${invitationId}`, {
        withCredentials: true,
      });
      console.log("id get : ", response);
      return response;
    } catch (error) {
      console.error("API 요청 오류:", error);
      return null;
    }
};

// 배포링크 생성 API
const createInvitationUrl = async (invitationId) => {
    try {
        const response = await serverInstance.post(`/api/invitations/url/${invitationId}`,{
            withCredentials: true,
        });
        console.log(response.data);

        return response.data;
    } catch (error) {
        console.error("API 요청 오류:", error);
        return null;
    }
};

export { viewInvitation, getInvitationById, createInvitationUrl };
