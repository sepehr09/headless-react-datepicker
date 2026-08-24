import{R as D,a as R,b as w}from"./_shared--cERf0Cd.js";import{b}from"./constants-COfiGr61.js";import{c as a}from"./dates-Brrr1cyH.js";import{c as F,b as f,s as O}from"./_source-CMrf7hAM.js";import"./jsx-runtime-BjG_zV1W.js";import"./iframe-CfoPbdHn.js";import"./preload-helper-C1FmrZbK.js";const C=O(["Title","Header","WeekDays","DaySlots"],`<Title />
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
<DaySlots />`),W={title:"Example/Calendar",...b},r={render:w,parameters:f,args:{isRange:!1,initialValue:a(2025,4,17),calendar:"gregory",config:{locale:"en-US",weekStartsOn:"monday",showOtherDays:!1,otherDaysSelectable:!1,weekdayFormat:"short",dayFormat:"numeric",weekends:["saturday","sunday"],weekendSelectable:!0}}},n={render:w,parameters:f,args:{isRange:!0,initialValue:[a(2024,2,6),a(2024,2,8)],calendar:"gregory",config:{locale:"en-US",weekStartsOn:"monday",showOtherDays:!1,otherDaysSelectable:!1,weekdayFormat:"narrow",dayFormat:"numeric",weekends:["saturday","sunday"]}}},e={render:R,parameters:C,args:{isRange:!1,initialValue:a(2025,4,17),calendar:"gregory",config:{locale:"en-US",weekStartsOn:"monday",showOtherDays:!1,otherDaysSelectable:!1,weekdayFormat:"short",dayFormat:"numeric",weekends:["saturday","sunday"],weekendSelectable:!0}}},t={render:D,parameters:F,args:{isRange:!1,initialValue:a(2024,2,6),calendar:"gregory",config:{locale:"en-US",weekStartsOn:"monday",showOtherDays:!1,otherDaysSelectable:!1,weekdayFormat:"short",dayFormat:"numeric",weekends:["saturday","sunday"],weekendSelectable:!0}}};var o,s,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: RenderDatePicker,
  parameters: basicSource,
  args: {
    isRange: false,
    initialValue: createLocalDate(2025, 4, 17),
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
      // minDate: createLocalDate(2024, 1, 1),
      // maxDate: createLocalDate(2025, 4, 30),
    }
  }
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var l,d,i;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: RenderDatePicker,
  parameters: basicSource,
  args: {
    isRange: true,
    initialValue: [createLocalDate(2024, 2, 6), createLocalDate(2024, 2, 8)],
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
}`,...(i=(d=n.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,u,y,g,S;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: RenderCustomIconsDatePicker,
  parameters: customIconsSource,
  args: {
    isRange: false,
    initialValue: createLocalDate(2025, 4, 17),
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
}`,...(y=(u=e.parameters)==null?void 0:u.docs)==null?void 0:y.source},description:{story:"Replace the default header chevrons with your own icons via `Header`'s\n`leftIcon` / `rightIcon` props (any `ReactNode` — SVG, emoji, icon component).",...(S=(g=e.parameters)==null?void 0:g.docs)==null?void 0:S.description}}};var h,k,p;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: RenderControlledDatePicker,
  parameters: controlledSource,
  args: {
    isRange: false,
    initialValue: createLocalDate(2024, 2, 6),
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
}`,...(p=(k=t.parameters)==null?void 0:k.docs)==null?void 0:p.source}}};const j=["SingleSelection","RangeSelection","CustomIcons","ControlledComponent"];export{t as ControlledComponent,e as CustomIcons,n as RangeSelection,r as SingleSelection,j as __namedExportsOrder,W as default};
