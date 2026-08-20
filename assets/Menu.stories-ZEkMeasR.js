import{i as e}from"./preload-helper-xPQekRTU.js";import{$ as t,Bt as n,C as r,Et as i,G as a,Ht as o,I as s,Nt as c,O as l,Pt as u,Q as d,Tt as f,U as ee,V as p,Wt as m,X as te,_t as h,a as g,at as ne,bt as _,et as v,g as re,ht as ie,i as y,it as ae,kt as b,l as oe,lt as x,o as S,q as se,t as C,vt as w,w as ce,y as le}from"./iframe-CTxkQCdj.js";import{i as T,n as E,r as ue,t as D}from"./create-runtime-stories-Bndn4bxk.js";import{n as O,t as de}from"./cn-DaVh8cyJ.js";import{n as k,t as A}from"./Button-C9nft4hN.js";import{H as fe,It as pe,J as j,b as me,i as he,n as ge,t as M}from"./icons-Dzdu4CFk.js";import{n as _e,t as N}from"./Card-OXL3Mune.js";import{n as ve,t as ye}from"./focusTrap-C_3r2ayt.js";import{n as be,t as xe}from"./Header-DEdusB2w.js";import{n as Se,t as Ce}from"./MenuItem-CZAw5MHx.js";function P(e,o){u(o,!0);let ee=y(o,`title`,3,`Orapulse Apps`),m=y(o,`ariaLabel`,3,`Menu`),v=y(o,`closeAriaLabel`,3,`Close menu`),ae=g(o,F),b=i(!1);function S(){x(b)||(f(b,!0),setTimeout(()=>{o.onClose(),f(b,!1)},250))}function C(e){e.target===e.currentTarget&&S()}function T(e){e.key===`Escape`&&S()}a(()=>(document.addEventListener(`keydown`,T),()=>document.removeEventListener(`keydown`,T)));let E=i(null);function ue(e){if(!x(E))return;let t=Array.from(x(E).querySelectorAll(`button:not(:disabled)`));if(t.length===0)return;let n=document.activeElement,r=n?t.indexOf(n):-1,i=null;switch(e.key){case`ArrowDown`:i=r<0?0:(r+1)%t.length;break;case`ArrowUp`:i=r<0?t.length-1:(r-1+t.length)%t.length;break;case`Home`:i=0;break;case`End`:i=t.length-1;break}i!==null&&(e.preventDefault(),t[i].focus())}var D=t(),O=w(D),k=e=>{var t=L(),i=h(t),a=_(i,2);re(a,()=>({role:`dialog`,"aria-modal":`true`,"aria-label":m(),onkeydown:ue,class:`absolute inset-y-0 right-0 flex w-[25rem] max-w-full flex-col bg-layer-02 focus:outline-none ${x(b)?`animate-kds-drawer-out`:`animate-kds-drawer-in`}`,...ae}));var c=h(a),u=h(c),g=h(u,!0);n(u);var y=_(u,2);he(h(y),{class:`size-6`,stroke:1.5,"aria-hidden":`true`}),n(y),n(c);var w=_(c,2);s(w,21,()=>o.items,e=>e.id,(e,t)=>{Ce(e,{get label(){return x(t).label},get description(){return x(t).description},get icon(){return x(t).icon},get selected(){return x(t).selected},get disabled(){return x(t).disabled},get tag(){return x(t).tag},onclick:()=>{o.onItemClick?.(x(t).id),S()}})}),n(w);var T=_(w,2),D=h(T),O=h(D,!0);n(D);var k=_(D,2),A=e=>{var t=I();se(h(t),()=>o.actions),n(t),d(e,t)};p(k,e=>{o.actions&&e(A)}),n(T),n(a),l(a,e=>ye?.(e)),oe(a,e=>f(E,e),()=>x(E)),n(t),ie(e=>{r(t,1,e),r(i,1,`pointer-events-none absolute inset-0 bg-layer-background-overlay ${x(b)?`animate-kds-backdrop-out`:`animate-kds-backdrop-in`}`),te(g,ee()),le(y,`aria-label`,v()),te(O,o.version??``)},[()=>ce(de(`fixed inset-0 z-[100]`,o.class))]),ne(`click`,t,C),ne(`click`,y,S),d(e,t)};p(O,e=>{(o.open||x(b))&&e(k)}),d(e,D),c()}var F,I,L,we=e((()=>{m(),C(),ee(),Se(),M(),O(),ve(),F=new Set([`$$slots`,`$$events`,`$$legacy`,`open`,`onClose`,`title`,`items`,`onItemClick`,`version`,`actions`,`ariaLabel`,`closeAriaLabel`,`class`]),I=v(`<div class="pointer-events-auto relative flex items-center gap-2xs"><!></div>`),L=v(`<div><div aria-hidden="true"></div> <div><header class="flex shrink-0 items-center justify-between gap-xs py-s pr-m pl-l"><h2 class="text-large min-w-0 flex-1 text-text"> </h2> <button type="button" class="inline-flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-rounded bg-layer-ghost text-icon backdrop-blur-[0.625rem] hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:kds-selected"><!></button></header> <div class="flex min-h-0 flex-1 flex-col gap-2xs overflow-y-auto pb-20 pl-2xs [&amp;::-webkit-scrollbar]:hidden [scrollbar-width:none]"></div> <footer class="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-xs py-s pr-m pl-l before:pointer-events-none before:absolute before:inset-0 before:bg-layer-02/70 before:backdrop-blur-[0.625rem] before:[mask-image:linear-gradient(to_bottom,transparent,black_55%)]"><span class="pointer-events-auto relative text-label text-text"> </span> <!></footer></div></div>`),ae([`click`]),P.__docgen={data:[{name:`open`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`type`,type:`boolean`,text:`boolean`},static:!1,readonly:!1},{name:`onClose`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`function`,text:`() => void`},static:!1,readonly:!1},{name:`title`,visibility:`public`,description:`Drawer heading.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Orapulse Apps"`},{name:`items`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`type`,type:`array`,text:`MenuItemConfig[]`},static:!1,readonly:!1},{name:`onItemClick`,visibility:`public`,description:`Fired for enabled items; the drawer closes afterwards.`,keywords:[],kind:`let`,type:{kind:`function`,text:`(id: string) => void`},static:!1,readonly:!1},{name:`version`,visibility:`public`,description:`Version string in the footer (e.g. "v.1.0").`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1},{name:`actions`,visibility:`public`,description:`Footer action buttons (rendered bottom-right).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`ariaLabel`,visibility:`public`,description:`Aria label for the dialog.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Menu"`},{name:`closeAriaLabel`,visibility:`public`,description:`Aria label for the close button.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Close menu"`},{name:`class`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1}],name:`Menu.svelte`}}));function R(e,t){u(t,!0);function r(e,t){z.getChannel().emit(`updateStoryArgs`,{storyId:e,updatedArgs:{open:t}})}let a=i(!1);var s=X(),l=w(s);Y(l,{name:`Playground`,args:{open:!0,items:[],onClose:()=>{}},template:(e,t=o,i=o)=>{var a=X(),s=w(a);{let e=b(()=>[{id:`workouts`,label:`Workouts`,description:`All your predesigned workouts.`,icon:B},{id:`session-timer`,label:`Session Timer`,description:`Set a one-time-timer.`,icon:V},{id:`session-workout`,label:`Session Workout`,description:`Design a one-time-workout.`,icon:H,selected:!0},{id:`loop`,label:`Loop`,description:`Display information within your studio.`,icon:U,disabled:!0,tag:`SOON`}]);P(s,S(t,{onClose:()=>r(i().id,!1),version:`v.1.0`,get actions(){return q},get items(){return x(e)}}))}var c=_(s,2),l=e=>{var t=Te();A(h(t),{label:`Open menu`,kind:`primary`,size:`large`,onclick:()=>r(i().id,!0)}),n(t),d(e,t)};p(c,e=>{t().open||e(l)}),d(e,a)},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: the apps drawer wired to controls; close writes back to the arg.`}},__svelteCsf:{rawCode:`<Menu
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
{/if}`}}}),Y(_(l,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: drawer over a realistic page - open it via the header's menu button
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
</div>`}},children:(e,t)=>{var r=Z(),i=h(r);xe(i,{title:`Workouts`,right:e=>{A(e,{kind:`icon`,size:`large`,get icon(){return W},"aria-label":`Menu`,onclick:()=>f(a,!0)})},$$slots:{right:!0}});var o=_(i,2),s=h(o);N(s,{title:`Storm 50`,duration:`50:00`,onclick:()=>{}}),N(_(s,2),{title:`HIIT Bootcamp`,duration:`45:00`,onclick:()=>{}}),n(o);var c=_(o,2);{let e=b(()=>[{id:`workouts`,label:`Workouts`,description:`All your predesigned workouts.`,icon:B},{id:`session-timer`,label:`Session Timer`,description:`Set a one-time-timer.`,icon:V},{id:`session-workout`,label:`Session Workout`,description:`Design a one-time-workout.`,icon:H,selected:!0},{id:`loop`,label:`Loop`,description:`Display information within your studio.`,icon:U,disabled:!0,tag:`SOON`}]);P(c,{get open(){return x(a)},onClose:()=>f(a,!1),version:`v.1.0`,get actions(){return q},get items(){return x(e)}})}n(r),d(e,r)},$$slots:{default:!0}}),d(e,s),c()}var z,B,V,H,U,W,G,K,q,J,Y,X,Te,Z,Q,Ee,De,$;e((()=>{m(),T(),we(),C(),k(),be(),_e(),M(),E(),{addons:z}=__STORYBOOK_MODULE_PREVIEW_API__,B=e=>{j(e,{stroke:1.5,"aria-hidden":`true`})},V=e=>{j(e,{stroke:1.5,"aria-hidden":`true`})},H=e=>{ge(e,{class:`size-6`,stroke:1.5,"aria-hidden":`true`})},U=e=>{j(e,{stroke:1.5,"aria-hidden":`true`})},W=e=>{fe(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},G=e=>{pe(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},K=e=>{me(e,{class:`size-full text-layer-error`,stroke:1.5,"aria-hidden":`true`})},q=e=>{var t=X(),n=w(t);A(n,{kind:`icon`,size:`large`,get icon(){return G},"aria-label":`Settings`,onclick:()=>{}}),A(_(n,2),{kind:`icon`,size:`large`,get icon(){return K},"aria-label":`Power`,onclick:()=>{}}),d(e,t)},J={title:`lib/components/Menu`,component:P,parameters:{layout:`fullscreen`},argTypes:{open:{control:`boolean`}}},{Story:Y}=ue(J),X=v(`<!> <!>`,1),Te=v(`<div class="flex h-screen items-center justify-center bg-layer-background"><!></div>`),Z=v(`<div class="relative h-screen overflow-hidden bg-layer-background"><!> <div class="flex gap-s px-m pt-24"><!> <!></div> <!></div>`),R.__docgen={data:[],name:`Menu.stories.svelte`},Q=D(R,J),Ee=[`Playground`,`Overview`],De={...Q.Playground,tags:[`svelte-csf-v5`]},$={...Q.Overview,tags:[`svelte-csf-v5`]}}))();export{$ as Overview,De as Playground,Ee as __namedExportsOrder,J as default};