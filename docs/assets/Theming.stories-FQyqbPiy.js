import{j as d}from"./jsx-runtime-DiifA5Mr.js";import{D as ze,j as Te,W as x,d as w,T as Ae,i as Re,k as Fe}from"./WeekDays-eBEpsr57.js";import{b as Ee}from"./constants-CPkIZN1Z.js";import"./iframe-CV9cx8ZP.js";import"./preload-helper-C1FmrZbK.js";const Ne={title:"Example/Theming",...Ee,parameters:{docs:{description:{component:"A gallery of **ready-made, good-looking themes**. Each one re-colors the\ndefault look purely through the library's `--rhmdp-*` CSS variables (set on\nthe card wrapper) — no `className` overrides, no `!important`, and almost no\ninline `*Styles`. The selected circle, the in-range fill with rounded end\ncaps, the hover, today/weekend colors and the corner radius all come from the\nvariables, so a theme is just a small palette object you can copy and tweak."}}}},r=e=>e,a={"--rhmdp-day-text":"inherit","--rhmdp-day-muted-text":"#c7c7cc","--rhmdp-day-border":"transparent","--rhmdp-day-border-width":"1px","--rhmdp-day-full-border-width":"0px","--rhmdp-day-radius":"999px","--rhmdp-day-weight":"inherit","--rhmdp-day-size":"inherit","--rhmdp-day-padding":"0.5rem","--rhmdp-day-height":"2.5rem","--rhmdp-day-gap":"0px","--rhmdp-day-today-text":"#007aff","--rhmdp-day-weekend-text":"#8e8e93","--rhmdp-day-holiday-text":"#ff3b30","--rhmdp-day-disabled-text":"#c7c7cc","--rhmdp-day-hover-bg":"#f2f2f7","--rhmdp-day-hover-text":"inherit","--rhmdp-day-selected-bg":"#007aff","--rhmdp-day-selected-text":"#ffffff","--rhmdp-day-range-bg":"#e6f0ff","--rhmdp-day-range-hover-bg":"#f2f7ff","--rhmdp-weekday-text":"inherit","--rhmdp-weekday-weight":"600","--rhmdp-weekday-size":"inherit","--rhmdp-title-text":"inherit","--rhmdp-title-weight":"600","--rhmdp-title-size":"1.5rem","--rhmdp-header-select-bg":"transparent","--rhmdp-header-select-text":"inherit","--rhmdp-header-select-border":"transparent","--rhmdp-header-select-radius":"revert","--rhmdp-header-select-padding":"revert","--rhmdp-header-select-size":"revert","--rhmdp-arrow-text":"inherit","--rhmdp-arrow-bg":"transparent","--rhmdp-arrow-hover-bg":"#f2f2f7","--rhmdp-arrow-hover-text":"inherit","--rhmdp-header-weight":"600","--rhmdp-time-text":"inherit","--rhmdp-time-weight":"600","--rhmdp-time-size":"1.25rem","--rhmdp-panel-selected-bg":"#007aff","--rhmdp-panel-selected-text":"#ffffff","--rhmdp-panel-cell-bg":"transparent","--rhmdp-panel-cell-text":"inherit","--rhmdp-panel-cell-hover-bg":"#f2f2f7","--rhmdp-panel-cell-hover-text":"inherit","--rhmdp-panel-cell-size":"inherit","--rhmdp-panel-cell-weight":"inherit"},t=e=>Se=>d.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"48px 16px",...e.page},children:d.jsx("div",{style:{width:340,...e.card,...e.tokens},children:d.jsxs(ze,{...Se,onChange:ve=>console.log("onChange: ",ve),children:[e.panelHeader?d.jsxs(Te,{rootStyles:e.headerRoot,children:[d.jsx(x,{}),d.jsx(w,{parentStyles:e.grid,selectedStyles:e.selectedAccent})]}):d.jsxs(d.Fragment,{children:[d.jsx(Ae,{style:e.title}),d.jsx(Re,{rootStyles:e.headerRoot}),d.jsx(x,{}),d.jsx(w,{parentStyles:e.grid,selectedStyles:e.selectedAccent})]}),e.timePicker&&d.jsx("div",{style:{borderTop:"1px solid rgba(127,127,127,0.25)",marginTop:14,paddingTop:12},children:d.jsx(Fe,{...e.timePicker})})]})})}),h={isRange:!0,initialValue:[new Date("2024-05-07"),new Date("2024-05-24")],calendar:"gregory",config:{locale:"en-US",weekStartsOn:"monday",weekdayFormat:"short",weekends:["saturday","sunday"],showOtherDays:!0}},b={isRange:!1,initialValue:new Date("2024-05-16"),calendar:"gregory",config:{locale:"en-US",weekStartsOn:"monday",weekdayFormat:"short",weekends:["saturday","sunday"],showOtherDays:!0}},ke={"--rhmdp-header-select-bg":"#f0f0f0","--rhmdp-header-select-text":"#000000","--rhmdp-header-select-radius":"5px","--rhmdp-header-select-padding":"4px"},p={args:h,render:t({page:{background:"linear-gradient(135deg, #6d83f2 0%, #a06bf0 50%, #f17bb4 100%)"},card:{background:"rgba(255, 255, 255, 0.18)",backdropFilter:"blur(18px)",WebkitBackdropFilter:"blur(18px)",border:"1px solid rgba(255, 255, 255, 0.35)",borderRadius:24,padding:22,boxShadow:"0 20px 50px rgba(80, 40, 140, 0.35)"},tokens:r({...a,"--rhmdp-day-radius":"999px","--rhmdp-day-text":"#ffffff","--rhmdp-day-muted-text":"rgba(255,255,255,0.45)","--rhmdp-day-selected-text":"#ffffff","--rhmdp-day-range-bg":"rgba(255,255,255,0.18)","--rhmdp-day-range-hover-bg":"rgba(255,255,255,0.10)","--rhmdp-day-hover-bg":"rgba(255,255,255,0.18)","--rhmdp-day-today-text":"#ffffff","--rhmdp-day-weekend-text":"rgba(255,255,255,0.6)","--rhmdp-weekday-text":"rgba(255,255,255,0.75)","--rhmdp-title-text":"#ffffff","--rhmdp-arrow-text":"#ffffff","--rhmdp-header-select-bg":"rgba(255,255,255,0.2)","--rhmdp-header-select-text":"#ffffff","--rhmdp-header-select-border":"rgba(255,255,255,0.3)","--rhmdp-header-select-radius":"8px","--rhmdp-header-select-padding":"4px 6px","--rhmdp-day-weight":"500","--rhmdp-day-size":"0.95rem","--rhmdp-weekday-weight":"600","--rhmdp-weekday-size":"0.72rem","--rhmdp-title-weight":"600","--rhmdp-title-size":"1.4rem","--rhmdp-header-weight":"600"}),selectedAccent:{background:"linear-gradient(135deg, #7c3aed, #db2777)",boxShadow:"0 6px 16px rgba(124, 58, 237, 0.5)"}})},n={args:{...b,initialValue:new Date("2024-05-16T21:30:00")},render:t({page:{background:"radial-gradient(circle at 30% 20%, #1b2735 0%, #090a0f 70%)"},card:{background:"#101522",border:"1px solid #1f2a3d",borderRadius:18,padding:22,boxShadow:"0 24px 60px rgba(0,0,0,0.6)"},tokens:r({...a,"--rhmdp-day-radius":"10px","--rhmdp-day-text":"#cbd5e1","--rhmdp-day-muted-text":"#475569","--rhmdp-day-selected-bg":"#22d3ee","--rhmdp-day-selected-text":"#06141b","--rhmdp-day-hover-bg":"#1c2740","--rhmdp-day-hover-text":"#67e8f9","--rhmdp-day-today-text":"#67e8f9","--rhmdp-day-weekend-text":"#f472b6","--rhmdp-weekday-text":"#64748b","--rhmdp-title-text":"#f8fafc","--rhmdp-arrow-text":"#22d3ee","--rhmdp-arrow-hover-bg":"#1c2740","--rhmdp-arrow-hover-text":"#67e8f9","--rhmdp-time-text":"#f8fafc","--rhmdp-header-select-bg":"#1a2234","--rhmdp-header-select-text":"#cbd5e1","--rhmdp-header-select-border":"#243049","--rhmdp-header-select-radius":"8px","--rhmdp-header-select-padding":"4px 6px","--rhmdp-day-weight":"500","--rhmdp-day-size":"0.95rem","--rhmdp-weekday-weight":"700","--rhmdp-weekday-size":"0.7rem","--rhmdp-title-weight":"700","--rhmdp-title-size":"1.35rem","--rhmdp-header-weight":"600","--rhmdp-time-weight":"700","--rhmdp-time-size":"1.3rem"}),selectedAccent:{boxShadow:"0 0 18px rgba(34, 211, 238, 0.7)"},timePicker:{use12Hours:!0}})},m={args:h,render:t({page:{background:"linear-gradient(135deg, #ffd1a1 0%, #ff9a9e 100%)"},card:{background:"#fffaf6",borderRadius:20,padding:22,boxShadow:"0 18px 40px rgba(255, 122, 95, 0.3)"},tokens:r({...a,"--rhmdp-day-radius":"999px","--rhmdp-day-text":"#7c2d12","--rhmdp-day-muted-text":"#e7b6a0","--rhmdp-day-selected-text":"#ffffff","--rhmdp-day-range-bg":"#ffe4d1","--rhmdp-day-range-hover-bg":"#fff0e6","--rhmdp-day-hover-bg":"#ffe3d0","--rhmdp-day-today-text":"#ea580c","--rhmdp-day-weekend-text":"#fb7185","--rhmdp-weekday-text":"#c2754b","--rhmdp-title-text":"#9a3412","--rhmdp-arrow-text":"#ea580c","--rhmdp-header-select-bg":"#fff1e7","--rhmdp-header-select-text":"#9a3412","--rhmdp-header-select-border":"#ffd8bf","--rhmdp-header-select-radius":"8px","--rhmdp-header-select-padding":"4px 6px","--rhmdp-day-weight":"500","--rhmdp-day-size":"1rem","--rhmdp-weekday-weight":"600","--rhmdp-weekday-size":"0.72rem","--rhmdp-title-weight":"700","--rhmdp-title-size":"1.5rem","--rhmdp-header-weight":"600"}),selectedAccent:{background:"linear-gradient(135deg, #fb923c, #f43f5e)",boxShadow:"0 6px 14px rgba(244, 63, 94, 0.4)"}})},i={args:b,render:t({page:{background:"#fafafa"},card:{background:"#fff",borderRadius:14,padding:26,border:"1px solid #ececec",boxShadow:"0 8px 30px rgba(0,0,0,0.05)"},tokens:r({...a,"--rhmdp-day-radius":"999px","--rhmdp-day-text":"#333333","--rhmdp-day-muted-text":"#cfcfcf","--rhmdp-day-selected-bg":"#111111","--rhmdp-day-selected-text":"#ffffff","--rhmdp-day-hover-bg":"#f0f0f0","--rhmdp-day-today-text":"#111111","--rhmdp-day-weekend-text":"#bcbcbc","--rhmdp-weekday-text":"#bbbbbb","--rhmdp-title-text":"#111111","--rhmdp-arrow-text":"#111111","--rhmdp-header-select-text":"#111111","--rhmdp-header-weight":"300","--rhmdp-day-weight":"300","--rhmdp-day-size":"1rem","--rhmdp-weekday-weight":"400","--rhmdp-weekday-size":"0.7rem"}),title:{fontWeight:300,fontSize:"1.15em",letterSpacing:6,textTransform:"uppercase",textAlign:"center",marginBottom:12}})},s={args:h,render:t({page:{background:"linear-gradient(135deg, #d3f8e2 0%, #a1e3d8 100%)"},card:{background:"#ffffff",borderRadius:22,padding:22,boxShadow:"0 16px 40px rgba(16, 122, 110, 0.22)"},tokens:r({...a,"--rhmdp-day-radius":"999px","--rhmdp-day-text":"#0f5d57","--rhmdp-day-muted-text":"#9cd3c8","--rhmdp-day-selected-bg":"#14b8a6","--rhmdp-day-selected-text":"#ffffff","--rhmdp-day-range-bg":"#d1fae5","--rhmdp-day-range-hover-bg":"#ecfdf5","--rhmdp-day-hover-bg":"#d6f7e7","--rhmdp-day-today-text":"#14b8a6","--rhmdp-day-weekend-text":"#f59e0b","--rhmdp-weekday-text":"#5eada2","--rhmdp-title-text":"#0f766e","--rhmdp-arrow-text":"#14b8a6","--rhmdp-header-select-bg":"#ecfdf5","--rhmdp-header-select-text":"#0f766e","--rhmdp-header-select-border":"#b7ebdd","--rhmdp-header-select-radius":"8px","--rhmdp-header-select-padding":"4px 6px","--rhmdp-day-weight":"500","--rhmdp-day-size":"0.95rem","--rhmdp-weekday-weight":"600","--rhmdp-weekday-size":"0.72rem","--rhmdp-title-weight":"700","--rhmdp-title-size":"1.45rem","--rhmdp-header-weight":"600"}),selectedAccent:{boxShadow:"0 6px 14px rgba(20, 184, 166, 0.4)"}})},o={args:b,render:t({page:{background:"linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)"},card:{background:"#1e1b4b",border:"1px solid #3730a3",borderRadius:18,padding:22,boxShadow:"0 24px 60px rgba(0,0,0,0.5)"},tokens:r({...a,"--rhmdp-day-radius":"10px","--rhmdp-day-text":"#e0e7ff","--rhmdp-day-muted-text":"#6d6aa8","--rhmdp-day-selected-text":"#1e1b4b","--rhmdp-day-hover-bg":"#2d2a66","--rhmdp-day-today-text":"#fbbf24","--rhmdp-day-weekend-text":"#818cf8","--rhmdp-weekday-text":"#a5b4fc","--rhmdp-title-text":"#fde68a","--rhmdp-arrow-text":"#fbbf24","--rhmdp-header-select-bg":"#312e81","--rhmdp-header-select-text":"#e0e7ff","--rhmdp-header-select-border":"#4338ca","--rhmdp-header-select-radius":"8px","--rhmdp-header-select-padding":"4px 6px","--rhmdp-day-weight":"500","--rhmdp-day-size":"0.95rem","--rhmdp-weekday-weight":"600","--rhmdp-weekday-size":"0.7rem","--rhmdp-title-weight":"600","--rhmdp-title-size":"1.6rem","--rhmdp-header-weight":"600"}),title:{fontFamily:"Georgia, 'Times New Roman', serif",letterSpacing:1},selectedAccent:{background:"linear-gradient(135deg, #fbbf24, #f59e0b)",boxShadow:"0 6px 16px rgba(251, 191, 36, 0.45)"}})},c={args:h,render:t({page:{background:"#f4f4f5"},card:{background:"#fff",borderRadius:0,padding:10,border:"1px solid #acb5be",boxShadow:"0 2px 5px rgba(0, 0, 0, 0.1)"},tokens:r({...a,"--rhmdp-day-radius":"0px","--rhmdp-day-border":"#c7cbcf","--rhmdp-day-full-border-width":"1px","--rhmdp-day-selected-bg":"#d80202","--rhmdp-day-selected-text":"#ffffff","--rhmdp-day-range-bg":"#ff9a9a","--rhmdp-day-range-hover-bg":"#ffd0d0","--rhmdp-day-hover-bg":"#ffe3e3","--rhmdp-day-today-text":"#d80202","--rhmdp-day-weekend-text":"#cf4d4d","--rhmdp-weekday-text":"#7a7a7a",...ke,"--rhmdp-day-weight":"400","--rhmdp-day-size":"0.9rem","--rhmdp-weekday-weight":"700","--rhmdp-weekday-size":"0.7rem","--rhmdp-header-weight":"700"}),grid:{gap:2},title:{fontWeight:700,fontSize:"1.05em",letterSpacing:4,textTransform:"uppercase",textAlign:"center",marginBottom:10},headerRoot:{borderBottom:"1px solid #cccccc",marginBottom:8,paddingBottom:6}})},f={args:h,render:t({page:{background:"#f4f4f5"},card:{background:"#fff",borderRadius:0,padding:10,border:"1px solid #acb5be",boxShadow:"0 2px 5px rgba(0, 0, 0, 0.1)"},tokens:r({...a,"--rhmdp-day-radius":"0px","--rhmdp-day-border":"#d6dadf","--rhmdp-day-text":"#494949","--rhmdp-day-selected-bg":"#a4fc00","--rhmdp-day-selected-text":"#1a2e05","--rhmdp-day-range-bg":"#e7ffb9","--rhmdp-day-range-hover-bg":"#ecf8d5","--rhmdp-day-hover-bg":"#eef7d2","--rhmdp-day-today-text":"#65a30d","--rhmdp-day-weekend-text":"#ff0000","--rhmdp-weekday-text":"#7a7a7a","--rhmdp-title-text":"#5c5c5c",...ke,"--rhmdp-day-weight":"400","--rhmdp-day-size":"0.9rem","--rhmdp-weekday-weight":"500","--rhmdp-weekday-size":"0.7rem","--rhmdp-header-weight":"400"}),title:{fontWeight:200,fontSize:"1.2em",marginBottom:10,textAlign:"center",letterSpacing:16,textTransform:"uppercase"},headerRoot:{boxShadow:"0 2px 5px rgba(0, 0, 0, 0.1)",borderRadius:7,marginBottom:10,padding:10,background:"linear-gradient(0deg, #ffffff 0%, #f4f4f4 100%)"}})},g={args:b,render:t({page:{background:"#f2f2f7"},card:{background:"#ffffff",borderRadius:16,padding:20,border:"1px solid #e5e5ea",boxShadow:"0 10px 30px rgba(0,0,0,0.08)",fontFamily:"-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif"},tokens:r({...a,"--rhmdp-day-radius":"999px","--rhmdp-day-text":"#1c1c1e","--rhmdp-day-muted-text":"#c7c7cc","--rhmdp-day-selected-bg":"#ff3b30","--rhmdp-day-selected-text":"#ffffff","--rhmdp-day-hover-bg":"#f2f2f7","--rhmdp-day-today-text":"#ff3b30","--rhmdp-day-weekend-text":"#8e8e93","--rhmdp-weekday-text":"#8e8e93","--rhmdp-title-text":"#1c1c1e","--rhmdp-arrow-text":"#ff3b30","--rhmdp-arrow-hover-bg":"#f2f2f7","--rhmdp-arrow-hover-text":"#ff3b30","--rhmdp-header-select-bg":"#f2f2f7","--rhmdp-header-select-text":"#1c1c1e","--rhmdp-header-select-radius":"8px","--rhmdp-header-select-padding":"4px 6px","--rhmdp-day-weight":"400","--rhmdp-day-size":"1.05rem","--rhmdp-weekday-weight":"600","--rhmdp-weekday-size":"0.7rem","--rhmdp-title-weight":"600","--rhmdp-title-size":"1.3rem","--rhmdp-header-weight":"600"})})},l={args:h,render:t({page:{background:"#e7e0ec"},card:{background:"#fffbfe",borderRadius:28,padding:22,boxShadow:"0 12px 32px rgba(103, 80, 164, 0.22)",fontFamily:"Roboto, 'Google Sans', system-ui, sans-serif"},tokens:r({...a,"--rhmdp-day-radius":"999px","--rhmdp-day-text":"#1c1b1f","--rhmdp-day-muted-text":"#c4c0c9","--rhmdp-day-selected-bg":"#6750a4","--rhmdp-day-selected-text":"#ffffff","--rhmdp-day-range-bg":"#e8def8","--rhmdp-day-range-hover-bg":"#f3edf7","--rhmdp-day-hover-bg":"#ece6f4","--rhmdp-day-hover-text":"#21005d","--rhmdp-day-today-text":"#6750a4","--rhmdp-day-weekend-text":"#49454f","--rhmdp-weekday-text":"#49454f","--rhmdp-title-text":"#1c1b1f","--rhmdp-arrow-text":"#49454f","--rhmdp-arrow-hover-bg":"#ece6f4","--rhmdp-arrow-hover-text":"#6750a4","--rhmdp-header-select-bg":"#f3edf7","--rhmdp-header-select-text":"#1c1b1f","--rhmdp-header-select-border":"#cac4d0","--rhmdp-header-select-radius":"8px","--rhmdp-header-select-padding":"4px 6px","--rhmdp-day-weight":"500","--rhmdp-day-size":"1rem","--rhmdp-weekday-weight":"500","--rhmdp-weekday-size":"0.75rem","--rhmdp-title-weight":"500","--rhmdp-title-size":"1.375rem","--rhmdp-header-weight":"500"})})},y={args:b,render:t({panelHeader:!0,page:{background:"#f2f2f7"},card:{width:220,background:"#ffffff",borderRadius:10,padding:"0 1rem 0.75rem",border:"1px solid #e5e5ea",boxShadow:"0 6px 18px rgba(0,0,0,0.06)"},tokens:r({...a,"--rhmdp-day-padding":"0.2rem","--rhmdp-day-height":"1.85rem","--rhmdp-day-radius":"7px","--rhmdp-day-size":"0.78rem","--rhmdp-day-weight":"500","--rhmdp-day-text":"#1c1c1e","--rhmdp-day-muted-text":"#c7c7cc","--rhmdp-day-selected-bg":"#007aff","--rhmdp-day-selected-text":"#ffffff","--rhmdp-day-hover-bg":"#eef1f6","--rhmdp-day-today-text":"#007aff","--rhmdp-weekday-text":"#8e8e93","--rhmdp-weekday-weight":"600","--rhmdp-weekday-size":"0.62rem","--rhmdp-title-text":"#1c1c1e","--rhmdp-title-weight":"600","--rhmdp-title-size":"0.95rem","--rhmdp-header-weight":"600","--rhmdp-header-select-bg":"#f2f2f7","--rhmdp-header-select-text":"#1c1c1e","--rhmdp-header-select-radius":"6px","--rhmdp-header-select-padding":"2px 4px","--rhmdp-header-select-size":"0.78rem","--rhmdp-panel-cell-size":"12px"})})};var u,k,S,v,z;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: rangeArgs,
  render: ThemedCalendar({
    page: {
      background: "linear-gradient(135deg, #6d83f2 0%, #a06bf0 50%, #f17bb4 100%)"
    },
    card: {
      background: "rgba(255, 255, 255, 0.18)",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
      border: "1px solid rgba(255, 255, 255, 0.35)",
      borderRadius: 24,
      padding: 22,
      boxShadow: "0 20px 50px rgba(80, 40, 140, 0.35)"
    },
    tokens: vars({
      ...DEFAULT_TOKENS,
      "--rhmdp-day-radius": "999px",
      "--rhmdp-day-text": "#ffffff",
      "--rhmdp-day-muted-text": "rgba(255,255,255,0.45)",
      "--rhmdp-day-selected-text": "#ffffff",
      "--rhmdp-day-range-bg": "rgba(255,255,255,0.18)",
      "--rhmdp-day-range-hover-bg": "rgba(255,255,255,0.10)",
      "--rhmdp-day-hover-bg": "rgba(255,255,255,0.18)",
      "--rhmdp-day-today-text": "#ffffff",
      "--rhmdp-day-weekend-text": "rgba(255,255,255,0.6)",
      "--rhmdp-weekday-text": "rgba(255,255,255,0.75)",
      "--rhmdp-title-text": "#ffffff",
      "--rhmdp-arrow-text": "#ffffff",
      "--rhmdp-header-select-bg": "rgba(255,255,255,0.2)",
      "--rhmdp-header-select-text": "#ffffff",
      "--rhmdp-header-select-border": "rgba(255,255,255,0.3)",
      "--rhmdp-header-select-radius": "8px",
      "--rhmdp-header-select-padding": "4px 6px",
      // Airy, refined typography to match the frosted look.
      "--rhmdp-day-weight": "500",
      "--rhmdp-day-size": "0.95rem",
      "--rhmdp-weekday-weight": "600",
      "--rhmdp-weekday-size": "0.72rem",
      "--rhmdp-title-weight": "600",
      "--rhmdp-title-size": "1.4rem",
      "--rhmdp-header-weight": "600"
    }),
    selectedAccent: {
      background: "linear-gradient(135deg, #7c3aed, #db2777)",
      boxShadow: "0 6px 16px rgba(124, 58, 237, 0.5)"
    }
  })
}`,...(S=(k=p.parameters)==null?void 0:k.docs)==null?void 0:S.source},description:{story:`Frosted glassmorphism on a soft aurora gradient. The range fill is a
translucent white; the selected ends are a violet→pink gradient pill.`,...(z=(v=p.parameters)==null?void 0:v.docs)==null?void 0:z.description}}};var T,A,R,F,E;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...singleArgs,
    initialValue: new Date("2024-05-16T21:30:00")
  },
  render: ThemedCalendar({
    page: {
      background: "radial-gradient(circle at 30% 20%, #1b2735 0%, #090a0f 70%)"
    },
    card: {
      background: "#101522",
      border: "1px solid #1f2a3d",
      borderRadius: 18,
      padding: 22,
      boxShadow: "0 24px 60px rgba(0,0,0,0.6)"
    },
    tokens: vars({
      ...DEFAULT_TOKENS,
      "--rhmdp-day-radius": "10px",
      "--rhmdp-day-text": "#cbd5e1",
      "--rhmdp-day-muted-text": "#475569",
      "--rhmdp-day-selected-bg": "#22d3ee",
      "--rhmdp-day-selected-text": "#06141b",
      "--rhmdp-day-hover-bg": "#1c2740",
      "--rhmdp-day-hover-text": "#67e8f9",
      "--rhmdp-day-today-text": "#67e8f9",
      "--rhmdp-day-weekend-text": "#f472b6",
      "--rhmdp-weekday-text": "#64748b",
      "--rhmdp-title-text": "#f8fafc",
      // Shared by Header / PanelHeader / TimePicker arrows.
      "--rhmdp-arrow-text": "#22d3ee",
      "--rhmdp-arrow-hover-bg": "#1c2740",
      "--rhmdp-arrow-hover-text": "#67e8f9",
      "--rhmdp-time-text": "#f8fafc",
      "--rhmdp-header-select-bg": "#1a2234",
      "--rhmdp-header-select-text": "#cbd5e1",
      "--rhmdp-header-select-border": "#243049",
      "--rhmdp-header-select-radius": "8px",
      "--rhmdp-header-select-padding": "4px 6px",
      // Bold, techy dashboard type with a large neon clock readout.
      "--rhmdp-day-weight": "500",
      "--rhmdp-day-size": "0.95rem",
      "--rhmdp-weekday-weight": "700",
      "--rhmdp-weekday-size": "0.7rem",
      "--rhmdp-title-weight": "700",
      "--rhmdp-title-size": "1.35rem",
      "--rhmdp-header-weight": "600",
      "--rhmdp-time-weight": "700",
      "--rhmdp-time-size": "1.3rem"
    }),
    // bg comes from --rhmdp-day-selected-bg; we only add the neon glow.
    selectedAccent: {
      boxShadow: "0 0 18px rgba(34, 211, 238, 0.7)"
    },
    // arrows (header + stepper) are themed via the shared --rhmdp-* tokens.
    timePicker: {
      use12Hours: true
    }
  })
}`,...(R=(A=n.parameters)==null?void 0:A.docs)==null?void 0:R.source},description:{story:"A dark dashboard look: near-black card, cyan neon selection with a glow, a\nhot-pink weekend accent, and a matching `TimePicker`.",...(E=(F=n.parameters)==null?void 0:F.docs)==null?void 0:E.description}}};var C,D,O,j,B;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: rangeArgs,
  render: ThemedCalendar({
    page: {
      background: "linear-gradient(135deg, #ffd1a1 0%, #ff9a9e 100%)"
    },
    card: {
      background: "#fffaf6",
      borderRadius: 20,
      padding: 22,
      boxShadow: "0 18px 40px rgba(255, 122, 95, 0.3)"
    },
    tokens: vars({
      ...DEFAULT_TOKENS,
      "--rhmdp-day-radius": "999px",
      "--rhmdp-day-text": "#7c2d12",
      "--rhmdp-day-muted-text": "#e7b6a0",
      "--rhmdp-day-selected-text": "#ffffff",
      "--rhmdp-day-range-bg": "#ffe4d1",
      "--rhmdp-day-range-hover-bg": "#fff0e6",
      "--rhmdp-day-hover-bg": "#ffe3d0",
      "--rhmdp-day-today-text": "#ea580c",
      "--rhmdp-day-weekend-text": "#fb7185",
      "--rhmdp-weekday-text": "#c2754b",
      "--rhmdp-title-text": "#9a3412",
      "--rhmdp-arrow-text": "#ea580c",
      "--rhmdp-header-select-bg": "#fff1e7",
      "--rhmdp-header-select-text": "#9a3412",
      "--rhmdp-header-select-border": "#ffd8bf",
      "--rhmdp-header-select-radius": "8px",
      "--rhmdp-header-select-padding": "4px 6px",
      // Friendly, slightly chunky rounded type.
      "--rhmdp-day-weight": "500",
      "--rhmdp-day-size": "1rem",
      "--rhmdp-weekday-weight": "600",
      "--rhmdp-weekday-size": "0.72rem",
      "--rhmdp-title-weight": "700",
      "--rhmdp-title-size": "1.5rem",
      "--rhmdp-header-weight": "600"
    }),
    selectedAccent: {
      background: "linear-gradient(135deg, #fb923c, #f43f5e)",
      boxShadow: "0 6px 14px rgba(244, 63, 94, 0.4)"
    }
  })
}`,...(O=(D=m.parameters)==null?void 0:D.docs)==null?void 0:O.source},description:{story:`Warm and friendly: a cream card on a peachy gradient, an orange→pink gradient
for the selected ends and a soft peach fill in between.`,...(B=(j=m.parameters)==null?void 0:j.docs)==null?void 0:B.description}}};var N,L,M,P,U;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: singleArgs,
  render: ThemedCalendar({
    page: {
      background: "#fafafa"
    },
    card: {
      background: "#fff",
      borderRadius: 14,
      padding: 26,
      border: "1px solid #ececec",
      boxShadow: "0 8px 30px rgba(0,0,0,0.05)"
    },
    tokens: vars({
      ...DEFAULT_TOKENS,
      "--rhmdp-day-radius": "999px",
      "--rhmdp-day-text": "#333333",
      "--rhmdp-day-muted-text": "#cfcfcf",
      "--rhmdp-day-selected-bg": "#111111",
      "--rhmdp-day-selected-text": "#ffffff",
      "--rhmdp-day-hover-bg": "#f0f0f0",
      "--rhmdp-day-today-text": "#111111",
      "--rhmdp-day-weekend-text": "#bcbcbc",
      "--rhmdp-weekday-text": "#bbbbbb",
      "--rhmdp-title-text": "#111111",
      "--rhmdp-arrow-text": "#111111",
      // transparent bg/border come from DEFAULT_TOKENS; only text & weight differ.
      "--rhmdp-header-select-text": "#111111",
      "--rhmdp-header-weight": "300",
      // Thin, editorial weights throughout (the spaced title is set inline).
      "--rhmdp-day-weight": "300",
      "--rhmdp-day-size": "1rem",
      "--rhmdp-weekday-weight": "400",
      "--rhmdp-weekday-size": "0.7rem"
    }),
    title: {
      fontWeight: 300,
      fontSize: "1.15em",
      letterSpacing: 6,
      textTransform: "uppercase",
      textAlign: "center",
      marginBottom: 12
    }
  })
}`,...(M=(L=i.parameters)==null?void 0:L.docs)==null?void 0:M.source},description:{story:`Editorial and quiet: lots of whitespace, thin type, a single black dot for
the selected day.`,...(U=(P=i.parameters)==null?void 0:P.docs)==null?void 0:U.description}}};var _,K,G,H,W;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: rangeArgs,
  render: ThemedCalendar({
    page: {
      background: "linear-gradient(135deg, #d3f8e2 0%, #a1e3d8 100%)"
    },
    card: {
      background: "#ffffff",
      borderRadius: 22,
      padding: 22,
      boxShadow: "0 16px 40px rgba(16, 122, 110, 0.22)"
    },
    tokens: vars({
      ...DEFAULT_TOKENS,
      "--rhmdp-day-radius": "999px",
      "--rhmdp-day-text": "#0f5d57",
      "--rhmdp-day-muted-text": "#9cd3c8",
      "--rhmdp-day-selected-bg": "#14b8a6",
      "--rhmdp-day-selected-text": "#ffffff",
      "--rhmdp-day-range-bg": "#d1fae5",
      "--rhmdp-day-range-hover-bg": "#ecfdf5",
      "--rhmdp-day-hover-bg": "#d6f7e7",
      "--rhmdp-day-today-text": "#14b8a6",
      "--rhmdp-day-weekend-text": "#f59e0b",
      "--rhmdp-weekday-text": "#5eada2",
      "--rhmdp-title-text": "#0f766e",
      "--rhmdp-arrow-text": "#14b8a6",
      "--rhmdp-header-select-bg": "#ecfdf5",
      "--rhmdp-header-select-text": "#0f766e",
      "--rhmdp-header-select-border": "#b7ebdd",
      "--rhmdp-header-select-radius": "8px",
      "--rhmdp-header-select-padding": "4px 6px",
      // Soft, calm type — medium days, gentle uppercase weekday caps.
      "--rhmdp-day-weight": "500",
      "--rhmdp-day-size": "0.95rem",
      "--rhmdp-weekday-weight": "600",
      "--rhmdp-weekday-size": "0.72rem",
      "--rhmdp-title-weight": "700",
      "--rhmdp-title-size": "1.45rem",
      "--rhmdp-header-weight": "600"
    }),
    selectedAccent: {
      boxShadow: "0 6px 14px rgba(20, 184, 166, 0.4)"
    }
  })
}`,...(G=(K=s.parameters)==null?void 0:K.docs)==null?void 0:G.source},description:{story:`Soft, calm pastels — a mint/teal palette with rounded pills and a gentle mint
fill for the selected range.`,...(W=(H=s.parameters)==null?void 0:H.docs)==null?void 0:W.description}}};var V,I,Y,q,J;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: singleArgs,
  render: ThemedCalendar({
    page: {
      background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)"
    },
    card: {
      background: "#1e1b4b",
      border: "1px solid #3730a3",
      borderRadius: 18,
      padding: 22,
      boxShadow: "0 24px 60px rgba(0,0,0,0.5)"
    },
    tokens: vars({
      ...DEFAULT_TOKENS,
      "--rhmdp-day-radius": "10px",
      "--rhmdp-day-text": "#e0e7ff",
      "--rhmdp-day-muted-text": "#6d6aa8",
      "--rhmdp-day-selected-text": "#1e1b4b",
      "--rhmdp-day-hover-bg": "#2d2a66",
      "--rhmdp-day-today-text": "#fbbf24",
      "--rhmdp-day-weekend-text": "#818cf8",
      "--rhmdp-weekday-text": "#a5b4fc",
      "--rhmdp-title-text": "#fde68a",
      "--rhmdp-arrow-text": "#fbbf24",
      "--rhmdp-header-select-bg": "#312e81",
      "--rhmdp-header-select-text": "#e0e7ff",
      "--rhmdp-header-select-border": "#4338ca",
      "--rhmdp-header-select-radius": "8px",
      "--rhmdp-header-select-padding": "4px 6px",
      // Restrained weights so the gold serif title carries the drama.
      "--rhmdp-day-weight": "500",
      "--rhmdp-day-size": "0.95rem",
      "--rhmdp-weekday-weight": "600",
      "--rhmdp-weekday-size": "0.7rem",
      "--rhmdp-title-weight": "600",
      "--rhmdp-title-size": "1.6rem",
      "--rhmdp-header-weight": "600"
    }),
    // A gold serif title is the luxe flourish (font-family isn't a token).
    title: {
      fontFamily: "Georgia, 'Times New Roman', serif",
      letterSpacing: 1
    },
    selectedAccent: {
      background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
      boxShadow: "0 6px 16px rgba(251, 191, 36, 0.45)"
    }
  })
}`,...(Y=(I=o.parameters)==null?void 0:I.docs)==null?void 0:Y.source},description:{story:`Luxe and dramatic: deep indigo card with a warm gold gradient accent for the
selected day.`,...(J=(q=o.parameters)==null?void 0:q.docs)==null?void 0:J.description}}};var Q,X,Z,$,ee;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: rangeArgs,
  render: ThemedCalendar({
    page: {
      background: "#f4f4f5"
    },
    card: {
      background: "#fff",
      borderRadius: 0,
      padding: 10,
      border: "1px solid #acb5be",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
    },
    tokens: vars({
      ...DEFAULT_TOKENS,
      "--rhmdp-day-radius": "0px",
      "--rhmdp-day-border": "#c7cbcf",
      "--rhmdp-day-full-border-width": "1px",
      "--rhmdp-day-selected-bg": "#d80202",
      "--rhmdp-day-selected-text": "#ffffff",
      "--rhmdp-day-range-bg": "#ff9a9a",
      "--rhmdp-day-range-hover-bg": "#ffd0d0",
      "--rhmdp-day-hover-bg": "#ffe3e3",
      // Today / weekend tie back into the crimson palette (not the blue default).
      "--rhmdp-day-today-text": "#d80202",
      "--rhmdp-day-weekend-text": "#cf4d4d",
      "--rhmdp-weekday-text": "#7a7a7a",
      ...lightSelectTokens,
      // Tight, tabular grid type with bold uppercase weekday headers.
      "--rhmdp-day-weight": "400",
      "--rhmdp-day-size": "0.9rem",
      "--rhmdp-weekday-weight": "700",
      "--rhmdp-weekday-size": "0.7rem",
      "--rhmdp-header-weight": "700"
    }),
    grid: {
      gap: 2
    },
    // Spaced, uppercase title gives the spreadsheet grid an editorial header.
    title: {
      fontWeight: 700,
      fontSize: "1.05em",
      letterSpacing: 4,
      textTransform: "uppercase",
      textAlign: "center",
      marginBottom: 10
    },
    // A crimson rule under the nav frames the grid (distinct from Lime's box).
    headerRoot: {
      borderBottom: "1px solid #cccccc",
      marginBottom: 8,
      paddingBottom: 6
    }
  })
}`,...(Z=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:`A bordered, square-celled grid with a bold crimson selection — a structured,
spreadsheet-like take on the range picker.`,...(ee=($=c.parameters)==null?void 0:$.docs)==null?void 0:ee.description}}};var de,re,ae,te,he;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: rangeArgs,
  render: ThemedCalendar({
    page: {
      background: "#f4f4f5"
    },
    card: {
      background: "#fff",
      borderRadius: 0,
      padding: 10,
      border: "1px solid #acb5be",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
    },
    tokens: vars({
      ...DEFAULT_TOKENS,
      "--rhmdp-day-radius": "0px",
      "--rhmdp-day-border": "#d6dadf",
      "--rhmdp-day-text": "#494949",
      "--rhmdp-day-selected-bg": "#a4fc00",
      "--rhmdp-day-selected-text": "#1a2e05",
      "--rhmdp-day-range-bg": "#e7ffb9",
      "--rhmdp-day-range-hover-bg": "#ecf8d5",
      "--rhmdp-day-hover-bg": "#eef7d2",
      // Lime-tied today (not the blue default) keeps the palette coherent.
      "--rhmdp-day-today-text": "#65a30d",
      "--rhmdp-day-weekend-text": "#ff0000",
      "--rhmdp-weekday-text": "#7a7a7a",
      "--rhmdp-title-text": "#5c5c5c",
      ...lightSelectTokens,
      // Thin, wide-tracked type — the airy opposite of Crimson's bold grid.
      "--rhmdp-day-weight": "400",
      "--rhmdp-day-size": "0.9rem",
      "--rhmdp-weekday-weight": "500",
      "--rhmdp-weekday-size": "0.7rem",
      "--rhmdp-header-weight": "400"
    }),
    title: {
      fontWeight: 200,
      fontSize: "1.2em",
      marginBottom: 10,
      textAlign: "center",
      letterSpacing: 16,
      textTransform: "uppercase"
    },
    headerRoot: {
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      borderRadius: 7,
      marginBottom: 10,
      padding: 10,
      background: "linear-gradient(0deg, #ffffff 0%, #f4f4f4 100%)"
    }
  })
}`,...(ae=(re=f.parameters)==null?void 0:re.docs)==null?void 0:ae.source},description:{story:`Grid-lined and airy: hairline shared borders, a wide-tracked thin uppercase
title set in an inset header bar, and a punchy lime selection. The light,
editorial counterpart to Crimson Grid's bold, tight grid.`,...(he=(te=f.parameters)==null?void 0:te.docs)==null?void 0:he.description}}};var pe,ne,me,ie,se;g.parameters={...g.parameters,docs:{...(pe=g.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: singleArgs,
  render: ThemedCalendar({
    page: {
      background: "#f2f2f7"
    },
    card: {
      background: "#ffffff",
      borderRadius: 16,
      padding: 20,
      border: "1px solid #e5e5ea",
      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif"
    },
    tokens: vars({
      ...DEFAULT_TOKENS,
      "--rhmdp-day-radius": "999px",
      "--rhmdp-day-text": "#1c1c1e",
      "--rhmdp-day-muted-text": "#c7c7cc",
      "--rhmdp-day-selected-bg": "#ff3b30",
      "--rhmdp-day-selected-text": "#ffffff",
      "--rhmdp-day-hover-bg": "#f2f2f7",
      "--rhmdp-day-today-text": "#ff3b30",
      "--rhmdp-day-weekend-text": "#8e8e93",
      "--rhmdp-weekday-text": "#8e8e93",
      "--rhmdp-title-text": "#1c1c1e",
      "--rhmdp-arrow-text": "#ff3b30",
      "--rhmdp-arrow-hover-bg": "#f2f2f7",
      "--rhmdp-arrow-hover-text": "#ff3b30",
      "--rhmdp-header-select-bg": "#f2f2f7",
      "--rhmdp-header-select-text": "#1c1c1e",
      "--rhmdp-header-select-radius": "8px",
      "--rhmdp-header-select-padding": "4px 6px",
      // SF-style: regular day numbers, semibold headers, small-caps weekdays.
      "--rhmdp-day-weight": "400",
      "--rhmdp-day-size": "1.05rem",
      "--rhmdp-weekday-weight": "600",
      "--rhmdp-weekday-size": "0.7rem",
      "--rhmdp-title-weight": "600",
      "--rhmdp-title-size": "1.3rem",
      "--rhmdp-header-weight": "600"
    })
  })
}`,...(me=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:me.source},description:{story:`The native iOS Calendar look: a crisp white sheet on a light-grey backdrop,
the system red accent for today and the selected day, and fully-rounded day
circles.`,...(se=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:se.description}}};var oe,ce,fe,ge,le;l.parameters={...l.parameters,docs:{...(oe=l.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: rangeArgs,
  render: ThemedCalendar({
    page: {
      background: "#e7e0ec"
    },
    card: {
      background: "#fffbfe",
      borderRadius: 28,
      padding: 22,
      boxShadow: "0 12px 32px rgba(103, 80, 164, 0.22)",
      fontFamily: "Roboto, 'Google Sans', system-ui, sans-serif"
    },
    tokens: vars({
      ...DEFAULT_TOKENS,
      "--rhmdp-day-radius": "999px",
      "--rhmdp-day-text": "#1c1b1f",
      "--rhmdp-day-muted-text": "#c4c0c9",
      "--rhmdp-day-selected-bg": "#6750a4",
      "--rhmdp-day-selected-text": "#ffffff",
      "--rhmdp-day-range-bg": "#e8def8",
      "--rhmdp-day-range-hover-bg": "#f3edf7",
      "--rhmdp-day-hover-bg": "#ece6f4",
      "--rhmdp-day-hover-text": "#21005d",
      "--rhmdp-day-today-text": "#6750a4",
      "--rhmdp-day-weekend-text": "#49454f",
      "--rhmdp-weekday-text": "#49454f",
      "--rhmdp-title-text": "#1c1b1f",
      "--rhmdp-arrow-text": "#49454f",
      "--rhmdp-arrow-hover-bg": "#ece6f4",
      "--rhmdp-arrow-hover-text": "#6750a4",
      "--rhmdp-header-select-bg": "#f3edf7",
      "--rhmdp-header-select-text": "#1c1b1f",
      "--rhmdp-header-select-border": "#cac4d0",
      "--rhmdp-header-select-radius": "8px",
      "--rhmdp-header-select-padding": "4px 6px",
      // Roboto / Material 3: medium (500) weights, larger headline title.
      "--rhmdp-day-weight": "500",
      "--rhmdp-day-size": "1rem",
      "--rhmdp-weekday-weight": "500",
      "--rhmdp-weekday-size": "0.75rem",
      "--rhmdp-title-weight": "500",
      "--rhmdp-title-size": "1.375rem",
      "--rhmdp-header-weight": "500"
    })
  })
}`,...(fe=(ce=l.parameters)==null?void 0:ce.docs)==null?void 0:fe.source},description:{story:'Material 3 / "Material You": a soft purple-tinted surface, the signature\n`#6750A4` primary for the selected ends, a light primary-container fill for\nthe in-range days and generously rounded corners.',...(le=(ge=l.parameters)==null?void 0:ge.docs)==null?void 0:le.description}}};var ye,be,xe,we,ue;y.parameters={...y.parameters,docs:{...(ye=y.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: singleArgs,
  render: ThemedCalendar({
    panelHeader: true,
    page: {
      background: "#f2f2f7"
    },
    card: {
      width: 220,
      background: "#ffffff",
      borderRadius: 10,
      padding: "0 1rem 0.75rem",
      border: "1px solid #e5e5ea",
      boxShadow: "0 6px 18px rgba(0,0,0,0.06)"
    },
    tokens: vars({
      ...DEFAULT_TOKENS,
      // The compact knobs: tight cells, small type, modest radius.
      "--rhmdp-day-padding": "0.2rem",
      "--rhmdp-day-height": "1.85rem",
      "--rhmdp-day-radius": "7px",
      "--rhmdp-day-size": "0.78rem",
      "--rhmdp-day-weight": "500",
      "--rhmdp-day-text": "#1c1c1e",
      "--rhmdp-day-muted-text": "#c7c7cc",
      "--rhmdp-day-selected-bg": "#007aff",
      "--rhmdp-day-selected-text": "#ffffff",
      "--rhmdp-day-hover-bg": "#eef1f6",
      "--rhmdp-day-today-text": "#007aff",
      "--rhmdp-weekday-text": "#8e8e93",
      "--rhmdp-weekday-weight": "600",
      "--rhmdp-weekday-size": "0.62rem",
      "--rhmdp-title-text": "#1c1c1e",
      "--rhmdp-title-weight": "600",
      "--rhmdp-title-size": "0.95rem",
      "--rhmdp-header-weight": "600",
      "--rhmdp-header-select-bg": "#f2f2f7",
      "--rhmdp-header-select-text": "#1c1c1e",
      "--rhmdp-header-select-radius": "6px",
      "--rhmdp-header-select-padding": "2px 4px",
      "--rhmdp-header-select-size": "0.78rem",
      "--rhmdp-panel-cell-size": "12px"
    })
  })
}`,...(xe=(be=y.parameters)==null?void 0:be.docs)==null?void 0:xe.source},description:{story:"A space-saving, dense layout — ideal for tight popovers or sidebars. Nothing\nbut tokens shrink it: smaller day cells (`--rhmdp-day-padding` /\n`--rhmdp-day-height`), smaller type and a tighter radius, on a narrow card.\nUses the in-grid `PanelHeader` so the month/year pickers don't add a separate\nrow — keeping the footprint minimal.",...(ue=(we=y.parameters)==null?void 0:we.docs)==null?void 0:ue.description}}};const Le=["AuroraGlass","MidnightNeon","SunsetPeach","MinimalMono","MintFresh","RoyalGold","CrimsonGrid","LimeSheet","IOSCupertino","AndroidMaterialYou","Compact"];export{l as AndroidMaterialYou,p as AuroraGlass,y as Compact,c as CrimsonGrid,g as IOSCupertino,f as LimeSheet,n as MidnightNeon,i as MinimalMono,s as MintFresh,o as RoyalGold,m as SunsetPeach,Le as __namedExportsOrder,Ne as default};
