import{j as e}from"./jsx-runtime-p52kfkVR.js";import{r}from"./iframe-DbL7boiR.js";import{t as c}from"./tw-BbKhTrVW.js";import{P as X}from"./portal-CqzujK23.js";import{u as ee,a as ne,C as oe,B as te}from"./bottomSheet-H9f6cVUR.js";import{B as m}from"./button-BI5oULAI.js";import{R as ie,a as w}from"./radio-CVfCU89o.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B7wpOJHf.js";import"./index-DRjwpjIM.js";const M=r.createContext("medium"),ae=c.div`
  fixed inset-0 z-[1000] flex items-center justify-center p-4
  ${({$hidden:n})=>n?"!hidden":""}
`,se=c.div`
  absolute inset-0 bg-[rgba(0,0,0,0.5)]
  transition-opacity duration-200 ease-out motion-reduce:transition-none
  ${({$visible:n})=>n?"opacity-100":"opacity-0"}
`,le={medium:"w-[343px] gap-6 pt-6 px-4 pb-5 shadow-[0_8px_24px_rgba(0,0,0,0.15)]",large:"w-[500px] shadow-[0_1px_6px_rgba(0,0,0,0.25)]"},re=c.div`
  relative flex max-w-full flex-col rounded-ds-md bg-ds-bg-surface outline-none
  transition duration-200 ease-out motion-reduce:transition-none
  ${({$size:n})=>le[n]}
  ${({$visible:n})=>n?"opacity-100 scale-100":"opacity-0 scale-95"}
`,ce={medium:"",large:"pt-8 px-8 pb-3"},de=c.div`
  flex flex-col
  ${({$size:n})=>ce[n]}
  ${({$centered:n})=>n?"items-center text-center":""}
`,ue=c.span`mb-2 flex h-8 w-8 items-center justify-center [&>svg]:h-8 [&>svg]:w-8`,pe={medium:"text-[20px] leading-[26px]",large:"text-[24px] leading-[32px]"},me=c.h2`
  flex-1 font-bold text-[#1F1F1F]
  ${({$size:n})=>pe[n]}
`,fe={medium:"ds-text-body-3",large:"ds-text-body-2"},ge=c.p`
  mt-2 text-ds-text-secondary
  ${({$size:n})=>fe[n]}
`,F="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-text-primary",xe=c.button`
  -mr-1 flex h-8 w-8 shrink-0 items-center justify-center text-ds-text-primary
  ${()=>F}
`,he={medium:"gap-2",large:"gap-3 pt-5 px-8 pb-8"},ye=c.div`
  flex [&>*]:flex-1
  ${({$size:n})=>he[n]}
`,p=r.forwardRef(function({open:o,defaultOpen:t=!1,onOpenChange:a,size:s="medium",title:g,description:d,icon:u,actions:l,showClose:f=!1,closeLabel:V="닫기",children:v,closeOnOverlayClick:L=!1,closeOnEsc:H=!0,initialFocus:Q,container:W,keepMounted:Z=!1,rootClassName:G,...K},x){const[U,j]=ee(o,t,a),C=r.useCallback(()=>j(!1),[j]),{panelRef:O,rootRef:Y,isRendered:D,isVisible:k}=ne({open:U,onClose:C,closeOnEsc:H,initialFocus:Q}),S=r.useId(),A=`${S}-title`,T=`${S}-description`,J=r.useCallback(b=>{O(b),typeof x=="function"?x(b):x&&(x.current=b)},[O,x]);return!D&&!Z?null:e.jsx(X,{container:W,children:e.jsxs(ae,{ref:Y,className:G,hidden:!D,$hidden:!D,children:[e.jsx(se,{"data-overlay":"","aria-hidden":"true",$visible:k,onClick:L?C:void 0}),e.jsxs(re,{ref:J,role:"dialog","aria-modal":"true","aria-labelledby":A,"aria-describedby":d!==void 0?T:void 0,tabIndex:-1,$size:s,$visible:k,...K,children:[e.jsxs(de,{$size:s,$centered:u!==void 0,children:[u!==void 0&&e.jsx(ue,{children:u}),e.jsxs("div",{className:"flex w-full items-start gap-2",children:[e.jsx(me,{id:A,$size:s,children:g}),f&&e.jsx(xe,{type:"button","aria-label":V,onClick:C,children:e.jsx(oe,{className:"h-8 w-8"})})]}),d!==void 0&&e.jsx(ge,{id:T,$size:s,children:d}),v!==void 0&&e.jsx("div",{className:"mt-4 w-full text-left",children:v})]}),l!==void 0&&e.jsx(M.Provider,{value:s,children:e.jsx(ye,{$size:s,children:l})})]})]})})});p.displayName="Dialog";const Ce={primary:"bg-ds-bg-inverse text-white",secondary:"border border-ds-border-default bg-ds-bg-surface text-ds-text-secondary"},De={medium:"h-[52px]",large:"h-14"},be=c.button`
  inline-flex items-center justify-center rounded-ds-xs px-4
  text-[15px] font-medium leading-[24px]
  ${()=>F}
  ${({$size:n})=>De[n]}
  ${({$variant:n,$disabled:o})=>o?"cursor-not-allowed bg-ds-gray-200 text-white":Ce[n]}
`,i=r.forwardRef(function({variant:o="primary",type:t="button",disabled:a,...s},g){const d=r.useContext(M);return e.jsx(be,{ref:g,type:t,disabled:a,$variant:o,$size:d,$disabled:!!a,...s})});i.displayName="DialogAction";p.__docgenInfo={description:`화면 가운데 확인 창 (사이트 확인 MO/PC). role="dialog" aria-modal.
'장바구니 담기' 변형은 2차 제외 (Q20)`,methods:[],displayName:"Dialog",props:{open:{required:!1,tsType:{name:"boolean"},description:"제어 모드 열림 상태. 주면 defaultOpen은 무시된다"},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"비제어 모드 초기 열림 상태",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"ESC·닫기 버튼·오버레이 클릭으로 닫힐 때 false로 불린다"},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'large'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"기본 'medium'(MO 확인 W 343). 'large'는 PC 확인 W 500 (D2)",defaultValue:{value:"'medium'",computed:!1}},title:{required:!0,tsType:{name:"ReactNode"},description:"제목 → aria-labelledby"},description:{required:!1,tsType:{name:"ReactNode"},description:"설명 → aria-describedby"},icon:{required:!1,tsType:{name:"ReactNode"},description:"'아이콘 포함' 변형: 제목 위 32px, 가운데 정렬"},actions:{required:!1,tsType:{name:"ReactNode"},description:"버튼 영역 (균등 분할). 보통 `DialogAction`을 넣는다"},showClose:{required:!1,tsType:{name:"boolean"},description:"제목 오른쪽 닫기 버튼 32 (사이트 선택·입력 PC). 기본 false",defaultValue:{value:"false",computed:!1}},closeLabel:{required:!1,tsType:{name:"string"},description:"닫기 버튼 이름. 기본 '닫기'",defaultValue:{value:"'닫기'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"선택·입력 내용 (TextField 등은 사용처가 구성)"},closeOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:"기본 false — 확인 창은 명시적 선택을 유도한다 (D31, 임시: Q34)",defaultValue:{value:"false",computed:!1}},closeOnEsc:{required:!1,tsType:{name:"boolean"},description:"기본 true. 가장 위 오버레이만 반응한다 (D30)",defaultValue:{value:"true",computed:!1}},initialFocus:{required:!1,tsType:{name:"RefObject",elements:[{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}],raw:"RefObject<HTMLElement | null>"},description:"열릴 때 먼저 포커스할 요소. 기본은 패널 안 첫 Tab 요소 (D28 — 보조 버튼이 먼저면 보조)"},container:{required:!1,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:"portal 대상. 기본 document.body (D24)"},keepMounted:{required:!1,tsType:{name:"boolean"},description:"닫혀도 DOM에 남긴다(hidden). 기본 false — 닫히면 언마운트 (D36)",defaultValue:{value:"false",computed:!1}},rootClassName:{required:!1,tsType:{name:"string"},description:"화면 전체 층(오버레이 + 가운데 정렬)의 class. z-index 덮어쓰기용 (D33, 기본 z-[1000])"}},composes:["Omit"]};i.__docgenInfo={description:`Dialog 버튼. 높이는 Dialog size를 따른다 (medium 52 / large 56).
비활성은 사이트 선택·입력의 bg #E0E0E0 + 흰 글자 — 고르거나 입력하기 전까지 사용처가 disabled`,methods:[],displayName:"DialogAction",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"기본 'primary'(검정). 'secondary'는 회색 테두리",defaultValue:{value:"'primary'",computed:!1}},type:{defaultValue:{value:"'button'",computed:!1},required:!1}},composes:["ButtonHTMLAttributes"]};const Ee={title:"Feedback/Dialog",component:p,args:{title:"예약을 취소할까요?",description:"취소하면 되돌릴 수 없어요",size:"medium"},parameters:{docs:{description:{component:"화면 가운데 확인 창 (사이트 확인 MO/PC). 제목 → `aria-labelledby`, 설명 → `aria-describedby`.\n\n**오버레이 동작 (§7.7)** — 의존성 없이 직접 구현 (D23)\n- `document.body`로 portal, 마운트 후에만 그린다(SSR 안전). `container`로 대상 변경 (D24)\n- 배경 스크롤 잠금은 front `useScrollLock`과 같은 이벤트 차단 방식(overflow:hidden 안 씀), 겹치면 마지막이 닫힐 때 해제 (D25·D26)\n- 포커스: 열리면 첫 Tab 요소(보조 버튼이 먼저면 보조), `initialFocus`로 변경. Tab/Shift+Tab은 안에서 돌고,\n  배경은 `inert`(미지원 브라우저는 `aria-hidden`). 닫히면 연 요소로 돌아간다 (D27–D29)\n- ESC는 가장 위 오버레이만 닫는다 (D30). 오버레이 클릭은 기본 **무시** — `closeOnOverlayClick` (D31)\n- 200ms CSS transition, 동작 줄이기 설정이면 끈다 (D32). 기본 `z-[1000]`, `rootClassName`으로 덮어쓰기 (D33)\n- 닫히면 언마운트, `keepMounted`로 유지 (D36)\n\n버튼은 `DialogAction`(primary/secondary, 높이는 size를 따라 52/56). 열림 상태는 사용처가 제어한다.\n\n디자이너 확인 필요: '장바구니 담기' 변형은 체계가 달라 제외 (Q20). 그림자 2종이 `shadow-ds-modal`과 다르다 (Q19).\n버튼 H 52/56은 1차 Button에 없다 (Q24). 제목 20/700/26·24/700/32는 역할이 없다 (Q1).\n선택·입력(PC) 데모의 제목 20/700/32 `#2A2A2A`는 반영하지 않고 확인(PC) 제목을 쓴다.\n열림/닫힘 시간·오버레이 클릭 규칙이 사이트에 없다 (Q34)"}}}},h={render:function(o){const[t,a]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(m,{onClick:()=>a(!0),children:"열기"}),e.jsx(p,{...o,open:t,onOpenChange:a,actions:e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"secondary",onClick:()=>a(!1),children:"닫기"}),e.jsx(i,{onClick:()=>a(!1),children:"취소하기"})]})})]})}},ve=()=>e.jsxs("svg",{viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",children:[e.jsx("circle",{cx:"16",cy:"16",r:"16",fill:"#E02A28"}),e.jsx("path",{d:"M16 9v9",stroke:"#fff",strokeWidth:2.5,strokeLinecap:"round"}),e.jsx("circle",{cx:"16",cy:"23",r:"1.6",fill:"#fff"})]}),y={render:function(){const[o,t]=r.useState(null),[a,s]=r.useState(null),[g,d]=r.useState(!1),u=f=>!f&&t(null),l=()=>t(null);return e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(m,{onClick:()=>t("confirm"),children:"확인 (MO)"}),e.jsx(m,{onClick:()=>t("icon"),children:"아이콘 포함 (MO)"}),e.jsx(m,{onClick:()=>t("confirmPc"),children:"확인 (PC)"}),e.jsx(m,{onClick:()=>t("select"),children:"선택·입력 (PC)"}),e.jsx(m,{variant:"outlined",onClick:()=>t("nested"),children:"겹침: Dialog 위 BottomSheet"}),e.jsx(p,{open:o==="confirm",onOpenChange:u,title:"예약을 취소할까요?",description:"취소하면 되돌릴 수 없어요",actions:e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"secondary",onClick:l,children:"닫기"}),e.jsx(i,{onClick:l,children:"취소하기"})]})}),e.jsx(p,{open:o==="icon",onOpenChange:u,icon:e.jsx(ve,{}),title:"결제에 실패했어요",description:"잠시 후 다시 시도해 주세요",actions:e.jsx(i,{onClick:l,children:"확인"})}),e.jsx(p,{open:o==="confirmPc",onOpenChange:u,size:"large",title:"예약을 취소할까요?",description:"취소하면 되돌릴 수 없어요",actions:e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"secondary",onClick:l,children:"닫기"}),e.jsx(i,{onClick:l,children:"취소하기"})]})}),e.jsx(p,{open:o==="select",onOpenChange:f=>{f||s(null),u(f)},size:"large",showClose:!0,title:"도시를 선택해 주세요",actions:e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"secondary",onClick:l,children:"취소"}),e.jsx(i,{disabled:a===null,onClick:l,children:"선택 완료"})]}),children:e.jsxs(ie,{name:"city",size:"large","aria-label":"도시",value:a??void 0,onValueChange:s,children:[e.jsx(w,{value:"newyork",children:"뉴욕"}),e.jsx(w,{value:"cancun",children:"칸쿤"})]})}),e.jsx(p,{open:o==="nested",onOpenChange:u,title:"여행자 정보",description:"국가를 고르면 BottomSheet가 위에 열린다. ESC는 위의 것만 닫는다",actions:e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"secondary",onClick:l,children:"닫기"}),e.jsx(i,{onClick:()=>d(!0),children:"국가 선택"})]})}),e.jsx(te,{open:g,onOpenChange:d,title:"국가",footer:e.jsx(m,{size:"large",fullWidth:!0,onClick:()=>d(!1),children:"선택"}),children:e.jsx("p",{className:"ds-text-body-3 py-3 text-ds-text-secondary",children:"대한민국"})})]})}};var B,R,$,E,N;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: function PlaygroundStory(args) {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>열기</Button>
        <Dialog {...args} open={open} onOpenChange={setOpen} actions={<>
              <DialogAction variant="secondary" onClick={() => setOpen(false)}>
                닫기
              </DialogAction>
              <DialogAction onClick={() => setOpen(false)}>취소하기</DialogAction>
            </>} />
      </>;
  }
}`,...($=(R=h.parameters)==null?void 0:R.docs)==null?void 0:$.source},description:{story:"열기 버튼으로 연다. Controls의 값이 그대로 들어간다",...(N=(E=h.parameters)==null?void 0:E.docs)==null?void 0:N.description}}};var P,I,_,q,z;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: function SiteDemoStory() {
    const [demo, setDemo] = useState<DemoKey>(null);
    const [city, setCity] = useState<string | null>(null);
    const [sheetOpen, setSheetOpen] = useState(false);
    const openChange = (open: boolean) => !open && setDemo(null);
    const close = () => setDemo(null);
    return <div className="flex flex-wrap gap-2">
        <Button onClick={() => setDemo('confirm')}>확인 (MO)</Button>
        <Button onClick={() => setDemo('icon')}>아이콘 포함 (MO)</Button>
        <Button onClick={() => setDemo('confirmPc')}>확인 (PC)</Button>
        <Button onClick={() => setDemo('select')}>선택·입력 (PC)</Button>
        <Button variant="outlined" onClick={() => setDemo('nested')}>
          겹침: Dialog 위 BottomSheet
        </Button>

        <Dialog open={demo === 'confirm'} onOpenChange={openChange} title="예약을 취소할까요?" description="취소하면 되돌릴 수 없어요" actions={<>
              <DialogAction variant="secondary" onClick={close}>
                닫기
              </DialogAction>
              <DialogAction onClick={close}>취소하기</DialogAction>
            </>} />
        <Dialog open={demo === 'icon'} onOpenChange={openChange} icon={<WarningIcon />} title="결제에 실패했어요" description="잠시 후 다시 시도해 주세요" actions={<DialogAction onClick={close}>확인</DialogAction>} />
        <Dialog open={demo === 'confirmPc'} onOpenChange={openChange} size="large" title="예약을 취소할까요?" description="취소하면 되돌릴 수 없어요" actions={<>
              <DialogAction variant="secondary" onClick={close}>
                닫기
              </DialogAction>
              <DialogAction onClick={close}>취소하기</DialogAction>
            </>} />
        <Dialog open={demo === 'select'} onOpenChange={open => {
        if (!open) setCity(null);
        openChange(open);
      }} size="large" showClose title="도시를 선택해 주세요" actions={<>
              <DialogAction variant="secondary" onClick={close}>
                취소
              </DialogAction>
              <DialogAction disabled={city === null} onClick={close}>
                선택 완료
              </DialogAction>
            </>}>
          <RadioGroup name="city" size="large" aria-label="도시" value={city ?? undefined} onValueChange={setCity}>
            <Radio value="newyork">뉴욕</Radio>
            <Radio value="cancun">칸쿤</Radio>
          </RadioGroup>
        </Dialog>
        <Dialog open={demo === 'nested'} onOpenChange={openChange} title="여행자 정보" description="국가를 고르면 BottomSheet가 위에 열린다. ESC는 위의 것만 닫는다" actions={<>
              <DialogAction variant="secondary" onClick={close}>
                닫기
              </DialogAction>
              <DialogAction onClick={() => setSheetOpen(true)}>국가 선택</DialogAction>
            </>} />
        <BottomSheet open={sheetOpen} onOpenChange={setSheetOpen} title="국가" footer={<Button size="large" fullWidth onClick={() => setSheetOpen(false)}>
              선택
            </Button>}>
          <p className="ds-text-body-3 py-3 text-ds-text-secondary">대한민국</p>
        </BottomSheet>
      </div>;
  }
}`,...(_=(I=y.parameters)==null?void 0:I.docs)==null?void 0:_.source},description:{story:"사이트 #dialog 변형 — 버튼을 눌러 하나씩 연다",...(z=(q=y.parameters)==null?void 0:q.docs)==null?void 0:z.description}}};const Ne=["Playground","SiteDemo"];export{h as Playground,y as SiteDemo,Ne as __namedExportsOrder,Ee as default};
