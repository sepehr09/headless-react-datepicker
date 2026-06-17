import{j as e}from"./jsx-runtime-BToJpacT.js";import{D as a,d as Ye,H as Ce,c as Fe,i as Ie,b as Ue,a as _e,P as v,e as Ee,h as Ve,W as Re,g as qe,j as ze,f as Ge,k as Je,T as Ke}from"./WeekDays-CZiqpDVX.js";import{b as Qe}from"./constants-DHfTKTE3.js";import{a as n}from"./_source-CMrf7hAM.js";import"./iframe-DOzeBBPB.js";import"./preload-helper-C1FmrZbK.js";const nr={title:"Example/Components",...Qe,parameters:{docs:{description:{component:`The library is **headless** and built from small, independent pieces. Every
component below shares a single \`DatePickerProvider\` for state, so you can
compose just the parts you need.

This section renders each component **on its own** so you can see at a glance
what every building block looks like and does. Compose them together (see the
\`Calendar\` section) to build a full date picker.`}}}},s={isRange:!1,initialValue:new Date,calendar:"gregory",config:{locale:"en-US",weekStartsOn:"monday",showOtherDays:!1,otherDaysSelectable:!1,weekdayFormat:"short",dayFormat:"numeric",weekends:["saturday","sunday"],weekendSelectable:!0}},t={name:"Title",parameters:n(["Title"],"<Title />"),render:r=>e.jsx(a,{...r,children:e.jsx(Ke,{})}),args:s},o={name:"Header",parameters:n(["Header"],"<Header />"),render:r=>e.jsx(a,{...r,children:e.jsx(Ie,{})}),args:s},d={name:"HeaderPrevButton",parameters:n(["HeaderPrevButton"],"<HeaderPrevButton />"),render:r=>e.jsx(a,{...r,children:e.jsx(Ue,{})}),args:s},i={name:"HeaderNextButton",parameters:n(["HeaderNextButton"],"<HeaderNextButton />"),render:r=>e.jsx(a,{...r,children:e.jsx(Fe,{})}),args:s},c={name:"HeaderMonthSelect",parameters:n(["HeaderMonthSelect"],"<HeaderMonthSelect />"),render:r=>e.jsx(a,{...r,children:e.jsx(Ce,{})}),args:s},l={name:"HeaderYearSelect",parameters:n(["HeaderYearSelect"],"<HeaderYearSelect />"),render:r=>e.jsx(a,{...r,children:e.jsx(_e,{})}),args:s},P={name:"Panel Header",parameters:n(["PanelHeader"],"<PanelHeader />"),render:r=>e.jsx(a,{...r,children:e.jsx(ze,{})}),args:s},m={name:"PanelHeaderLabel",parameters:n(["PanelHeaderProvider","PanelHeaderLabel"],`<PanelHeaderProvider>
  <PanelHeaderLabel />
</PanelHeaderProvider>`),render:r=>e.jsx(a,{...r,children:e.jsx(v,{children:e.jsx(Ee,{})})}),args:s},p={name:"PanelHeaderPrevButton",parameters:n(["PanelHeaderProvider","PanelHeaderPrevButton"],`<PanelHeaderProvider>
  <PanelHeaderPrevButton />
</PanelHeaderProvider>`),render:r=>e.jsx(a,{...r,children:e.jsx(v,{children:e.jsx(Ge,{})})}),args:s},H={name:"PanelHeaderNextButton",parameters:n(["PanelHeaderProvider","PanelHeaderNextButton"],`<PanelHeaderProvider>
  <PanelHeaderNextButton />
</PanelHeaderProvider>`),render:r=>e.jsx(a,{...r,children:e.jsx(v,{children:e.jsx(qe,{})})}),args:s},u={name:"PanelHeaderBody",parameters:n(["PanelHeaderProvider","PanelHeaderLabel","PanelHeaderBody","WeekDays","DaySlots"],`<PanelHeaderProvider>
  <PanelHeaderLabel />
  <PanelHeaderBody>
    <WeekDays />
    <DaySlots />
  </PanelHeaderBody>
</PanelHeaderProvider>`),render:r=>e.jsx(a,{...r,children:e.jsxs(v,{children:[e.jsx(Ee,{}),e.jsxs(Ve,{children:[e.jsx(Re,{}),e.jsx(Ye,{})]})]})}),args:s},y={name:"WeekDays",parameters:n(["WeekDays"],"<WeekDays />"),render:r=>e.jsx(a,{...r,children:e.jsx(Re,{})}),args:s},h={name:"DaySlots",parameters:n(["DaySlots"],"<DaySlots />"),render:r=>e.jsx(a,{...r,children:e.jsx(Ye,{})}),args:s},g={name:"TimePicker",parameters:n(["TimePicker"],"<TimePicker showSeconds use12Hours />"),render:r=>e.jsx(a,{...r,children:e.jsx(Je,{showSeconds:!0,use12Hours:!0})}),args:s};var k,S,x,D,B;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Title",
  parameters: componentSource(["Title"], \`<Title />\`),
  render: args => <DatePickerProvider {...args}>
      <Title />
    </DatePickerProvider>,
  args: baseArgs
}`,...(x=(S=t.parameters)==null?void 0:S.docs)==null?void 0:x.source},description:{story:"`Title` shows the current month and year for the calendar, formatted to the\nactive `locale` and `calendar`. Use `monthOffset` to show a neighbouring\nmonth's title (handy for side-by-side calendars).",...(B=(D=t.parameters)==null?void 0:D.docs)==null?void 0:B.description}}};var b,w,j,f,O;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Header",
  parameters: componentSource(["Header"], \`<Header />\`),
  render: args => <DatePickerProvider {...args}>
      <Header />
    </DatePickerProvider>,
  args: baseArgs
}`,...(j=(w=o.parameters)==null?void 0:w.docs)==null?void 0:j.source},description:{story:"`Header` provides month/year navigation: prev/next arrows plus `<select>`\ndropdowns to jump to any month or year. Arrow icons and every dropdown can be\nfully restyled.",...(O=(f=o.parameters)==null?void 0:f.docs)==null?void 0:O.description}}};var T,N,W,A,L;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "HeaderPrevButton",
  parameters: componentSource(["HeaderPrevButton"], \`<HeaderPrevButton />\`),
  render: args => <DatePickerProvider {...args}>
      <HeaderPrevButton />
    </DatePickerProvider>,
  args: baseArgs
}`,...(W=(N=d.parameters)==null?void 0:N.docs)==null?void 0:W.source},description:{story:'`HeaderPrevButton` is the standalone "previous month" arrow from `Header`.\nRender it on its own (in any layout) — it shares the same state and class\nhooks as the arrow inside `Header`.',...(L=(A=d.parameters)==null?void 0:A.docs)==null?void 0:L.description}}};var M,Y,E,R,C;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "HeaderNextButton",
  parameters: componentSource(["HeaderNextButton"], \`<HeaderNextButton />\`),
  render: args => <DatePickerProvider {...args}>
      <HeaderNextButton />
    </DatePickerProvider>,
  args: baseArgs
}`,...(E=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:E.source},description:{story:'`HeaderNextButton` is the standalone "next month" arrow from `Header`.',...(C=(R=i.parameters)==null?void 0:R.docs)==null?void 0:C.description}}};var F,I,U,_,V;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "HeaderMonthSelect",
  parameters: componentSource(["HeaderMonthSelect"], \`<HeaderMonthSelect />\`),
  render: args => <DatePickerProvider {...args}>
      <HeaderMonthSelect />
    </DatePickerProvider>,
  args: baseArgs
}`,...(U=(I=c.parameters)==null?void 0:I.docs)==null?void 0:U.source},description:{story:"`HeaderMonthSelect` is the standalone month `<select>` dropdown from `Header`.",...(V=(_=c.parameters)==null?void 0:_.docs)==null?void 0:V.description}}};var q,z,G,J,K;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "HeaderYearSelect",
  parameters: componentSource(["HeaderYearSelect"], \`<HeaderYearSelect />\`),
  render: args => <DatePickerProvider {...args}>
      <HeaderYearSelect />
    </DatePickerProvider>,
  args: baseArgs
}`,...(G=(z=l.parameters)==null?void 0:z.docs)==null?void 0:G.source},description:{story:"`HeaderYearSelect` is the standalone year `<select>` dropdown from `Header`.",...(K=(J=l.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,X,Z,$,ee;P.parameters={...P.parameters,docs:{...(Q=P.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "Panel Header",
  parameters: componentSource(["PanelHeader"], \`<PanelHeader />\`),
  render: args => <DatePickerProvider {...args}>
      <PanelHeader />
    </DatePickerProvider>,
  args: baseArgs
}`,...(Z=(X=P.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:"`PanelHeader` is a self-contained alternative to `Header`. Instead of\ndropdowns it shows the month/year pickers **inside** the calendar area:\nclicking the month opens a 12-month grid, clicking the year opens a paginated\nyear grid. Wrap your day-view (`WeekDays` / `DaySlots`) as its children.",...(ee=($=P.parameters)==null?void 0:$.docs)==null?void 0:ee.description}}};var re,ae,ne,se,te;m.parameters={...m.parameters,docs:{...(re=m.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "PanelHeaderLabel",
  parameters: componentSource(["PanelHeaderProvider", "PanelHeaderLabel"], \`<PanelHeaderProvider>\\n  <PanelHeaderLabel />\\n</PanelHeaderProvider>\`),
  render: args => <DatePickerProvider {...args}>
      <PanelHeaderProvider>
        <PanelHeaderLabel />
      </PanelHeaderProvider>
    </DatePickerProvider>,
  args: baseArgs
}`,...(ne=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:ne.source},description:{story:"`PanelHeaderLabel` is the standalone center label from `PanelHeader` — the\nmonth/year text that toggles the month/year grids. The standalone panel parts\nshare view state, so wrap them in a `PanelHeaderProvider`.",...(te=(se=m.parameters)==null?void 0:se.docs)==null?void 0:te.description}}};var oe,de,ie,ce,le;p.parameters={...p.parameters,docs:{...(oe=p.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "PanelHeaderPrevButton",
  parameters: componentSource(["PanelHeaderProvider", "PanelHeaderPrevButton"], \`<PanelHeaderProvider>\\n  <PanelHeaderPrevButton />\\n</PanelHeaderProvider>\`),
  render: args => <DatePickerProvider {...args}>
      <PanelHeaderProvider>
        <PanelHeaderPrevButton />
      </PanelHeaderProvider>
    </DatePickerProvider>,
  args: baseArgs
}`,...(ie=(de=p.parameters)==null?void 0:de.docs)==null?void 0:ie.source},description:{story:'`PanelHeaderPrevButton` is the standalone "previous" arrow from `PanelHeader`\n(its action follows the active view). Wrap it in a `PanelHeaderProvider`.',...(le=(ce=p.parameters)==null?void 0:ce.docs)==null?void 0:le.description}}};var Pe,me,pe,He,ue;H.parameters={...H.parameters,docs:{...(Pe=H.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: "PanelHeaderNextButton",
  parameters: componentSource(["PanelHeaderProvider", "PanelHeaderNextButton"], \`<PanelHeaderProvider>\\n  <PanelHeaderNextButton />\\n</PanelHeaderProvider>\`),
  render: args => <DatePickerProvider {...args}>
      <PanelHeaderProvider>
        <PanelHeaderNextButton />
      </PanelHeaderProvider>
    </DatePickerProvider>,
  args: baseArgs
}`,...(pe=(me=H.parameters)==null?void 0:me.docs)==null?void 0:pe.source},description:{story:'`PanelHeaderNextButton` is the standalone "next" arrow from `PanelHeader`.\nWrap it in a `PanelHeaderProvider`.',...(ue=(He=H.parameters)==null?void 0:He.docs)==null?void 0:ue.description}}};var ye,he,ge,ve,ke;u.parameters={...u.parameters,docs:{...(ye=u.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: "PanelHeaderBody",
  parameters: componentSource(["PanelHeaderProvider", "PanelHeaderLabel", "PanelHeaderBody", "WeekDays", "DaySlots"], \`<PanelHeaderProvider>
  <PanelHeaderLabel />
  <PanelHeaderBody>
    <WeekDays />
    <DaySlots />
  </PanelHeaderBody>
</PanelHeaderProvider>\`),
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
}`,...(ge=(he=u.parameters)==null?void 0:he.docs)==null?void 0:ge.source},description:{story:"`PanelHeaderBody` is the standalone body from `PanelHeader`: it shows the\nday-view content (its children) and swaps it for the month/year grids while\nnavigating. Wrap it in a `PanelHeaderProvider`.",...(ke=(ve=u.parameters)==null?void 0:ve.docs)==null?void 0:ke.description}}};var Se,xe,De,Be,be;y.parameters={...y.parameters,docs:{...(Se=y.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: "WeekDays",
  parameters: componentSource(["WeekDays"], \`<WeekDays />\`),
  render: args => <DatePickerProvider {...args}>
      <WeekDays />
    </DatePickerProvider>,
  args: baseArgs
}`,...(De=(xe=y.parameters)==null?void 0:xe.docs)==null?void 0:De.source},description:{story:"`WeekDays` renders the weekday header row (Mon, Tue, …), formatted to the\nactive `locale`/`calendar` and respecting `weekStartsOn`. Each cell exposes\nweekday and weekend class hooks for styling.",...(be=(Be=y.parameters)==null?void 0:Be.docs)==null?void 0:be.description}}};var we,je,fe,Oe,Te;h.parameters={...h.parameters,docs:{...(we=h.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: "DaySlots",
  parameters: componentSource(["DaySlots"], \`<DaySlots />\`),
  render: args => <DatePickerProvider {...args}>
      <DaySlots />
    </DatePickerProvider>,
  args: baseArgs
}`,...(fe=(je=h.parameters)==null?void 0:je.docs)==null?void 0:fe.source},description:{story:"`DaySlots` is the grid of day cells for the current month. It handles\nselection, range hover, today/weekend/holiday/disabled state, and exposes a\n`dayRenderer` plus rich class hooks for full control.",...(Te=(Oe=h.parameters)==null?void 0:Oe.docs)==null?void 0:Te.description}}};var Ne,We,Ae,Le,Me;g.parameters={...g.parameters,docs:{...(Ne=g.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: "TimePicker",
  parameters: componentSource(["TimePicker"], \`<TimePicker showSeconds use12Hours />\`),
  render: args => <DatePickerProvider {...args}>
      <TimePicker showSeconds use12Hours />
    </DatePickerProvider>,
  args: baseArgs
}`,...(Ae=(We=g.parameters)==null?void 0:We.docs)==null?void 0:Ae.source},description:{story:"`TimePicker` edits the time portion (hours/minutes, optional seconds and an\nAM/PM toggle) of the currently selected day. Here it's shown standalone with\nseconds and a 12-hour clock enabled.",...(Me=(Le=g.parameters)==null?void 0:Le.docs)==null?void 0:Me.description}}};const sr=["TitleOnly","HeaderOnly","HeaderPrevButtonOnly","HeaderNextButtonOnly","HeaderMonthSelectOnly","HeaderYearSelectOnly","PanelHeaderOnly","PanelHeaderLabelOnly","PanelHeaderPrevButtonOnly","PanelHeaderNextButtonOnly","PanelHeaderBodyOnly","WeekDaysOnly","DaySlotsOnly","TimePickerOnly"];export{h as DaySlotsOnly,c as HeaderMonthSelectOnly,i as HeaderNextButtonOnly,o as HeaderOnly,d as HeaderPrevButtonOnly,l as HeaderYearSelectOnly,u as PanelHeaderBodyOnly,m as PanelHeaderLabelOnly,H as PanelHeaderNextButtonOnly,P as PanelHeaderOnly,p as PanelHeaderPrevButtonOnly,g as TimePickerOnly,t as TitleOnly,y as WeekDaysOnly,sr as __namedExportsOrder,nr as default};
