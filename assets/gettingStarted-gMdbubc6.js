import{j as e}from"./jsx-runtime-p52kfkVR.js";import{useMDXComponents as d}from"./react-CmP93Pap.js";import{M as r}from"./blocks-C8q8vtZY.js";import"./iframe-DbL7boiR.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B7wpOJHf.js";import"./index-DRjwpjIM.js";function i(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"시작하기"}),`
`,e.jsx(n.h1,{id:"athometripdesign-system-시작하기",children:"@athometrip/design-system 시작하기"}),`
`,e.jsxs(n.p,{children:[`앳홈트립 디자인 시스템의 토큰과 React 컴포넌트를 담은 패키지입니다.
디자인의 기준은 `,e.jsx(n.a,{href:"https://chanwoo4939-netizen.github.io/athometrip-design-system/",rel:"nofollow",children:"디자이너 사이트"}),"이고, 이 Storybook은 그 스펙을 코드로 옮긴 결과입니다."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"대상: React 18/19 + Tailwind CSS 3.4 프로젝트 (athometrip-front, gaia-frontend)"}),`
`,e.jsxs(n.li,{children:["배포: GitHub Packages (private, ",e.jsx(n.code,{children:"athometrip"})," 조직)"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"1-설치",children:"1. 설치"}),`
`,e.jsx(n.h3,{id:"1-1-토큰-준비-개인-pc-최초-1회",children:"1-1. 토큰 준비 (개인 PC, 최초 1회)"}),`
`,e.jsx(n.p,{children:"GitHub Packages는 로그인이 필요합니다."}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/settings/tokens",rel:"nofollow",children:"github.com/settings/tokens"})," → ",e.jsx(n.strong,{children:"Tokens (classic)"})," → Generate new token"]}),`
`,e.jsxs(n.li,{children:["Scope는 ",e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"read:packages"}),"만"]})," 체크합니다. 조직이 SSO를 쓰면 ",e.jsx(n.strong,{children:"Configure SSO"}),"에서 ",e.jsx(n.code,{children:"athometrip"}),"을 Authorize합니다."]}),`
`,e.jsx(n.li,{children:"셸에 등록합니다. 토큰을 파일이나 채팅에 붙이지 마세요."}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`echo 'export GITHUB_PACKAGES_TOKEN=발급받은토큰' >> ~/.zshrc && source ~/.zshrc
`})}),`
`,e.jsxs(n.h3,{id:"1-2-프로젝트-루트에-npmrc",children:["1-2. 프로젝트 루트에 ",e.jsx(n.code,{children:".npmrc"})]}),`
`,e.jsxs(n.p,{children:["토큰 값이 아니라 ",e.jsx(n.strong,{children:"환경변수 이름"}),"만 적습니다. 이 파일은 커밋해도 됩니다."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ini",children:`@athometrip:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=\${GITHUB_PACKAGES_TOKEN}
`})}),`
`,e.jsx(n.h3,{id:"1-3-설치",children:"1-3. 설치"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm add @athometrip/design-system@0.2.1
`})}),`
`,e.jsx(n.h3,{id:"1-4-ci-github-actions",children:"1-4. CI (GitHub Actions)"}),`
`,e.jsxs(n.p,{children:["패키지 설정 → ",e.jsx(n.strong,{children:"Manage Actions access"}),"에 저장소를 ",e.jsx(n.strong,{children:"Read"}),"로 추가한 뒤, 설치 단계에만 토큰을 넘깁니다."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-yaml",children:`- name: Install dependencies
  run: pnpm install --frozen-lockfile
  env:
    GITHUB_PACKAGES_TOKEN: \${{ secrets.GITHUB_TOKEN }}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"2-연결-tailwind--토큰-css",children:"2. 연결 (Tailwind + 토큰 CSS)"}),`
`,e.jsxs(n.h3,{id:"2-1-tailwindconfigts",children:["2-1. ",e.jsx(n.code,{children:"tailwind.config.ts"})]}),`
`,e.jsxs(n.p,{children:["preset은 ",e.jsx(n.code,{children:"ds-"})," 접두사 클래스만 ",e.jsx(n.strong,{children:"추가"}),"합니다. 기존 ",e.jsx(n.code,{children:"gray-01"}),", ",e.jsx(n.code,{children:"coral-01"})," 같은 설정은 덮어쓰지 않으므로 기존 화면은 바뀌지 않습니다."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import type { Config } from 'tailwindcss';
import dsPreset from '@athometrip/design-system/tailwind-preset';

const config: Config = {
  presets: [dsPreset],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // 패키지 컴포넌트가 쓰는 클래스를 Tailwind가 생성하도록 꼭 추가
    './node_modules/@athometrip/design-system/dist/**/*.{js,cjs}',
  ],
  // ...기존 설정
};
export default config;
`})}),`
`,e.jsx(n.h3,{id:"2-2-토큰-css-색-변수",children:"2-2. 토큰 CSS (색 변수)"}),`
`,e.jsxs(n.p,{children:["색 클래스(",e.jsx(n.code,{children:"bg-ds-*"}),", ",e.jsx(n.code,{children:"text-ds-*"}),")는 CSS 변수 ",e.jsx(n.code,{children:"--ds-*"}),"를 참조합니다. ",e.jsx(n.strong,{children:"루트 레이아웃에서 JS로"})," import합니다."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// app/layout.tsx
import '@athometrip/design-system/tokens.css';
import 'styles/globals.css';
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"globals.css"})," 안에서 ",e.jsx(n.code,{children:"@import"}),"하면 Tailwind CLI가 패키지 경로를 찾지 못해 실패합니다."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"3-사용",children:"3. 사용"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`'use client';

import { Button } from '@athometrip/design-system';

export default function Example() {
  return (
    <Button variant="filled" size="large" fullWidth onClick={handleClick}>
      장바구니 담기
    </Button>
  );
}
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["컴포넌트 번들에는 ",e.jsx(n.code,{children:"'use client'"}),"가 들어 있어 App Router의 서버 컴포넌트에서도 import할 수 있습니다."]}),`
`,e.jsxs(n.li,{children:["각 컴포넌트의 props와 예시 코드는 왼쪽 메뉴의 ",e.jsx(n.strong,{children:"Docs"})," 페이지에서 ",e.jsx(n.strong,{children:"Show code"}),"로 볼 수 있습니다."]}),`
`]}),`
`,e.jsx(n.h3,{id:"링크-header-breadcrumb",children:"링크 (Header, Breadcrumb)"}),`
`,e.jsxs(n.p,{children:["패키지는 Next.js에 의존하지 않습니다. 기본은 ",e.jsx(n.code,{children:"<a>"}),"이고, Next ",e.jsx(n.code,{children:"Link"}),"는 ",e.jsx(n.code,{children:"renderLink"}),"로 넘깁니다."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Link from 'next/link';

<Breadcrumb
  items={items}
  renderLink={({ href, ...props }) => <Link href={href} {...props} />}
/>;
`})}),`
`,e.jsx(n.h3,{id:"toast",children:"Toast"}),`
`,e.jsxs(n.p,{children:["앱 루트를 ",e.jsx(n.code,{children:"ToastProvider"}),"로 한 번 감싸고, 어디서든 ",e.jsx(n.code,{children:"useToast"}),"로 띄웁니다. 새 토스트가 이전 것을 대체합니다."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// 루트
<ToastProvider>{children}</ToastProvider>;

// 사용처
const toast = useToast();
toast.show({ message: '장바구니에 담았어요', variant: 'success' });
`})}),`
`,e.jsx(n.h3,{id:"dialog-bottomsheet",children:"Dialog, BottomSheet"}),`
`,e.jsxs(n.p,{children:["내용은 사용처가 JSX로 넣습니다. 열림 상태는 ",e.jsx(n.code,{children:"open"})," + ",e.jsx(n.code,{children:"onOpenChange"}),"로 제어합니다."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<BottomSheet
  open={open}
  onOpenChange={setOpen}
  title="옵션 선택"
  footer={<Button size="large" fullWidth onClick={confirm}>선택 완료</Button>}
>
  {/* 본문. 길면 이 영역만 스크롤됩니다 */}
</BottomSheet>
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"ESC와 닫기 버튼으로 닫힙니다. 오버레이 클릭은 BottomSheet만 닫힙니다(Dialog는 닫히지 않음)."}),`
`,e.jsxs(n.li,{children:["배경 스크롤 잠금은 ",e.jsx(n.code,{children:"overflow: hidden"}),"을 쓰지 않습니다(sticky 헤더 유지). 시트 밖에서 스크롤이 필요한 영역에는 ",e.jsx(n.code,{children:"data-scroll-allow"}),"를 붙입니다."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"4-클래스-규칙",children:"4. 클래스 규칙"}),`
`,e.jsxs(n.p,{children:[`| 종류 | 형식 | 예 |
| --- | --- | --- |
| 색 | `,e.jsx(n.code,{children:"bg-ds-*"}),", ",e.jsx(n.code,{children:"text-ds-*"}),", ",e.jsx(n.code,{children:"border-ds-*"})," | ",e.jsx(n.code,{children:"bg-ds-bg-primary"}),", ",e.jsx(n.code,{children:"text-ds-text-secondary"}),` |
| 글자 (크기·굵기·행간 묶음) | `,e.jsx(n.code,{children:"ds-text-<역할>"})," | ",e.jsx(n.code,{children:"ds-text-title-2"}),", ",e.jsx(n.code,{children:"ds-text-body-3"}),` |
| 모서리 | `,e.jsx(n.code,{children:"rounded-ds-*"})," | ",e.jsx(n.code,{children:"rounded-ds-xs"}),` (4px) |
| 그림자 | `,e.jsx(n.code,{children:"shadow-ds-*"})," | ",e.jsx(n.code,{children:"shadow-ds-card"}),` |
| 간격 | Tailwind 기본 | `,e.jsx(n.code,{children:"p-4"}),", ",e.jsx(n.code,{children:"gap-2"})," |"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["글자 클래스가 ",e.jsx(n.code,{children:"text-ds-*"}),"가 아니라 ",e.jsx(n.code,{children:"ds-text-*"}),"인 이유: 컴포넌트가 쓰는 tailwind-merge가 ",e.jsx(n.code,{children:"text-ds-*"}),"를 글자 ",e.jsx(n.strong,{children:"색"}),"으로 보고 지워 버리기 때문입니다."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"className"}),"으로 덮어쓸 수 없는 것:"]})," 컴포넌트가 넣은 ",e.jsx(n.code,{children:"ds-text-*"}),", ",e.jsx(n.code,{children:"rounded-ds-*"}),", ",e.jsx(n.code,{children:"shadow-ds-*"}),"는 사용처 ",e.jsx(n.code,{children:"className"}),"으로 바뀌지 않습니다(두 클래스가 함께 남음). 이런 값은 ",e.jsx(n.code,{children:"size"}),"·",e.jsx(n.code,{children:"variant"})," 같은 prop으로 바꾸고, 필요한 변형이 없으면 디자인 시스템에 추가를 요청하세요."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"5-버전과-기여",children:"5. 버전과 기여"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["최신 버전: ",e.jsx(n.strong,{children:"0.2.1"})," (0.2.0은 오버레이 수정이 빠져 있으니 쓰지 마세요)"]}),`
`,e.jsxs(n.li,{children:["소스: ",e.jsx(n.a,{href:"https://github.com/athometrip/athometrip-design-system",rel:"nofollow",children:"athometrip/athometrip-design-system"})," (private)"]}),`
`,e.jsxs(n.li,{children:["이 Storybook은 ",e.jsx(n.code,{children:"main"}),"에 머지될 때마다 자동으로 갱신됩니다. 공개 주소이므로 출시 전 기능을 스토리로 만들지 마세요."]}),`
`,e.jsxs(n.li,{children:["코드에 ",e.jsx(n.code,{children:"// 임시: Qn"})," 표시가 있는 값은 디자이너 확인 전 임시값입니다."]}),`
`]})]})}function j(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{j as default};
