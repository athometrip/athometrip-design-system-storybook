import{j as o}from"./jsx-runtime-p52kfkVR.js";import{t as i}from"./tw-BbKhTrVW.js";const n={leading:"items-center justify-between p-4 gap-3",split:"px-4 py-3 gap-2 [&>*]:flex-1"},d=i.div`
  flex w-full bg-ds-bg-surface
  ${({$layout:e})=>n[e]}
  ${({$shadow:e})=>e?"shadow-ds-bottom-bar":""}
`;function r({layout:e="leading",shadow:t=!0,leading:a,children:s,...l}){return o.jsxs(d,{$layout:e,$shadow:t,...l,children:[e==="leading"&&a,s]})}r.__docgenInfo={description:"",methods:[],displayName:"BottomCTA",props:{layout:{required:!1,tsType:{name:"union",raw:"'leading' | 'split'",elements:[{name:"literal",value:"'leading'"},{name:"literal",value:"'split'"}]},description:"",defaultValue:{value:"'leading'",computed:!1}},shadow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},leading:{required:!1,tsType:{name:"ReactNode"},description:'layout="leading"일 때 버튼 왼쪽에 놓을 내용 (금액 등은 사용처가 만든다)'}},composes:["HTMLAttributes"]};export{r as B};
