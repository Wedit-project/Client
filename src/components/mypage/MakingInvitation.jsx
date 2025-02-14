import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import Invitation from './Invitation';
import { viewInvitation, DeleteInvitations } from '../../apis/api/my';

const MakingInvitation = () => {
	const [invitations, setInvitations] = useState([]);

	useEffect(() => {
		const fetchInvitations = async () => {
			const data = await viewInvitation();
			if (data.length > 10) {
				// 가장 오래된 청첩장 삭제
				await DeleteInvitations(data[0].num);
				const updatedData = await viewInvitation(); // 최신 데이터 다시 불러오기
				setInvitations(updatedData);
			} else {
				setInvitations(data);
			}
		};
		fetchInvitations();
	}, []);

	return (
		<MakingInvitationWrapper>
			<Text>제작 중인 페이지</Text>
			<Divider />
			{invitations.length === 0 ? (
				<NothingText>아직 제작 중인 청첩장이 없어요!</NothingText>
			) : (
				<ScrollableContainer>
					{invitations.map((invitation) => (
						<Invitation key={invitation.num} num={invitation.num} invitation={invitation} />
					))}
				</ScrollableContainer>
			)}
		</MakingInvitationWrapper>
	);
};

export default MakingInvitation;

// CSS

const MakingInvitationWrapper = styled.div``;

const Text = styled.div`
	margin: 0;
	text-align: left;
	font-size: ${theme.fontSize.xlarge};
	font-weight: ${theme.font.medium.fontWeight};
	margin-left: 10.5rem;
	line-height: 133.333%;
	letter-spacing: -0.0456rem;
`;

const Divider = styled.div`
	margin-left: 10.7rem;
	margin-right: 10.7rem;
	margin-top: 2.6rem;
	margin-bottom: 5.1rem;
	border: 0.2rem solid ${theme.colors.green.main};
	border-radius: 0.2rem;
`;

const NothingText = styled.div`
	margin: 0;
	text-align: center;
	color: ${theme.colors.gray[500]};
	font-size: ${theme.fontSize.xlarge};
	font-weight: ${theme.font.medium.fontWeight};
	margin-top: 8.7rem;
	padding-bottom: 10.6rem;
	line-height: 133.333%;
	letter-spacing: -0.0456rem;
`;

const ScrollableContainer = styled.div`
	height: 11.8rem;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 0.7rem;
	}
	&::-webkit-scrollbar-thumb {
		background-color: ${theme.colors.green.main};
		border-radius: 0.25rem;
	}
	&::-webkit-scrollbar-track {
		background-color: ${theme.colors.gray[400]};
		border-radius: 0.25rem;
	}
`;
