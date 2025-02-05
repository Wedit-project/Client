import { serverInstance } from '../utils/apiIntance';

export const registerAttendance = async ({ name, phoneNumber, addPerson, side, invitationId }) => {
	try {
		const response = await serverInstance.post(
			'/api/decisions',
			{
				name,
				phoneNumber,
				addPerson,
				side,
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
