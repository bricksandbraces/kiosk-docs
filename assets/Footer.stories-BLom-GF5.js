import{i as e}from"./preload-helper-xPQekRTU.js";import{$ as t,C as n,Ct as r,D as i,Gt as a,H as o,It as s,Lt as c,O as l,Ot as u,Wt as d,Zt as f,a as p,at as ee,b as m,dt as h,ft as g,gt as te,i as _,it as v,jt as y,kt as b,nt as x,ot as S,pt as C,q as w,s as T,t as E,tn as D}from"./iframe-DioEwCTH.js";import{a as O,i as k,n as A,r as j,t as ne}from"./create-runtime-stories-DcgB2h65.js";import{n as re,t as ie}from"./figmaDesign-BuxWJBGH.js";import{n as ae,t as oe}from"./cn-106S70ma.js";import{r as se,t as M}from"./Button-Cl0VClGC.js";import{E as ce,M as le,O as ue,W as de,g as fe,i as pe,t as N,v as me}from"./icons-DnsoY4BQ.js";import{n as he,t as P}from"./ColorButton-DKh17BMh.js";import{n as ge,t as _e}from"./ProgressiveBlur-CnGkGLzL.js";function F(e,o){a(o,!0);let h=_(o,`showCloseButton`,3,!1),x=_(o,`closeAriaLabel`,3,`Close`),S=p(o,I),T=c(!1);var E=ve();m(E,e=>({class:e,...S}),[()=>oe(`fixed bottom-0 left-0 right-0 z-50 w-full flex items-center px-xl py-l pointer-events-none`,o.class)]);var D=u(E);_e(D,{edge:`bottom`,class:`-z-10`});var O=y(D,2),k=u(O),A=e=>{var a=R(),c=u(a),d=e=>{var t=L();pe(u(t),{class:`size-6`,stroke:1.5,"aria-hidden":`true`}),f(t),r(e=>{i(t,1,e),n(t,`aria-label`,x())},[()=>l(oe(`size-12 shrink-0 inline-flex items-center justify-center rounded-rounded bg-layer-ghost text-icon backdrop-blur-[0.625rem]`,`cursor-pointer transition-transform duration-150 hover:opacity-90 outline-none focus-visible:kds-selected`,te(T)&&`scale-[0.98]`))]),g(`click`,t,function(...e){o.onCloseClick?.apply(this,e)}),g(`pointerdown`,t,()=>s(T,!0)),g(`pointerup`,t,()=>s(T,!1)),C(`pointerleave`,t,()=>s(T,!1)),C(`pointercancel`,t,()=>s(T,!1)),g(`keydown`,t,e=>{(e.key===`Enter`||e.key===` `)&&s(T,!0)}),g(`keyup`,t,()=>s(T,!1)),v(e,t)};w(c,e=>{h()&&e(d)});var p=y(c,2),m=e=>{var n=ee();t(b(n),()=>o.left),v(e,n)};w(p,e=>{o.left&&e(m)}),f(a),v(e,a)};w(k,e=>{(h()||o.left)&&e(A)});var j=y(k,2),ne=e=>{var n=z();t(u(n),()=>o.children),f(n),v(e,n)};w(j,e=>{o.children&&e(ne)});var re=y(j,2),ie=e=>{var n=B();t(u(n),()=>o.right),f(n),v(e,n)};w(re,e=>{o.right&&e(ie)}),f(O),f(E),v(e,E),d()}var I,L,R,z,B,ve,ye=e((()=>{D(),E(),ae(),ge(),N(),I=new Set([`$$slots`,`$$events`,`$$legacy`,`children`,`left`,`right`,`showCloseButton`,`onCloseClick`,`closeAriaLabel`,`class`]),L=S(`<button type="button"><!></button>`),R=S(`<div class="flex items-center gap-s shrink-0"><!> <!></div>`),z=S(`<div class="absolute left-1/2 -translate-x-1/2 flex items-center gap-s"><!></div>`),B=S(`<div class="ml-auto flex items-center gap-s shrink-0"><!></div>`),ve=S(`<footer><!> <div class="pointer-events-auto relative flex items-center w-full max-w-full min-h-12"><!> <!> <!></div></footer>`),h([`click`,`pointerdown`,`pointerup`,`keydown`,`keyup`]),F.__docgen={data:[{name:`children`,visibility:`public`,description:`Main action, horizontally centered (e.g. a primary Button).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`left`,visibility:`public`,description:`Left-zone content (e.g. a label or extra buttons).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`right`,visibility:`public`,description:`Right-zone content (e.g. a danger button or an icon group).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`showCloseButton`,visibility:`public`,description:`Convenience: a close/back icon button at the start of the left zone.`,keywords:[],kind:`let`,type:{kind:`type`,type:`boolean`,text:`boolean`},static:!1,readonly:!1,defaultValue:`false`},{name:`onCloseClick`,visibility:`public`,description:`Close click handler.`,keywords:[],kind:`let`,type:{kind:`function`,text:`() => void`},static:!1,readonly:!1},{name:`closeAriaLabel`,visibility:`public`,description:`Aria label for the close button.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Close"`},{name:`class`,visibility:`public`,description:`Additional classes.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1}],name:`Footer.svelte`}}));function V(e,t){a(t,!1),T();var n=Q(),i=b(n);X(i,{name:`Playground`,asChild:!0,children:(e,t)=>{F(e,{get left(){return J},children:(e,t)=>{M(e,{label:`Start workout`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:`Playground: the Default kind - a centered primary action with a maximize control.`}},__svelteCsf:{rawCode:`<Footer left={maximizeButton}>
  <Button label="Start workout" kind="primary" size="large" onclick={() => {}} />
</Footer>`}}});var s=y(i,2);X(s,{name:`ScrollingContent`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`ScrollingContent: verifies the blur-based fade against the real-world case
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
</div>`}},children:(e,t)=>{var n=xe(),i=u(n),a=u(i);o(a,4,()=>Array.from({length:18},(e,t)=>t+1),e=>e,(e,t)=>{var n=be(),i=u(n),a=u(i),o=u(a,!0);f(a);var s=y(a,2),c=u(s);f(s),f(i);var l=y(i,2),d=u(l);f(l),f(n),r(()=>{x(o,t%2==0?`Break`:`Interval`),x(c,`${t??``}:00`),x(d,`Row ${t??``} - scrolls under the footer`)}),v(e,n)}),f(a),f(i),F(y(i,2),{showCloseButton:!0,onCloseClick:()=>{},right:e=>{M(e,{label:`Delete`,kind:`danger`,size:`large`,onclick:()=>{}})},children:(e,t)=>{M(e,{label:`Save`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{right:!0,default:!0}}),f(n),v(e,n)},$$slots:{default:!0}}),X(y(s,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: every Figma footer kind (rendered in-flow so they stack).`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-6">
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
</div>`}},children:(e,t)=>{var n=we(),r=u(n);F(r,{class:`relative bottom-auto`,get left(){return J},children:(e,t)=>{M(e,{label:`Start workout`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{default:!0}});var i=y(r,2);F(i,{class:`relative bottom-auto`,left:e=>{M(e,{kind:`ghost-light`,size:`large`,get icon(){return q},"aria-label":`Settings`,onclick:()=>{}})},right:e=>{M(e,{kind:`ghost-light`,size:`large`,get icon(){return K},"aria-label":`Restart`,onclick:()=>{}})},children:(e,t)=>{var n=Z(),r=u(n);M(r,{kind:`ghost-light`,size:`large`,get icon(){return U},"aria-label":`Previous`,onclick:()=>{}});var i=y(r,2);M(i,{kind:`ghost-light`,size:`large`,get icon(){return W},"aria-label":`Pause`,onclick:()=>{}}),M(y(i,2),{kind:`ghost-light`,size:`large`,get icon(){return G},"aria-label":`Skip`,onclick:()=>{}}),f(n),v(e,n)},$$slots:{left:!0,right:!0,default:!0}});var a=y(i,2);F(a,{class:`relative bottom-auto`,showCloseButton:!0,onCloseClick:()=>{},right:e=>{M(e,{label:`Delete`,kind:`danger`,size:`large`,onclick:()=>{}})},children:(e,t)=>{M(e,{label:`Save`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{right:!0,default:!0}});var o=y(a,2);F(o,{class:`relative bottom-auto`,right:e=>{M(e,{kind:`ghost-light`,size:`large`,get icon(){return q},"aria-label":`Settings`,onclick:()=>{}})},children:(e,t)=>{var n=Z(),r=u(n);P(r,{color:`var(--color-primary)`,shape:`circle`});var i=y(r,2);P(i,{color:`var(--color-secondary)`,shape:`square`}),P(y(i,2),{color:`var(--color-tertiary)`,shape:`triangle`}),f(n),v(e,n)},$$slots:{right:!0,default:!0}}),F(y(o,2),{class:`relative bottom-auto`,left:e=>{v(e,Se())},right:e=>{var t=Ce(),n=b(t);M(n,{kind:`ghost-light`,size:`large`,get icon(){return U},"aria-label":`Previous`,onclick:()=>{}}),M(y(n,2),{kind:`ghost-light`,size:`large`,get icon(){return G},"aria-label":`Skip`,onclick:()=>{}}),v(e,t)},children:(e,t)=>{M(e,{label:`Close`,kind:`ghost-light`,size:`large`,onclick:()=>{}})},$$slots:{left:!0,right:!0,default:!0}}),f(n),v(e,n)},$$slots:{default:!0}}),v(e,n),d()}var H,U,W,G,K,q,J,Y,X,be,xe,Z,Se,Ce,we,Q,$,Te,Ee,De,Oe;e((()=>{D(),O(),k(),re(),ye(),se(),he(),N(),E(),A(),H=e=>{de(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},U=e=>{ue(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},W=e=>{le(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},G=e=>{ce(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},K=e=>{me(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},q=e=>{fe(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},J=e=>{M(e,{kind:`ghost-light`,size:`large`,get icon(){return H},"aria-label":`Toggle fullscreen`,onclick:()=>{}})},Y={title:`lib/components/Footer`,component:F,parameters:{layout:`fullscreen`,fullBleed:!0,design:ie(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=8-1291`)},argTypes:{showCloseButton:{control:`boolean`}}},{Story:X}=j(Y),be=S(`<div class="flex w-full items-center justify-between rounded-m bg-layer-01 px-l py-l"><div class="flex flex-col gap-3xs"><span class="typography-label-regular text-text-secondary"> </span> <span class="typography-body-bold text-text"> </span></div> <span class="typography-body-regular text-text-secondary"> </span></div>`),xe=S(`<div class="h-screen bg-layer-background"><div class="h-full overflow-y-auto px-m pt-6 pb-40"><div class="flex flex-col gap-2xs"></div></div> <!></div>`),Z=S(`<div class="flex items-center gap-xs"><!> <!> <!></div>`),Se=S(`<span class="typography-label-regular text-text whitespace-nowrap">Tap twice to end</span>`),Ce=S(`<!> <!>`,1),we=S(`<div class="flex flex-col gap-6"><!> <!> <!> <!> <!></div>`),Q=S(`<!> <!> <!>`,1),V.__docgen={data:[],name:`Footer.stories.svelte`},$=ne(V,Y),Te=[`Playground`,`ScrollingContent`,`Overview`],Ee={...$.Playground,tags:[`svelte-csf-v5`]},De={...$.ScrollingContent,tags:[`svelte-csf-v5`]},Oe={...$.Overview,tags:[`svelte-csf-v5`]}}))();export{Oe as Overview,Ee as Playground,De as ScrollingContent,Te as __namedExportsOrder,Y as default};