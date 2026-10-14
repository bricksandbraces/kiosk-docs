import{i as e}from"./preload-helper-xPQekRTU.js";import{At as t,Dt as n,Ot as r,Ut as i,Wt as a,Xt as o,at as s,en as c,rt as l,s as u,t as d}from"./iframe-DBVOT1WK.js";import{a as f,i as p,n as m,r as h,t as g}from"./create-runtime-stories-BI37nCAl.js";import{n as _,t as v}from"./figmaDesign-BuxWJBGH.js";import{n as y,t as b}from"./Loader-D1WrA3GH.js";function x(e,s){a(s,!1),u();var c=T(),d=r(c);C(d,{name:`Playground`,args:{kind:`contained`,text1:`Getting your workouts`,initialDelayMs:0},parameters:{docs:{description:{story:"Playground: switch the kind; align, text + timing controls apply to `text`."}},__svelteCsf:{rawCode:`<Loader {...args} />`}}}),C(t(d,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: the three graphic kinds, then the text kind left-aligned, centered and standalone.`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-2xl">
  <div class="flex items-center gap-l">
    <Loader />
    <Loader kind="icon" />
    <Loader kind="spinner" />
  </div>
  <Loader kind="text" text1="Getting your workouts" initialDelayMs={0} />
  <Loader
    kind="text"
    align="center"
    text1="Getting your workouts"
    text2="Theming your experience"
    text3="Setting your data"
    initialDelayMs={0}
    textDurationMs={1500}
  />
  <Loader kind="text" showLoader={false} text1="Getting your workouts" initialDelayMs={0} />
</div>`}},children:(e,r)=>{var i=w(),a=n(i),s=n(a);b(s,{});var c=t(s,2);b(c,{kind:`icon`}),b(t(c,2),{kind:`spinner`}),o(a);var u=t(a,2);b(u,{kind:`text`,text1:`Getting your workouts`,initialDelayMs:0});var d=t(u,2);b(d,{kind:`text`,align:`center`,text1:`Getting your workouts`,text2:`Theming your experience`,text3:`Setting your data`,initialDelayMs:0,textDurationMs:1500}),b(t(d,2),{kind:`text`,showLoader:!1,text1:`Getting your workouts`,initialDelayMs:0}),o(i),l(e,i)},$$slots:{default:!0}}),l(e,c),i()}var S,C,w,T,E,D,O,k;e((()=>{c(),f(),p(),_(),y(),d(),m(),S={title:`lib/components/Loader`,component:b,parameters:{layout:`padded`,design:v(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=666-4554`)},argTypes:{kind:{control:`inline-radio`,options:[`contained`,`icon`,`spinner`,`text`]},align:{control:`inline-radio`,options:[`left`,`center`]},showLoader:{control:`boolean`},ariaLabel:{control:`text`},text1:{control:`text`},text2:{control:`text`},text3:{control:`text`},textDurationMs:{control:`number`},initialDelayMs:{control:`number`},sequentialOnce:{control:`boolean`}}},{Story:C}=h(S),w=s(`<div class="flex flex-col gap-2xl"><div class="flex items-center gap-l"><!> <!> <!></div> <!> <!> <!></div>`),T=s(`<!> <!>`,1),x.__docgen={data:[],name:`Loader.stories.svelte`},E=g(x,S),D=[`Playground`,`Overview`],O={...E.Playground,tags:[`svelte-csf-v5`]},k={...E.Overview,tags:[`svelte-csf-v5`]}}))();export{k as Overview,O as Playground,D as __namedExportsOrder,S as default};