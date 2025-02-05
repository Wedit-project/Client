import { serverInstance } from '../utils/apiIntance.js';

const registerInvitation = async (images, content) => {
	const url = `/api/invitations`;

	const formData = new FormData();

	Array.from(images).forEach((image) => {
		formData.append('images', image);
	});

	formData.append('content', new Blob([JSON.stringify(content)], { type: 'application/json' }));

	let totalSize = 0;
	for (let [key, value] of formData.entries()) {
		if (value instanceof File) {
			totalSize += value.size;
		}
	}
	console.log('Total size of images:', totalSize);

	try {
		for (const x of formData) {
			console.log(x);
		}

		const contentBlob = formData.get('content');
		const reader = new FileReader();

		reader.onload = function () {
			console.log('Content:', JSON.parse(reader.result));
		};

		reader.readAsText(contentBlob);

		const { data } = await serverInstance.post(url, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
			withCredentials: true,
		});
		return data.success.data;
	} catch (error) {
		console.error('API 요청 실패:', error);
	}
};

export { registerInvitation };
