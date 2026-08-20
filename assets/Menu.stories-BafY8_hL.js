import{i as e}from"./preload-helper-xPQekRTU.js";import{$ as t,C as n,Et as r,G as i,I as a,Nt as o,O as s,Pt as c,Q as l,Tt as u,U as d,Ut as f,V as p,Vt as m,X as h,_t as g,a as ee,at as _,bt as v,et as y,g as te,ht as ne,i as b,it as x,kt as S,l as re,lt as C,o as w,q as ie,t as T,vt as E,w as ae,y as oe,zt as D}from"./iframe-BONPZCB9.js";import{i as O,n as k,r as se,t as A}from"./create-runtime-stories-Dj_I1_Jk.js";import{n as j,t as ce}from"./cn-tO-yNX2a.js";import{n as M,t as N}from"./Button-C1APfHxY.js";import{H as le,It as ue,J as P,b as de,i as fe,n as pe,t as F}from"./icons-DvRITkRF.js";import{n as me,t as I}from"./Card-BPTKSfvj.js";import{n as he,t as ge}from"./focusTrap-C_3r2ayt.js";import{n as _e,t as ve}from"./Header-BAtgcTqF.js";import{n as ye,t as be}from"./MenuItem-nSaWwQOK.js";function L(e,d){c(d,!0);let f=b(d,`title`,3,`Orapulse Apps`),m=b(d,`ariaLabel`,3,`Menu`),y=b(d,`closeAriaLabel`,3,`Close menu`),x=ee(d,xe),S=r(!1);function w(){C(S)||(u(S,!0),setTimeout(()=>{d.onClose(),u(S,!1)},250))}function T(e){e.target===e.currentTarget&&w()}function O(e){e.key===`Escape`&&w()}i(()=>(document.addEventListener(`keydown`,O),()=>document.removeEventListener(`keydown`,O)));let k=r(null);function se(e){if(!C(k))return;let t=Array.from(C(k).querySelectorAll(`button:not(:disabled)`));if(t.length===0)return;let n=document.activeElement,r=n?t.indexOf(n):-1,i=null;switch(e.key){case`ArrowDown`:i=r<0?0:(r+1)%t.length;break;case`ArrowUp`:i=r<0?t.length-1:(r-1+t.length)%t.length;break;case`Home`:i=0;break;case`End`:i=t.length-1;break}i!==null&&(e.preventDefault(),t[i].focus())}var A=t(),j=E(A),M=e=>{var t=z(),r=g(t),i=v(r,2);te(i,()=>({role:`dialog`,"aria-modal":`true`,"aria-label":m(),onkeydown:se,class:`absolute inset-y-0 right-0 flex w-[25rem] max-w-full flex-col bg-layer-02 focus:outline-none ${C(S)?`animate-kds-drawer-out`:`animate-kds-drawer-in`}`,...x}));var o=g(i),c=g(o),ee=g(c,!0);D(c);var b=v(c,2);fe(g(b),{class:`size-6`,stroke:1.5,"aria-hidden":`true`}),D(b),D(o);var E=v(o,2);a(E,21,()=>d.items,e=>e.id,(e,t)=>{be(e,{get label(){return C(t).label},get description(){return C(t).description},get icon(){return C(t).icon},get selected(){return C(t).selected},get disabled(){return C(t).disabled},get tag(){return C(t).tag},onclick:()=>{d.onItemClick?.(C(t).id),w()}})}),D(E);var O=v(E,2),A=g(O),j=g(A,!0);D(A);var M=v(A,2),N=e=>{var t=R();ie(g(t),()=>d.actions),D(t),l(e,t)};p(M,e=>{d.actions&&e(N)}),D(O),D(i),s(i,e=>ge?.(e)),re(i,e=>u(k,e),()=>C(k)),D(t),ne(e=>{n(t,1,e),n(r,1,`pointer-events-none absolute inset-0 bg-layer-background-overlay ${C(S)?`animate-kds-backdrop-out`:`animate-kds-backdrop-in`}`),h(ee,f()),oe(b,`aria-label`,y()),h(j,d.version??``)},[()=>ae(ce(`fixed inset-0 z-[100]`,d.class))]),_(`click`,t,T),_(`click`,b,w),l(e,t)};p(j,e=>{(d.open||C(S))&&e(M)}),l(e,A),o()}var xe,R,z,Se=e((()=>{f(),T(),d(),ye(),F(),j(),he(),xe=new Set([`$$slots`,`$$events`,`$$legacy`,`open`,`onClose`,`title`,`items`,`onItemClick`,`version`,`actions`,`ariaLabel`,`closeAriaLabel`,`class`]),R=y(`<div class="pointer-events-auto relative flex items-center gap-2xs"><!></div>`),z=y(`<div><div aria-hidden="true"></div> <div><header class="flex shrink-0 items-center justify-between gap-xs py-s pr-m pl-l"><h2 class="text-large min-w-0 flex-1 text-text"> </h2> <button type="button" class="inline-flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-rounded bg-layer-ghost text-icon backdrop-blur-[0.625rem] hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:kds-selected"><!></button></header> <div class="flex min-h-0 flex-1 flex-col gap-2xs overflow-y-auto pb-20 pl-2xs [&amp;::-webkit-scrollbar]:hidden [scrollbar-width:none]"></div> <footer class="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-xs py-s pr-m pl-l before:pointer-events-none before:absolute before:inset-0 before:bg-layer-02/70 before:backdrop-blur-[0.625rem] before:[mask-image:linear-gradient(to_bottom,transparent,black_55%)]"><span class="pointer-events-auto relative text-label text-text"> </span> <!></footer></div></div>`),x([`click`]),L.__docgen={data:[{name:`open`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`type`,type:`boolean`,text:`boolean`},static:!1,readonly:!1},{name:`onClose`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`function`,text:`() => void`},static:!1,readonly:!1},{name:`title`,visibility:`public`,description:`Drawer heading.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Orapulse Apps"`},{name:`items`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`type`,type:`array`,text:`MenuItemConfig[]`},static:!1,readonly:!1},{name:`onItemClick`,visibility:`public`,description:`Fired for enabled items; the drawer closes afterwards.`,keywords:[],kind:`let`,type:{kind:`function`,text:`(id: string) => void`},static:!1,readonly:!1},{name:`version`,visibility:`public`,description:`Version string in the footer (e.g. "v.1.0").`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1},{name:`actions`,visibility:`public`,description:`Footer action buttons (rendered bottom-right).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`ariaLabel`,visibility:`public`,description:`Aria label for the dialog.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Menu"`},{name:`closeAriaLabel`,visibility:`public`,description:`Aria label for the close button.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Close menu"`},{name:`class`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1}],name:`Menu.svelte`}}));function B(e,t){c(t,!0);function n(e,t){V.getChannel().emit(`updateStoryArgs`,{storyId:e,updatedArgs:{open:t}})}let i=r(!1);var a=X(),s=E(a);Y(s,{name:`Playground`,args:{open:!0,items:[],onClose:()=>{}},template:(e,t=m,r=m)=>{var i=X(),a=E(i);{let e=S(()=>[{id:`workouts`,label:`Workouts`,description:`All your predesigned workouts.`,icon:H},{id:`session-timer`,label:`Session Timer`,description:`Set a one-time-timer.`,icon:U},{id:`session-workout`,label:`Session Workout`,description:`Design a one-time-workout.`,icon:W,selected:!0},{id:`loop`,label:`Loop`,description:`Display information within your studio.`,icon:G,disabled:!0,tag:`SOON`}]);L(a,w(t,{onClose:()=>n(r().id,!1),version:`v.1.0`,get actions(){return q},get items(){return C(e)}}))}var o=v(a,2),s=e=>{var t=Te();N(g(t),{label:`Open menu`,kind:`primary`,size:`large`,onclick:()=>n(r().id,!0)}),D(t),l(e,t)};p(o,e=>{t().open||e(s)}),l(e,i)},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: the apps drawer wired to controls; close writes back to the arg.`}},__svelteCsf:{rawCode:`<Menu
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
{/if}`}}}),Y(v(s,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: drawer over a realistic page - open it via the header's menu button
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
</div>`}},children:(e,t)=>{var n=Z(),r=g(n);ve(r,{title:`Workouts`,right:e=>{N(e,{kind:`icon`,size:`large`,get icon(){return K},"aria-label":`Menu`,onclick:()=>u(i,!0)})},$$slots:{right:!0}});var a=v(r,2),o=g(a);I(o,{title:`Storm 50`,duration:`50:00`,onclick:()=>{}}),I(v(o,2),{title:`HIIT Bootcamp`,duration:`45:00`,onclick:()=>{}}),D(a);var s=v(a,2);{let e=S(()=>[{id:`workouts`,label:`Workouts`,description:`All your predesigned workouts.`,icon:H},{id:`session-timer`,label:`Session Timer`,description:`Set a one-time-timer.`,icon:U},{id:`session-workout`,label:`Session Workout`,description:`Design a one-time-workout.`,icon:W,selected:!0},{id:`loop`,label:`Loop`,description:`Display information within your studio.`,icon:G,disabled:!0,tag:`SOON`}]);L(s,{get open(){return C(i)},onClose:()=>u(i,!1),version:`v.1.0`,get actions(){return q},get items(){return C(e)}})}D(n),l(e,n)},$$slots:{default:!0}}),l(e,a),o()}var V,H,U,W,G,K,Ce,we,q,J,Y,X,Te,Z,Q,Ee,De,$;e((()=>{f(),O(),Se(),T(),M(),_e(),me(),F(),k(),{addons:V}=__STORYBOOK_MODULE_PREVIEW_API__,H=e=>{P(e,{stroke:1.5,"aria-hidden":`true`})},U=e=>{P(e,{stroke:1.5,"aria-hidden":`true`})},W=e=>{pe(e,{class:`size-6`,stroke:1.5,"aria-hidden":`true`})},G=e=>{P(e,{stroke:1.5,"aria-hidden":`true`})},K=e=>{le(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},Ce=e=>{ue(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},we=e=>{de(e,{class:`size-full text-layer-error`,stroke:1.5,"aria-hidden":`true`})},q=e=>{var t=X(),n=E(t);N(n,{kind:`icon`,size:`large`,get icon(){return Ce},"aria-label":`Settings`,onclick:()=>{}}),N(v(n,2),{kind:`icon`,size:`large`,get icon(){return we},"aria-label":`Power`,onclick:()=>{}}),l(e,t)},J={title:`lib/components/Menu`,component:L,parameters:{layout:`fullscreen`},argTypes:{open:{control:`boolean`}}},{Story:Y}=se(J),X=y(`<!> <!>`,1),Te=y(`<div class="flex h-screen items-center justify-center bg-layer-background"><!></div>`),Z=y(`<div class="relative h-screen overflow-hidden bg-layer-background"><!> <div class="flex gap-s px-m pt-24"><!> <!></div> <!></div>`),B.__docgen={data:[],name:`Menu.stories.svelte`},Q=A(B,J),Ee=[`Playground`,`Overview`],De={...Q.Playground,tags:[`svelte-csf-v5`]},$={...Q.Overview,tags:[`svelte-csf-v5`]}}))();export{$ as Overview,De as Playground,Ee as __namedExportsOrder,J as default};