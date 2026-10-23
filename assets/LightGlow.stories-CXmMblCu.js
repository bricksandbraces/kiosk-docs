import{i as e}from"./preload-helper-xPQekRTU.js";import{$t as t,Ft as n,Ht as r,K as i,Lt as a,Pt as o,Ut as s,cn as c,ct as l,en as u,hn as d,kt as f,ot as p,sn as m,t as h,ut as g,xt as _}from"./iframe-BzTDCJug.js";import{i as v,n as y,r as b,t as x}from"./create-runtime-stories-CDHdP2fv.js";import{n as S,t as C}from"./figmaDesign-BuxWJBGH.js";import{n as w,t as T}from"./LightGlow-CWgPYSKG.js";import{n as E,t as D}from"./Toggle-ptbz8bY8.js";function O(e,d){u(d,!0);let h=s(!0);var g=L(),v=n(g);A(v,{name:`Playground`,args:{variant:`solid`,size:48,on:!0},parameters:{docs:{description:{story:`Playground: every prop wired to live controls.`}},__svelteCsf:{rawCode:`<LightGlow {...args} />`}}}),A(a(v,2),{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: on, off and switching in every size, then light colors from dark to bright, off, to show the icon flipping between white and black.`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-8 typography-body-small-semibold text-text-secondary">
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
</div>`}},children:(e,t)=>{var n=I(),s=o(n);D(o(s),{id:`light-glow-switch`,get checked(){return _(h)},set checked(e){r(h,e,!0)}}),m(2),c(s);var u=a(s,2);i(u,16,()=>M,e=>e,(e,t)=>{var n=F(),r=o(n),s=o(r,!0);c(r);var u=a(r,2);i(u,16,()=>j,e=>e,(e,t)=>{var n=P(),r=o(n,!0);c(n),f(()=>p(r,t)),l(e,n)});var d=a(u,4);i(d,16,()=>j,e=>e,(e,n)=>{T(e,{get variant(){return t},get size(){return n}})});var m=a(d,4);i(m,16,()=>j,e=>e,(e,n)=>{T(e,{get variant(){return t},get size(){return n},on:!1})}),i(a(m,4),16,()=>j,e=>e,(e,n)=>{T(e,{get variant(){return t},get size(){return n},get on(){return _(h)}})}),c(n),f(()=>p(s,t)),l(e,n)});var d=a(u,2),g=a(o(d),2);i(g,20,()=>N,e=>e,(e,t)=>{T(e,{get color(){return t},size:48,on:!1})}),c(g),c(d),c(n),l(e,n)},$$slots:{default:!0}}),l(e,g),t()}var k,A,j,M,N,P,F,I,L,R,z,B,V;e((()=>{d(),v(),S(),w(),E(),h(),y(),k={title:`lib/components/LightGlow`,component:T,parameters:{layout:`centered`,design:C(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=629-3826`)},argTypes:{color:{control:`color`},variant:{control:`inline-radio`,options:[`solid`,`rainbow`]},size:{control:`select`,options:[16,20,24,32,40,48]},on:{control:`boolean`}}},{Story:A}=b(k),j=[16,20,24,32,40,48],M=[`solid`,`rainbow`],N=[`#1a1a19`,`#3d0b20`,`#3f7be0`,`#7a5ce0`,`#f0443e`,`#b796f2`,`#ff7a2a`,`#ace7cb`,`#f6e03a`,`#fbfbf9`],P=g(`<span> </span>`),F=g(`<div class="grid grid-cols-[auto_repeat(6,3rem)] place-items-center gap-x-4 gap-y-6"><span class="justify-self-start typography-body-regular text-text capitalize"> </span> <!> <span class="justify-self-start">On</span> <!> <span class="justify-self-start">Off</span> <!> <span class="justify-self-start">Switch</span> <!></div>`),I=g(`<div class="flex flex-col gap-8 typography-body-small-semibold text-text-secondary"><div class="sticky top-0 z-10 -mx-12 flex items-center gap-4 bg-layer-background px-12 py-4"><!> <label for="light-glow-switch" class="typography-body-regular text-text">Switch the lights on</label></div> <!> <div class="flex flex-col gap-4"><span class="text-regular text-text">Icon contrast, off</span> <div class="flex gap-4"></div></div></div>`),L=g(`<!> <!>`,1),O.__docgen={data:[],name:`LightGlow.stories.svelte`},R=x(O,k),z=[`Playground`,`Overview`],B={...R.Playground,tags:[`svelte-csf-v5`]},V={...R.Overview,tags:[`svelte-csf-v5`]}}))();export{V as Overview,B as Playground,z as __namedExportsOrder,k as default};