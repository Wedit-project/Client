import styled from 'styled-components';
import PreviewBox from "../components/mainpage/PreviewBox";

const HomePage = () => {
	return (
		<HomePageContainer>
			<PreviewBox />
		</HomePageContainer>
	);
};

export default HomePage;

// CSS

const HomePageContainer = styled.div`
  background-color: #F6F6FA;
`;