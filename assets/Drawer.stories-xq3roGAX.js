import{i as e}from"./preload-helper-xPQekRTU.js";import{$t as t,Gt as n,It as r,Lt as i,M as a,Ot as o,Wt as s,Zt as c,gt as l,it as u,jt as d,kt as f,o as p,ot as m,q as ee,t as h,tn as g}from"./iframe-e34zNJdH.js";import{i as _,n as v,r as y,t as b}from"./create-runtime-stories-B1aUnR4m.js";import{n as x,t as S}from"./figmaDesign-BuxWJBGH.js";import{r as te,t as C}from"./Button-DyAdgMWV.js";import{H as ne,Rt as re,b as w,t as T}from"./icons-DlFWZfDL.js";import{n as E,t as D}from"./Card-CmBi4VJm.js";import{n as O,t as k}from"./Drawer-Bsj-PTxi.js";import{n as A,t as j}from"./Header-Dqiq7Yym.js";import{n as M,t as N}from"./List-jBqCT3z7.js";function P(e,m){n(m,!0);function h(e,t){F.getChannel().emit(`updateStoryArgs`,{storyId:e,updatedArgs:{open:t}})}let g=i(!1);function _(e){let t=e.parentElement;t&&requestAnimationFrame(()=>{t.scrollTop=(t.scrollHeight-t.clientHeight)/2})}let v=Array.from({length:12},(e,t)=>({id:`w${t+1}`,title:`Workout ${t+1}`,subtitle:`${30+t*5}:00`}));var y=J(),b=f(y);V(b,{name:`Playground`,args:{open:!0,title:`Title`,onClose:()=>{}},template:(e,n=t,r=t)=>{var i=G(),a=f(i);k(a,p(n,{onClose:()=>h(r().id,!1),get footer(){return z},children:(e,t)=>{var n=U();N(o(n),{get items(){return v},onItemClick:()=>{}}),c(n),u(e,n)},$$slots:{default:!0}}));var s=d(a,2),l=e=>{var t=W();C(o(t),{label:`Open drawer`,kind:`primary`,size:`large`,onclick:()=>h(r().id,!0)}),c(t),u(e,t)};ee(s,e=>{n().open||e(l)}),u(e,i)},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: the drawer wired to controls; close writes back to the arg.`}},__svelteCsf:{rawCode:`<Drawer {...args} onClose={() => setOpen(context.id, false)} {footer}>
  <div class="flex flex-col gap-2xs px-2xs">
    <List items={workouts} onItemClick={() => {}} />
  </div>
</Drawer>
{#if !args.open}
  <div class="flex h-screen items-center justify-center bg-layer-background">
    <Button label="Open drawer" kind="primary" size="large" onclick={() => setOpen(context.id, true)} />
  </div>
{/if}`}}});var x=d(b,2);V(x,{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: drawer over a realistic page - open it via the header's menu button
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
</div>`}},children:(e,t)=>{var n=K(),i=o(n);j(i,{title:`Workouts`,right:e=>{C(e,{kind:`ghost-light`,size:`large`,get icon(){return I},"aria-label":`Menu`,onclick:()=>r(g,!0)})},$$slots:{right:!0}});var a=d(i,2),s=o(a);D(s,{title:`Storm 50`,duration:`50:00`,onclick:()=>{}}),D(d(s,2),{title:`HIIT Bootcamp`,duration:`45:00`,onclick:()=>{}}),c(a),k(d(a,2),{get open(){return l(g)},onClose:()=>r(g,!1),title:`Title`,get footer(){return z},children:(e,t)=>{var n=U();N(o(n),{get items(){return v},onItemClick:()=>{}}),c(n),u(e,n)},$$slots:{default:!0}}),c(n),u(e,n)},$$slots:{default:!0}}),V(d(x,2),{name:`Scrolled`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Scrolled: body scrolled to the middle, so the list runs under the title row and
    the footer and both blur fades are visible at once.`}},__svelteCsf:{rawCode:`<div class="relative h-screen overflow-hidden bg-layer-background">
  <Drawer open onClose={() => {}} title="Title" {footer}>
    <div class="flex flex-col gap-2xs px-2xs" use:scrollBodyToMiddle>
      <List items={workouts} onItemClick={() => {}} />
    </div>
  </Drawer>
</div>`}},children:(e,t)=>{var n=q();k(o(n),{open:!0,onClose:()=>{},title:`Title`,get footer(){return z},children:(e,t)=>{var n=U();N(o(n),{get items(){return v},onItemClick:()=>{}}),c(n),a(n,e=>_?.(e)),u(e,n)},$$slots:{default:!0}}),c(n),u(e,n)},$$slots:{default:!0}}),u(e,y),s()}var F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),_(),x(),O(),h(),te(),E(),A(),M(),T(),v(),{addons:F}=__STORYBOOK_MODULE_PREVIEW_API__,I=e=>{ne(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},L=e=>{re(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},R=e=>{w(e,{class:`size-full text-layer-error`,stroke:1.5,"aria-hidden":`true`})},z=e=>{var t=H(),n=d(f(t),2),r=o(n);C(r,{kind:`ghost-light`,size:`large`,get icon(){return L},"aria-label":`Settings`,onclick:()=>{}}),C(d(r,2),{kind:`ghost-light`,size:`large`,get icon(){return R},"aria-label":`Power`,onclick:()=>{}}),c(n),u(e,t)},B={title:`lib/components/Drawer`,component:k,parameters:{layout:`fullscreen`,design:S(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=390-839`)},argTypes:{open:{control:`boolean`},title:{control:`text`},ariaLabel:{control:`text`},closeAriaLabel:{control:`text`}}},{Story:V}=y(B),H=m(`<span class="pointer-events-auto relative typography-label-regular text-text">v.1.0</span> <div class="pointer-events-auto relative flex items-center gap-2xs"><!> <!></div>`,1),U=m(`<div class="flex flex-col gap-2xs px-2xs"><!></div>`),W=m(`<div class="flex h-screen items-center justify-center bg-layer-background"><!></div>`),G=m(`<!> <!>`,1),K=m(`<div class="relative h-screen overflow-hidden bg-layer-background"><!> <div class="flex gap-s px-m pt-24"><!> <!></div> <!></div>`),q=m(`<div class="relative h-screen overflow-hidden bg-layer-background"><!></div>`),J=m(`<!> <!> <!>`,1),P.__docgen={data:[],name:`Drawer.stories.svelte`},Y=b(P,B),X=[`Playground`,`Overview`,`Scrolled`],Z={...Y.Playground,tags:[`svelte-csf-v5`]},Q={...Y.Overview,tags:[`svelte-csf-v5`]},$={...Y.Scrolled,tags:[`svelte-csf-v5`]}}))();export{Q as Overview,Z as Playground,$ as Scrolled,X as __namedExportsOrder,B as default};