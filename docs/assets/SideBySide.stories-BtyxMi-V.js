import{d as i}from"./_shared--cERf0Cd.js";import{r as m}from"./rtlDecorator-DBRyLA-X.js";import{b as y}from"./constants-COfiGr61.js";import{c as r}from"./dates-Brrr1cyH.js";import{s as u}from"./_source-CMrf7hAM.js";import"./jsx-runtime-BjG_zV1W.js";import"./iframe-CfoPbdHn.js";import"./preload-helper-C1FmrZbK.js";const c=u(["Title","Header","WeekDays","DaySlots"],`{/* one header navigates both months (2 months per click) */}
<Header navigationStep={2} />

<div style={{ display: "flex", gap: 24 }}>
  {/* current month */}
  <div>
    <Title />
    <WeekDays />
    <DaySlots />
  </div>

  {/* next month */}
  <div>
    <Title monthOffset={1} />
    <WeekDays />
    <DaySlots monthOffset={1} />
  </div>
</div>`),O={title:"Example/Side by Side Calendars",...y},e={render:i,parameters:c,args:{isRange:!0,initialValue:[r(2024,2,6),r(2024,3,10)],calendar:"gregory",config:{locale:"en-US",weekStartsOn:"monday",showOtherDays:!1,otherDaysSelectable:!1,weekdayFormat:"short",dayFormat:"numeric",weekends:["saturday","sunday"],weekendSelectable:!0}}},a={render:i,decorators:[m],parameters:c,args:{isRange:!0,initialValue:[r(2025,4,17),r(2025,5,20)],calendar:"persian",config:{locale:"fa-IR",weekStartsOn:"saturday",showOtherDays:!1,otherDaysSelectable:!1,weekdayFormat:"narrow",dayFormat:"numeric",weekends:["thursday","friday"]}}};var t,n,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: RenderDualDatePicker,
  parameters: dualSource,
  args: {
    isRange: true,
    initialValue: [createLocalDate(2024, 2, 6), createLocalDate(2024, 3, 10)],
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
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var o,d,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: RenderDualDatePicker,
  decorators: [rtlDecorator],
  parameters: dualSource,
  args: {
    isRange: true,
    initialValue: [createLocalDate(2025, 4, 17), createLocalDate(2025, 5, 20)],
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
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const b=["TwoCalendarsSideBySide","TwoCalendarsPersian"];export{a as TwoCalendarsPersian,e as TwoCalendarsSideBySide,b as __namedExportsOrder,O as default};
