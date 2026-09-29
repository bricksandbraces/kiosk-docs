import{i as e}from"./preload-helper-xPQekRTU.js";import{Bt as t,Dt as n,Mt as r,Nt as i,O as a,Tt as o,U as s,Vt as c,Yt as l,Zt as u,et as d,ft as ee,nt as f,o as p,qt as m,t as h,wt as g}from"./iframe-ClsN2qb4.js";import{a as _,i as v,n as y,o as b,r as x,t as te}from"./create-runtime-stories-BSNMR_ti.js";import{r as ne,t as S}from"./Button-DAKNsvpm.js";import{H as re,It as C,b as w,t as T}from"./icons-CpugNAUq.js";import{n as E,t as D}from"./Card-D_xOg4s7.js";import{n as O,t as k}from"./Drawer-Cn1-CXOz.js";import{n as A,t as j}from"./Header-Ujglf0xR.js";import{n as M,t as N}from"./List-D7mHBaEj.js";function P(e,u){c(u,!0);function f(e,t){F.getChannel().emit(`updateStoryArgs`,{storyId:e,updatedArgs:{open:t}})}let h=i(!1);function _(e){let t=e.parentElement;t&&requestAnimationFrame(()=>{t.scrollTop=(t.scrollHeight-t.clientHeight)/2})}let v=Array.from({length:12},(e,t)=>({id:`w${t+1}`,title:`Workout ${t+1}`,subtitle:`${30+t*5}:00`}));var y=J(),b=o(y);V(b,{name:`Playground`,args:{open:!0,title:`Title`,onClose:()=>{}},template:(e,t=l,r=l)=>{var i=G(),a=o(i);k(a,p(t,{onClose:()=>f(r().id,!1),get footer(){return z},children:(e,t)=>{var n=U();N(g(n),{get items(){return v},onItemClick:()=>{}}),m(n),d(e,n)},$$slots:{default:!0}}));var c=n(a,2),u=e=>{var t=W();S(g(t),{label:`Open drawer`,kind:`primary`,size:`large`,onclick:()=>f(r().id,!0)}),m(t),d(e,t)};s(c,e=>{t().open||e(u)}),d(e,i)},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: the drawer wired to controls; close writes back to the arg.`}},__svelteCsf:{rawCode:`<Drawer {...args} onClose={() => setOpen(context.id, false)} {footer}>
  <div class="flex flex-col gap-2xs px-2xs">
    <List items={workouts} onItemClick={() => {}} />
  </div>
</Drawer>
{#if !args.open}
  <div class="flex h-screen items-center justify-center bg-layer-background">
    <Button label="Open drawer" kind="primary" size="large" onclick={() => setOpen(context.id, true)} />
  </div>
{/if}`}}});var x=n(b,2);V(x,{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: drawer over a realistic page - open it via the header's menu button
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
</div>`}},children:(e,t)=>{var i=K(),a=g(i);j(a,{title:`Workouts`,right:e=>{S(e,{kind:`icon`,size:`large`,get icon(){return I},"aria-label":`Menu`,onclick:()=>r(h,!0)})},$$slots:{right:!0}});var o=n(a,2),s=g(o);D(s,{title:`Storm 50`,duration:`50:00`,onclick:()=>{}}),D(n(s,2),{title:`HIIT Bootcamp`,duration:`45:00`,onclick:()=>{}}),m(o),k(n(o,2),{get open(){return ee(h)},onClose:()=>r(h,!1),title:`Title`,get footer(){return z},children:(e,t)=>{var n=U();N(g(n),{get items(){return v},onItemClick:()=>{}}),m(n),d(e,n)},$$slots:{default:!0}}),m(i),d(e,i)},$$slots:{default:!0}}),V(n(x,2),{name:`Scrolled`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Scrolled: body scrolled to the middle, so the list runs under the title row and
    the footer and both blur fades are visible at once.`}},__svelteCsf:{rawCode:`<div class="relative h-screen overflow-hidden bg-layer-background">
  <Drawer open onClose={() => {}} title="Title" {footer}>
    <div class="flex flex-col gap-2xs px-2xs" use:scrollBodyToMiddle>
      <List items={workouts} onItemClick={() => {}} />
    </div>
  </Drawer>
</div>`}},children:(e,t)=>{var n=q();k(g(n),{open:!0,onClose:()=>{},title:`Title`,get footer(){return z},children:(e,t)=>{var n=U();N(g(n),{get items(){return v},onItemClick:()=>{}}),m(n),a(n,e=>_?.(e)),d(e,n)},$$slots:{default:!0}}),m(n),d(e,n)},$$slots:{default:!0}}),d(e,y),t()}var F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),b(),v(),O(),h(),ne(),E(),A(),M(),T(),y(),{addons:F}=__STORYBOOK_MODULE_PREVIEW_API__,I=e=>{re(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},L=e=>{C(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},R=e=>{w(e,{class:`size-full text-layer-error`,stroke:1.5,"aria-hidden":`true`})},z=e=>{var t=H(),r=n(o(t),2),i=g(r);S(i,{kind:`icon`,size:`large`,get icon(){return L},"aria-label":`Settings`,onclick:()=>{}}),S(n(i,2),{kind:`icon`,size:`large`,get icon(){return R},"aria-label":`Power`,onclick:()=>{}}),m(r),d(e,t)},B={title:`lib/components/Drawer`,component:k,parameters:{layout:`fullscreen`,design:x(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=390-839`)},argTypes:{open:{control:`boolean`},title:{control:`text`},ariaLabel:{control:`text`},closeAriaLabel:{control:`text`}}},{Story:V}=_(B),H=f(`<span class="pointer-events-auto relative text-label text-text">v.1.0</span> <div class="pointer-events-auto relative flex items-center gap-2xs"><!> <!></div>`,1),U=f(`<div class="flex flex-col gap-2xs px-2xs"><!></div>`),W=f(`<div class="flex h-screen items-center justify-center bg-layer-background"><!></div>`),G=f(`<!> <!>`,1),K=f(`<div class="relative h-screen overflow-hidden bg-layer-background"><!> <div class="flex gap-s px-m pt-24"><!> <!></div> <!></div>`),q=f(`<div class="relative h-screen overflow-hidden bg-layer-background"><!></div>`),J=f(`<!> <!> <!>`,1),P.__docgen={data:[],name:`Drawer.stories.svelte`},Y=te(P,B),X=[`Playground`,`Overview`,`Scrolled`],Z={...Y.Playground,tags:[`svelte-csf-v5`]},Q={...Y.Overview,tags:[`svelte-csf-v5`]},$={...Y.Scrolled,tags:[`svelte-csf-v5`]}}))();export{Q as Overview,Z as Playground,$ as Scrolled,X as __namedExportsOrder,B as default};