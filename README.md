# 개발 세팅

1. npx create-react-app react-disney
2. npm start
3. npm install --save typescript @types/node @types/react @types/react-dom @types/jest
4. 확장자 변경
5. "npx tsc --init" 명령어로 tsconfig.json 파일 생성한 후, tsconfig.json 파일에 "jsx": "react-jsx"추가
6. npm install --save styled-components
   - 이슈: 의존성 충돌
   - 해결: 타입스크립트 버전 낮춤
7. npm i react-router-dom@5.3.4
8. npm i --save-dev @types/react-router-dom
