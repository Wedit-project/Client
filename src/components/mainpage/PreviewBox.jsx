// FeatureCards.jsx
import styled from "styled-components";
import EditIcon from "../../assets/icons/PreviewIcon1.svg?react";
import SearchIcon from "../../assets/icons/PreviewIcon2.svg?react";
import MobileIcon from "../../assets/icons/PreviewIcon3.svg?react";
import CheckIcon from "../../assets/icons/PreviewIcon4.svg?react";
import theme from "../../styles/theme";

const FeatureCards = () => {
  const features = [
    { title: "언제나 수정 가능", icon: <EditIcon /> },
    { title: "즉시 제작", icon: <SearchIcon /> },
    { title: "화면 크기에 맞춰\n어디서나 보기 편하게", icon: <MobileIcon /> },
    { title: "원하는 옵션 선택 가능", icon: <CheckIcon /> },
  ];

  return (
    <Wrapper>
      {features.map((feature, index) => (
        <Card key={index}>
          <Icon>{feature.icon}</Icon>
          <Title>
            {feature.title}
          </Title>
        </Card>
      ))}
    </Wrapper>
  );
};

export default FeatureCards;

// CSS
const Wrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  min-height: 100%;

  flex-wrap: wrap;
  justify-content: center;
  max-width: 104.6rem;
  margin: 0 auto;
  gap: 3.6rem 24rem;
  margin-top: 4.3rem;
  margin-bottom: 5rem;

  @media (max-width: 768px) { 
    display: flex;
    flex: 0 0 auto;
    min-height: 100%;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 320rem;
    gap: 5rem;
    margin-top: 20rem;
    margin-bottom: 20rem;
  }
`;

const Card = styled.div`
  display: flex;
  flex: 0 0 auto;
  min-height: 100%;
 
  flex-direction: row;
  align-items: center;
  justify-content: left;
  border-radius: 2rem;
  width: 40.3rem;
  height: 13.7rem;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.2);
  background-color: #fff;
  text-align: center;

  @media (max-width: 768px) {
    width: 70.3rem;
    height: 23.7rem;
    border-radius: 3rem;
  }

  @media (max-width: 350px) {
    width: 61.3rem;
    height: 23.7rem;
    border-radius: 3rem;
  }
`;

const Icon = styled.div`
  width: 6.9rem;
  height: 6.9rem;
  margin-right: 3.1rem;
  margin-left: 3.55rem;

  @media (max-width: 768px) {
    width: 13rem;
    height: 13rem;
    margin-right: 5.1rem;
    margin-left: 3.55rem;
  }
`;

const Title = styled.p`
  font-size: ${theme.fontSize.xlarge};
  font-weight: ${theme.font.bold.fontWeight};
  white-space: pre-line;
  text-align: left;
  line-height: 133.333%;
  letter-spacing: -0.0456rem;

  @media (max-width: 768px) {
    font-size: 4rem;
    font-weight: ${theme.font.bold.fontWeight};
    white-space: pre-line;
    text-align: left;
    line-height: 133.333%;
    letter-spacing: -0.0456rem;
    padding-top: 0.1rem;
  }
`;
