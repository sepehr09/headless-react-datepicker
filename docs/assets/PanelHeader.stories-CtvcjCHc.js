import{j as e}from"./jsx-runtime-DiifA5Mr.js";import{D as g,P as w,e as f,f as k,g as x,h as b,W as D,d as S}from"./WeekDays-eBEpsr57.js";import{c as p,C as H}from"./_shared-zEKgvyHj.js";import{r as v}from"./rtlDecorator-Bo4x5_X3.js";import{b as j}from"./constants-CPkIZN1Z.js";import"./iframe-CV9cx8ZP.js";import"./preload-helper-C1FmrZbK.js";const V={title:"Example/Calendar/Panel Header",...j},r={render:p,args:{isRange:!1,initialValue:new Date,calendar:"gregory",config:{locale:"en-US",weekStartsOn:"monday",showOtherDays:!1,otherDaysSelectable:!1,weekdayFormat:"short",dayFormat:"numeric",weekends:["saturday","sunday"],weekendSelectable:!0}}},n={render:p,decorators:[v],args:{isRange:!1,initialValue:new Date,calendar:"persian",config:{locale:"fa-IR",weekStartsOn:"saturday",showOtherDays:!1,otherDaysSelectable:!1,weekdayFormat:"narrow",dayFormat:"numeric",weekends:["thursday","friday"],weekendSelectable:!0}}},B={isRange:!1,initialValue:new Date,calendar:"gregory",config:{locale:"en-US",weekStartsOn:"monday",weekdayFormat:"short",dayFormat:"numeric",weekends:["saturday","sunday"],weekendSelectable:!0}},a={name:"Custom layout (label left, arrows right)",render:P=>e.jsx(H,{children:e.jsx(g,{...P,children:e.jsxs(w,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},children:[e.jsx(f,{}),e.jsxs("div",{style:{display:"flex",gap:4},children:[e.jsx(k,{}),e.jsx(x,{})]})]}),e.jsxs(b,{children:[e.jsx(D,{}),e.jsx(S,{})]})]})})}),args:B};var t,s,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: RenderPanelDatePicker,
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
}`,...(o=(s=r.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var l,d,i;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: RenderPanelDatePicker,
  decorators: [rtlDecorator],
  args: {
    isRange: false,
    initialValue: new Date(),
    calendar: "persian",
    config: {
      locale: "fa-IR",
      weekStartsOn: "saturday",
      showOtherDays: false,
      otherDaysSelectable: false,
      weekdayFormat: "narrow",
      dayFormat: "numeric",
      weekends: ["thursday", "friday"],
      weekendSelectable: true
    }
  }
}`,...(i=(d=n.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var c,m,y,h,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Custom layout (label left, arrows right)",
  render: args => <Card>
      <DatePickerProvider {...args}>
        <PanelHeaderProvider>
          <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16
        }}>
            {/* left: month / year label */}
            <PanelHeaderLabel />

            {/* right: both arrows next to each other */}
            <div style={{
            display: "flex",
            gap: 4
          }}>
              <PanelHeaderPrevButton />
              <PanelHeaderNextButton />
            </div>
          </div>

          <PanelHeaderBody>
            <WeekDays />
            <DaySlots />
          </PanelHeaderBody>
        </PanelHeaderProvider>
      </DatePickerProvider>
    </Card>,
  args: partsArgs
}`,...(y=(m=a.parameters)==null?void 0:m.docs)==null?void 0:y.source},description:{story:"The pieces of `PanelHeader` — the prev/next **arrows**, the center **label**\n(month/year that toggles the views) and the **body** (day content swapped for\nthe month/year grids) — are also exported on their own as\n`PanelHeaderPrevButton`, `PanelHeaderNextButton`, `PanelHeaderLabel` and\n`PanelHeaderBody`.\n\nBecause these parts share local view state (days / months / years + paging),\nwrap them in a `PanelHeaderProvider`. Inside it you can lay them out in **any\norder**; the default `PanelHeader` is just this same composition. Every part\nkeeps the same `rhmdp-panelHeader__*` class hooks, so existing CSS / theming\ncarries over.\n\nThe example below puts the month/year **label on the left** and both arrows\ntogether on the **right**. Clicking the label still opens the month/year grids\nin the body, just like the default `PanelHeader`.",...(u=(h=a.parameters)==null?void 0:h.docs)==null?void 0:u.description}}};const E=["PanelMonthYearPicker","PanelMonthYearPickerPersian","CustomLayout"];export{a as CustomLayout,r as PanelMonthYearPicker,n as PanelMonthYearPickerPersian,E as __namedExportsOrder,V as default};
