// 로컬 단일 파일 빌드 — Node/서버 없이 더블클릭으로 실행하는 테스트용
// 사용: npm run build:local → dist-local/index.html 하나만 생성됨

import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  base: './',
  plugins: [viteSingleFile()],
  build: {
    outDir: 'dist-local',
  },
});
