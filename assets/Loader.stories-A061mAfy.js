import{i as e}from"./preload-helper-xPQekRTU.js";import{Bt as t,Nt as n,Pt as r,Q as i,Wt as a,_t as o,bt as s,et as c,s as l,t as u,vt as d}from"./iframe-BYa6-XSo.js";import{a as f,i as p,n as m,r as h,t as g}from"./create-runtime-stories--IWq-U-Y.js";import{n as _,t as v}from"./Loader-DqDP6YMx.js";function y(e,a){r(a,!1),l();var c=C(),u=d(c);x(u,{name:`Playground`,args:{text1:`Getting your workouts`,initialDelayMs:0},parameters:{docs:{description:{story:`Playground: a single description shown immediately; tweak text + timing via controls.`}},__svelteCsf:{rawCode:`<Loader {...args} />`}}}),x(s(u,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: the pulse on its own, side messages, and the full-screen footer layout.`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-2xl">
  <!-- Plain pulse loader (default 20×80px). -->
  <Loader />
  <!-- With a single side description (Figma \`showDescription\`). -->
  <Loader text1="Getting your workouts" initialDelayMs={0} />
  <!-- With cycling side messages (fast timing so the rotation is visible). -->
  <Loader
    text1="Getting your workouts"
    text2="Almost there"
    text3="Warming up"
    initialDelayMs={0}
    textDurationMs={1500}
  />
  <!-- Full-screen footer layout (BB-368): centered pulse, message pinned to the bottom. -->
  <div class="relative h-80 w-full overflow-hidden rounded-2xl bg-layer-background">
    <Loader
      textPlacement="footer"
      text1="Getting your workouts"
      text2="Theming your experience"
      text3="Setting your data"
      initialDelayMs={0}
      textDurationMs={1500}
    />
  </div>
</div>`}},children:(e,n)=>{var r=S(),a=o(r);v(a,{});var c=s(a,2);v(c,{text1:`Getting your workouts`,initialDelayMs:0});var l=s(c,2);v(l,{text1:`Getting your workouts`,text2:`Almost there`,text3:`Warming up`,initialDelayMs:0,textDurationMs:1500});var u=s(l,2);v(o(u),{textPlacement:`footer`,text1:`Getting your workouts`,text2:`Theming your experience`,text3:`Setting your data`,initialDelayMs:0,textDurationMs:1500}),t(u),t(r),i(e,r)},$$slots:{default:!0}}),i(e,c),n()}var b,x,S,C,w,T,E,D;e((()=>{a(),f(),p(),_(),u(),m(),b={title:`lib/components/Loader`,component:v,parameters:{layout:`padded`},argTypes:{ariaLabel:{control:`text`},textPlacement:{control:`inline-radio`,options:[`side`,`footer`]},text1:{control:`text`},text2:{control:`text`},text3:{control:`text`},textDurationMs:{control:`number`},initialDelayMs:{control:`number`},sequentialOnce:{control:`boolean`}}},{Story:x}=h(b),S=c(`<div class="flex flex-col gap-2xl"><!> <!> <!> <div class="relative h-80 w-full overflow-hidden rounded-2xl bg-layer-background"><!></div></div>`),C=c(`<!> <!>`,1),y.__docgen={data:[],name:`Loader.stories.svelte`},w=g(y,b),T=[`Playground`,`Overview`],E={...w.Playground,tags:[`svelte-csf-v5`]},D={...w.Overview,tags:[`svelte-csf-v5`]}}))();export{D as Overview,E as Playground,T as __namedExportsOrder,b as default};