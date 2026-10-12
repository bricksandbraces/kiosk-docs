import{i as e}from"./preload-helper-xPQekRTU.js";import{At as t,Dt as n,Ot as r,Ut as i,Wt as a,Xt as o,at as s,en as c,rt as l,s as u,t as d}from"./iframe-CkgO21Wf.js";import{a as f,i as p,n as m,o as h,r as g,s as _,t as v}from"./create-runtime-stories-CLvJ129Z.js";import{n as y,t as b}from"./Loader-C3XyRJeL.js";function x(e,s){a(s,!1),u();var c=T(),d=r(c);C(d,{name:`Playground`,args:{text1:`Getting your workouts`,initialDelayMs:0},parameters:{docs:{description:{story:`Playground: a single description shown immediately; tweak text + timing via controls.`}},__svelteCsf:{rawCode:`<Loader {...args} />`}}}),C(t(d,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: the pulse on its own, side messages, and the full-screen footer layout.`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-2xl">
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
</div>`}},children:(e,r)=>{var i=w(),a=n(i);b(a,{});var s=t(a,2);b(s,{text1:`Getting your workouts`,initialDelayMs:0});var c=t(s,2);b(c,{text1:`Getting your workouts`,text2:`Almost there`,text3:`Warming up`,initialDelayMs:0,textDurationMs:1500});var u=t(c,2);b(n(u),{textPlacement:`footer`,text1:`Getting your workouts`,text2:`Theming your experience`,text3:`Setting your data`,initialDelayMs:0,textDurationMs:1500}),o(u),o(i),l(e,i)},$$slots:{default:!0}}),l(e,c),i()}var S,C,w,T,E,D,O,k;e((()=>{c(),_(),h(),p(),y(),d(),m(),S={title:`lib/components/Loader`,component:b,parameters:{layout:`padded`,design:g(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=8-711`)},argTypes:{ariaLabel:{control:`text`},textPlacement:{control:`inline-radio`,options:[`side`,`footer`]},text1:{control:`text`},text2:{control:`text`},text3:{control:`text`},textDurationMs:{control:`number`},initialDelayMs:{control:`number`},sequentialOnce:{control:`boolean`}}},{Story:C}=f(S),w=s(`<div class="flex flex-col gap-2xl"><!> <!> <!> <div class="relative h-80 w-full overflow-hidden rounded-2xl bg-layer-background"><!></div></div>`),T=s(`<!> <!>`,1),x.__docgen={data:[],name:`Loader.stories.svelte`},E=v(x,S),D=[`Playground`,`Overview`],O={...E.Playground,tags:[`svelte-csf-v5`]},k={...E.Overview,tags:[`svelte-csf-v5`]}}))();export{k as Overview,O as Playground,D as __namedExportsOrder,S as default};