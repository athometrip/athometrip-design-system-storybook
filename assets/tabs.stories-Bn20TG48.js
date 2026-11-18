import{j as e}from"./jsx-runtime-p52kfkVR.js";import{r as j}from"./iframe-DbL7boiR.js";import{t as k}from"./tw-BbKhTrVW.js";import{u as E}from"./useTabList-C40ae2vC.js";import"./preload-helper-Dp1pzeXC.js";const P={fill:"pt-3 border-b border-ds-border-default",hug:"pt-2 gap-4"},q={fill:"flex-1 -mb-px",hug:""},p={active:"font-semibold text-ds-text-primary border-ds-text-primary",inactive:"font-normal text-ds-text-tertiary border-transparent"},_=k.div`
  flex bg-ds-bg-primary
  ${({$layout:a})=>P[a]}
`,D=k.button`
  flex h-8 items-center justify-center whitespace-nowrap border-b-2 ds-text-tab
  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-text-primary
  disabled:cursor-not-allowed
  ${({$layout:a})=>q[a]}
  ${({$active:a})=>a?p.active:p.inactive}
`,t=j.forwardRef(function({items:r,value:d,defaultValue:o,onValueChange:l,layout:c="fill",...C},V){const{selectedValue:L,getTabProps:N}=E({items:r,value:d,defaultValue:o,onValueChange:l});return e.jsx(_,{ref:V,role:"tablist",$layout:c,...C,children:r.map(n=>e.jsx(D,{...N(n),"aria-controls":n.panelId,$layout:c,$active:n.value===L,children:n.label},n.value))})});t.displayName="Tabs";t.__docgenInfo={description:`사이트 LocationTab + ContentTab. WAI-ARIA tabs 패턴(roving tabindex, 화살표·Home·End).
앵커/nav 모드(링크 + aria-current)는 구현하지 않았다 (D16)`,methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"TabsItem"}],raw:"TabsItem[]"},description:"탭 목록"},value:{required:!1,tsType:{name:"string"},description:"제어 모드 선택 값. 주면 defaultValue는 무시된다 (사이트 P activeIndex → value, D16)"},defaultValue:{required:!1,tsType:{name:"string"},description:"비제어 모드 시작 값. 없으면 첫 활성 탭 (사이트 activeIndex 기본 0)"},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"다른 탭이 선택될 때 그 value로 불린다. 이미 선택된 탭을 누르면 불리지 않는다"},layout:{required:!1,tsType:{name:"union",raw:"'fill' | 'hug'",elements:[{name:"literal",value:"'fill'"},{name:"literal",value:"'hug'"}]},description:"기본 'fill'(LocationTab, 균등 분할). 'hug'(ContentTab, 글자 폭)",defaultValue:{value:"'fill'",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"탭 목록 이름 — aria-label 또는 aria-labelledby 중 하나는 필수"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const H={title:"Navigation/Tabs",component:t,args:{"aria-label":"지역",items:[{value:"newyork",label:"뉴욕"},{value:"cancun",label:"칸쿤"}],layout:"fill"},parameters:{docs:{description:{component:'사이트 LocationTab(`layout="fill"`, 균등 분할) + ContentTab(`layout="hug"`, 글자 폭)을 하나로 둔다.\n\n- WAI-ARIA tabs 패턴: `role="tablist"`/`"tab"`, `aria-selected`, roving tabindex,\n  ArrowLeft/Right(양끝에서 돎)·Home·End로 이동과 동시에 선택 (D16)\n- 패널은 사용처가 그린다. 연결이 필요하면 항목의 `panelId` → `aria-controls`\n- **앵커/nav 모드(링크 + `aria-current`)는 구현하지 않았다 (D16).** ContentTab을 스크롤 앵커로 쓸 때는\n  `onValueChange`에서 사용처가 스크롤한다\n- `sticky top:56px`(Specs)은 화면 레이아웃 의존이라 넣지 않았다 — 사용처 `className`으로\n- 비활성 글자색은 Specs `#757575`(데모 CSS는 `#9E9E9E`), fill 하단 1px 선은 데모 CSS에만 있다 (Q30)\n- 비활성 탭 스타일은 없다 (Q4) — `disabled`는 네이티브 속성 + 키보드 이동 제외만'}}}},u={},s={render:()=>e.jsxs("div",{className:"flex w-[375px] max-w-full flex-col gap-8",children:[e.jsx(t,{"aria-label":"지역",items:[{value:"newyork",label:"뉴욕"},{value:"cancun",label:"칸쿤"}]}),e.jsx(t,{"aria-label":"상품 정보",layout:"hug",items:[{value:"intro",label:"상품소개"},{value:"review",label:"리뷰"},{value:"guide",label:"이용안내"},{value:"refund",label:"환불규정"}]})]})},i={render:function(){const[r,d]=j.useState("newyork"),o=[{value:"newyork",label:"뉴욕",panelId:"panel-newyork"},{value:"cancun",label:"칸쿤",panelId:"panel-cancun"}];return e.jsxs("div",{className:"w-[375px] max-w-full",children:[e.jsx(t,{"aria-label":"지역",items:o,value:r,onValueChange:d}),o.map(l=>e.jsxs("div",{id:l.panelId,role:"tabpanel","aria-label":String(l.label),hidden:l.value!==r,className:"ds-text-body-3 p-4 text-ds-text-secondary",children:[l.label," 상품 목록"]},l.value))]})}};var b,m,v;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(v=(m=u.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var f,y,x,g,T;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex w-[375px] max-w-full flex-col gap-8">
      <Tabs aria-label="지역" items={[{
      value: 'newyork',
      label: '뉴욕'
    }, {
      value: 'cancun',
      label: '칸쿤'
    }]} />
      <Tabs aria-label="상품 정보" layout="hug" items={[{
      value: 'intro',
      label: '상품소개'
    }, {
      value: 'review',
      label: '리뷰'
    }, {
      value: 'guide',
      label: '이용안내'
    }, {
      value: 'refund',
      label: '환불규정'
    }]} />
    </div>
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source},description:{story:"사이트 LocationTab / ContentTab 데모와 같은 구성 — 나란히 놓고 대조한다",...(T=(g=s.parameters)==null?void 0:g.docs)==null?void 0:T.description}}};var w,h,I,S,A;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: function WithPanelsStory() {
    const [value, setValue] = useState('newyork');
    const items = [{
      value: 'newyork',
      label: '뉴욕',
      panelId: 'panel-newyork'
    }, {
      value: 'cancun',
      label: '칸쿤',
      panelId: 'panel-cancun'
    }];
    return <div className="w-[375px] max-w-full">
        <Tabs aria-label="지역" items={items} value={value} onValueChange={setValue} />
        {items.map(item => <div key={item.value} id={item.panelId} role="tabpanel" aria-label={String(item.label)} hidden={item.value !== value} className="ds-text-body-3 p-4 text-ds-text-secondary">
            {item.label} 상품 목록
          </div>)}
      </div>;
  }
}`,...(I=(h=i.parameters)==null?void 0:h.docs)==null?void 0:I.source},description:{story:"제어 모드 + 패널 연결 (`panelId` → `aria-controls`, 패널은 `aria-labelledby` 대신 `aria-label`)",...(A=(S=i.parameters)==null?void 0:S.docs)==null?void 0:A.description}}};const Q=["Playground","SiteDemo","WithPanels"];export{u as Playground,s as SiteDemo,i as WithPanels,Q as __namedExportsOrder,H as default};
