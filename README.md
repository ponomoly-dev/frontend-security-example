# Frontend Security

이 프로젝트는 프론트엔드 개발자를 위한 보안 예제를 제공합니다. 다양한 보안 취약점과 그에 대한 방어 방법을 학습할 수 있습니다.

## 프로젝트 구조

- `public/`: HTML 파일들이 포함되어 있으며, 각 파일은 특정 보안 주제를 다룹니다.

  - `index.html`: 프로젝트의 메인 페이지입니다.
  - `xss01.html`, `xss02.html`, `xss03.html`: XSS(교차 사이트 스크립팅) 공격과 방어 방법을 설명합니다.
  - `sameorigin.html`, `attacker.html`: 동일 출처 정책(Same-origin policy)에 대한 예제를 제공합니다.

- `route/api.js`: API 라우터로, CORS 설정과 간단한 GET 및 POST 요청을 처리합니다.
- `server.js`: Express.js 서버 설정 파일로, 정적 파일을 제공하고 API 라우터를 사용합니다.
- `public/purify.js`: DOMPurify 라이브러리를 사용하여 XSS 공격을 방어합니다.

## 설치 및 실행

1. 프로젝트를 클론합니다.

   ```bash
   git clone git@github.com:ponomoly-dev/frontend-security-example.git
   ```

2. 필요한 패키지를 설치합니다.

   ```bash
   npm install
   ```

3. 서버를 실행합니다.

   ```bash
   node server.js
   ```

4. 브라우저에서 `http://localhost:3000`에 접속하여 예제를 확인합니다.

## 주의사항

- 이 프로젝트는 학습 목적으로 제공되며, 실제 서비스에 적용하기 전에 충분한 테스트가 필요합니다.
- 보안 설정은 프로젝트의 요구사항에 맞게 조정해야 합니다.
