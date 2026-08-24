import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{e as z}from"./_shared--cERf0Cd.js";import{b as E}from"./constants-COfiGr61.js";import{c as o}from"./dates-Brrr1cyH.js";import{s as I}from"./_source-CMrf7hAM.js";import"./iframe-CfoPbdHn.js";import"./preload-helper-C1FmrZbK.js";const i=e=>I(["Title","Header","WeekDays","DaySlots","TimePicker"],`<Title />
<Header />
<WeekDays />
<DaySlots />
${e}`),G={title:"Example/TimePicker",...E},c={locale:"en-US",weekStartsOn:"monday",weekdayFormat:"short",dayFormat:"numeric"},m=e=>l=>z({...l,timePickerProps:e}),F=({hours:e,minutes:l,setHours:W,setMinutes:A,formatted:L})=>{const u={width:56,padding:"6px 8px",textAlign:"center",fontSize:18,fontWeight:700,border:"1px solid #d4d4d8",borderRadius:8};return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8,padding:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("input",{type:"number",min:0,max:23,value:e,onChange:d=>W(Number(d.target.value)),"aria-label":"hours",style:u}),r.jsx("span",{style:{fontSize:18,fontWeight:700},children:":"}),r.jsx("input",{type:"number",min:0,max:59,value:l,onChange:d=>A(Number(d.target.value)),"aria-label":"minutes",style:u})]}),r.jsx("span",{style:{fontSize:12,color:"#fff",background:"#3b82f6",borderRadius:999,padding:"2px 10px"},children:L})]})},a={render:m(),parameters:i("<TimePicker />"),args:{isRange:!1,initialValue:o(2025,4,17,9,30),calendar:"gregory",config:c}},s={render:m({use12Hours:!0}),parameters:i("<TimePicker use12Hours />"),args:{isRange:!1,initialValue:o(2025,4,17,14,15),calendar:"gregory",config:c}},n={render:m({showSeconds:!0}),parameters:i("<TimePicker showSeconds />"),args:{isRange:!1,initialValue:o(2025,4,17,9,30,45),calendar:"gregory",config:c}},t={render:m({renderer:e=>r.jsx(F,{...e})}),parameters:i(`{/* MyCustomClock is your own component built from the renderer args */}
<TimePicker renderer={(args) => <MyCustomClock {...args} />} />`),args:{isRange:!1,initialValue:o(2025,4,17,9,30),calendar:"gregory",config:c}};var p,g,f,y,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: withTimePicker(),
  parameters: timeSource(\`<TimePicker />\`),
  args: {
    isRange: false,
    initialValue: createLocalDate(2025, 4, 17, 9, 30),
    calendar: "gregory",
    config: baseConfig
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source},description:{story:`Default 24-hour clock with hours + minutes. Pick a day, then step the time.
Changing the day keeps the chosen time.`,...(h=(y=a.parameters)==null?void 0:y.docs)==null?void 0:h.description}}};var k,b,x,S,C;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: withTimePicker({
    use12Hours: true
  }),
  parameters: timeSource(\`<TimePicker use12Hours />\`),
  args: {
    isRange: false,
    initialValue: createLocalDate(2025, 4, 17, 14, 15),
    calendar: "gregory",
    config: baseConfig
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source},description:{story:"12-hour clock with an AM/PM toggle.",...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.description}}};var T,w,P,R,D;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: withTimePicker({
    showSeconds: true
  }),
  parameters: timeSource(\`<TimePicker showSeconds />\`),
  args: {
    isRange: false,
    initialValue: createLocalDate(2025, 4, 17, 9, 30, 45),
    calendar: "gregory",
    config: baseConfig
  }
}`,...(P=(w=n.parameters)==null?void 0:w.docs)==null?void 0:P.source},description:{story:"Hours, minutes and seconds.",...(D=(R=n.parameters)==null?void 0:R.docs)==null?void 0:D.description}}};var H,M,j,v,V;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: withTimePicker({
    renderer: args => <MyCustomClock {...args} />
  }),
  parameters: timeSource(\`{/* MyCustomClock is your own component built from the renderer args */}
<TimePicker renderer={(args) => <MyCustomClock {...args} />} />\`),
  args: {
    isRange: false,
    initialValue: createLocalDate(2025, 4, 17, 9, 30),
    calendar: "gregory",
    config: baseConfig
  }
}`,...(j=(M=t.parameters)==null?void 0:M.docs)==null?void 0:j.source},description:{story:"A fully custom UI via the `renderer` prop — the consumer renders its own\ncomponent (here, editable number inputs) and the library only supplies the\ntime parts and setters.",...(V=(v=t.parameters)==null?void 0:v.docs)==null?void 0:V.description}}};const J=["HoursAndMinutes","TwelveHour","WithSeconds","CustomRenderer"];export{t as CustomRenderer,a as HoursAndMinutes,s as TwelveHour,n as WithSeconds,J as __namedExportsOrder,G as default};
