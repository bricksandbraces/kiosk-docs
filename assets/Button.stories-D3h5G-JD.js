import{i as e}from"./preload-helper-xPQekRTU.js";import{At as t,D as n,Dt as r,E as i,Ot as a,St as o,Ut as s,V as c,Wt as l,Xt as u,at as d,en as f,ht as p,rt as m,s as h,t as g}from"./iframe-CkgO21Wf.js";import{a as _,i as v,n as y,o as b,r as x,s as S,t as C}from"./create-runtime-stories-CLvJ129Z.js";import{r as w,t as T}from"./Button-BkfGVY5V.js";import{S as E,t as D}from"./icons-B3yoWu1I.js";function O(e,d){l(d,!1),h();var f=z(),g=a(f);P(g,{name:`Playground`,args:{kind:`primary`,size:`large`,width:`fixed`,label:`Start workout`,longPressDelay:600},parameters:{docs:{description:{story:`Playground: every prop wired to live controls.`}},__svelteCsf:{rawCode:`<Button {...args} />`}}}),P(t(g,2),{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: every kind × size, text and icon-only, plus the states. Hold a button to see pressed, keep holding for long-pressed.`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-6">
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
</div>`}},children:(e,a)=>{var s=R(),l=r(s);c(l,1,()=>M,e=>e,(e,a)=>{var s=I();c(s,5,()=>A,e=>e,(e,s)=>{var c=F(),l=r(c);T(l,{get kind(){return p(s)},get size(){return p(a)},get icon(){return k},label:`Add`,longPressDelay:600}),T(t(l,2),{get kind(){return p(s)},get size(){return p(a)},label:`Button`,longPressDelay:600}),u(c),o(e=>i(c,1,e),[()=>n(j(p(s)))]),m(e,c)}),u(s),m(e,s)});var d=t(l,2);c(d,1,()=>M,e=>e,(e,n)=>{var i=L(),a=r(i);T(a,{get size(){return p(n)},width:`fixed`,label:`Fixed`,longPressDelay:600});var o=t(a,2);T(o,{get size(){return p(n)},width:`hug`,label:`Hug`,longPressDelay:600});var s=t(o,2);T(r(s),{get size(){return p(n)},width:`full`,label:`Full`,longPressDelay:600}),u(s),u(i),m(e,i)});var f=t(d,2);c(f,5,()=>A,e=>e,(e,a)=>{var s=F(),c=r(s);T(c,{get kind(){return p(a)},get icon(){return k},label:`Add`,loading:!0}),T(t(c,2),{get kind(){return p(a)},label:`Button`,loading:!0}),u(s),o(e=>i(s,1,e),[()=>n(j(p(a)))]),m(e,s)}),u(f);var h=t(f,2);c(h,5,()=>A,e=>e,(e,a)=>{var s=F(),c=r(s);T(c,{get kind(){return p(a)},get icon(){return k},label:`Add`,disabled:!0}),T(t(c,2),{get kind(){return p(a)},label:`Button`,disabled:!0}),u(s),o(e=>i(s,1,e),[()=>n(j(p(a)))]),m(e,s)}),u(h);var g=t(h,2),_=r(g),v=r(_);T(v,{kind:`ghost-light`,background:!1,get icon(){return k},label:`Add`,longPressDelay:600}),T(t(v,2),{kind:`ghost-light`,background:!1,label:`Button`,longPressDelay:600}),u(_);var y=t(_,2),b=r(y);T(b,{kind:`ghost-dark`,background:!1,get icon(){return k},label:`Add`,longPressDelay:600}),T(t(b,2),{kind:`ghost-dark`,background:!1,label:`Button`,longPressDelay:600}),u(y),u(g);var x=t(g,2);T(r(x),{kind:`ghost-light`,size:`small`,label:`I don't have a code`,href:`#`}),u(x);var S=t(x,2),C=r(S),w=r(C);T(w,{kind:`primary`,label:`Sharp`,longPressDelay:600}),T(t(w,2),{kind:`primary`,get icon(){return k},label:`Add`}),u(C);var E=t(C,2),D=r(E);T(D,{kind:`primary`,label:`Rounded`,longPressDelay:600}),T(t(D,2),{kind:`primary`,get icon(){return k},label:`Add`}),u(E);var O=t(E,2),N=r(O);T(N,{kind:`primary`,label:`Pill`,longPressDelay:600}),T(t(N,2),{kind:`primary`,get icon(){return k},label:`Add`}),u(O),u(S),u(s),o(e=>i(y,1,e),[()=>n(j(`ghost-dark`))]),m(e,s)},$$slots:{default:!0}}),m(e,f),s()}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;e((()=>{f(),S(),b(),v(),w(),D(),g(),y(),k=e=>{E(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},A=[`primary`,`outline`,`secondary`,`tertiary`,`primary-subtle`,`secondary-subtle`,`tertiary-subtle`,`ghost-light`,`ghost-dark`,`danger`],j=e=>e===`ghost-dark`?`flex items-center gap-3 rounded-xl bg-layer-inverse p-xs`:`flex items-center gap-3`,M=[`large`,`medium`,`small`],N={title:`lib/components/Button`,component:T,parameters:{layout:`centered`,design:x(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=496-850`)},argTypes:{kind:{control:`select`,options:A},size:{control:`inline-radio`,options:M},width:{control:`inline-radio`,options:[`fixed`,`hug`,`full`]},disabled:{control:`boolean`},loading:{control:`boolean`},longPressDelay:{control:`number`},background:{control:`boolean`}}},{Story:P}=_(N),F=d(`<div><!> <!></div>`),I=d(`<div class="flex flex-wrap items-center gap-6"></div>`),L=d(`<div class="flex flex-wrap items-center gap-6"><!> <!> <div class="w-80"><!></div></div>`),R=d(`<div class="flex flex-col gap-6"><!> <!> <div class="flex flex-wrap items-center gap-6"></div> <div class="flex flex-wrap items-center gap-6"></div> <div class="flex flex-wrap items-center gap-6"><div class="flex items-center gap-3"><!> <!></div> <div><!> <!></div></div> <div class="flex flex-wrap items-center gap-3"><!></div> <div class="flex flex-wrap items-center gap-3"><div class="flex items-center gap-3" style="--radius-button: 0"><!> <!></div> <div class="flex items-center gap-3" style="--radius-button: 0.1875rem"><!> <!></div> <div class="flex items-center gap-3"><!> <!></div></div></div>`),z=d(`<!> <!>`,1),O.__docgen={data:[],name:`Button.stories.svelte`},B=C(O,N),V=[`Playground`,`Overview`],H={...B.Playground,tags:[`svelte-csf-v5`]},U={...B.Overview,tags:[`svelte-csf-v5`]}}))();export{U as Overview,H as Playground,V as __namedExportsOrder,N as default};