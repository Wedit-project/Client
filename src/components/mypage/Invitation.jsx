import React, { useEffect } from "react";
import styled from "styled-components";
import ActionButtons from "./ActionButtons";
import theme from "../../styles/theme";
import { serverInstance } from "../../apis/utils/apiIntance";

const Invitation = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await serverInstance.get("/api/members/mypage", {
          headers: {
            Authorization: "super-secret-token",
          },
        });
        console.log("응답 데이터:", response.data);
      } catch (error) {
        console.error("API 요청 오류:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <InvitationContainer>
      <Title>청첩장 1</Title>
      <ActionButtons />
    </InvitationContainer>
  );
};

export default Invitation;

// CSS

const InvitationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 7.2rem;
  margin-left: 7.3rem;
  margin-bottom: 3.8rem;
`;

const Title = styled.div`
  font-size: ${theme.fontSize.xlarge};
  font-weight: ${theme.font.medium.fontWeight};
  line-height: 133.333%;
  letter-spacing: -0.0456rem;
`;
