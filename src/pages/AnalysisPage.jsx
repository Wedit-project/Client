// AnalysisPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/analysispage/Header';
import Section from '../components/analysispage/Section';
import MainPageFooter from '../components/mainpage/MainPageFooter';

const AnalysisPage = () => {
	const { invitationId } = useParams();

	return (
		<>
			<Header />
			<Section invitationId={invitationId} />
			<MainPageFooter />
		</>
	);
};

export default AnalysisPage;
