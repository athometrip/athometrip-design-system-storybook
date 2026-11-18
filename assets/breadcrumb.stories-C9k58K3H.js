import{j as e}from"./jsx-runtime-p52kfkVR.js";import{r as T}from"./iframe-DbL7boiR.js";import{t as C}from"./tw-BbKhTrVW.js";import{d as w}from"./renderLink-DWwIwxaF.js";import{A as E}from"./arrowRightIcon-CRCIpHdA.js";import"./preload-helper-Dp1pzeXC.js";const _=C.ol`flex items-center gap-1 py-2`,D=C.li`flex items-center gap-1`,f={parent:"ds-text-caption-2 text-ds-gray-400",current:"ds-text-caption-2 text-ds-text-secondary"},q={className:"h-3 w-3 shrink-0 text-ds-gray-400",strokeWidth:3},n=T.forwardRef(function({items:s,renderLink:o=w,"aria-label":c="경로",...I},P){const S=s.length-1;return e.jsx("nav",{ref:P,"aria-label":c,...I,children:e.jsx(_,{children:s.map((t,l)=>{const m=l===S,p=m?f.current:f.parent,u=m?"page":void 0;return e.jsxs(D,{children:[l>0&&e.jsx(E,{...q}),t.href?o({href:t.href,className:p,children:t.label,"aria-current":u}):e.jsx("span",{className:p,"aria-current":u,children:t.label})]},l)})})})});n.displayName="Breadcrumb";n.__docgenInfo={description:'현재 위치까지의 경로. `<nav aria-label="경로"><ol>`, 구분 chevron은 aria-hidden',methods:[],displayName:"Breadcrumb",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:'경로 항목. 마지막 항목이 현재 위치(aria-current="page")'},renderLink:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: RenderLinkProps) => ReactNode",signature:{arguments:[{type:{name:"RenderLinkProps"},name:"props"}],return:{name:"ReactNode"}}},description:"링크 주입 (D18). 기본은 `<a>`. Next.js 예:\n`renderLink={({ href, ...props }) => <Link href={href} {...props} />}`",defaultValue:{value:`({ href, className, children, 'aria-current': ariaCurrent }) => (
  <a href={href} className={className} aria-current={ariaCurrent}>
    {children}
  </a>
)`,computed:!1}},"aria-label":{defaultValue:{value:"'경로'",computed:!1},required:!1}},composes:["HTMLAttributes"]};const W={title:"Navigation/Breadcrumb",component:n,args:{items:[{label:"홈",href:"#"},{label:"마이페이지",href:"#"},{label:"내 여행"}]},parameters:{docs:{description:{component:"현재 위치까지의 경로. `<nav aria-label=\"경로\"><ol>`, 마지막 항목 `aria-current=\"page\"`, 구분 chevron은 `aria-hidden`.\n\n**링크 주입 (D18)** — 기본은 `<a>`. Next.js에서는 `renderLink`로 `Link`를 넣는다 (Header와 같은 시그니처):\n\n```tsx\nimport Link from 'next/link';\n\n<Breadcrumb\n  items={[{ label: '홈', href: '/' }, { label: '마이페이지', href: '/mypage' }, { label: '내 여행' }]}\n  renderLink={({ href, ...props }) => <Link href={href} {...props} />}\n/>\n```\n\n`renderLink`는 `{ href, className, children, 'aria-current'? }`를 받는다. `className`을 꼭 넘겨야 글자 스타일이 유지된다.\n\n- 상위 항목 hover/focus, 긴 경로 말줄임은 스펙에 없다 (Q32)"}}}},i={},r={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(n,{items:[{label:"홈",href:"#"},{label:"고객센터",href:"#"},{label:"FAQ"}]}),e.jsx(n,{items:[{label:"홈",href:"#"},{label:"마이페이지",href:"#"},{label:"내 여행"}]})]})},a={args:{renderLink:({href:d,className:s,children:o,"aria-current":c})=>e.jsx("a",{href:d,className:s,"aria-current":c,"data-router-link":"",children:o})}};var h,b,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var g,k,L,N,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Breadcrumb items={[{
      label: '홈',
      href: '#'
    }, {
      label: '고객센터',
      href: '#'
    }, {
      label: 'FAQ'
    }]} />
      <Breadcrumb items={[{
      label: '홈',
      href: '#'
    }, {
      label: '마이페이지',
      href: '#'
    }, {
      label: '내 여행'
    }]} />
    </div>
}`,...(L=(k=r.parameters)==null?void 0:k.docs)==null?void 0:L.source},description:{story:"사이트 Breadcrumb 데모와 같은 구성",...(y=(N=r.parameters)==null?void 0:N.docs)==null?void 0:y.description}}};var j,v,R,B,A;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    renderLink: ({
      href,
      className,
      children,
      'aria-current': ariaCurrent
    }) => <a href={href} className={className} aria-current={ariaCurrent} data-router-link="">
        {children}
      </a>
  }
}`,...(R=(v=a.parameters)==null?void 0:v.docs)==null?void 0:R.source},description:{story:"renderLink 예시 — 라우터 링크 대신 data 속성을 붙인 `<a>` (Next.js Link 예는 위 설명 참고)",...(A=(B=a.parameters)==null?void 0:B.docs)==null?void 0:A.description}}};const X=["Playground","SiteDemo","CustomRenderLink"];export{a as CustomRenderLink,i as Playground,r as SiteDemo,X as __namedExportsOrder,W as default};
