import{j as e}from"./WeekDays-ZSB7Xovx.js";import{e as W}from"./_shared-DNTMA3Do.js";import{b as z}from"./constants-BjprbGdV.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const _={title:"Example/TimePicker",...z},o={locale:"en-US",weekStartsOn:"monday",weekdayFormat:"short",dayFormat:"numeric"},i=r=>c=>W({...c,timePickerProps:r}),E=({hours:r,minutes:c,setHours:V,setMinutes:M,formatted:A})=>{const l={width:56,padding:"6px 8px",textAlign:"center",fontSize:18,fontWeight:700,border:"1px solid #d4d4d8",borderRadius:8};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8,padding:12},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[e.jsx("input",{type:"number",min:0,max:23,value:r,onChange:d=>V(Number(d.target.value)),"aria-label":"hours",style:l}),e.jsx("span",{style:{fontSize:18,fontWeight:700},children:":"}),e.jsx("input",{type:"number",min:0,max:59,value:c,onChange:d=>M(Number(d.target.value)),"aria-label":"minutes",style:l})]}),e.jsx("span",{style:{fontSize:12,color:"#fff",background:"#3b82f6",borderRadius:999,padding:"2px 10px"},children:A})]})},n={render:i(),args:{isRange:!1,initialValue:new Date(new Date().setHours(9,30,0,0)),calendar:"gregory",config:o}},s={render:i({use12Hours:!0}),args:{isRange:!1,initialValue:new Date(new Date().setHours(14,15,0,0)),calendar:"gregory",config:o}},a={render:i({showSeconds:!0}),args:{isRange:!1,initialValue:new Date(new Date().setHours(9,30,45,0)),calendar:"gregory",config:o}},t={render:i({renderer:r=>e.jsx(E,{...r})}),args:{isRange:!1,initialValue:new Date(new Date().setHours(9,30,0,0)),calendar:"gregory",config:o}};var u,g,m,p,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: withTimePicker(),
  args: {
    isRange: false,
    initialValue: new Date(new Date().setHours(9, 30, 0, 0)),
    calendar: "gregory",
    config: baseConfig
  }
}`,...(m=(g=n.parameters)==null?void 0:g.docs)==null?void 0:m.source},description:{story:`Default 24-hour clock with hours + minutes. Pick a day, then step the time.
Changing the day keeps the chosen time.`,...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.description}}};var h,y,w,x,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: withTimePicker({
    use12Hours: true
  }),
  args: {
    isRange: false,
    initialValue: new Date(new Date().setHours(14, 15, 0, 0)),
    calendar: "gregory",
    config: baseConfig
  }
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source},description:{story:"12-hour clock with an AM/PM toggle.",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.description}}};var D,k,H,C,R;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: withTimePicker({
    showSeconds: true
  }),
  args: {
    isRange: false,
    initialValue: new Date(new Date().setHours(9, 30, 45, 0)),
    calendar: "gregory",
    config: baseConfig
  }
}`,...(H=(k=a.parameters)==null?void 0:k.docs)==null?void 0:H.source},description:{story:"Hours, minutes and seconds.",...(R=(C=a.parameters)==null?void 0:C.docs)==null?void 0:R.description}}};var S,j,v,P,T;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: withTimePicker({
    renderer: args => <MyCustomClock {...args} />
  }),
  args: {
    isRange: false,
    initialValue: new Date(new Date().setHours(9, 30, 0, 0)),
    calendar: "gregory",
    config: baseConfig
  }
}`,...(v=(j=t.parameters)==null?void 0:j.docs)==null?void 0:v.source},description:{story:"A fully custom UI via the `renderer` prop — the consumer renders its own\ncomponent (here, editable number inputs) and the library only supplies the\ntime parts and setters.",...(T=(P=t.parameters)==null?void 0:P.docs)==null?void 0:T.description}}};const q=["HoursAndMinutes","TwelveHour","WithSeconds","CustomRenderer"];export{t as CustomRenderer,n as HoursAndMinutes,s as TwelveHour,a as WithSeconds,q as __namedExportsOrder,_ as default};
