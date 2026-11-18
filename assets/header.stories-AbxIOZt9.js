import{j as e}from"./jsx-runtime-p52kfkVR.js";import{r as c}from"./iframe-DbL7boiR.js";import{t as s}from"./tw-BbKhTrVW.js";import{d as R}from"./renderLink-DWwIwxaF.js";import"./preload-helper-Dp1pzeXC.js";const q={medium:"h-14 px-4",large:"mx-auto h-24 w-full max-w-[1200px]"},S={medium:"gap-3",large:"gap-6"},N={medium:"gap-3",large:"gap-6"},$={medium:"gap-3",large:"gap-[13px]"},A={medium:"gap-3",large:"gap-10"},V={medium:"h-4 w-0.5 bg-[#E2DCD0]",large:"h-5 w-px bg-ds-warm-300"},G={medium:"text-[14px] leading-[21px]",large:"text-[18px] leading-[32px]"},z={medium:"[&>svg]:h-6 [&>svg]:w-6",large:"[&>svg]:h-8 [&>svg]:w-8"},W=s.header`bg-ds-bg-primary`,F=s.div`
  flex items-center justify-between
  ${({$size:r})=>q[r]}
`,m=s.div`flex items-center`,Z=s.span`
  shrink-0
  ${({$size:r})=>V[r]}
`,Q=s.span`
  font-normal text-ds-text-primary
  ${({$size:r})=>G[r]}
`,U=s.nav`flex items-center gap-10`,j=c.createContext({size:"medium",renderLink:R}),l=c.forwardRef(function({size:a="medium",left:o,logo:t,title:i,nav:d,navLabel:D="주요 메뉴",right:g,renderLink:I=R,...T},M){const E=c.useMemo(()=>({size:a,renderLink:I}),[a,I]),_=!!(t||i),O=!!(d||g);return e.jsx(W,{ref:M,...T,children:e.jsx(j.Provider,{value:E,children:e.jsxs(F,{$size:a,children:[e.jsxs(m,{className:S[a],children:[o&&e.jsx(m,{className:N[a],children:o}),_&&e.jsxs(m,{className:$[a],children:[t,t&&i&&e.jsx(Z,{"aria-hidden":"true","data-header-divider":"",$size:a}),i&&e.jsx(Q,{$size:a,children:i})]})]}),O&&e.jsxs(m,{className:A[a],children:[d&&e.jsx(U,{"aria-label":D,children:d}),g&&e.jsx(m,{className:N[a],children:g})]})]})})})});l.displayName="Header";const X=s.button`
  inline-flex h-8 w-8 shrink-0 items-center justify-center text-ds-text-primary
  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-text-primary
  ${({$size:r})=>z[r]}
`,n=c.forwardRef(function({icon:a,type:o="button",...t},i){const{size:d}=c.useContext(j);return e.jsx(X,{ref:i,type:o,$size:d,...t,children:a})});n.displayName="HeaderIconButton";const H={active:"text-[16px] leading-[32px] font-medium text-ds-text-primary",inactive:"text-[16px] leading-[32px] font-normal text-ds-gray-300"};function p({href:r,active:a=!1,children:o}){const{renderLink:t}=c.useContext(j);return t({href:r,className:a?H.active:H.inactive,children:o,"aria-current":a?"page":void 0})}l.__docgenInfo={description:`화면 상단 틀 (D19). slot만 배치하고 도메인 로직(장바구니 수, 지역 목록, 로고 자산)은 사용처가 넣는다.
위치 고정(sticky/fixed)은 하지 않는다 — 필요하면 className으로`,methods:[],displayName:"Header",props:{size:{required:!1,tsType:{name:"union",raw:"'medium' | 'large'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"기본 'medium'(MO, H 56). 'large'(PC, H 96, 내용 폭 1200)",defaultValue:{value:"'medium'",computed:!1}},left:{required:!1,tsType:{name:"ReactNode"},description:"좌측 버튼들 (햄버거·뒤로가기·닫기 등) — 사이트 P leftIcon. HeaderIconButton 권장"},logo:{required:!1,tsType:{name:"ReactNode"},description:"로고. 브랜드 자산이라 사용처가 넣는다 (링크 포함) — 사이트 P showLogo"},title:{required:!1,tsType:{name:"ReactNode"},description:"로고 뒤 페이지 타이틀. logo와 함께 있으면 사이에 구분선 — 사이트 P title"},nav:{required:!1,tsType:{name:"ReactNode"},description:"메뉴 항목 (PC 지역 nav 등). `<nav aria-label={navLabel}>` 안에 그린다. HeaderNavItem 권장"},navLabel:{required:!1,tsType:{name:"string"},description:"nav의 aria-label. 기본 '주요 메뉴'",defaultValue:{value:"'주요 메뉴'",computed:!1}},right:{required:!1,tsType:{name:"ReactNode"},description:"우측 버튼들 (장바구니·마이페이지 등) — 사이트 P rightIcons. 기본값 없음 (D19)"},renderLink:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: RenderLinkProps) => ReactNode",signature:{arguments:[{type:{name:"RenderLinkProps"},name:"props"}],return:{name:"ReactNode"}}},description:"HeaderNavItem 링크 주입 (D18). 기본은 `<a>`. Next.js 예:\n`renderLink={({ href, ...props }) => <Link href={href} {...props} />}`",defaultValue:{value:`({ href, className, children, 'aria-current': ariaCurrent }) => (
  <a href={href} className={className} aria-current={ariaCurrent}>
    {children}
  </a>
)`,computed:!1}}},composes:["Omit"]};n.__docgenInfo={description:"Header 안의 아이콘 버튼 (햄버거·장바구니 등). 아이콘 자체는 사용처가 넣는다",methods:[],displayName:"HeaderIconButton",props:{icon:{required:!0,tsType:{name:"ReactNode"},description:"아이콘 (svg). 크기는 Header size가 정한다: medium 24 / large 32, 누르는 영역은 32"},"aria-label":{required:!0,tsType:{name:"string"},description:"아이콘만 있는 버튼이라 스크린리더용 이름이 필수다"},type:{defaultValue:{value:"'button'",computed:!1},required:!1}},composes:["Omit"]};const te={title:"Navigation/Header",component:l,args:{size:"medium"},parameters:{docs:{description:{component:'화면 상단 틀 (D19). slot(`left`·`logo`·`title`·`nav`·`right`)만 배치하고\n도메인 로직(장바구니 수, 지역 목록, 로고 자산)은 사용처가 넣는다. 위치 고정(sticky/fixed)은 하지 않는다.\n\n- `size`: `medium`(MO, H 56) / `large`(PC, H 96, 내용 폭 1200) — 명시 prop (D2)\n- 부품: `HeaderIconButton`(누르는 영역 32, 아이콘 MO 24 / PC 32, `aria-label` 필수),\n  `HeaderNavItem`(`href`, `active` → `aria-current="page"`)\n- 구분선은 `logo`와 `title`이 둘 다 있을 때만 그린다\n\n**링크 주입 (D18)** — `HeaderNavItem`은 Header의 `renderLink`로 그린다 (Breadcrumb과 같은 시그니처):\n\n```tsx\nimport Link from \'next/link\';\n\n<Header\n  size="large"\n  renderLink={({ href, ...props }) => <Link href={href} {...props} />}\n  nav={<HeaderNavItem href="/newyork" active>뉴욕</HeaderNavItem>}\n/>\n```\n\n디자이너 확인 필요 (Q15): MO 1뎁스 홈 아이콘 위치(좌측 구성 vs Props `rightIcons`의 home),\n구분선 MO 2px `#E2DCD0` vs PC 1px `#E2DDD1`, PC 폭 1200 vs 데모 CSS 1288 + px 44.\n타이틀·nav 글자는 역할이 없다 (Q1).'}}}},h=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,"aria-hidden":"true",children:e.jsx("path",{d:"M3 6h18M3 12h18M3 18h18"})}),J=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,"aria-hidden":"true",children:e.jsx("path",{d:"M4 10.5 12 4l8 6.5V20H4z"})}),f=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,"aria-hidden":"true",children:e.jsx("path",{d:"M3 4h2l2.5 11h11L21 7H6.5M9 20h.01M18 20h.01"})}),K=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,"aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"8",r:"4"}),e.jsx("path",{d:"M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"})]}),v=({className:r})=>e.jsx("a",{href:"#","aria-label":"athometrip 홈",className:`${r} flex items-center bg-ds-gray-900 text-white`,children:e.jsx("span",{className:"mx-auto text-[10px] font-bold leading-none",children:"LOGO"})}),u={args:{left:e.jsx(n,{"aria-label":"메뉴",icon:e.jsx(h,{})}),logo:e.jsx(v,{className:"h-[15px] w-[90px]"}),title:"픽패스",right:e.jsx(n,{"aria-label":"장바구니",icon:e.jsx(f,{})})}},x={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx("div",{className:"w-[375px] max-w-full",children:e.jsx(l,{left:e.jsxs(e.Fragment,{children:[e.jsx(n,{"aria-label":"메뉴",icon:e.jsx(h,{})}),e.jsx(n,{"aria-label":"홈",icon:e.jsx(J,{})})]}),title:"픽패스",right:e.jsx(n,{"aria-label":"장바구니",icon:e.jsx(f,{})})})}),e.jsx("div",{className:"w-[375px] max-w-full",children:e.jsx(l,{left:e.jsx(n,{"aria-label":"메뉴",icon:e.jsx(h,{})}),logo:e.jsx(v,{className:"h-[15px] w-[90px]"}),title:"픽패스",right:e.jsx(n,{"aria-label":"장바구니",icon:e.jsx(f,{})})})}),e.jsx(l,{size:"large",left:e.jsx(n,{"aria-label":"메뉴",icon:e.jsx(h,{})}),logo:e.jsx(v,{className:"h-[19px] w-[111px]"}),title:"픽패스",navLabel:"지역",nav:e.jsxs(e.Fragment,{children:[e.jsx(p,{href:"#",active:!0,children:"뉴욕"}),e.jsx(p,{href:"#",children:"미서부"}),e.jsx(p,{href:"#",children:"칸쿤"}),e.jsx(p,{href:"#",children:"하와이"})]}),right:e.jsxs(e.Fragment,{children:[e.jsx(n,{"aria-label":"장바구니",icon:e.jsx(f,{})}),e.jsx(n,{"aria-label":"마이페이지",icon:e.jsx(K,{})})]})})]})};var b,w,y;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    left: <HeaderIconButton aria-label="메뉴" icon={<HamburgerIcon />} />,
    logo: <Logo className="h-[15px] w-[90px]" />,
    title: '픽패스',
    right: <HeaderIconButton aria-label="장바구니" icon={<CartIcon />} />
  }
}`,...(y=(w=u.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var C,B,k,L,P;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div className="w-[375px] max-w-full">
        <Header left={<>
              <HeaderIconButton aria-label="메뉴" icon={<HamburgerIcon />} />
              <HeaderIconButton aria-label="홈" icon={<HomeIcon />} />
            </>} title="픽패스" right={<HeaderIconButton aria-label="장바구니" icon={<CartIcon />} />} />
      </div>
      <div className="w-[375px] max-w-full">
        <Header left={<HeaderIconButton aria-label="메뉴" icon={<HamburgerIcon />} />} logo={<Logo className="h-[15px] w-[90px]" />} title="픽패스" right={<HeaderIconButton aria-label="장바구니" icon={<CartIcon />} />} />
      </div>
      <Header size="large" left={<HeaderIconButton aria-label="메뉴" icon={<HamburgerIcon />} />} logo={<Logo className="h-[19px] w-[111px]" />} title="픽패스" navLabel="지역" nav={<>
            <HeaderNavItem href="#" active>
              뉴욕
            </HeaderNavItem>
            <HeaderNavItem href="#">미서부</HeaderNavItem>
            <HeaderNavItem href="#">칸쿤</HeaderNavItem>
            <HeaderNavItem href="#">하와이</HeaderNavItem>
          </>} right={<>
            <HeaderIconButton aria-label="장바구니" icon={<CartIcon />} />
            <HeaderIconButton aria-label="마이페이지" icon={<UserIcon />} />
          </>} />
    </div>
}`,...(k=(B=x.parameters)==null?void 0:B.docs)==null?void 0:k.source},description:{story:"사이트 Header 데모(MO 1뎁스 / MO 로고 / PC)와 같은 구성. 로고·아이콘은 자리표시",...(P=(L=x.parameters)==null?void 0:L.docs)==null?void 0:P.description}}};const se=["Playground","SiteDemo"];export{u as Playground,x as SiteDemo,se as __namedExportsOrder,te as default};
