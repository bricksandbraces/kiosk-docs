import{i as e}from"./preload-helper-xPQekRTU.js";import{$ as t,Et as n,Ht as r,Jt as i,Nt as a,Ot as o,Pt as s,Qt as c,T as l,Tt as u,Vt as d,W as f,X as p,_ as m,a as h,b as ee,bt as g,ct as _,i as v,lt as y,nt as te,pt as ne,rt as b,s as x,t as S,tt as C,ut as w,w as re,z as T}from"./iframe-2LEQQivP.js";import{a as E,i as D,n as ie,o as O,r as ae,s as oe,t as k}from"./create-runtime-stories-B-R5ZkKM.js";import{n as se,t as A}from"./cn-DXtlEg3t.js";import{n as ce,t as j}from"./Button-DnIBY-rp.js";import{E as le,M as ue,O as de,W as fe,g as pe,i as me,t as M,v as he}from"./icons-CUoalfo5.js";import{n as ge,t as N}from"./ColorButton-D4rLMMqW.js";import{n as _e,t as ve}from"./ProgressiveBlur-QnUzY8Cm.js";function P(e,t){r(t,!0);let c=v(t,`showCloseButton`,3,!1),_=v(t,`closeAriaLabel`,3,`Close`),b=h(t,F),x=s(!1);var S=B();m(S,e=>({class:e,...b}),[()=>A(`fixed bottom-0 left-0 right-0 z-50 w-full flex items-center px-xl py-l pointer-events-none`,t.class)]);var T=u(S);ve(T,{edge:`bottom`,class:`-z-10`});var E=o(T,2),D=u(E),ie=e=>{var r=L(),s=u(r),d=e=>{var n=I();me(u(n),{class:`size-6`,stroke:1.5,"aria-hidden":`true`}),i(n),g(e=>{re(n,1,e),ee(n,`aria-label`,_())},[()=>l(A(`size-12 shrink-0 inline-flex items-center justify-center rounded-rounded bg-layer-ghost text-icon backdrop-blur-[0.625rem]`,`cursor-pointer transition-transform duration-150 hover:opacity-90 outline-none focus-visible:kds-selected`,ne(x)&&`scale-[0.98]`))]),y(`click`,n,function(...e){t.onCloseClick?.apply(this,e)}),y(`pointerdown`,n,()=>a(x,!0)),y(`pointerup`,n,()=>a(x,!1)),w(`pointerleave`,n,()=>a(x,!1)),w(`pointercancel`,n,()=>a(x,!1)),y(`keydown`,n,e=>{(e.key===`Enter`||e.key===` `)&&a(x,!0)}),y(`keyup`,n,()=>a(x,!1)),C(e,n)};f(s,e=>{c()&&e(d)});var m=o(s,2),h=e=>{var r=te();p(n(r),()=>t.left),C(e,r)};f(m,e=>{t.left&&e(h)}),i(r),C(e,r)};f(D,e=>{(c()||t.left)&&e(ie)});var O=o(D,2),ae=e=>{var n=R();p(u(n),()=>t.children),i(n),C(e,n)};f(O,e=>{t.children&&e(ae)});var oe=o(O,2),k=e=>{var n=z();p(u(n),()=>t.right),i(n),C(e,n)};f(oe,e=>{t.right&&e(k)}),i(E),i(S),C(e,S),d()}var F,I,L,R,z,B,ye=e((()=>{c(),S(),se(),_e(),M(),F=new Set([`$$slots`,`$$events`,`$$legacy`,`children`,`left`,`right`,`showCloseButton`,`onCloseClick`,`closeAriaLabel`,`class`]),I=b(`<button type="button"><!></button>`),L=b(`<div class="flex items-center gap-s shrink-0"><!> <!></div>`),R=b(`<div class="absolute left-1/2 -translate-x-1/2 flex items-center gap-s"><!></div>`),z=b(`<div class="ml-auto flex items-center gap-s shrink-0"><!></div>`),B=b(`<footer><!> <div class="pointer-events-auto relative flex items-center w-full max-w-full min-h-12"><!> <!> <!></div></footer>`),_([`click`,`pointerdown`,`pointerup`,`keydown`,`keyup`]),P.__docgen={data:[{name:`children`,visibility:`public`,description:`Main action, horizontally centered (e.g. a primary Button).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`left`,visibility:`public`,description:`Left-zone content (e.g. a label or extra buttons).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`right`,visibility:`public`,description:`Right-zone content (e.g. a danger button or an icon group).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`showCloseButton`,visibility:`public`,description:`Convenience: a close/back icon button at the start of the left zone.`,keywords:[],kind:`let`,type:{kind:`type`,type:`boolean`,text:`boolean`},static:!1,readonly:!1,defaultValue:`false`},{name:`onCloseClick`,visibility:`public`,description:`Close click handler.`,keywords:[],kind:`let`,type:{kind:`function`,text:`() => void`},static:!1,readonly:!1},{name:`closeAriaLabel`,visibility:`public`,description:`Aria label for the close button.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Close"`},{name:`class`,visibility:`public`,description:`Additional classes.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1}],name:`Footer.svelte`}}));function V(e,a){r(a,!1),x();var s=Q(),c=n(s);X(c,{name:`Playground`,asChild:!0,children:(e,t)=>{P(e,{get left(){return J},children:(e,t)=>{j(e,{label:`Start workout`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:`Playground: the Default kind - a centered primary action with a maximize control.`}},__svelteCsf:{rawCode:`<Footer left={maximizeButton}>
  <Button label="Start workout" kind="primary" size="large" onclick={() => {}} />
</Footer>`}}});var l=o(c,2);X(l,{name:`ScrollingContent`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`ScrollingContent: verifies the blur-based fade against the real-world case
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
</div>`}},children:(e,n)=>{var r=xe(),a=u(r),s=u(a);T(s,4,()=>Array.from({length:18},(e,t)=>t+1),e=>e,(e,n)=>{var r=be(),a=u(r),s=u(a),c=u(s,!0);i(s);var l=o(s,2),d=u(l);i(l),i(a);var f=o(a,2),p=u(f);i(f),i(r),g(()=>{t(c,n%2==0?`Break`:`Interval`),t(d,`${n??``}:00`),t(p,`Row ${n??``} - scrolls under the footer`)}),C(e,r)}),i(s),i(a),P(o(a,2),{showCloseButton:!0,onCloseClick:()=>{},right:e=>{j(e,{label:`Delete`,kind:`danger`,size:`large`,onclick:()=>{}})},children:(e,t)=>{j(e,{label:`Save`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{right:!0,default:!0}}),i(r),C(e,r)},$$slots:{default:!0}}),X(o(l,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: every Figma footer kind (rendered in-flow so they stack).`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-6">
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
      <span class="text-label text-text whitespace-nowrap">Tap twice to end</span>
    {/snippet}
    <Button label="Close" kind="ghost-light" size="large" onclick={() => {}} />
    {#snippet right()}
      <Button kind="ghost-light" size="large" icon={prevIcon} aria-label="Previous" onclick={() => {}} />
      <Button kind="ghost-light" size="large" icon={skipIcon} aria-label="Skip" onclick={() => {}} />
    {/snippet}
  </Footer>
</div>`}},children:(e,t)=>{var r=we(),a=u(r);P(a,{class:`relative bottom-auto`,get left(){return J},children:(e,t)=>{j(e,{label:`Start workout`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{default:!0}});var s=o(a,2);P(s,{class:`relative bottom-auto`,left:e=>{j(e,{kind:`ghost-light`,size:`large`,get icon(){return q},"aria-label":`Settings`,onclick:()=>{}})},right:e=>{j(e,{kind:`ghost-light`,size:`large`,get icon(){return K},"aria-label":`Restart`,onclick:()=>{}})},children:(e,t)=>{var n=Z(),r=u(n);j(r,{kind:`ghost-light`,size:`large`,get icon(){return U},"aria-label":`Previous`,onclick:()=>{}});var a=o(r,2);j(a,{kind:`ghost-light`,size:`large`,get icon(){return W},"aria-label":`Pause`,onclick:()=>{}}),j(o(a,2),{kind:`ghost-light`,size:`large`,get icon(){return G},"aria-label":`Skip`,onclick:()=>{}}),i(n),C(e,n)},$$slots:{left:!0,right:!0,default:!0}});var c=o(s,2);P(c,{class:`relative bottom-auto`,showCloseButton:!0,onCloseClick:()=>{},right:e=>{j(e,{label:`Delete`,kind:`danger`,size:`large`,onclick:()=>{}})},children:(e,t)=>{j(e,{label:`Save`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{right:!0,default:!0}});var l=o(c,2);P(l,{class:`relative bottom-auto`,right:e=>{j(e,{kind:`ghost-light`,size:`large`,get icon(){return q},"aria-label":`Settings`,onclick:()=>{}})},children:(e,t)=>{var n=Z(),r=u(n);N(r,{color:`var(--color-primary)`,shape:`circle`});var a=o(r,2);N(a,{color:`var(--color-secondary)`,shape:`square`}),N(o(a,2),{color:`var(--color-tertiary)`,shape:`triangle`}),i(n),C(e,n)},$$slots:{right:!0,default:!0}}),P(o(l,2),{class:`relative bottom-auto`,left:e=>{C(e,Se())},right:e=>{var t=Ce(),r=n(t);j(r,{kind:`ghost-light`,size:`large`,get icon(){return U},"aria-label":`Previous`,onclick:()=>{}}),j(o(r,2),{kind:`ghost-light`,size:`large`,get icon(){return G},"aria-label":`Skip`,onclick:()=>{}}),C(e,t)},children:(e,t)=>{j(e,{label:`Close`,kind:`ghost-light`,size:`large`,onclick:()=>{}})},$$slots:{left:!0,right:!0,default:!0}}),i(r),C(e,r)},$$slots:{default:!0}}),C(e,s),d()}var H,U,W,G,K,q,J,Y,X,be,xe,Z,Se,Ce,we,Q,$,Te,Ee,De,Oe;e((()=>{c(),oe(),O(),D(),ye(),ce(),ge(),M(),S(),ie(),H=e=>{fe(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},U=e=>{de(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},W=e=>{ue(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},G=e=>{le(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},K=e=>{he(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},q=e=>{pe(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},J=e=>{j(e,{kind:`ghost-light`,size:`large`,get icon(){return H},"aria-label":`Toggle fullscreen`,onclick:()=>{}})},Y={title:`lib/components/Footer`,component:P,parameters:{layout:`fullscreen`,fullBleed:!0,design:ae(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=8-1291`)},argTypes:{showCloseButton:{control:`boolean`}}},{Story:X}=E(Y),be=b(`<div class="flex w-full items-center justify-between rounded-m bg-layer-01 px-l py-l"><div class="flex flex-col gap-3xs"><span class="text-label text-text-secondary"> </span> <span class="text-regular-bold text-text"> </span></div> <span class="text-regular text-text-secondary"> </span></div>`),xe=b(`<div class="h-screen bg-layer-background"><div class="h-full overflow-y-auto px-m pt-6 pb-40"><div class="flex flex-col gap-2xs"></div></div> <!></div>`),Z=b(`<div class="flex items-center gap-xs"><!> <!> <!></div>`),Se=b(`<span class="text-label text-text whitespace-nowrap">Tap twice to end</span>`),Ce=b(`<!> <!>`,1),we=b(`<div class="flex flex-col gap-6"><!> <!> <!> <!> <!></div>`),Q=b(`<!> <!> <!>`,1),V.__docgen={data:[],name:`Footer.stories.svelte`},$=k(V,Y),Te=[`Playground`,`ScrollingContent`,`Overview`],Ee={...$.Playground,tags:[`svelte-csf-v5`]},De={...$.ScrollingContent,tags:[`svelte-csf-v5`]},Oe={...$.Overview,tags:[`svelte-csf-v5`]}}))();export{Oe as Overview,Ee as Playground,De as ScrollingContent,Te as __namedExportsOrder,Y as default};