import{j as e}from"./jsx-runtime-p52kfkVR.js";import{r as S}from"./iframe-DbL7boiR.js";import{B as r}from"./bottomSheet-H9f6cVUR.js";import{B as o}from"./button-BI5oULAI.js";import{C as k}from"./callout-F85kl1iu.js";import"./preload-helper-Dp1pzeXC.js";import"./tw-BbKhTrVW.js";import"./portal-CqzujK23.js";import"./index-B7wpOJHf.js";import"./index-DRjwpjIM.js";import"./infoIcon-CE27M_k3.js";const A={title:"Feedback/BottomSheet",component:r,args:{title:"옵션 선택",showHandle:!0,showClose:!0,overlay:!0,children:null},parameters:{docs:{description:{component:'화면 아래에서 올라오는 시트의 틀 — 컨테이너·헤더·오버레이·핸들 + `footer` slot.\n상품 요약·칩·주황 안내 등 내용은 사용처가 넣는다.\n\n- `role="dialog"` `aria-modal`. `title`이 있으면 `aria-labelledby`, 없으면 `aria-label`을 반드시 넘긴다\n- 본문은 `data-scroll-allow` 스크롤 영역 — 배경 잠금 중에도 안쪽은 스크롤된다 (D25)\n- 오버레이 클릭으로 **닫힌다**(기본, D31). ESC는 가장 위 오버레이만 (D30). 그 밖의 동작은 Dialog 문서와 같다 (§7.7)\n- 핸들은 장식(`aria-hidden`), 드래그로 닫기는 없다 (D35)\n\n디자이너 확인 필요 (Q21): 사이트 데모 3종(옵션 선택 / 여행자 정보 / 안내)의 모서리(16/20)·핸들·그림자·제목·버튼 글자가\n서로 달라 공통 블록(옵션 선택) 값을 썼다 — 상단 r 16, 그림자 없음, 헤더 H 60 + 제목 18/600/28.\nP `showHandle` 기본 true인데 옵션 선택 데모에는 핸들이 없어 여행자 정보의 핸들(40×4 `#E0E0E0`)을 썼다.\n최대 높이(임시 90vh)·PC 표시 방식이 없다. 오버레이 클릭·애니메이션 규칙도 없다 (Q34)'}}}},v=["성인 1인 입장권","어린이 1인 입장권","가족 4인 패키지"],N=()=>e.jsx("ul",{children:v.map(i=>e.jsx("li",{className:"ds-text-body-3 flex h-12 items-center border-b border-ds-gray-100 text-ds-text-primary",children:i},i))}),l={render:function(s){const[t,n]=S.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>n(!0),children:"열기"}),e.jsx(r,{...s,open:t,onOpenChange:n,footer:e.jsx(o,{size:"large",fullWidth:!0,onClick:()=>n(!1),children:"선택 완료"}),children:e.jsx(N,{})})]})}},a={render:function(){const[s,t]=S.useState(null),n=d=>!d&&t(null),c=()=>t(null);return e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(o,{onClick:()=>t("option"),children:"옵션 선택"}),e.jsx(o,{onClick:()=>t("long"),children:"긴 내용 (본문만 스크롤)"}),e.jsx(o,{onClick:()=>t("notice"),children:"안내 (제목 줄·닫기 없음)"}),e.jsx(r,{open:s==="option",onOpenChange:n,title:"옵션 선택",showHandle:!1,footer:e.jsx("div",{className:"flex justify-end",children:e.jsx(o,{size:"large",className:"w-40",onClick:c,children:"선택 완료"})}),children:e.jsx(N,{})}),e.jsx(r,{open:s==="long",onOpenChange:n,title:"여행자 정보",footer:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(o,{size:"large",variant:"outlined-gray",className:"w-28",onClick:c,children:"이전"}),e.jsx(o,{size:"large",className:"flex-1",onClick:c,children:"다음"})]}),children:e.jsx("div",{className:"flex flex-col gap-3 pb-4",children:Array.from({length:30},(d,p)=>e.jsxs("p",{className:"ds-text-body-3 text-ds-text-secondary",children:["여행자 ",p+1]},p))})}),e.jsx(r,{open:s==="notice",onOpenChange:n,"aria-label":"이용 안내",showClose:!1,footer:e.jsx(o,{size:"large",fullWidth:!0,onClick:c,children:"확인"}),children:e.jsxs("div",{className:"flex flex-col gap-3 pt-2",children:[e.jsx("p",{className:"text-[20px] font-bold leading-[28px] text-ds-text-primary",children:"이용 전 확인해 주세요"}),e.jsx(k,{title:"현장 발권이 필요해요",children:"입장 30분 전까지 매표소에 방문해 주세요"})]})})]})}};var m,x,u,h,f;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: function PlaygroundStory(args) {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>열기</Button>
        <BottomSheet {...args} open={open} onOpenChange={setOpen} footer={<Button size="large" fullWidth onClick={() => setOpen(false)}>
              선택 완료
            </Button>}>
          <OptionRows />
        </BottomSheet>
      </>;
  }
}`,...(u=(x=l.parameters)==null?void 0:x.docs)==null?void 0:u.source},description:{story:"열기 버튼으로 연다. Controls의 값이 그대로 들어간다",...(f=(h=l.parameters)==null?void 0:h.docs)==null?void 0:f.description}}};var g,C,B,j,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: function SiteDemoStory() {
    const [demo, setDemo] = useState<DemoKey>(null);
    const openChange = (open: boolean) => !open && setDemo(null);
    const close = () => setDemo(null);
    return <div className="flex flex-wrap gap-2">
        <Button onClick={() => setDemo('option')}>옵션 선택</Button>
        <Button onClick={() => setDemo('long')}>긴 내용 (본문만 스크롤)</Button>
        <Button onClick={() => setDemo('notice')}>안내 (제목 줄·닫기 없음)</Button>

        <BottomSheet open={demo === 'option'} onOpenChange={openChange} title="옵션 선택" showHandle={false} footer={<div className="flex justify-end">
              <Button size="large" className="w-40" onClick={close}>
                선택 완료
              </Button>
            </div>}>
          <OptionRows />
        </BottomSheet>

        <BottomSheet open={demo === 'long'} onOpenChange={openChange} title="여행자 정보" footer={<div className="flex gap-2">
              <Button size="large" variant="outlined-gray" className="w-28" onClick={close}>
                이전
              </Button>
              <Button size="large" className="flex-1" onClick={close}>
                다음
              </Button>
            </div>}>
          <div className="flex flex-col gap-3 pb-4">
            {Array.from({
            length: 30
          }, (_, index) => <p key={index} className="ds-text-body-3 text-ds-text-secondary">
                여행자 {index + 1}
              </p>)}
          </div>
        </BottomSheet>

        <BottomSheet open={demo === 'notice'} onOpenChange={openChange} aria-label="이용 안내" showClose={false} footer={<Button size="large" fullWidth onClick={close}>
              확인
            </Button>}>
          <div className="flex flex-col gap-3 pt-2">
            <p className="text-[20px] font-bold leading-[28px] text-ds-text-primary">이용 전 확인해 주세요</p>
            <Callout title="현장 발권이 필요해요">입장 30분 전까지 매표소에 방문해 주세요</Callout>
          </div>
        </BottomSheet>
      </div>;
  }
}`,...(B=(C=a.parameters)==null?void 0:C.docs)==null?void 0:B.source},description:{story:"사이트 #bottom-sheet 데모 3종을 공통 틀로 구성 — 버튼을 눌러 하나씩 연다",...(y=(j=a.parameters)==null?void 0:j.docs)==null?void 0:y.description}}};const F=["Playground","SiteDemo"];export{l as Playground,a as SiteDemo,F as __namedExportsOrder,A as default};
