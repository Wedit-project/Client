import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../styles/theme';
import { Map } from 'react-kakao-maps-sdk';
import useKakaoLoader from '../../hooks/useKakaoLoader';

const Location = ({ $variant = 'basic' }) => {
	useKakaoLoader(); // 카카오 지도 SDK 로딩

	return (
		<LocationWrapper>
			<LocationSpan $variant={$variant}>위치</LocationSpan>
			<MapBox
				center={{
					// 지도 중심 좌표
					lat: 33.450701,
					lng: 126.570667,
				}}
				// 지도 확대 레벨
				level={3}
			/>
		</LocationWrapper>
	);
};

export default Location;

// CSS
const LocationWrapper = styled.div`
	margin-top: 10.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const LocationSpan = styled.span`
	font-weight: ${theme.font.bold.fontWeight};
	color: #acb66d;
	font-size: 4.4rem;
	font-style: normal;
	line-height: 66.482%;
	letter-spacing: -0.0836rem;

	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	${({ $variant }) =>
		$variant === 'tradition' &&
		css`
			color: var(--brown, #3c140d);
			&::before,
			&::after {
				content: '';
				display: block;
				width: 49rem;
				height: 0.2rem;
				background-color: var(--brown, #3c140d);
			}

			&::before {
				margin-right: 7.1rem;
			}

			&::after {
				margin-left: 7.1rem;
			}
		`}
`;

const MapBox = styled(Map)`
	margin-top: 3.9rem;
	width: 112.1rem;
	height: 50.2rem;
	border-radius: 2rem;
`;
