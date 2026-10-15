import{i as e}from"./preload-helper-xPQekRTU.js";import{$ as t,$t as n,Bt as r,Ct as i,Gt as a,H as o,It as s,Lt as c,Ot as l,Wt as u,Zt as d,a as f,gt as p,i as m,it as h,jt as g,kt as _,l as ee,nt as te,o as v,ot as y,q as b,t as x,tn as S}from"./iframe-BWwDxEz_.js";import{i as C,n as w,r as T,t as E}from"./create-runtime-stories-D-BviaJ8.js";import{n as ne,t as re}from"./figmaDesign-BuxWJBGH.js";import{r as ie,t as D}from"./Button-BpCOO4sT.js";import{H as ae,J as O,Rt as oe,b as se,n as ce,t as le}from"./icons-OxBLYOA4.js";import{n as ue,t as k}from"./Card--X2KKxrh.js";import{n as de,t as fe}from"./Drawer-DddcebCK.js";import{n as pe,t as me}from"./Header-CHFI1IgI.js";import{n as he,t as ge}from"./MenuItem-C8hQt1_j.js";function A(e,n){a(n,!0);let r=e=>{var r=N(),a=_(r),o=l(a,!0);d(a);var s=g(a,2),c=e=>{var r=M();t(l(r),()=>n.actions),d(r),h(e,r)};b(s,e=>{n.actions&&e(c)}),i(()=>te(o,n.version??``)),h(e,r)},y=m(n,`title`,3,`Orapulse Apps`),x=m(n,`ariaLabel`,3,`Menu`),S=m(n,`closeAriaLabel`,3,`Close menu`),C=f(n,j),w=c(null),T=c(null);function E(e){if(!p(T))return;let t=Array.from(p(T).querySelectorAll(`button:not(:disabled)`));if(t.length===0)return;let n=document.activeElement,r=n?t.indexOf(n):-1,i=null;switch(e.key){case`ArrowDown`:i=r<0?0:(r+1)%t.length;break;case`ArrowUp`:i=r<0?t.length-1:(r-1+t.length)%t.length;break;case`Home`:i=0;break;case`End`:i=t.length-1;break}i!==null&&(e.preventDefault(),t[i].focus())}ee(fe(e,v({get open(){return n.open},get onClose(){return n.onClose},get title(){return y()},get ariaLabel(){return x()},get closeAriaLabel(){return S()},get footer(){return r},get class(){return n.class},onkeydown:E},()=>C,{get ref(){return p(T)},set ref(e){s(T,e,!0)},children:(e,t)=>{var r=P();o(r,21,()=>n.items,e=>e.id,(e,t)=>{ge(e,{get label(){return p(t).label},get description(){return p(t).description},get icon(){return p(t).icon},get selected(){return p(t).selected},get disabled(){return p(t).disabled},get tag(){return p(t).tag},onclick:()=>{n.onItemClick?.(p(t).id),p(w)?.close()}})}),d(r),h(e,r)},$$slots:{default:!0}})),e=>s(w,e,!0),()=>p(w)),u()}var j,M,N,P,_e=e((()=>{S(),x(),de(),he(),j=new Set([`$$slots`,`$$events`,`$$legacy`,`open`,`onClose`,`title`,`items`,`onItemClick`,`version`,`actions`,`ariaLabel`,`closeAriaLabel`,`class`]),M=y(`<div class="pointer-events-auto relative flex items-center gap-2xs"><!></div>`),N=y(`<span class="pointer-events-auto relative typography-label-regular text-text"> </span> <!>`,1),P=y(`<div class="flex flex-col gap-2xs pl-2xs"></div>`),A.__docgen={data:[{name:`open`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`type`,type:`boolean`,text:`boolean`},static:!1,readonly:!1},{name:`onClose`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`function`,text:`() => void`},static:!1,readonly:!1},{name:`title`,visibility:`public`,description:`Drawer heading.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Orapulse Apps"`},{name:`items`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`type`,type:`array`,text:`MenuItemConfig[]`},static:!1,readonly:!1},{name:`onItemClick`,visibility:`public`,description:`Fired for enabled items; the drawer closes afterwards.`,keywords:[],kind:`let`,type:{kind:`function`,text:`(id: string) => void`},static:!1,readonly:!1},{name:`version`,visibility:`public`,description:`Version string in the footer (e.g. "v.1.0").`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1},{name:`actions`,visibility:`public`,description:`Footer action buttons (rendered bottom-right).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`ariaLabel`,visibility:`public`,description:`Aria label for the dialog.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Menu"`},{name:`closeAriaLabel`,visibility:`public`,description:`Aria label for the close button.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Close menu"`},{name:`class`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1}],name:`Menu.svelte`}}));function F(e,t){a(t,!0);function i(e,t){I.getChannel().emit(`updateStoryArgs`,{storyId:e,updatedArgs:{open:t}})}let o=c(!1);var f=q(),m=_(f);K(m,{name:`Playground`,args:{open:!0,items:[],onClose:()=>{}},template:(e,t=n,a=n)=>{var o=q(),s=_(o);{let e=r(()=>[{id:`workouts`,label:`Workouts`,description:`All your predesigned workouts.`,icon:L},{id:`session-timer`,label:`Session Timer`,description:`Set a one-time-timer.`,icon:R},{id:`session-workout`,label:`Session Workout`,description:`Design a one-time-workout.`,icon:z,selected:!0},{id:`loop`,label:`Loop`,description:`Display information within your studio.`,icon:B,disabled:!0,tag:`SOON`}]);A(s,v(t,{onClose:()=>i(a().id,!1),version:`v.1.0`,get actions(){return W},get items(){return p(e)}}))}var c=g(s,2),u=e=>{var t=J();D(l(t),{label:`Open menu`,kind:`primary`,size:`large`,onclick:()=>i(a().id,!0)}),d(t),h(e,t)};b(c,e=>{t().open||e(u)}),h(e,o)},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: the apps drawer wired to controls; close writes back to the arg.`}},__svelteCsf:{rawCode:`<Menu
  {...args}
  onClose={() => setOpen(context.id, false)}
  version="v.1.0"
  actions={footerActions}
  items={[
    {
      id: 'workouts',
      label: 'Workouts',
      description: 'All your predesigned workouts.',
      icon: workoutsIcon,
    },
    {
      id: 'session-timer',
      label: 'Session Timer',
      description: 'Set a one-time-timer.',
      icon: sessionTimerIcon,
    },
    {
      id: 'session-workout',
      label: 'Session Workout',
      description: 'Design a one-time-workout.',
      icon: sessionWorkoutIcon,
      selected: true,
    },
    {
      id: 'loop',
      label: 'Loop',
      description: 'Display information within your studio.',
      icon: loopIcon,
      disabled: true,
      tag: 'SOON',
    },
  ]}
/>
{#if !args.open}
  <div class="flex h-screen items-center justify-center bg-layer-background">
    <Button label="Open menu" kind="primary" size="large" onclick={() => setOpen(context.id, true)} />
  </div>
{/if}`}}}),K(g(m,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: drawer over a realistic page - open it via the header's menu button
    to verify the slide-in/out animation against real content.`}},__svelteCsf:{rawCode:`<div class="relative h-screen overflow-hidden bg-layer-background">
  <Header title="Workouts">
    {#snippet right()}
      <Button kind="ghost-light" size="large" icon={menuIcon} aria-label="Menu" onclick={() => (overviewOpen = true)} />
    {/snippet}
  </Header>
  <div class="flex gap-s px-m pt-24">
    <Card title="Storm 50" duration="50:00" onclick={() => {}} />
    <Card title="HIIT Bootcamp" duration="45:00" onclick={() => {}} />
  </div>

  <Menu
    open={overviewOpen}
    onClose={() => (overviewOpen = false)}
    version="v.1.0"
    actions={footerActions}
    items={[
      {
        id: 'workouts',
        label: 'Workouts',
        description: 'All your predesigned workouts.',
        icon: workoutsIcon,
      },
      {
        id: 'session-timer',
        label: 'Session Timer',
        description: 'Set a one-time-timer.',
        icon: sessionTimerIcon,
      },
      {
        id: 'session-workout',
        label: 'Session Workout',
        description: 'Design a one-time-workout.',
        icon: sessionWorkoutIcon,
        selected: true,
      },
      {
        id: 'loop',
        label: 'Loop',
        description: 'Display information within your studio.',
        icon: loopIcon,
        disabled: true,
        tag: 'SOON',
      },
    ]}
  />
</div>`}},children:(e,t)=>{var n=Y(),i=l(n);me(i,{title:`Workouts`,right:e=>{D(e,{kind:`ghost-light`,size:`large`,get icon(){return V},"aria-label":`Menu`,onclick:()=>s(o,!0)})},$$slots:{right:!0}});var a=g(i,2),c=l(a);k(c,{title:`Storm 50`,duration:`50:00`,onclick:()=>{}}),k(g(c,2),{title:`HIIT Bootcamp`,duration:`45:00`,onclick:()=>{}}),d(a);var u=g(a,2);{let e=r(()=>[{id:`workouts`,label:`Workouts`,description:`All your predesigned workouts.`,icon:L},{id:`session-timer`,label:`Session Timer`,description:`Set a one-time-timer.`,icon:R},{id:`session-workout`,label:`Session Workout`,description:`Design a one-time-workout.`,icon:z,selected:!0},{id:`loop`,label:`Loop`,description:`Display information within your studio.`,icon:B,disabled:!0,tag:`SOON`}]);A(u,{get open(){return p(o)},onClose:()=>s(o,!1),version:`v.1.0`,get actions(){return W},get items(){return p(e)}})}d(n),h(e,n)},$$slots:{default:!0}}),h(e,f),u()}var I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{S(),C(),ne(),_e(),x(),ie(),pe(),ue(),le(),w(),{addons:I}=__STORYBOOK_MODULE_PREVIEW_API__,L=e=>{O(e,{stroke:1.5,"aria-hidden":`true`})},R=e=>{O(e,{stroke:1.5,"aria-hidden":`true`})},z=e=>{ce(e,{class:`size-6`,stroke:1.5,"aria-hidden":`true`})},B=e=>{O(e,{stroke:1.5,"aria-hidden":`true`})},V=e=>{ae(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},H=e=>{oe(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},U=e=>{se(e,{class:`size-full text-layer-error`,stroke:1.5,"aria-hidden":`true`})},W=e=>{var t=q(),n=_(t);D(n,{kind:`ghost-light`,size:`large`,get icon(){return H},"aria-label":`Settings`,onclick:()=>{}}),D(g(n,2),{kind:`ghost-light`,size:`large`,get icon(){return U},"aria-label":`Power`,onclick:()=>{}}),h(e,t)},G={title:`lib/components/Menu`,component:A,parameters:{layout:`fullscreen`,design:re(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=390-839`)},argTypes:{open:{control:`boolean`}}},{Story:K}=T(G),q=y(`<!> <!>`,1),J=y(`<div class="flex h-screen items-center justify-center bg-layer-background"><!></div>`),Y=y(`<div class="relative h-screen overflow-hidden bg-layer-background"><!> <div class="flex gap-s px-m pt-24"><!> <!></div> <!></div>`),F.__docgen={data:[],name:`Menu.stories.svelte`},X=E(F,G),Z=[`Playground`,`Overview`],Q={...X.Playground,tags:[`svelte-csf-v5`]},$={...X.Overview,tags:[`svelte-csf-v5`]}}))();export{$ as Overview,Q as Playground,Z as __namedExportsOrder,G as default};