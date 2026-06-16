import{R as f,a as h,b as D}from"./_shared-zEKgvyHj.js";import{b as p}from"./constants-CPkIZN1Z.js";import"./jsx-runtime-DiifA5Mr.js";import"./iframe-CV9cx8ZP.js";import"./preload-helper-C1FmrZbK.js";import"./WeekDays-eBEpsr57.js";const U={title:"Example/Calendar",...p},a={render:D,args:{isRange:!1,initialValue:new Date,calendar:"gregory",config:{locale:"en-US",weekStartsOn:"monday",showOtherDays:!1,otherDaysSelectable:!1,weekdayFormat:"short",dayFormat:"numeric",weekends:["saturday","sunday"],weekendSelectable:!0}}},n={render:D,args:{isRange:!0,initialValue:[new Date("2024-02-06"),new Date("2024-02-08")],calendar:"gregory",config:{locale:"en-US",weekStartsOn:"monday",showOtherDays:!1,otherDaysSelectable:!1,weekdayFormat:"narrow",dayFormat:"numeric",weekends:["saturday","sunday"]}}},e={render:h,args:{isRange:!1,initialValue:new Date,calendar:"gregory",config:{locale:"en-US",weekStartsOn:"monday",showOtherDays:!1,otherDaysSelectable:!1,weekdayFormat:"short",dayFormat:"numeric",weekends:["saturday","sunday"],weekendSelectable:!0}}},r={render:f,args:{isRange:!1,initialValue:new Date("2024-02-06"),calendar:"gregory",config:{locale:"en-US",weekStartsOn:"monday",showOtherDays:!1,otherDaysSelectable:!1,weekdayFormat:"short",dayFormat:"numeric",weekends:["saturday","sunday"],weekendSelectable:!0}}};var t,s,o;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: RenderDatePicker,
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
}`,...(o=(s=a.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var l,d,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: RenderDatePicker,
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
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var i,m,y,u,w;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: RenderCustomIconsDatePicker,
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
}`,...(y=(m=e.parameters)==null?void 0:m.docs)==null?void 0:y.source},description:{story:"Replace the default header chevrons with your own icons via `Header`'s\n`leftIcon` / `rightIcon` props (any `ReactNode` — SVG, emoji, icon component).",...(w=(u=e.parameters)==null?void 0:u.docs)==null?void 0:w.description}}};var g,S,k;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: RenderControlledDatePicker,
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
}`,...(k=(S=r.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const P=["SingleSelection","RangeSelection","CustomIcons","ControlledComponent"];export{r as ControlledComponent,e as CustomIcons,n as RangeSelection,a as SingleSelection,P as __namedExportsOrder,U as default};
