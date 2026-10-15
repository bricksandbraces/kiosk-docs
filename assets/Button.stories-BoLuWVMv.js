import{i as e}from"./preload-helper-xPQekRTU.js";import{Ct as t,D as n,Gt as r,H as i,O as a,Ot as o,Wt as s,Zt as c,gt as l,it as u,jt as d,kt as f,ot as p,s as m,t as h,tn as g}from"./iframe-BQUFMOPA.js";import{a as _,i as v,n as y,r as b,t as x}from"./create-runtime-stories-BvNx2sCj.js";import{n as S,t as C}from"./figmaDesign-BuxWJBGH.js";import{r as w,t as T}from"./Button-CovLQNE_.js";import{S as E,t as D}from"./icons-C5cL0qgQ.js";function O(e,p){r(p,!1),m();var h=z(),g=f(h);P(g,{name:`Playground`,args:{kind:`primary`,size:`large`,width:`fixed`,label:`Start workout`,longPressDelay:600},parameters:{docs:{description:{story:`Playground: every prop wired to live controls.`}},__svelteCsf:{rawCode:`<Button {...args} />`}}}),P(d(g,2),{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: every kind × size, text and icon-only, plus the states. Hold a button to see pressed, keep holding for long-pressed.`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-6">
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
</div>`}},children:(e,r)=>{var s=R(),f=o(s);i(f,1,()=>M,e=>e,(e,r)=>{var s=I();i(s,5,()=>A,e=>e,(e,i)=>{var s=F(),f=o(s);T(f,{get kind(){return l(i)},get size(){return l(r)},get icon(){return k},label:`Add`,longPressDelay:600}),T(d(f,2),{get kind(){return l(i)},get size(){return l(r)},label:`Button`,longPressDelay:600}),c(s),t(e=>n(s,1,e),[()=>a(j(l(i)))]),u(e,s)}),c(s),u(e,s)});var p=d(f,2);i(p,1,()=>M,e=>e,(e,t)=>{var n=L(),r=o(n);T(r,{get size(){return l(t)},width:`fixed`,label:`Fixed`,longPressDelay:600});var i=d(r,2);T(i,{get size(){return l(t)},width:`hug`,label:`Hug`,longPressDelay:600});var a=d(i,2);T(o(a),{get size(){return l(t)},width:`full`,label:`Full`,longPressDelay:600}),c(a),c(n),u(e,n)});var m=d(p,2);i(m,5,()=>A,e=>e,(e,r)=>{var i=F(),s=o(i);T(s,{get kind(){return l(r)},get icon(){return k},label:`Add`,loading:!0}),T(d(s,2),{get kind(){return l(r)},label:`Button`,loading:!0}),c(i),t(e=>n(i,1,e),[()=>a(j(l(r)))]),u(e,i)}),c(m);var h=d(m,2);i(h,5,()=>A,e=>e,(e,r)=>{var i=F(),s=o(i);T(s,{get kind(){return l(r)},get icon(){return k},label:`Add`,disabled:!0}),T(d(s,2),{get kind(){return l(r)},label:`Button`,disabled:!0}),c(i),t(e=>n(i,1,e),[()=>a(j(l(r)))]),u(e,i)}),c(h);var g=d(h,2),_=o(g),v=o(_);T(v,{kind:`ghost-light`,background:!1,get icon(){return k},label:`Add`,longPressDelay:600}),T(d(v,2),{kind:`ghost-light`,background:!1,label:`Button`,longPressDelay:600}),c(_);var y=d(_,2),b=o(y);T(b,{kind:`ghost-dark`,background:!1,get icon(){return k},label:`Add`,longPressDelay:600}),T(d(b,2),{kind:`ghost-dark`,background:!1,label:`Button`,longPressDelay:600}),c(y),c(g);var x=d(g,2);T(o(x),{kind:`ghost-light`,size:`small`,label:`I don't have a code`,href:`#`}),c(x);var S=d(x,2),C=o(S),w=o(C);T(w,{kind:`primary`,label:`Sharp`,longPressDelay:600}),T(d(w,2),{kind:`primary`,get icon(){return k},label:`Add`}),c(C);var E=d(C,2),D=o(E);T(D,{kind:`primary`,label:`Rounded`,longPressDelay:600}),T(d(D,2),{kind:`primary`,get icon(){return k},label:`Add`}),c(E);var O=d(E,2),N=o(O);T(N,{kind:`primary`,label:`Pill`,longPressDelay:600}),T(d(N,2),{kind:`primary`,get icon(){return k},label:`Add`}),c(O),c(S),c(s),t(e=>n(y,1,e),[()=>a(j(`ghost-dark`))]),u(e,s)},$$slots:{default:!0}}),u(e,h),s()}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;e((()=>{g(),_(),v(),S(),w(),D(),h(),y(),k=e=>{E(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},A=[`primary`,`outline`,`secondary`,`tertiary`,`primary-subtle`,`secondary-subtle`,`tertiary-subtle`,`ghost-light`,`ghost-dark`,`danger`],j=e=>e===`ghost-dark`?`flex items-center gap-3 rounded-xl bg-layer-inverse p-xs`:`flex items-center gap-3`,M=[`large`,`medium`,`small`],N={title:`lib/components/Button`,component:T,parameters:{layout:`centered`,design:C(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=496-850`)},argTypes:{kind:{control:`select`,options:A},size:{control:`inline-radio`,options:M},width:{control:`inline-radio`,options:[`fixed`,`hug`,`full`]},disabled:{control:`boolean`},loading:{control:`boolean`},longPressDelay:{control:`number`},background:{control:`boolean`}}},{Story:P}=b(N),F=p(`<div><!> <!></div>`),I=p(`<div class="flex flex-wrap items-center gap-6"></div>`),L=p(`<div class="flex flex-wrap items-center gap-6"><!> <!> <div class="w-80"><!></div></div>`),R=p(`<div class="flex flex-col gap-6"><!> <!> <div class="flex flex-wrap items-center gap-6"></div> <div class="flex flex-wrap items-center gap-6"></div> <div class="flex flex-wrap items-center gap-6"><div class="flex items-center gap-3"><!> <!></div> <div><!> <!></div></div> <div class="flex flex-wrap items-center gap-3"><!></div> <div class="flex flex-wrap items-center gap-3"><div class="flex items-center gap-3" style="--radius-button: 0"><!> <!></div> <div class="flex items-center gap-3" style="--radius-button: 0.1875rem"><!> <!></div> <div class="flex items-center gap-3"><!> <!></div></div></div>`),z=p(`<!> <!>`,1),O.__docgen={data:[],name:`Button.stories.svelte`},B=x(O,N),V=[`Playground`,`Overview`],H={...B.Playground,tags:[`svelte-csf-v5`]},U={...B.Overview,tags:[`svelte-csf-v5`]}}))();export{U as Overview,H as Playground,V as __namedExportsOrder,N as default};