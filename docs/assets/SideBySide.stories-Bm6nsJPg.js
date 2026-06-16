import{d as l}from"./_shared-zEKgvyHj.js";import{r as i}from"./rtlDecorator-Bo4x5_X3.js";import{b as c}from"./constants-CPkIZN1Z.js";import"./jsx-runtime-DiifA5Mr.js";import"./iframe-CV9cx8ZP.js";import"./preload-helper-C1FmrZbK.js";import"./WeekDays-eBEpsr57.js";const S={title:"Example/Side by Side Calendars",...c},e={render:l,args:{isRange:!0,initialValue:[new Date("2024-02-06"),new Date("2024-03-10")],calendar:"gregory",config:{locale:"en-US",weekStartsOn:"monday",showOtherDays:!1,otherDaysSelectable:!1,weekdayFormat:"short",dayFormat:"numeric",weekends:["saturday","sunday"],weekendSelectable:!0}}},a={render:l,decorators:[i],args:{isRange:!0,initialValue:[new Date("2025-04-17T00:00:00"),new Date("2025-05-20T00:00:00")],calendar:"persian",config:{locale:"fa-IR",weekStartsOn:"saturday",showOtherDays:!1,otherDaysSelectable:!1,weekdayFormat:"narrow",dayFormat:"numeric",weekends:["thursday","friday"]}}};var r,n,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: RenderDualDatePicker,
  args: {
    isRange: true,
    initialValue: [new Date("2024-02-06"), new Date("2024-03-10")],
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
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var s,o,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: RenderDualDatePicker,
  decorators: [rtlDecorator],
  args: {
    isRange: true,
    initialValue: [new Date("2025-04-17T00:00:00"), new Date("2025-05-20T00:00:00")],
    calendar: "persian",
    config: {
      locale: "fa-IR",
      weekStartsOn: "saturday",
      showOtherDays: false,
      otherDaysSelectable: false,
      weekdayFormat: "narrow",
      dayFormat: "numeric",
      weekends: ["thursday", "friday"]
    }
  }
}`,...(d=(o=a.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const g=["TwoCalendarsSideBySide","TwoCalendarsPersian"];export{a as TwoCalendarsPersian,e as TwoCalendarsSideBySide,g as __namedExportsOrder,S as default};
