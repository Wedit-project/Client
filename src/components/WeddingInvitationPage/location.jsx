import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import theme from '../../styles/theme';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useKakaoLoader from '../../hooks/useKakaoLoader';

const Location = ({ $variant = 'basic', invitationData }) => {
    useKakaoLoader(); // 카카오 지도 SDK 로딩

    const [location, setLocation] = useState({ lat: 33.450701, lng: 126.570667 }); // 지도 중심좌표

    useEffect(() => {
        if (!window.kakao) return;

        // 주소-좌표 변환 객체 생성
        const geocoder = new window.kakao.maps.services.Geocoder();
        // 주소로 좌표 검색
        geocoder.addressSearch(invitationData.address, (result, status) => {
            // 정상적으로 검색이 완료
            if (status === window.kakao.maps.services.Status.OK) {
                setLocation({ lat: parseFloat(result[0].y), lng: parseFloat(result[0].x) });
            }
        });
    }, [invitationData.address]);

    return (
        <LocationWrapper>
            <LocationSpan $variant={$variant}>위치</LocationSpan>
            <MapBox center={location} level={3}>
                <MapMarker position={location}></MapMarker>
            </MapBox>
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
`;

const MapBox = styled(Map)`
	margin-top: 3.9rem;
	width: 112.1rem;
	height: 50.2rem;
	border-radius: 2rem;
`;
