import{i as e}from"./preload-helper-xPQekRTU.js";import{At as t,Dt as n,Ft as r,It as i,Ot as a,St as o,Ut as s,V as c,Wt as l,Xt as u,Yt as d,at as f,en as p,ht as m,rt as h,t as g,tt as _}from"./iframe-DBVOT1WK.js";import{i as v,n as y,r as b,t as x}from"./create-runtime-stories-BI37nCAl.js";import{n as S,t as C}from"./figmaDesign-BuxWJBGH.js";import{n as w,t as T}from"./LightGlow-BWK58l5K.js";import{n as E,t as D}from"./Toggle-CHy3JMdv.js";function O(e,f){l(f,!0);let p=i(!0);var g=L(),v=a(g);A(v,{name:`Playground`,args:{variant:`solid`,size:48,on:!0},parameters:{docs:{description:{story:`Playground: every prop wired to live controls.`}},__svelteCsf:{rawCode:`<LightGlow {...args} />`}}}),A(t(v,2),{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: on, off and switching in every size, then light colors from dark to bright, off, to show the icon flipping between white and black.`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-8 typography-body-small-semibold text-text-secondary">
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

      <span class="justify-self-start">On</span>
      {#each sizes as size (size)}
        <LightGlow {variant} {size} />
      {/each}

      <span class="justify-self-start">Off</span>
      {#each sizes as size (size)}
        <LightGlow {variant} {size} on={false} />
      {/each}

      <span class="justify-self-start">Switch</span>
      {#each sizes as size (size)}
        <LightGlow {variant} {size} {on} />
      {/each}
    </div>
  {/each}
  <div class="flex flex-col gap-4">
    <span class="text-regular text-text">Icon contrast, off</span>
    <div class="flex gap-4">
      {#each colors as color (color)}
        <LightGlow {color} size={48} on={false} />
      {/each}
    </div>
  </div>
</div>`}},children:(e,i)=>{var a=I(),s=n(a);D(n(s),{id:`light-glow-switch`,get checked(){return m(p)},set checked(e){r(p,e,!0)}}),d(2),u(s);var l=t(s,2);c(l,16,()=>M,e=>e,(e,r)=>{var i=F(),a=n(i),s=n(a,!0);u(a);var l=t(a,2);c(l,16,()=>j,e=>e,(e,t)=>{var r=P(),i=n(r,!0);u(r),o(()=>_(i,t)),h(e,r)});var d=t(l,4);c(d,16,()=>j,e=>e,(e,t)=>{T(e,{get variant(){return r},get size(){return t}})});var f=t(d,4);c(f,16,()=>j,e=>e,(e,t)=>{T(e,{get variant(){return r},get size(){return t},on:!1})}),c(t(f,4),16,()=>j,e=>e,(e,t)=>{T(e,{get variant(){return r},get size(){return t},get on(){return m(p)}})}),u(i),o(()=>_(s,r)),h(e,i)});var f=t(l,2),g=t(n(f),2);c(g,20,()=>N,e=>e,(e,t)=>{T(e,{get color(){return t},size:48,on:!1})}),u(g),u(f),u(a),h(e,a)},$$slots:{default:!0}}),h(e,g),s()}var k,A,j,M,N,P,F,I,L,R,z,B,V;e((()=>{p(),v(),S(),w(),E(),g(),y(),k={title:`lib/components/LightGlow`,component:T,parameters:{layout:`centered`,design:C(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=629-3826`)},argTypes:{color:{control:`color`},variant:{control:`inline-radio`,options:[`solid`,`rainbow`]},size:{control:`select`,options:[16,20,24,32,40,48]},on:{control:`boolean`}}},{Story:A}=b(k),j=[16,20,24,32,40,48],M=[`solid`,`rainbow`],N=[`#1a1a19`,`#3d0b20`,`#3f7be0`,`#7a5ce0`,`#f0443e`,`#b796f2`,`#ff7a2a`,`#ace7cb`,`#f6e03a`,`#fbfbf9`],P=f(`<span> </span>`),F=f(`<div class="grid grid-cols-[auto_repeat(6,3rem)] place-items-center gap-x-4 gap-y-6"><span class="justify-self-start typography-body-regular text-text capitalize"> </span> <!> <span class="justify-self-start">On</span> <!> <span class="justify-self-start">Off</span> <!> <span class="justify-self-start">Switch</span> <!></div>`),I=f(`<div class="flex flex-col gap-8 typography-body-small-semibold text-text-secondary"><div class="sticky top-0 z-10 -mx-12 flex items-center gap-4 bg-layer-background px-12 py-4"><!> <label for="light-glow-switch" class="typography-body-regular text-text">Switch the lights on</label></div> <!> <div class="flex flex-col gap-4"><span class="text-regular text-text">Icon contrast, off</span> <div class="flex gap-4"></div></div></div>`),L=f(`<!> <!>`,1),O.__docgen={data:[],name:`LightGlow.stories.svelte`},R=x(O,k),z=[`Playground`,`Overview`],B={...R.Playground,tags:[`svelte-csf-v5`]},V={...R.Overview,tags:[`svelte-csf-v5`]}}))();export{V as Overview,B as Playground,z as __namedExportsOrder,k as default};