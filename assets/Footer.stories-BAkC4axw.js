import{i as e}from"./preload-helper-xPQekRTU.js";import{At as t,D as n,Dt as r,E as i,Ft as a,It as o,K as s,Ot as c,Q as l,S as u,St as d,Ut as f,V as p,Wt as m,Xt as h,a as g,at as _,dt as v,en as y,ft as b,ht as ee,i as x,it as te,rt as S,s as ne,t as C,tt as w,ut as T,y as re}from"./iframe-CJEdpsI_.js";import{a as E,i as D,n as O,r as k,t as ie}from"./create-runtime-stories-B5_Q70uc.js";import{n as ae,t as oe}from"./figmaDesign-BuxWJBGH.js";import{n as se,t as A}from"./cn-drmvVxDp.js";import{r as ce,t as j}from"./Button-QWGOuHI3.js";import{E as le,M as ue,O as de,W as fe,g as pe,i as me,t as M,v as he}from"./icons-CW_PmnZX.js";import{n as ge,t as N}from"./ColorButton-CRVPvEqb.js";import{n as _e,t as ve}from"./ProgressiveBlur-R1yPYWAa.js";function P(e,p){m(p,!0);let _=x(p,`showCloseButton`,3,!1),y=x(p,`closeAriaLabel`,3,`Close`),ne=g(p,F),C=o(!1);var w=z();re(w,e=>({class:e,...ne}),[()=>A(`fixed bottom-0 left-0 right-0 z-50 w-full flex items-center px-xl py-l pointer-events-none`,p.class)]);var T=r(w);ve(T,{edge:`bottom`,class:`-z-10`});var E=t(T,2),D=r(E),O=e=>{var o=L(),f=r(o),m=e=>{var t=I();me(r(t),{class:`size-6`,stroke:1.5,"aria-hidden":`true`}),h(t),d(e=>{i(t,1,e),u(t,`aria-label`,y())},[()=>n(A(`size-12 shrink-0 inline-flex items-center justify-center rounded-rounded bg-layer-ghost text-icon backdrop-blur-[0.625rem]`,`cursor-pointer transition-transform duration-150 hover:opacity-90 outline-none focus-visible:kds-selected`,ee(C)&&`scale-[0.98]`))]),v(`click`,t,function(...e){p.onCloseClick?.apply(this,e)}),v(`pointerdown`,t,()=>a(C,!0)),v(`pointerup`,t,()=>a(C,!1)),b(`pointerleave`,t,()=>a(C,!1)),b(`pointercancel`,t,()=>a(C,!1)),v(`keydown`,t,e=>{(e.key===`Enter`||e.key===` `)&&a(C,!0)}),v(`keyup`,t,()=>a(C,!1)),S(e,t)};s(f,e=>{_()&&e(m)});var g=t(f,2),x=e=>{var t=te();l(c(t),()=>p.left),S(e,t)};s(g,e=>{p.left&&e(x)}),h(o),S(e,o)};s(D,e=>{(_()||p.left)&&e(O)});var k=t(D,2),ie=e=>{var t=R();l(r(t),()=>p.children),h(t),S(e,t)};s(k,e=>{p.children&&e(ie)});var ae=t(k,2),oe=e=>{var t=ye();l(r(t),()=>p.right),h(t),S(e,t)};s(ae,e=>{p.right&&e(oe)}),h(E),h(w),S(e,w),f()}var F,I,L,R,ye,z,be=e((()=>{y(),C(),se(),_e(),M(),F=new Set([`$$slots`,`$$events`,`$$legacy`,`children`,`left`,`right`,`showCloseButton`,`onCloseClick`,`closeAriaLabel`,`class`]),I=_(`<button type="button"><!></button>`),L=_(`<div class="flex items-center gap-s shrink-0"><!> <!></div>`),R=_(`<div class="absolute left-1/2 -translate-x-1/2 flex items-center gap-s"><!></div>`),ye=_(`<div class="ml-auto flex items-center gap-s shrink-0"><!></div>`),z=_(`<footer><!> <div class="pointer-events-auto relative flex items-center w-full max-w-full min-h-12"><!> <!> <!></div></footer>`),T([`click`,`pointerdown`,`pointerup`,`keydown`,`keyup`]),P.__docgen={data:[{name:`children`,visibility:`public`,description:`Main action, horizontally centered (e.g. a primary Button).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`left`,visibility:`public`,description:`Left-zone content (e.g. a label or extra buttons).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`right`,visibility:`public`,description:`Right-zone content (e.g. a danger button or an icon group).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`showCloseButton`,visibility:`public`,description:`Convenience: a close/back icon button at the start of the left zone.`,keywords:[],kind:`let`,type:{kind:`type`,type:`boolean`,text:`boolean`},static:!1,readonly:!1,defaultValue:`false`},{name:`onCloseClick`,visibility:`public`,description:`Close click handler.`,keywords:[],kind:`let`,type:{kind:`function`,text:`() => void`},static:!1,readonly:!1},{name:`closeAriaLabel`,visibility:`public`,description:`Aria label for the close button.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Close"`},{name:`class`,visibility:`public`,description:`Additional classes.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1}],name:`Footer.svelte`}}));function B(e,n){m(n,!1),ne();var i=Z(),a=c(i);Y(a,{name:`Playground`,asChild:!0,children:(e,t)=>{P(e,{get left(){return q},children:(e,t)=>{j(e,{label:`Start workout`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:`Playground: the Default kind - a centered primary action with a maximize control.`}},__svelteCsf:{rawCode:`<Footer left={maximizeButton}>
  <Button label="Start workout" kind="primary" size="large" onclick={() => {}} />
</Footer>`}}});var o=t(a,2);Y(o,{name:`ScrollingContent`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`ScrollingContent: verifies the blur-based fade against the real-world case
    (workout editor rows scrolling underneath the Save/Delete footer). Scroll the
    list - rows must blur and tint progressively, never get hard-covered.`}},__svelteCsf:{rawCode:`<div class="h-screen bg-layer-background">
  <div class="h-full overflow-y-auto px-m pt-6 pb-40">
    <div class="flex flex-col gap-2xs">
      {#each Array.from({ length: 18 }, (_, i) => i + 1) as n (n)}
        <div class="flex w-full items-center justify-between rounded-m bg-layer-01 px-l py-l">
          <div class="flex flex-col gap-3xs">
            <span class="typography-label-regular text-text-secondary">{n % 2 === 0 ? 'Break' : 'Interval'}</span>
            <span class="typography-body-bold text-text">{n}:00</span>
          </div>
          <span class="typography-body-regular text-text-secondary">Row {n} - scrolls under the footer</span>
        </div>
      {/each}
    </div>
  </div>

  <Footer showCloseButton onCloseClick={() => {}}>
    <Button label="Save" kind="primary" size="large" onclick={() => {}} />
    {#snippet right()}
      <Button label="Delete" kind="danger" size="large" onclick={() => {}} />
    {/snippet}
  </Footer>
</div>`}},children:(e,n)=>{var i=Se(),a=r(i),o=r(a);p(o,4,()=>Array.from({length:18},(e,t)=>t+1),e=>e,(e,n)=>{var i=xe(),a=r(i),o=r(a),s=r(o,!0);h(o);var c=t(o,2),l=r(c);h(c),h(a);var u=t(a,2),f=r(u);h(u),h(i),d(()=>{w(s,n%2==0?`Break`:`Interval`),w(l,`${n??``}:00`),w(f,`Row ${n??``} - scrolls under the footer`)}),S(e,i)}),h(o),h(a),P(t(a,2),{showCloseButton:!0,onCloseClick:()=>{},right:e=>{j(e,{label:`Delete`,kind:`danger`,size:`large`,onclick:()=>{}})},children:(e,t)=>{j(e,{label:`Save`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{right:!0,default:!0}}),h(i),S(e,i)},$$slots:{default:!0}}),Y(t(o,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: every Figma footer kind (rendered in-flow so they stack).`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-6">
  <!-- Default: maximize control + centered primary action. -->
  <Footer class="relative bottom-auto" left={maximizeButton}>
    <Button label="Start workout" kind="primary" size="large" onclick={() => {}} />
  </Footer>

  <!-- Timer: settings (left), centered playback cluster, restart (right). -->
  <Footer class="relative bottom-auto">
    {#snippet left()}
      <Button kind="ghost-light" size="large" icon={settingsIcon} aria-label="Settings" onclick={() => {}} />
    {/snippet}
    <div class="flex items-center gap-xs">
      <Button kind="ghost-light" size="large" icon={prevIcon} aria-label="Previous" onclick={() => {}} />
      <Button kind="ghost-light" size="large" icon={pauseIcon} aria-label="Pause" onclick={() => {}} />
      <Button kind="ghost-light" size="large" icon={skipIcon} aria-label="Skip" onclick={() => {}} />
    </div>
    {#snippet right()}
      <Button kind="ghost-light" size="large" icon={restartIcon} aria-label="Restart" onclick={() => {}} />
    {/snippet}
  </Footer>

  <!-- Edit: back, centered Save, danger Delete on the right. -->
  <Footer class="relative bottom-auto" showCloseButton onCloseClick={() => {}}>
    <Button label="Save" kind="primary" size="large" onclick={() => {}} />
    {#snippet right()}
      <Button label="Delete" kind="danger" size="large" onclick={() => {}} />
    {/snippet}
  </Footer>

  <!-- Edit - Color: centered color swatches, settings on the right. -->
  <Footer class="relative bottom-auto">
    <div class="flex items-center gap-xs">
      <ColorButton color="var(--color-primary)" shape="circle" />
      <ColorButton color="var(--color-secondary)" shape="square" />
      <ColorButton color="var(--color-tertiary)" shape="triangle" />
    </div>
    {#snippet right()}
      <Button kind="ghost-light" size="large" icon={settingsIcon} aria-label="Settings" onclick={() => {}} />
    {/snippet}
  </Footer>

  <!-- Workout Complete: hint label (left), centered Close, playback group (right). -->
  <Footer class="relative bottom-auto">
    {#snippet left()}
      <span class="typography-label-regular text-text whitespace-nowrap">Tap twice to end</span>
    {/snippet}
    <Button label="Close" kind="ghost-light" size="large" onclick={() => {}} />
    {#snippet right()}
      <Button kind="ghost-light" size="large" icon={prevIcon} aria-label="Previous" onclick={() => {}} />
      <Button kind="ghost-light" size="large" icon={skipIcon} aria-label="Skip" onclick={() => {}} />
    {/snippet}
  </Footer>
</div>`}},children:(e,n)=>{var i=Te(),a=r(i);P(a,{class:`relative bottom-auto`,get left(){return q},children:(e,t)=>{j(e,{label:`Start workout`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{default:!0}});var o=t(a,2);P(o,{class:`relative bottom-auto`,left:e=>{j(e,{kind:`ghost-light`,size:`large`,get icon(){return K},"aria-label":`Settings`,onclick:()=>{}})},right:e=>{j(e,{kind:`ghost-light`,size:`large`,get icon(){return G},"aria-label":`Restart`,onclick:()=>{}})},children:(e,n)=>{var i=X(),a=r(i);j(a,{kind:`ghost-light`,size:`large`,get icon(){return H},"aria-label":`Previous`,onclick:()=>{}});var o=t(a,2);j(o,{kind:`ghost-light`,size:`large`,get icon(){return U},"aria-label":`Pause`,onclick:()=>{}}),j(t(o,2),{kind:`ghost-light`,size:`large`,get icon(){return W},"aria-label":`Skip`,onclick:()=>{}}),h(i),S(e,i)},$$slots:{left:!0,right:!0,default:!0}});var s=t(o,2);P(s,{class:`relative bottom-auto`,showCloseButton:!0,onCloseClick:()=>{},right:e=>{j(e,{label:`Delete`,kind:`danger`,size:`large`,onclick:()=>{}})},children:(e,t)=>{j(e,{label:`Save`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{right:!0,default:!0}});var l=t(s,2);P(l,{class:`relative bottom-auto`,right:e=>{j(e,{kind:`ghost-light`,size:`large`,get icon(){return K},"aria-label":`Settings`,onclick:()=>{}})},children:(e,n)=>{var i=X(),a=r(i);N(a,{color:`var(--color-primary)`,shape:`circle`});var o=t(a,2);N(o,{color:`var(--color-secondary)`,shape:`square`}),N(t(o,2),{color:`var(--color-tertiary)`,shape:`triangle`}),h(i),S(e,i)},$$slots:{right:!0,default:!0}}),P(t(l,2),{class:`relative bottom-auto`,left:e=>{S(e,Ce())},right:e=>{var n=we(),r=c(n);j(r,{kind:`ghost-light`,size:`large`,get icon(){return H},"aria-label":`Previous`,onclick:()=>{}}),j(t(r,2),{kind:`ghost-light`,size:`large`,get icon(){return W},"aria-label":`Skip`,onclick:()=>{}}),S(e,n)},children:(e,t)=>{j(e,{label:`Close`,kind:`ghost-light`,size:`large`,onclick:()=>{}})},$$slots:{left:!0,right:!0,default:!0}}),h(i),S(e,i)},$$slots:{default:!0}}),S(e,i),f()}var V,H,U,W,G,K,q,J,Y,xe,Se,X,Ce,we,Te,Z,Q,Ee,De,Oe,$;e((()=>{y(),E(),D(),ae(),be(),ce(),ge(),M(),C(),O(),V=e=>{fe(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},H=e=>{de(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},U=e=>{ue(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},W=e=>{le(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},G=e=>{he(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},K=e=>{pe(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},q=e=>{j(e,{kind:`ghost-light`,size:`large`,get icon(){return V},"aria-label":`Toggle fullscreen`,onclick:()=>{}})},J={title:`lib/components/Footer`,component:P,parameters:{layout:`fullscreen`,fullBleed:!0,design:oe(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=8-1291`)},argTypes:{showCloseButton:{control:`boolean`}}},{Story:Y}=k(J),xe=_(`<div class="flex w-full items-center justify-between rounded-m bg-layer-01 px-l py-l"><div class="flex flex-col gap-3xs"><span class="typography-label-regular text-text-secondary"> </span> <span class="typography-body-bold text-text"> </span></div> <span class="typography-body-regular text-text-secondary"> </span></div>`),Se=_(`<div class="h-screen bg-layer-background"><div class="h-full overflow-y-auto px-m pt-6 pb-40"><div class="flex flex-col gap-2xs"></div></div> <!></div>`),X=_(`<div class="flex items-center gap-xs"><!> <!> <!></div>`),Ce=_(`<span class="typography-label-regular text-text whitespace-nowrap">Tap twice to end</span>`),we=_(`<!> <!>`,1),Te=_(`<div class="flex flex-col gap-6"><!> <!> <!> <!> <!></div>`),Z=_(`<!> <!> <!>`,1),B.__docgen={data:[],name:`Footer.stories.svelte`},Q=ie(B,J),Ee=[`Playground`,`ScrollingContent`,`Overview`],De={...Q.Playground,tags:[`svelte-csf-v5`]},Oe={...Q.ScrollingContent,tags:[`svelte-csf-v5`]},$={...Q.Overview,tags:[`svelte-csf-v5`]}}))();export{$ as Overview,De as Playground,Oe as ScrollingContent,Ee as __namedExportsOrder,J as default};