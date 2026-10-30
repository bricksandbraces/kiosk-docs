import{i as e}from"./preload-helper-xPQekRTU.js";import{$t as t,Ft as n,Ht as r,Lt as i,M as a,Pt as o,Ut as s,Z as c,cn as l,ct as u,en as d,fn as f,gn as p,o as m,t as h,ut as g,xt as _}from"./iframe-DAvVgQmA.js";import{i as v,n as y,r as b,t as x}from"./create-runtime-stories-MYMmznb2.js";import{R as S,bn as ee,ut as te}from"./tabler-icons-svelte-BWN9knKs.js";import{n as ne,t as re}from"./figmaDesign-BuxWJBGH.js";import{t as C}from"./icons-pBUb-Ryo.js";import{r as w,t as T}from"./Button-B2BDCmRl.js";import{n as E,t as D}from"./Card-bxICgdTn.js";import{n as O,t as k}from"./Drawer-CaJXV5SO.js";import{n as A,t as j}from"./Header-ySTnQSIm.js";import{n as M,t as N}from"./List-DcEpGkzz.js";function P(e,p){d(p,!0);function h(e,t){F.getChannel().emit(`updateStoryArgs`,{storyId:e,updatedArgs:{open:t}})}let g=s(!1);function v(e){let t=e.parentElement;t&&requestAnimationFrame(()=>{t.scrollTop=(t.scrollHeight-t.clientHeight)/2})}let y=Array.from({length:12},(e,t)=>({id:`w${t+1}`,title:`Workout ${t+1}`,subtitle:`${30+t*5}:00`}));var b=J(),x=n(b);V(x,{name:`Playground`,args:{open:!0,title:`Title`,onClose:()=>{}},template:(e,t=f,r=f)=>{var a=G(),s=n(a);k(s,m(t,{onClose:()=>h(r().id,!1),get footer(){return z},children:(e,t)=>{var n=U();N(o(n),{get items(){return y},onItemClick:()=>{}}),l(n),u(e,n)},$$slots:{default:!0}}));var d=i(s,2),p=e=>{var t=W();T(o(t),{label:`Open drawer`,kind:`primary`,size:`large`,onclick:()=>h(r().id,!0)}),l(t),u(e,t)};c(d,e=>{t().open||e(p)}),u(e,a)},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: the drawer wired to controls; close writes back to the arg.`}},__svelteCsf:{rawCode:`<Drawer {...args} onClose={() => setOpen(context.id, false)} {footer}>
  <div class="flex flex-col gap-2xs px-2xs">
    <List items={workouts} onItemClick={() => {}} />
  </div>
</Drawer>
{#if !args.open}
  <div class="flex h-screen items-center justify-center bg-layer-background">
    <Button label="Open drawer" kind="primary" size="large" onclick={() => setOpen(context.id, true)} />
  </div>
{/if}`}}});var S=i(x,2);V(S,{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: drawer over a realistic page - open it via the header's menu button
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
</div>`}},children:(e,t)=>{var n=K(),a=o(n);j(a,{title:`Workouts`,right:e=>{T(e,{kind:`ghost-light`,size:`large`,get icon(){return I},"aria-label":`Menu`,onclick:()=>r(g,!0)})},$$slots:{right:!0}});var s=i(a,2),c=o(s);D(c,{title:`Storm 50`,duration:`50:00`,onclick:()=>{}}),D(i(c,2),{title:`HIIT Bootcamp`,duration:`45:00`,onclick:()=>{}}),l(s),k(i(s,2),{get open(){return _(g)},onClose:()=>r(g,!1),title:`Title`,get footer(){return z},children:(e,t)=>{var n=U();N(o(n),{get items(){return y},onItemClick:()=>{}}),l(n),u(e,n)},$$slots:{default:!0}}),l(n),u(e,n)},$$slots:{default:!0}}),V(i(S,2),{name:`Scrolled`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Scrolled: body scrolled to the middle, so the list runs under the title row and
    the footer and both blur fades are visible at once.`}},__svelteCsf:{rawCode:`<div class="relative h-screen overflow-hidden bg-layer-background">
  <Drawer open onClose={() => {}} title="Title" {footer}>
    <div class="flex flex-col gap-2xs px-2xs" use:scrollBodyToMiddle>
      <List items={workouts} onItemClick={() => {}} />
    </div>
  </Drawer>
</div>`}},children:(e,t)=>{var n=q();k(o(n),{open:!0,onClose:()=>{},title:`Title`,get footer(){return z},children:(e,t)=>{var n=U();N(o(n),{get items(){return y},onItemClick:()=>{}}),l(n),a(n,e=>v?.(e)),u(e,n)},$$slots:{default:!0}}),l(n),u(e,n)},$$slots:{default:!0}}),u(e,b),t()}var F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),v(),ne(),O(),h(),w(),E(),A(),M(),C(),y(),{addons:F}=__STORYBOOK_MODULE_PREVIEW_API__,I=e=>{te(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},L=e=>{ee(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},R=e=>{S(e,{class:`size-full text-layer-error`,stroke:1.5,"aria-hidden":`true`})},z=e=>{var t=H(),r=i(n(t),2),a=o(r);T(a,{kind:`ghost-light`,size:`large`,get icon(){return L},"aria-label":`Settings`,onclick:()=>{}}),T(i(a,2),{kind:`ghost-light`,size:`large`,get icon(){return R},"aria-label":`Power`,onclick:()=>{}}),l(r),u(e,t)},B={title:`lib/components/Drawer`,component:k,parameters:{layout:`fullscreen`,design:re(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=390-839`)},argTypes:{open:{control:`boolean`},title:{control:`text`},ariaLabel:{control:`text`},closeAriaLabel:{control:`text`}}},{Story:V}=b(B),H=g(`<span class="pointer-events-auto relative typography-label-regular text-text">v.1.0</span> <div class="pointer-events-auto relative flex items-center gap-2xs"><!> <!></div>`,1),U=g(`<div class="flex flex-col gap-2xs px-2xs"><!></div>`),W=g(`<div class="flex h-screen items-center justify-center bg-layer-background"><!></div>`),G=g(`<!> <!>`,1),K=g(`<div class="relative h-screen overflow-hidden bg-layer-background"><!> <div class="flex gap-s px-m pt-24"><!> <!></div> <!></div>`),q=g(`<div class="relative h-screen overflow-hidden bg-layer-background"><!></div>`),J=g(`<!> <!> <!>`,1),P.__docgen={data:[],name:`Drawer.stories.svelte`},Y=x(P,B),X=[`Playground`,`Overview`,`Scrolled`],Z={...Y.Playground,tags:[`svelte-csf-v5`]},Q={...Y.Overview,tags:[`svelte-csf-v5`]},$={...Y.Scrolled,tags:[`svelte-csf-v5`]}}))();export{Q as Overview,Z as Playground,$ as Scrolled,X as __namedExportsOrder,B as default};