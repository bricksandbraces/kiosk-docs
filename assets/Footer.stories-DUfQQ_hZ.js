import{i as e}from"./preload-helper-xPQekRTU.js";import{$ as t,C as n,Et as r,Nt as i,Pt as a,Q as o,Tt as s,Ut as c,V as l,_t as u,a as d,at as f,bt as p,et as m,g as h,ht as ee,i as g,it as te,lt as ne,ot as re,q as _,s as v,t as y,vt as b,w as ie,y as ae,zt as x}from"./iframe-Cjnv228u.js";import{a as S,i as C,n as w,r as T,t as E}from"./create-runtime-stories-Bxf99jrC.js";import{n as D,t as O}from"./cn-4SJePWnD.js";import{n as k,t as A}from"./Button-Ok1h0yC0.js";import{A as oe,E as se,H as ce,g as le,m as ue,n as de,t as j,w as fe}from"./icons-CotS5T2N.js";import{n as pe,t as M}from"./ColorButton-BhQAEmja.js";function N(e,c){a(c,!0);let m=g(c,`showCloseButton`,3,!1),te=g(c,`closeAriaLabel`,3,`Close`),v=d(c,P),y=r(!1);var S=z();h(S,e=>({class:e,...v}),[()=>O(`fixed bottom-0 left-0 right-0 z-50 w-full flex items-center px-xl py-l pointer-events-none`,`bg-gradient-to-b from-layer-background-transparent to-layer-background to-50%`,c.class)]);var C=u(S),w=u(C),T=e=>{var r=I(),i=u(r),a=e=>{var t=F();de(u(t),{class:`size-6`,stroke:1.5,"aria-hidden":`true`}),x(t),ee(e=>{n(t,1,e),ae(t,`aria-label`,te())},[()=>ie(O(`size-12 shrink-0 inline-flex items-center justify-center rounded-rounded bg-layer-ghost text-icon backdrop-blur-[0.625rem]`,`cursor-pointer transition-transform duration-150 hover:opacity-90 outline-none focus-visible:kds-selected`,ne(y)&&`scale-[0.98]`))]),f(`click`,t,function(...e){c.onCloseClick?.apply(this,e)}),f(`pointerdown`,t,()=>s(y,!0)),f(`pointerup`,t,()=>s(y,!1)),re(`pointerleave`,t,()=>s(y,!1)),re(`pointercancel`,t,()=>s(y,!1)),f(`keydown`,t,e=>{(e.key===`Enter`||e.key===` `)&&s(y,!0)}),f(`keyup`,t,()=>s(y,!1)),o(e,t)};l(i,e=>{m()&&e(a)});var d=p(i,2),h=e=>{var n=t();_(b(n),()=>c.left),o(e,n)};l(d,e=>{c.left&&e(h)}),x(r),o(e,r)};l(w,e=>{(m()||c.left)&&e(T)});var E=p(w,2),D=e=>{var t=L();_(u(t),()=>c.children),x(t),o(e,t)};l(E,e=>{c.children&&e(D)});var k=p(E,2),A=e=>{var t=R();_(u(t),()=>c.right),x(t),o(e,t)};l(k,e=>{c.right&&e(A)}),x(C),x(S),o(e,S),i()}var P,F,I,L,R,z,me=e((()=>{c(),y(),D(),j(),P=new Set([`$$slots`,`$$events`,`$$legacy`,`children`,`left`,`right`,`showCloseButton`,`onCloseClick`,`closeAriaLabel`,`class`]),F=m(`<button type="button"><!></button>`),I=m(`<div class="flex items-center gap-s shrink-0"><!> <!></div>`),L=m(`<div class="absolute left-1/2 -translate-x-1/2 flex items-center gap-s"><!></div>`),R=m(`<div class="ml-auto flex items-center gap-s shrink-0"><!></div>`),z=m(`<footer><div class="pointer-events-auto relative flex items-center w-full max-w-full min-h-14"><!> <!> <!></div></footer>`),te([`click`,`pointerdown`,`pointerup`,`keydown`,`keyup`]),N.__docgen={data:[{name:`children`,visibility:`public`,description:`Main action, horizontally centered (e.g. a primary Button).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`left`,visibility:`public`,description:`Left-zone content (e.g. a label or extra buttons).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`right`,visibility:`public`,description:`Right-zone content (e.g. a danger button or an icon group).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`showCloseButton`,visibility:`public`,description:`Convenience: a close/back icon button at the start of the left zone.`,keywords:[],kind:`let`,type:{kind:`type`,type:`boolean`,text:`boolean`},static:!1,readonly:!1,defaultValue:`false`},{name:`onCloseClick`,visibility:`public`,description:`Close click handler.`,keywords:[],kind:`let`,type:{kind:`function`,text:`() => void`},static:!1,readonly:!1},{name:`closeAriaLabel`,visibility:`public`,description:`Aria label for the close button.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Close"`},{name:`class`,visibility:`public`,description:`Additional classes.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1}],name:`Footer.svelte`}}));function B(e,t){a(t,!1),v();var n=Q(),r=b(n);Y(r,{name:`Playground`,asChild:!0,children:(e,t)=>{N(e,{get left(){return q},children:(e,t)=>{A(e,{label:`Start workout`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:`Playground: the Default kind — a centered primary action with a maximize control.`}},__svelteCsf:{rawCode:`<Footer left={maximizeButton}>
  <Button label="Start workout" kind="primary" size="large" onclick={() => {}} />
</Footer>`}}}),Y(p(r,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: every Figma footer kind (rendered in-flow so they stack).`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-6">
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

  <!-- Edit – Color: centered color swatches, settings on the right. -->
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
</div>`}},children:(e,t)=>{var n=he(),r=u(n);N(r,{class:`relative bottom-auto`,get left(){return q},children:(e,t)=>{A(e,{label:`Start workout`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{default:!0}});var i=p(r,2);N(i,{class:`relative bottom-auto`,left:e=>{A(e,{kind:`icon`,size:`large`,get icon(){return K},"aria-label":`Settings`,onclick:()=>{}})},right:e=>{A(e,{kind:`icon`,size:`large`,get icon(){return G},"aria-label":`Restart`,onclick:()=>{}})},children:(e,t)=>{var n=X(),r=u(n);A(r,{kind:`icon`,size:`large`,get icon(){return H},"aria-label":`Previous`,onclick:()=>{}});var i=p(r,2);A(i,{kind:`icon`,size:`large`,get icon(){return U},"aria-label":`Pause`,onclick:()=>{}}),A(p(i,2),{kind:`icon`,size:`large`,get icon(){return W},"aria-label":`Skip`,onclick:()=>{}}),x(n),o(e,n)},$$slots:{left:!0,right:!0,default:!0}});var a=p(i,2);N(a,{class:`relative bottom-auto`,showCloseButton:!0,onCloseClick:()=>{},right:e=>{A(e,{label:`Delete`,kind:`danger`,size:`large`,onclick:()=>{}})},children:(e,t)=>{A(e,{label:`Save`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{right:!0,default:!0}});var s=p(a,2);N(s,{class:`relative bottom-auto`,right:e=>{A(e,{kind:`icon`,size:`large`,get icon(){return K},"aria-label":`Settings`,onclick:()=>{}})},children:(e,t)=>{var n=X(),r=u(n);M(r,{color:`var(--color-primary)`,shape:`circle`});var i=p(r,2);M(i,{color:`var(--color-secondary)`,shape:`square`}),M(p(i,2),{color:`var(--color-tertiary)`,shape:`triangle`}),x(n),o(e,n)},$$slots:{right:!0,default:!0}}),N(p(s,2),{class:`relative bottom-auto`,left:e=>{o(e,Z())},right:e=>{var t=Q(),n=b(t);A(n,{kind:`icon`,size:`large`,get icon(){return H},"aria-label":`Previous`,onclick:()=>{}}),A(p(n,2),{kind:`icon`,size:`large`,get icon(){return W},"aria-label":`Skip`,onclick:()=>{}}),o(e,t)},children:(e,t)=>{A(e,{label:`Close`,kind:`ghost`,size:`large`,onclick:()=>{}})},$$slots:{left:!0,right:!0,default:!0}}),x(n),o(e,n)},$$slots:{default:!0}}),o(e,n),i()}var V,H,U,W,G,K,q,J,Y,X,Z,Q,he,$,ge,_e,ve;e((()=>{c(),S(),C(),me(),k(),pe(),j(),y(),w(),V=e=>{ce(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},H=e=>{se(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},U=e=>{oe(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},W=e=>{fe(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},G=e=>{le(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},K=e=>{ue(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},q=e=>{A(e,{kind:`icon`,size:`large`,get icon(){return V},"aria-label":`Toggle fullscreen`,onclick:()=>{}})},J={title:`lib/components/Footer`,component:N,parameters:{layout:`fullscreen`,fullBleed:!0},argTypes:{showCloseButton:{control:`boolean`}}},{Story:Y}=T(J),X=m(`<div class="flex items-center gap-xs"><!> <!> <!></div>`),Z=m(`<span class="text-label text-text whitespace-nowrap">Tap twice to end</span>`),Q=m(`<!> <!>`,1),he=m(`<div class="flex flex-col gap-6"><!> <!> <!> <!> <!></div>`),B.__docgen={data:[],name:`Footer.stories.svelte`},$=E(B,J),ge=[`Playground`,`Overview`],_e={...$.Playground,tags:[`svelte-csf-v5`]},ve={...$.Overview,tags:[`svelte-csf-v5`]}}))();export{ve as Overview,_e as Playground,ge as __namedExportsOrder,J as default};