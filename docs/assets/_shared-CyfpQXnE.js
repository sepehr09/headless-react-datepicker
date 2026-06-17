import{j as e}from"./jsx-runtime-5SbWow9j.js";import{r as p}from"./iframe-Ib4hGz91.js";import{D as d,T as o,i as c,W as l,d as i,j as g,k}from"./WeekDays-CwwOFGCo.js";const v={"--rhmdp-header-select-bg":"#f0f0f0","--rhmdp-header-select-text":"#000","--rhmdp-header-select-radius":"5px","--rhmdp-header-select-padding":"5px"},u=({children:a})=>e.jsx("div",{style:{...v,background:"#fff",boxShadow:"0 2px 5px rgba(0, 0, 0, 0.1)",width:"300px",borderRadius:"0px",margin:"30px auto",padding:"10px"},children:a}),b=a=>e.jsx(u,{children:e.jsxs(d,{...a,children:[e.jsx(o,{}),e.jsx(c,{}),e.jsx(l,{}),e.jsx(i,{})]})}),S=a=>{const[t,n]=p.useState(a==null?void 0:a.initialValue),s=r=>{var f;(f=a==null?void 0:a.onChange)==null||f.call(a,r),console.log("onChange: ",r),n(r)};return e.jsxs(e.Fragment,{children:[e.jsx(u,{children:e.jsxs(d,{...a,initialValue:t,value:t,onChange:s,children:[e.jsx(o,{}),e.jsx(c,{}),e.jsx(l,{}),e.jsx(i,{onClickSlot:r=>{console.log("onClickSlot",r)}})]})}),e.jsx("div",{style:{width:300,margin:"auto"},children:e.jsx("button",{onClick:()=>n(a.isRange?[new Date("2024-06-24"),new Date("2024-06-28")]:new Date("2024-06-24")),style:{background:"#ddd",padding:7,borderRadius:7},children:"Set Custom Value to 2024-06-24"})})]})},q=a=>e.jsx(u,{children:e.jsxs(d,{...a,children:[e.jsx(o,{}),e.jsx(c,{leftIcon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})}),rightIcon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})})}),e.jsx(l,{}),e.jsx(i,{})]})}),D=a=>e.jsx("div",{style:{...v,background:"#fff",boxShadow:"0 2px 5px rgba(0, 0, 0, 0.1)",width:"640px",borderRadius:"8px",margin:"30px auto",padding:"16px"},children:e.jsxs(d,{...a,children:[e.jsx(c,{navigationStep:2}),e.jsxs("div",{style:{display:"flex",gap:"24px"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx(o,{style:{textAlign:"center"}}),e.jsx(l,{}),e.jsx(i,{})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx(o,{monthOffset:1,style:{textAlign:"center"}}),e.jsx(l,{}),e.jsx(i,{monthOffset:1})]})]})]})}),T=a=>{const{timePickerProps:t,...n}=a,[s,r]=p.useState(n.initialValue),f=h=>{var m;(m=n==null?void 0:n.onChange)==null||m.call(n,h),r(h)},y=h=>{var m;return new Intl.DateTimeFormat(((m=n.config)==null?void 0:m.locale)||"en-US",{dateStyle:"medium",timeStyle:t!=null&&t.showSeconds?"medium":"short",calendar:n.calendar,hour12:t==null?void 0:t.use12Hours}).format(h)},w=Array.isArray(s)?s.map(y).join("  —  "):s?y(s):"—";return e.jsx(u,{children:e.jsxs(d,{...n,onChange:f,children:[e.jsx(o,{}),e.jsx(c,{}),e.jsx(l,{}),e.jsx(i,{}),e.jsx("div",{style:{borderTop:"1px solid #eee",marginTop:8,paddingTop:8},children:e.jsx(k,{...t})}),e.jsx("div",{style:{textAlign:"center",marginTop:8,fontSize:14,color:"#444"},children:w})]})})},x=a=>e.jsx(u,{children:e.jsx(d,{...a,children:e.jsxs(g,{children:[e.jsx(l,{}),e.jsx(i,{})]})})});u.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"RenderDatePicker",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},initialValue:{required:!1,tsType:{name:"union",raw:`| (IsRange extends true ? Date[] : Date)
| undefined`,elements:[{name:"unknown"},{name:"undefined"}]},description:"The initial value of the date picker."},value:{required:!1,tsType:{name:"union",raw:`| (IsRange extends true ? Date[] : Date)
| undefined`,elements:[{name:"unknown"},{name:"undefined"}]},description:"The value of the date picker (controlled mode)"},defaultStartDate:{required:!1,tsType:{name:"Date"},description:`The default start date. Useful when you want to be on different month or year despite the initial value.
@default initialValue || new Date()`},config:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /**
   * The first day of the week.
   * @default "Saturday"
   */
  weekStartsOn?: TDay;

  /**
   * The locale to use.
   * @default "en-US"
   */
  locale?: string;

  /**
   * Show other days from the previous and next month or not.
   * @default false
   */
  showOtherDays?: boolean;

  /**
   * Allow selecting other days from the previous and next month or not.
   * @default false
   */
  otherDaysSelectable?: boolean;

  /**
   * @default "narrow"
   */
  weekdayFormat?: "long" | "short" | "narrow" | undefined;

  /**
   * @default "numeric"
   */
  dayFormat?: "numeric" | "2-digit" | undefined;

  /**
   * @default "last 10 years"
   */
  yearRangeFrom?: number;

  /**
   * @default "Current year"
   */
  yearRangeTo?: number;

  /**
   * Prevent selecting dates before this date.
   */
  maxDate?: Date;

  /**
   * Prevent selecting dates after this date.
   */
  minDate?: Date;

  /**
   * Specify which days of the week are weekend.
   */
  weekends?: TDay[];

  /**
   * Specify which days of the month are holidays.
   */
  holidays?: Date[];

  /**
   * Allow selecting weekends or not.
   * @default true
   */
  weekendSelectable?: boolean;

  /**
   * Allow selecting holidays or not.
   * @default false
   */
  holidaySelectable?: boolean;

  /**
   * If user select a date before the previous selected date, it will be considered as a range or start from beginning.
   * @default false
   */
  allowBackwardRange?: boolean;
}`,signature:{properties:[{key:"weekStartsOn",value:{name:"union",raw:`| "monday"
| "tuesday"
| "wednesday"
| "thursday"
| "friday"
| "saturday"
| "sunday"`,elements:[{name:"literal",value:'"monday"'},{name:"literal",value:'"tuesday"'},{name:"literal",value:'"wednesday"'},{name:"literal",value:'"thursday"'},{name:"literal",value:'"friday"'},{name:"literal",value:'"saturday"'},{name:"literal",value:'"sunday"'}],required:!1},description:`The first day of the week.
@default "Saturday"`},{key:"locale",value:{name:"string",required:!1},description:`The locale to use.
@default "en-US"`},{key:"showOtherDays",value:{name:"boolean",required:!1},description:`Show other days from the previous and next month or not.
@default false`},{key:"otherDaysSelectable",value:{name:"boolean",required:!1},description:`Allow selecting other days from the previous and next month or not.
@default false`},{key:"weekdayFormat",value:{name:"union",raw:'"long" | "short" | "narrow" | undefined',elements:[{name:"literal",value:'"long"'},{name:"literal",value:'"short"'},{name:"literal",value:'"narrow"'},{name:"undefined"}],required:!1},description:'@default "narrow"'},{key:"dayFormat",value:{name:"union",raw:'"numeric" | "2-digit" | undefined',elements:[{name:"literal",value:'"numeric"'},{name:"literal",value:'"2-digit"'},{name:"undefined"}],required:!1},description:'@default "numeric"'},{key:"yearRangeFrom",value:{name:"number",required:!1},description:'@default "last 10 years"'},{key:"yearRangeTo",value:{name:"number",required:!1},description:'@default "Current year"'},{key:"maxDate",value:{name:"Date",required:!1},description:"Prevent selecting dates before this date."},{key:"minDate",value:{name:"Date",required:!1},description:"Prevent selecting dates after this date."},{key:"weekends",value:{name:"Array",elements:[{name:"union",raw:`| "monday"
| "tuesday"
| "wednesday"
| "thursday"
| "friday"
| "saturday"
| "sunday"`,elements:[{name:"literal",value:'"monday"'},{name:"literal",value:'"tuesday"'},{name:"literal",value:'"wednesday"'},{name:"literal",value:'"thursday"'},{name:"literal",value:'"friday"'},{name:"literal",value:'"saturday"'},{name:"literal",value:'"sunday"'}],required:!1}],raw:"TDay[]",required:!1},description:"Specify which days of the week are weekend."},{key:"holidays",value:{name:"Array",elements:[{name:"Date"}],raw:"Date[]",required:!1},description:"Specify which days of the month are holidays."},{key:"weekendSelectable",value:{name:"boolean",required:!1},description:`Allow selecting weekends or not.
@default true`},{key:"holidaySelectable",value:{name:"boolean",required:!1},description:`Allow selecting holidays or not.
@default false`},{key:"allowBackwardRange",value:{name:"boolean",required:!1},description:`If user select a date before the previous selected date, it will be considered as a range or start from beginning.
@default false`}]}},description:`The configuration for the date picker.
@type TCalendarConfig`},isRange:{required:!1,tsType:{name:"IsRange"},description:`Indicates whether the date picker is a range picker.
@default false`},calendar:{required:!1,tsType:{name:"union",raw:`| "gregory"
| "persian"
| "islamic"
| "islamic-umalqura"
| "islamic-tbla"
| "islamic-civil"
| "islamic-rgsa"
| "iso8601"
| "japanese"
| "islamicc"
| "roc"
| "chinese"
| "indian"
| "buddhist"
| "coptic"
| "dangi"
| "ethioaa"
| "ethiopic"
| "hebrew"`,elements:[{name:"literal",value:'"gregory"'},{name:"literal",value:'"persian"'},{name:"literal",value:'"islamic"'},{name:"literal",value:'"islamic-umalqura"'},{name:"literal",value:'"islamic-tbla"'},{name:"literal",value:'"islamic-civil"'},{name:"literal",value:'"islamic-rgsa"'},{name:"literal",value:'"iso8601"'},{name:"literal",value:'"japanese"'},{name:"literal",value:'"islamicc"'},{name:"literal",value:'"roc"'},{name:"literal",value:'"chinese"'},{name:"literal",value:'"indian"'},{name:"literal",value:'"buddhist"'},{name:"literal",value:'"coptic"'},{name:"literal",value:'"dangi"'},{name:"literal",value:'"ethioaa"'},{name:"literal",value:'"ethiopic"'},{name:"literal",value:'"hebrew"'}]},description:`The calendar to use.
@default "gregory"`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: IsRange extends true ? Date[] : Date
) => void`,signature:{arguments:[{type:{name:"unknown"},name:"value"}],return:{name:"void"}}},description:"on calendar selected date change"}}};S.__docgenInfo={description:"",methods:[],displayName:"RenderControlledDatePicker",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},initialValue:{required:!1,tsType:{name:"union",raw:`| (IsRange extends true ? Date[] : Date)
| undefined`,elements:[{name:"unknown"},{name:"undefined"}]},description:"The initial value of the date picker."},value:{required:!1,tsType:{name:"union",raw:`| (IsRange extends true ? Date[] : Date)
| undefined`,elements:[{name:"unknown"},{name:"undefined"}]},description:"The value of the date picker (controlled mode)"},defaultStartDate:{required:!1,tsType:{name:"Date"},description:`The default start date. Useful when you want to be on different month or year despite the initial value.
@default initialValue || new Date()`},config:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /**
   * The first day of the week.
   * @default "Saturday"
   */
  weekStartsOn?: TDay;

  /**
   * The locale to use.
   * @default "en-US"
   */
  locale?: string;

  /**
   * Show other days from the previous and next month or not.
   * @default false
   */
  showOtherDays?: boolean;

  /**
   * Allow selecting other days from the previous and next month or not.
   * @default false
   */
  otherDaysSelectable?: boolean;

  /**
   * @default "narrow"
   */
  weekdayFormat?: "long" | "short" | "narrow" | undefined;

  /**
   * @default "numeric"
   */
  dayFormat?: "numeric" | "2-digit" | undefined;

  /**
   * @default "last 10 years"
   */
  yearRangeFrom?: number;

  /**
   * @default "Current year"
   */
  yearRangeTo?: number;

  /**
   * Prevent selecting dates before this date.
   */
  maxDate?: Date;

  /**
   * Prevent selecting dates after this date.
   */
  minDate?: Date;

  /**
   * Specify which days of the week are weekend.
   */
  weekends?: TDay[];

  /**
   * Specify which days of the month are holidays.
   */
  holidays?: Date[];

  /**
   * Allow selecting weekends or not.
   * @default true
   */
  weekendSelectable?: boolean;

  /**
   * Allow selecting holidays or not.
   * @default false
   */
  holidaySelectable?: boolean;

  /**
   * If user select a date before the previous selected date, it will be considered as a range or start from beginning.
   * @default false
   */
  allowBackwardRange?: boolean;
}`,signature:{properties:[{key:"weekStartsOn",value:{name:"union",raw:`| "monday"
| "tuesday"
| "wednesday"
| "thursday"
| "friday"
| "saturday"
| "sunday"`,elements:[{name:"literal",value:'"monday"'},{name:"literal",value:'"tuesday"'},{name:"literal",value:'"wednesday"'},{name:"literal",value:'"thursday"'},{name:"literal",value:'"friday"'},{name:"literal",value:'"saturday"'},{name:"literal",value:'"sunday"'}],required:!1},description:`The first day of the week.
@default "Saturday"`},{key:"locale",value:{name:"string",required:!1},description:`The locale to use.
@default "en-US"`},{key:"showOtherDays",value:{name:"boolean",required:!1},description:`Show other days from the previous and next month or not.
@default false`},{key:"otherDaysSelectable",value:{name:"boolean",required:!1},description:`Allow selecting other days from the previous and next month or not.
@default false`},{key:"weekdayFormat",value:{name:"union",raw:'"long" | "short" | "narrow" | undefined',elements:[{name:"literal",value:'"long"'},{name:"literal",value:'"short"'},{name:"literal",value:'"narrow"'},{name:"undefined"}],required:!1},description:'@default "narrow"'},{key:"dayFormat",value:{name:"union",raw:'"numeric" | "2-digit" | undefined',elements:[{name:"literal",value:'"numeric"'},{name:"literal",value:'"2-digit"'},{name:"undefined"}],required:!1},description:'@default "numeric"'},{key:"yearRangeFrom",value:{name:"number",required:!1},description:'@default "last 10 years"'},{key:"yearRangeTo",value:{name:"number",required:!1},description:'@default "Current year"'},{key:"maxDate",value:{name:"Date",required:!1},description:"Prevent selecting dates before this date."},{key:"minDate",value:{name:"Date",required:!1},description:"Prevent selecting dates after this date."},{key:"weekends",value:{name:"Array",elements:[{name:"union",raw:`| "monday"
| "tuesday"
| "wednesday"
| "thursday"
| "friday"
| "saturday"
| "sunday"`,elements:[{name:"literal",value:'"monday"'},{name:"literal",value:'"tuesday"'},{name:"literal",value:'"wednesday"'},{name:"literal",value:'"thursday"'},{name:"literal",value:'"friday"'},{name:"literal",value:'"saturday"'},{name:"literal",value:'"sunday"'}],required:!1}],raw:"TDay[]",required:!1},description:"Specify which days of the week are weekend."},{key:"holidays",value:{name:"Array",elements:[{name:"Date"}],raw:"Date[]",required:!1},description:"Specify which days of the month are holidays."},{key:"weekendSelectable",value:{name:"boolean",required:!1},description:`Allow selecting weekends or not.
@default true`},{key:"holidaySelectable",value:{name:"boolean",required:!1},description:`Allow selecting holidays or not.
@default false`},{key:"allowBackwardRange",value:{name:"boolean",required:!1},description:`If user select a date before the previous selected date, it will be considered as a range or start from beginning.
@default false`}]}},description:`The configuration for the date picker.
@type TCalendarConfig`},isRange:{required:!1,tsType:{name:"IsRange"},description:`Indicates whether the date picker is a range picker.
@default false`},calendar:{required:!1,tsType:{name:"union",raw:`| "gregory"
| "persian"
| "islamic"
| "islamic-umalqura"
| "islamic-tbla"
| "islamic-civil"
| "islamic-rgsa"
| "iso8601"
| "japanese"
| "islamicc"
| "roc"
| "chinese"
| "indian"
| "buddhist"
| "coptic"
| "dangi"
| "ethioaa"
| "ethiopic"
| "hebrew"`,elements:[{name:"literal",value:'"gregory"'},{name:"literal",value:'"persian"'},{name:"literal",value:'"islamic"'},{name:"literal",value:'"islamic-umalqura"'},{name:"literal",value:'"islamic-tbla"'},{name:"literal",value:'"islamic-civil"'},{name:"literal",value:'"islamic-rgsa"'},{name:"literal",value:'"iso8601"'},{name:"literal",value:'"japanese"'},{name:"literal",value:'"islamicc"'},{name:"literal",value:'"roc"'},{name:"literal",value:'"chinese"'},{name:"literal",value:'"indian"'},{name:"literal",value:'"buddhist"'},{name:"literal",value:'"coptic"'},{name:"literal",value:'"dangi"'},{name:"literal",value:'"ethioaa"'},{name:"literal",value:'"ethiopic"'},{name:"literal",value:'"hebrew"'}]},description:`The calendar to use.
@default "gregory"`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: IsRange extends true ? Date[] : Date
) => void`,signature:{arguments:[{type:{name:"unknown"},name:"value"}],return:{name:"void"}}},description:"on calendar selected date change"}}};q.__docgenInfo={description:"Custom navigation icons. `Header` accepts `leftIcon` / `rightIcon` as plain\n`ReactNode`, so you can drop in any SVG, emoji or icon-library component to\nreplace the default chevrons — they inherit the `--rhmdp-arrow-*` theming.",methods:[],displayName:"RenderCustomIconsDatePicker",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},initialValue:{required:!1,tsType:{name:"union",raw:`| (IsRange extends true ? Date[] : Date)
| undefined`,elements:[{name:"unknown"},{name:"undefined"}]},description:"The initial value of the date picker."},value:{required:!1,tsType:{name:"union",raw:`| (IsRange extends true ? Date[] : Date)
| undefined`,elements:[{name:"unknown"},{name:"undefined"}]},description:"The value of the date picker (controlled mode)"},defaultStartDate:{required:!1,tsType:{name:"Date"},description:`The default start date. Useful when you want to be on different month or year despite the initial value.
@default initialValue || new Date()`},config:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /**
   * The first day of the week.
   * @default "Saturday"
   */
  weekStartsOn?: TDay;

  /**
   * The locale to use.
   * @default "en-US"
   */
  locale?: string;

  /**
   * Show other days from the previous and next month or not.
   * @default false
   */
  showOtherDays?: boolean;

  /**
   * Allow selecting other days from the previous and next month or not.
   * @default false
   */
  otherDaysSelectable?: boolean;

  /**
   * @default "narrow"
   */
  weekdayFormat?: "long" | "short" | "narrow" | undefined;

  /**
   * @default "numeric"
   */
  dayFormat?: "numeric" | "2-digit" | undefined;

  /**
   * @default "last 10 years"
   */
  yearRangeFrom?: number;

  /**
   * @default "Current year"
   */
  yearRangeTo?: number;

  /**
   * Prevent selecting dates before this date.
   */
  maxDate?: Date;

  /**
   * Prevent selecting dates after this date.
   */
  minDate?: Date;

  /**
   * Specify which days of the week are weekend.
   */
  weekends?: TDay[];

  /**
   * Specify which days of the month are holidays.
   */
  holidays?: Date[];

  /**
   * Allow selecting weekends or not.
   * @default true
   */
  weekendSelectable?: boolean;

  /**
   * Allow selecting holidays or not.
   * @default false
   */
  holidaySelectable?: boolean;

  /**
   * If user select a date before the previous selected date, it will be considered as a range or start from beginning.
   * @default false
   */
  allowBackwardRange?: boolean;
}`,signature:{properties:[{key:"weekStartsOn",value:{name:"union",raw:`| "monday"
| "tuesday"
| "wednesday"
| "thursday"
| "friday"
| "saturday"
| "sunday"`,elements:[{name:"literal",value:'"monday"'},{name:"literal",value:'"tuesday"'},{name:"literal",value:'"wednesday"'},{name:"literal",value:'"thursday"'},{name:"literal",value:'"friday"'},{name:"literal",value:'"saturday"'},{name:"literal",value:'"sunday"'}],required:!1},description:`The first day of the week.
@default "Saturday"`},{key:"locale",value:{name:"string",required:!1},description:`The locale to use.
@default "en-US"`},{key:"showOtherDays",value:{name:"boolean",required:!1},description:`Show other days from the previous and next month or not.
@default false`},{key:"otherDaysSelectable",value:{name:"boolean",required:!1},description:`Allow selecting other days from the previous and next month or not.
@default false`},{key:"weekdayFormat",value:{name:"union",raw:'"long" | "short" | "narrow" | undefined',elements:[{name:"literal",value:'"long"'},{name:"literal",value:'"short"'},{name:"literal",value:'"narrow"'},{name:"undefined"}],required:!1},description:'@default "narrow"'},{key:"dayFormat",value:{name:"union",raw:'"numeric" | "2-digit" | undefined',elements:[{name:"literal",value:'"numeric"'},{name:"literal",value:'"2-digit"'},{name:"undefined"}],required:!1},description:'@default "numeric"'},{key:"yearRangeFrom",value:{name:"number",required:!1},description:'@default "last 10 years"'},{key:"yearRangeTo",value:{name:"number",required:!1},description:'@default "Current year"'},{key:"maxDate",value:{name:"Date",required:!1},description:"Prevent selecting dates before this date."},{key:"minDate",value:{name:"Date",required:!1},description:"Prevent selecting dates after this date."},{key:"weekends",value:{name:"Array",elements:[{name:"union",raw:`| "monday"
| "tuesday"
| "wednesday"
| "thursday"
| "friday"
| "saturday"
| "sunday"`,elements:[{name:"literal",value:'"monday"'},{name:"literal",value:'"tuesday"'},{name:"literal",value:'"wednesday"'},{name:"literal",value:'"thursday"'},{name:"literal",value:'"friday"'},{name:"literal",value:'"saturday"'},{name:"literal",value:'"sunday"'}],required:!1}],raw:"TDay[]",required:!1},description:"Specify which days of the week are weekend."},{key:"holidays",value:{name:"Array",elements:[{name:"Date"}],raw:"Date[]",required:!1},description:"Specify which days of the month are holidays."},{key:"weekendSelectable",value:{name:"boolean",required:!1},description:`Allow selecting weekends or not.
@default true`},{key:"holidaySelectable",value:{name:"boolean",required:!1},description:`Allow selecting holidays or not.
@default false`},{key:"allowBackwardRange",value:{name:"boolean",required:!1},description:`If user select a date before the previous selected date, it will be considered as a range or start from beginning.
@default false`}]}},description:`The configuration for the date picker.
@type TCalendarConfig`},isRange:{required:!1,tsType:{name:"IsRange"},description:`Indicates whether the date picker is a range picker.
@default false`},calendar:{required:!1,tsType:{name:"union",raw:`| "gregory"
| "persian"
| "islamic"
| "islamic-umalqura"
| "islamic-tbla"
| "islamic-civil"
| "islamic-rgsa"
| "iso8601"
| "japanese"
| "islamicc"
| "roc"
| "chinese"
| "indian"
| "buddhist"
| "coptic"
| "dangi"
| "ethioaa"
| "ethiopic"
| "hebrew"`,elements:[{name:"literal",value:'"gregory"'},{name:"literal",value:'"persian"'},{name:"literal",value:'"islamic"'},{name:"literal",value:'"islamic-umalqura"'},{name:"literal",value:'"islamic-tbla"'},{name:"literal",value:'"islamic-civil"'},{name:"literal",value:'"islamic-rgsa"'},{name:"literal",value:'"iso8601"'},{name:"literal",value:'"japanese"'},{name:"literal",value:'"islamicc"'},{name:"literal",value:'"roc"'},{name:"literal",value:'"chinese"'},{name:"literal",value:'"indian"'},{name:"literal",value:'"buddhist"'},{name:"literal",value:'"coptic"'},{name:"literal",value:'"dangi"'},{name:"literal",value:'"ethioaa"'},{name:"literal",value:'"ethiopic"'},{name:"literal",value:'"hebrew"'}]},description:`The calendar to use.
@default "gregory"`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: IsRange extends true ? Date[] : Date
) => void`,signature:{arguments:[{type:{name:"unknown"},name:"value"}],return:{name:"void"}}},description:"on calendar selected date change"}}};D.__docgenInfo={description:"Two calendars side-by-side (Airbnb-style). A single shared state drives both\nmonths: the left calendar shows the current month, the right one shows the\nnext month (`monthOffset={1}`). The `Header` navigation moves both at once and\nrange selection / hover spans across the two calendars.",methods:[],displayName:"RenderDualDatePicker",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},initialValue:{required:!1,tsType:{name:"union",raw:`| (IsRange extends true ? Date[] : Date)
| undefined`,elements:[{name:"unknown"},{name:"undefined"}]},description:"The initial value of the date picker."},value:{required:!1,tsType:{name:"union",raw:`| (IsRange extends true ? Date[] : Date)
| undefined`,elements:[{name:"unknown"},{name:"undefined"}]},description:"The value of the date picker (controlled mode)"},defaultStartDate:{required:!1,tsType:{name:"Date"},description:`The default start date. Useful when you want to be on different month or year despite the initial value.
@default initialValue || new Date()`},config:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /**
   * The first day of the week.
   * @default "Saturday"
   */
  weekStartsOn?: TDay;

  /**
   * The locale to use.
   * @default "en-US"
   */
  locale?: string;

  /**
   * Show other days from the previous and next month or not.
   * @default false
   */
  showOtherDays?: boolean;

  /**
   * Allow selecting other days from the previous and next month or not.
   * @default false
   */
  otherDaysSelectable?: boolean;

  /**
   * @default "narrow"
   */
  weekdayFormat?: "long" | "short" | "narrow" | undefined;

  /**
   * @default "numeric"
   */
  dayFormat?: "numeric" | "2-digit" | undefined;

  /**
   * @default "last 10 years"
   */
  yearRangeFrom?: number;

  /**
   * @default "Current year"
   */
  yearRangeTo?: number;

  /**
   * Prevent selecting dates before this date.
   */
  maxDate?: Date;

  /**
   * Prevent selecting dates after this date.
   */
  minDate?: Date;

  /**
   * Specify which days of the week are weekend.
   */
  weekends?: TDay[];

  /**
   * Specify which days of the month are holidays.
   */
  holidays?: Date[];

  /**
   * Allow selecting weekends or not.
   * @default true
   */
  weekendSelectable?: boolean;

  /**
   * Allow selecting holidays or not.
   * @default false
   */
  holidaySelectable?: boolean;

  /**
   * If user select a date before the previous selected date, it will be considered as a range or start from beginning.
   * @default false
   */
  allowBackwardRange?: boolean;
}`,signature:{properties:[{key:"weekStartsOn",value:{name:"union",raw:`| "monday"
| "tuesday"
| "wednesday"
| "thursday"
| "friday"
| "saturday"
| "sunday"`,elements:[{name:"literal",value:'"monday"'},{name:"literal",value:'"tuesday"'},{name:"literal",value:'"wednesday"'},{name:"literal",value:'"thursday"'},{name:"literal",value:'"friday"'},{name:"literal",value:'"saturday"'},{name:"literal",value:'"sunday"'}],required:!1},description:`The first day of the week.
@default "Saturday"`},{key:"locale",value:{name:"string",required:!1},description:`The locale to use.
@default "en-US"`},{key:"showOtherDays",value:{name:"boolean",required:!1},description:`Show other days from the previous and next month or not.
@default false`},{key:"otherDaysSelectable",value:{name:"boolean",required:!1},description:`Allow selecting other days from the previous and next month or not.
@default false`},{key:"weekdayFormat",value:{name:"union",raw:'"long" | "short" | "narrow" | undefined',elements:[{name:"literal",value:'"long"'},{name:"literal",value:'"short"'},{name:"literal",value:'"narrow"'},{name:"undefined"}],required:!1},description:'@default "narrow"'},{key:"dayFormat",value:{name:"union",raw:'"numeric" | "2-digit" | undefined',elements:[{name:"literal",value:'"numeric"'},{name:"literal",value:'"2-digit"'},{name:"undefined"}],required:!1},description:'@default "numeric"'},{key:"yearRangeFrom",value:{name:"number",required:!1},description:'@default "last 10 years"'},{key:"yearRangeTo",value:{name:"number",required:!1},description:'@default "Current year"'},{key:"maxDate",value:{name:"Date",required:!1},description:"Prevent selecting dates before this date."},{key:"minDate",value:{name:"Date",required:!1},description:"Prevent selecting dates after this date."},{key:"weekends",value:{name:"Array",elements:[{name:"union",raw:`| "monday"
| "tuesday"
| "wednesday"
| "thursday"
| "friday"
| "saturday"
| "sunday"`,elements:[{name:"literal",value:'"monday"'},{name:"literal",value:'"tuesday"'},{name:"literal",value:'"wednesday"'},{name:"literal",value:'"thursday"'},{name:"literal",value:'"friday"'},{name:"literal",value:'"saturday"'},{name:"literal",value:'"sunday"'}],required:!1}],raw:"TDay[]",required:!1},description:"Specify which days of the week are weekend."},{key:"holidays",value:{name:"Array",elements:[{name:"Date"}],raw:"Date[]",required:!1},description:"Specify which days of the month are holidays."},{key:"weekendSelectable",value:{name:"boolean",required:!1},description:`Allow selecting weekends or not.
@default true`},{key:"holidaySelectable",value:{name:"boolean",required:!1},description:`Allow selecting holidays or not.
@default false`},{key:"allowBackwardRange",value:{name:"boolean",required:!1},description:`If user select a date before the previous selected date, it will be considered as a range or start from beginning.
@default false`}]}},description:`The configuration for the date picker.
@type TCalendarConfig`},isRange:{required:!1,tsType:{name:"IsRange"},description:`Indicates whether the date picker is a range picker.
@default false`},calendar:{required:!1,tsType:{name:"union",raw:`| "gregory"
| "persian"
| "islamic"
| "islamic-umalqura"
| "islamic-tbla"
| "islamic-civil"
| "islamic-rgsa"
| "iso8601"
| "japanese"
| "islamicc"
| "roc"
| "chinese"
| "indian"
| "buddhist"
| "coptic"
| "dangi"
| "ethioaa"
| "ethiopic"
| "hebrew"`,elements:[{name:"literal",value:'"gregory"'},{name:"literal",value:'"persian"'},{name:"literal",value:'"islamic"'},{name:"literal",value:'"islamic-umalqura"'},{name:"literal",value:'"islamic-tbla"'},{name:"literal",value:'"islamic-civil"'},{name:"literal",value:'"islamic-rgsa"'},{name:"literal",value:'"iso8601"'},{name:"literal",value:'"japanese"'},{name:"literal",value:'"islamicc"'},{name:"literal",value:'"roc"'},{name:"literal",value:'"chinese"'},{name:"literal",value:'"indian"'},{name:"literal",value:'"buddhist"'},{name:"literal",value:'"coptic"'},{name:"literal",value:'"dangi"'},{name:"literal",value:'"ethioaa"'},{name:"literal",value:'"ethiopic"'},{name:"literal",value:'"hebrew"'}]},description:`The calendar to use.
@default "gregory"`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: IsRange extends true ? Date[] : Date
) => void`,signature:{arguments:[{type:{name:"unknown"},name:"value"}],return:{name:"void"}}},description:"on calendar selected date change"}}};T.__docgenInfo={description:"A calendar plus a `TimePicker`. The selected value now carries a time of day,\nand picking a different day keeps the chosen time. Pass `timePickerProps`\n(e.g. `{ use12Hours: true, showSeconds: true }`) to configure the clock. The\nchosen date+time is shown below so you can see it update live.",methods:[],displayName:"RenderDateTimePicker",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},initialValue:{required:!1,tsType:{name:"union",raw:`| (IsRange extends true ? Date[] : Date)
| undefined`,elements:[{name:"unknown"},{name:"undefined"}]},description:"The initial value of the date picker."},value:{required:!1,tsType:{name:"union",raw:`| (IsRange extends true ? Date[] : Date)
| undefined`,elements:[{name:"unknown"},{name:"undefined"}]},description:"The value of the date picker (controlled mode)"},defaultStartDate:{required:!1,tsType:{name:"Date"},description:`The default start date. Useful when you want to be on different month or year despite the initial value.
@default initialValue || new Date()`},config:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /**
   * The first day of the week.
   * @default "Saturday"
   */
  weekStartsOn?: TDay;

  /**
   * The locale to use.
   * @default "en-US"
   */
  locale?: string;

  /**
   * Show other days from the previous and next month or not.
   * @default false
   */
  showOtherDays?: boolean;

  /**
   * Allow selecting other days from the previous and next month or not.
   * @default false
   */
  otherDaysSelectable?: boolean;

  /**
   * @default "narrow"
   */
  weekdayFormat?: "long" | "short" | "narrow" | undefined;

  /**
   * @default "numeric"
   */
  dayFormat?: "numeric" | "2-digit" | undefined;

  /**
   * @default "last 10 years"
   */
  yearRangeFrom?: number;

  /**
   * @default "Current year"
   */
  yearRangeTo?: number;

  /**
   * Prevent selecting dates before this date.
   */
  maxDate?: Date;

  /**
   * Prevent selecting dates after this date.
   */
  minDate?: Date;

  /**
   * Specify which days of the week are weekend.
   */
  weekends?: TDay[];

  /**
   * Specify which days of the month are holidays.
   */
  holidays?: Date[];

  /**
   * Allow selecting weekends or not.
   * @default true
   */
  weekendSelectable?: boolean;

  /**
   * Allow selecting holidays or not.
   * @default false
   */
  holidaySelectable?: boolean;

  /**
   * If user select a date before the previous selected date, it will be considered as a range or start from beginning.
   * @default false
   */
  allowBackwardRange?: boolean;
}`,signature:{properties:[{key:"weekStartsOn",value:{name:"union",raw:`| "monday"
| "tuesday"
| "wednesday"
| "thursday"
| "friday"
| "saturday"
| "sunday"`,elements:[{name:"literal",value:'"monday"'},{name:"literal",value:'"tuesday"'},{name:"literal",value:'"wednesday"'},{name:"literal",value:'"thursday"'},{name:"literal",value:'"friday"'},{name:"literal",value:'"saturday"'},{name:"literal",value:'"sunday"'}],required:!1},description:`The first day of the week.
@default "Saturday"`},{key:"locale",value:{name:"string",required:!1},description:`The locale to use.
@default "en-US"`},{key:"showOtherDays",value:{name:"boolean",required:!1},description:`Show other days from the previous and next month or not.
@default false`},{key:"otherDaysSelectable",value:{name:"boolean",required:!1},description:`Allow selecting other days from the previous and next month or not.
@default false`},{key:"weekdayFormat",value:{name:"union",raw:'"long" | "short" | "narrow" | undefined',elements:[{name:"literal",value:'"long"'},{name:"literal",value:'"short"'},{name:"literal",value:'"narrow"'},{name:"undefined"}],required:!1},description:'@default "narrow"'},{key:"dayFormat",value:{name:"union",raw:'"numeric" | "2-digit" | undefined',elements:[{name:"literal",value:'"numeric"'},{name:"literal",value:'"2-digit"'},{name:"undefined"}],required:!1},description:'@default "numeric"'},{key:"yearRangeFrom",value:{name:"number",required:!1},description:'@default "last 10 years"'},{key:"yearRangeTo",value:{name:"number",required:!1},description:'@default "Current year"'},{key:"maxDate",value:{name:"Date",required:!1},description:"Prevent selecting dates before this date."},{key:"minDate",value:{name:"Date",required:!1},description:"Prevent selecting dates after this date."},{key:"weekends",value:{name:"Array",elements:[{name:"union",raw:`| "monday"
| "tuesday"
| "wednesday"
| "thursday"
| "friday"
| "saturday"
| "sunday"`,elements:[{name:"literal",value:'"monday"'},{name:"literal",value:'"tuesday"'},{name:"literal",value:'"wednesday"'},{name:"literal",value:'"thursday"'},{name:"literal",value:'"friday"'},{name:"literal",value:'"saturday"'},{name:"literal",value:'"sunday"'}],required:!1}],raw:"TDay[]",required:!1},description:"Specify which days of the week are weekend."},{key:"holidays",value:{name:"Array",elements:[{name:"Date"}],raw:"Date[]",required:!1},description:"Specify which days of the month are holidays."},{key:"weekendSelectable",value:{name:"boolean",required:!1},description:`Allow selecting weekends or not.
@default true`},{key:"holidaySelectable",value:{name:"boolean",required:!1},description:`Allow selecting holidays or not.
@default false`},{key:"allowBackwardRange",value:{name:"boolean",required:!1},description:`If user select a date before the previous selected date, it will be considered as a range or start from beginning.
@default false`}]}},description:`The configuration for the date picker.
@type TCalendarConfig`},isRange:{required:!1,tsType:{name:"IsRange"},description:`Indicates whether the date picker is a range picker.
@default false`},calendar:{required:!1,tsType:{name:"union",raw:`| "gregory"
| "persian"
| "islamic"
| "islamic-umalqura"
| "islamic-tbla"
| "islamic-civil"
| "islamic-rgsa"
| "iso8601"
| "japanese"
| "islamicc"
| "roc"
| "chinese"
| "indian"
| "buddhist"
| "coptic"
| "dangi"
| "ethioaa"
| "ethiopic"
| "hebrew"`,elements:[{name:"literal",value:'"gregory"'},{name:"literal",value:'"persian"'},{name:"literal",value:'"islamic"'},{name:"literal",value:'"islamic-umalqura"'},{name:"literal",value:'"islamic-tbla"'},{name:"literal",value:'"islamic-civil"'},{name:"literal",value:'"islamic-rgsa"'},{name:"literal",value:'"iso8601"'},{name:"literal",value:'"japanese"'},{name:"literal",value:'"islamicc"'},{name:"literal",value:'"roc"'},{name:"literal",value:'"chinese"'},{name:"literal",value:'"indian"'},{name:"literal",value:'"buddhist"'},{name:"literal",value:'"coptic"'},{name:"literal",value:'"dangi"'},{name:"literal",value:'"ethioaa"'},{name:"literal",value:'"ethiopic"'},{name:"literal",value:'"hebrew"'}]},description:`The calendar to use.
@default "gregory"`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: IsRange extends true ? Date[] : Date
) => void`,signature:{arguments:[{type:{name:"unknown"},name:"value"}],return:{name:"void"}}},description:"on calendar selected date change"},timePickerProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /**
   * Which end of a range to edit (\`0\` = start, \`1\` = end). Ignored for single
   * pickers.
   * @default 0
   */
  index?: number;

  /**
   * Use a 12-hour clock with an AM/PM toggle instead of a 24-hour clock.
   * @default false
   */
  use12Hours?: boolean;

  /**
   * Show a seconds column.
   * @default false
   */
  showSeconds?: boolean;

  /**
   * Make the value in each column a native \`<select>\` dropdown (in addition to
   * the stepper arrows), so the user can also pick a value directly from a list
   * by clicking the value. Set to \`false\` for a plain, non-interactive value.
   * @default true
   */
  dropdown?: boolean;

  /**
   * Custom renderer. If provided, the built-in stepper UI is ignored and you
   * render everything yourself from the given args.
   */
  renderer?: (args: TTimePickerRendererArgs) => ReactNode;

  /**
   * Replace the increment (up) arrow icon.
   */
  upIcon?: ReactNode;

  /**
   * Replace the decrement (down) arrow icon.
   */
  downIcon?: ReactNode;

  /* ------------------------------- styling -------------------------------- */

  /** className of the time picker root row */
  rootClassName?: string;
  /** css styles of the time picker root row */
  rootStyles?: CSSProperties;

  /** className of a single unit column (hours / minutes / seconds / period) */
  columnClassName?: string;
  /** css styles of a single unit column */
  columnStyles?: CSSProperties;

  /** className of both stepper buttons */
  buttonClassName?: string;
  /** css styles of both stepper buttons */
  buttonStyles?: CSSProperties;

  /** className of the up (increment) stepper button */
  upButtonClassName?: string;
  /** css styles of the up (increment) stepper button */
  upButtonStyles?: CSSProperties;

  /** className of the down (decrement) stepper button */
  downButtonClassName?: string;
  /** css styles of the down (decrement) stepper button */
  downButtonStyles?: CSSProperties;

  /** className of the value in the middle of a column (the text or \`<select>\`) */
  valueClassName?: string;
  /** css styles of the value in the middle of a column (the text or \`<select>\`) */
  valueStyles?: CSSProperties;

  /** className of the \`<option>\`s in the value dropdown (when \`dropdown\`) */
  optionClassName?: string;
  /** css styles of the \`<option>\`s in the value dropdown (when \`dropdown\`) */
  optionStyles?: CSSProperties;

  /** className of the ":" separators between columns */
  separatorClassName?: string;
  /** css styles of the ":" separators between columns */
  separatorStyles?: CSSProperties;

  /** className of the AM/PM toggle column */
  periodClassName?: string;
  /** css styles of the AM/PM toggle column */
  periodStyles?: CSSProperties;
}`,signature:{properties:[{key:"index",value:{name:"number",required:!1},description:"Which end of a range to edit (`0` = start, `1` = end). Ignored for single\npickers.\n@default 0"},{key:"use12Hours",value:{name:"boolean",required:!1},description:`Use a 12-hour clock with an AM/PM toggle instead of a 24-hour clock.
@default false`},{key:"showSeconds",value:{name:"boolean",required:!1},description:`Show a seconds column.
@default false`},{key:"dropdown",value:{name:"boolean",required:!1},description:"Make the value in each column a native `<select>` dropdown (in addition to\nthe stepper arrows), so the user can also pick a value directly from a list\nby clicking the value. Set to `false` for a plain, non-interactive value.\n@default true"},{key:"renderer",value:{name:"signature",type:"function",raw:"(args: TTimePickerRendererArgs) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  /**
   * The date whose time is being edited (the active selection), or \`undefined\`
   * when nothing is selected yet.
   */
  date: Date | undefined;

  /**
   * Hour in 24-hour form (\`0..23\`).
   */
  hours: number;

  /**
   * Minute (\`0..59\`).
   */
  minutes: number;

  /**
   * Second (\`0..59\`).
   */
  seconds: number;

  /**
   * Hour in 12-hour form (\`1..12\`). Only meaningful when \`use12Hours\` is set.
   */
  hours12: number;

  /**
   * \`"AM"\` | \`"PM"\` for the current hour.
   */
  period: TPeriod;

  /**
   * Whether the picker is in 12-hour mode.
   */
  use12Hours: boolean;

  /**
   * Whether the seconds column is shown.
   */
  showSeconds: boolean;

  /**
   * Localized time string for the active time (e.g. \`"09:30"\`, \`"09:30:00"\` or
   * \`"09:30 AM"\`). Digits and the AM/PM label follow the calendar \`locale\`.
   */
  formatted: string;

  /**
   * Set the hour (24-hour value, wraps \`0..23\`).
   */
  setHours: (hours: number) => void;

  /**
   * Set the minute (wraps \`0..59\`).
   */
  setMinutes: (minutes: number) => void;

  /**
   * Set the second (wraps \`0..59\`).
   */
  setSeconds: (seconds: number) => void;

  /**
   * Set AM/PM, keeping the displayed 12-hour value.
   */
  setPeriod: (period: TPeriod) => void;

  /**
   * Step a unit up by one with wrap-around.
   */
  increment: (unit: TTimePickerUnit) => void;

  /**
   * Step a unit down by one with wrap-around.
   */
  decrement: (unit: TTimePickerUnit) => void;
}`,signature:{properties:[{key:"date",value:{name:"union",raw:"Date | undefined",elements:[{name:"Date"},{name:"undefined"}],required:!0},description:"The date whose time is being edited (the active selection), or `undefined`\nwhen nothing is selected yet."},{key:"hours",value:{name:"number",required:!0},description:"Hour in 24-hour form (`0..23`)."},{key:"minutes",value:{name:"number",required:!0},description:"Minute (`0..59`)."},{key:"seconds",value:{name:"number",required:!0},description:"Second (`0..59`)."},{key:"hours12",value:{name:"number",required:!0},description:"Hour in 12-hour form (`1..12`). Only meaningful when `use12Hours` is set."},{key:"period",value:{name:"union",raw:'"AM" | "PM"',elements:[{name:"literal",value:'"AM"'},{name:"literal",value:'"PM"'}],required:!0},description:'`"AM"` | `"PM"` for the current hour.'},{key:"use12Hours",value:{name:"boolean",required:!0},description:"Whether the picker is in 12-hour mode."},{key:"showSeconds",value:{name:"boolean",required:!0},description:"Whether the seconds column is shown."},{key:"formatted",value:{name:"string",required:!0},description:'Localized time string for the active time (e.g. `"09:30"`, `"09:30:00"` or\n`"09:30 AM"`). Digits and the AM/PM label follow the calendar `locale`.'},{key:"setHours",value:{name:"signature",type:"function",raw:"(hours: number) => void",signature:{arguments:[{type:{name:"number"},name:"hours"}],return:{name:"void"}},required:!0},description:"Set the hour (24-hour value, wraps `0..23`)."},{key:"setMinutes",value:{name:"signature",type:"function",raw:"(minutes: number) => void",signature:{arguments:[{type:{name:"number"},name:"minutes"}],return:{name:"void"}},required:!0},description:"Set the minute (wraps `0..59`)."},{key:"setSeconds",value:{name:"signature",type:"function",raw:"(seconds: number) => void",signature:{arguments:[{type:{name:"number"},name:"seconds"}],return:{name:"void"}},required:!0},description:"Set the second (wraps `0..59`)."},{key:"setPeriod",value:{name:"signature",type:"function",raw:"(period: TPeriod) => void",signature:{arguments:[{type:{name:"union",raw:'"AM" | "PM"',elements:[{name:"literal",value:'"AM"'},{name:"literal",value:'"PM"'}],required:!0},name:"period"}],return:{name:"void"}},required:!0},description:"Set AM/PM, keeping the displayed 12-hour value."},{key:"increment",value:{name:"signature",type:"function",raw:"(unit: TTimePickerUnit) => void",signature:{arguments:[{type:{name:"union",raw:'"hours" | "minutes" | "seconds"',elements:[{name:"literal",value:'"hours"'},{name:"literal",value:'"minutes"'},{name:"literal",value:'"seconds"'}]},name:"unit"}],return:{name:"void"}},required:!0},description:"Step a unit up by one with wrap-around."},{key:"decrement",value:{name:"signature",type:"function",raw:"(unit: TTimePickerUnit) => void",signature:{arguments:[{type:{name:"union",raw:'"hours" | "minutes" | "seconds"',elements:[{name:"literal",value:'"hours"'},{name:"literal",value:'"minutes"'},{name:"literal",value:'"seconds"'}]},name:"unit"}],return:{name:"void"}},required:!0},description:"Step a unit down by one with wrap-around."}]}},name:"args"}],return:{name:"ReactNode"}},required:!1},description:`Custom renderer. If provided, the built-in stepper UI is ignored and you
render everything yourself from the given args.`},{key:"upIcon",value:{name:"ReactNode",required:!1},description:"Replace the increment (up) arrow icon."},{key:"downIcon",value:{name:"ReactNode",required:!1},description:"Replace the decrement (down) arrow icon."},{key:"rootClassName",value:{name:"string",required:!1},description:"className of the time picker root row"},{key:"rootStyles",value:{name:"CSSProperties",required:!1},description:"css styles of the time picker root row"},{key:"columnClassName",value:{name:"string",required:!1},description:"className of a single unit column (hours / minutes / seconds / period)"},{key:"columnStyles",value:{name:"CSSProperties",required:!1},description:"css styles of a single unit column"},{key:"buttonClassName",value:{name:"string",required:!1},description:"className of both stepper buttons"},{key:"buttonStyles",value:{name:"CSSProperties",required:!1},description:"css styles of both stepper buttons"},{key:"upButtonClassName",value:{name:"string",required:!1},description:"className of the up (increment) stepper button"},{key:"upButtonStyles",value:{name:"CSSProperties",required:!1},description:"css styles of the up (increment) stepper button"},{key:"downButtonClassName",value:{name:"string",required:!1},description:"className of the down (decrement) stepper button"},{key:"downButtonStyles",value:{name:"CSSProperties",required:!1},description:"css styles of the down (decrement) stepper button"},{key:"valueClassName",value:{name:"string",required:!1},description:"className of the value in the middle of a column (the text or `<select>`)"},{key:"valueStyles",value:{name:"CSSProperties",required:!1},description:"css styles of the value in the middle of a column (the text or `<select>`)"},{key:"optionClassName",value:{name:"string",required:!1},description:"className of the `<option>`s in the value dropdown (when `dropdown`)"},{key:"optionStyles",value:{name:"CSSProperties",required:!1},description:"css styles of the `<option>`s in the value dropdown (when `dropdown`)"},{key:"separatorClassName",value:{name:"string",required:!1},description:'className of the ":" separators between columns'},{key:"separatorStyles",value:{name:"CSSProperties",required:!1},description:'css styles of the ":" separators between columns'},{key:"periodClassName",value:{name:"string",required:!1},description:"className of the AM/PM toggle column"},{key:"periodStyles",value:{name:"CSSProperties",required:!1},description:"css styles of the AM/PM toggle column"}]}},description:""}}};x.__docgenInfo={description:"`PanelHeader` is a built-in, self-contained alternative to `Header`. Instead\nof `<select>` dropdowns it shows the month/year pickers inside the calendar\narea (a 12-month grid and a paginated year grid). Wrap the day-view content\nas its children and it swaps them in/out while navigating.",methods:[],displayName:"RenderPanelDatePicker",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},initialValue:{required:!1,tsType:{name:"union",raw:`| (IsRange extends true ? Date[] : Date)
| undefined`,elements:[{name:"unknown"},{name:"undefined"}]},description:"The initial value of the date picker."},value:{required:!1,tsType:{name:"union",raw:`| (IsRange extends true ? Date[] : Date)
| undefined`,elements:[{name:"unknown"},{name:"undefined"}]},description:"The value of the date picker (controlled mode)"},defaultStartDate:{required:!1,tsType:{name:"Date"},description:`The default start date. Useful when you want to be on different month or year despite the initial value.
@default initialValue || new Date()`},config:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /**
   * The first day of the week.
   * @default "Saturday"
   */
  weekStartsOn?: TDay;

  /**
   * The locale to use.
   * @default "en-US"
   */
  locale?: string;

  /**
   * Show other days from the previous and next month or not.
   * @default false
   */
  showOtherDays?: boolean;

  /**
   * Allow selecting other days from the previous and next month or not.
   * @default false
   */
  otherDaysSelectable?: boolean;

  /**
   * @default "narrow"
   */
  weekdayFormat?: "long" | "short" | "narrow" | undefined;

  /**
   * @default "numeric"
   */
  dayFormat?: "numeric" | "2-digit" | undefined;

  /**
   * @default "last 10 years"
   */
  yearRangeFrom?: number;

  /**
   * @default "Current year"
   */
  yearRangeTo?: number;

  /**
   * Prevent selecting dates before this date.
   */
  maxDate?: Date;

  /**
   * Prevent selecting dates after this date.
   */
  minDate?: Date;

  /**
   * Specify which days of the week are weekend.
   */
  weekends?: TDay[];

  /**
   * Specify which days of the month are holidays.
   */
  holidays?: Date[];

  /**
   * Allow selecting weekends or not.
   * @default true
   */
  weekendSelectable?: boolean;

  /**
   * Allow selecting holidays or not.
   * @default false
   */
  holidaySelectable?: boolean;

  /**
   * If user select a date before the previous selected date, it will be considered as a range or start from beginning.
   * @default false
   */
  allowBackwardRange?: boolean;
}`,signature:{properties:[{key:"weekStartsOn",value:{name:"union",raw:`| "monday"
| "tuesday"
| "wednesday"
| "thursday"
| "friday"
| "saturday"
| "sunday"`,elements:[{name:"literal",value:'"monday"'},{name:"literal",value:'"tuesday"'},{name:"literal",value:'"wednesday"'},{name:"literal",value:'"thursday"'},{name:"literal",value:'"friday"'},{name:"literal",value:'"saturday"'},{name:"literal",value:'"sunday"'}],required:!1},description:`The first day of the week.
@default "Saturday"`},{key:"locale",value:{name:"string",required:!1},description:`The locale to use.
@default "en-US"`},{key:"showOtherDays",value:{name:"boolean",required:!1},description:`Show other days from the previous and next month or not.
@default false`},{key:"otherDaysSelectable",value:{name:"boolean",required:!1},description:`Allow selecting other days from the previous and next month or not.
@default false`},{key:"weekdayFormat",value:{name:"union",raw:'"long" | "short" | "narrow" | undefined',elements:[{name:"literal",value:'"long"'},{name:"literal",value:'"short"'},{name:"literal",value:'"narrow"'},{name:"undefined"}],required:!1},description:'@default "narrow"'},{key:"dayFormat",value:{name:"union",raw:'"numeric" | "2-digit" | undefined',elements:[{name:"literal",value:'"numeric"'},{name:"literal",value:'"2-digit"'},{name:"undefined"}],required:!1},description:'@default "numeric"'},{key:"yearRangeFrom",value:{name:"number",required:!1},description:'@default "last 10 years"'},{key:"yearRangeTo",value:{name:"number",required:!1},description:'@default "Current year"'},{key:"maxDate",value:{name:"Date",required:!1},description:"Prevent selecting dates before this date."},{key:"minDate",value:{name:"Date",required:!1},description:"Prevent selecting dates after this date."},{key:"weekends",value:{name:"Array",elements:[{name:"union",raw:`| "monday"
| "tuesday"
| "wednesday"
| "thursday"
| "friday"
| "saturday"
| "sunday"`,elements:[{name:"literal",value:'"monday"'},{name:"literal",value:'"tuesday"'},{name:"literal",value:'"wednesday"'},{name:"literal",value:'"thursday"'},{name:"literal",value:'"friday"'},{name:"literal",value:'"saturday"'},{name:"literal",value:'"sunday"'}],required:!1}],raw:"TDay[]",required:!1},description:"Specify which days of the week are weekend."},{key:"holidays",value:{name:"Array",elements:[{name:"Date"}],raw:"Date[]",required:!1},description:"Specify which days of the month are holidays."},{key:"weekendSelectable",value:{name:"boolean",required:!1},description:`Allow selecting weekends or not.
@default true`},{key:"holidaySelectable",value:{name:"boolean",required:!1},description:`Allow selecting holidays or not.
@default false`},{key:"allowBackwardRange",value:{name:"boolean",required:!1},description:`If user select a date before the previous selected date, it will be considered as a range or start from beginning.
@default false`}]}},description:`The configuration for the date picker.
@type TCalendarConfig`},isRange:{required:!1,tsType:{name:"IsRange"},description:`Indicates whether the date picker is a range picker.
@default false`},calendar:{required:!1,tsType:{name:"union",raw:`| "gregory"
| "persian"
| "islamic"
| "islamic-umalqura"
| "islamic-tbla"
| "islamic-civil"
| "islamic-rgsa"
| "iso8601"
| "japanese"
| "islamicc"
| "roc"
| "chinese"
| "indian"
| "buddhist"
| "coptic"
| "dangi"
| "ethioaa"
| "ethiopic"
| "hebrew"`,elements:[{name:"literal",value:'"gregory"'},{name:"literal",value:'"persian"'},{name:"literal",value:'"islamic"'},{name:"literal",value:'"islamic-umalqura"'},{name:"literal",value:'"islamic-tbla"'},{name:"literal",value:'"islamic-civil"'},{name:"literal",value:'"islamic-rgsa"'},{name:"literal",value:'"iso8601"'},{name:"literal",value:'"japanese"'},{name:"literal",value:'"islamicc"'},{name:"literal",value:'"roc"'},{name:"literal",value:'"chinese"'},{name:"literal",value:'"indian"'},{name:"literal",value:'"buddhist"'},{name:"literal",value:'"coptic"'},{name:"literal",value:'"dangi"'},{name:"literal",value:'"ethioaa"'},{name:"literal",value:'"ethiopic"'},{name:"literal",value:'"hebrew"'}]},description:`The calendar to use.
@default "gregory"`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: IsRange extends true ? Date[] : Date
) => void`,signature:{arguments:[{type:{name:"unknown"},name:"value"}],return:{name:"void"}}},description:"on calendar selected date change"}}};export{u as C,S as R,q as a,b,x as c,D as d,T as e};
