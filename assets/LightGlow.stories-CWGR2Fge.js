import{i as e}from"./preload-helper-xPQekRTU.js";import{At as t,Dt as n,Ft as r,It as i,Ot as a,St as o,Ut as s,V as c,Wt as l,Xt as u,Yt as d,at as f,en as p,ht as m,rt as h,t as g,tt as _}from"./iframe-CJEdpsI_.js";import{i as v,n as y,r as b,t as x}from"./create-runtime-stories-B5_Q70uc.js";import{n as S,t as C}from"./figmaDesign-BuxWJBGH.js";import{n as w,t as T}from"./LightGlow-nTGwnaGl.js";import{n as E,t as D}from"./Toggle-CewkRNCx.js";function O(e,f){l(f,!0);let p=i(!0);var g=I(),v=a(g);A(v,{name:`Playground`,args:{kind:`outline`,variant:`rainbow`,size:48,on:!0},parameters:{docs:{description:{story:`Playground: every prop wired to live controls.`}},__svelteCsf:{rawCode:`<LightGlow {...args} />`}}}),A(t(v,2),{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: Figma's grid of kinds and states in every size, switchable to watch the animation.`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-8 typography-body-small-semibold text-text-secondary">
  <div class="sticky top-0 z-10 -mx-12 flex items-center gap-4 bg-layer-background px-12 py-4">
    <Toggle id="light-glow-switch" bind:checked={on} />
    <label for="light-glow-switch" class="typography-body-regular text-text">Switch the lights on</label>
  </div>
  {#each variants as variant (variant)}
    <div class="grid grid-cols-[auto_repeat(6,3rem)] place-items-center gap-x-4 gap-y-6">
      <span class="justify-self-start typography-body-regular text-text capitalize">{variant}</span>
      {#each sizes as size (size)}
        <span>{size}</span>
      {/each}

      <span class="justify-self-start">Filled, on</span>
      {#each sizes as size (size)}
        <LightGlow {variant} {size} />
      {/each}

      <span class="justify-self-start">Filled, off</span>
      {#each sizes as size (size)}
        <LightGlow {variant} {size} on={false} />
      {/each}

      <span class="justify-self-start">Outline, on</span>
      {#each sizes as size (size)}
        <LightGlow {variant} {size} kind="outline" />
      {/each}

      <span class="justify-self-start">Outline, off</span>
      {#each sizes as size (size)}
        <LightGlow {variant} {size} kind="outline" on={false} />
      {/each}

      <span class="justify-self-start">Filled, switch</span>
      {#each sizes as size (size)}
        <LightGlow {variant} {size} {on} />
      {/each}

      <span class="justify-self-start">Outline, switch</span>
      {#each sizes as size (size)}
        <LightGlow {variant} {size} kind="outline" {on} />
      {/each}
    </div>
  {/each}
</div>`}},children:(e,i)=>{var a=F(),s=n(a);D(n(s),{id:`light-glow-switch`,get checked(){return m(p)},set checked(e){r(p,e,!0)}}),d(2),u(s),c(t(s,2),16,()=>M,e=>e,(e,r)=>{var i=P(),a=n(i),s=n(a,!0);u(a);var l=t(a,2);c(l,16,()=>j,e=>e,(e,t)=>{var r=N(),i=n(r,!0);u(r),o(()=>_(i,t)),h(e,r)});var d=t(l,4);c(d,16,()=>j,e=>e,(e,t)=>{T(e,{get variant(){return r},get size(){return t}})});var f=t(d,4);c(f,16,()=>j,e=>e,(e,t)=>{T(e,{get variant(){return r},get size(){return t},on:!1})});var g=t(f,4);c(g,16,()=>j,e=>e,(e,t)=>{T(e,{get variant(){return r},get size(){return t},kind:`outline`})});var v=t(g,4);c(v,16,()=>j,e=>e,(e,t)=>{T(e,{get variant(){return r},get size(){return t},kind:`outline`,on:!1})});var y=t(v,4);c(y,16,()=>j,e=>e,(e,t)=>{T(e,{get variant(){return r},get size(){return t},get on(){return m(p)}})}),c(t(y,4),16,()=>j,e=>e,(e,t)=>{T(e,{get variant(){return r},get size(){return t},kind:`outline`,get on(){return m(p)}})}),u(i),o(()=>_(s,r)),h(e,i)}),u(a),h(e,a)},$$slots:{default:!0}}),h(e,g),s()}var k,A,j,M,N,P,F,I,L,R,z,B;e((()=>{p(),v(),S(),w(),E(),g(),y(),k={title:`lib/components/LightGlow`,component:T,parameters:{layout:`centered`,design:C(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=629-3826`)},argTypes:{kind:{control:`inline-radio`,options:[`filled`,`outline`]},variant:{control:`inline-radio`,options:[`solid`,`rainbow`]},size:{control:`select`,options:[16,20,24,32,40,48]},on:{control:`boolean`}}},{Story:A}=b(k),j=[16,20,24,32,40,48],M=[`solid`,`rainbow`],N=f(`<span> </span>`),P=f(`<div class="grid grid-cols-[auto_repeat(6,3rem)] place-items-center gap-x-4 gap-y-6"><span class="justify-self-start typography-body-regular text-text capitalize"> </span> <!> <span class="justify-self-start">Filled, on</span> <!> <span class="justify-self-start">Filled, off</span> <!> <span class="justify-self-start">Outline, on</span> <!> <span class="justify-self-start">Outline, off</span> <!> <span class="justify-self-start">Filled, switch</span> <!> <span class="justify-self-start">Outline, switch</span> <!></div>`),F=f(`<div class="flex flex-col gap-8 typography-body-small-semibold text-text-secondary"><div class="sticky top-0 z-10 -mx-12 flex items-center gap-4 bg-layer-background px-12 py-4"><!> <label for="light-glow-switch" class="typography-body-regular text-text">Switch the lights on</label></div> <!></div>`),I=f(`<!> <!>`,1),O.__docgen={data:[],name:`LightGlow.stories.svelte`},L=x(O,k),R=[`Playground`,`Overview`],z={...L.Playground,tags:[`svelte-csf-v5`]},B={...L.Overview,tags:[`svelte-csf-v5`]}}))();export{B as Overview,z as Playground,R as __namedExportsOrder,k as default};