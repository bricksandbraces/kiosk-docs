import{i as e}from"./preload-helper-xPQekRTU.js";import{Ct as t,Gt as n,It as r,Lt as i,Ot as a,Q as o,Ut as s,V as c,bt as l,et as u,kt as d,o as f,qt as p,t as m,ut as h,xt as g}from"./iframe-Bz8DFIpJ.js";import{i as _,n as v,r as y,t as b}from"./create-runtime-stories-WnJfGviS.js";import{n as x,t as S}from"./figmaDesign-BuxWJBGH.js";import{n as C,t as w}from"./Button-CPq6jNWv.js";import{H as T,It as E,b as D,t as O}from"./icons-D0a2gJic.js";import{n as k,t as A}from"./Card-CjzDkwyB.js";import{n as j,t as M}from"./Drawer-GRnyO3lX.js";import{n as N,t as P}from"./Header-y_IYPKlE.js";import{n as F,t as I}from"./List-B4k5xg0Z.js";function L(e,u){i(u,!0);function p(e,t){R.getChannel().emit(`updateStoryArgs`,{storyId:e,updatedArgs:{open:t}})}let m=d(!1),_=Array.from({length:12},(e,t)=>({id:`w${t+1}`,title:`Workout ${t+1}`,subtitle:`${30+t*5}:00`}));var v=J(),y=g(v);W(y,{name:`Playground`,args:{open:!0,title:`Title`,onClose:()=>{}},template:(e,r=n,i=n)=>{var a=J(),u=g(a);M(u,f(r,{onClose:()=>p(i().id,!1),get footer(){return H},children:(e,t)=>{var n=K();I(l(n),{get items(){return _},onItemClick:()=>{}}),s(n),o(e,n)},$$slots:{default:!0}}));var d=t(u,2),m=e=>{var t=q();w(l(t),{label:`Open drawer`,kind:`primary`,size:`large`,onclick:()=>p(i().id,!0)}),s(t),o(e,t)};c(d,e=>{r().open||e(m)}),o(e,a)},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: the drawer wired to controls; close writes back to the arg.`}},__svelteCsf:{rawCode:`<Drawer {...args} onClose={() => setOpen(context.id, false)} {footer}>
  <div class="flex flex-col gap-2xs px-2xs">
    <List items={workouts} onItemClick={() => {}} />
  </div>
</Drawer>
{#if !args.open}
  <div class="flex h-screen items-center justify-center bg-layer-background">
    <Button label="Open drawer" kind="primary" size="large" onclick={() => setOpen(context.id, true)} />
  </div>
{/if}`}}}),W(t(y,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: drawer over a realistic page - open it via the header's menu button
    to verify the slide-in/out animation against real content, with a body long
    enough to scroll under the footer fade.`}},__svelteCsf:{rawCode:`<div class="relative h-screen overflow-hidden bg-layer-background">
  <Header title="Workouts">
    {#snippet right()}
      <Button kind="icon" size="large" icon={menuIcon} aria-label="Menu" onclick={() => (overviewOpen = true)} />
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
</div>`}},children:(e,n)=>{var r=Y(),i=l(r);P(i,{title:`Workouts`,right:e=>{w(e,{kind:`icon`,size:`large`,get icon(){return z},"aria-label":`Menu`,onclick:()=>a(m,!0)})},$$slots:{right:!0}});var c=t(i,2),u=l(c);A(u,{title:`Storm 50`,duration:`50:00`,onclick:()=>{}}),A(t(u,2),{title:`HIIT Bootcamp`,duration:`45:00`,onclick:()=>{}}),s(c),M(t(c,2),{get open(){return h(m)},onClose:()=>a(m,!1),title:`Title`,get footer(){return H},children:(e,t)=>{var n=K();I(l(n),{get items(){return _},onItemClick:()=>{}}),s(n),o(e,n)},$$slots:{default:!0}}),s(r),o(e,r)},$$slots:{default:!0}}),o(e,v),r()}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),_(),x(),j(),m(),C(),k(),N(),F(),O(),v(),{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,z=e=>{T(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},B=e=>{E(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},V=e=>{D(e,{class:`size-full text-layer-error`,stroke:1.5,"aria-hidden":`true`})},H=e=>{var n=G(),r=t(g(n),2),i=l(r);w(i,{kind:`icon`,size:`large`,get icon(){return B},"aria-label":`Settings`,onclick:()=>{}}),w(t(i,2),{kind:`icon`,size:`large`,get icon(){return V},"aria-label":`Power`,onclick:()=>{}}),s(r),o(e,n)},U={title:`lib/components/Drawer`,component:M,parameters:{layout:`fullscreen`,design:S(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=390-839`)},argTypes:{open:{control:`boolean`},title:{control:`text`},ariaLabel:{control:`text`},closeAriaLabel:{control:`text`}}},{Story:W}=y(U),G=u(`<span class="pointer-events-auto relative text-label text-text">v.1.0</span> <div class="pointer-events-auto relative flex items-center gap-2xs"><!> <!></div>`,1),K=u(`<div class="flex flex-col gap-2xs px-2xs"><!></div>`),q=u(`<div class="flex h-screen items-center justify-center bg-layer-background"><!></div>`),J=u(`<!> <!>`,1),Y=u(`<div class="relative h-screen overflow-hidden bg-layer-background"><!> <div class="flex gap-s px-m pt-24"><!> <!></div> <!></div>`),L.__docgen={data:[],name:`Drawer.stories.svelte`},X=b(L,U),Z=[`Playground`,`Overview`],Q={...X.Playground,tags:[`svelte-csf-v5`]},$={...X.Overview,tags:[`svelte-csf-v5`]}}))();export{$ as Overview,Q as Playground,Z as __namedExportsOrder,U as default};