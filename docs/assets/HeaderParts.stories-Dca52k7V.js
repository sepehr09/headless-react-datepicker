import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{D as i,H as l,a as c,b as m,d as h,W as p,e as y,c as u}from"./dates-Brrr1cyH.js";import{b as x}from"./constants-COfiGr61.js";import{C as g}from"./_shared--cERf0Cd.js";import{s as v}from"./_source-CMrf7hAM.js";import"./iframe-CfoPbdHn.js";import"./preload-helper-C1FmrZbK.js";const f=v(["HeaderMonthSelect","HeaderYearSelect","HeaderPrevButton","HeaderNextButton","WeekDays","DaySlots"],`<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
  {/* left: month + year dropdowns */}
  <div style={{ display: "flex", gap: 4 }}>
    <HeaderMonthSelect />
    <HeaderYearSelect />
  </div>

  {/* right: both arrows next to each other */}
  <div style={{ display: "flex", gap: 4 }}>
    <HeaderPrevButton />
    <HeaderNextButton />
  </div>
</div>
<WeekDays />
<DaySlots />`),B={title:"Example/Calendar/Header",...x,parameters:{docs:{description:{component:"The pieces that make up `Header` — the prev/next **arrows** and the **month**\nand **year** `<select>` dropdowns — are also exported on their own as\n`HeaderPrevButton`, `HeaderNextButton`, `HeaderMonthSelect` and\n`HeaderYearSelect`.\n\nRender them individually to compose a header in **any order / layout** while\nthe standard `Header` keeps working unchanged. Every part reads from the same\nshared `DatePickerProvider` state and uses the same `rhmdp-header__*` class\nhooks, so existing CSS / theming carries over.\n\nThe example below puts the month & year on the **left** and both arrows\ntogether on the **right**."}}}},H={isRange:!1,initialValue:u(2025,4,17),calendar:"gregory",config:{locale:"en-US",weekStartsOn:"monday",weekdayFormat:"short",dayFormat:"numeric",weekends:["saturday","sunday"],weekendSelectable:!0}},t={name:"Custom layout (selects left, arrows right)",parameters:f,render:d=>e.jsx(g,{children:e.jsxs(i,{...d,children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},children:[e.jsxs("div",{style:{display:"flex",gap:4},children:[e.jsx(l,{}),e.jsx(c,{})]}),e.jsxs("div",{style:{display:"flex",gap:4},children:[e.jsx(m,{}),e.jsx(h,{})]})]}),e.jsx(p,{}),e.jsx(y,{})]})}),args:H};var a,r,s,n,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Custom layout (selects left, arrows right)",
  parameters: headerCustomLayoutSource,
  render: args => <Card>
      <DatePickerProvider {...args}>
        <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 16
      }}>
          {/* left: month + year dropdowns */}
          <div style={{
          display: "flex",
          gap: 4
        }}>
            <HeaderMonthSelect />
            <HeaderYearSelect />
          </div>

          {/* right: both arrows next to each other */}
          <div style={{
          display: "flex",
          gap: 4
        }}>
            <HeaderPrevButton />
            <HeaderNextButton />
          </div>
        </div>
        <WeekDays />
        <DaySlots />
      </DatePickerProvider>
    </Card>,
  args: baseArgs
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source},description:{story:`A custom header layout built from the standalone parts: month + year selects
on the left, prev/next arrows side-by-side on the right.`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.description}}};const P=["CustomLayout"];export{t as CustomLayout,P as __namedExportsOrder,B as default};
