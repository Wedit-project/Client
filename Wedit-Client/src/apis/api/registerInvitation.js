import { serverInstance } from '../utils/apiIntance.js';

const registerInvitation = async (images, content, token) => {
	const url = `/api/invitations`;

	const formData = new FormData();
	images.forEach((image) => {
		formData.append('images', image);
	});

	formData.append('content', JSON.stringify(content));

	try {
		const { data } = await serverInstance.post(url, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
				Authorization: `Bearer ${token}`,
			},
		});
		return data.success.data;
	} catch (error) {
		console.error('API 요청 실패:', error);
	}
};

export { registerInvitation };
