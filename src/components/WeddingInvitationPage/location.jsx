import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import theme from '../../styles/theme';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useKakaoLoader from '../../hooks/useKakaoLoader';

const Location = ({ $variant = 'basic', invitationData }) => {
	useKakaoLoader();

	const [location, setLocation] = useState({ lat: 33.450701, lng: 126.570667 }); // 지도 중심좌표
	const [isMapLoaded, setIsMapLoaded] = useState(false);

	useEffect(() => {
		console.log('주소 변경됨:', invitationData.address);

		// SDK가 로드될 때까지 기다리기
		const checkKakaoLoaded = setInterval(() => {
			if (window.kakao && window.kakao.maps && window.kakao.maps.services) {
				clearInterval(checkKakaoLoaded);
				setIsMapLoaded(true);
			}
		}, 500);

		return () => clearInterval(checkKakaoLoaded);
	}, []);

	useEffect(() => {
		if (!isMapLoaded) return; // SDK가 로드되지 않으면 실행X

		const geocoder = new window.kakao.maps.services.Geocoder();

		// 주소-좌표 변환
		geocoder.addressSearch(invitationData.address, (result, status) => {
			if (status === window.kakao.maps.services.Status.OK) {
				setLocation({
					lat: parseFloat(result[0].y),
					lng: parseFloat(result[0].x),
				});
			} else {
				console.error('주소 변환 실패');
			}
		});
	}, [isMapLoaded, invitationData.address]);

	return (
		<LocationWrapper>
			<LocationSpan $variant={$variant}>위치</LocationSpan>
			{isMapLoaded && (
				<MapBox center={location} level={3}>
					<MapMarker position={location} />
				</MapBox>
			)}
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
	color: ${theme.colors.green.main};
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
			color: ${theme.colors.traditionalWedding.invitation5};
			&::before,
			&::after {
				content: '';
				display: block;
				width: 49rem;
				height: 0.2rem;
				background-color: ${theme.colors.traditionalWedding.invitation5};
			}

			&::before {
				margin-right: 7.1rem;
			}

			&::after {
				margin-left: 7.1rem;
			}
		`}
	@media  (min-width: 480px) and (max-width: 768px) {
		${({ $variant }) =>
			$variant === 'tradition' &&
			css`
				&::before {
					margin-right: 6rem;
				}

				&::after {
					margin-left: 6rem;
				}
			`}
	}
`;

const MapBox = styled(Map)`
	margin-top: 3.9rem;
	width: 112.1rem;
	height: 50.2rem;
	border-radius: 2rem;
`;
