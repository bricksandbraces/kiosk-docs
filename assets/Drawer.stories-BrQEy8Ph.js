import{i as e}from"./preload-helper-xPQekRTU.js";import{At as t,Gt as n,Kt as r,Lt as i,M as a,Mt as o,Qt as s,Rt as c,_t as l,en as u,it as d,kt as f,nn as p,o as m,ot as h,q as ee,t as g}from"./iframe-DphDD8Dh.js";import{i as _,n as v,r as y,t as b}from"./create-runtime-stories-Cf7yfCMR.js";import{n as x,t as te}from"./figmaDesign-BuxWJBGH.js";import{H as ne,Rt as re,b as S,t as C}from"./icons-mE3sbh9i.js";import{r as w,t as T}from"./Button--OUeTAjj.js";import{n as E,t as D}from"./Card-G_OuESrK.js";import{n as O,t as k}from"./Drawer-EdestmxM.js";import{n as A,t as j}from"./Header-BzEcXfq1.js";import{n as M,t as N}from"./List-B0LhIRW9.js";function P(e,p){r(p,!0);function h(e,t){F.getChannel().emit(`updateStoryArgs`,{storyId:e,updatedArgs:{open:t}})}let g=c(!1);function _(e){let t=e.parentElement;t&&requestAnimationFrame(()=>{t.scrollTop=(t.scrollHeight-t.clientHeight)/2})}let v=Array.from({length:12},(e,t)=>({id:`w${t+1}`,title:`Workout ${t+1}`,subtitle:`${30+t*5}:00`}));var y=J(),b=t(y);V(b,{name:`Playground`,args:{open:!0,title:`Title`,onClose:()=>{}},template:(e,n=u,r=u)=>{var i=G(),a=t(i);k(a,m(n,{onClose:()=>h(r().id,!1),get footer(){return z},children:(e,t)=>{var n=U();N(f(n),{get items(){return v},onItemClick:()=>{}}),s(n),d(e,n)},$$slots:{default:!0}}));var c=o(a,2),l=e=>{var t=W();T(f(t),{label:`Open drawer`,kind:`primary`,size:`large`,onclick:()=>h(r().id,!0)}),s(t),d(e,t)};ee(c,e=>{n().open||e(l)}),d(e,i)},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: the drawer wired to controls; close writes back to the arg.`}},__svelteCsf:{rawCode:`<Drawer {...args} onClose={() => setOpen(context.id, false)} {footer}>
  <div class="flex flex-col gap-2xs px-2xs">
    <List items={workouts} onItemClick={() => {}} />
  </div>
</Drawer>
{#if !args.open}
  <div class="flex h-screen items-center justify-center bg-layer-background">
    <Button label="Open drawer" kind="primary" size="large" onclick={() => setOpen(context.id, true)} />
  </div>
{/if}`}}});var x=o(b,2);V(x,{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: drawer over a realistic page - open it via the header's menu button
    to verify the slide-in/out animation against real content, with a body long
    enough to scroll under the footer fade.`}},__svelteCsf:{rawCode:`<div class="relative h-screen overflow-hidden bg-layer-background">
  <Header title="Workouts">
    {#snippet right()}
      <Button kind="ghost-light" size="large" icon={menuIcon} aria-label="Menu" onclick={() => (overviewOpen = true)} />
    {/snippet}
  </Header>
  <div class="flex gap-s px-m pt-24">
    <Card title="Storm 50" duration="50:00" onclick={() => {}} />
    <Card title="HIIT Bootcamp" duration="45:00" onclick={() => {}} />
  </div>

  <Drawer open={overviewOpen} onClose={() => (overviewOpen = false)} title="Title" {footer}>
    <div class="flex flex-col gap-2xs px-2xs">
      <List items={workouts} onItemClick={() => {}} />
    </div>
  </Drawer>
</div>`}},children:(e,t)=>{var n=K(),r=f(n);j(r,{title:`Workouts`,right:e=>{T(e,{kind:`ghost-light`,size:`large`,get icon(){return I},"aria-label":`Menu`,onclick:()=>i(g,!0)})},$$slots:{right:!0}});var a=o(r,2),c=f(a);D(c,{title:`Storm 50`,duration:`50:00`,onclick:()=>{}}),D(o(c,2),{title:`HIIT Bootcamp`,duration:`45:00`,onclick:()=>{}}),s(a),k(o(a,2),{get open(){return l(g)},onClose:()=>i(g,!1),title:`Title`,get footer(){return z},children:(e,t)=>{var n=U();N(f(n),{get items(){return v},onItemClick:()=>{}}),s(n),d(e,n)},$$slots:{default:!0}}),s(n),d(e,n)},$$slots:{default:!0}}),V(o(x,2),{name:`Scrolled`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Scrolled: body scrolled to the middle, so the list runs under the title row and
    the footer and both blur fades are visible at once.`}},__svelteCsf:{rawCode:`<div class="relative h-screen overflow-hidden bg-layer-background">
  <Drawer open onClose={() => {}} title="Title" {footer}>
    <div class="flex flex-col gap-2xs px-2xs" use:scrollBodyToMiddle>
      <List items={workouts} onItemClick={() => {}} />
    </div>
  </Drawer>
</div>`}},children:(e,t)=>{var n=q();k(f(n),{open:!0,onClose:()=>{},title:`Title`,get footer(){return z},children:(e,t)=>{var n=U();N(f(n),{get items(){return v},onItemClick:()=>{}}),s(n),a(n,e=>_?.(e)),d(e,n)},$$slots:{default:!0}}),s(n),d(e,n)},$$slots:{default:!0}}),d(e,y),n()}var F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),_(),x(),O(),g(),w(),E(),A(),M(),C(),v(),{addons:F}=__STORYBOOK_MODULE_PREVIEW_API__,I=e=>{ne(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},L=e=>{re(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},R=e=>{S(e,{class:`size-full text-layer-error`,stroke:1.5,"aria-hidden":`true`})},z=e=>{var n=H(),r=o(t(n),2),i=f(r);T(i,{kind:`ghost-light`,size:`large`,get icon(){return L},"aria-label":`Settings`,onclick:()=>{}}),T(o(i,2),{kind:`ghost-light`,size:`large`,get icon(){return R},"aria-label":`Power`,onclick:()=>{}}),s(r),d(e,n)},B={title:`lib/components/Drawer`,component:k,parameters:{layout:`fullscreen`,design:te(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=390-839`)},argTypes:{open:{control:`boolean`},title:{control:`text`},ariaLabel:{control:`text`},closeAriaLabel:{control:`text`}}},{Story:V}=y(B),H=h(`<span class="pointer-events-auto relative typography-label-regular text-text">v.1.0</span> <div class="pointer-events-auto relative flex items-center gap-2xs"><!> <!></div>`,1),U=h(`<div class="flex flex-col gap-2xs px-2xs"><!></div>`),W=h(`<div class="flex h-screen items-center justify-center bg-layer-background"><!></div>`),G=h(`<!> <!>`,1),K=h(`<div class="relative h-screen overflow-hidden bg-layer-background"><!> <div class="flex gap-s px-m pt-24"><!> <!></div> <!></div>`),q=h(`<div class="relative h-screen overflow-hidden bg-layer-background"><!></div>`),J=h(`<!> <!> <!>`,1),P.__docgen={data:[],name:`Drawer.stories.svelte`},Y=b(P,B),X=[`Playground`,`Overview`,`Scrolled`],Z={...Y.Playground,tags:[`svelte-csf-v5`]},Q={...Y.Overview,tags:[`svelte-csf-v5`]},$={...Y.Scrolled,tags:[`svelte-csf-v5`]}}))();export{Q as Overview,Z as Playground,$ as Scrolled,X as __namedExportsOrder,B as default};