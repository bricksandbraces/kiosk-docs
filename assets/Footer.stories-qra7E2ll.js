import{i as e}from"./preload-helper-xPQekRTU.js";import{$ as t,Bt as n,C as r,Et as i,I as a,Nt as o,Pt as s,Q as c,Tt as l,V as u,Wt as d,X as f,_t as p,a as m,at as h,bt as g,et as _,g as ee,ht as v,i as y,it as b,lt as te,ot as x,q as S,s as C,t as w,vt as T,w as ne,y as re}from"./iframe-BYa6-XSo.js";import{a as E,i as D,n as O,r as ie,t as ae}from"./create-runtime-stories--IWq-U-Y.js";import{n as oe,t as se}from"./cn-DEKWC0Pv.js";import{n as ce,t as k}from"./Button-CuQ9rpEs.js";import{E as le,M as ue,O as de,W as fe,g as pe,i as me,t as A,v as he}from"./icons-C_vjixP_.js";import{n as ge,t as j}from"./ColorButton-CUY7IR7w.js";function M(e,a){s(a,!0);let d=y(a,`showCloseButton`,3,!1),f=y(a,`closeAriaLabel`,3,`Close`),_=m(a,N),b=i(!1);var C=R();ee(C,e=>({class:e,..._}),[()=>se(`fixed bottom-0 left-0 right-0 z-50 w-full flex items-center px-xl py-l pointer-events-none`,`before:absolute before:inset-0 before:pointer-events-none before:backdrop-blur-[0.625rem]`,`before:bg-layer-background/70 before:[mask-image:linear-gradient(to_bottom,transparent,black_55%)]`,a.class)]);var w=p(C),E=p(w),D=e=>{var i=F(),o=p(i),s=e=>{var t=P();me(p(t),{class:`size-6`,stroke:1.5,"aria-hidden":`true`}),n(t),v(e=>{r(t,1,e),re(t,`aria-label`,f())},[()=>ne(se(`size-12 shrink-0 inline-flex items-center justify-center rounded-rounded bg-layer-ghost text-icon backdrop-blur-[0.625rem]`,`cursor-pointer transition-transform duration-150 hover:opacity-90 outline-none focus-visible:kds-selected`,te(b)&&`scale-[0.98]`))]),h(`click`,t,function(...e){a.onCloseClick?.apply(this,e)}),h(`pointerdown`,t,()=>l(b,!0)),h(`pointerup`,t,()=>l(b,!1)),x(`pointerleave`,t,()=>l(b,!1)),x(`pointercancel`,t,()=>l(b,!1)),h(`keydown`,t,e=>{(e.key===`Enter`||e.key===` `)&&l(b,!0)}),h(`keyup`,t,()=>l(b,!1)),c(e,t)};u(o,e=>{d()&&e(s)});var m=g(o,2),_=e=>{var n=t();S(T(n),()=>a.left),c(e,n)};u(m,e=>{a.left&&e(_)}),n(i),c(e,i)};u(E,e=>{(d()||a.left)&&e(D)});var O=g(E,2),ie=e=>{var t=I();S(p(t),()=>a.children),n(t),c(e,t)};u(O,e=>{a.children&&e(ie)});var ae=g(O,2),oe=e=>{var t=L();S(p(t),()=>a.right),n(t),c(e,t)};u(ae,e=>{a.right&&e(oe)}),n(w),n(C),c(e,C),o()}var N,P,F,I,L,R,_e=e((()=>{d(),w(),oe(),A(),N=new Set([`$$slots`,`$$events`,`$$legacy`,`children`,`left`,`right`,`showCloseButton`,`onCloseClick`,`closeAriaLabel`,`class`]),P=_(`<button type="button"><!></button>`),F=_(`<div class="flex items-center gap-s shrink-0"><!> <!></div>`),I=_(`<div class="absolute left-1/2 -translate-x-1/2 flex items-center gap-s"><!></div>`),L=_(`<div class="ml-auto flex items-center gap-s shrink-0"><!></div>`),R=_(`<footer><div class="pointer-events-auto relative flex items-center w-full max-w-full min-h-12"><!> <!> <!></div></footer>`),b([`click`,`pointerdown`,`pointerup`,`keydown`,`keyup`]),M.__docgen={data:[{name:`children`,visibility:`public`,description:`Main action, horizontally centered (e.g. a primary Button).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`left`,visibility:`public`,description:`Left-zone content (e.g. a label or extra buttons).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`right`,visibility:`public`,description:`Right-zone content (e.g. a danger button or an icon group).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`showCloseButton`,visibility:`public`,description:`Convenience: a close/back icon button at the start of the left zone.`,keywords:[],kind:`let`,type:{kind:`type`,type:`boolean`,text:`boolean`},static:!1,readonly:!1,defaultValue:`false`},{name:`onCloseClick`,visibility:`public`,description:`Close click handler.`,keywords:[],kind:`let`,type:{kind:`function`,text:`() => void`},static:!1,readonly:!1},{name:`closeAriaLabel`,visibility:`public`,description:`Aria label for the close button.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Close"`},{name:`class`,visibility:`public`,description:`Additional classes.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1}],name:`Footer.svelte`}}));function z(e,t){s(t,!1),C();var r=xe(),i=T(r);J(i,{name:`Playground`,asChild:!0,children:(e,t)=>{M(e,{get left(){return K},children:(e,t)=>{k(e,{label:`Start workout`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:`Playground: the Default kind - a centered primary action with a maximize control.`}},__svelteCsf:{rawCode:`<Footer left={maximizeButton}>
  <Button label="Start workout" kind="primary" size="large" onclick={() => {}} />
</Footer>`}}});var l=g(i,2);J(l,{name:`ScrollingContent`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`ScrollingContent: verifies the blur-based fade against the real-world case
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
</div>`}},children:(e,t)=>{var r=ve(),i=p(r),o=p(i);a(o,4,()=>Array.from({length:18},(e,t)=>t+1),e=>e,(e,t)=>{var r=Y(),i=p(r),a=p(i),o=p(a,!0);n(a);var s=g(a,2),l=p(s);n(s),n(i);var u=g(i,2),d=p(u);n(u),n(r),v(()=>{f(o,t%2==0?`Break`:`Interval`),f(l,`${t??``}:00`),f(d,`Row ${t??``} - scrolls under the footer`)}),c(e,r)}),n(o),n(i),M(g(i,2),{showCloseButton:!0,onCloseClick:()=>{},right:e=>{k(e,{label:`Delete`,kind:`danger`,size:`large`,onclick:()=>{}})},children:(e,t)=>{k(e,{label:`Save`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{right:!0,default:!0}}),n(r),c(e,r)},$$slots:{default:!0}}),J(g(l,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: every Figma footer kind (rendered in-flow so they stack).`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-6">
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
</div>`}},children:(e,t)=>{var r=be(),i=p(r);M(i,{class:`relative bottom-auto`,get left(){return K},children:(e,t)=>{k(e,{label:`Start workout`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{default:!0}});var a=g(i,2);M(a,{class:`relative bottom-auto`,left:e=>{k(e,{kind:`icon`,size:`large`,get icon(){return G},"aria-label":`Settings`,onclick:()=>{}})},right:e=>{k(e,{kind:`icon`,size:`large`,get icon(){return W},"aria-label":`Restart`,onclick:()=>{}})},children:(e,t)=>{var r=X(),i=p(r);k(i,{kind:`icon`,size:`large`,get icon(){return V},"aria-label":`Previous`,onclick:()=>{}});var a=g(i,2);k(a,{kind:`icon`,size:`large`,get icon(){return H},"aria-label":`Pause`,onclick:()=>{}}),k(g(a,2),{kind:`icon`,size:`large`,get icon(){return U},"aria-label":`Skip`,onclick:()=>{}}),n(r),c(e,r)},$$slots:{left:!0,right:!0,default:!0}});var o=g(a,2);M(o,{class:`relative bottom-auto`,showCloseButton:!0,onCloseClick:()=>{},right:e=>{k(e,{label:`Delete`,kind:`danger`,size:`large`,onclick:()=>{}})},children:(e,t)=>{k(e,{label:`Save`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{right:!0,default:!0}});var s=g(o,2);M(s,{class:`relative bottom-auto`,right:e=>{k(e,{kind:`icon`,size:`large`,get icon(){return G},"aria-label":`Settings`,onclick:()=>{}})},children:(e,t)=>{var r=X(),i=p(r);j(i,{color:`var(--color-primary)`,shape:`circle`});var a=g(i,2);j(a,{color:`var(--color-secondary)`,shape:`square`}),j(g(a,2),{color:`var(--color-tertiary)`,shape:`triangle`}),n(r),c(e,r)},$$slots:{right:!0,default:!0}}),M(g(s,2),{class:`relative bottom-auto`,left:e=>{c(e,Z())},right:e=>{var t=ye(),n=T(t);k(n,{kind:`icon`,size:`large`,get icon(){return V},"aria-label":`Previous`,onclick:()=>{}}),k(g(n,2),{kind:`icon`,size:`large`,get icon(){return U},"aria-label":`Skip`,onclick:()=>{}}),c(e,t)},children:(e,t)=>{k(e,{label:`Close`,kind:`ghost`,size:`large`,onclick:()=>{}})},$$slots:{left:!0,right:!0,default:!0}}),n(r),c(e,r)},$$slots:{default:!0}}),c(e,r),o()}var B,V,H,U,W,G,K,q,J,Y,ve,X,Z,ye,be,xe,Q,Se,Ce,we,$;e((()=>{d(),E(),D(),_e(),ce(),ge(),A(),w(),O(),B=e=>{fe(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},V=e=>{de(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},H=e=>{ue(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},U=e=>{le(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},W=e=>{he(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},G=e=>{pe(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},K=e=>{k(e,{kind:`icon`,size:`large`,get icon(){return B},"aria-label":`Toggle fullscreen`,onclick:()=>{}})},q={title:`lib/components/Footer`,component:M,parameters:{layout:`fullscreen`,fullBleed:!0},argTypes:{showCloseButton:{control:`boolean`}}},{Story:J}=ie(q),Y=_(`<div class="flex w-full items-center justify-between rounded-m bg-layer-01 px-l py-l"><div class="flex flex-col gap-3xs"><span class="text-label text-text-secondary"> </span> <span class="text-regular-bold text-text"> </span></div> <span class="text-regular text-text-secondary"> </span></div>`),ve=_(`<div class="h-screen bg-layer-background"><div class="h-full overflow-y-auto px-m pt-6 pb-40"><div class="flex flex-col gap-2xs"></div></div> <!></div>`),X=_(`<div class="flex items-center gap-xs"><!> <!> <!></div>`),Z=_(`<span class="text-label text-text whitespace-nowrap">Tap twice to end</span>`),ye=_(`<!> <!>`,1),be=_(`<div class="flex flex-col gap-6"><!> <!> <!> <!> <!></div>`),xe=_(`<!> <!> <!>`,1),z.__docgen={data:[],name:`Footer.stories.svelte`},Q=ae(z,q),Se=[`Playground`,`ScrollingContent`,`Overview`],Ce={...Q.Playground,tags:[`svelte-csf-v5`]},we={...Q.ScrollingContent,tags:[`svelte-csf-v5`]},$={...Q.Overview,tags:[`svelte-csf-v5`]}}))();export{$ as Overview,Ce as Playground,we as ScrollingContent,Se as __namedExportsOrder,q as default};