import{j as e}from"./jsx-runtime-p52kfkVR.js";import{r as C}from"./iframe-DbL7boiR.js";import{t as _}from"./tw-BbKhTrVW.js";import"./preload-helper-Dp1pzeXC.js";function N(s){return e.jsx("svg",{"aria-hidden":"true",width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",stroke:"currentColor",strokeWidth:1.3,...s,children:e.jsx("path",{d:"M2 5.2L4.1 7.2L8 3"})})}N.__docgenInfo={description:"사이트 #badge 알약(선택) 데모 SVG 경로",methods:[],displayName:"CheckIcon"};const d="rounded-[2px]",k={medium:`h-6 px-2 ${d} bg-[rgba(0,0,0,0.3)] backdrop-blur-[4px] ds-text-badge-1 text-white`,small:`h-5 px-1.5 ${d} bg-[rgba(0,0,0,0.3)] backdrop-blur-[4px] text-[10px] font-medium tracking-[-0.25px] text-white`},p=`h-4 px-1.5 ${d} ds-text-badge-2 tracking-[-0.25px] text-ds-text-secondary`,L={outlined:`${p} border border-ds-gray-100`,filled:`${p} bg-ds-gray-100`},x=`h-5 px-1 gap-1 ${d} border ds-text-caption-2 tracking-[-0.12px] [&>svg]:h-5 [&>svg]:w-5`,F={strong:`${x} bg-ds-coral-50 border-[#FFC8C7] text-ds-brand-pickpass`,subtle:`${x} bg-[#F8F8F8] border-ds-border-default text-ds-gray-400`},g="h-4 px-2 gap-0.5 rounded-ds-xl text-[10px] font-semibold text-white",P={black:`${g} bg-ds-bg-inverse`,warm:`${g} bg-ds-warm-600`},D="px-2 py-0.5 rounded-ds-full bg-[#FFE1DF] text-[#F13B38] ds-text-caption-3",M=({variant:s="meta",size:i="medium",appearance:l="outlined",emphasis:n="strong",color:c="black"})=>{switch(s){case"image":return k[i];case"benefit":return F[n];case"pill":return P[c];case"status":return D;default:return L[l]}},V=_.span`
  inline-flex shrink-0 items-center whitespace-nowrap
  ${({$variantClass:s})=>s}
`,a=C.forwardRef(function(i,l){const{variant:n,size:c,appearance:w,emphasis:S,color:y,icon:E,children:$,...I}=i,T=M({variant:n,size:c,appearance:w,emphasis:S,color:y}),A=n==="benefit"||n==="pill";return e.jsxs(V,{ref:l,$variantClass:T,...I,children:[A&&E,$]})});a.displayName="Badge";a.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const G={title:"Display/Badge",component:a,args:{children:"즉시전송"}},r={},o=({children:s})=>e.jsx("div",{className:"relative h-[150px] w-[120px] overflow-hidden rounded-ds-xs bg-ds-gray-300",children:e.jsx("div",{className:"absolute left-2 top-2",children:s})}),t={render:()=>e.jsxs("div",{className:"flex max-w-[420px] flex-col gap-8",children:[e.jsxs("section",{className:"flex gap-2",children:[e.jsx(o,{children:e.jsx(a,{variant:"image",children:"BEST"})}),e.jsx(o,{children:e.jsx(a,{variant:"image",children:"MD's 픽"})}),e.jsx(o,{children:e.jsx(a,{variant:"image",size:"small",children:"ONLY"})})]}),e.jsxs("section",{className:"flex flex-col gap-2",children:[e.jsx("b",{className:"ds-text-title-6",children:"랜드마크 야경스팟 차량투어"}),e.jsxs("div",{className:"flex flex-wrap gap-1",children:[e.jsx(a,{children:"성인"}),e.jsx(a,{children:"즉시전송"}),e.jsx(a,{children:"무료취소"}),e.jsx(a,{appearance:"filled",children:"5세 이하 무료"})]}),e.jsxs("div",{className:"flex flex-wrap gap-1",children:[e.jsx(a,{variant:"benefit",children:"픽패스 $41~"}),e.jsx(a,{variant:"benefit",children:"$10 SAVE"}),e.jsx(a,{variant:"benefit",emphasis:"subtle",children:"$17 SAVE"})]})]}),e.jsxs("section",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-1",children:[e.jsx(a,{variant:"pill",color:"warm",children:"독채"}),e.jsx(a,{appearance:"filled",children:"싱글침대"}),e.jsx(a,{appearance:"filled",children:"최대 3인"}),e.jsx(a,{appearance:"filled",children:"장기체류"})]}),e.jsx("b",{className:"ds-text-title-6",children:"허드슨 리버점 프리미어 플러스"})]}),e.jsxs("div",{className:"relative w-[160px] rounded-ds-md border border-ds-text-primary p-4 pt-5 ds-text-body-3",children:[e.jsx(a,{variant:"pill",icon:e.jsx(N,{}),className:"absolute -top-2 left-1/2 -translate-x-1/2",children:"선택"}),e.jsx("b",{children:"PICK 4"})," $229"]}),e.jsxs("div",{className:"relative rounded-ds-md bg-ds-bg-secondary p-4 pt-5 ds-text-body-4",children:[e.jsx(a,{variant:"pill",color:"warm",className:"absolute -top-2 left-4",children:"TIP!"}),"아직 여행 계획이 확정되지 않았다면?",e.jsx("br",{}),"PICK만 미리 추가 구매하고, 추가 상품은 나중에 골라도 괜찮아요!"]})]}),e.jsx("section",{children:e.jsx(a,{variant:"status",children:"예약필요"})})]})};var m,b,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var f,u,v,B,j;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex max-w-[420px] flex-col gap-8">
      <section className="flex gap-2">
        <Thumb>
          <Badge variant="image">BEST</Badge>
        </Thumb>
        <Thumb>
          <Badge variant="image">MD&apos;s 픽</Badge>
        </Thumb>
        <Thumb>
          <Badge variant="image" size="small">
            ONLY
          </Badge>
        </Thumb>
      </section>

      <section className="flex flex-col gap-2">
        <b className="ds-text-title-6">랜드마크 야경스팟 차량투어</b>
        <div className="flex flex-wrap gap-1">
          <Badge>성인</Badge>
          <Badge>즉시전송</Badge>
          <Badge>무료취소</Badge>
          <Badge appearance="filled">5세 이하 무료</Badge>
        </div>
        <div className="flex flex-wrap gap-1">
          <Badge variant="benefit">픽패스 $41~</Badge>
          <Badge variant="benefit">$10 SAVE</Badge>
          <Badge variant="benefit" emphasis="subtle">
            $17 SAVE
          </Badge>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-1">
            <Badge variant="pill" color="warm">
              독채
            </Badge>
            <Badge appearance="filled">싱글침대</Badge>
            <Badge appearance="filled">최대 3인</Badge>
            <Badge appearance="filled">장기체류</Badge>
          </div>
          <b className="ds-text-title-6">허드슨 리버점 프리미어 플러스</b>
        </div>
        {/* 박스 위쪽 테두리에 걸치는 배치는 사용처 레이아웃이 맡는다 */}
        <div className="relative w-[160px] rounded-ds-md border border-ds-text-primary p-4 pt-5 ds-text-body-3">
          <Badge variant="pill" icon={<CheckIcon />} className="absolute -top-2 left-1/2 -translate-x-1/2">
            선택
          </Badge>
          <b>PICK 4</b> $229
        </div>
        <div className="relative rounded-ds-md bg-ds-bg-secondary p-4 pt-5 ds-text-body-4">
          <Badge variant="pill" color="warm" className="absolute -top-2 left-4">
            TIP!
          </Badge>
          아직 여행 계획이 확정되지 않았다면?
          <br />
          PICK만 미리 추가 구매하고, 추가 상품은 나중에 골라도 괜찮아요!
        </div>
      </section>

      <section>
        <Badge variant="status">예약필요</Badge>
      </section>
    </div>
}`,...(v=(u=t.parameters)==null?void 0:u.docs)==null?void 0:v.source},description:{story:`사이트 Badge 데모(썸네일 위 / 상품 정보 / 카드·박스 알약 / 입력 폼)와 같은 구성.
가이드라인: 썸네일 위에는 image만, 상품명 아래에는 meta·benefit만 쓴다.
혜택 배지의 픽패스 아이콘은 B1 아이콘 범위 밖이라 빠져 있다`,...(j=(B=t.parameters)==null?void 0:B.docs)==null?void 0:j.description}}};const U=["Playground","SiteDemo"];export{r as Playground,t as SiteDemo,U as __namedExportsOrder,G as default};
