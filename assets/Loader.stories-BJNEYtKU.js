import{i as e}from"./preload-helper-xPQekRTU.js";import{Gt as t,Ot as n,Wt as r,Zt as i,it as a,jt as o,kt as s,ot as c,s as l,t as u,tn as d}from"./iframe-WFe9Szij.js";import{a as f,i as p,n as m,r as h,t as g}from"./create-runtime-stories-BVUMDC3M.js";import{n as _,t as v}from"./figmaDesign-BuxWJBGH.js";import{n as y,t as b}from"./Loader-CHn8dUtA.js";function x(e,c){t(c,!1),l();var u=T(),d=s(u);C(d,{name:`Playground`,args:{kind:`contained`,text1:`Getting your workouts`,initialDelayMs:0},parameters:{docs:{description:{story:"Playground: switch the kind; align, text + timing controls apply to `text`."}},__svelteCsf:{rawCode:`<Loader {...args} />`}}}),C(o(d,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: the three graphic kinds, then the text kind left-aligned, centered and standalone.`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-2xl">
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
</div>`}},children:(e,t)=>{var r=w(),s=n(r),c=n(s);b(c,{});var l=o(c,2);b(l,{kind:`icon`}),b(o(l,2),{kind:`spinner`}),i(s);var u=o(s,2);b(u,{kind:`text`,text1:`Getting your workouts`,initialDelayMs:0});var d=o(u,2);b(d,{kind:`text`,align:`center`,text1:`Getting your workouts`,text2:`Theming your experience`,text3:`Setting your data`,initialDelayMs:0,textDurationMs:1500}),b(o(d,2),{kind:`text`,showLoader:!1,text1:`Getting your workouts`,initialDelayMs:0}),i(r),a(e,r)},$$slots:{default:!0}}),a(e,u),r()}var S,C,w,T,E,D,O,k;e((()=>{d(),f(),p(),_(),y(),u(),m(),S={title:`lib/components/Loader`,component:b,parameters:{layout:`padded`,design:v(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=666-4554`)},argTypes:{kind:{control:`inline-radio`,options:[`contained`,`icon`,`spinner`,`text`]},align:{control:`inline-radio`,options:[`left`,`center`]},showLoader:{control:`boolean`},ariaLabel:{control:`text`},text1:{control:`text`},text2:{control:`text`},text3:{control:`text`},textDurationMs:{control:`number`},initialDelayMs:{control:`number`},sequentialOnce:{control:`boolean`}}},{Story:C}=h(S),w=c(`<div class="flex flex-col gap-2xl"><div class="flex items-center gap-l"><!> <!> <!></div> <!> <!> <!></div>`),T=c(`<!> <!>`,1),x.__docgen={data:[],name:`Loader.stories.svelte`},E=g(x,S),D=[`Playground`,`Overview`],O={...E.Playground,tags:[`svelte-csf-v5`]},k={...E.Overview,tags:[`svelte-csf-v5`]}}))();export{k as Overview,O as Playground,D as __namedExportsOrder,S as default};