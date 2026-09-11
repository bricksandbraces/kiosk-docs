import{i as e}from"./preload-helper-xPQekRTU.js";import{Ct as t,Gt as n,I as r,It as i,Lt as a,Mt as o,Ot as s,Q as c,Ut as l,V as u,X as d,a as f,bt as p,et as m,gt as h,i as g,kt as _,l as ee,o as v,q as te,qt as y,t as b,ut as x,xt as S}from"./iframe-Bz8DFIpJ.js";import{i as C,n as w,r as T,t as E}from"./create-runtime-stories-WnJfGviS.js";import{n as ne,t as re}from"./figmaDesign-BuxWJBGH.js";import{n as ie,t as D}from"./Button-CPq6jNWv.js";import{H as ae,It as oe,J as O,b as se,n as ce,t as le}from"./icons-D0a2gJic.js";import{n as ue,t as k}from"./Card-CjzDkwyB.js";import{n as de,t as fe}from"./Drawer-GRnyO3lX.js";import{n as pe,t as me}from"./Header-y_IYPKlE.js";import{n as he,t as ge}from"./MenuItem-CTSpM9vt.js";function A(e,n){a(n,!0);let o=e=>{var r=N(),i=S(r),a=p(i,!0);l(i);var o=t(i,2),s=e=>{var t=M();te(p(t),()=>n.actions),l(t),c(e,t)};u(o,e=>{n.actions&&e(s)}),h(()=>d(a,n.version??``)),c(e,r)},m=g(n,`title`,3,`Orapulse Apps`),y=g(n,`ariaLabel`,3,`Menu`),b=g(n,`closeAriaLabel`,3,`Close menu`),C=f(n,j),w=_(null),T=_(null);function E(e){if(!x(T))return;let t=Array.from(x(T).querySelectorAll(`button:not(:disabled)`));if(t.length===0)return;let n=document.activeElement,r=n?t.indexOf(n):-1,i=null;switch(e.key){case`ArrowDown`:i=r<0?0:(r+1)%t.length;break;case`ArrowUp`:i=r<0?t.length-1:(r-1+t.length)%t.length;break;case`Home`:i=0;break;case`End`:i=t.length-1;break}i!==null&&(e.preventDefault(),t[i].focus())}ee(fe(e,v({get open(){return n.open},get onClose(){return n.onClose},get title(){return m()},get ariaLabel(){return y()},get closeAriaLabel(){return b()},get footer(){return o},get class(){return n.class},onkeydown:E},()=>C,{get ref(){return x(T)},set ref(e){s(T,e,!0)},children:(e,t)=>{var i=P();r(i,21,()=>n.items,e=>e.id,(e,t)=>{ge(e,{get label(){return x(t).label},get description(){return x(t).description},get icon(){return x(t).icon},get selected(){return x(t).selected},get disabled(){return x(t).disabled},get tag(){return x(t).tag},onclick:()=>{n.onItemClick?.(x(t).id),x(w)?.close()}})}),l(i),c(e,i)},$$slots:{default:!0}})),e=>s(w,e,!0),()=>x(w)),i()}var j,M,N,P,_e=e((()=>{y(),b(),de(),he(),j=new Set([`$$slots`,`$$events`,`$$legacy`,`open`,`onClose`,`title`,`items`,`onItemClick`,`version`,`actions`,`ariaLabel`,`closeAriaLabel`,`class`]),M=m(`<div class="pointer-events-auto relative flex items-center gap-2xs"><!></div>`),N=m(`<span class="pointer-events-auto relative text-label text-text"> </span> <!>`,1),P=m(`<div class="flex flex-col gap-2xs pl-2xs"></div>`),A.__docgen={data:[{name:`open`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`type`,type:`boolean`,text:`boolean`},static:!1,readonly:!1},{name:`onClose`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`function`,text:`() => void`},static:!1,readonly:!1},{name:`title`,visibility:`public`,description:`Drawer heading.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Orapulse Apps"`},{name:`items`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`type`,type:`array`,text:`MenuItemConfig[]`},static:!1,readonly:!1},{name:`onItemClick`,visibility:`public`,description:`Fired for enabled items; the drawer closes afterwards.`,keywords:[],kind:`let`,type:{kind:`function`,text:`(id: string) => void`},static:!1,readonly:!1},{name:`version`,visibility:`public`,description:`Version string in the footer (e.g. "v.1.0").`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1},{name:`actions`,visibility:`public`,description:`Footer action buttons (rendered bottom-right).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`ariaLabel`,visibility:`public`,description:`Aria label for the dialog.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Menu"`},{name:`closeAriaLabel`,visibility:`public`,description:`Aria label for the close button.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Close menu"`},{name:`class`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1}],name:`Menu.svelte`}}));function F(e,r){a(r,!0);function d(e,t){I.getChannel().emit(`updateStoryArgs`,{storyId:e,updatedArgs:{open:t}})}let f=_(!1);var m=q(),h=S(m);K(h,{name:`Playground`,args:{open:!0,items:[],onClose:()=>{}},template:(e,r=n,i=n)=>{var a=q(),s=S(a);{let e=o(()=>[{id:`workouts`,label:`Workouts`,description:`All your predesigned workouts.`,icon:L},{id:`session-timer`,label:`Session Timer`,description:`Set a one-time-timer.`,icon:R},{id:`session-workout`,label:`Session Workout`,description:`Design a one-time-workout.`,icon:z,selected:!0},{id:`loop`,label:`Loop`,description:`Display information within your studio.`,icon:B,disabled:!0,tag:`SOON`}]);A(s,v(r,{onClose:()=>d(i().id,!1),version:`v.1.0`,get actions(){return W},get items(){return x(e)}}))}var f=t(s,2),m=e=>{var t=J();D(p(t),{label:`Open menu`,kind:`primary`,size:`large`,onclick:()=>d(i().id,!0)}),l(t),c(e,t)};u(f,e=>{r().open||e(m)}),c(e,a)},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: the apps drawer wired to controls; close writes back to the arg.`}},__svelteCsf:{rawCode:`<Menu
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
{/if}`}}}),K(t(h,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: drawer over a realistic page - open it via the header's menu button
    to verify the slide-in/out animation against real content.`}},__svelteCsf:{rawCode:`<div class="relative h-screen overflow-hidden bg-layer-background">
  <Header title="Workouts">
    {#snippet right()}
      <Button kind="icon" size="large" icon={menuIcon} aria-label="Menu" onclick={() => (overviewOpen = true)} />
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
</div>`}},children:(e,n)=>{var r=Y(),i=p(r);me(i,{title:`Workouts`,right:e=>{D(e,{kind:`icon`,size:`large`,get icon(){return V},"aria-label":`Menu`,onclick:()=>s(f,!0)})},$$slots:{right:!0}});var a=t(i,2),u=p(a);k(u,{title:`Storm 50`,duration:`50:00`,onclick:()=>{}}),k(t(u,2),{title:`HIIT Bootcamp`,duration:`45:00`,onclick:()=>{}}),l(a);var d=t(a,2);{let e=o(()=>[{id:`workouts`,label:`Workouts`,description:`All your predesigned workouts.`,icon:L},{id:`session-timer`,label:`Session Timer`,description:`Set a one-time-timer.`,icon:R},{id:`session-workout`,label:`Session Workout`,description:`Design a one-time-workout.`,icon:z,selected:!0},{id:`loop`,label:`Loop`,description:`Display information within your studio.`,icon:B,disabled:!0,tag:`SOON`}]);A(d,{get open(){return x(f)},onClose:()=>s(f,!1),version:`v.1.0`,get actions(){return W},get items(){return x(e)}})}l(r),c(e,r)},$$slots:{default:!0}}),c(e,m),i()}var I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{y(),C(),ne(),_e(),b(),ie(),pe(),ue(),le(),w(),{addons:I}=__STORYBOOK_MODULE_PREVIEW_API__,L=e=>{O(e,{stroke:1.5,"aria-hidden":`true`})},R=e=>{O(e,{stroke:1.5,"aria-hidden":`true`})},z=e=>{ce(e,{class:`size-6`,stroke:1.5,"aria-hidden":`true`})},B=e=>{O(e,{stroke:1.5,"aria-hidden":`true`})},V=e=>{ae(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},H=e=>{oe(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},U=e=>{se(e,{class:`size-full text-layer-error`,stroke:1.5,"aria-hidden":`true`})},W=e=>{var n=q(),r=S(n);D(r,{kind:`icon`,size:`large`,get icon(){return H},"aria-label":`Settings`,onclick:()=>{}}),D(t(r,2),{kind:`icon`,size:`large`,get icon(){return U},"aria-label":`Power`,onclick:()=>{}}),c(e,n)},G={title:`lib/components/Menu`,component:A,parameters:{layout:`fullscreen`,design:re(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=390-839`)},argTypes:{open:{control:`boolean`}}},{Story:K}=T(G),q=m(`<!> <!>`,1),J=m(`<div class="flex h-screen items-center justify-center bg-layer-background"><!></div>`),Y=m(`<div class="relative h-screen overflow-hidden bg-layer-background"><!> <div class="flex gap-s px-m pt-24"><!> <!></div> <!></div>`),F.__docgen={data:[],name:`Menu.stories.svelte`},X=E(F,G),Z=[`Playground`,`Overview`],Q={...X.Playground,tags:[`svelte-csf-v5`]},$={...X.Overview,tags:[`svelte-csf-v5`]}}))();export{$ as Overview,Q as Playground,Z as __namedExportsOrder,G as default};