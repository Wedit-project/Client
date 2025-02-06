import { serverInstance } from '../utils/apiIntance';

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
