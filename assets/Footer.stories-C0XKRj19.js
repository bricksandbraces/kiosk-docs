import{i as e}from"./preload-helper-xPQekRTU.js";import{$ as t,At as n,C as r,D as i,Gt as a,H as o,Kt as s,Lt as c,Mt as l,O as u,Qt as d,Rt as f,_t as ee,a as te,at as ne,b as re,dt as p,ft as m,i as h,it as g,kt as _,nn as v,nt as y,ot as b,pt as x,q as S,s as C,t as w,wt as T}from"./iframe-DphDD8Dh.js";import{a as E,i as D,n as ie,r as O,t as ae}from"./create-runtime-stories-Cf7yfCMR.js";import{n as oe,t as k}from"./figmaDesign-BuxWJBGH.js";import{n as se,t as A}from"./cn-CCB-CBXC.js";import{E as ce,M as le,O as ue,W as de,g as fe,i as pe,t as j,v as me}from"./icons-mE3sbh9i.js";import{r as he,t as M}from"./Button--OUeTAjj.js";import{n as ge,t as N}from"./ColorButton-DoYCjWwV.js";import{n as _e,t as ve}from"./ProgressiveBlur-CLGBi521.js";function P(e,o){s(o,!0);let p=h(o,`showCloseButton`,3,!1),v=h(o,`closeAriaLabel`,3,`Close`),y=te(o,F),b=f(!1);var C=z();re(C,e=>({class:e,...y}),[()=>A(`fixed bottom-0 left-0 right-0 z-50 w-full flex items-center px-xl py-l pointer-events-none`,o.class)]);var w=_(C);ve(w,{edge:`bottom`,class:`-z-10`});var E=l(w,2),D=_(E),ie=e=>{var a=ye(),s=_(a),f=e=>{var t=I();pe(_(t),{class:`size-6`,stroke:1.5,"aria-hidden":`true`}),d(t),T(e=>{i(t,1,e),r(t,`aria-label`,v())},[()=>u(A(`size-12 shrink-0 inline-flex items-center justify-center rounded-rounded bg-layer-ghost text-icon backdrop-blur-[0.625rem]`,`cursor-pointer transition-transform duration-150 hover:opacity-90 outline-none focus-visible:kds-selected`,ee(b)&&`scale-[0.98]`))]),m(`click`,t,function(...e){o.onCloseClick?.apply(this,e)}),m(`pointerdown`,t,()=>c(b,!0)),m(`pointerup`,t,()=>c(b,!1)),x(`pointerleave`,t,()=>c(b,!1)),x(`pointercancel`,t,()=>c(b,!1)),m(`keydown`,t,e=>{(e.key===`Enter`||e.key===` `)&&c(b,!0)}),m(`keyup`,t,()=>c(b,!1)),g(e,t)};S(s,e=>{p()&&e(f)});var te=l(s,2),re=e=>{var r=ne();t(n(r),()=>o.left),g(e,r)};S(te,e=>{o.left&&e(re)}),d(a),g(e,a)};S(D,e=>{(p()||o.left)&&e(ie)});var O=l(D,2),ae=e=>{var n=L();t(_(n),()=>o.children),d(n),g(e,n)};S(O,e=>{o.children&&e(ae)});var oe=l(O,2),k=e=>{var n=R();t(_(n),()=>o.right),d(n),g(e,n)};S(oe,e=>{o.right&&e(k)}),d(E),d(C),g(e,C),a()}var F,I,ye,L,R,z,be=e((()=>{v(),w(),se(),_e(),j(),F=new Set([`$$slots`,`$$events`,`$$legacy`,`children`,`left`,`right`,`showCloseButton`,`onCloseClick`,`closeAriaLabel`,`class`]),I=b(`<button type="button"><!></button>`),ye=b(`<div class="flex items-center gap-s shrink-0"><!> <!></div>`),L=b(`<div class="absolute left-1/2 -translate-x-1/2 flex items-center gap-s"><!></div>`),R=b(`<div class="ml-auto flex items-center gap-s shrink-0"><!></div>`),z=b(`<footer><!> <div class="pointer-events-auto relative flex items-center w-full max-w-full min-h-12"><!> <!> <!></div></footer>`),p([`click`,`pointerdown`,`pointerup`,`keydown`,`keyup`]),P.__docgen={data:[{name:`children`,visibility:`public`,description:`Main action, horizontally centered (e.g. a primary Button).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`left`,visibility:`public`,description:`Left-zone content (e.g. a label or extra buttons).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`right`,visibility:`public`,description:`Right-zone content (e.g. a danger button or an icon group).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`showCloseButton`,visibility:`public`,description:`Convenience: a close/back icon button at the start of the left zone.`,keywords:[],kind:`let`,type:{kind:`type`,type:`boolean`,text:`boolean`},static:!1,readonly:!1,defaultValue:`false`},{name:`onCloseClick`,visibility:`public`,description:`Close click handler.`,keywords:[],kind:`let`,type:{kind:`function`,text:`() => void`},static:!1,readonly:!1},{name:`closeAriaLabel`,visibility:`public`,description:`Aria label for the close button.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Close"`},{name:`class`,visibility:`public`,description:`Additional classes.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1}],name:`Footer.svelte`}}));function B(e,t){s(t,!1),C();var r=Z(),i=n(r);Y(i,{name:`Playground`,asChild:!0,children:(e,t)=>{P(e,{get left(){return q},children:(e,t)=>{M(e,{label:`Start workout`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:`Playground: the Default kind - a centered primary action with a maximize control.`}},__svelteCsf:{rawCode:`<Footer left={maximizeButton}>
  <Button label="Start workout" kind="primary" size="large" onclick={() => {}} />
</Footer>`}}});var c=l(i,2);Y(c,{name:`ScrollingContent`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`ScrollingContent: verifies the blur-based fade against the real-world case
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
</div>`}},children:(e,t)=>{var n=Se(),r=_(n),i=_(r);o(i,4,()=>Array.from({length:18},(e,t)=>t+1),e=>e,(e,t)=>{var n=xe(),r=_(n),i=_(r),a=_(i,!0);d(i);var o=l(i,2),s=_(o);d(o),d(r);var c=l(r,2),u=_(c);d(c),d(n),T(()=>{y(a,t%2==0?`Break`:`Interval`),y(s,`${t??``}:00`),y(u,`Row ${t??``} - scrolls under the footer`)}),g(e,n)}),d(i),d(r),P(l(r,2),{showCloseButton:!0,onCloseClick:()=>{},right:e=>{M(e,{label:`Delete`,kind:`danger`,size:`large`,onclick:()=>{}})},children:(e,t)=>{M(e,{label:`Save`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{right:!0,default:!0}}),d(n),g(e,n)},$$slots:{default:!0}}),Y(l(c,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: every Figma footer kind (rendered in-flow so they stack).`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-6">
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
</div>`}},children:(e,t)=>{var r=Te(),i=_(r);P(i,{class:`relative bottom-auto`,get left(){return q},children:(e,t)=>{M(e,{label:`Start workout`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{default:!0}});var a=l(i,2);P(a,{class:`relative bottom-auto`,left:e=>{M(e,{kind:`ghost-light`,size:`large`,get icon(){return K},"aria-label":`Settings`,onclick:()=>{}})},right:e=>{M(e,{kind:`ghost-light`,size:`large`,get icon(){return G},"aria-label":`Restart`,onclick:()=>{}})},children:(e,t)=>{var n=X(),r=_(n);M(r,{kind:`ghost-light`,size:`large`,get icon(){return H},"aria-label":`Previous`,onclick:()=>{}});var i=l(r,2);M(i,{kind:`ghost-light`,size:`large`,get icon(){return U},"aria-label":`Pause`,onclick:()=>{}}),M(l(i,2),{kind:`ghost-light`,size:`large`,get icon(){return W},"aria-label":`Skip`,onclick:()=>{}}),d(n),g(e,n)},$$slots:{left:!0,right:!0,default:!0}});var o=l(a,2);P(o,{class:`relative bottom-auto`,showCloseButton:!0,onCloseClick:()=>{},right:e=>{M(e,{label:`Delete`,kind:`danger`,size:`large`,onclick:()=>{}})},children:(e,t)=>{M(e,{label:`Save`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{right:!0,default:!0}});var s=l(o,2);P(s,{class:`relative bottom-auto`,right:e=>{M(e,{kind:`ghost-light`,size:`large`,get icon(){return K},"aria-label":`Settings`,onclick:()=>{}})},children:(e,t)=>{var n=X(),r=_(n);N(r,{color:`var(--color-primary)`,shape:`circle`});var i=l(r,2);N(i,{color:`var(--color-secondary)`,shape:`square`}),N(l(i,2),{color:`var(--color-tertiary)`,shape:`triangle`}),d(n),g(e,n)},$$slots:{right:!0,default:!0}}),P(l(s,2),{class:`relative bottom-auto`,left:e=>{g(e,Ce())},right:e=>{var t=we(),r=n(t);M(r,{kind:`ghost-light`,size:`large`,get icon(){return H},"aria-label":`Previous`,onclick:()=>{}}),M(l(r,2),{kind:`ghost-light`,size:`large`,get icon(){return W},"aria-label":`Skip`,onclick:()=>{}}),g(e,t)},children:(e,t)=>{M(e,{label:`Close`,kind:`ghost-light`,size:`large`,onclick:()=>{}})},$$slots:{left:!0,right:!0,default:!0}}),d(r),g(e,r)},$$slots:{default:!0}}),g(e,r),a()}var V,H,U,W,G,K,q,J,Y,xe,Se,X,Ce,we,Te,Z,Q,Ee,De,Oe,$;e((()=>{v(),E(),D(),oe(),be(),he(),ge(),j(),w(),ie(),V=e=>{de(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},H=e=>{ue(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},U=e=>{le(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},W=e=>{ce(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},G=e=>{me(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},K=e=>{fe(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},q=e=>{M(e,{kind:`ghost-light`,size:`large`,get icon(){return V},"aria-label":`Toggle fullscreen`,onclick:()=>{}})},J={title:`lib/components/Footer`,component:P,parameters:{layout:`fullscreen`,fullBleed:!0,design:k(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=8-1291`)},argTypes:{showCloseButton:{control:`boolean`}}},{Story:Y}=O(J),xe=b(`<div class="flex w-full items-center justify-between rounded-m bg-layer-01 px-l py-l"><div class="flex flex-col gap-3xs"><span class="typography-label-regular text-text-secondary"> </span> <span class="typography-body-bold text-text"> </span></div> <span class="typography-body-regular text-text-secondary"> </span></div>`),Se=b(`<div class="h-screen bg-layer-background"><div class="h-full overflow-y-auto px-m pt-6 pb-40"><div class="flex flex-col gap-2xs"></div></div> <!></div>`),X=b(`<div class="flex items-center gap-xs"><!> <!> <!></div>`),Ce=b(`<span class="typography-label-regular text-text whitespace-nowrap">Tap twice to end</span>`),we=b(`<!> <!>`,1),Te=b(`<div class="flex flex-col gap-6"><!> <!> <!> <!> <!></div>`),Z=b(`<!> <!> <!>`,1),B.__docgen={data:[],name:`Footer.stories.svelte`},Q=ae(B,J),Ee=[`Playground`,`ScrollingContent`,`Overview`],De={...Q.Playground,tags:[`svelte-csf-v5`]},Oe={...Q.ScrollingContent,tags:[`svelte-csf-v5`]},$={...Q.Overview,tags:[`svelte-csf-v5`]}}))();export{$ as Overview,De as Playground,Oe as ScrollingContent,Ee as __namedExportsOrder,J as default};