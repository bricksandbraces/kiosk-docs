import{i as e}from"./preload-helper-xPQekRTU.js";import{At as t,Dt as n,Ft as r,It as i,K as a,Ot as o,Qt as s,Ut as c,Wt as l,Xt as u,at as d,en as f,ht as p,j as m,o as ee,rt as h,t as g}from"./iframe-CJEdpsI_.js";import{i as _,n as v,r as y,t as b}from"./create-runtime-stories-B5_Q70uc.js";import{n as x,t as S}from"./figmaDesign-BuxWJBGH.js";import{r as te,t as C}from"./Button-QWGOuHI3.js";import{H as ne,It as re,b as w,t as T}from"./icons-CW_PmnZX.js";import{n as E,t as D}from"./Card-DimvZrI5.js";import{n as O,t as k}from"./Drawer-AaLthO6T.js";import{n as A,t as j}from"./Header-CFNV0_Ys.js";import{n as M,t as N}from"./List-smrUPnbO.js";function P(e,d){l(d,!0);function f(e,t){F.getChannel().emit(`updateStoryArgs`,{storyId:e,updatedArgs:{open:t}})}let g=i(!1);function _(e){let t=e.parentElement;t&&requestAnimationFrame(()=>{t.scrollTop=(t.scrollHeight-t.clientHeight)/2})}let v=Array.from({length:12},(e,t)=>({id:`w${t+1}`,title:`Workout ${t+1}`,subtitle:`${30+t*5}:00`}));var y=J(),b=o(y);V(b,{name:`Playground`,args:{open:!0,title:`Title`,onClose:()=>{}},template:(e,r=s,i=s)=>{var c=G(),l=o(c);k(l,ee(r,{onClose:()=>f(i().id,!1),get footer(){return z},children:(e,t)=>{var r=U();N(n(r),{get items(){return v},onItemClick:()=>{}}),u(r),h(e,r)},$$slots:{default:!0}}));var d=t(l,2),p=e=>{var t=W();C(n(t),{label:`Open drawer`,kind:`primary`,size:`large`,onclick:()=>f(i().id,!0)}),u(t),h(e,t)};a(d,e=>{r().open||e(p)}),h(e,c)},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: the drawer wired to controls; close writes back to the arg.`}},__svelteCsf:{rawCode:`<Drawer {...args} onClose={() => setOpen(context.id, false)} {footer}>
  <div class="flex flex-col gap-2xs px-2xs">
    <List items={workouts} onItemClick={() => {}} />
  </div>
</Drawer>
{#if !args.open}
  <div class="flex h-screen items-center justify-center bg-layer-background">
    <Button label="Open drawer" kind="primary" size="large" onclick={() => setOpen(context.id, true)} />
  </div>
{/if}`}}});var x=t(b,2);V(x,{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: drawer over a realistic page - open it via the header's menu button
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
</div>`}},children:(e,i)=>{var a=K(),o=n(a);j(o,{title:`Workouts`,right:e=>{C(e,{kind:`ghost-light`,size:`large`,get icon(){return I},"aria-label":`Menu`,onclick:()=>r(g,!0)})},$$slots:{right:!0}});var s=t(o,2),c=n(s);D(c,{title:`Storm 50`,duration:`50:00`,onclick:()=>{}}),D(t(c,2),{title:`HIIT Bootcamp`,duration:`45:00`,onclick:()=>{}}),u(s),k(t(s,2),{get open(){return p(g)},onClose:()=>r(g,!1),title:`Title`,get footer(){return z},children:(e,t)=>{var r=U();N(n(r),{get items(){return v},onItemClick:()=>{}}),u(r),h(e,r)},$$slots:{default:!0}}),u(a),h(e,a)},$$slots:{default:!0}}),V(t(x,2),{name:`Scrolled`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Scrolled: body scrolled to the middle, so the list runs under the title row and
    the footer and both blur fades are visible at once.`}},__svelteCsf:{rawCode:`<div class="relative h-screen overflow-hidden bg-layer-background">
  <Drawer open onClose={() => {}} title="Title" {footer}>
    <div class="flex flex-col gap-2xs px-2xs" use:scrollBodyToMiddle>
      <List items={workouts} onItemClick={() => {}} />
    </div>
  </Drawer>
</div>`}},children:(e,t)=>{var r=q();k(n(r),{open:!0,onClose:()=>{},title:`Title`,get footer(){return z},children:(e,t)=>{var r=U();N(n(r),{get items(){return v},onItemClick:()=>{}}),u(r),m(r,e=>_?.(e)),h(e,r)},$$slots:{default:!0}}),u(r),h(e,r)},$$slots:{default:!0}}),h(e,y),c()}var F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),_(),x(),O(),g(),te(),E(),A(),M(),T(),v(),{addons:F}=__STORYBOOK_MODULE_PREVIEW_API__,I=e=>{ne(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},L=e=>{re(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},R=e=>{w(e,{class:`size-full text-layer-error`,stroke:1.5,"aria-hidden":`true`})},z=e=>{var r=H(),i=t(o(r),2),a=n(i);C(a,{kind:`ghost-light`,size:`large`,get icon(){return L},"aria-label":`Settings`,onclick:()=>{}}),C(t(a,2),{kind:`ghost-light`,size:`large`,get icon(){return R},"aria-label":`Power`,onclick:()=>{}}),u(i),h(e,r)},B={title:`lib/components/Drawer`,component:k,parameters:{layout:`fullscreen`,design:S(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=390-839`)},argTypes:{open:{control:`boolean`},title:{control:`text`},ariaLabel:{control:`text`},closeAriaLabel:{control:`text`}}},{Story:V}=y(B),H=d(`<span class="pointer-events-auto relative typography-label-regular text-text">v.1.0</span> <div class="pointer-events-auto relative flex items-center gap-2xs"><!> <!></div>`,1),U=d(`<div class="flex flex-col gap-2xs px-2xs"><!></div>`),W=d(`<div class="flex h-screen items-center justify-center bg-layer-background"><!></div>`),G=d(`<!> <!>`,1),K=d(`<div class="relative h-screen overflow-hidden bg-layer-background"><!> <div class="flex gap-s px-m pt-24"><!> <!></div> <!></div>`),q=d(`<div class="relative h-screen overflow-hidden bg-layer-background"><!></div>`),J=d(`<!> <!> <!>`,1),P.__docgen={data:[],name:`Drawer.stories.svelte`},Y=b(P,B),X=[`Playground`,`Overview`,`Scrolled`],Z={...Y.Playground,tags:[`svelte-csf-v5`]},Q={...Y.Overview,tags:[`svelte-csf-v5`]},$={...Y.Scrolled,tags:[`svelte-csf-v5`]}}))();export{Q as Overview,Z as Playground,$ as Scrolled,X as __namedExportsOrder,B as default};