import{i as e}from"./preload-helper-xPQekRTU.js";import{Et as t,Ht as n,Jt as r,Nt as i,Ot as a,Pt as o,Qt as s,Tt as c,Vt as l,W as ee,Xt as u,k as d,o as f,pt as te,rt as p,t as m,tt as h}from"./iframe-CqKaL9qy.js";import{a as g,i as _,n as v,o as y,r as b,t as ne}from"./create-runtime-stories-nh7LVcxx.js";import{n as re,t as x}from"./Button-CcH2hPDI.js";import{H as S,It as C,b as w,t as T}from"./icons-DHUDxj-0.js";import{n as E,t as D}from"./Card-C5VBEW_J.js";import{n as O,t as k}from"./Drawer-B3tZQsqJ.js";import{n as A,t as j}from"./Header-fPa7o7Jt.js";import{n as M,t as N}from"./List-DU_Ldh6H.js";function P(e,s){n(s,!0);function p(e,t){F.getChannel().emit(`updateStoryArgs`,{storyId:e,updatedArgs:{open:t}})}let m=o(!1);function g(e){let t=e.parentElement;t&&requestAnimationFrame(()=>{t.scrollTop=(t.scrollHeight-t.clientHeight)/2})}let _=Array.from({length:12},(e,t)=>({id:`w${t+1}`,title:`Workout ${t+1}`,subtitle:`${30+t*5}:00`}));var v=J(),y=t(v);V(y,{name:`Playground`,args:{open:!0,title:`Title`,onClose:()=>{}},template:(e,n=u,i=u)=>{var o=G(),s=t(o);k(s,f(n,{onClose:()=>p(i().id,!1),get footer(){return z},children:(e,t)=>{var n=U();N(c(n),{get items(){return _},onItemClick:()=>{}}),r(n),h(e,n)},$$slots:{default:!0}}));var l=a(s,2),d=e=>{var t=W();x(c(t),{label:`Open drawer`,kind:`primary`,size:`large`,onclick:()=>p(i().id,!0)}),r(t),h(e,t)};ee(l,e=>{n().open||e(d)}),h(e,o)},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: the drawer wired to controls; close writes back to the arg.`}},__svelteCsf:{rawCode:`<Drawer {...args} onClose={() => setOpen(context.id, false)} {footer}>
  <div class="flex flex-col gap-2xs px-2xs">
    <List items={workouts} onItemClick={() => {}} />
  </div>
</Drawer>
{#if !args.open}
  <div class="flex h-screen items-center justify-center bg-layer-background">
    <Button label="Open drawer" kind="primary" size="large" onclick={() => setOpen(context.id, true)} />
  </div>
{/if}`}}});var b=a(y,2);V(b,{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: drawer over a realistic page - open it via the header's menu button
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
</div>`}},children:(e,t)=>{var n=K(),o=c(n);j(o,{title:`Workouts`,right:e=>{x(e,{kind:`ghost-light`,size:`large`,get icon(){return I},"aria-label":`Menu`,onclick:()=>i(m,!0)})},$$slots:{right:!0}});var s=a(o,2),l=c(s);D(l,{title:`Storm 50`,duration:`50:00`,onclick:()=>{}}),D(a(l,2),{title:`HIIT Bootcamp`,duration:`45:00`,onclick:()=>{}}),r(s),k(a(s,2),{get open(){return te(m)},onClose:()=>i(m,!1),title:`Title`,get footer(){return z},children:(e,t)=>{var n=U();N(c(n),{get items(){return _},onItemClick:()=>{}}),r(n),h(e,n)},$$slots:{default:!0}}),r(n),h(e,n)},$$slots:{default:!0}}),V(a(b,2),{name:`Scrolled`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Scrolled: body scrolled to the middle, so the list runs under the title row and
    the footer and both blur fades are visible at once.`}},__svelteCsf:{rawCode:`<div class="relative h-screen overflow-hidden bg-layer-background">
  <Drawer open onClose={() => {}} title="Title" {footer}>
    <div class="flex flex-col gap-2xs px-2xs" use:scrollBodyToMiddle>
      <List items={workouts} onItemClick={() => {}} />
    </div>
  </Drawer>
</div>`}},children:(e,t)=>{var n=q();k(c(n),{open:!0,onClose:()=>{},title:`Title`,get footer(){return z},children:(e,t)=>{var n=U();N(c(n),{get items(){return _},onItemClick:()=>{}}),r(n),d(n,e=>g?.(e)),h(e,n)},$$slots:{default:!0}}),r(n),h(e,n)},$$slots:{default:!0}}),h(e,v),l()}var F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{s(),y(),_(),O(),m(),re(),E(),A(),M(),T(),v(),{addons:F}=__STORYBOOK_MODULE_PREVIEW_API__,I=e=>{S(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},L=e=>{C(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},R=e=>{w(e,{class:`size-full text-layer-error`,stroke:1.5,"aria-hidden":`true`})},z=e=>{var n=H(),i=a(t(n),2),o=c(i);x(o,{kind:`ghost-light`,size:`large`,get icon(){return L},"aria-label":`Settings`,onclick:()=>{}}),x(a(o,2),{kind:`ghost-light`,size:`large`,get icon(){return R},"aria-label":`Power`,onclick:()=>{}}),r(i),h(e,n)},B={title:`lib/components/Drawer`,component:k,parameters:{layout:`fullscreen`,design:b(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=390-839`)},argTypes:{open:{control:`boolean`},title:{control:`text`},ariaLabel:{control:`text`},closeAriaLabel:{control:`text`}}},{Story:V}=g(B),H=p(`<span class="pointer-events-auto relative text-label text-text">v.1.0</span> <div class="pointer-events-auto relative flex items-center gap-2xs"><!> <!></div>`,1),U=p(`<div class="flex flex-col gap-2xs px-2xs"><!></div>`),W=p(`<div class="flex h-screen items-center justify-center bg-layer-background"><!></div>`),G=p(`<!> <!>`,1),K=p(`<div class="relative h-screen overflow-hidden bg-layer-background"><!> <div class="flex gap-s px-m pt-24"><!> <!></div> <!></div>`),q=p(`<div class="relative h-screen overflow-hidden bg-layer-background"><!></div>`),J=p(`<!> <!> <!>`,1),P.__docgen={data:[],name:`Drawer.stories.svelte`},Y=ne(P,B),X=[`Playground`,`Overview`,`Scrolled`],Z={...Y.Playground,tags:[`svelte-csf-v5`]},Q={...Y.Overview,tags:[`svelte-csf-v5`]},$={...Y.Scrolled,tags:[`svelte-csf-v5`]}}))();export{Q as Overview,Z as Playground,$ as Scrolled,X as __namedExportsOrder,B as default};