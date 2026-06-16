import{j as e}from"./jsx-runtime-DiifA5Mr.js";import{D as i,H as l,a as c,b as m,c as h,W as p,d as y}from"./WeekDays-eBEpsr57.js";import{b as u}from"./constants-CPkIZN1Z.js";import{C as x}from"./_shared-zEKgvyHj.js";import"./iframe-CV9cx8ZP.js";import"./preload-helper-C1FmrZbK.js";const S={title:"Example/Calendar/Header",...u,parameters:{docs:{description:{component:"The pieces that make up `Header` — the prev/next **arrows** and the **month**\nand **year** `<select>` dropdowns — are also exported on their own as\n`HeaderPrevButton`, `HeaderNextButton`, `HeaderMonthSelect` and\n`HeaderYearSelect`.\n\nRender them individually to compose a header in **any order / layout** while\nthe standard `Header` keeps working unchanged. Every part reads from the same\nshared `DatePickerProvider` state and uses the same `rhmdp-header__*` class\nhooks, so existing CSS / theming carries over.\n\nThe example below puts the month & year on the **left** and both arrows\ntogether on the **right**."}}}},g={isRange:!1,initialValue:new Date,calendar:"gregory",config:{locale:"en-US",weekStartsOn:"monday",weekdayFormat:"short",dayFormat:"numeric",weekends:["saturday","sunday"],weekendSelectable:!0}},t={name:"Custom layout (selects left, arrows right)",render:d=>e.jsx(x,{children:e.jsxs(i,{...d,children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},children:[e.jsxs("div",{style:{display:"flex",gap:4},children:[e.jsx(l,{}),e.jsx(c,{})]}),e.jsxs("div",{style:{display:"flex",gap:4},children:[e.jsx(m,{}),e.jsx(h,{})]})]}),e.jsx(p,{}),e.jsx(y,{})]})}),args:g};var a,r,n,s,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Custom layout (selects left, arrows right)",
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
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source},description:{story:`A custom header layout built from the standalone parts: month + year selects
on the left, prev/next arrows side-by-side on the right.`,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.description}}};const b=["CustomLayout"];export{t as CustomLayout,b as __namedExportsOrder,S as default};
