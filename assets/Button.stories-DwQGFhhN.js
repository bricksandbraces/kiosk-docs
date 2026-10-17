import{i as e}from"./preload-helper-xPQekRTU.js";import{At as t,D as n,Gt as r,H as i,Kt as a,Mt as o,O as s,Qt as c,_t as l,it as u,kt as d,nn as f,ot as p,s as m,t as h,wt as g}from"./iframe-DphDD8Dh.js";import{a as _,i as v,n as y,r as b,t as x}from"./create-runtime-stories-Cf7yfCMR.js";import{n as S,t as C}from"./figmaDesign-BuxWJBGH.js";import{S as w,t as T}from"./icons-mE3sbh9i.js";import{r as E,t as D}from"./Button--OUeTAjj.js";function O(e,f){a(f,!1),m();var p=z(),h=t(p);P(h,{name:`Playground`,args:{kind:`primary`,size:`large`,width:`fixed`,label:`Start workout`,longPressDelay:600},parameters:{docs:{description:{story:`Playground: every prop wired to live controls.`}},__svelteCsf:{rawCode:`<Button {...args} />`}}}),P(o(h,2),{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: every kind × size, text and icon-only, plus the states. Hold a button to see pressed, keep holding for long-pressed.`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-6">
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
</div>`}},children:(e,t)=>{var r=R(),a=d(r);i(a,1,()=>M,e=>e,(e,t)=>{var r=I();i(r,5,()=>A,e=>e,(e,r)=>{var i=F(),a=d(i);D(a,{get kind(){return l(r)},get size(){return l(t)},get icon(){return k},label:`Add`,longPressDelay:600}),D(o(a,2),{get kind(){return l(r)},get size(){return l(t)},label:`Button`,longPressDelay:600}),c(i),g(e=>n(i,1,e),[()=>s(j(l(r)))]),u(e,i)}),c(r),u(e,r)});var f=o(a,2);i(f,1,()=>M,e=>e,(e,t)=>{var n=L(),r=d(n);D(r,{get size(){return l(t)},width:`fixed`,label:`Fixed`,longPressDelay:600});var i=o(r,2);D(i,{get size(){return l(t)},width:`hug`,label:`Hug`,longPressDelay:600});var a=o(i,2);D(d(a),{get size(){return l(t)},width:`full`,label:`Full`,longPressDelay:600}),c(a),c(n),u(e,n)});var p=o(f,2);i(p,5,()=>A,e=>e,(e,t)=>{var r=F(),i=d(r);D(i,{get kind(){return l(t)},get icon(){return k},label:`Add`,loading:!0}),D(o(i,2),{get kind(){return l(t)},label:`Button`,loading:!0}),c(r),g(e=>n(r,1,e),[()=>s(j(l(t)))]),u(e,r)}),c(p);var m=o(p,2);i(m,5,()=>A,e=>e,(e,t)=>{var r=F(),i=d(r);D(i,{get kind(){return l(t)},get icon(){return k},label:`Add`,disabled:!0}),D(o(i,2),{get kind(){return l(t)},label:`Button`,disabled:!0}),c(r),g(e=>n(r,1,e),[()=>s(j(l(t)))]),u(e,r)}),c(m);var h=o(m,2),_=d(h),v=d(_);D(v,{kind:`ghost-light`,background:!1,get icon(){return k},label:`Add`,longPressDelay:600}),D(o(v,2),{kind:`ghost-light`,background:!1,label:`Button`,longPressDelay:600}),c(_);var y=o(_,2),b=d(y);D(b,{kind:`ghost-dark`,background:!1,get icon(){return k},label:`Add`,longPressDelay:600}),D(o(b,2),{kind:`ghost-dark`,background:!1,label:`Button`,longPressDelay:600}),c(y),c(h);var x=o(h,2);D(d(x),{kind:`ghost-light`,size:`small`,label:`I don't have a code`,href:`#`}),c(x);var S=o(x,2),C=d(S),w=d(C);D(w,{kind:`primary`,label:`Sharp`,longPressDelay:600}),D(o(w,2),{kind:`primary`,get icon(){return k},label:`Add`}),c(C);var T=o(C,2),E=d(T);D(E,{kind:`primary`,label:`Rounded`,longPressDelay:600}),D(o(E,2),{kind:`primary`,get icon(){return k},label:`Add`}),c(T);var O=o(T,2),N=d(O);D(N,{kind:`primary`,label:`Pill`,longPressDelay:600}),D(o(N,2),{kind:`primary`,get icon(){return k},label:`Add`}),c(O),c(S),c(r),g(e=>n(y,1,e),[()=>s(j(`ghost-dark`))]),u(e,r)},$$slots:{default:!0}}),u(e,p),r()}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;e((()=>{f(),_(),v(),S(),E(),T(),h(),y(),k=e=>{w(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},A=[`primary`,`outline`,`secondary`,`tertiary`,`primary-subtle`,`secondary-subtle`,`tertiary-subtle`,`ghost-light`,`ghost-dark`,`danger`],j=e=>e===`ghost-dark`?`flex items-center gap-3 rounded-xl bg-layer-inverse p-xs`:`flex items-center gap-3`,M=[`large`,`medium`,`small`],N={title:`lib/components/Button`,component:D,parameters:{layout:`centered`,design:C(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=496-850`)},argTypes:{kind:{control:`select`,options:A},size:{control:`inline-radio`,options:M},width:{control:`inline-radio`,options:[`fixed`,`hug`,`full`]},disabled:{control:`boolean`},loading:{control:`boolean`},pressed:{control:`boolean`},longPressDelay:{control:`number`},background:{control:`boolean`}}},{Story:P}=b(N),F=p(`<div><!> <!></div>`),I=p(`<div class="flex flex-wrap items-center gap-6"></div>`),L=p(`<div class="flex flex-wrap items-center gap-6"><!> <!> <div class="w-80"><!></div></div>`),R=p(`<div class="flex flex-col gap-6"><!> <!> <div class="flex flex-wrap items-center gap-6"></div> <div class="flex flex-wrap items-center gap-6"></div> <div class="flex flex-wrap items-center gap-6"><div class="flex items-center gap-3"><!> <!></div> <div><!> <!></div></div> <div class="flex flex-wrap items-center gap-3"><!></div> <div class="flex flex-wrap items-center gap-3"><div class="flex items-center gap-3" style="--radius-button: 0"><!> <!></div> <div class="flex items-center gap-3" style="--radius-button: 0.1875rem"><!> <!></div> <div class="flex items-center gap-3"><!> <!></div></div></div>`),z=p(`<!> <!>`,1),O.__docgen={data:[],name:`Button.stories.svelte`},B=x(O,N),V=[`Playground`,`Overview`],H={...B.Playground,tags:[`svelte-csf-v5`]},U={...B.Overview,tags:[`svelte-csf-v5`]}}))();export{U as Overview,H as Playground,V as __namedExportsOrder,N as default};