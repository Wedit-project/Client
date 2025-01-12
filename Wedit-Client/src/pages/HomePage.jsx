import styled from 'styled-components';
import PreviewBox from "../components/mainpage/PreviewBox";
import MainBanner from '../components/mainpage/MainBanner';

const HomePage = () => {
	return (
		<HomePageContainer>
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