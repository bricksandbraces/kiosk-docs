import{i as e}from"./preload-helper-xPQekRTU.js";import{Bt as t,Dt as n,Mt as r,Nt as i,Tt as a,U as o,Vt as s,Yt as c,Zt as l,et as u,ft as d,nt as f,o as p,qt as m,t as h,wt as g}from"./iframe-C3dnwlHJ.js";import{a as _,i as v,n as y,o as b,r as x,t as S}from"./create-runtime-stories-HZhsmac4.js";import{r as C,t as w}from"./Button-BGXiGwkj.js";import{H as T,It as E,b as D,t as O}from"./icons-B8qOoxRp.js";import{n as k,t as A}from"./Card-DIEjzz8A.js";import{n as j,t as M}from"./Drawer-B9M9A5mY.js";import{n as N,t as P}from"./Header-Diu1ijho.js";import{n as F,t as I}from"./List-D_u4Fkrt.js";function L(e,l){s(l,!0);function f(e,t){R.getChannel().emit(`updateStoryArgs`,{storyId:e,updatedArgs:{open:t}})}let h=i(!1),_=Array.from({length:12},(e,t)=>({id:`w${t+1}`,title:`Workout ${t+1}`,subtitle:`${30+t*5}:00`}));var v=J(),y=a(v);W(y,{name:`Playground`,args:{open:!0,title:`Title`,onClose:()=>{}},template:(e,t=c,r=c)=>{var i=J(),s=a(i);M(s,p(t,{onClose:()=>f(r().id,!1),get footer(){return H},children:(e,t)=>{var n=K();I(g(n),{get items(){return _},onItemClick:()=>{}}),m(n),u(e,n)},$$slots:{default:!0}}));var l=n(s,2),d=e=>{var t=q();w(g(t),{label:`Open drawer`,kind:`primary`,size:`large`,onclick:()=>f(r().id,!0)}),m(t),u(e,t)};o(l,e=>{t().open||e(d)}),u(e,i)},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: the drawer wired to controls; close writes back to the arg.`}},__svelteCsf:{rawCode:`<Drawer {...args} onClose={() => setOpen(context.id, false)} {footer}>
  <div class="flex flex-col gap-2xs px-2xs">
    <List items={workouts} onItemClick={() => {}} />
  </div>
</Drawer>
{#if !args.open}
  <div class="flex h-screen items-center justify-center bg-layer-background">
    <Button label="Open drawer" kind="primary" size="large" onclick={() => setOpen(context.id, true)} />
  </div>
{/if}`}}}),W(n(y,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: drawer over a realistic page - open it via the header's menu button
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
</div>`}},children:(e,t)=>{var i=Y(),a=g(i);P(a,{title:`Workouts`,right:e=>{w(e,{kind:`icon`,size:`large`,get icon(){return z},"aria-label":`Menu`,onclick:()=>r(h,!0)})},$$slots:{right:!0}});var o=n(a,2),s=g(o);A(s,{title:`Storm 50`,duration:`50:00`,onclick:()=>{}}),A(n(s,2),{title:`HIIT Bootcamp`,duration:`45:00`,onclick:()=>{}}),m(o),M(n(o,2),{get open(){return d(h)},onClose:()=>r(h,!1),title:`Title`,get footer(){return H},children:(e,t)=>{var n=K();I(g(n),{get items(){return _},onItemClick:()=>{}}),m(n),u(e,n)},$$slots:{default:!0}}),m(i),u(e,i)},$$slots:{default:!0}}),u(e,v),t()}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),b(),v(),j(),h(),C(),k(),N(),F(),O(),y(),{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,z=e=>{T(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},B=e=>{E(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},V=e=>{D(e,{class:`size-full text-layer-error`,stroke:1.5,"aria-hidden":`true`})},H=e=>{var t=G(),r=n(a(t),2),i=g(r);w(i,{kind:`icon`,size:`large`,get icon(){return B},"aria-label":`Settings`,onclick:()=>{}}),w(n(i,2),{kind:`icon`,size:`large`,get icon(){return V},"aria-label":`Power`,onclick:()=>{}}),m(r),u(e,t)},U={title:`lib/components/Drawer`,component:M,parameters:{layout:`fullscreen`,design:x(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=390-839`)},argTypes:{open:{control:`boolean`},title:{control:`text`},ariaLabel:{control:`text`},closeAriaLabel:{control:`text`}}},{Story:W}=_(U),G=f(`<span class="pointer-events-auto relative text-label text-text">v.1.0</span> <div class="pointer-events-auto relative flex items-center gap-2xs"><!> <!></div>`,1),K=f(`<div class="flex flex-col gap-2xs px-2xs"><!></div>`),q=f(`<div class="flex h-screen items-center justify-center bg-layer-background"><!></div>`),J=f(`<!> <!>`,1),Y=f(`<div class="relative h-screen overflow-hidden bg-layer-background"><!> <div class="flex gap-s px-m pt-24"><!> <!></div> <!></div>`),L.__docgen={data:[],name:`Drawer.stories.svelte`},X=S(L,U),Z=[`Playground`,`Overview`],Q={...X.Playground,tags:[`svelte-csf-v5`]},$={...X.Overview,tags:[`svelte-csf-v5`]}}))();export{$ as Overview,Q as Playground,Z as __namedExportsOrder,U as default};