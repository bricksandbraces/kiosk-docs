import{i as e}from"./preload-helper-xPQekRTU.js";import{Bt as t,Et as n,Ht as r,I as i,Nt as a,Pt as o,Q as s,Tt as c,V as l,Wt as u,X as d,_t as f,a as p,bt as m,et as h,ht as ee,i as g,kt as _,l as te,lt as v,o as y,q as ne,t as b,vt as x}from"./iframe-BlH5bPBd.js";import{i as S,n as C,r as w,t as T}from"./create-runtime-stories-BqLUoeIS.js";import{n as re,t as E}from"./Button-BRZlexI0.js";import{H as ie,It as ae,J as D,b as oe,n as se,t as ce}from"./icons-_JpRgg3j.js";import{n as O,t as k}from"./Card-BTmUBaYc.js";import{n as le,t as ue}from"./Drawer-DM0smf-g.js";import{n as de,t as fe}from"./Header-e_OETsfH.js";import{n as pe,t as me}from"./MenuItem-CummJZJy.js";function A(e,r){o(r,!0);let u=e=>{var n=N(),i=x(n),a=f(i,!0);t(i);var o=m(i,2),c=e=>{var n=M();ne(f(n),()=>r.actions),t(n),s(e,n)};l(o,e=>{r.actions&&e(c)}),ee(()=>d(a,r.version??``)),s(e,n)},h=g(r,`title`,3,`Orapulse Apps`),_=g(r,`ariaLabel`,3,`Menu`),b=g(r,`closeAriaLabel`,3,`Close menu`),S=p(r,j),C=n(null),w=n(null);function T(e){if(!v(w))return;let t=Array.from(v(w).querySelectorAll(`button:not(:disabled)`));if(t.length===0)return;let n=document.activeElement,r=n?t.indexOf(n):-1,i=null;switch(e.key){case`ArrowDown`:i=r<0?0:(r+1)%t.length;break;case`ArrowUp`:i=r<0?t.length-1:(r-1+t.length)%t.length;break;case`Home`:i=0;break;case`End`:i=t.length-1;break}i!==null&&(e.preventDefault(),t[i].focus())}te(ue(e,y({get open(){return r.open},get onClose(){return r.onClose},get title(){return h()},get ariaLabel(){return _()},get closeAriaLabel(){return b()},get footer(){return u},get class(){return r.class},onkeydown:T},()=>S,{get ref(){return v(w)},set ref(e){c(w,e,!0)},children:(e,n)=>{var a=P();i(a,21,()=>r.items,e=>e.id,(e,t)=>{me(e,{get label(){return v(t).label},get description(){return v(t).description},get icon(){return v(t).icon},get selected(){return v(t).selected},get disabled(){return v(t).disabled},get tag(){return v(t).tag},onclick:()=>{r.onItemClick?.(v(t).id),v(C)?.close()}})}),t(a),s(e,a)},$$slots:{default:!0}})),e=>c(C,e,!0),()=>v(C)),a()}var j,M,N,P,he=e((()=>{u(),b(),le(),pe(),j=new Set([`$$slots`,`$$events`,`$$legacy`,`open`,`onClose`,`title`,`items`,`onItemClick`,`version`,`actions`,`ariaLabel`,`closeAriaLabel`,`class`]),M=h(`<div class="pointer-events-auto relative flex items-center gap-2xs"><!></div>`),N=h(`<span class="pointer-events-auto relative text-label text-text"> </span> <!>`,1),P=h(`<div class="flex flex-col gap-2xs pl-2xs"></div>`),A.__docgen={data:[{name:`open`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`type`,type:`boolean`,text:`boolean`},static:!1,readonly:!1},{name:`onClose`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`function`,text:`() => void`},static:!1,readonly:!1},{name:`title`,visibility:`public`,description:`Drawer heading.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Orapulse Apps"`},{name:`items`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`type`,type:`array`,text:`MenuItemConfig[]`},static:!1,readonly:!1},{name:`onItemClick`,visibility:`public`,description:`Fired for enabled items; the drawer closes afterwards.`,keywords:[],kind:`let`,type:{kind:`function`,text:`(id: string) => void`},static:!1,readonly:!1},{name:`version`,visibility:`public`,description:`Version string in the footer (e.g. "v.1.0").`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1},{name:`actions`,visibility:`public`,description:`Footer action buttons (rendered bottom-right).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`ariaLabel`,visibility:`public`,description:`Aria label for the dialog.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Menu"`},{name:`closeAriaLabel`,visibility:`public`,description:`Aria label for the close button.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Close menu"`},{name:`class`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1}],name:`Menu.svelte`}}));function F(e,i){o(i,!0);function u(e,t){I.getChannel().emit(`updateStoryArgs`,{storyId:e,updatedArgs:{open:t}})}let d=n(!1);var p=q(),h=x(p);K(h,{name:`Playground`,args:{open:!0,items:[],onClose:()=>{}},template:(e,n=r,i=r)=>{var a=q(),o=x(a);{let e=_(()=>[{id:`workouts`,label:`Workouts`,description:`All your predesigned workouts.`,icon:L},{id:`session-timer`,label:`Session Timer`,description:`Set a one-time-timer.`,icon:R},{id:`session-workout`,label:`Session Workout`,description:`Design a one-time-workout.`,icon:z,selected:!0},{id:`loop`,label:`Loop`,description:`Display information within your studio.`,icon:B,disabled:!0,tag:`SOON`}]);A(o,y(n,{onClose:()=>u(i().id,!1),version:`v.1.0`,get actions(){return W},get items(){return v(e)}}))}var c=m(o,2),d=e=>{var n=J();E(f(n),{label:`Open menu`,kind:`primary`,size:`large`,onclick:()=>u(i().id,!0)}),t(n),s(e,n)};l(c,e=>{n().open||e(d)}),s(e,a)},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: the apps drawer wired to controls; close writes back to the arg.`}},__svelteCsf:{rawCode:`<Menu
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
{/if}`}}}),K(m(h,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: drawer over a realistic page - open it via the header's menu button
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
</div>`}},children:(e,n)=>{var r=Y(),i=f(r);fe(i,{title:`Workouts`,right:e=>{E(e,{kind:`icon`,size:`large`,get icon(){return V},"aria-label":`Menu`,onclick:()=>c(d,!0)})},$$slots:{right:!0}});var a=m(i,2),o=f(a);k(o,{title:`Storm 50`,duration:`50:00`,onclick:()=>{}}),k(m(o,2),{title:`HIIT Bootcamp`,duration:`45:00`,onclick:()=>{}}),t(a);var l=m(a,2);{let e=_(()=>[{id:`workouts`,label:`Workouts`,description:`All your predesigned workouts.`,icon:L},{id:`session-timer`,label:`Session Timer`,description:`Set a one-time-timer.`,icon:R},{id:`session-workout`,label:`Session Workout`,description:`Design a one-time-workout.`,icon:z,selected:!0},{id:`loop`,label:`Loop`,description:`Display information within your studio.`,icon:B,disabled:!0,tag:`SOON`}]);A(l,{get open(){return v(d)},onClose:()=>c(d,!1),version:`v.1.0`,get actions(){return W},get items(){return v(e)}})}t(r),s(e,r)},$$slots:{default:!0}}),s(e,p),a()}var I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),S(),he(),b(),re(),de(),O(),ce(),C(),{addons:I}=__STORYBOOK_MODULE_PREVIEW_API__,L=e=>{D(e,{stroke:1.5,"aria-hidden":`true`})},R=e=>{D(e,{stroke:1.5,"aria-hidden":`true`})},z=e=>{se(e,{class:`size-6`,stroke:1.5,"aria-hidden":`true`})},B=e=>{D(e,{stroke:1.5,"aria-hidden":`true`})},V=e=>{ie(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},H=e=>{ae(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},U=e=>{oe(e,{class:`size-full text-layer-error`,stroke:1.5,"aria-hidden":`true`})},W=e=>{var t=q(),n=x(t);E(n,{kind:`icon`,size:`large`,get icon(){return H},"aria-label":`Settings`,onclick:()=>{}}),E(m(n,2),{kind:`icon`,size:`large`,get icon(){return U},"aria-label":`Power`,onclick:()=>{}}),s(e,t)},G={title:`lib/components/Menu`,component:A,parameters:{layout:`fullscreen`},argTypes:{open:{control:`boolean`}}},{Story:K}=w(G),q=h(`<!> <!>`,1),J=h(`<div class="flex h-screen items-center justify-center bg-layer-background"><!></div>`),Y=h(`<div class="relative h-screen overflow-hidden bg-layer-background"><!> <div class="flex gap-s px-m pt-24"><!> <!></div> <!></div>`),F.__docgen={data:[],name:`Menu.stories.svelte`},X=T(F,G),Z=[`Playground`,`Overview`],Q={...X.Playground,tags:[`svelte-csf-v5`]},$={...X.Overview,tags:[`svelte-csf-v5`]}}))();export{$ as Overview,Q as Playground,Z as __namedExportsOrder,G as default};