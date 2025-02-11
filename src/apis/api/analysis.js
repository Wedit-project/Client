import { serverInstance } from '../../apis/utils/apiIntance';

// 분석보기 조회
export const getAnalysis = async (invitationId) => {
	try {
		const response = await serverInstance.get(`/api/members/${invitationId}/analysis`, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		return response.data.result;
	} catch (error) {
		console.error(error);
	}
};

// 참석의사 옵션 조회
export const getDecisionOption = async (invitationId) => {
	try {
		const response = await serverInstance.get(`/api/members/mypage`, {
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const result = response.data.result;
		const invitationData = result.find((invitation) => invitation.id === Number(invitationId));

		if (!invitationData) {
			console.warn(`Invitation with id ${invitationId} not found`);
			return null;
		}

		return invitationData.decisionOption;
	} catch (error) {
		console.error(error);
	}
};
