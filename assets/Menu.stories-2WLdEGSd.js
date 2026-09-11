import{i as e}from"./preload-helper-xPQekRTU.js";import{Bt as t,Dt as n,It as r,Mt as i,Nt as a,Q as o,R as s,Tt as c,U as l,Vt as u,Y as d,Yt as f,Zt as p,a as m,et as h,ft as g,i as _,l as ee,nt as v,o as y,qt as b,t as x,wt as S,yt as te}from"./iframe-BRGrjxrt.js";import{a as C,i as w,n as T,o as E,r as ne,t as re}from"./create-runtime-stories-CTRa-s8D.js";import{r as ie,t as D}from"./Button-BTV_Ljr7.js";import{H as ae,It as oe,J as O,b as se,n as ce,t as le}from"./icons-C9IEFCjo.js";import{n as ue,t as k}from"./Card-CHy3u8q6.js";import{n as de,t as fe}from"./Drawer-DremFDvN.js";import{n as pe,t as me}from"./Header-DH_bMtQx.js";import{n as he,t as ge}from"./MenuItem-724JZVus.js";function A(e,r){u(r,!0);let f=e=>{var t=N(),i=c(t),a=S(i,!0);b(i);var s=n(i,2),u=e=>{var t=M();d(S(t),()=>r.actions),b(t),h(e,t)};l(s,e=>{r.actions&&e(u)}),te(()=>o(a,r.version??``)),h(e,t)},p=_(r,`title`,3,`Orapulse Apps`),v=_(r,`ariaLabel`,3,`Menu`),x=_(r,`closeAriaLabel`,3,`Close menu`),C=m(r,j),w=a(null),T=a(null);function E(e){if(!g(T))return;let t=Array.from(g(T).querySelectorAll(`button:not(:disabled)`));if(t.length===0)return;let n=document.activeElement,r=n?t.indexOf(n):-1,i=null;switch(e.key){case`ArrowDown`:i=r<0?0:(r+1)%t.length;break;case`ArrowUp`:i=r<0?t.length-1:(r-1+t.length)%t.length;break;case`Home`:i=0;break;case`End`:i=t.length-1;break}i!==null&&(e.preventDefault(),t[i].focus())}ee(fe(e,y({get open(){return r.open},get onClose(){return r.onClose},get title(){return p()},get ariaLabel(){return v()},get closeAriaLabel(){return x()},get footer(){return f},get class(){return r.class},onkeydown:E},()=>C,{get ref(){return g(T)},set ref(e){i(T,e,!0)},children:(e,t)=>{var n=P();s(n,21,()=>r.items,e=>e.id,(e,t)=>{ge(e,{get label(){return g(t).label},get description(){return g(t).description},get icon(){return g(t).icon},get selected(){return g(t).selected},get disabled(){return g(t).disabled},get tag(){return g(t).tag},onclick:()=>{r.onItemClick?.(g(t).id),g(w)?.close()}})}),b(n),h(e,n)},$$slots:{default:!0}})),e=>i(w,e,!0),()=>g(w)),t()}var j,M,N,P,_e=e((()=>{p(),x(),de(),he(),j=new Set([`$$slots`,`$$events`,`$$legacy`,`open`,`onClose`,`title`,`items`,`onItemClick`,`version`,`actions`,`ariaLabel`,`closeAriaLabel`,`class`]),M=v(`<div class="pointer-events-auto relative flex items-center gap-2xs"><!></div>`),N=v(`<span class="pointer-events-auto relative text-label text-text"> </span> <!>`,1),P=v(`<div class="flex flex-col gap-2xs pl-2xs"></div>`),A.__docgen={data:[{name:`open`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`type`,type:`boolean`,text:`boolean`},static:!1,readonly:!1},{name:`onClose`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`function`,text:`() => void`},static:!1,readonly:!1},{name:`title`,visibility:`public`,description:`Drawer heading.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Orapulse Apps"`},{name:`items`,visibility:`public`,keywords:[{name:`required`,description:``}],kind:`let`,type:{kind:`type`,type:`array`,text:`MenuItemConfig[]`},static:!1,readonly:!1},{name:`onItemClick`,visibility:`public`,description:`Fired for enabled items; the drawer closes afterwards.`,keywords:[],kind:`let`,type:{kind:`function`,text:`(id: string) => void`},static:!1,readonly:!1},{name:`version`,visibility:`public`,description:`Version string in the footer (e.g. "v.1.0").`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1},{name:`actions`,visibility:`public`,description:`Footer action buttons (rendered bottom-right).`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`ariaLabel`,visibility:`public`,description:`Aria label for the dialog.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Menu"`},{name:`closeAriaLabel`,visibility:`public`,description:`Aria label for the close button.`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1,defaultValue:`"Close menu"`},{name:`class`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1}],name:`Menu.svelte`}}));function F(e,o){u(o,!0);function s(e,t){I.getChannel().emit(`updateStoryArgs`,{storyId:e,updatedArgs:{open:t}})}let d=a(!1);var p=q(),m=c(p);K(m,{name:`Playground`,args:{open:!0,items:[],onClose:()=>{}},template:(e,t=f,i=f)=>{var a=q(),o=c(a);{let e=r(()=>[{id:`workouts`,label:`Workouts`,description:`All your predesigned workouts.`,icon:L},{id:`session-timer`,label:`Session Timer`,description:`Set a one-time-timer.`,icon:R},{id:`session-workout`,label:`Session Workout`,description:`Design a one-time-workout.`,icon:z,selected:!0},{id:`loop`,label:`Loop`,description:`Display information within your studio.`,icon:B,disabled:!0,tag:`SOON`}]);A(o,y(t,{onClose:()=>s(i().id,!1),version:`v.1.0`,get actions(){return W},get items(){return g(e)}}))}var u=n(o,2),d=e=>{var t=J();D(S(t),{label:`Open menu`,kind:`primary`,size:`large`,onclick:()=>s(i().id,!0)}),b(t),h(e,t)};l(u,e=>{t().open||e(d)}),h(e,a)},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: the apps drawer wired to controls; close writes back to the arg.`}},__svelteCsf:{rawCode:`<Menu
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
{/if}`}}}),K(n(m,2),{name:`Overview`,asChild:!0,parameters:{controls:{disable:!0},docs:{description:{story:`Overview: drawer over a realistic page - open it via the header's menu button
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
</div>`}},children:(e,t)=>{var a=Y(),o=S(a);me(o,{title:`Workouts`,right:e=>{D(e,{kind:`icon`,size:`large`,get icon(){return V},"aria-label":`Menu`,onclick:()=>i(d,!0)})},$$slots:{right:!0}});var s=n(o,2),c=S(s);k(c,{title:`Storm 50`,duration:`50:00`,onclick:()=>{}}),k(n(c,2),{title:`HIIT Bootcamp`,duration:`45:00`,onclick:()=>{}}),b(s);var l=n(s,2);{let e=r(()=>[{id:`workouts`,label:`Workouts`,description:`All your predesigned workouts.`,icon:L},{id:`session-timer`,label:`Session Timer`,description:`Set a one-time-timer.`,icon:R},{id:`session-workout`,label:`Session Workout`,description:`Design a one-time-workout.`,icon:z,selected:!0},{id:`loop`,label:`Loop`,description:`Display information within your studio.`,icon:B,disabled:!0,tag:`SOON`}]);A(l,{get open(){return g(d)},onClose:()=>i(d,!1),version:`v.1.0`,get actions(){return W},get items(){return g(e)}})}b(a),h(e,a)},$$slots:{default:!0}}),h(e,p),t()}var I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),E(),w(),_e(),x(),ie(),pe(),ue(),le(),T(),{addons:I}=__STORYBOOK_MODULE_PREVIEW_API__,L=e=>{O(e,{stroke:1.5,"aria-hidden":`true`})},R=e=>{O(e,{stroke:1.5,"aria-hidden":`true`})},z=e=>{ce(e,{class:`size-6`,stroke:1.5,"aria-hidden":`true`})},B=e=>{O(e,{stroke:1.5,"aria-hidden":`true`})},V=e=>{ae(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},H=e=>{oe(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},U=e=>{se(e,{class:`size-full text-layer-error`,stroke:1.5,"aria-hidden":`true`})},W=e=>{var t=q(),r=c(t);D(r,{kind:`icon`,size:`large`,get icon(){return H},"aria-label":`Settings`,onclick:()=>{}}),D(n(r,2),{kind:`icon`,size:`large`,get icon(){return U},"aria-label":`Power`,onclick:()=>{}}),h(e,t)},G={title:`lib/components/Menu`,component:A,parameters:{layout:`fullscreen`,design:ne(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=390-839`)},argTypes:{open:{control:`boolean`}}},{Story:K}=C(G),q=v(`<!> <!>`,1),J=v(`<div class="flex h-screen items-center justify-center bg-layer-background"><!></div>`),Y=v(`<div class="relative h-screen overflow-hidden bg-layer-background"><!> <div class="flex gap-s px-m pt-24"><!> <!></div> <!></div>`),F.__docgen={data:[],name:`Menu.stories.svelte`},X=re(F,G),Z=[`Playground`,`Overview`],Q={...X.Playground,tags:[`svelte-csf-v5`]},$={...X.Overview,tags:[`svelte-csf-v5`]}}))();export{$ as Overview,Q as Playground,Z as __namedExportsOrder,G as default};