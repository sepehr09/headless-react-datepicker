import{R as D,a as f,b as k}from"./_shared-CyfpQXnE.js";import{b as R}from"./constants-JDnWQe5j.js";import{c as b,b as p,s as F}from"./_source-CMrf7hAM.js";import"./jsx-runtime-5SbWow9j.js";import"./iframe-Ib4hGz91.js";import"./preload-helper-C1FmrZbK.js";import"./WeekDays-CwwOFGCo.js";const O=F(["Title","Header","WeekDays","DaySlots"],`<Title />
<Header
  leftIcon={
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  }
  rightIcon={
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  }
/>
<WeekDays />
<DaySlots />`),L={title:"Example/Calendar",...R},a={render:k,parameters:p,args:{isRange:!1,initialValue:new Date,calendar:"gregory",config:{locale:"en-US",weekStartsOn:"monday",showOtherDays:!1,otherDaysSelectable:!1,weekdayFormat:"short",dayFormat:"numeric",weekends:["saturday","sunday"],weekendSelectable:!0}}},r={render:k,parameters:p,args:{isRange:!0,initialValue:[new Date("2024-02-06"),new Date("2024-02-08")],calendar:"gregory",config:{locale:"en-US",weekStartsOn:"monday",showOtherDays:!1,otherDaysSelectable:!1,weekdayFormat:"narrow",dayFormat:"numeric",weekends:["saturday","sunday"]}}},e={render:f,parameters:O,args:{isRange:!1,initialValue:new Date,calendar:"gregory",config:{locale:"en-US",weekStartsOn:"monday",showOtherDays:!1,otherDaysSelectable:!1,weekdayFormat:"short",dayFormat:"numeric",weekends:["saturday","sunday"],weekendSelectable:!0}}},n={render:D,parameters:b,args:{isRange:!1,initialValue:new Date("2024-02-06"),calendar:"gregory",config:{locale:"en-US",weekStartsOn:"monday",showOtherDays:!1,otherDaysSelectable:!1,weekdayFormat:"short",dayFormat:"numeric",weekends:["saturday","sunday"],weekendSelectable:!0}}};var t,o,s;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: RenderDatePicker,
  parameters: basicSource,
  args: {
    isRange: false,
    initialValue: new Date(),
    calendar: "gregory",
    config: {
      locale: "en-US",
      weekStartsOn: "monday",
      showOtherDays: false,
      otherDaysSelectable: false,
      weekdayFormat: "short",
      dayFormat: "numeric",
      weekends: ["saturday", "sunday"],
      weekendSelectable: true

      // yearRangeFrom: 1330,
      // yearRangeTo: 1400,
      // minDate: new Date("2024-01-01T00:00:00.000Z"),
      // maxDate: new Date(),
    }
  }
}`,...(s=(o=a.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var l,c,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: RenderDatePicker,
  parameters: basicSource,
  args: {
    isRange: true,
    initialValue: [new Date("2024-02-06"), new Date("2024-02-08")],
    calendar: "gregory",
    config: {
      locale: "en-US",
      weekStartsOn: "monday",
      showOtherDays: false,
      otherDaysSelectable: false,
      weekdayFormat: "narrow",
      dayFormat: "numeric",
      weekends: ["saturday", "sunday"]
    }
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var i,m,u,y,g;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: RenderCustomIconsDatePicker,
  parameters: customIconsSource,
  args: {
    isRange: false,
    initialValue: new Date(),
    calendar: "gregory",
    config: {
      locale: "en-US",
      weekStartsOn: "monday",
      showOtherDays: false,
      otherDaysSelectable: false,
      weekdayFormat: "short",
      dayFormat: "numeric",
      weekends: ["saturday", "sunday"],
      weekendSelectable: true
    }
  }
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source},description:{story:"Replace the default header chevrons with your own icons via `Header`'s\n`leftIcon` / `rightIcon` props (any `ReactNode` — SVG, emoji, icon component).",...(g=(y=e.parameters)==null?void 0:y.docs)==null?void 0:g.description}}};var w,S,h;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: RenderControlledDatePicker,
  parameters: controlledSource,
  args: {
    isRange: false,
    initialValue: new Date("2024-02-06"),
    calendar: "gregory",
    config: {
      locale: "en-US",
      weekStartsOn: "monday",
      showOtherDays: false,
      otherDaysSelectable: false,
      weekdayFormat: "short",
      dayFormat: "numeric",
      weekends: ["saturday", "sunday"],
      weekendSelectable: true
    }
  }
}`,...(h=(S=n.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const T=["SingleSelection","RangeSelection","CustomIcons","ControlledComponent"];export{n as ControlledComponent,e as CustomIcons,r as RangeSelection,a as SingleSelection,T as __namedExportsOrder,L as default};
