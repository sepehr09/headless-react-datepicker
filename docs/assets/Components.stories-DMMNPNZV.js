import{j as e}from"./jsx-runtime-DiifA5Mr.js";import{D as a,d as Le,H as Re,c as Ce,i as Fe,b as Ie,a as Ue,P as H,e as Ye,h as _e,W as Ee,g as Ve,j as qe,f as ze,k as Ge,T as Je}from"./WeekDays-eBEpsr57.js";import{b as Ke}from"./constants-CPkIZN1Z.js";import"./iframe-CV9cx8ZP.js";import"./preload-helper-C1FmrZbK.js";const rr={title:"Example/Components",...Ke,parameters:{docs:{description:{component:`The library is **headless** and built from small, independent pieces. Every
component below shares a single \`DatePickerProvider\` for state, so you can
compose just the parts you need.

This section renders each component **on its own** so you can see at a glance
what every building block looks like and does. Compose them together (see the
\`Calendar\` section) to build a full date picker.`}}}},n={isRange:!1,initialValue:new Date,calendar:"gregory",config:{locale:"en-US",weekStartsOn:"monday",showOtherDays:!1,otherDaysSelectable:!1,weekdayFormat:"short",dayFormat:"numeric",weekends:["saturday","sunday"],weekendSelectable:!0}},s={name:"Title",render:r=>e.jsx(a,{...r,children:e.jsx(Je,{})}),args:n},t={name:"Header",render:r=>e.jsx(a,{...r,children:e.jsx(Fe,{})}),args:n},o={name:"HeaderPrevButton",render:r=>e.jsx(a,{...r,children:e.jsx(Ie,{})}),args:n},d={name:"HeaderNextButton",render:r=>e.jsx(a,{...r,children:e.jsx(Ce,{})}),args:n},i={name:"HeaderMonthSelect",render:r=>e.jsx(a,{...r,children:e.jsx(Re,{})}),args:n},c={name:"HeaderYearSelect",render:r=>e.jsx(a,{...r,children:e.jsx(Ue,{})}),args:n},l={name:"Panel Header",render:r=>e.jsx(a,{...r,children:e.jsx(qe,{})}),args:n},m={name:"PanelHeaderLabel",render:r=>e.jsx(a,{...r,children:e.jsx(H,{children:e.jsx(Ye,{})})}),args:n},P={name:"PanelHeaderPrevButton",render:r=>e.jsx(a,{...r,children:e.jsx(H,{children:e.jsx(ze,{})})}),args:n},p={name:"PanelHeaderNextButton",render:r=>e.jsx(a,{...r,children:e.jsx(H,{children:e.jsx(Ve,{})})}),args:n},g={name:"PanelHeaderBody",render:r=>e.jsx(a,{...r,children:e.jsxs(H,{children:[e.jsx(Ye,{}),e.jsxs(_e,{children:[e.jsx(Ee,{}),e.jsx(Le,{})]})]})}),args:n},h={name:"WeekDays",render:r=>e.jsx(a,{...r,children:e.jsx(Ee,{})}),args:n},y={name:"DaySlots",render:r=>e.jsx(a,{...r,children:e.jsx(Le,{})}),args:n},u={name:"TimePicker",render:r=>e.jsx(a,{...r,children:e.jsx(Ge,{showSeconds:!0,use12Hours:!0})}),args:n};var v,k,x,D,w;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Title",
  render: args => <DatePickerProvider {...args}>
      <Title />
    </DatePickerProvider>,
  args: baseArgs
}`,...(x=(k=s.parameters)==null?void 0:k.docs)==null?void 0:x.source},description:{story:"`Title` shows the current month and year for the calendar, formatted to the\nactive `locale` and `calendar`. Use `monthOffset` to show a neighbouring\nmonth's title (handy for side-by-side calendars).",...(w=(D=s.parameters)==null?void 0:D.docs)==null?void 0:w.description}}};var S,b,j,f,B;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Header",
  render: args => <DatePickerProvider {...args}>
      <Header />
    </DatePickerProvider>,
  args: baseArgs
}`,...(j=(b=t.parameters)==null?void 0:b.docs)==null?void 0:j.source},description:{story:"`Header` provides month/year navigation: prev/next arrows plus `<select>`\ndropdowns to jump to any month or year. Arrow icons and every dropdown can be\nfully restyled.",...(B=(f=t.parameters)==null?void 0:f.docs)==null?void 0:B.description}}};var O,T,A,N,W;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "HeaderPrevButton",
  render: args => <DatePickerProvider {...args}>
      <HeaderPrevButton />
    </DatePickerProvider>,
  args: baseArgs
}`,...(A=(T=o.parameters)==null?void 0:T.docs)==null?void 0:A.source},description:{story:'`HeaderPrevButton` is the standalone "previous month" arrow from `Header`.\nRender it on its own (in any layout) — it shares the same state and class\nhooks as the arrow inside `Header`.',...(W=(N=o.parameters)==null?void 0:N.docs)==null?void 0:W.description}}};var M,L,Y,E,R;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "HeaderNextButton",
  render: args => <DatePickerProvider {...args}>
      <HeaderNextButton />
    </DatePickerProvider>,
  args: baseArgs
}`,...(Y=(L=d.parameters)==null?void 0:L.docs)==null?void 0:Y.source},description:{story:'`HeaderNextButton` is the standalone "next month" arrow from `Header`.',...(R=(E=d.parameters)==null?void 0:E.docs)==null?void 0:R.description}}};var C,F,I,U,_;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "HeaderMonthSelect",
  render: args => <DatePickerProvider {...args}>
      <HeaderMonthSelect />
    </DatePickerProvider>,
  args: baseArgs
}`,...(I=(F=i.parameters)==null?void 0:F.docs)==null?void 0:I.source},description:{story:"`HeaderMonthSelect` is the standalone month `<select>` dropdown from `Header`.",...(_=(U=i.parameters)==null?void 0:U.docs)==null?void 0:_.description}}};var V,q,z,G,J;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "HeaderYearSelect",
  render: args => <DatePickerProvider {...args}>
      <HeaderYearSelect />
    </DatePickerProvider>,
  args: baseArgs
}`,...(z=(q=c.parameters)==null?void 0:q.docs)==null?void 0:z.source},description:{story:"`HeaderYearSelect` is the standalone year `<select>` dropdown from `Header`.",...(J=(G=c.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};var K,Q,X,Z,$;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Panel Header",
  render: args => <DatePickerProvider {...args}>
      <PanelHeader />
    </DatePickerProvider>,
  args: baseArgs
}`,...(X=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"`PanelHeader` is a self-contained alternative to `Header`. Instead of\ndropdowns it shows the month/year pickers **inside** the calendar area:\nclicking the month opens a 12-month grid, clicking the year opens a paginated\nyear grid. Wrap your day-view (`WeekDays` / `DaySlots`) as its children.",...($=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};var ee,re,ae,ne,se;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "PanelHeaderLabel",
  render: args => <DatePickerProvider {...args}>
      <PanelHeaderProvider>
        <PanelHeaderLabel />
      </PanelHeaderProvider>
    </DatePickerProvider>,
  args: baseArgs
}`,...(ae=(re=m.parameters)==null?void 0:re.docs)==null?void 0:ae.source},description:{story:"`PanelHeaderLabel` is the standalone center label from `PanelHeader` — the\nmonth/year text that toggles the month/year grids. The standalone panel parts\nshare view state, so wrap them in a `PanelHeaderProvider`.",...(se=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:se.description}}};var te,oe,de,ie,ce;P.parameters={...P.parameters,docs:{...(te=P.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: "PanelHeaderPrevButton",
  render: args => <DatePickerProvider {...args}>
      <PanelHeaderProvider>
        <PanelHeaderPrevButton />
      </PanelHeaderProvider>
    </DatePickerProvider>,
  args: baseArgs
}`,...(de=(oe=P.parameters)==null?void 0:oe.docs)==null?void 0:de.source},description:{story:'`PanelHeaderPrevButton` is the standalone "previous" arrow from `PanelHeader`\n(its action follows the active view). Wrap it in a `PanelHeaderProvider`.',...(ce=(ie=P.parameters)==null?void 0:ie.docs)==null?void 0:ce.description}}};var le,me,Pe,pe,ge;p.parameters={...p.parameters,docs:{...(le=p.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: "PanelHeaderNextButton",
  render: args => <DatePickerProvider {...args}>
      <PanelHeaderProvider>
        <PanelHeaderNextButton />
      </PanelHeaderProvider>
    </DatePickerProvider>,
  args: baseArgs
}`,...(Pe=(me=p.parameters)==null?void 0:me.docs)==null?void 0:Pe.source},description:{story:'`PanelHeaderNextButton` is the standalone "next" arrow from `PanelHeader`.\nWrap it in a `PanelHeaderProvider`.',...(ge=(pe=p.parameters)==null?void 0:pe.docs)==null?void 0:ge.description}}};var he,ye,ue,He,ve;g.parameters={...g.parameters,docs:{...(he=g.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: "PanelHeaderBody",
  render: args => <DatePickerProvider {...args}>
      <PanelHeaderProvider>
        <PanelHeaderLabel />
        <PanelHeaderBody>
          <WeekDays />
          <DaySlots />
        </PanelHeaderBody>
      </PanelHeaderProvider>
    </DatePickerProvider>,
  args: baseArgs
}`,...(ue=(ye=g.parameters)==null?void 0:ye.docs)==null?void 0:ue.source},description:{story:"`PanelHeaderBody` is the standalone body from `PanelHeader`: it shows the\nday-view content (its children) and swaps it for the month/year grids while\nnavigating. Wrap it in a `PanelHeaderProvider`.",...(ve=(He=g.parameters)==null?void 0:He.docs)==null?void 0:ve.description}}};var ke,xe,De,we,Se;h.parameters={...h.parameters,docs:{...(ke=h.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  name: "WeekDays",
  render: args => <DatePickerProvider {...args}>
      <WeekDays />
    </DatePickerProvider>,
  args: baseArgs
}`,...(De=(xe=h.parameters)==null?void 0:xe.docs)==null?void 0:De.source},description:{story:"`WeekDays` renders the weekday header row (Mon, Tue, …), formatted to the\nactive `locale`/`calendar` and respecting `weekStartsOn`. Each cell exposes\nweekday and weekend class hooks for styling.",...(Se=(we=h.parameters)==null?void 0:we.docs)==null?void 0:Se.description}}};var be,je,fe,Be,Oe;y.parameters={...y.parameters,docs:{...(be=y.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: "DaySlots",
  render: args => <DatePickerProvider {...args}>
      <DaySlots />
    </DatePickerProvider>,
  args: baseArgs
}`,...(fe=(je=y.parameters)==null?void 0:je.docs)==null?void 0:fe.source},description:{story:"`DaySlots` is the grid of day cells for the current month. It handles\nselection, range hover, today/weekend/holiday/disabled state, and exposes a\n`dayRenderer` plus rich class hooks for full control.",...(Oe=(Be=y.parameters)==null?void 0:Be.docs)==null?void 0:Oe.description}}};var Te,Ae,Ne,We,Me;u.parameters={...u.parameters,docs:{...(Te=u.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: "TimePicker",
  render: args => <DatePickerProvider {...args}>
      <TimePicker showSeconds use12Hours />
    </DatePickerProvider>,
  args: baseArgs
}`,...(Ne=(Ae=u.parameters)==null?void 0:Ae.docs)==null?void 0:Ne.source},description:{story:"`TimePicker` edits the time portion (hours/minutes, optional seconds and an\nAM/PM toggle) of the currently selected day. Here it's shown standalone with\nseconds and a 12-hour clock enabled.",...(Me=(We=u.parameters)==null?void 0:We.docs)==null?void 0:Me.description}}};const ar=["TitleOnly","HeaderOnly","HeaderPrevButtonOnly","HeaderNextButtonOnly","HeaderMonthSelectOnly","HeaderYearSelectOnly","PanelHeaderOnly","PanelHeaderLabelOnly","PanelHeaderPrevButtonOnly","PanelHeaderNextButtonOnly","PanelHeaderBodyOnly","WeekDaysOnly","DaySlotsOnly","TimePickerOnly"];export{y as DaySlotsOnly,i as HeaderMonthSelectOnly,d as HeaderNextButtonOnly,t as HeaderOnly,o as HeaderPrevButtonOnly,c as HeaderYearSelectOnly,g as PanelHeaderBodyOnly,m as PanelHeaderLabelOnly,p as PanelHeaderNextButtonOnly,l as PanelHeaderOnly,P as PanelHeaderPrevButtonOnly,u as TimePickerOnly,s as TitleOnly,h as WeekDaysOnly,ar as __namedExportsOrder,rr as default};
