import styled from 'styled-components';
import MyPageHeader from '../components/mypage/MyPageHeader';
import MyPageSection from '../components/mypage/MyPageSection';
import MainPageFooter from '../components/mainpage/MainPageFooter';

const MyPage = () => {
	return (
		<PageContainer>
			<MyPageHeader />
			<Content>
				<MyPageSection />
			</Content>
			<MainPageFooter />
		</PageContainer>
	);
};

export default MyPage;

// CSS
const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const Content = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;
