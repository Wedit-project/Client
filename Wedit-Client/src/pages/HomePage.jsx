import styled from 'styled-components';
import theme from '../styles/theme';

const HomePage = () => {
	return (
		<HomeText>홈 페이지</HomeText>
	);
};

export default HomePage;

// CSS
const HomeText = styled.p`
	font-size: ${theme.fontSize.xlarge};
  	font-weight: ${theme.font.bold.fontWeight};
`;
