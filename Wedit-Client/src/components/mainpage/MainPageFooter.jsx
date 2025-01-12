import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const Footer = ({ className }) => {
  return (
    <FooterContainer className={className}>
      <FooterItem href="https://spot-skirt-df5.notion.site/Wedit_-173a582ad9408026b3a8cc97d14b91c2?pvs=4" target="_blank" rel="noopener noreferrer">
        이용약관
      </FooterItem>
      <Divider>|</Divider>
      <FooterItem href="https://spot-skirt-df5.notion.site/Wedit_-173a582ad94080b0b100ea5a881f55fe?pvs=4" target="_blank" rel="noopener noreferrer">
        개인정보처리방침
      </FooterItem>
      <Divider>|</Divider>
      <FooterItem href="https://docs.google.com/forms/d/e/1FAIpQLSeHrKDkKU7ii0mTxQf_dqxkvBlKWB6C0X6wU4SieuDyVxHppQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
        고객센터
      </FooterItem>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
  border-top: 0.1rem solid #C1C1C1;

  &.center-align {
    justify-content: center;
    border-top: none;
  }
`;

const FooterItem = styled.a`
    cursor: pointer;
    margin-top: 4.5rem;
    margin-bottom: 4.7rem;
    margin-right: 3.2rem;
    margin-left: 1rem;
    text-align: center;
    text-decoration: none;
    color: black;
    &:not(:last-child) {
        margin-right: 1rem;
        margin-left: 1rem;
    }
    font-size: ${theme.fontSize.xlarge};
    font-weight: ${theme.font.regular.fontWeight};
`;

const Divider = styled.span`
    color: #000;
    font-size: ${theme.fontSize.xlarge};
    font-weight: ${theme.font.regular.fontWeight};
    margin-top: 4.5rem;
    margin-bottom: 4.7rem;
`;
