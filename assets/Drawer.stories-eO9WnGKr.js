import{i as e}from"./preload-helper-xPQekRTU.js";import{Ct as t,Gt as n,It as r,Lt as i,Ot as a,Q as o,Ut as s,V as c,bt as l,et as u,kt as d,o as f,qt as p,t as m,ut as h,xt as g}from"./iframe-CIRq0HXM.js";import{i as _,n as v,r as y,t as b}from"./create-runtime-stories-7PQW_Jro.js";import{n as x,t as S}from"./Button-DyhrVrmZ.js";import{H as C,It as w,b as T,t as E}from"./icons-BD3KpF_Q.js";import{n as D,t as O}from"./Card-CnovqAYU.js";import{n as k,t as A}from"./Drawer-CZYENWHT.js";import{n as j,t as M}from"./Header-a0bKY5LU.js";import{n as N,t as P}from"./List-D0sKphMm.js";function F(e,u){i(u,!0);function p(e,t){I.getChannel().emit(`updateStoryArgs`,{storyId:e,updatedArgs:{open:t}})}let m=d(!1),_=Array.from({length:12},(e,t)=>({id:`w${t+1}`,title:`Workout ${t+1}`,subtitle:`${30+t*5}:00`}));var v=K(),y=g(v);H(y,{name:`Playground`,args:{open:!0,title:`Title`,onClose:()=>{}},template:(e,r=n,i=n)=>{var a=K(),u=g(a);A(u,f(r,{onClose:()=>p(i().id,!1),get footer(){return B},children:(e,t)=>{var n=W();P(l(n),{get items(){return _},onItemClick:()=>{}}),s(n),o(e,n)},$$slots:{default:!0}}));var d=t(u,2),m=e=>{var t=G();S(l(t),{label:`Open drawer`,kind:`primary`,size:`large`,onclick:()=>p(i().id,!0)}),s(t),o(e,t)};c(d,e=>{r().open||e(m)}),o(e,a)},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: the drawer wired to controls; close writes back to the arg.`}},__svelteCsf:{rawCode:`<Drawer {...args} onClose={() => setOpen(context.id, false)} {footer}>
  <div class="flex flex-col gap-2xs px-2xs">
    <List items={workouts} onItemClick={() => {}} />
  </div>
</Drawer>
{#if !args.open}
  <div class="flex h-screen items-center justify-center bg-layer-background">
    <Button label="Open drawer" kind="primary" size="large" onclick={() => setOpen(context.id, true)} />
  </div>
{/if}`}}}),H(t(y,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: drawer over a realistic page - open it via the header's menu button
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
</div>`}},children:(e,n)=>{var r=q(),i=l(r);M(i,{title:`Workouts`,right:e=>{S(e,{kind:`icon`,size:`large`,get icon(){return L},"aria-label":`Menu`,onclick:()=>a(m,!0)})},$$slots:{right:!0}});var c=t(i,2),u=l(c);O(u,{title:`Storm 50`,duration:`50:00`,onclick:()=>{}}),O(t(u,2),{title:`HIIT Bootcamp`,duration:`45:00`,onclick:()=>{}}),s(c),A(t(c,2),{get open(){return h(m)},onClose:()=>a(m,!1),title:`Title`,get footer(){return B},children:(e,t)=>{var n=W();P(l(n),{get items(){return _},onItemClick:()=>{}}),s(n),o(e,n)},$$slots:{default:!0}}),s(r),o(e,r)},$$slots:{default:!0}}),o(e,v),r()}var I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z;e((()=>{p(),_(),k(),m(),x(),D(),j(),N(),E(),v(),{addons:I}=__STORYBOOK_MODULE_PREVIEW_API__,L=e=>{C(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},R=e=>{w(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},z=e=>{T(e,{class:`size-full text-layer-error`,stroke:1.5,"aria-hidden":`true`})},B=e=>{var n=U(),r=t(g(n),2),i=l(r);S(i,{kind:`icon`,size:`large`,get icon(){return R},"aria-label":`Settings`,onclick:()=>{}}),S(t(i,2),{kind:`icon`,size:`large`,get icon(){return z},"aria-label":`Power`,onclick:()=>{}}),s(r),o(e,n)},V={title:`lib/components/Drawer`,component:A,parameters:{layout:`fullscreen`},argTypes:{open:{control:`boolean`},title:{control:`text`},ariaLabel:{control:`text`},closeAriaLabel:{control:`text`}}},{Story:H}=y(V),U=u(`<span class="pointer-events-auto relative text-label text-text">v.1.0</span> <div class="pointer-events-auto relative flex items-center gap-2xs"><!> <!></div>`,1),W=u(`<div class="flex flex-col gap-2xs px-2xs"><!></div>`),G=u(`<div class="flex h-screen items-center justify-center bg-layer-background"><!></div>`),K=u(`<!> <!>`,1),q=u(`<div class="relative h-screen overflow-hidden bg-layer-background"><!> <div class="flex gap-s px-m pt-24"><!> <!></div> <!></div>`),F.__docgen={data:[],name:`Drawer.stories.svelte`},J=b(F,V),Y=[`Playground`,`Overview`],X={...J.Playground,tags:[`svelte-csf-v5`]},Z={...J.Overview,tags:[`svelte-csf-v5`]}}))();export{Z as Overview,X as Playground,Y as __namedExportsOrder,V as default};