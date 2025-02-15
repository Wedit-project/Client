// AnalysisPage.jsx
import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Header from '../components/analysispage/Header';
import Section from '../components/analysispage/Section';
import MainPageFooter from '../components/mainpage/MainPageFooter';

const AnalysisPage = () => {
	const { invitationId } = useParams();

	return (
		<PageContainer>
			<Header />
			<Content>
				<Section invitationId={invitationId} />
			</Content>
			<MainPageFooter />
		</PageContainer>
	);
};

export default AnalysisPage;

const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const Content = styled.div`
	flex: 1; /* Header와 Footer를 제외한 남은 공간을 모두 차지 */
	display: flex;
	flex-direction: column;
`;
