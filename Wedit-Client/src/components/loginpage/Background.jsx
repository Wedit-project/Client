import React from "react";
import styled from "styled-components";
import loginBackground from '../../assets/icons/loginbackground.svg';

const Background = ({ children }) => {
    return (
        <BackgroundContainer>
            <BackgroundImageElement src={loginBackground} alt="background" />
            {children}
        </BackgroundContainer>
    );
};

export default Background;

const BackgroundContainer = styled.div`
    position: relative;
    align-items: center;
    justify-items: center;
    overflow-x: hidden;
`;

const BackgroundImageElement = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`;
