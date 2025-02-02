import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    mkcert(),
  ],
  server: {
    https: true, // https 활성화
    port: 5173,  // 원하는 포트
    webSocket: {
      protocol: 'wss', // WebSocket 연결 프로토콜을 'wss'로 설정
    },
  },
});
