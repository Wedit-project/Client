import { serverInstance } from '../utils/apiIntance.js';

const patchInvitation = async (id, images, content) => {
	const formData = new FormData();

	const base64ToFile = (base64String, index) => {
		const byteString = atob(base64String.split(',')[1]);
		const mimeType = base64String.match(/data:(.*);base64/)[1];
		const arrayBuffer = new Uint8Array(byteString.length);

		for (let i = 0; i < byteString.length; i++) {
			arrayBuffer[i] = byteString.charCodeAt(i);
		}

		return new File([arrayBuffer], `image_${index}.png`, { type: mimeType });
	};

	images.forEach((base64, index) => {
		const file = base64ToFile(base64, index);
		formData.append('images', file);
	});

	formData.append('content', new Blob([JSON.stringify(content)], { type: 'application/json' }));

	try {
		const { data } = await serverInstance.patch(`/api/invitations/${id}`, formData, {
			withCredentials: true,
		});
		console.log('청첩장 수정 성공:', data);
		return data.success.data;
	} catch (error) {
		console.error('청첩장 수정 요청 실패:', error);
	}
};

export { patchInvitation };
