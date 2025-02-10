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
