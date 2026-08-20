import{i as e}from"./preload-helper-xPQekRTU.js";import{Nt as t,Pt as n,Q as r,Ut as i,_t as a,bt as o,et as s,s as c,t as l,vt as u,zt as d}from"./iframe-o6s9zefv.js";import{a as f,i as p,n as m,r as h,t as g}from"./create-runtime-stories-D9EH6x9m.js";import{n as _,t as v}from"./Loader-wyFOeJeU.js";function y(e,i){n(i,!1),c();var s=C(),l=u(s);x(l,{name:`Playground`,args:{text1:`Getting your workouts`,initialDelayMs:0},parameters:{docs:{description:{story:`Playground: a single description shown immediately; tweak text + timing via controls.`}},__svelteCsf:{rawCode:`<Loader {...args} />`}}}),x(o(l,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: the pulse on its own, side messages, and the full-screen footer layout.`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-2xl">
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
</div>`}},children:(e,t)=>{var n=S(),i=a(n);v(i,{});var s=o(i,2);v(s,{text1:`Getting your workouts`,initialDelayMs:0});var c=o(s,2);v(c,{text1:`Getting your workouts`,text2:`Almost there`,text3:`Warming up`,initialDelayMs:0,textDurationMs:1500});var l=o(c,2);v(a(l),{textPlacement:`footer`,text1:`Getting your workouts`,text2:`Theming your experience`,text3:`Setting your data`,initialDelayMs:0,textDurationMs:1500}),d(l),d(n),r(e,n)},$$slots:{default:!0}}),r(e,s),t()}var b,x,S,C,w,T,E,D;e((()=>{i(),f(),p(),_(),l(),m(),b={title:`lib/components/Loader`,component:v,parameters:{layout:`padded`},argTypes:{ariaLabel:{control:`text`},textPlacement:{control:`inline-radio`,options:[`side`,`footer`]},text1:{control:`text`},text2:{control:`text`},text3:{control:`text`},textDurationMs:{control:`number`},initialDelayMs:{control:`number`},sequentialOnce:{control:`boolean`}}},{Story:x}=h(b),S=s(`<div class="flex flex-col gap-2xl"><!> <!> <!> <div class="relative h-80 w-full overflow-hidden rounded-2xl bg-layer-background"><!></div></div>`),C=s(`<!> <!>`,1),y.__docgen={data:[],name:`Loader.stories.svelte`},w=g(y,b),T=[`Playground`,`Overview`],E={...w.Playground,tags:[`svelte-csf-v5`]},D={...w.Overview,tags:[`svelte-csf-v5`]}}))();export{D as Overview,E as Playground,T as __namedExportsOrder,b as default};