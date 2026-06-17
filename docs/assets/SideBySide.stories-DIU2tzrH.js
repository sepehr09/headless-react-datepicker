import{d as l}from"./_shared-CyfpQXnE.js";import{r as c}from"./rtlDecorator-D-M7hdcy.js";import{b as m}from"./constants-JDnWQe5j.js";import{s as y}from"./_source-CMrf7hAM.js";import"./jsx-runtime-5SbWow9j.js";import"./iframe-Ib4hGz91.js";import"./preload-helper-C1FmrZbK.js";import"./WeekDays-CwwOFGCo.js";const i=y(["Title","Header","WeekDays","DaySlots"],`{/* one header navigates both months (2 months per click) */}
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
</div>`),k={title:"Example/Side by Side Calendars",...m},e={render:l,parameters:i,args:{isRange:!0,initialValue:[new Date("2024-02-06"),new Date("2024-03-10")],calendar:"gregory",config:{locale:"en-US",weekStartsOn:"monday",showOtherDays:!1,otherDaysSelectable:!1,weekdayFormat:"short",dayFormat:"numeric",weekends:["saturday","sunday"],weekendSelectable:!0}}},a={render:l,decorators:[c],parameters:i,args:{isRange:!0,initialValue:[new Date("2025-04-17T00:00:00"),new Date("2025-05-20T00:00:00")],calendar:"persian",config:{locale:"fa-IR",weekStartsOn:"saturday",showOtherDays:!1,otherDaysSelectable:!1,weekdayFormat:"narrow",dayFormat:"numeric",weekends:["thursday","friday"]}}};var r,n,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: RenderDualDatePicker,
  parameters: dualSource,
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
  parameters: dualSource,
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
}`,...(d=(o=a.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const O=["TwoCalendarsSideBySide","TwoCalendarsPersian"];export{a as TwoCalendarsPersian,e as TwoCalendarsSideBySide,O as __namedExportsOrder,k as default};
