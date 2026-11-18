import{j as e}from"./jsx-runtime-p52kfkVR.js";import{r as l}from"./iframe-DbL7boiR.js";import{t as u}from"./tw-BbKhTrVW.js";import{M as B,P as G}from"./plusIcon-C3ADJz9g.js";import"./preload-helper-Dp1pzeXC.js";const H=u.button`
  flex w-full items-center gap-3 pt-5 pr-4 pl-0 text-left
  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-text-primary
  ${({$open:s})=>s?"pb-3 border-b-0":"pb-5 border-b border-ds-gray-100"}
`,J=u.span`shrink-0 text-[24px] font-extrabold leading-[26px] text-ds-text-primary`,K=u.span`flex-1 ds-text-body-2 text-ds-text-secondary`,N="h-5 w-5 shrink-0 text-ds-text-primary",X=u.div`rounded-ds-xs bg-ds-bg-secondary p-6 ds-text-body-2 text-ds-text-secondary`,o=l.forwardRef(function({question:m,children:i,open:d,defaultOpen:M=!1,onOpenChange:x,prefix:f="Q.",...V},F){const[L,U]=l.useState(M),g=d!==void 0,n=g?d:L,y=l.useId(),b=`${y}-question`,h=`${y}-answer`,z=()=>{const q=!n;g||U(q),x==null||x(q)};return e.jsxs("div",{ref:F,...V,children:[e.jsxs(H,{type:"button",id:b,"aria-expanded":n,"aria-controls":h,$open:n,onClick:z,children:[f!==null&&e.jsx(J,{children:f}),e.jsx(K,{children:m}),n?e.jsx(B,{"data-icon":"minus",className:N}):e.jsx(G,{"data-icon":"plus",className:N})]}),e.jsx(X,{role:"region",id:h,"aria-labelledby":b,hidden:!n,children:i})]})});o.displayName="Accordion";o.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{question:{required:!0,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:"답변"},open:{required:!1,tsType:{name:"boolean"},description:"제어 모드 열림 상태. 주면 defaultOpen은 무시된다"},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"비제어 모드 초기 열림 상태",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},prefix:{required:!1,tsType:{name:"union",raw:"ReactNode | null",elements:[{name:"ReactNode"},{name:"null"}]},description:"질문 앞 표기. null이면 숨긴다",defaultValue:{value:"'Q.'",computed:!1}}},composes:["Omit"]};const p=e.jsxs(e.Fragment,{children:["패스는 먼저 이용할 상품 개수만 선택하여 구매합니다.",e.jsx("br",{}),"구매 후 마이페이지에서 원하는 상품과 일정을 선택할 수 있으며, 모든 상품을 한 번에 예약할 필요는 없습니다.",e.jsx("br",{}),"여행 일정에 맞춰 필요한 상품만 순차적으로 선택하여 이용하실 수 있습니다."]}),ne={title:"Display/Accordion",component:o,args:{question:"패스는 어떻게 이용하나요?",children:p,defaultOpen:!1},decorators:[s=>e.jsx("div",{className:"max-w-[600px]",children:s()})]},c={},t={render:s=>e.jsxs("div",{className:"flex flex-col gap-10",children:[e.jsx(o,{question:s.question,children:p}),e.jsx(o,{question:s.question,defaultOpen:!0,children:p})]})},r={render:function(m){const[i,d]=l.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("p",{className:"ds-text-caption-2 text-ds-text-tertiary",children:["open = ",String(i)]}),e.jsx(o,{question:m.question,open:i,onOpenChange:d,children:p})]})}},a={args:{prefix:null}};var j,S,v;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(v=(S=c.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var A,O,w,R,C;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-10">
      <Accordion question={args.question}>{ANSWER}</Accordion>
      <Accordion question={args.question} defaultOpen>
        {ANSWER}
      </Accordion>
    </div>
}`,...(w=(O=t.parameters)==null?void 0:O.docs)==null?void 0:w.source},description:{story:"사이트 Accordion 데모(Closed / Open)와 같은 구성 — 나란히 놓고 대조한다",...(C=(R=t.parameters)==null?void 0:R.docs)==null?void 0:C.description}}};var E,I,P,T,W;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: function ControlledStory(args) {
    const [open, setOpen] = useState(false);
    return <div className="flex flex-col gap-4">
        <p className="ds-text-caption-2 text-ds-text-tertiary">open = {String(open)}</p>
        <Accordion question={args.question} open={open} onOpenChange={setOpen}>
          {ANSWER}
        </Accordion>
      </div>;
  }
}`,...(P=(I=r.parameters)==null?void 0:I.docs)==null?void 0:P.source},description:{story:"제어 모드: open + onOpenChange",...(W=(T=r.parameters)==null?void 0:T.docs)==null?void 0:W.description}}};var _,Q,$,k,D;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    prefix: null
  }
}`,...($=(Q=a.parameters)==null?void 0:Q.docs)==null?void 0:$.source},description:{story:"prefix={null}: Q. 표기 없이",...(D=(k=a.parameters)==null?void 0:k.docs)==null?void 0:D.description}}};const te=["Playground","SiteDemo","Controlled","WithoutPrefix"];export{r as Controlled,c as Playground,t as SiteDemo,a as WithoutPrefix,te as __namedExportsOrder,ne as default};
