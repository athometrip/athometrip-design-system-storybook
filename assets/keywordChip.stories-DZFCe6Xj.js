import{j as s}from"./jsx-runtime-p52kfkVR.js";import{r as x}from"./iframe-DbL7boiR.js";import{t as h}from"./tw-BbKhTrVW.js";import"./preload-helper-Dp1pzeXC.js";const w=h.button`
  inline-flex h-7 shrink-0 items-center px-2 py-1
  bg-ds-bg-secondary text-ds-warm-600 ds-text-body-3 font-[inherit]
  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-text-primary
`,t=x.forwardRef(function({type:u="button",...f},y){return s.jsx(w,{ref:y,type:u,...f})});t.displayName="KeywordChip";t.__docgenInfo={description:`검색창 아래 추천 키워드 칩. '#'은 붙이지 않는다 — 사용처가 children에 넣는다 (D13).
"자주 찾는 키워드" 라벨과 칩 나열(gap 12)은 사용처 레이아웃`,methods:[],displayName:"KeywordChip",props:{type:{defaultValue:{value:"'button'",computed:!1},required:!1}}};const S={title:"Input/KeywordChip",component:t,args:{children:"#픽패스"},parameters:{docs:{description:{component:'검색창 아래 추천 키워드 칩. `#`은 컴포넌트가 붙이지 않는다 — children에 넣는다 (D13).\n"자주 찾는 키워드" 라벨과 나열(gap 12)은 사용처 레이아웃이다.\nhover/pressed 상태는 스펙에 없다 (Q28).'}}}},r={},b=["#픽패스","#환불","#예약 변경","#바우처"],e={render:()=>s.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[s.jsx("b",{className:"ds-text-label-2 text-ds-warm-900",children:"자주 찾는 키워드"}),b.map(o=>s.jsx(t,{children:o},o))]})};var a,i,d;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var n,p,c,l,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-3">
      <b className="ds-text-label-2 text-ds-warm-900">자주 찾는 키워드</b>
      {KEYWORDS.map(keyword => <KeywordChip key={keyword}>{keyword}</KeywordChip>)}
    </div>
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source},description:{story:"사이트 KeywordChip 데모와 같은 구성. 라벨 14/500/20 warm-900은 사용처 참고값",...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.description}}};const j=["Playground","SiteDemo"];export{r as Playground,e as SiteDemo,j as __namedExportsOrder,S as default};
