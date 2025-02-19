import { useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const CookieConsentModal = ({ onClose }) => {
    const [isRequesting, setIsRequesting] = useState(false);
  
    const handleAllowCookies = async () => {
        setIsRequesting(true);
        try {
            await document.requestStorageAccess();
            localStorage.setItem("cookieAllowed", "true");
            onClose();
        } catch (error) {
            alert("쿠키 접근이 거부되었습니다.");
        } finally {
            setIsRequesting(false);
        }
    };
  
    return (
        <ModalOverlay>
            <ModalContent>
                <p>이 웹사이트에서 더 나은 경험을 위해 쿠키를 허용해 주세요.</p>
                <button onClick={handleAllowCookies} disabled={isRequesting}>
                    {isRequesting ? "요청 중..." : "쿠키 허용"}
                </button>
            </ModalContent>
        </ModalOverlay>
    );
  };
  
  export default CookieConsentModal;
  
  // 스타일 수정
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  `;
  
const ModalContent = styled.div`
    background: white;
    padding: 4rem 4rem 3rem 4rem;
    border-radius: 3rem;
    text-align: center;
    z-index: 10000;
  
    p {
        margin-bottom: 3rem;
        font-size: ${theme.fontSize.xlarge};
        font-weight: ${theme.font.semibold.fontWeight};
    }
  
    button {
        font-size: ${theme.fontSize.medium};
        font-weight: ${theme.font.semibold.fontWeight};
        background: ${theme.colors.green.main};
        color: ${theme.colors.gray[0]};
        border: none;
        padding: 1rem 3rem;
        border-radius: 1rem;
        cursor: pointer;
    
        &:hover {
            background: ${theme.colors.green["80%"]};
        }
    }

    @media (max-width: 768px) {
        width: 70vw;
        padding: 10rem 5rem 5rem 5rem;
        border-radius: 5rem;

        p {
            font-size: 4rem;
            margin-bottom: 7rem;
        }

        button {
            font-size: 3rem;
            padding: 3rem 5rem;
            border-radius: 3rem;
        }
    }
    
    @media (min-width: 481px) and (max-width: 568px) {
        width: 70vw;
        padding: 10rem 5rem 5rem 5rem;
        border-radius: 5rem;

        p {
            font-size: 3rem;
            margin-bottom: 7rem;
        }

        button {
            font-size: 3rem;
            padding: 3rem 5rem;
            border-radius: 3rem;
        }
    }

    @media (max-width: 348px) {
        width: 70vw;
        padding: 10rem 5rem 5rem 5rem;
        border-radius: 5rem;

        p {
            font-size: 2.5rem;
            margin-bottom: 7rem;
        }

        button {
            font-size: 2rem;
            padding: 3rem 5rem;
            border-radius: 3rem;
        }
    }
`;
  