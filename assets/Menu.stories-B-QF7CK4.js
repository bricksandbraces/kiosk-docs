import{i as e}from"./preload-helper-xPQekRTU.js";import{$ as t,Et as n,Ht as r,Jt as i,Lt as a,Nt as o,Ot as s,Pt as c,Qt as l,Tt as u,Vt as d,W as f,X as p,Xt as m,a as h,bt as g,i as _,l as ee,o as v,pt as y,rt as b,t as x,tt as S,z as te}from"./iframe-DWrgsIuE.js";import{a as C,i as w,n as T,o as E,r as ne,t as re}from"./create-runtime-stories-BbjBuJkS.js";import{r as ie,t as D}from"./Button-Dhe87nhS.js";import{H as ae,It as oe,J as O,b as se,n as ce,t as le}from"./icons-DRDRfxJW.js";import{n as ue,t as k}from"./Card-BmAHWYe9.js";import{n as de,t as fe}from"./Drawer-Yv2c2a5T.js";import{n as pe,t as me}from"./Header-Bc6J_Qrc.js";import{n as he,t as ge}from"./MenuItem-9hTGzf_n.js";function A(e,a){r(a,!0);let l=e=>{var r=N(),o=n(r),c=u(o,!0);i(o);var l=s(o,2),d=e=>{var t=M();p(u(t),()=>a.actions),i(t),S(e,t)};f(l,e=>{a.actions&&e(d)}),g(()=>t(c,a.version??``)),S(e,r)},m=_(a,`title`,3,`Orapulse Apps`),b=_(a,`ariaLabel`,3,`Menu`),x=_(a,`closeAriaLabel`,3,`Close menu`),C=h(a,j),w=c(null),T=c(null);function E(e){if(!y(T))return;let t=Array.from(y(T).querySelectorAll(`button:not(:disabled)`));if(t.length===0)return;let n=document.activeElement,r=n?t.indexOf(n):-1,i=null;switch(e.key){case`ArrowDown`:i=r<0?0:(r+1)%t.length;break;case`ArrowUp`:i=r<0?t.length-1:(r-1+t.length)%t.length;break;case`Home`:i=0;break;case`End`:i=t.length-1;break}i!==null&&(e.preventDefault(),t[i].focus())}ee(fe(e,v({get open(){return a.open},get onClose(){return a.onClose},get title(){return m()},get ariaLabel(){return b()},get closeAriaLabel(){return x()},get footer(){return l},get class(){return a.class},onkeydown:E},()=>C,{get ref(){return y(T)},set ref(e){o(T,e,!0)},children:(e,t)=>{var n=P();te(n,21,()=>a.items,e=>e.id,(e,t)=>{ge(e,{get label(){return y(t).label},get description(){return y(t).description},get icon(){return y(t).icon},get selected(){return y(t).selected},get disabled(){return y(t).disabled},get tag(){return y(t).tag},onclick:()=>{a.onItemClick?.(y(t).id),y(w)?.close()}})}),i(n),S(e,n)},$$slots:{default:!0}})),e=>o(w,e,!0),()=>y(w)),d()}var j,M,N,P,_e=e((()=>{l(),x(),de(),he(),j=new Set([`$$slots`,`$$events`,`$$legacy`,`open`,`onClose`,`title`,`items`,`onItemClick`,`version`,`actions`,`ariaLabel`,`closeAriaLabel`,`class`]),M=b(`<div class="pointer-events-auto relative flex items-center gap-2xs"><!></div>`),N=b(`<span class="pointer-events-auto relative text-label text-text"> </span> <!>`,1),P=b(`<div class="flex flex-col gap-2xs pl-2xs"></div>`),A.__docgen={data:[{name:`open`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`type`,type:`boolean`,text:`boolean`},static:!1,readonly:!1},{name:`onClose`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`function`,text:`() => void`},static:!1,readonly:!1},{name:`title`,visibility:`public`,description:`Drawer heading.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Orapulse Apps"`},{name:`items`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`type`,type:`array`,text:`MenuItemConfig[]`},static:!1,readonly:!1},{name:`onItemClick`,visibility:`public`,description:`Fired for enabled items; the drawer closes afterwards.`,keywords:[],kind:`let`,type:{kind:`function`,text:`(id: string) => void`},static:!1,readonly:!1},{name:`version`,visibility:`public`,description:`Version string in the footer (e.g. "v.1.0").`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1},{name:`actions`,visibility:`public`,description:`Footer action buttons (rendered bottom-right).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`ariaLabel`,visibility:`public`,description:`Aria label for the dialog.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Menu"`},{name:`closeAriaLabel`,visibility:`public`,description:`Aria label for the close button.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Close menu"`},{name:`class`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1}],name:`Menu.svelte`}}));function F(e,t){r(t,!0);function l(e,t){I.getChannel().emit(`updateStoryArgs`,{storyId:e,updatedArgs:{open:t}})}let p=c(!1);var h=q(),g=n(h);K(g,{name:`Playground`,args:{open:!0,items:[],onClose:()=>{}},template:(e,t=m,r=m)=>{var o=q(),c=n(o);{let e=a(()=>[{id:`workouts`,label:`Workouts`,description:`All your predesigned workouts.`,icon:L},{id:`session-timer`,label:`Session Timer`,description:`Set a one-time-timer.`,icon:R},{id:`session-workout`,label:`Session Workout`,description:`Design a one-time-workout.`,icon:z,selected:!0},{id:`loop`,label:`Loop`,description:`Display information within your studio.`,icon:B,disabled:!0,tag:`SOON`}]);A(c,v(t,{onClose:()=>l(r().id,!1),version:`v.1.0`,get actions(){return W},get items(){return y(e)}}))}var d=s(c,2),p=e=>{var t=J();D(u(t),{label:`Open menu`,kind:`primary`,size:`large`,onclick:()=>l(r().id,!0)}),i(t),S(e,t)};f(d,e=>{t().open||e(p)}),S(e,o)},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: the apps drawer wired to controls; close writes back to the arg.`}},__svelteCsf:{rawCode:`<Menu
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
{/if}`}}}),K(s(g,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: drawer over a realistic page - open it via the header's menu button
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
</div>`}},children:(e,t)=>{var n=Y(),r=u(n);me(r,{title:`Workouts`,right:e=>{D(e,{kind:`ghost-light`,size:`large`,get icon(){return V},"aria-label":`Menu`,onclick:()=>o(p,!0)})},$$slots:{right:!0}});var c=s(r,2),l=u(c);k(l,{title:`Storm 50`,duration:`50:00`,onclick:()=>{}}),k(s(l,2),{title:`HIIT Bootcamp`,duration:`45:00`,onclick:()=>{}}),i(c);var d=s(c,2);{let e=a(()=>[{id:`workouts`,label:`Workouts`,description:`All your predesigned workouts.`,icon:L},{id:`session-timer`,label:`Session Timer`,description:`Set a one-time-timer.`,icon:R},{id:`session-workout`,label:`Session Workout`,description:`Design a one-time-workout.`,icon:z,selected:!0},{id:`loop`,label:`Loop`,description:`Display information within your studio.`,icon:B,disabled:!0,tag:`SOON`}]);A(d,{get open(){return y(p)},onClose:()=>o(p,!1),version:`v.1.0`,get actions(){return W},get items(){return y(e)}})}i(n),S(e,n)},$$slots:{default:!0}}),S(e,h),d()}var I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),E(),w(),_e(),x(),ie(),pe(),ue(),le(),T(),{addons:I}=__STORYBOOK_MODULE_PREVIEW_API__,L=e=>{O(e,{stroke:1.5,"aria-hidden":`true`})},R=e=>{O(e,{stroke:1.5,"aria-hidden":`true`})},z=e=>{ce(e,{class:`size-6`,stroke:1.5,"aria-hidden":`true`})},B=e=>{O(e,{stroke:1.5,"aria-hidden":`true`})},V=e=>{ae(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},H=e=>{oe(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},U=e=>{se(e,{class:`size-full text-layer-error`,stroke:1.5,"aria-hidden":`true`})},W=e=>{var t=q(),r=n(t);D(r,{kind:`ghost-light`,size:`large`,get icon(){return H},"aria-label":`Settings`,onclick:()=>{}}),D(s(r,2),{kind:`ghost-light`,size:`large`,get icon(){return U},"aria-label":`Power`,onclick:()=>{}}),S(e,t)},G={title:`lib/components/Menu`,component:A,parameters:{layout:`fullscreen`,design:ne(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=390-839`)},argTypes:{open:{control:`boolean`}}},{Story:K}=C(G),q=b(`<!> <!>`,1),J=b(`<div class="flex h-screen items-center justify-center bg-layer-background"><!></div>`),Y=b(`<div class="relative h-screen overflow-hidden bg-layer-background"><!> <div class="flex gap-s px-m pt-24"><!> <!></div> <!></div>`),F.__docgen={data:[],name:`Menu.stories.svelte`},X=re(F,G),Z=[`Playground`,`Overview`],Q={...X.Playground,tags:[`svelte-csf-v5`]},$={...X.Overview,tags:[`svelte-csf-v5`]}}))();export{$ as Overview,Q as Playground,Z as __namedExportsOrder,G as default};