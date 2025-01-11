import styled from 'styled-components';
import PreviewBox from "../components/mainpage/PreviewBox";
import MainBanner from '../components/mainpage/MainBanner';
import MainPageHeader from '../components/mainpage/MainPageHeader';

const HomePage = () => {
	return (
		<HomePageContainer>
			<MainPageHeader />
			<MainBanner />
			<PreviewBox />
		</HomePageContainer>
	);
};

export default HomePage;

// CSS

const HomePageContainer = styled.div`
  background-color: #F6F6FA;
`;