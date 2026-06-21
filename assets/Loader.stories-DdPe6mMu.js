import{i as e}from"./preload-helper-xPQekRTU.js";import{Nt as t,Pt as n,Q as r,Ut as i,_t as a,bt as o,et as s,s as c,t as l,vt as u,zt as d}from"./iframe-Cjnv228u.js";import{a as f,i as p,n as m,r as h,t as g}from"./create-runtime-stories-Bxf99jrC.js";import{n as _,t as v}from"./Loader-23Fiwo1r.js";function y(e,i){n(i,!1),c();var s=C(),l=u(s);x(l,{name:`Playground`,args:{text1:`Getting your workouts`,initialDelayMs:0},parameters:{docs:{description:{story:`Playground: a single description shown immediately; tweak text + timing via controls.`}},__svelteCsf:{rawCode:`<Loader {...args} />`}}}),x(o(l,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: the spinner on its own, with a single description, and cycling messages.`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-2xl">
  <!-- Plain 40px spinner (e.g. inside buttons / small loading states). -->
  <Loader />
  <!-- With a single description (Figma \`showDescription\`). -->
  <Loader text1="Getting your workouts" initialDelayMs={0} />
  <!-- With cycling messages (fast timing so the rotation is visible). -->
  <Loader
    text1="Getting your workouts"
    text2="Almost there"
    text3="Warming up"
    initialDelayMs={0}
    textDurationMs={1500}
  />
</div>`}},children:(e,t)=>{var n=S(),i=a(n);v(i,{});var s=o(i,2);v(s,{text1:`Getting your workouts`,initialDelayMs:0}),v(o(s,2),{text1:`Getting your workouts`,text2:`Almost there`,text3:`Warming up`,initialDelayMs:0,textDurationMs:1500}),d(n),r(e,n)},$$slots:{default:!0}}),r(e,s),t()}var b,x,S,C,w,T,E,D;e((()=>{i(),f(),p(),_(),l(),m(),b={title:`lib/components/Loader`,component:v,parameters:{layout:`padded`},argTypes:{ariaLabel:{control:`text`},text1:{control:`text`},text2:{control:`text`},text3:{control:`text`},textDurationMs:{control:`number`},initialDelayMs:{control:`number`},sequentialOnce:{control:`boolean`}}},{Story:x}=h(b),S=s(`<div class="flex flex-col gap-2xl"><!> <!> <!></div>`),C=s(`<!> <!>`,1),y.__docgen={data:[],name:`Loader.stories.svelte`},w=g(y,b),T=[`Playground`,`Overview`],E={...w.Playground,tags:[`svelte-csf-v5`]},D={...w.Overview,tags:[`svelte-csf-v5`]}}))();export{D as Overview,E as Playground,T as __namedExportsOrder,b as default};