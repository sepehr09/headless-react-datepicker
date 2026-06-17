import{j as r}from"./jsx-runtime-5SbWow9j.js";import{e as z}from"./_shared-CyfpQXnE.js";import{b as E}from"./constants-JDnWQe5j.js";import{s as I}from"./_source-CMrf7hAM.js";import"./iframe-Ib4hGz91.js";import"./preload-helper-C1FmrZbK.js";import"./WeekDays-CwwOFGCo.js";const o=e=>I(["Title","Header","WeekDays","DaySlots","TimePicker"],`<Title />
<Header />
<WeekDays />
<DaySlots />
${e}`),G={title:"Example/TimePicker",...E},i={locale:"en-US",weekStartsOn:"monday",weekdayFormat:"short",dayFormat:"numeric"},c=e=>m=>z({...m,timePickerProps:e}),F=({hours:e,minutes:m,setHours:V,setMinutes:W,formatted:A})=>{const u={width:56,padding:"6px 8px",textAlign:"center",fontSize:18,fontWeight:700,border:"1px solid #d4d4d8",borderRadius:8};return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8,padding:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("input",{type:"number",min:0,max:23,value:e,onChange:d=>V(Number(d.target.value)),"aria-label":"hours",style:u}),r.jsx("span",{style:{fontSize:18,fontWeight:700},children:":"}),r.jsx("input",{type:"number",min:0,max:59,value:m,onChange:d=>W(Number(d.target.value)),"aria-label":"minutes",style:u})]}),r.jsx("span",{style:{fontSize:12,color:"#fff",background:"#3b82f6",borderRadius:999,padding:"2px 10px"},children:A})]})},s={render:c(),parameters:o("<TimePicker />"),args:{isRange:!1,initialValue:new Date(new Date().setHours(9,30,0,0)),calendar:"gregory",config:i}},n={render:c({use12Hours:!0}),parameters:o("<TimePicker use12Hours />"),args:{isRange:!1,initialValue:new Date(new Date().setHours(14,15,0,0)),calendar:"gregory",config:i}},a={render:c({showSeconds:!0}),parameters:o("<TimePicker showSeconds />"),args:{isRange:!1,initialValue:new Date(new Date().setHours(9,30,45,0)),calendar:"gregory",config:i}},t={render:c({renderer:e=>r.jsx(F,{...e})}),parameters:o(`{/* MyCustomClock is your own component built from the renderer args */}
<TimePicker renderer={(args) => <MyCustomClock {...args} />} />`),args:{isRange:!1,initialValue:new Date(new Date().setHours(9,30,0,0)),calendar:"gregory",config:i}};var l,p,g,y,f;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: withTimePicker(),
  parameters: timeSource(\`<TimePicker />\`),
  args: {
    isRange: false,
    initialValue: new Date(new Date().setHours(9, 30, 0, 0)),
    calendar: "gregory",
    config: baseConfig
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source},description:{story:`Default 24-hour clock with hours + minutes. Pick a day, then step the time.
Changing the day keeps the chosen time.`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.description}}};var h,w,k,b,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: withTimePicker({
    use12Hours: true
  }),
  parameters: timeSource(\`<TimePicker use12Hours />\`),
  args: {
    isRange: false,
    initialValue: new Date(new Date().setHours(14, 15, 0, 0)),
    calendar: "gregory",
    config: baseConfig
  }
}`,...(k=(w=n.parameters)==null?void 0:w.docs)==null?void 0:k.source},description:{story:"12-hour clock with an AM/PM toggle.",...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.description}}};var D,S,C,T,H;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: withTimePicker({
    showSeconds: true
  }),
  parameters: timeSource(\`<TimePicker showSeconds />\`),
  args: {
    isRange: false,
    initialValue: new Date(new Date().setHours(9, 30, 45, 0)),
    calendar: "gregory",
    config: baseConfig
  }
}`,...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source},description:{story:"Hours, minutes and seconds.",...(H=(T=a.parameters)==null?void 0:T.docs)==null?void 0:H.description}}};var P,R,M,j,v;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: withTimePicker({
    renderer: args => <MyCustomClock {...args} />
  }),
  parameters: timeSource(\`{/* MyCustomClock is your own component built from the renderer args */}
<TimePicker renderer={(args) => <MyCustomClock {...args} />} />\`),
  args: {
    isRange: false,
    initialValue: new Date(new Date().setHours(9, 30, 0, 0)),
    calendar: "gregory",
    config: baseConfig
  }
}`,...(M=(R=t.parameters)==null?void 0:R.docs)==null?void 0:M.source},description:{story:"A fully custom UI via the `renderer` prop — the consumer renders its own\ncomponent (here, editable number inputs) and the library only supplies the\ntime parts and setters.",...(v=(j=t.parameters)==null?void 0:j.docs)==null?void 0:v.description}}};const J=["HoursAndMinutes","TwelveHour","WithSeconds","CustomRenderer"];export{t as CustomRenderer,s as HoursAndMinutes,n as TwelveHour,a as WithSeconds,J as __namedExportsOrder,G as default};
