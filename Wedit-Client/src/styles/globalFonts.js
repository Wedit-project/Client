import { createGlobalStyle } from "styled-components";

const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: "Pretendard";
        src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
            format("woff");
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: "Pretendard";
        src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff")
            format("woff");
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: "Pretendard";
        src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff")
            format("woff");
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: "Pretendard";
        src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff")
            format("woff");
        font-weight: 700;
        font-style: normal;
    }
`;

export default GlobalFonts;