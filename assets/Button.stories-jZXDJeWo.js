import{i as e}from"./preload-helper-xPQekRTU.js";import{Et as t,Ht as n,Jt as r,Ot as i,Qt as a,T as o,Tt as s,Vt as c,bt as l,pt as u,rt as d,s as f,t as p,tt as m,w as h,z as g}from"./iframe-2LEQQivP.js";import{a as _,i as v,n as y,o as b,r as x,s as S,t as C}from"./create-runtime-stories-B-R5ZkKM.js";import{n as w,t as T}from"./Button-DnIBY-rp.js";import{S as E,t as D}from"./icons-CUoalfo5.js";function O(e,a){n(a,!1),f();var d=R(),p=t(d);P(p,{name:`Playground`,args:{kind:`primary`,size:`large`,label:`Start workout`,longPressDelay:600},parameters:{docs:{description:{story:`Playground: every prop wired to live controls.`}},__svelteCsf:{rawCode:`<Button {...args} />`}}}),P(i(p,2),{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: every kind × size, text and icon-only, plus the states. Hold a button to see pressed, keep holding for long-pressed.`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-6">
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
</div>`}},children:(e,t)=>{var n=L(),a=s(n);g(a,1,()=>M,e=>e,(e,t)=>{var n=I();g(n,5,()=>A,e=>e,(e,n)=>{var a=F(),c=s(a);T(c,{get kind(){return u(n)},get size(){return u(t)},get icon(){return k},label:`Add`,longPressDelay:600}),T(i(c,2),{get kind(){return u(n)},get size(){return u(t)},label:`Button`,longPressDelay:600}),r(a),l(e=>h(a,1,e),[()=>o(j(u(n)))]),m(e,a)}),r(n),m(e,n)});var c=i(a,2);g(c,5,()=>A,e=>e,(e,t)=>{var n=F(),a=s(n);T(a,{get kind(){return u(t)},get icon(){return k},label:`Add`,loading:!0}),T(i(a,2),{get kind(){return u(t)},label:`Button`,loading:!0}),r(n),l(e=>h(n,1,e),[()=>o(j(u(t)))]),m(e,n)}),r(c);var d=i(c,2);g(d,5,()=>A,e=>e,(e,t)=>{var n=F(),a=s(n);T(a,{get kind(){return u(t)},get icon(){return k},label:`Add`,disabled:!0}),T(i(a,2),{get kind(){return u(t)},label:`Button`,disabled:!0}),r(n),l(e=>h(n,1,e),[()=>o(j(u(t)))]),m(e,n)}),r(d);var f=i(d,2),p=s(f),_=s(p);T(_,{kind:`ghost-light`,background:!1,get icon(){return k},label:`Add`,longPressDelay:600}),T(i(_,2),{kind:`ghost-light`,background:!1,label:`Button`,longPressDelay:600}),r(p);var v=i(p,2),y=s(v);T(y,{kind:`ghost-dark`,background:!1,get icon(){return k},label:`Add`,longPressDelay:600}),T(i(y,2),{kind:`ghost-dark`,background:!1,label:`Button`,longPressDelay:600}),r(v),r(f);var b=i(f,2);T(s(b),{kind:`ghost-light`,size:`small`,label:`I don't have a code`,href:`#`}),r(b);var x=i(b,2),S=s(x),C=s(S);T(C,{kind:`primary`,label:`Sharp`,longPressDelay:600}),T(i(C,2),{kind:`primary`,get icon(){return k},label:`Add`}),r(S);var w=i(S,2),E=s(w);T(E,{kind:`primary`,label:`Rounded`,longPressDelay:600}),T(i(E,2),{kind:`primary`,get icon(){return k},label:`Add`}),r(w);var D=i(w,2),O=s(D);T(O,{kind:`primary`,label:`Pill`,longPressDelay:600}),T(i(O,2),{kind:`primary`,get icon(){return k},label:`Add`}),r(D),r(x),r(n),l(e=>h(v,1,e),[()=>o(j(`ghost-dark`))]),m(e,n)},$$slots:{default:!0}}),m(e,d),c()}var k,A,j,M,N,P,F,I,L,R,z,B,V,H;e((()=>{a(),S(),b(),v(),w(),D(),p(),y(),k=e=>{E(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},A=[`primary`,`outline`,`secondary`,`tertiary`,`primary-subtle`,`secondary-subtle`,`tertiary-subtle`,`ghost-light`,`ghost-dark`,`danger`],j=e=>e===`ghost-dark`?`flex items-center gap-3 rounded-xl bg-layer-inverse p-xs`:`flex items-center gap-3`,M=[`large`,`medium`,`small`],N={title:`lib/components/Button`,component:T,parameters:{layout:`centered`,design:x(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=496-850`)},argTypes:{kind:{control:`select`,options:A},size:{control:`inline-radio`,options:M},disabled:{control:`boolean`},loading:{control:`boolean`},longPressDelay:{control:`number`},background:{control:`boolean`}}},{Story:P}=_(N),F=d(`<div><!> <!></div>`),I=d(`<div class="flex flex-wrap items-center gap-6"></div>`),L=d(`<div class="flex flex-col gap-6"><!> <div class="flex flex-wrap items-center gap-6"></div> <div class="flex flex-wrap items-center gap-6"></div> <div class="flex flex-wrap items-center gap-6"><div class="flex items-center gap-3"><!> <!></div> <div><!> <!></div></div> <div class="flex flex-wrap items-center gap-3"><!></div> <div class="flex flex-wrap items-center gap-3"><div class="flex items-center gap-3" style="--radius-button: 0"><!> <!></div> <div class="flex items-center gap-3" style="--radius-button: 0.1875rem"><!> <!></div> <div class="flex items-center gap-3"><!> <!></div></div></div>`),R=d(`<!> <!>`,1),O.__docgen={data:[],name:`Button.stories.svelte`},z=C(O,N),B=[`Playground`,`Overview`],V={...z.Playground,tags:[`svelte-csf-v5`]},H={...z.Overview,tags:[`svelte-csf-v5`]}}))();export{H as Overview,V as Playground,B as __namedExportsOrder,N as default};