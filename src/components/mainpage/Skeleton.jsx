import React from "react";
import styled from "styled-components";

// 스켈레톤 UI 컴포넌트
const Skeleton = () => {
  return (
    <SkeletonWrapper>
      <SkeletonImage />
    </SkeletonWrapper>
  );
};

// 스켈레톤 UI 스타일
const SkeletonWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.gray[200]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SkeletonImage = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite linear;
  
  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

export default Skeleton;
