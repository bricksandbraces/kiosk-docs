import{i as e}from"./preload-helper-xPQekRTU.js";import{$ as t,C as n,Et as r,I as i,Nt as a,Pt as o,Q as s,Tt as c,Ut as l,V as u,X as d,_t as f,a as p,at as m,bt as h,et as g,g as ee,ht as _,i as v,it as y,lt as te,ot as b,q as x,s as S,t as C,vt as w,w as ne,y as re,zt as T}from"./iframe-BYEIQZtN.js";import{a as E,i as D,n as O,r as ie,t as ae}from"./create-runtime-stories-DnohYm1n.js";import{n as oe,t as se}from"./cn-DeM1uuIk.js";import{n as ce,t as k}from"./Button-C-6V9vGb.js";import{E as le,M as ue,O as de,W as fe,g as pe,i as me,t as A,v as he}from"./icons-DhgbXXYb.js";import{n as ge,t as j}from"./ColorButton-DCDW525z.js";function M(e,i){o(i,!0);let l=v(i,`showCloseButton`,3,!1),d=v(i,`closeAriaLabel`,3,`Close`),g=p(i,N),y=r(!1);var S=R();ee(S,e=>({class:e,...g}),[()=>se(`fixed bottom-0 left-0 right-0 z-50 w-full flex items-center px-xl py-l pointer-events-none`,`before:absolute before:inset-0 before:pointer-events-none before:backdrop-blur-[0.625rem]`,`before:bg-layer-background/70 before:[mask-image:linear-gradient(to_bottom,transparent,black_55%)]`,i.class)]);var C=f(S),E=f(C),D=e=>{var r=F(),a=f(r),o=e=>{var t=P();me(f(t),{class:`size-6`,stroke:1.5,"aria-hidden":`true`}),T(t),_(e=>{n(t,1,e),re(t,`aria-label`,d())},[()=>ne(se(`size-12 shrink-0 inline-flex items-center justify-center rounded-rounded bg-layer-ghost text-icon backdrop-blur-[0.625rem]`,`cursor-pointer transition-transform duration-150 hover:opacity-90 outline-none focus-visible:kds-selected`,te(y)&&`scale-[0.98]`))]),m(`click`,t,function(...e){i.onCloseClick?.apply(this,e)}),m(`pointerdown`,t,()=>c(y,!0)),m(`pointerup`,t,()=>c(y,!1)),b(`pointerleave`,t,()=>c(y,!1)),b(`pointercancel`,t,()=>c(y,!1)),m(`keydown`,t,e=>{(e.key===`Enter`||e.key===` `)&&c(y,!0)}),m(`keyup`,t,()=>c(y,!1)),s(e,t)};u(a,e=>{l()&&e(o)});var p=h(a,2),g=e=>{var n=t();x(w(n),()=>i.left),s(e,n)};u(p,e=>{i.left&&e(g)}),T(r),s(e,r)};u(E,e=>{(l()||i.left)&&e(D)});var O=h(E,2),ie=e=>{var t=I();x(f(t),()=>i.children),T(t),s(e,t)};u(O,e=>{i.children&&e(ie)});var ae=h(O,2),oe=e=>{var t=L();x(f(t),()=>i.right),T(t),s(e,t)};u(ae,e=>{i.right&&e(oe)}),T(C),T(S),s(e,S),a()}var N,P,F,I,L,R,_e=e((()=>{l(),C(),oe(),A(),N=new Set([`$$slots`,`$$events`,`$$legacy`,`children`,`left`,`right`,`showCloseButton`,`onCloseClick`,`closeAriaLabel`,`class`]),P=g(`<button type="button"><!></button>`),F=g(`<div class="flex items-center gap-s shrink-0"><!> <!></div>`),I=g(`<div class="absolute left-1/2 -translate-x-1/2 flex items-center gap-s"><!></div>`),L=g(`<div class="ml-auto flex items-center gap-s shrink-0"><!></div>`),R=g(`<footer><div class="pointer-events-auto relative flex items-center w-full max-w-full min-h-14"><!> <!> <!></div></footer>`),y([`click`,`pointerdown`,`pointerup`,`keydown`,`keyup`]),M.__docgen={data:[{name:`children`,visibility:`public`,description:`Main action, horizontally centered (e.g. a primary Button).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`left`,visibility:`public`,description:`Left-zone content (e.g. a label or extra buttons).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`right`,visibility:`public`,description:`Right-zone content (e.g. a danger button or an icon group).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`showCloseButton`,visibility:`public`,description:`Convenience: a close/back icon button at the start of the left zone.`,keywords:[],kind:`let`,type:{kind:`type`,type:`boolean`,text:`boolean`},static:!1,readonly:!1,defaultValue:`false`},{name:`onCloseClick`,visibility:`public`,description:`Close click handler.`,keywords:[],kind:`let`,type:{kind:`function`,text:`() => void`},static:!1,readonly:!1},{name:`closeAriaLabel`,visibility:`public`,description:`Aria label for the close button.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Close"`},{name:`class`,visibility:`public`,description:`Additional classes.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1}],name:`Footer.svelte`}}));function z(e,t){o(t,!1),S();var n=xe(),r=w(n);J(r,{name:`Playground`,asChild:!0,children:(e,t)=>{M(e,{get left(){return K},children:(e,t)=>{k(e,{label:`Start workout`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:`Playground: the Default kind - a centered primary action with a maximize control.`}},__svelteCsf:{rawCode:`<Footer left={maximizeButton}>
  <Button label="Start workout" kind="primary" size="large" onclick={() => {}} />
</Footer>`}}});var c=h(r,2);J(c,{name:`ScrollingContent`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`ScrollingContent: verifies the blur-based fade against the real-world case
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
</div>`}},children:(e,t)=>{var n=ve(),r=f(n),a=f(r);i(a,4,()=>Array.from({length:18},(e,t)=>t+1),e=>e,(e,t)=>{var n=Y(),r=f(n),i=f(r),a=f(i,!0);T(i);var o=h(i,2),c=f(o);T(o),T(r);var l=h(r,2),u=f(l);T(l),T(n),_(()=>{d(a,t%2==0?`Break`:`Interval`),d(c,`${t??``}:00`),d(u,`Row ${t??``} - scrolls under the footer`)}),s(e,n)}),T(a),T(r),M(h(r,2),{showCloseButton:!0,onCloseClick:()=>{},right:e=>{k(e,{label:`Delete`,kind:`danger`,size:`large`,onclick:()=>{}})},children:(e,t)=>{k(e,{label:`Save`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{right:!0,default:!0}}),T(n),s(e,n)},$$slots:{default:!0}}),J(h(c,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: every Figma footer kind (rendered in-flow so they stack).`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-6">
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
</div>`}},children:(e,t)=>{var n=be(),r=f(n);M(r,{class:`relative bottom-auto`,get left(){return K},children:(e,t)=>{k(e,{label:`Start workout`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{default:!0}});var i=h(r,2);M(i,{class:`relative bottom-auto`,left:e=>{k(e,{kind:`icon`,size:`large`,get icon(){return G},"aria-label":`Settings`,onclick:()=>{}})},right:e=>{k(e,{kind:`icon`,size:`large`,get icon(){return W},"aria-label":`Restart`,onclick:()=>{}})},children:(e,t)=>{var n=X(),r=f(n);k(r,{kind:`icon`,size:`large`,get icon(){return V},"aria-label":`Previous`,onclick:()=>{}});var i=h(r,2);k(i,{kind:`icon`,size:`large`,get icon(){return H},"aria-label":`Pause`,onclick:()=>{}}),k(h(i,2),{kind:`icon`,size:`large`,get icon(){return U},"aria-label":`Skip`,onclick:()=>{}}),T(n),s(e,n)},$$slots:{left:!0,right:!0,default:!0}});var a=h(i,2);M(a,{class:`relative bottom-auto`,showCloseButton:!0,onCloseClick:()=>{},right:e=>{k(e,{label:`Delete`,kind:`danger`,size:`large`,onclick:()=>{}})},children:(e,t)=>{k(e,{label:`Save`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{right:!0,default:!0}});var o=h(a,2);M(o,{class:`relative bottom-auto`,right:e=>{k(e,{kind:`icon`,size:`large`,get icon(){return G},"aria-label":`Settings`,onclick:()=>{}})},children:(e,t)=>{var n=X(),r=f(n);j(r,{color:`var(--color-primary)`,shape:`circle`});var i=h(r,2);j(i,{color:`var(--color-secondary)`,shape:`square`}),j(h(i,2),{color:`var(--color-tertiary)`,shape:`triangle`}),T(n),s(e,n)},$$slots:{right:!0,default:!0}}),M(h(o,2),{class:`relative bottom-auto`,left:e=>{s(e,Z())},right:e=>{var t=ye(),n=w(t);k(n,{kind:`icon`,size:`large`,get icon(){return V},"aria-label":`Previous`,onclick:()=>{}}),k(h(n,2),{kind:`icon`,size:`large`,get icon(){return U},"aria-label":`Skip`,onclick:()=>{}}),s(e,t)},children:(e,t)=>{k(e,{label:`Close`,kind:`ghost`,size:`large`,onclick:()=>{}})},$$slots:{left:!0,right:!0,default:!0}}),T(n),s(e,n)},$$slots:{default:!0}}),s(e,n),a()}var B,V,H,U,W,G,K,q,J,Y,ve,X,Z,ye,be,xe,Q,Se,Ce,we,$;e((()=>{l(),E(),D(),_e(),ce(),ge(),A(),C(),O(),B=e=>{fe(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},V=e=>{de(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},H=e=>{ue(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},U=e=>{le(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},W=e=>{he(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},G=e=>{pe(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},K=e=>{k(e,{kind:`icon`,size:`large`,get icon(){return B},"aria-label":`Toggle fullscreen`,onclick:()=>{}})},q={title:`lib/components/Footer`,component:M,parameters:{layout:`fullscreen`,fullBleed:!0},argTypes:{showCloseButton:{control:`boolean`}}},{Story:J}=ie(q),Y=g(`<div class="flex w-full items-center justify-between rounded-m bg-layer-01 px-l py-l"><div class="flex flex-col gap-3xs"><span class="text-label text-text-secondary"> </span> <span class="text-regular-bold text-text"> </span></div> <span class="text-regular text-text-secondary"> </span></div>`),ve=g(`<div class="h-screen bg-layer-background"><div class="h-full overflow-y-auto px-m pt-6 pb-40"><div class="flex flex-col gap-2xs"></div></div> <!></div>`),X=g(`<div class="flex items-center gap-xs"><!> <!> <!></div>`),Z=g(`<span class="text-label text-text whitespace-nowrap">Tap twice to end</span>`),ye=g(`<!> <!>`,1),be=g(`<div class="flex flex-col gap-6"><!> <!> <!> <!> <!></div>`),xe=g(`<!> <!> <!>`,1),z.__docgen={data:[],name:`Footer.stories.svelte`},Q=ae(z,q),Se=[`Playground`,`ScrollingContent`,`Overview`],Ce={...Q.Playground,tags:[`svelte-csf-v5`]},we={...Q.ScrollingContent,tags:[`svelte-csf-v5`]},$={...Q.Overview,tags:[`svelte-csf-v5`]}}))();export{$ as Overview,Ce as Playground,we as ScrollingContent,Se as __namedExportsOrder,q as default};