import{j as e}from"./jsx-runtime-p52kfkVR.js";import{r as h}from"./iframe-DbL7boiR.js";import{t as y}from"./tw-BbKhTrVW.js";import"./preload-helper-Dp1pzeXC.js";const g={full:"h-px bg-ds-gray-100",inset:"mx-4 h-px bg-ds-gray-100",thick:"h-2 bg-ds-bg-secondary"},D=y.hr`
  m-0 border-0 shrink-0
  ${({$variant:s})=>g[s]}
`,r=h.forwardRef(function({variant:u="full",decorative:v=!1,...x},f){return e.jsx(D,{ref:f,$variant:u,"aria-hidden":v?!0:void 0,...x})});r.displayName="Divider";r.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{variant:{required:!1,tsType:{name:"union",raw:"'full' | 'inset' | 'thick'",elements:[{name:"literal",value:"'full'"},{name:"literal",value:"'inset'"},{name:"literal",value:"'thick'"}]},description:"",defaultValue:{value:"'full'",computed:!1}},decorative:{required:!1,tsType:{name:"boolean"},description:"내용 구분이 아니라 장식(예: thick 띠)일 때 스크린리더에서 숨긴다",defaultValue:{value:"false",computed:!1}}},composes:["HTMLAttributes"]};const T={title:"Layout/Divider",component:r,args:{variant:"full",decorative:!1},argTypes:{variant:{control:"select",options:["full","inset","thick"]}},parameters:{backgrounds:{value:"white"}}},a={},t={render:()=>e.jsxs("div",{className:"flex max-w-[375px] flex-col gap-3 ds-text-body-3 text-ds-text-secondary",children:[e.jsx("p",{children:"Full: 섹션 구분 (PC 본문)"}),e.jsx(r,{}),e.jsx("p",{children:"Inset: 좌우 16px 여백 (MO)"}),e.jsx(r,{variant:"inset"}),e.jsx("p",{children:"Thick: 섹션 간 구분 (MO)"}),e.jsx(r,{variant:"thick",decorative:!0})]})};var i,o,n;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(n=(o=a.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var d,l,c,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex max-w-[375px] flex-col gap-3 ds-text-body-3 text-ds-text-secondary">
      <p>Full: 섹션 구분 (PC 본문)</p>
      <Divider />
      <p>Inset: 좌우 16px 여백 (MO)</p>
      <Divider variant="inset" />
      <p>Thick: 섹션 간 구분 (MO)</p>
      <Divider variant="thick" decorative />
    </div>
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source},description:{story:"사이트 Divider 데모와 같은 구성 — 나란히 놓고 대조한다",...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.description}}};const w=["Playground","SiteDemo"];export{a as Playground,t as SiteDemo,w as __namedExportsOrder,T as default};
