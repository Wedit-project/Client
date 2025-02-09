import { serverInstance } from '../utils/apiIntance';

// 방명록 등록
export const registerGuestBook = async ({ name, content, invitationId }) => {
	try {
		const response = await serverInstance.post(
			'/api/comments',
			{
				name,
				content,
				invitationId,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

// 방명록 조회
export const fetchGuestBook = async (invitationId, page) => {
	try {
		const response = await serverInstance.get(`/api/comments/${invitationId}?page=${page}`, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
