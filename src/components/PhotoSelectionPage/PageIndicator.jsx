import styled from 'styled-components';
import theme from '../../styles/theme';
import CircleGray from '../../assets/img/Ellipse14.svg?react';

const PageIndicator = ({ step }) => {
	return (
		<Container>
			<CircleIcon isActive={step === 0} />
			<CircleIcon isActive={step === 1} />
			<CircleIcon isActive={step === 2} />
			<CircleIcon isActive={step === 3} />
		</Container>
	);
};

export default PageIndicator;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1.7rem;
`;

const CircleIcon = styled(CircleGray)`
	width: 1.8rem;
	height: 1.8rem;
	fill: ${(props) =>
		props.isActive ? `${theme.colors.green['main']}` : `${theme.colors.gray['300']}`};

	@media (max-width: 480px) {
		width: 3rem;
		height: 3rem;
	}
`;
