import{i as e}from"./preload-helper-xPQekRTU.js";import{Bt as t,Et as n,Ht as r,Nt as i,Pt as a,Q as o,Tt as s,V as c,Wt as l,_t as u,bt as d,et as f,lt as p,o as m,t as h,vt as g}from"./iframe-BlH5bPBd.js";import{i as _,n as v,r as y,t as b}from"./create-runtime-stories-BqLUoeIS.js";import{n as x,t as S}from"./Button-BRZlexI0.js";import{H as C,It as w,b as T,t as E}from"./icons-_JpRgg3j.js";import{n as D,t as O}from"./Card-BTmUBaYc.js";import{n as k,t as A}from"./Drawer-DM0smf-g.js";import{n as j,t as M}from"./Header-e_OETsfH.js";import{n as N,t as P}from"./List-dDi8yN6F.js";function F(e,l){a(l,!0);function f(e,t){I.getChannel().emit(`updateStoryArgs`,{storyId:e,updatedArgs:{open:t}})}let h=n(!1),_=Array.from({length:12},(e,t)=>({id:`w${t+1}`,title:`Workout ${t+1}`,subtitle:`${30+t*5}:00`}));var v=K(),y=g(v);H(y,{name:`Playground`,args:{open:!0,title:`Title`,onClose:()=>{}},template:(e,n=r,i=r)=>{var a=K(),s=g(a);A(s,m(n,{onClose:()=>f(i().id,!1),get footer(){return B},children:(e,n)=>{var r=W();P(u(r),{get items(){return _},onItemClick:()=>{}}),t(r),o(e,r)},$$slots:{default:!0}}));var l=d(s,2),p=e=>{var n=G();S(u(n),{label:`Open drawer`,kind:`primary`,size:`large`,onclick:()=>f(i().id,!0)}),t(n),o(e,n)};c(l,e=>{n().open||e(p)}),o(e,a)},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: the drawer wired to controls; close writes back to the arg.`}},__svelteCsf:{rawCode:`<Drawer {...args} onClose={() => setOpen(context.id, false)} {footer}>
  <div class="flex flex-col gap-2xs px-2xs">
    <List items={workouts} onItemClick={() => {}} />
  </div>
</Drawer>
{#if !args.open}
  <div class="flex h-screen items-center justify-center bg-layer-background">
    <Button label="Open drawer" kind="primary" size="large" onclick={() => setOpen(context.id, true)} />
  </div>
{/if}`}}}),H(d(y,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: drawer over a realistic page - open it via the header's menu button
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
</div>`}},children:(e,n)=>{var r=q(),i=u(r);M(i,{title:`Workouts`,right:e=>{S(e,{kind:`icon`,size:`large`,get icon(){return L},"aria-label":`Menu`,onclick:()=>s(h,!0)})},$$slots:{right:!0}});var a=d(i,2),c=u(a);O(c,{title:`Storm 50`,duration:`50:00`,onclick:()=>{}}),O(d(c,2),{title:`HIIT Bootcamp`,duration:`45:00`,onclick:()=>{}}),t(a),A(d(a,2),{get open(){return p(h)},onClose:()=>s(h,!1),title:`Title`,get footer(){return B},children:(e,n)=>{var r=W();P(u(r),{get items(){return _},onItemClick:()=>{}}),t(r),o(e,r)},$$slots:{default:!0}}),t(r),o(e,r)},$$slots:{default:!0}}),o(e,v),i()}var I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z;e((()=>{l(),_(),k(),h(),x(),D(),j(),N(),E(),v(),{addons:I}=__STORYBOOK_MODULE_PREVIEW_API__,L=e=>{C(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},R=e=>{w(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},z=e=>{T(e,{class:`size-full text-layer-error`,stroke:1.5,"aria-hidden":`true`})},B=e=>{var n=U(),r=d(g(n),2),i=u(r);S(i,{kind:`icon`,size:`large`,get icon(){return R},"aria-label":`Settings`,onclick:()=>{}}),S(d(i,2),{kind:`icon`,size:`large`,get icon(){return z},"aria-label":`Power`,onclick:()=>{}}),t(r),o(e,n)},V={title:`lib/components/Drawer`,component:A,parameters:{layout:`fullscreen`},argTypes:{open:{control:`boolean`},title:{control:`text`},ariaLabel:{control:`text`},closeAriaLabel:{control:`text`}}},{Story:H}=y(V),U=f(`<span class="pointer-events-auto relative text-label text-text">v.1.0</span> <div class="pointer-events-auto relative flex items-center gap-2xs"><!> <!></div>`,1),W=f(`<div class="flex flex-col gap-2xs px-2xs"><!></div>`),G=f(`<div class="flex h-screen items-center justify-center bg-layer-background"><!></div>`),K=f(`<!> <!>`,1),q=f(`<div class="relative h-screen overflow-hidden bg-layer-background"><!> <div class="flex gap-s px-m pt-24"><!> <!></div> <!></div>`),F.__docgen={data:[],name:`Drawer.stories.svelte`},J=b(F,V),Y=[`Playground`,`Overview`],X={...J.Playground,tags:[`svelte-csf-v5`]},Z={...J.Overview,tags:[`svelte-csf-v5`]}}))();export{Z as Overview,X as Playground,Y as __namedExportsOrder,V as default};