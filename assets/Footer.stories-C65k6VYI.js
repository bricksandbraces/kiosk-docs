import{i as e}from"./preload-helper-xPQekRTU.js";import{I as t,Nt as n,Pt as r,Q as i,Ut as a,X as o,_t as s,bt as c,et as l,ht as u,s as d,t as f,vt as p,zt as m}from"./iframe-DtmjUeVe.js";import{a as h,i as g,n as _,r as v,t as y}from"./create-runtime-stories-pYaNL8_f.js";import{n as b,t as x}from"./Button-s9HWAiZk.js";import{A as S,E as C,H as w,g as T,m as ee,t as E,w as D}from"./icons-BRoaIEPZ.js";import{n as O,t as k}from"./ColorButton-BhlG4vy1.js";import{n as A,t as j}from"./Footer-guQnmzsJ.js";function M(e,a){r(a,!1),d();var l=J(),f=p(l);V(f,{name:`Playground`,asChild:!0,children:(e,t)=>{j(e,{get left(){return z},children:(e,t)=>{x(e,{label:`Start workout`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:`Playground: the Default kind - a centered primary action with a maximize control.`}},__svelteCsf:{rawCode:`<Footer left={maximizeButton}>
  <Button label="Start workout" kind="primary" size="large" onclick={() => {}} />
</Footer>`}}});var h=c(f,2);V(h,{name:`ScrollingContent`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`ScrollingContent: verifies the blur-based fade against the real-world case
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
</div>`}},children:(e,n)=>{var r=U(),a=s(r),l=s(a);t(l,4,()=>Array.from({length:18},(e,t)=>t+1),e=>e,(e,t)=>{var n=H(),r=s(n),a=s(r),l=s(a,!0);m(a);var d=c(a,2),f=s(d);m(d),m(r);var p=c(r,2),h=s(p);m(p),m(n),u(()=>{o(l,t%2==0?`Break`:`Interval`),o(f,`${t??``}:00`),o(h,`Row ${t??``} - scrolls under the footer`)}),i(e,n)}),m(l),m(a),j(c(a,2),{showCloseButton:!0,onCloseClick:()=>{},right:e=>{x(e,{label:`Delete`,kind:`danger`,size:`large`,onclick:()=>{}})},children:(e,t)=>{x(e,{label:`Save`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{right:!0,default:!0}}),m(r),i(e,r)},$$slots:{default:!0}}),V(c(h,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: every Figma footer kind (rendered in-flow so they stack).`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-6">
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
</div>`}},children:(e,t)=>{var n=q(),r=s(n);j(r,{class:`relative bottom-auto`,get left(){return z},children:(e,t)=>{x(e,{label:`Start workout`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{default:!0}});var a=c(r,2);j(a,{class:`relative bottom-auto`,left:e=>{x(e,{kind:`icon`,size:`large`,get icon(){return R},"aria-label":`Settings`,onclick:()=>{}})},right:e=>{x(e,{kind:`icon`,size:`large`,get icon(){return L},"aria-label":`Restart`,onclick:()=>{}})},children:(e,t)=>{var n=W(),r=s(n);x(r,{kind:`icon`,size:`large`,get icon(){return P},"aria-label":`Previous`,onclick:()=>{}});var a=c(r,2);x(a,{kind:`icon`,size:`large`,get icon(){return F},"aria-label":`Pause`,onclick:()=>{}}),x(c(a,2),{kind:`icon`,size:`large`,get icon(){return I},"aria-label":`Skip`,onclick:()=>{}}),m(n),i(e,n)},$$slots:{left:!0,right:!0,default:!0}});var o=c(a,2);j(o,{class:`relative bottom-auto`,showCloseButton:!0,onCloseClick:()=>{},right:e=>{x(e,{label:`Delete`,kind:`danger`,size:`large`,onclick:()=>{}})},children:(e,t)=>{x(e,{label:`Save`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{right:!0,default:!0}});var l=c(o,2);j(l,{class:`relative bottom-auto`,right:e=>{x(e,{kind:`icon`,size:`large`,get icon(){return R},"aria-label":`Settings`,onclick:()=>{}})},children:(e,t)=>{var n=W(),r=s(n);k(r,{color:`var(--color-primary)`,shape:`circle`});var a=c(r,2);k(a,{color:`var(--color-secondary)`,shape:`square`}),k(c(a,2),{color:`var(--color-tertiary)`,shape:`triangle`}),m(n),i(e,n)},$$slots:{right:!0,default:!0}}),j(c(l,2),{class:`relative bottom-auto`,left:e=>{i(e,G())},right:e=>{var t=K(),n=p(t);x(n,{kind:`icon`,size:`large`,get icon(){return P},"aria-label":`Previous`,onclick:()=>{}}),x(c(n,2),{kind:`icon`,size:`large`,get icon(){return I},"aria-label":`Skip`,onclick:()=>{}}),i(e,t)},children:(e,t)=>{x(e,{label:`Close`,kind:`ghost`,size:`large`,onclick:()=>{}})},$$slots:{left:!0,right:!0,default:!0}}),m(n),i(e,n)},$$slots:{default:!0}}),i(e,l),n()}var N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{a(),h(),g(),A(),b(),O(),E(),f(),_(),N=e=>{w(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},P=e=>{C(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},F=e=>{S(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},I=e=>{D(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},L=e=>{T(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},R=e=>{ee(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},z=e=>{x(e,{kind:`icon`,size:`large`,get icon(){return N},"aria-label":`Toggle fullscreen`,onclick:()=>{}})},B={title:`lib/components/Footer`,component:j,parameters:{layout:`fullscreen`,fullBleed:!0},argTypes:{showCloseButton:{control:`boolean`}}},{Story:V}=v(B),H=l(`<div class="flex w-full items-center justify-between rounded-m bg-layer-01 px-l py-l"><div class="flex flex-col gap-3xs"><span class="text-label text-text-secondary"> </span> <span class="text-regular-bold text-text"> </span></div> <span class="text-regular text-text-secondary"> </span></div>`),U=l(`<div class="h-screen bg-layer-background"><div class="h-full overflow-y-auto px-m pt-6 pb-40"><div class="flex flex-col gap-2xs"></div></div> <!></div>`),W=l(`<div class="flex items-center gap-xs"><!> <!> <!></div>`),G=l(`<span class="text-label text-text whitespace-nowrap">Tap twice to end</span>`),K=l(`<!> <!>`,1),q=l(`<div class="flex flex-col gap-6"><!> <!> <!> <!> <!></div>`),J=l(`<!> <!> <!>`,1),M.__docgen={data:[],name:`Footer.stories.svelte`},Y=y(M,B),X=[`Playground`,`ScrollingContent`,`Overview`],Z={...Y.Playground,tags:[`svelte-csf-v5`]},Q={...Y.ScrollingContent,tags:[`svelte-csf-v5`]},$={...Y.Overview,tags:[`svelte-csf-v5`]}}))();export{$ as Overview,Z as Playground,Q as ScrollingContent,X as __namedExportsOrder,B as default};