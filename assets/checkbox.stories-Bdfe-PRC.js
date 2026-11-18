import{j as e}from"./jsx-runtime-p52kfkVR.js";import{r as m}from"./iframe-DbL7boiR.js";import{t as z}from"./tw-BbKhTrVW.js";import"./preload-helper-Dp1pzeXC.js";function D(s){return e.jsx("svg",{"aria-hidden":"true",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,...s,children:e.jsx("path",{d:"M4.91133 11.1163L9.62077 15.8257L18.2465 7.2"})})}D.__docgenInfo={description:"사이트 icons/checkout/check-24.svg · pickpass/agree-*-24.svg 경로 (테두리 없는 체크 표시)",methods:[],displayName:"CheckMarkIcon"};const k={unchecked:"border-ds-border-default",checked:"border-ds-warm-200 bg-ds-warm-200"},B={medium:"gap-3 px-3 py-2 bg-ds-cool-50 ds-text-caption-2",large:"h-12 gap-2 px-4 py-2 bg-ds-bg-secondary text-[13px] font-normal leading-[18px]"},E=(s,c,t)=>s==="card"?`gap-2 p-3 border ds-text-caption-2 ${t?k.checked:k.unchecked}`:B[c],T=z.label`
  flex w-full cursor-pointer items-center rounded-ds-xs text-ds-text-secondary
  has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ds-text-primary
  ${({$boxClass:s})=>s}
`,Q=s=>`h-6 w-6 shrink-0 ${s?"text-ds-text-primary":"text-ds-gray-300"}`,a=m.forwardRef(function({variant:c="card",size:t="medium",children:l,className:d,checked:i,defaultChecked:h,onChange:x,...L},M){const p=i!==void 0,[$,A]=m.useState(!!h),u=p?i:$,P=f=>{p||A(f.target.checked),x==null||x(f)};return e.jsxs(T,{$boxClass:E(c,t,u),className:d,children:[e.jsx("input",{ref:M,type:"checkbox",className:"sr-only",checked:i,defaultChecked:p?void 0:h,onChange:P,...L}),e.jsx(D,{className:Q(u)}),e.jsx("span",{className:"flex-1",children:l})]})});a.displayName="Checkbox";a.__docgenInfo={description:`사이트 ConsentCheck. 네이티브 checkbox를 시각적으로 숨기고 라벨 박스 전체가 클릭 영역.
안내문 제목·설명은 Checkbox 밖, 사용처 마크업 (D11)`,methods:[],displayName:"Checkbox",props:{variant:{required:!1,tsType:{name:"union",raw:"'card' | 'plain'",elements:[{name:"literal",value:"'card'"},{name:"literal",value:"'plain'"}]},description:"기본 'card'",defaultValue:{value:"'card'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'large'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"기본 'medium'(MO). plain만 해당",defaultValue:{value:"'medium'",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:"라벨. (필수)/(선택) 강조는 사용처가 넣는다"}},composes:["Omit"]};const J={title:"Input/Checkbox",component:a,args:{children:"지금 결제 수단을 저장하고, 나중에 결제 상품 결제에 사용합니다."},decorators:[s=>e.jsx("div",{className:"max-w-[374px]",children:s()})],parameters:{docs:{description:{component:`사이트 ConsentCheck. card = 약관 동의, plain = 안내 확인 박스 (D11).
(필수)/(선택) 강조 색은 사용처가 정한다 — S 기준 필수 여부를 따른다 (Q27).
안내문 제목·설명은 Checkbox 밖, 사용처 마크업이다.
비활성 스타일은 없다 (Q4) — \`disabled\`는 네이티브 속성으로만 전달된다.`}}}},n={},V=()=>e.jsx("b",{className:"font-semibold text-ds-text-primary",children:"(필수)"}),U=()=>e.jsx("b",{className:"font-semibold text-ds-gray-400",children:"(선택)"}),g=({pc:s=!1})=>e.jsxs("div",{className:"flex flex-col gap-1 ds-text-caption-2 text-ds-text-tertiary",children:[e.jsxs("p",{className:`font-medium text-ds-text-secondary ${s?"ds-text-label-2":""}`,children:[e.jsx("b",{className:"font-bold",children:"(필수)"})," 체크인 정보 제출 요청"]}),e.jsxs("span",{children:["결제 완료 후 '앳홈스테이' 카카오톡 채널 추가 → 예약자 정보를 전송해 주세요.",e.jsx("br",{}),"결제 후 발송되는 이메일을 반드시 확인해 주세요."]})]}),r={render:()=>e.jsxs("div",{className:"flex flex-col gap-10",children:[e.jsxs("div",{className:"flex w-[332px] max-w-full flex-col gap-3",children:[e.jsx(g,{}),e.jsx(a,{variant:"plain",children:"위 안내사항을 확인했습니다."})]}),e.jsxs("div",{className:"flex w-[374px] max-w-full flex-col gap-4",children:[e.jsx(g,{pc:!0}),e.jsx(a,{variant:"plain",size:"large",children:"위 안내사항을 확인했습니다."})]}),e.jsxs("div",{className:"flex w-[343px] max-w-full flex-col gap-2",children:[e.jsxs(a,{children:[e.jsx(U,{})," 지금 결제 수단을 저장하고, 나중에 결제 상품 결제에 사용합니다."]}),e.jsxs(a,{defaultChecked:!0,children:[e.jsx(V,{})," 앳홈트립 이용약관 및 개인정보처리방침 과 취소 및 환불규정에 동의합니다."]})]})]})},o={render:function(c){const[t,l]=m.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{...c,checked:t,onChange:d=>l(d.target.checked)}),e.jsxs("p",{className:"ds-text-caption-2 text-ds-text-tertiary",children:["checked = ",String(t)]})]})}};var C,b,v;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var j,N,y,w,S;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-10">
      <div className="flex w-[332px] max-w-full flex-col gap-3">
        <Notice />
        <Checkbox variant="plain">위 안내사항을 확인했습니다.</Checkbox>
      </div>
      <div className="flex w-[374px] max-w-full flex-col gap-4">
        <Notice pc />
        <Checkbox variant="plain" size="large">
          위 안내사항을 확인했습니다.
        </Checkbox>
      </div>
      <div className="flex w-[343px] max-w-full flex-col gap-2">
        <Checkbox>
          <Optional /> 지금 결제 수단을 저장하고, 나중에 결제 상품 결제에 사용합니다.
        </Checkbox>
        <Checkbox defaultChecked>
          <Required /> 앳홈트립 이용약관 및 개인정보처리방침 과 취소 및 환불규정에 동의합니다.
        </Checkbox>
      </div>
    </div>
}`,...(y=(N=r.parameters)==null?void 0:N.docs)==null?void 0:y.source},description:{story:"사이트 ConsentCheck 데모(안내 확인 MO / PC, 약관 동의 선택 전 / 후)와 같은 구성",...(S=(w=r.parameters)==null?void 0:w.docs)==null?void 0:S.description}}};var _,I,O,R,q;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: function ControlledStory(args) {
    const [checked, setChecked] = useState(false);
    return <div className="flex flex-col gap-2">
        <Checkbox {...args} checked={checked} onChange={e => setChecked(e.target.checked)} />
        <p className="ds-text-caption-2 text-ds-text-tertiary">checked = {String(checked)}</p>
      </div>;
  }
}`,...(O=(I=o.parameters)==null?void 0:I.docs)==null?void 0:O.source},description:{story:"제어 모드: checked + onChange",...(q=(R=o.parameters)==null?void 0:R.docs)==null?void 0:q.description}}};const K=["Playground","SiteDemo","Controlled"];export{o as Controlled,n as Playground,r as SiteDemo,K as __namedExportsOrder,J as default};
