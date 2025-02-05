import { serverInstance } from '../utils/apiIntance.js';

const registerInvitation = async (images, content) => {
	const url = `/api/invitations`;
	const formData = new FormData();

	// Base64 이미지를 File 객체로 변환
	const base64ToFile = (base64String, index) => {
		const byteString = atob(base64String.split(',')[1]); // Base64 데이터 부분만 추출
		const mimeType = base64String.match(/data:(.*);base64/)[1]; // MIME 타입 추출
		const arrayBuffer = new Uint8Array(byteString.length);

		for (let i = 0; i < byteString.length; i++) {
			arrayBuffer[i] = byteString.charCodeAt(i);
		}

		return new File([arrayBuffer], `image_${index}.png`, { type: mimeType });
	};

	// `images` 배열의 각 Base64 문자열을 `File` 객체로 변환 후 `FormData`에 추가
	images.forEach((base64, index) => {
		const file = base64ToFile(base64, index);
		formData.append('images', file);
	});

	// `content` 객체를 Blob으로 변환하여 추가
	formData.append('content', new Blob([JSON.stringify(content)], { type: 'application/json' }));

	try {
		const { data } = await serverInstance.post(url, formData, {
			withCredentials: true,
		});
		return data.success.data;
	} catch (error) {
		console.error('API 요청 실패:', error);
	}
};

export { registerInvitation };
