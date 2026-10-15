import{i as e}from"./preload-helper-xPQekRTU.js";import{Ct as t,Gt as n,H as r,It as i,Lt as a,Ot as o,Wt as s,Xt as c,Zt as l,gt as u,it as d,jt as f,kt as p,nt as m,ot as h,t as g,tn as _}from"./iframe-DioEwCTH.js";import{i as v,n as y,r as b,t as x}from"./create-runtime-stories-DcgB2h65.js";import{n as S,t as C}from"./figmaDesign-BuxWJBGH.js";import{n as w,t as T}from"./LightGlow-B3gXxkYS.js";import{n as E,t as D}from"./Toggle-Cj5T1kDX.js";function O(e,h){n(h,!0);let g=a(!0);var _=L(),v=p(_);A(v,{name:`Playground`,args:{variant:`solid`,size:48,on:!0},parameters:{docs:{description:{story:`Playground: every prop wired to live controls.`}},__svelteCsf:{rawCode:`<LightGlow {...args} />`}}}),A(f(v,2),{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: on, off and switching in every size, then light colors from dark to bright, off, to show the icon flipping between white and black.`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-8 typography-body-small-semibold text-text-secondary">
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
</div>`}},children:(e,n)=>{var a=I(),s=o(a);D(o(s),{id:`light-glow-switch`,get checked(){return u(g)},set checked(e){i(g,e,!0)}}),c(2),l(s);var p=f(s,2);r(p,16,()=>M,e=>e,(e,n)=>{var i=F(),a=o(i),s=o(a,!0);l(a);var c=f(a,2);r(c,16,()=>j,e=>e,(e,n)=>{var r=P(),i=o(r,!0);l(r),t(()=>m(i,n)),d(e,r)});var p=f(c,4);r(p,16,()=>j,e=>e,(e,t)=>{T(e,{get variant(){return n},get size(){return t}})});var h=f(p,4);r(h,16,()=>j,e=>e,(e,t)=>{T(e,{get variant(){return n},get size(){return t},on:!1})}),r(f(h,4),16,()=>j,e=>e,(e,t)=>{T(e,{get variant(){return n},get size(){return t},get on(){return u(g)}})}),l(i),t(()=>m(s,n)),d(e,i)});var h=f(p,2),_=f(o(h),2);r(_,20,()=>N,e=>e,(e,t)=>{T(e,{get color(){return t},size:48,on:!1})}),l(_),l(h),l(a),d(e,a)},$$slots:{default:!0}}),d(e,_),s()}var k,A,j,M,N,P,F,I,L,R,z,B,V;e((()=>{_(),v(),S(),w(),E(),g(),y(),k={title:`lib/components/LightGlow`,component:T,parameters:{layout:`centered`,design:C(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=629-3826`)},argTypes:{color:{control:`color`},variant:{control:`inline-radio`,options:[`solid`,`rainbow`]},size:{control:`select`,options:[16,20,24,32,40,48]},on:{control:`boolean`}}},{Story:A}=b(k),j=[16,20,24,32,40,48],M=[`solid`,`rainbow`],N=[`#1a1a19`,`#3d0b20`,`#3f7be0`,`#7a5ce0`,`#f0443e`,`#b796f2`,`#ff7a2a`,`#ace7cb`,`#f6e03a`,`#fbfbf9`],P=h(`<span> </span>`),F=h(`<div class="grid grid-cols-[auto_repeat(6,3rem)] place-items-center gap-x-4 gap-y-6"><span class="justify-self-start typography-body-regular text-text capitalize"> </span> <!> <span class="justify-self-start">On</span> <!> <span class="justify-self-start">Off</span> <!> <span class="justify-self-start">Switch</span> <!></div>`),I=h(`<div class="flex flex-col gap-8 typography-body-small-semibold text-text-secondary"><div class="sticky top-0 z-10 -mx-12 flex items-center gap-4 bg-layer-background px-12 py-4"><!> <label for="light-glow-switch" class="typography-body-regular text-text">Switch the lights on</label></div> <!> <div class="flex flex-col gap-4"><span class="text-regular text-text">Icon contrast, off</span> <div class="flex gap-4"></div></div></div>`),L=h(`<!> <!>`,1),O.__docgen={data:[],name:`LightGlow.stories.svelte`},R=x(O,k),z=[`Playground`,`Overview`],B={...R.Playground,tags:[`svelte-csf-v5`]},V={...R.Overview,tags:[`svelte-csf-v5`]}}))();export{V as Overview,B as Playground,z as __namedExportsOrder,k as default};