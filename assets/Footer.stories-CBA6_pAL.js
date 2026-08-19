import{i as e}from"./preload-helper-xPQekRTU.js";import{Nt as t,Pt as n,Q as r,Ut as i,_t as a,bt as o,et as s,s as c,t as l,vt as u,zt as d}from"./iframe-Bj9nmbbV.js";import{a as f,i as p,n as m,r as h,t as g}from"./create-runtime-stories-B5qKOFHV.js";import{n as _,t as v}from"./Button-VeY9ls6t.js";import{A as y,E as b,H as x,g as S,m as C,t as w,w as T}from"./icons-DSPupztt.js";import{n as E,t as D}from"./ColorButton-CCFE6-OG.js";import{n as O,t as k}from"./Footer-m-opVsVk.js";function A(e,i){n(i,!1),c();var s=H(),l=u(s);z(l,{name:`Playground`,asChild:!0,children:(e,t)=>{k(e,{get left(){return L},children:(e,t)=>{v(e,{label:`Start workout`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:`Playground: the Default kind — a centered primary action with a maximize control.`}},__svelteCsf:{rawCode:`<Footer left={maximizeButton}>
  <Button label="Start workout" kind="primary" size="large" onclick={() => {}} />
</Footer>`}}}),z(o(l,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: every Figma footer kind (rendered in-flow so they stack).`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-6">
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
</div>`}},children:(e,t)=>{var n=U(),i=a(n);k(i,{class:`relative bottom-auto`,get left(){return L},children:(e,t)=>{v(e,{label:`Start workout`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{default:!0}});var s=o(i,2);k(s,{class:`relative bottom-auto`,left:e=>{v(e,{kind:`icon`,size:`large`,get icon(){return I},"aria-label":`Settings`,onclick:()=>{}})},right:e=>{v(e,{kind:`icon`,size:`large`,get icon(){return F},"aria-label":`Restart`,onclick:()=>{}})},children:(e,t)=>{var n=B(),i=a(n);v(i,{kind:`icon`,size:`large`,get icon(){return M},"aria-label":`Previous`,onclick:()=>{}});var s=o(i,2);v(s,{kind:`icon`,size:`large`,get icon(){return N},"aria-label":`Pause`,onclick:()=>{}}),v(o(s,2),{kind:`icon`,size:`large`,get icon(){return P},"aria-label":`Skip`,onclick:()=>{}}),d(n),r(e,n)},$$slots:{left:!0,right:!0,default:!0}});var c=o(s,2);k(c,{class:`relative bottom-auto`,showCloseButton:!0,onCloseClick:()=>{},right:e=>{v(e,{label:`Delete`,kind:`danger`,size:`large`,onclick:()=>{}})},children:(e,t)=>{v(e,{label:`Save`,kind:`primary`,size:`large`,onclick:()=>{}})},$$slots:{right:!0,default:!0}});var l=o(c,2);k(l,{class:`relative bottom-auto`,right:e=>{v(e,{kind:`icon`,size:`large`,get icon(){return I},"aria-label":`Settings`,onclick:()=>{}})},children:(e,t)=>{var n=B(),i=a(n);D(i,{color:`var(--color-primary)`,shape:`circle`});var s=o(i,2);D(s,{color:`var(--color-secondary)`,shape:`square`}),D(o(s,2),{color:`var(--color-tertiary)`,shape:`triangle`}),d(n),r(e,n)},$$slots:{right:!0,default:!0}}),k(o(l,2),{class:`relative bottom-auto`,left:e=>{r(e,V())},right:e=>{var t=H(),n=u(t);v(n,{kind:`icon`,size:`large`,get icon(){return M},"aria-label":`Previous`,onclick:()=>{}}),v(o(n,2),{kind:`icon`,size:`large`,get icon(){return P},"aria-label":`Skip`,onclick:()=>{}}),r(e,t)},children:(e,t)=>{v(e,{label:`Close`,kind:`ghost`,size:`large`,onclick:()=>{}})},$$slots:{left:!0,right:!0,default:!0}}),d(n),r(e,n)},$$slots:{default:!0}}),r(e,s),t()}var j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;e((()=>{i(),f(),p(),O(),_(),E(),w(),l(),m(),j=e=>{x(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},M=e=>{b(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},N=e=>{y(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},P=e=>{T(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},F=e=>{S(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},I=e=>{C(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},L=e=>{v(e,{kind:`icon`,size:`large`,get icon(){return j},"aria-label":`Toggle fullscreen`,onclick:()=>{}})},R={title:`lib/components/Footer`,component:k,parameters:{layout:`fullscreen`,fullBleed:!0},argTypes:{showCloseButton:{control:`boolean`}}},{Story:z}=h(R),B=s(`<div class="flex items-center gap-xs"><!> <!> <!></div>`),V=s(`<span class="text-label text-text whitespace-nowrap">Tap twice to end</span>`),H=s(`<!> <!>`,1),U=s(`<div class="flex flex-col gap-6"><!> <!> <!> <!> <!></div>`),A.__docgen={data:[],name:`Footer.stories.svelte`},W=g(A,R),G=[`Playground`,`Overview`],K={...W.Playground,tags:[`svelte-csf-v5`]},q={...W.Overview,tags:[`svelte-csf-v5`]}}))();export{q as Overview,K as Playground,G as __namedExportsOrder,R as default};