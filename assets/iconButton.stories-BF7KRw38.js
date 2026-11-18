import{j as e}from"./jsx-runtime-p52kfkVR.js";import{r as I}from"./iframe-DbL7boiR.js";import{t as j}from"./tw-BbKhTrVW.js";import{A as a}from"./arrowRightIcon-CRCIpHdA.js";import"./preload-helper-Dp1pzeXC.js";const h=j.button`
  inline-flex h-8 w-8 shrink-0 items-center justify-center
  rounded-ds-full bg-ds-warm-100 text-ds-text-tertiary
  [&>svg]:h-5 [&>svg]:w-5
  disabled:cursor-not-allowed disabled:opacity-40
`,o=I.forwardRef(function({icon:b,type:f="button",...g},y){return e.jsx(h,{ref:y,type:f,...g,children:b})});o.displayName="IconButton";o.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{icon:{required:!0,tsType:{name:"ReactNode"},description:""},"aria-label":{required:!0,tsType:{name:"string"},description:"아이콘만 있는 버튼이라 스크린리더용 이름이 필수다"},type:{defaultValue:{value:"'button'",computed:!1},required:!1}},composes:["Omit"]};const T={title:"Action/IconButton",component:o,args:{icon:e.jsx(a,{}),"aria-label":"다음"}},r={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(o,{icon:e.jsx(a,{className:"rotate-180"}),"aria-label":"이전"}),e.jsx(o,{icon:e.jsx(a,{}),"aria-label":"다음"})]})},t={args:{disabled:!0}};var s,n,i,c,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <IconButton icon={<ArrowRightIcon className="rotate-180" />} aria-label="이전" />
      <IconButton icon={<ArrowRightIcon />} aria-label="다음" />
    </div>
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source},description:{story:"사이트 스펙: 이전·다음 사이 gap 8px, 이전은 아이콘 180도 회전",...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.description}}};var l,p,m,u,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source},description:{story:"임시: disabled 스타일은 스펙에 없음 (디자이너 확인 필요)",...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.description}}};const _=["CarouselPair","DisabledTemporary"];export{r as CarouselPair,t as DisabledTemporary,_ as __namedExportsOrder,T as default};
