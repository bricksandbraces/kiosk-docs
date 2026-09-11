import{i as e}from"./preload-helper-xPQekRTU.js";import{$ as t,C as n,Ct as r,I as i,It as a,Lt as o,Ot as s,Q as c,Ut as l,V as u,X as d,a as f,at as p,bt as m,et as h,g,gt as _,i as v,kt as ee,ot as y,q as b,qt as x,s as S,st as C,t as w,ut as te,w as ne,xt as T,y as re}from"./iframe-Bz8DFIpJ.js";import{a as E,i as D,n as O,r as k,t as ie}from"./create-runtime-stories-WnJfGviS.js";import{n as ae,t as oe}from"./figmaDesign-BuxWJBGH.js";import{n as se,t as A}from"./cn-Ror5QdK3.js";import{n as ce,t as j}from"./Button-CPq6jNWv.js";import{E as le,M as ue,O as de,W as fe,g as pe,i as me,t as M,v as he}from"./icons-D0a2gJic.js";import{n as ge,t as N}from"./ColorButton-Bcl1cVhz.js";import{n as _e,t as ve}from"./ProgressiveBlur-COUZhXhT.js";function P(e,i){o(i,!0);let d=v(i,`showCloseButton`,3,!1),p=v(i,`closeAriaLabel`,3,`Close`),h=f(i,F),x=ee(!1);var S=z();g(S,e=>({class:e,...h}),[()=>A(`fixed bottom-0 left-0 right-0 z-50 w-full flex items-center px-xl py-l pointer-events-none`,i.class)]);var w=m(S);ve(w,{edge:`bottom`,class:`-z-10`});var E=r(w,2),D=m(E),O=e=>{var a=L(),o=m(a),f=e=>{var t=I();me(m(t),{class:`size-6`,stroke:1.5,"aria-hidden":`true`}),l(t),_(e=>{n(t,1,e),re(t,`aria-label`,p())},[()=>ne(A(`size-12 shrink-0 inline-flex items-center justify-center rounded-rounded bg-layer-ghost text-icon backdrop-blur-[0.625rem]`,`cursor-pointer transition-transform duration-150 hover:opacity-90 outline-none focus-visible:kds-selected`,te(x)&&`scale-[0.98]`))]),y(`click`,t,function(...e){i.onCloseClick?.apply(this,e)}),y(`pointerdown`,t,()=>s(x,!0)),y(`pointerup`,t,()=>s(x,!1)),C(`pointerleave`,t,()=>s(x,!1)),C(`pointercancel`,t,()=>s(x,!1)),y(`keydown`,t,e=>{(e.key===`Enter`||e.key===` `)&&s(x,!0)}),y(`keyup`,t,()=>s(x,!1)),c(e,t)};u(o,e=>{d()&&e(f)});var h=r(o,2),g=e=>{var n=t();b(T(n),()=>i.left),c(e,n)};u(h,e=>{i.left&&e(g)}),l(a),c(e,a)};u(D,e=>{(d()||i.left)&&e(O)});var k=r(D,2),ie=e=>{var t=ye();b(m(t),()=>i.children),l(t),c(e,t)};u(k,e=>{i.children&&e(ie)});var ae=r(k,2),oe=e=>{var t=R();b(m(t),()=>i.right),l(t),c(e,t)};u(ae,e=>{i.right&&e(oe)}),l(E),l(S),c(e,S),a()}var F,I,L,ye,R,z,be=e((()=>{x(),w(),se(),_e(),M(),F=new Set([`$$slots`,`$$events`,`$$legacy`,`children`,`left`,`right`,`showCloseButton`,`onCloseClick`,`closeAriaLabel`,`class`]),I=h(`<button type="button"><!></button>`),L=h(`<div class="flex items-center gap-s shrink-0"><!> <!></div>`),ye=h(`<div class="absolute left-1/2 -translate-x-1/2 flex items-center gap-s"><!></div>`),R=h(`<div class="ml-auto flex items-center gap-s shrink-0"><!></div>`),z=h(`<footer><!> <div class="pointer-events-auto relative flex items-center w-full max-w-full min-h-12"><!> <!> <!></div></footer>`),p([`click`,`pointerdown`,`pointerup`,`keydown`,`keyup`]),P.__docgen={data:[{name:`children`,visibility:`public`,description:`Main action, horizontally centered (e.g. a primary Button).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`left`,visibility:`public`,description:`Left-zone content (e.g. a label or extra buttons).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`right`,visibility:`public`,description:`Right-zone content (e.g. a danger button or an icon group).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`showCloseButton`,visibility:`public`,description:`Convenience: a close/back icon button at the start of the left zone.`,keywords:[],kind:`let`,type:{kind:`type`,type:`boolean`,text:`boolean`},static:!1,readonly:!1,defaultValue:`false`},{name:`onCloseClick`,visibility:`public`,description:`Close click handler.`,keywords:[],kind:`let`,type:{kind:`function`,text:`() => void`},static:!1,readonly:!1},{name:`closeAriaLabel`,visibility:`public`,description:`Aria label for the close button.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Close"`},{name:`class`,visibility:`public`,description:`Additional classes.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1}],name:`Footer.svelte`}}));function B(e,t){o(t,!1),S();var n=Q(),s=T(n);Y(s,{name:`Playground`,asChild:!0,children:(e,t)=>{P(e,{get left(){return q},children:(e,t)=>{j(e,{label:`Start workout`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:`Playground: the Default kind - a centered primary action with a maximize control.`}},__svelteCsf:{rawCode:`<Footer left={maximizeButton}>
  <Button label="Start workout" kind="primary" size="large" onclick={() => {}} />
</Footer>`}}});var u=r(s,2);Y(u,{name:`ScrollingContent`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`ScrollingContent: verifies the blur-based fade against the real-world case
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
</div>`}},children:(e,t)=>{var n=xe(),a=m(n),o=m(a);i(o,4,()=>Array.from({length:18},(e,t)=>t+1),e=>e,(e,t)=>{var n=X(),i=m(n),a=m(i),o=m(a,!0);l(a);var s=r(a,2),u=m(s);l(s),l(i);var f=r(i,2),p=m(f);l(f),l(n),_(()=>{d(o,t%2==0?`Break`:`Interval`),d(u,`${t??``}:00`),d(p,`Row ${t??``} - scrolls under the footer`)}),c(e,n)}),l(o),l(a),P(r(a,2),{showCloseButton:!0,onCloseClick:()=>{},right:e=>{j(e,{label:`Delete`,kind:`danger`,size:`large`,onclick:()=>{}})},children:(e,t)=>{j(e,{label:`Save`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{right:!0,default:!0}}),l(n),c(e,n)},$$slots:{default:!0}}),Y(r(u,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: every Figma footer kind (rendered in-flow so they stack).`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-6">
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
</div>`}},children:(e,t)=>{var n=we(),i=m(n);P(i,{class:`relative bottom-auto`,get left(){return q},children:(e,t)=>{j(e,{label:`Start workout`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{default:!0}});var a=r(i,2);P(a,{class:`relative bottom-auto`,left:e=>{j(e,{kind:`icon`,size:`large`,get icon(){return K},"aria-label":`Settings`,onclick:()=>{}})},right:e=>{j(e,{kind:`icon`,size:`large`,get icon(){return G},"aria-label":`Restart`,onclick:()=>{}})},children:(e,t)=>{var n=Z(),i=m(n);j(i,{kind:`icon`,size:`large`,get icon(){return H},"aria-label":`Previous`,onclick:()=>{}});var a=r(i,2);j(a,{kind:`icon`,size:`large`,get icon(){return U},"aria-label":`Pause`,onclick:()=>{}}),j(r(a,2),{kind:`icon`,size:`large`,get icon(){return W},"aria-label":`Skip`,onclick:()=>{}}),l(n),c(e,n)},$$slots:{left:!0,right:!0,default:!0}});var o=r(a,2);P(o,{class:`relative bottom-auto`,showCloseButton:!0,onCloseClick:()=>{},right:e=>{j(e,{label:`Delete`,kind:`danger`,size:`large`,onclick:()=>{}})},children:(e,t)=>{j(e,{label:`Save`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{right:!0,default:!0}});var s=r(o,2);P(s,{class:`relative bottom-auto`,right:e=>{j(e,{kind:`icon`,size:`large`,get icon(){return K},"aria-label":`Settings`,onclick:()=>{}})},children:(e,t)=>{var n=Z(),i=m(n);N(i,{color:`var(--color-primary)`,shape:`circle`});var a=r(i,2);N(a,{color:`var(--color-secondary)`,shape:`square`}),N(r(a,2),{color:`var(--color-tertiary)`,shape:`triangle`}),l(n),c(e,n)},$$slots:{right:!0,default:!0}}),P(r(s,2),{class:`relative bottom-auto`,left:e=>{c(e,Se())},right:e=>{var t=Ce(),n=T(t);j(n,{kind:`icon`,size:`large`,get icon(){return H},"aria-label":`Previous`,onclick:()=>{}}),j(r(n,2),{kind:`icon`,size:`large`,get icon(){return W},"aria-label":`Skip`,onclick:()=>{}}),c(e,t)},children:(e,t)=>{j(e,{label:`Close`,kind:`ghost`,size:`large`,onclick:()=>{}})},$$slots:{left:!0,right:!0,default:!0}}),l(n),c(e,n)},$$slots:{default:!0}}),c(e,n),a()}var V,H,U,W,G,K,q,J,Y,X,xe,Z,Se,Ce,we,Q,$,Te,Ee,De,Oe;e((()=>{x(),E(),D(),ae(),be(),ce(),ge(),M(),w(),O(),V=e=>{fe(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},H=e=>{de(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},U=e=>{ue(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},W=e=>{le(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},G=e=>{he(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},K=e=>{pe(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},q=e=>{j(e,{kind:`icon`,size:`large`,get icon(){return V},"aria-label":`Toggle fullscreen`,onclick:()=>{}})},J={title:`lib/components/Footer`,component:P,parameters:{layout:`fullscreen`,fullBleed:!0,design:oe(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=8-1291`)},argTypes:{showCloseButton:{control:`boolean`}}},{Story:Y}=k(J),X=h(`<div class="flex w-full items-center justify-between rounded-m bg-layer-01 px-l py-l"><div class="flex flex-col gap-3xs"><span class="text-label text-text-secondary"> </span> <span class="text-regular-bold text-text"> </span></div> <span class="text-regular text-text-secondary"> </span></div>`),xe=h(`<div class="h-screen bg-layer-background"><div class="h-full overflow-y-auto px-m pt-6 pb-40"><div class="flex flex-col gap-2xs"></div></div> <!></div>`),Z=h(`<div class="flex items-center gap-xs"><!> <!> <!></div>`),Se=h(`<span class="text-label text-text whitespace-nowrap">Tap twice to end</span>`),Ce=h(`<!> <!>`,1),we=h(`<div class="flex flex-col gap-6"><!> <!> <!> <!> <!></div>`),Q=h(`<!> <!> <!>`,1),B.__docgen={data:[],name:`Footer.stories.svelte`},$=ie(B,J),Te=[`Playground`,`ScrollingContent`,`Overview`],Ee={...$.Playground,tags:[`svelte-csf-v5`]},De={...$.ScrollingContent,tags:[`svelte-csf-v5`]},Oe={...$.Overview,tags:[`svelte-csf-v5`]}}))();export{Oe as Overview,Ee as Playground,De as ScrollingContent,Te as __namedExportsOrder,J as default};