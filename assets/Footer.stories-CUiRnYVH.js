import{i as e}from"./preload-helper-xPQekRTU.js";import{$ as t,Bt as n,C as r,Et as i,I as a,Nt as o,Pt as s,Q as c,Tt as l,V as u,Wt as d,X as f,_t as p,a as m,at as h,bt as g,et as _,g as ee,ht as v,i as y,it as b,lt as te,ot as x,q as S,s as C,t as w,vt as T,w as ne,y as re}from"./iframe-BXoOsKi2.js";import{a as E,i as D,n as O,r as k,t as ie}from"./create-runtime-stories-w2axnFC8.js";import{n as ae,t as oe}from"./cn-BoVMsa1W.js";import{n as A,t as j}from"./Button-CfNf-Ojz.js";import{E as se,M as ce,O as le,W as ue,g as de,i as fe,t as M,v as pe}from"./icons-DIO5otOC.js";import{n as me,t as N}from"./ColorButton-BhkR00PV.js";import{n as he,t as ge}from"./ProgressiveBlur-B3vV6iA6.js";function P(e,a){s(a,!0);let d=y(a,`showCloseButton`,3,!1),f=y(a,`closeAriaLabel`,3,`Close`),_=m(a,F),b=i(!1);var C=_e();ee(C,e=>({class:e,..._}),[()=>oe(`fixed bottom-0 left-0 right-0 z-50 w-full flex items-center px-xl py-l pointer-events-none`,a.class)]);var w=p(C);ge(w,{edge:`bottom`,class:`-z-10`});var E=g(w,2),D=p(E),O=e=>{var i=L(),o=p(i),s=e=>{var t=I();fe(p(t),{class:`size-6`,stroke:1.5,"aria-hidden":`true`}),n(t),v(e=>{r(t,1,e),re(t,`aria-label`,f())},[()=>ne(oe(`size-12 shrink-0 inline-flex items-center justify-center rounded-rounded bg-layer-ghost text-icon backdrop-blur-[0.625rem]`,`cursor-pointer transition-transform duration-150 hover:opacity-90 outline-none focus-visible:kds-selected`,te(b)&&`scale-[0.98]`))]),h(`click`,t,function(...e){a.onCloseClick?.apply(this,e)}),h(`pointerdown`,t,()=>l(b,!0)),h(`pointerup`,t,()=>l(b,!1)),x(`pointerleave`,t,()=>l(b,!1)),x(`pointercancel`,t,()=>l(b,!1)),h(`keydown`,t,e=>{(e.key===`Enter`||e.key===` `)&&l(b,!0)}),h(`keyup`,t,()=>l(b,!1)),c(e,t)};u(o,e=>{d()&&e(s)});var m=g(o,2),_=e=>{var n=t();S(T(n),()=>a.left),c(e,n)};u(m,e=>{a.left&&e(_)}),n(i),c(e,i)};u(D,e=>{(d()||a.left)&&e(O)});var k=g(D,2),ie=e=>{var t=R();S(p(t),()=>a.children),n(t),c(e,t)};u(k,e=>{a.children&&e(ie)});var ae=g(k,2),A=e=>{var t=z();S(p(t),()=>a.right),n(t),c(e,t)};u(ae,e=>{a.right&&e(A)}),n(E),n(C),c(e,C),o()}var F,I,L,R,z,_e,ve=e((()=>{d(),w(),ae(),he(),M(),F=new Set([`$$slots`,`$$events`,`$$legacy`,`children`,`left`,`right`,`showCloseButton`,`onCloseClick`,`closeAriaLabel`,`class`]),I=_(`<button type="button"><!></button>`),L=_(`<div class="flex items-center gap-s shrink-0"><!> <!></div>`),R=_(`<div class="absolute left-1/2 -translate-x-1/2 flex items-center gap-s"><!></div>`),z=_(`<div class="ml-auto flex items-center gap-s shrink-0"><!></div>`),_e=_(`<footer><!> <div class="pointer-events-auto relative flex items-center w-full max-w-full min-h-12"><!> <!> <!></div></footer>`),b([`click`,`pointerdown`,`pointerup`,`keydown`,`keyup`]),P.__docgen={data:[{name:`children`,visibility:`public`,description:`Main action, horizontally centered (e.g. a primary Button).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`left`,visibility:`public`,description:`Left-zone content (e.g. a label or extra buttons).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`right`,visibility:`public`,description:`Right-zone content (e.g. a danger button or an icon group).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`showCloseButton`,visibility:`public`,description:`Convenience: a close/back icon button at the start of the left zone.`,keywords:[],kind:`let`,type:{kind:`type`,type:`boolean`,text:`boolean`},static:!1,readonly:!1,defaultValue:`false`},{name:`onCloseClick`,visibility:`public`,description:`Close click handler.`,keywords:[],kind:`let`,type:{kind:`function`,text:`() => void`},static:!1,readonly:!1},{name:`closeAriaLabel`,visibility:`public`,description:`Aria label for the close button.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Close"`},{name:`class`,visibility:`public`,description:`Additional classes.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1}],name:`Footer.svelte`}}));function B(e,t){s(t,!1),C();var r=Se(),i=T(r);Y(i,{name:`Playground`,asChild:!0,children:(e,t)=>{P(e,{get left(){return q},children:(e,t)=>{j(e,{label:`Start workout`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:`Playground: the Default kind - a centered primary action with a maximize control.`}},__svelteCsf:{rawCode:`<Footer left={maximizeButton}>
  <Button label="Start workout" kind="primary" size="large" onclick={() => {}} />
</Footer>`}}});var l=g(i,2);Y(l,{name:`ScrollingContent`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`ScrollingContent: verifies the blur-based fade against the real-world case
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
</div>`}},children:(e,t)=>{var r=ye(),i=p(r),o=p(i);a(o,4,()=>Array.from({length:18},(e,t)=>t+1),e=>e,(e,t)=>{var r=X(),i=p(r),a=p(i),o=p(a,!0);n(a);var s=g(a,2),l=p(s);n(s),n(i);var u=g(i,2),d=p(u);n(u),n(r),v(()=>{f(o,t%2==0?`Break`:`Interval`),f(l,`${t??``}:00`),f(d,`Row ${t??``} - scrolls under the footer`)}),c(e,r)}),n(o),n(i),P(g(i,2),{showCloseButton:!0,onCloseClick:()=>{},right:e=>{j(e,{label:`Delete`,kind:`danger`,size:`large`,onclick:()=>{}})},children:(e,t)=>{j(e,{label:`Save`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{right:!0,default:!0}}),n(r),c(e,r)},$$slots:{default:!0}}),Y(g(l,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: every Figma footer kind (rendered in-flow so they stack).`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-6">
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
</div>`}},children:(e,t)=>{var r=Q(),i=p(r);P(i,{class:`relative bottom-auto`,get left(){return q},children:(e,t)=>{j(e,{label:`Start workout`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{default:!0}});var a=g(i,2);P(a,{class:`relative bottom-auto`,left:e=>{j(e,{kind:`icon`,size:`large`,get icon(){return K},"aria-label":`Settings`,onclick:()=>{}})},right:e=>{j(e,{kind:`icon`,size:`large`,get icon(){return G},"aria-label":`Restart`,onclick:()=>{}})},children:(e,t)=>{var r=Z(),i=p(r);j(i,{kind:`icon`,size:`large`,get icon(){return H},"aria-label":`Previous`,onclick:()=>{}});var a=g(i,2);j(a,{kind:`icon`,size:`large`,get icon(){return U},"aria-label":`Pause`,onclick:()=>{}}),j(g(a,2),{kind:`icon`,size:`large`,get icon(){return W},"aria-label":`Skip`,onclick:()=>{}}),n(r),c(e,r)},$$slots:{left:!0,right:!0,default:!0}});var o=g(a,2);P(o,{class:`relative bottom-auto`,showCloseButton:!0,onCloseClick:()=>{},right:e=>{j(e,{label:`Delete`,kind:`danger`,size:`large`,onclick:()=>{}})},children:(e,t)=>{j(e,{label:`Save`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{right:!0,default:!0}});var s=g(o,2);P(s,{class:`relative bottom-auto`,right:e=>{j(e,{kind:`icon`,size:`large`,get icon(){return K},"aria-label":`Settings`,onclick:()=>{}})},children:(e,t)=>{var r=Z(),i=p(r);N(i,{color:`var(--color-primary)`,shape:`circle`});var a=g(i,2);N(a,{color:`var(--color-secondary)`,shape:`square`}),N(g(a,2),{color:`var(--color-tertiary)`,shape:`triangle`}),n(r),c(e,r)},$$slots:{right:!0,default:!0}}),P(g(s,2),{class:`relative bottom-auto`,left:e=>{c(e,be())},right:e=>{var t=xe(),n=T(t);j(n,{kind:`icon`,size:`large`,get icon(){return H},"aria-label":`Previous`,onclick:()=>{}}),j(g(n,2),{kind:`icon`,size:`large`,get icon(){return W},"aria-label":`Skip`,onclick:()=>{}}),c(e,t)},children:(e,t)=>{j(e,{label:`Close`,kind:`ghost`,size:`large`,onclick:()=>{}})},$$slots:{left:!0,right:!0,default:!0}}),n(r),c(e,r)},$$slots:{default:!0}}),c(e,r),o()}var V,H,U,W,G,K,q,J,Y,X,ye,Z,be,xe,Q,Se,$,Ce,we,Te,Ee;e((()=>{d(),E(),D(),ve(),A(),me(),M(),w(),O(),V=e=>{ue(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},H=e=>{le(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},U=e=>{ce(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},W=e=>{se(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},G=e=>{pe(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},K=e=>{de(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},q=e=>{j(e,{kind:`icon`,size:`large`,get icon(){return V},"aria-label":`Toggle fullscreen`,onclick:()=>{}})},J={title:`lib/components/Footer`,component:P,parameters:{layout:`fullscreen`,fullBleed:!0},argTypes:{showCloseButton:{control:`boolean`}}},{Story:Y}=k(J),X=_(`<div class="flex w-full items-center justify-between rounded-m bg-layer-01 px-l py-l"><div class="flex flex-col gap-3xs"><span class="text-label text-text-secondary"> </span> <span class="text-regular-bold text-text"> </span></div> <span class="text-regular text-text-secondary"> </span></div>`),ye=_(`<div class="h-screen bg-layer-background"><div class="h-full overflow-y-auto px-m pt-6 pb-40"><div class="flex flex-col gap-2xs"></div></div> <!></div>`),Z=_(`<div class="flex items-center gap-xs"><!> <!> <!></div>`),be=_(`<span class="text-label text-text whitespace-nowrap">Tap twice to end</span>`),xe=_(`<!> <!>`,1),Q=_(`<div class="flex flex-col gap-6"><!> <!> <!> <!> <!></div>`),Se=_(`<!> <!> <!>`,1),B.__docgen={data:[],name:`Footer.stories.svelte`},$=ie(B,J),Ce=[`Playground`,`ScrollingContent`,`Overview`],we={...$.Playground,tags:[`svelte-csf-v5`]},Te={...$.ScrollingContent,tags:[`svelte-csf-v5`]},Ee={...$.Overview,tags:[`svelte-csf-v5`]}}))();export{Ee as Overview,we as Playground,Te as ScrollingContent,Ce as __namedExportsOrder,J as default};