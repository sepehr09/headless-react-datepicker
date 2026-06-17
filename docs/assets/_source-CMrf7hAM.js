const d=(e,r)=>e.split(`
`).map(t=>t&&r+t).join(`
`),o=(e,r="")=>{if(e===null)return"null";if(e instanceof Date)return`new Date("${e.toISOString()}")`;if(Array.isArray(e))return`[${e.map(t=>o(t,r)).join(", ")}]`;if(typeof e=="object"){const t=Object.entries(e).filter(([,s])=>s!==void 0);return t.length?`{
${t.map(([s,a])=>`${r}  ${s}: ${o(a,r+"  ")}`).join(`,
`)}
${r}}`:"{}"}return JSON.stringify(e)},$=["isRange","initialValue","value","defaultStartDate","calendar","config"],c=(e,r)=>{const t=[];for(const n of $){const s=e[n];s!==void 0&&(typeof s=="string"?t.push(`${n}="${s}"`):typeof s=="boolean"?t.push(`${n}={${s}}`):t.push(`${n}={${o(s,`${r}`)}}`))}return t},l=e=>`import DatePickerProvider, {
${e.map(r=>`  ${r},`).join(`
`)}
} from "headless-react-datepicker";`,p=(e,r,t)=>{const n=c(e,"    "),s=n.length?`<DatePickerProvider
${n.map(a=>`    ${a}`).join(`
`)}
  >`:"<DatePickerProvider>";return`import "headless-react-datepicker/styles.css";
${l(r)}

const MyDatePicker = () => (
  ${s}
${d(t,"    ")}
  </DatePickerProvider>
);`},u=e=>({docs:{source:{language:"tsx",transform:(r,t)=>e(t.args)}}}),i=(e,r)=>u(t=>p(t,e,r)),D=i(["Title","Header","WeekDays","DaySlots"],`<Title />
<Header />
<WeekDays />
<DaySlots />`),y=i(["PanelHeader","WeekDays","DaySlots"],`<PanelHeader>
  <WeekDays />
  <DaySlots />
</PanelHeader>`),f=(e,r)=>i(e,r),P=u(e=>{const r=c({...e,initialValue:void 0},"      "),t=o(e.initialValue,"  ");return`import "headless-react-datepicker/styles.css";
import { useState } from "react";
${l(["Title","Header","WeekDays","DaySlots"])}

const MyDatePicker = () => {
  const [value, setValue] = useState(${t});

  return (
    <DatePickerProvider
${r.map(n=>`      ${n}`).join(`
`)}
      value={value}
      onChange={setValue}
    >
      <Title />
      <Header />
      <WeekDays />
      <DaySlots />
    </DatePickerProvider>
  );
};`});export{f as a,D as b,P as c,y as p,i as s};
