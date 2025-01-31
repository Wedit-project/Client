import styled from 'styled-components';
import PreviewBox from "../components/mainpage/PreviewBox";
import MainBanner from '../components/mainpage/MainBanner';
import MainPageHeader from '../components/mainpage/MainPageHeader';
import MainPageSection from "../components/mainpage/MainPageSection";
import MainPageFooter from "../components/mainpage/MainPageFooter";
import theme from '../styles/theme';

const HomePage = () => {
	return (
		<HomePageContainer>
			<MainPageHeader />
			<MainBanner />
			<PreviewBox />
			<MainPageSection />
			<MainPageFooter />
		</HomePageContainer>
	);
};

export default HomePage;

// CSS

const HomePageContainer = styled.div`
  background-color: ${theme.colors.background.background1};
`;