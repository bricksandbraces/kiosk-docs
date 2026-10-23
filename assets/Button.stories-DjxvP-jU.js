import{i as e}from"./preload-helper-xPQekRTU.js";import{$t as t,D as n,Ft as r,K as i,Lt as a,O as o,Pt as s,cn as c,ct as l,en as u,hn as d,kt as f,s as p,t as m,ut as h,xt as g}from"./iframe-BzTDCJug.js";import{a as _,i as v,n as y,r as b,t as x}from"./create-runtime-stories-CDHdP2fv.js";import{n as S,t as C}from"./figmaDesign-BuxWJBGH.js";import{w}from"./tabler-icons-svelte-DJHJl3Bu.js";import{t as T}from"./icons-CLVTb0zT.js";import{r as E,t as D}from"./Button-Bcwnqxe0.js";function O(e,d){u(d,!1),p();var m=z(),h=r(m);P(h,{name:`Playground`,args:{kind:`primary`,size:`large`,width:`fixed`,label:`Start workout`,longPressDelay:600},parameters:{docs:{description:{story:`Playground: every prop wired to live controls.`}},__svelteCsf:{rawCode:`<Button {...args} />`}}}),P(a(h,2),{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: every kind × size, text and icon-only, plus the states. Hold a button to see pressed, keep holding for long-pressed.`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-6">
  {#each sizes as size (size)}
    <div class="flex flex-wrap items-center gap-6">
      {#each kinds as kind (kind)}
        <div class={kindGroup(kind)}>
          <Button {kind} {size} icon={plusIcon} label="Add" longPressDelay={600} />
          <Button {kind} {size} label="Button" longPressDelay={600} />
        </div>
      {/each}
    </div>
  {/each}
  <!-- Widths: fixed (56px side padding), hug (20px side padding), full (fills the 20rem column). -->
  {#each sizes as size (size)}
    <div class="flex flex-wrap items-center gap-6">
      <Button {size} width="fixed" label="Fixed" longPressDelay={600} />
      <Button {size} width="hug" label="Hug" longPressDelay={600} />
      <div class="w-80">
        <Button {size} width="full" label="Full" longPressDelay={600} />
      </div>
    </div>
  {/each}
  <div class="flex flex-wrap items-center gap-6">
    {#each kinds as kind (kind)}
      <div class={kindGroup(kind)}>
        <Button {kind} icon={plusIcon} label="Add" loading />
        <Button {kind} label="Button" loading />
      </div>
    {/each}
  </div>
  <div class="flex flex-wrap items-center gap-6">
    {#each kinds as kind (kind)}
      <div class={kindGroup(kind)}>
        <Button {kind} icon={plusIcon} label="Add" disabled />
        <Button {kind} label="Button" disabled />
      </div>
    {/each}
  </div>
  <!-- Ghosts without background: the surface only shows while pressed. -->
  <div class="flex flex-wrap items-center gap-6">
    <div class="flex items-center gap-3">
      <Button kind="ghost-light" background={false} icon={plusIcon} label="Add" longPressDelay={600} />
      <Button kind="ghost-light" background={false} label="Button" longPressDelay={600} />
    </div>
    <div class={kindGroup('ghost-dark')}>
      <Button kind="ghost-dark" background={false} icon={plusIcon} label="Add" longPressDelay={600} />
      <Button kind="ghost-dark" background={false} label="Button" longPressDelay={600} />
    </div>
  </div>
  <div class="flex flex-wrap items-center gap-3">
    <Button kind="ghost-light" size="small" label="I don't have a code" href="#" />
  </div>
  <!-- Button shapes: the \`--radius-button\` token as the floor timer sets it per organization; icon-only buttons stay circles. -->
  <div class="flex flex-wrap items-center gap-3">
    <div class="flex items-center gap-3" style="--radius-button: 0">
      <Button kind="primary" label="Sharp" longPressDelay={600} />
      <Button kind="primary" icon={plusIcon} label="Add" />
    </div>
    <div class="flex items-center gap-3" style="--radius-button: 0.1875rem">
      <Button kind="primary" label="Rounded" longPressDelay={600} />
      <Button kind="primary" icon={plusIcon} label="Add" />
    </div>
    <div class="flex items-center gap-3">
      <Button kind="primary" label="Pill" longPressDelay={600} />
      <Button kind="primary" icon={plusIcon} label="Add" />
    </div>
  </div>
</div>`}},children:(e,t)=>{var r=R(),u=s(r);i(u,1,()=>M,e=>e,(e,t)=>{var r=I();i(r,5,()=>A,e=>e,(e,r)=>{var i=F(),u=s(i);D(u,{get kind(){return g(r)},get size(){return g(t)},get icon(){return k},label:`Add`,longPressDelay:600}),D(a(u,2),{get kind(){return g(r)},get size(){return g(t)},label:`Button`,longPressDelay:600}),c(i),f(e=>n(i,1,e),[()=>o(j(g(r)))]),l(e,i)}),c(r),l(e,r)});var d=a(u,2);i(d,1,()=>M,e=>e,(e,t)=>{var n=L(),r=s(n);D(r,{get size(){return g(t)},width:`fixed`,label:`Fixed`,longPressDelay:600});var i=a(r,2);D(i,{get size(){return g(t)},width:`hug`,label:`Hug`,longPressDelay:600});var o=a(i,2);D(s(o),{get size(){return g(t)},width:`full`,label:`Full`,longPressDelay:600}),c(o),c(n),l(e,n)});var p=a(d,2);i(p,5,()=>A,e=>e,(e,t)=>{var r=F(),i=s(r);D(i,{get kind(){return g(t)},get icon(){return k},label:`Add`,loading:!0}),D(a(i,2),{get kind(){return g(t)},label:`Button`,loading:!0}),c(r),f(e=>n(r,1,e),[()=>o(j(g(t)))]),l(e,r)}),c(p);var m=a(p,2);i(m,5,()=>A,e=>e,(e,t)=>{var r=F(),i=s(r);D(i,{get kind(){return g(t)},get icon(){return k},label:`Add`,disabled:!0}),D(a(i,2),{get kind(){return g(t)},label:`Button`,disabled:!0}),c(r),f(e=>n(r,1,e),[()=>o(j(g(t)))]),l(e,r)}),c(m);var h=a(m,2),_=s(h),v=s(_);D(v,{kind:`ghost-light`,background:!1,get icon(){return k},label:`Add`,longPressDelay:600}),D(a(v,2),{kind:`ghost-light`,background:!1,label:`Button`,longPressDelay:600}),c(_);var y=a(_,2),b=s(y);D(b,{kind:`ghost-dark`,background:!1,get icon(){return k},label:`Add`,longPressDelay:600}),D(a(b,2),{kind:`ghost-dark`,background:!1,label:`Button`,longPressDelay:600}),c(y),c(h);var x=a(h,2);D(s(x),{kind:`ghost-light`,size:`small`,label:`I don't have a code`,href:`#`}),c(x);var S=a(x,2),C=s(S),w=s(C);D(w,{kind:`primary`,label:`Sharp`,longPressDelay:600}),D(a(w,2),{kind:`primary`,get icon(){return k},label:`Add`}),c(C);var T=a(C,2),E=s(T);D(E,{kind:`primary`,label:`Rounded`,longPressDelay:600}),D(a(E,2),{kind:`primary`,get icon(){return k},label:`Add`}),c(T);var O=a(T,2),N=s(O);D(N,{kind:`primary`,label:`Pill`,longPressDelay:600}),D(a(N,2),{kind:`primary`,get icon(){return k},label:`Add`}),c(O),c(S),c(r),f(e=>n(y,1,e),[()=>o(j(`ghost-dark`))]),l(e,r)},$$slots:{default:!0}}),l(e,m),t()}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;e((()=>{d(),_(),v(),S(),E(),T(),m(),y(),k=e=>{w(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},A=[`primary`,`outline`,`secondary`,`tertiary`,`primary-subtle`,`secondary-subtle`,`tertiary-subtle`,`ghost-light`,`ghost-dark`,`danger`,`danger-subtle`],j=e=>e===`ghost-dark`?`flex items-center gap-3 rounded-xl bg-layer-inverse p-xs`:`flex items-center gap-3`,M=[`large`,`medium`,`small`],N={title:`lib/components/Button`,component:D,parameters:{layout:`centered`,design:C(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=496-850`)},argTypes:{kind:{control:`select`,options:A},size:{control:`inline-radio`,options:M},width:{control:`inline-radio`,options:[`fixed`,`hug`,`full`]},disabled:{control:`boolean`},loading:{control:`boolean`},pressed:{control:`boolean`},longPressDelay:{control:`number`},background:{control:`boolean`}}},{Story:P}=b(N),F=h(`<div><!> <!></div>`),I=h(`<div class="flex flex-wrap items-center gap-6"></div>`),L=h(`<div class="flex flex-wrap items-center gap-6"><!> <!> <div class="w-80"><!></div></div>`),R=h(`<div class="flex flex-col gap-6"><!> <!> <div class="flex flex-wrap items-center gap-6"></div> <div class="flex flex-wrap items-center gap-6"></div> <div class="flex flex-wrap items-center gap-6"><div class="flex items-center gap-3"><!> <!></div> <div><!> <!></div></div> <div class="flex flex-wrap items-center gap-3"><!></div> <div class="flex flex-wrap items-center gap-3"><div class="flex items-center gap-3" style="--radius-button: 0"><!> <!></div> <div class="flex items-center gap-3" style="--radius-button: 0.1875rem"><!> <!></div> <div class="flex items-center gap-3"><!> <!></div></div></div>`),z=h(`<!> <!>`,1),O.__docgen={data:[],name:`Button.stories.svelte`},B=x(O,N),V=[`Playground`,`Overview`],H={...B.Playground,tags:[`svelte-csf-v5`]},U={...B.Overview,tags:[`svelte-csf-v5`]}}))();export{U as Overview,H as Playground,V as __namedExportsOrder,N as default};