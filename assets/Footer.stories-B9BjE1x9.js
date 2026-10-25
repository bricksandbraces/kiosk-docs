import{i as e}from"./preload-helper-xPQekRTU.js";import{$t as t,C as n,D as r,Ft as i,Ht as a,K as o,Lt as s,O as c,Pt as l,Ut as u,Z as d,_t as f,a as p,b as ee,cn as m,ct as h,en as g,gn as _,gt as v,ht as y,i as b,kt as x,lt as te,ot as S,rt as C,s as w,t as T,ut as E,xt as ne}from"./iframe-CuVilV7m.js";import{a as D,i as O,n as re,r as k,t as ie}from"./create-runtime-stories-BLLorbHu.js";import{H as ae,I as oe,O as se,R as ce,it as le,n as ue,w as de}from"./tabler-icons-svelte-7Rc2Ucle.js";import{n as fe,t as pe}from"./figmaDesign-BuxWJBGH.js";import{n as me,t as A}from"./cn-Bv2TToEh.js";import{t as j}from"./icons-DSSWQnXi.js";import{r as he,t as M}from"./Button-Dp7U4fQq.js";import{n as ge,t as N}from"./ColorButton-BVI4u1YF.js";import{n as _e,t as ve}from"./ProgressiveBlur-CxJUH0aH.js";function P(e,o){g(o,!0);let _=b(o,`showCloseButton`,3,!1),y=b(o,`closeAriaLabel`,3,`Close`),S=p(o,F),w=u(!1);var T=z();ee(T,e=>({class:e,...S}),[()=>A(`fixed bottom-0 left-0 right-0 z-50 w-full flex items-center px-xl py-l pointer-events-none`,o.class)]);var E=l(T);ve(E,{edge:`bottom`,class:`-z-10`});var D=s(E,2),O=l(D),re=e=>{var t=L(),u=l(t),p=e=>{var t=I();ue(l(t),{class:`size-6`,stroke:1.5,"aria-hidden":`true`}),m(t),x(e=>{r(t,1,e),n(t,`aria-label`,y())},[()=>c(A(`size-12 shrink-0 inline-flex items-center justify-center rounded-rounded bg-layer-ghost text-icon backdrop-blur-[0.625rem]`,`cursor-pointer transition-transform duration-150 hover:opacity-90 outline-none focus-visible:kds-selected`,ne(w)&&`scale-[0.98]`))]),v(`click`,t,function(...e){o.onCloseClick?.apply(this,e)}),v(`pointerdown`,t,()=>a(w,!0)),v(`pointerup`,t,()=>a(w,!1)),f(`pointerleave`,t,()=>a(w,!1)),f(`pointercancel`,t,()=>a(w,!1)),v(`keydown`,t,e=>{(e.key===`Enter`||e.key===` `)&&a(w,!0)}),v(`keyup`,t,()=>a(w,!1)),h(e,t)};d(u,e=>{_()&&e(p)});var ee=s(u,2),g=e=>{var t=te();C(i(t),()=>o.left),h(e,t)};d(ee,e=>{o.left&&e(g)}),m(t),h(e,t)};d(O,e=>{(_()||o.left)&&e(re)});var k=s(O,2),ie=e=>{var t=ye();C(l(t),()=>o.children),m(t),h(e,t)};d(k,e=>{o.children&&e(ie)});var ae=s(k,2),oe=e=>{var t=R();C(l(t),()=>o.right),m(t),h(e,t)};d(ae,e=>{o.right&&e(oe)}),m(D),m(T),h(e,T),t()}var F,I,L,ye,R,z,be=e((()=>{_(),T(),me(),_e(),j(),F=new Set([`$$slots`,`$$events`,`$$legacy`,`children`,`left`,`right`,`showCloseButton`,`onCloseClick`,`closeAriaLabel`,`class`]),I=E(`<button type="button"><!></button>`),L=E(`<div class="flex items-center gap-s shrink-0"><!> <!></div>`),ye=E(`<div class="absolute left-1/2 -translate-x-1/2 flex items-center gap-s"><!></div>`),R=E(`<div class="ml-auto flex items-center gap-s shrink-0"><!></div>`),z=E(`<footer><!> <div class="pointer-events-auto relative flex items-center w-full max-w-full min-h-12"><!> <!> <!></div></footer>`),y([`click`,`pointerdown`,`pointerup`,`keydown`,`keyup`]),P.__docgen={data:[{name:`children`,visibility:`public`,description:`Main action, horizontally centered (e.g. a primary Button).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`left`,visibility:`public`,description:`Left-zone content (e.g. a label or extra buttons).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`right`,visibility:`public`,description:`Right-zone content (e.g. a danger button or an icon group).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`showCloseButton`,visibility:`public`,description:`Convenience: a close/back icon button at the start of the left zone.`,keywords:[],kind:`let`,type:{kind:`type`,type:`boolean`,text:`boolean`},static:!1,readonly:!1,defaultValue:`false`},{name:`onCloseClick`,visibility:`public`,description:`Close click handler.`,keywords:[],kind:`let`,type:{kind:`function`,text:`() => void`},static:!1,readonly:!1},{name:`closeAriaLabel`,visibility:`public`,description:`Aria label for the close button.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Close"`},{name:`class`,visibility:`public`,description:`Additional classes.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1}],name:`Footer.svelte`}}));function B(e,n){g(n,!1),w();var r=Z(),a=i(r);Y(a,{name:`Playground`,asChild:!0,children:(e,t)=>{P(e,{get left(){return q},children:(e,t)=>{M(e,{label:`Start workout`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:`Playground: the Default kind - a centered primary action with a maximize control.`}},__svelteCsf:{rawCode:`<Footer left={maximizeButton}>
  <Button label="Start workout" kind="primary" size="large" onclick={() => {}} />
</Footer>`}}});var c=s(a,2);Y(c,{name:`ScrollingContent`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`ScrollingContent: verifies the blur-based fade against the real-world case
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
</div>`}},children:(e,t)=>{var n=Se(),r=l(n),i=l(r);o(i,4,()=>Array.from({length:18},(e,t)=>t+1),e=>e,(e,t)=>{var n=xe(),r=l(n),i=l(r),a=l(i,!0);m(i);var o=s(i,2),c=l(o);m(o),m(r);var u=s(r,2),d=l(u);m(u),m(n),x(()=>{S(a,t%2==0?`Break`:`Interval`),S(c,`${t??``}:00`),S(d,`Row ${t??``} - scrolls under the footer`)}),h(e,n)}),m(i),m(r),P(s(r,2),{showCloseButton:!0,onCloseClick:()=>{},right:e=>{M(e,{label:`Delete`,kind:`danger`,size:`large`,onclick:()=>{}})},children:(e,t)=>{M(e,{label:`Save`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{right:!0,default:!0}}),m(n),h(e,n)},$$slots:{default:!0}}),Y(s(c,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: every Figma footer kind (rendered in-flow so they stack).`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-6">
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
</div>`}},children:(e,t)=>{var n=Te(),r=l(n);P(r,{class:`relative bottom-auto`,get left(){return q},children:(e,t)=>{M(e,{label:`Start workout`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{default:!0}});var a=s(r,2);P(a,{class:`relative bottom-auto`,left:e=>{M(e,{kind:`ghost-light`,size:`large`,get icon(){return K},"aria-label":`Settings`,onclick:()=>{}})},right:e=>{M(e,{kind:`ghost-light`,size:`large`,get icon(){return G},"aria-label":`Restart`,onclick:()=>{}})},children:(e,t)=>{var n=X(),r=l(n);M(r,{kind:`ghost-light`,size:`large`,get icon(){return H},"aria-label":`Previous`,onclick:()=>{}});var i=s(r,2);M(i,{kind:`ghost-light`,size:`large`,get icon(){return U},"aria-label":`Pause`,onclick:()=>{}}),M(s(i,2),{kind:`ghost-light`,size:`large`,get icon(){return W},"aria-label":`Skip`,onclick:()=>{}}),m(n),h(e,n)},$$slots:{left:!0,right:!0,default:!0}});var o=s(a,2);P(o,{class:`relative bottom-auto`,showCloseButton:!0,onCloseClick:()=>{},right:e=>{M(e,{label:`Delete`,kind:`danger`,size:`large`,onclick:()=>{}})},children:(e,t)=>{M(e,{label:`Save`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{right:!0,default:!0}});var c=s(o,2);P(c,{class:`relative bottom-auto`,right:e=>{M(e,{kind:`ghost-light`,size:`large`,get icon(){return K},"aria-label":`Settings`,onclick:()=>{}})},children:(e,t)=>{var n=X(),r=l(n);N(r,{color:`var(--color-primary)`,shape:`circle`});var i=s(r,2);N(i,{color:`var(--color-secondary)`,shape:`square`}),N(s(i,2),{color:`var(--color-tertiary)`,shape:`triangle`}),m(n),h(e,n)},$$slots:{right:!0,default:!0}}),P(s(c,2),{class:`relative bottom-auto`,left:e=>{h(e,Ce())},right:e=>{var t=we(),n=i(t);M(n,{kind:`ghost-light`,size:`large`,get icon(){return H},"aria-label":`Previous`,onclick:()=>{}}),M(s(n,2),{kind:`ghost-light`,size:`large`,get icon(){return W},"aria-label":`Skip`,onclick:()=>{}}),h(e,t)},children:(e,t)=>{M(e,{label:`Close`,kind:`ghost-light`,size:`large`,onclick:()=>{}})},$$slots:{left:!0,right:!0,default:!0}}),m(n),h(e,n)},$$slots:{default:!0}}),h(e,r),t()}var V,H,U,W,G,K,q,J,Y,xe,Se,X,Ce,we,Te,Z,Q,Ee,De,Oe,$;e((()=>{_(),D(),O(),fe(),be(),he(),ge(),j(),T(),re(),V=e=>{le(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},H=e=>{ce(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},U=e=>{ae(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},W=e=>{oe(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},G=e=>{se(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},K=e=>{de(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},q=e=>{M(e,{kind:`ghost-light`,size:`large`,get icon(){return V},"aria-label":`Toggle fullscreen`,onclick:()=>{}})},J={title:`lib/components/Footer`,component:P,parameters:{layout:`fullscreen`,fullBleed:!0,design:pe(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=8-1291`)},argTypes:{showCloseButton:{control:`boolean`}}},{Story:Y}=k(J),xe=E(`<div class="flex w-full items-center justify-between rounded-m bg-layer-01 px-l py-l"><div class="flex flex-col gap-3xs"><span class="typography-label-regular text-text-secondary"> </span> <span class="typography-body-bold text-text"> </span></div> <span class="typography-body-regular text-text-secondary"> </span></div>`),Se=E(`<div class="h-screen bg-layer-background"><div class="h-full overflow-y-auto px-m pt-6 pb-40"><div class="flex flex-col gap-2xs"></div></div> <!></div>`),X=E(`<div class="flex items-center gap-xs"><!> <!> <!></div>`),Ce=E(`<span class="typography-label-regular text-text whitespace-nowrap">Tap twice to end</span>`),we=E(`<!> <!>`,1),Te=E(`<div class="flex flex-col gap-6"><!> <!> <!> <!> <!></div>`),Z=E(`<!> <!> <!>`,1),B.__docgen={data:[],name:`Footer.stories.svelte`},Q=ie(B,J),Ee=[`Playground`,`ScrollingContent`,`Overview`],De={...Q.Playground,tags:[`svelte-csf-v5`]},Oe={...Q.ScrollingContent,tags:[`svelte-csf-v5`]},$={...Q.Overview,tags:[`svelte-csf-v5`]}}))();export{$ as Overview,De as Playground,Oe as ScrollingContent,Ee as __namedExportsOrder,J as default};