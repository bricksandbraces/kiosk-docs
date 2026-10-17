import{i as e}from"./preload-helper-xPQekRTU.js";import{$ as t,At as n,Gt as r,H as i,Kt as a,Lt as o,Mt as s,Qt as c,Rt as l,Vt as u,_t as d,a as f,en as p,i as m,it as h,kt as g,l as _,nn as v,nt as ee,o as y,ot as b,q as x,t as S,wt as te}from"./iframe-BUZ_vANv.js";import{i as C,n as w,r as T,t as E}from"./create-runtime-stories-DIEPZl4W.js";import{n as ne,t as re}from"./figmaDesign-BuxWJBGH.js";import{H as ie,J as D,Rt as ae,b as oe,n as se,t as ce}from"./icons-Biph9irK.js";import{r as le,t as O}from"./Button-BLGbNREU.js";import{n as ue,t as k}from"./Card-CSowQCPY.js";import{n as de,t as fe}from"./Drawer-D6zT3Ply.js";import{n as pe,t as me}from"./Header-DH8Qj9Ya.js";import{n as he,t as ge}from"./MenuItem-5fIREZxy.js";function A(e,u){a(u,!0);let p=e=>{var r=N(),i=n(r),a=g(i,!0);c(i);var o=s(i,2),l=e=>{var n=M();t(g(n),()=>u.actions),c(n),h(e,n)};x(o,e=>{u.actions&&e(l)}),te(()=>ee(a,u.version??``)),h(e,r)},v=m(u,`title`,3,`Orapulse Apps`),b=m(u,`ariaLabel`,3,`Menu`),S=m(u,`closeAriaLabel`,3,`Close menu`),C=f(u,j),w=l(null),T=l(null);function E(e){if(!d(T))return;let t=Array.from(d(T).querySelectorAll(`button:not(:disabled)`));if(t.length===0)return;let n=document.activeElement,r=n?t.indexOf(n):-1,i=null;switch(e.key){case`ArrowDown`:i=r<0?0:(r+1)%t.length;break;case`ArrowUp`:i=r<0?t.length-1:(r-1+t.length)%t.length;break;case`Home`:i=0;break;case`End`:i=t.length-1;break}i!==null&&(e.preventDefault(),t[i].focus())}_(fe(e,y({get open(){return u.open},get onClose(){return u.onClose},get title(){return v()},get ariaLabel(){return b()},get closeAriaLabel(){return S()},get footer(){return p},get class(){return u.class},onkeydown:E},()=>C,{get ref(){return d(T)},set ref(e){o(T,e,!0)},children:(e,t)=>{var n=P();i(n,21,()=>u.items,e=>e.id,(e,t)=>{ge(e,{get label(){return d(t).label},get description(){return d(t).description},get icon(){return d(t).icon},get selected(){return d(t).selected},get disabled(){return d(t).disabled},get tag(){return d(t).tag},onclick:()=>{u.onItemClick?.(d(t).id),d(w)?.close()}})}),c(n),h(e,n)},$$slots:{default:!0}})),e=>o(w,e,!0),()=>d(w)),r()}var j,M,N,P,_e=e((()=>{v(),S(),de(),he(),j=new Set([`$$slots`,`$$events`,`$$legacy`,`open`,`onClose`,`title`,`items`,`onItemClick`,`version`,`actions`,`ariaLabel`,`closeAriaLabel`,`class`]),M=b(`<div class="pointer-events-auto relative flex items-center gap-2xs"><!></div>`),N=b(`<span class="pointer-events-auto relative typography-label-regular text-text"> </span> <!>`,1),P=b(`<div class="flex flex-col gap-2xs pl-2xs"></div>`),A.__docgen={data:[{name:`open`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`type`,type:`boolean`,text:`boolean`},static:!1,readonly:!1},{name:`onClose`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`function`,text:`() => void`},static:!1,readonly:!1},{name:`title`,visibility:`public`,description:`Drawer heading.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Orapulse Apps"`},{name:`items`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`type`,type:`array`,text:`MenuItemConfig[]`},static:!1,readonly:!1},{name:`onItemClick`,visibility:`public`,description:`Fired for enabled items; the drawer closes afterwards.`,keywords:[],kind:`let`,type:{kind:`function`,text:`(id: string) => void`},static:!1,readonly:!1},{name:`version`,visibility:`public`,description:`Version string in the footer (e.g. "v.1.0").`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1},{name:`actions`,visibility:`public`,description:`Footer action buttons (rendered bottom-right).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`ariaLabel`,visibility:`public`,description:`Aria label for the dialog.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Menu"`},{name:`closeAriaLabel`,visibility:`public`,description:`Aria label for the close button.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Close menu"`},{name:`class`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1}],name:`Menu.svelte`}}));function F(e,t){a(t,!0);function i(e,t){I.getChannel().emit(`updateStoryArgs`,{storyId:e,updatedArgs:{open:t}})}let f=l(!1);var m=q(),_=n(m);K(_,{name:`Playground`,args:{open:!0,items:[],onClose:()=>{}},template:(e,t=p,r=p)=>{var a=q(),o=n(a);{let e=u(()=>[{id:`workouts`,label:`Workouts`,description:`All your predesigned workouts.`,icon:L},{id:`session-timer`,label:`Session Timer`,description:`Set a one-time-timer.`,icon:R},{id:`session-workout`,label:`Session Workout`,description:`Design a one-time-workout.`,icon:z,selected:!0},{id:`loop`,label:`Loop`,description:`Display information within your studio.`,icon:B,disabled:!0,tag:`SOON`}]);A(o,y(t,{onClose:()=>i(r().id,!1),version:`v.1.0`,get actions(){return W},get items(){return d(e)}}))}var l=s(o,2),f=e=>{var t=J();O(g(t),{label:`Open menu`,kind:`primary`,size:`large`,onclick:()=>i(r().id,!0)}),c(t),h(e,t)};x(l,e=>{t().open||e(f)}),h(e,a)},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: the apps drawer wired to controls; close writes back to the arg.`}},__svelteCsf:{rawCode:`<Menu
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
{/if}`}}}),K(s(_,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: drawer over a realistic page - open it via the header's menu button
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
</div>`}},children:(e,t)=>{var n=Y(),r=g(n);me(r,{title:`Workouts`,right:e=>{O(e,{kind:`ghost-light`,size:`large`,get icon(){return V},"aria-label":`Menu`,onclick:()=>o(f,!0)})},$$slots:{right:!0}});var i=s(r,2),a=g(i);k(a,{title:`Storm 50`,duration:`50:00`,onclick:()=>{}}),k(s(a,2),{title:`HIIT Bootcamp`,duration:`45:00`,onclick:()=>{}}),c(i);var l=s(i,2);{let e=u(()=>[{id:`workouts`,label:`Workouts`,description:`All your predesigned workouts.`,icon:L},{id:`session-timer`,label:`Session Timer`,description:`Set a one-time-timer.`,icon:R},{id:`session-workout`,label:`Session Workout`,description:`Design a one-time-workout.`,icon:z,selected:!0},{id:`loop`,label:`Loop`,description:`Display information within your studio.`,icon:B,disabled:!0,tag:`SOON`}]);A(l,{get open(){return d(f)},onClose:()=>o(f,!1),version:`v.1.0`,get actions(){return W},get items(){return d(e)}})}c(n),h(e,n)},$$slots:{default:!0}}),h(e,m),r()}var I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{v(),C(),ne(),_e(),S(),le(),pe(),ue(),ce(),w(),{addons:I}=__STORYBOOK_MODULE_PREVIEW_API__,L=e=>{D(e,{stroke:1.5,"aria-hidden":`true`})},R=e=>{D(e,{stroke:1.5,"aria-hidden":`true`})},z=e=>{se(e,{class:`size-6`,stroke:1.5,"aria-hidden":`true`})},B=e=>{D(e,{stroke:1.5,"aria-hidden":`true`})},V=e=>{ie(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},H=e=>{ae(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},U=e=>{oe(e,{class:`size-full text-layer-error`,stroke:1.5,"aria-hidden":`true`})},W=e=>{var t=q(),r=n(t);O(r,{kind:`ghost-light`,size:`large`,get icon(){return H},"aria-label":`Settings`,onclick:()=>{}}),O(s(r,2),{kind:`ghost-light`,size:`large`,get icon(){return U},"aria-label":`Power`,onclick:()=>{}}),h(e,t)},G={title:`lib/components/Menu`,component:A,parameters:{layout:`fullscreen`,design:re(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=390-839`)},argTypes:{open:{control:`boolean`}}},{Story:K}=T(G),q=b(`<!> <!>`,1),J=b(`<div class="flex h-screen items-center justify-center bg-layer-background"><!></div>`),Y=b(`<div class="relative h-screen overflow-hidden bg-layer-background"><!> <div class="flex gap-s px-m pt-24"><!> <!></div> <!></div>`),F.__docgen={data:[],name:`Menu.stories.svelte`},X=E(F,G),Z=[`Playground`,`Overview`],Q={...X.Playground,tags:[`svelte-csf-v5`]},$={...X.Overview,tags:[`svelte-csf-v5`]}}))();export{$ as Overview,Q as Playground,Z as __namedExportsOrder,G as default};