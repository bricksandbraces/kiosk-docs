import{i as e}from"./preload-helper-xPQekRTU.js";import{Et as t,Ht as n,Jt as r,Ot as i,Qt as a,T as o,Tt as s,Vt as c,bt as l,pt as u,rt as d,s as f,t as p,tt as m,w as h,z as g}from"./iframe-UVmDwNI-.js";import{a as _,i as v,n as y,o as b,r as x,s as S,t as C}from"./create-runtime-stories-GnEX0ovO.js";import{r as w,t as T}from"./Button-Daha63Qc.js";import{S as E,t as D}from"./icons-sFUosUbY.js";function O(e,a){n(a,!1),f();var d=z(),p=t(d);P(p,{name:`Playground`,args:{kind:`primary`,size:`large`,width:`fixed`,label:`Start workout`,longPressDelay:600},parameters:{docs:{description:{story:`Playground: every prop wired to live controls.`}},__svelteCsf:{rawCode:`<Button {...args} />`}}}),P(i(p,2),{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: every kind × size, text and icon-only, plus the states. Hold a button to see pressed, keep holding for long-pressed.`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-6">
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
</div>`}},children:(e,t)=>{var n=R(),a=s(n);g(a,1,()=>M,e=>e,(e,t)=>{var n=I();g(n,5,()=>A,e=>e,(e,n)=>{var a=F(),c=s(a);T(c,{get kind(){return u(n)},get size(){return u(t)},get icon(){return k},label:`Add`,longPressDelay:600}),T(i(c,2),{get kind(){return u(n)},get size(){return u(t)},label:`Button`,longPressDelay:600}),r(a),l(e=>h(a,1,e),[()=>o(j(u(n)))]),m(e,a)}),r(n),m(e,n)});var c=i(a,2);g(c,1,()=>M,e=>e,(e,t)=>{var n=L(),a=s(n);T(a,{get size(){return u(t)},width:`fixed`,label:`Fixed`,longPressDelay:600});var o=i(a,2);T(o,{get size(){return u(t)},width:`hug`,label:`Hug`,longPressDelay:600});var c=i(o,2);T(s(c),{get size(){return u(t)},width:`full`,label:`Full`,longPressDelay:600}),r(c),r(n),m(e,n)});var d=i(c,2);g(d,5,()=>A,e=>e,(e,t)=>{var n=F(),a=s(n);T(a,{get kind(){return u(t)},get icon(){return k},label:`Add`,loading:!0}),T(i(a,2),{get kind(){return u(t)},label:`Button`,loading:!0}),r(n),l(e=>h(n,1,e),[()=>o(j(u(t)))]),m(e,n)}),r(d);var f=i(d,2);g(f,5,()=>A,e=>e,(e,t)=>{var n=F(),a=s(n);T(a,{get kind(){return u(t)},get icon(){return k},label:`Add`,disabled:!0}),T(i(a,2),{get kind(){return u(t)},label:`Button`,disabled:!0}),r(n),l(e=>h(n,1,e),[()=>o(j(u(t)))]),m(e,n)}),r(f);var p=i(f,2),_=s(p),v=s(_);T(v,{kind:`ghost-light`,background:!1,get icon(){return k},label:`Add`,longPressDelay:600}),T(i(v,2),{kind:`ghost-light`,background:!1,label:`Button`,longPressDelay:600}),r(_);var y=i(_,2),b=s(y);T(b,{kind:`ghost-dark`,background:!1,get icon(){return k},label:`Add`,longPressDelay:600}),T(i(b,2),{kind:`ghost-dark`,background:!1,label:`Button`,longPressDelay:600}),r(y),r(p);var x=i(p,2);T(s(x),{kind:`ghost-light`,size:`small`,label:`I don't have a code`,href:`#`}),r(x);var S=i(x,2),C=s(S),w=s(C);T(w,{kind:`primary`,label:`Sharp`,longPressDelay:600}),T(i(w,2),{kind:`primary`,get icon(){return k},label:`Add`}),r(C);var E=i(C,2),D=s(E);T(D,{kind:`primary`,label:`Rounded`,longPressDelay:600}),T(i(D,2),{kind:`primary`,get icon(){return k},label:`Add`}),r(E);var O=i(E,2),N=s(O);T(N,{kind:`primary`,label:`Pill`,longPressDelay:600}),T(i(N,2),{kind:`primary`,get icon(){return k},label:`Add`}),r(O),r(S),r(n),l(e=>h(y,1,e),[()=>o(j(`ghost-dark`))]),m(e,n)},$$slots:{default:!0}}),m(e,d),c()}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;e((()=>{a(),S(),b(),v(),w(),D(),p(),y(),k=e=>{E(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},A=[`primary`,`outline`,`secondary`,`tertiary`,`primary-subtle`,`secondary-subtle`,`tertiary-subtle`,`ghost-light`,`ghost-dark`,`danger`],j=e=>e===`ghost-dark`?`flex items-center gap-3 rounded-xl bg-layer-inverse p-xs`:`flex items-center gap-3`,M=[`large`,`medium`,`small`],N={title:`lib/components/Button`,component:T,parameters:{layout:`centered`,design:x(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=496-850`)},argTypes:{kind:{control:`select`,options:A},size:{control:`inline-radio`,options:M},width:{control:`inline-radio`,options:[`fixed`,`hug`,`full`]},disabled:{control:`boolean`},loading:{control:`boolean`},longPressDelay:{control:`number`},background:{control:`boolean`}}},{Story:P}=_(N),F=d(`<div><!> <!></div>`),I=d(`<div class="flex flex-wrap items-center gap-6"></div>`),L=d(`<div class="flex flex-wrap items-center gap-6"><!> <!> <div class="w-80"><!></div></div>`),R=d(`<div class="flex flex-col gap-6"><!> <!> <div class="flex flex-wrap items-center gap-6"></div> <div class="flex flex-wrap items-center gap-6"></div> <div class="flex flex-wrap items-center gap-6"><div class="flex items-center gap-3"><!> <!></div> <div><!> <!></div></div> <div class="flex flex-wrap items-center gap-3"><!></div> <div class="flex flex-wrap items-center gap-3"><div class="flex items-center gap-3" style="--radius-button: 0"><!> <!></div> <div class="flex items-center gap-3" style="--radius-button: 0.1875rem"><!> <!></div> <div class="flex items-center gap-3"><!> <!></div></div></div>`),z=d(`<!> <!>`,1),O.__docgen={data:[],name:`Button.stories.svelte`},B=C(O,N),V=[`Playground`,`Overview`],H={...B.Playground,tags:[`svelte-csf-v5`]},U={...B.Overview,tags:[`svelte-csf-v5`]}}))();export{U as Overview,H as Playground,V as __namedExportsOrder,N as default};