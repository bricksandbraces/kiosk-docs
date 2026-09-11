import{i as e}from"./preload-helper-xPQekRTU.js";import{Bt as t,C as n,Dt as r,Mt as i,Nt as a,Q as o,R as s,Tt as c,U as l,Vt as u,Y as d,Zt as f,a as p,ct as m,et as h,ft as ee,g,i as te,lt as _,nt as v,qt as y,s as b,st as x,t as S,tt as ne,w as re,wt as C,y as ie,yt as w}from"./iframe-BRGrjxrt.js";import{a as T,i as E,n as D,o as O,r as ae,s as oe,t as k}from"./create-runtime-stories-CTRa-s8D.js";import{n as se,t as A}from"./cn-BX0TQDhp.js";import{r as ce,t as j}from"./Button-BTV_Ljr7.js";import{E as le,M as ue,O as de,W as fe,g as pe,i as me,t as M,v as he}from"./icons-C9IEFCjo.js";import{n as ge,t as N}from"./ColorButton-BbxBdCNI.js";import{n as _e,t as ve}from"./ProgressiveBlur-Va6T1iuy.js";function P(e,o){u(o,!0);let s=te(o,`showCloseButton`,3,!1),f=te(o,`closeAriaLabel`,3,`Close`),v=p(o,F),b=a(!1);var x=z();g(x,e=>({class:e,...v}),[()=>A(`fixed bottom-0 left-0 right-0 z-50 w-full flex items-center px-xl py-l pointer-events-none`,o.class)]);var S=C(x);ve(S,{edge:`bottom`,class:`-z-10`});var T=r(S,2),E=C(T),D=e=>{var t=ye(),a=C(t),u=e=>{var t=I();me(C(t),{class:`size-6`,stroke:1.5,"aria-hidden":`true`}),y(t),w(e=>{n(t,1,e),ie(t,`aria-label`,f())},[()=>re(A(`size-12 shrink-0 inline-flex items-center justify-center rounded-rounded bg-layer-ghost text-icon backdrop-blur-[0.625rem]`,`cursor-pointer transition-transform duration-150 hover:opacity-90 outline-none focus-visible:kds-selected`,ee(b)&&`scale-[0.98]`))]),m(`click`,t,function(...e){o.onCloseClick?.apply(this,e)}),m(`pointerdown`,t,()=>i(b,!0)),m(`pointerup`,t,()=>i(b,!1)),_(`pointerleave`,t,()=>i(b,!1)),_(`pointercancel`,t,()=>i(b,!1)),m(`keydown`,t,e=>{(e.key===`Enter`||e.key===` `)&&i(b,!0)}),m(`keyup`,t,()=>i(b,!1)),h(e,t)};l(a,e=>{s()&&e(u)});var p=r(a,2),g=e=>{var t=ne();d(c(t),()=>o.left),h(e,t)};l(p,e=>{o.left&&e(g)}),y(t),h(e,t)};l(E,e=>{(s()||o.left)&&e(D)});var O=r(E,2),ae=e=>{var t=L();d(C(t),()=>o.children),y(t),h(e,t)};l(O,e=>{o.children&&e(ae)});var oe=r(O,2),k=e=>{var t=R();d(C(t),()=>o.right),y(t),h(e,t)};l(oe,e=>{o.right&&e(k)}),y(T),y(x),h(e,x),t()}var F,I,ye,L,R,z,be=e((()=>{f(),S(),se(),_e(),M(),F=new Set([`$$slots`,`$$events`,`$$legacy`,`children`,`left`,`right`,`showCloseButton`,`onCloseClick`,`closeAriaLabel`,`class`]),I=v(`<button type="button"><!></button>`),ye=v(`<div class="flex items-center gap-s shrink-0"><!> <!></div>`),L=v(`<div class="absolute left-1/2 -translate-x-1/2 flex items-center gap-s"><!></div>`),R=v(`<div class="ml-auto flex items-center gap-s shrink-0"><!></div>`),z=v(`<footer><!> <div class="pointer-events-auto relative flex items-center w-full max-w-full min-h-12"><!> <!> <!></div></footer>`),x([`click`,`pointerdown`,`pointerup`,`keydown`,`keyup`]),P.__docgen={data:[{name:`children`,visibility:`public`,description:`Main action, horizontally centered (e.g. a primary Button).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`left`,visibility:`public`,description:`Left-zone content (e.g. a label or extra buttons).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`right`,visibility:`public`,description:`Right-zone content (e.g. a danger button or an icon group).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`showCloseButton`,visibility:`public`,description:`Convenience: a close/back icon button at the start of the left zone.`,keywords:[],kind:`let`,type:{kind:`type`,type:`boolean`,text:`boolean`},static:!1,readonly:!1,defaultValue:`false`},{name:`onCloseClick`,visibility:`public`,description:`Close click handler.`,keywords:[],kind:`let`,type:{kind:`function`,text:`() => void`},static:!1,readonly:!1},{name:`closeAriaLabel`,visibility:`public`,description:`Aria label for the close button.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Close"`},{name:`class`,visibility:`public`,description:`Additional classes.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1}],name:`Footer.svelte`}}));function B(e,n){u(n,!1),b();var i=Z(),a=c(i);Y(a,{name:`Playground`,asChild:!0,children:(e,t)=>{P(e,{get left(){return q},children:(e,t)=>{j(e,{label:`Start workout`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:`Playground: the Default kind - a centered primary action with a maximize control.`}},__svelteCsf:{rawCode:`<Footer left={maximizeButton}>
  <Button label="Start workout" kind="primary" size="large" onclick={() => {}} />
</Footer>`}}});var l=r(a,2);Y(l,{name:`ScrollingContent`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`ScrollingContent: verifies the blur-based fade against the real-world case
    (workout editor rows scrolling underneath the Save/Delete footer). Scroll the
    list - rows must blur and tint progressively, never get hard-covered.`}},__svelteCsf:{rawCode:`<div class="h-screen bg-layer-background">
  <div class="h-full overflow-y-auto px-m pt-6 pb-40">
    <div class="flex flex-col gap-2xs">
      {#each Array.from({ length: 18 }, (_, i) => i + 1) as n (n)}
        <div class="flex w-full items-center justify-between rounded-m bg-layer-01 px-l py-l">
          <div class="flex flex-col gap-3xs">
            <span class="text-label text-text-secondary">{n % 2 === 0 ? 'Break' : 'Interval'}</span>
            <span class="text-regular-bold text-text">{n}:00</span>
          </div>
          <span class="text-regular text-text-secondary">Row {n} - scrolls under the footer</span>
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
</div>`}},children:(e,t)=>{var n=Se(),i=C(n),a=C(i);s(a,4,()=>Array.from({length:18},(e,t)=>t+1),e=>e,(e,t)=>{var n=xe(),i=C(n),a=C(i),s=C(a,!0);y(a);var c=r(a,2),l=C(c);y(c),y(i);var u=r(i,2),d=C(u);y(u),y(n),w(()=>{o(s,t%2==0?`Break`:`Interval`),o(l,`${t??``}:00`),o(d,`Row ${t??``} - scrolls under the footer`)}),h(e,n)}),y(a),y(i),P(r(i,2),{showCloseButton:!0,onCloseClick:()=>{},right:e=>{j(e,{label:`Delete`,kind:`danger`,size:`large`,onclick:()=>{}})},children:(e,t)=>{j(e,{label:`Save`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{right:!0,default:!0}}),y(n),h(e,n)},$$slots:{default:!0}}),Y(r(l,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: every Figma footer kind (rendered in-flow so they stack).`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-6">
  <!-- Default: maximize control + centered primary action. -->
  <Footer class="relative bottom-auto" left={maximizeButton}>
    <Button label="Start workout" kind="primary" size="large" onclick={() => {}} />
  </Footer>

  <!-- Timer: settings (left), centered playback cluster, restart (right). -->
  <Footer class="relative bottom-auto">
    {#snippet left()}
      <Button kind="icon" size="large" icon={settingsIcon} aria-label="Settings" onclick={() => {}} />
    {/snippet}
    <div class="flex items-center gap-xs">
      <Button kind="icon" size="large" icon={prevIcon} aria-label="Previous" onclick={() => {}} />
      <Button kind="icon" size="large" icon={pauseIcon} aria-label="Pause" onclick={() => {}} />
      <Button kind="icon" size="large" icon={skipIcon} aria-label="Skip" onclick={() => {}} />
    </div>
    {#snippet right()}
      <Button kind="icon" size="large" icon={restartIcon} aria-label="Restart" onclick={() => {}} />
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
      <Button kind="icon" size="large" icon={settingsIcon} aria-label="Settings" onclick={() => {}} />
    {/snippet}
  </Footer>

  <!-- Workout Complete: hint label (left), centered Close, playback group (right). -->
  <Footer class="relative bottom-auto">
    {#snippet left()}
      <span class="text-label text-text whitespace-nowrap">Tap twice to end</span>
    {/snippet}
    <Button label="Close" kind="ghost" size="large" onclick={() => {}} />
    {#snippet right()}
      <Button kind="icon" size="large" icon={prevIcon} aria-label="Previous" onclick={() => {}} />
      <Button kind="icon" size="large" icon={skipIcon} aria-label="Skip" onclick={() => {}} />
    {/snippet}
  </Footer>
</div>`}},children:(e,t)=>{var n=Te(),i=C(n);P(i,{class:`relative bottom-auto`,get left(){return q},children:(e,t)=>{j(e,{label:`Start workout`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{default:!0}});var a=r(i,2);P(a,{class:`relative bottom-auto`,left:e=>{j(e,{kind:`icon`,size:`large`,get icon(){return K},"aria-label":`Settings`,onclick:()=>{}})},right:e=>{j(e,{kind:`icon`,size:`large`,get icon(){return G},"aria-label":`Restart`,onclick:()=>{}})},children:(e,t)=>{var n=X(),i=C(n);j(i,{kind:`icon`,size:`large`,get icon(){return H},"aria-label":`Previous`,onclick:()=>{}});var a=r(i,2);j(a,{kind:`icon`,size:`large`,get icon(){return U},"aria-label":`Pause`,onclick:()=>{}}),j(r(a,2),{kind:`icon`,size:`large`,get icon(){return W},"aria-label":`Skip`,onclick:()=>{}}),y(n),h(e,n)},$$slots:{left:!0,right:!0,default:!0}});var o=r(a,2);P(o,{class:`relative bottom-auto`,showCloseButton:!0,onCloseClick:()=>{},right:e=>{j(e,{label:`Delete`,kind:`danger`,size:`large`,onclick:()=>{}})},children:(e,t)=>{j(e,{label:`Save`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{right:!0,default:!0}});var s=r(o,2);P(s,{class:`relative bottom-auto`,right:e=>{j(e,{kind:`icon`,size:`large`,get icon(){return K},"aria-label":`Settings`,onclick:()=>{}})},children:(e,t)=>{var n=X(),i=C(n);N(i,{color:`var(--color-primary)`,shape:`circle`});var a=r(i,2);N(a,{color:`var(--color-secondary)`,shape:`square`}),N(r(a,2),{color:`var(--color-tertiary)`,shape:`triangle`}),y(n),h(e,n)},$$slots:{right:!0,default:!0}}),P(r(s,2),{class:`relative bottom-auto`,left:e=>{h(e,Ce())},right:e=>{var t=we(),n=c(t);j(n,{kind:`icon`,size:`large`,get icon(){return H},"aria-label":`Previous`,onclick:()=>{}}),j(r(n,2),{kind:`icon`,size:`large`,get icon(){return W},"aria-label":`Skip`,onclick:()=>{}}),h(e,t)},children:(e,t)=>{j(e,{label:`Close`,kind:`ghost`,size:`large`,onclick:()=>{}})},$$slots:{left:!0,right:!0,default:!0}}),y(n),h(e,n)},$$slots:{default:!0}}),h(e,i),t()}var V,H,U,W,G,K,q,J,Y,xe,Se,X,Ce,we,Te,Z,Q,Ee,De,Oe,$;e((()=>{f(),oe(),O(),E(),be(),ce(),ge(),M(),S(),D(),V=e=>{fe(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},H=e=>{de(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},U=e=>{ue(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},W=e=>{le(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},G=e=>{he(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},K=e=>{pe(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},q=e=>{j(e,{kind:`icon`,size:`large`,get icon(){return V},"aria-label":`Toggle fullscreen`,onclick:()=>{}})},J={title:`lib/components/Footer`,component:P,parameters:{layout:`fullscreen`,fullBleed:!0,design:ae(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=8-1291`)},argTypes:{showCloseButton:{control:`boolean`}}},{Story:Y}=T(J),xe=v(`<div class="flex w-full items-center justify-between rounded-m bg-layer-01 px-l py-l"><div class="flex flex-col gap-3xs"><span class="text-label text-text-secondary"> </span> <span class="text-regular-bold text-text"> </span></div> <span class="text-regular text-text-secondary"> </span></div>`),Se=v(`<div class="h-screen bg-layer-background"><div class="h-full overflow-y-auto px-m pt-6 pb-40"><div class="flex flex-col gap-2xs"></div></div> <!></div>`),X=v(`<div class="flex items-center gap-xs"><!> <!> <!></div>`),Ce=v(`<span class="text-label text-text whitespace-nowrap">Tap twice to end</span>`),we=v(`<!> <!>`,1),Te=v(`<div class="flex flex-col gap-6"><!> <!> <!> <!> <!></div>`),Z=v(`<!> <!> <!>`,1),B.__docgen={data:[],name:`Footer.stories.svelte`},Q=k(B,J),Ee=[`Playground`,`ScrollingContent`,`Overview`],De={...Q.Playground,tags:[`svelte-csf-v5`]},Oe={...Q.ScrollingContent,tags:[`svelte-csf-v5`]},$={...Q.Overview,tags:[`svelte-csf-v5`]}}))();export{$ as Overview,De as Playground,Oe as ScrollingContent,Ee as __namedExportsOrder,J as default};