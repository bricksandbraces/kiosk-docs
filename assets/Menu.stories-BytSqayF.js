import{i as e}from"./preload-helper-xPQekRTU.js";import{$t as t,Ft as n,Ht as r,K as i,Lt as a,Pt as o,Ut as s,Z as c,a as l,cn as u,ct as d,en as f,fn as p,gn as m,i as h,kt as g,l as ee,o as _,ot as te,qt as v,rt as ne,t as y,ut as b,xt as x}from"./iframe-CWHPWP5F.js";import{i as S,n as C,r as w,t as T}from"./create-runtime-stories-DaQ_TVmN.js";import{A as re,ct as E,fn as ie,nt as ae}from"./tabler-icons-svelte-CgL8yHvM.js";import{n as oe,t as se}from"./figmaDesign-BuxWJBGH.js";import{n as ce,t as le}from"./icons-BWf4ojsB.js";import{r as ue,t as D}from"./Button-SynS8hXK.js";import{n as de,t as O}from"./Card-DYWnnjsj.js";import{n as fe,t as pe}from"./Drawer-AukqjDZ1.js";import{n as me,t as he}from"./Header-ET48E9HW.js";import{n as ge,t as _e}from"./MenuItem-CL1etn-o.js";function k(e,p){f(p,!0);let m=e=>{var t=M(),r=n(t),i=o(r,!0);u(r);var s=a(r,2),l=e=>{var t=j();ne(o(t),()=>p.actions),u(t),d(e,t)};c(s,e=>{p.actions&&e(l)}),g(()=>te(i,p.version??``)),d(e,t)},v=h(p,`title`,3,`Orapulse Apps`),y=h(p,`ariaLabel`,3,`Menu`),b=h(p,`closeAriaLabel`,3,`Close menu`),S=l(p,A),C=s(null),w=s(null);function T(e){if(!x(w))return;let t=Array.from(x(w).querySelectorAll(`button:not(:disabled)`));if(t.length===0)return;let n=document.activeElement,r=n?t.indexOf(n):-1,i=null;switch(e.key){case`ArrowDown`:i=r<0?0:(r+1)%t.length;break;case`ArrowUp`:i=r<0?t.length-1:(r-1+t.length)%t.length;break;case`Home`:i=0;break;case`End`:i=t.length-1;break}i!==null&&(e.preventDefault(),t[i].focus())}ee(pe(e,_({get open(){return p.open},get onClose(){return p.onClose},get title(){return v()},get ariaLabel(){return y()},get closeAriaLabel(){return b()},get footer(){return m},get class(){return p.class},onkeydown:T},()=>S,{get ref(){return x(w)},set ref(e){r(w,e,!0)},children:(e,t)=>{var n=N();i(n,21,()=>p.items,e=>e.id,(e,t)=>{_e(e,{get label(){return x(t).label},get description(){return x(t).description},get icon(){return x(t).icon},get selected(){return x(t).selected},get disabled(){return x(t).disabled},get tag(){return x(t).tag},onclick:()=>{p.onItemClick?.(x(t).id),x(C)?.close()}})}),u(n),d(e,n)},$$slots:{default:!0}})),e=>r(C,e,!0),()=>x(C)),t()}var A,j,M,N,P=e((()=>{m(),y(),fe(),ge(),A=new Set([`$$slots`,`$$events`,`$$legacy`,`open`,`onClose`,`title`,`items`,`onItemClick`,`version`,`actions`,`ariaLabel`,`closeAriaLabel`,`class`]),j=b(`<div class="pointer-events-auto relative flex items-center gap-2xs"><!></div>`),M=b(`<span class="pointer-events-auto relative typography-label-regular text-text"> </span> <!>`,1),N=b(`<div class="flex flex-col gap-2xs pl-2xs"></div>`),k.__docgen={data:[{name:`open`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`type`,type:`boolean`,text:`boolean`},static:!1,readonly:!1},{name:`onClose`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`function`,text:`() => void`},static:!1,readonly:!1},{name:`title`,visibility:`public`,description:`Drawer heading.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Orapulse Apps"`},{name:`items`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`type`,type:`array`,text:`MenuItemConfig[]`},static:!1,readonly:!1},{name:`onItemClick`,visibility:`public`,description:`Fired for enabled items; the drawer closes afterwards.`,keywords:[],kind:`let`,type:{kind:`function`,text:`(id: string) => void`},static:!1,readonly:!1},{name:`version`,visibility:`public`,description:`Version string in the footer (e.g. "v.1.0").`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1},{name:`actions`,visibility:`public`,description:`Footer action buttons (rendered bottom-right).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`ariaLabel`,visibility:`public`,description:`Aria label for the dialog.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Menu"`},{name:`closeAriaLabel`,visibility:`public`,description:`Aria label for the close button.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Close menu"`},{name:`class`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1}],name:`Menu.svelte`}}));function F(e,i){f(i,!0);function l(e,t){I.getChannel().emit(`updateStoryArgs`,{storyId:e,updatedArgs:{open:t}})}let m=s(!1);var h=q(),g=n(h);K(g,{name:`Playground`,args:{open:!0,items:[],onClose:()=>{}},template:(e,t=p,r=p)=>{var i=q(),s=n(i);{let e=v(()=>[{id:`workouts`,label:`Workouts`,description:`All your predesigned workouts.`,icon:L},{id:`session-timer`,label:`Session Timer`,description:`Set a one-time-timer.`,icon:R},{id:`session-workout`,label:`Session Workout`,description:`Design a one-time-workout.`,icon:z,selected:!0},{id:`loop`,label:`Loop`,description:`Display information within your studio.`,icon:B,disabled:!0,tag:`SOON`}]);k(s,_(t,{onClose:()=>l(r().id,!1),version:`v.1.0`,get actions(){return W},get items(){return x(e)}}))}var f=a(s,2),m=e=>{var t=J();D(o(t),{label:`Open menu`,kind:`primary`,size:`large`,onclick:()=>l(r().id,!0)}),u(t),d(e,t)};c(f,e=>{t().open||e(m)}),d(e,i)},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: the apps drawer wired to controls; close writes back to the arg.`}},__svelteCsf:{rawCode:`<Menu
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
{/if}`}}}),K(a(g,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: drawer over a realistic page - open it via the header's menu button
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
</div>`}},children:(e,t)=>{var n=Y(),i=o(n);he(i,{title:`Workouts`,right:e=>{D(e,{kind:`ghost-light`,size:`large`,get icon(){return V},"aria-label":`Menu`,onclick:()=>r(m,!0)})},$$slots:{right:!0}});var s=a(i,2),c=o(s);O(c,{title:`Storm 50`,duration:`50:00`,onclick:()=>{}}),O(a(c,2),{title:`HIIT Bootcamp`,duration:`45:00`,onclick:()=>{}}),u(s);var l=a(s,2);{let e=v(()=>[{id:`workouts`,label:`Workouts`,description:`All your predesigned workouts.`,icon:L},{id:`session-timer`,label:`Session Timer`,description:`Set a one-time-timer.`,icon:R},{id:`session-workout`,label:`Session Workout`,description:`Design a one-time-workout.`,icon:z,selected:!0},{id:`loop`,label:`Loop`,description:`Display information within your studio.`,icon:B,disabled:!0,tag:`SOON`}]);k(l,{get open(){return x(m)},onClose:()=>r(m,!1),version:`v.1.0`,get actions(){return W},get items(){return x(e)}})}u(n),d(e,n)},$$slots:{default:!0}}),d(e,h),t()}var I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),S(),oe(),P(),y(),ue(),me(),de(),le(),C(),{addons:I}=__STORYBOOK_MODULE_PREVIEW_API__,L=e=>{E(e,{stroke:1.5,"aria-hidden":`true`})},R=e=>{E(e,{stroke:1.5,"aria-hidden":`true`})},z=e=>{ce(e,{class:`size-6`,stroke:1.5,"aria-hidden":`true`})},B=e=>{E(e,{stroke:1.5,"aria-hidden":`true`})},V=e=>{ae(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},H=e=>{ie(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},U=e=>{re(e,{class:`size-full text-layer-error`,stroke:1.5,"aria-hidden":`true`})},W=e=>{var t=q(),r=n(t);D(r,{kind:`ghost-light`,size:`large`,get icon(){return H},"aria-label":`Settings`,onclick:()=>{}}),D(a(r,2),{kind:`ghost-light`,size:`large`,get icon(){return U},"aria-label":`Power`,onclick:()=>{}}),d(e,t)},G={title:`lib/components/Menu`,component:k,parameters:{layout:`fullscreen`,design:se(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=390-839`)},argTypes:{open:{control:`boolean`}}},{Story:K}=w(G),q=b(`<!> <!>`,1),J=b(`<div class="flex h-screen items-center justify-center bg-layer-background"><!></div>`),Y=b(`<div class="relative h-screen overflow-hidden bg-layer-background"><!> <div class="flex gap-s px-m pt-24"><!> <!></div> <!></div>`),F.__docgen={data:[],name:`Menu.stories.svelte`},X=T(F,G),Z=[`Playground`,`Overview`],Q={...X.Playground,tags:[`svelte-csf-v5`]},$={...X.Overview,tags:[`svelte-csf-v5`]}}))();export{$ as Overview,Q as Playground,Z as __namedExportsOrder,G as default};