import{j as e}from"./jsx-runtime-p52kfkVR.js";import{r as V}from"./iframe-DbL7boiR.js";import{R as o,a}from"./radio-CVfCU89o.js";import"./preload-helper-Dp1pzeXC.js";import"./tw-BbKhTrVW.js";const P={title:"Input/Radio",component:o,args:{name:"gender","aria-label":"성별",defaultValue:"male"},render:d=>e.jsxs(o,{...d,children:[e.jsx(a,{value:"male",children:"남성"}),e.jsx(a,{value:"female",children:"여성"})]}),parameters:{docs:{description:{component:`둘 중 하나를 고르는 선택 (성별 등). 네이티브 radio + 화살표 키 이동.
가이드라인: 선택 항목이 3개 이상이면 드롭다운을 쓴다.
disabled·focus·error 상태와 PC gap·높이는 스펙에 없다 (Q26) — 비활성은 네이티브 속성만 전달.`}}}},s={},r={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs(o,{name:"gender-mo","aria-label":"성별 (MO)",defaultValue:"male",children:[e.jsx(a,{value:"male",children:"남성"}),e.jsx(a,{value:"female",children:"여성"})]}),e.jsxs(o,{name:"gender-pc","aria-label":"성별 (PC)",defaultValue:"male",size:"large",children:[e.jsx(a,{value:"male",children:"남성"}),e.jsx(a,{value:"female",children:"여성"})]})]})},l={render:function(){const[n,C]=V.useState("female");return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs(o,{name:"gender-controlled","aria-label":"성별",value:n,onValueChange:C,children:[e.jsx(a,{value:"male",children:"남성"}),e.jsx(a,{value:"female",children:"여성"})]}),e.jsxs("p",{className:"ds-text-caption-2 text-ds-text-tertiary",children:["value = ",n]})]})}};var t,i,c;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,u,p,x,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <RadioGroup name="gender-mo" aria-label="성별 (MO)" defaultValue="male">
        <Radio value="male">남성</Radio>
        <Radio value="female">여성</Radio>
      </RadioGroup>
      <RadioGroup name="gender-pc" aria-label="성별 (PC)" defaultValue="male" size="large">
        <Radio value="male">남성</Radio>
        <Radio value="female">여성</Radio>
      </RadioGroup>
    </div>
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source},description:{story:"사이트 Radio 데모(MO / PC)와 같은 구성",...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.description}}};var v,R,g,h,j;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: function ControlledStory() {
    const [value, setValue] = useState('female');
    return <div className="flex flex-col gap-2">
        <RadioGroup name="gender-controlled" aria-label="성별" value={value} onValueChange={setValue}>
          <Radio value="male">남성</Radio>
          <Radio value="female">여성</Radio>
        </RadioGroup>
        <p className="ds-text-caption-2 text-ds-text-tertiary">value = {value}</p>
      </div>;
  }
}`,...(g=(R=l.parameters)==null?void 0:R.docs)==null?void 0:g.source},description:{story:"제어 모드: value + onValueChange",...(j=(h=l.parameters)==null?void 0:h.docs)==null?void 0:j.description}}};const O=["Playground","SiteDemo","Controlled"];export{l as Controlled,s as Playground,r as SiteDemo,O as __namedExportsOrder,P as default};
