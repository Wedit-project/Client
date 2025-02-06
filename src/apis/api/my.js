import { serverInstance } from "../utils/apiIntance.js";

const viewInvitation = async () => {
    try {
        const response = await serverInstance.get("/api/members/mypage", {
            withCredentials: true,
        });

        return response.data.result.map((item, index) => ({
            ...item,
            num: index + 1,
        }));
    } catch (error) {
        console.error("API 요청 오류:", error);
        return [];
    }
};

const getInvitationById = async (invitationId) => {
    try {
      const response = await serverInstance.get(`/api/invitations/${invitationId}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error("API 요청 오류:", error);
      return null;
    }
  };

export { viewInvitation, getInvitationById };
