import { serverInstance } from "../utils/apiIntance.js";

// 청첩장 조회 API
const viewPersonalInvitation = async (invitationId) => {
    try {
        const response = await serverInstance.get(`/api/invitations/${invitationId}`, {
            withCredentials: true,
        });
        console.log("response : ", response);
        return response.data.result;

    } catch (error) {
        console.error("API 요청 오류:", error);
        return null;
    }
};

// 비회원 청첩장 조회 API
const viewNonMemberInvitation = async (uniqueId) => {
    try {
        const response = await serverInstance.get(`/api/invitations/guest/${uniqueId}`);
        console.log("response : ", response);
        return response;

    } catch (error) {
        console.error("API 요청 오류:", error);
        return null;
    }
};

export { viewPersonalInvitation, viewNonMemberInvitation };
