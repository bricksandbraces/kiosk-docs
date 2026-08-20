import{i as e}from"./preload-helper-xPQekRTU.js";import{Bt as t,Ht as n,Nt as r,Pt as i,Q as a,Wt as o,_t as s,bt as c,et as l,o as u,s as d,t as f,vt as p}from"./iframe-VHesseGD.js";import{a as m,i as h,n as g,r as _,t as v}from"./create-runtime-stories-BjvPR7wu.js";import{J as y,n as b,t as x}from"./icons-B1XCzuMJ.js";import{n as S,t as C}from"./MenuItem-BwRV34iz.js";function w(e,o){i(o,!1),d();var l=M(),f=p(l);k(f,{name:`Playground`,args:{label:`Workouts`,description:`All your predesigned workouts.`},template:(e,r=n)=>{var i=A();C(s(i),u(r,{get icon(){return T}})),t(i),a(e,i)},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: every prop wired to live controls, on the drawer's layer-02 surface
    with the panel's left-only inset.`}},__svelteCsf:{rawCode:`<div class="w-[25rem] max-w-full bg-layer-02 py-2xs pl-2xs">
  <MenuItem {...args} icon={workoutsIcon} />
</div>`}}}),k(c(f,2),{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: default, selected and disabled-with-tag, as they stack in the drawer.`}},__svelteCsf:{rawCode:`<div class="flex w-[25rem] max-w-full flex-col gap-2xs bg-layer-02 py-2xs pl-2xs">
  <MenuItem label="Workouts" description="All your predesigned workouts." icon={workoutsIcon} />
  <MenuItem
    label="Session Workout"
    description="Design a one-time-workout."
    icon={sessionWorkoutIcon}
    selected
  />
  <MenuItem
    label="Loop"
    description="Display information within your studio."
    icon={loopIcon}
    disabled
    tag="SOON"
  />
</div>`}},children:(e,n)=>{var r=j(),i=s(r);C(i,{label:`Workouts`,description:`All your predesigned workouts.`,get icon(){return T}});var o=c(i,2);C(o,{label:`Session Workout`,description:`Design a one-time-workout.`,get icon(){return E},selected:!0}),C(c(o,2),{label:`Loop`,description:`Display information within your studio.`,get icon(){return D},disabled:!0,tag:`SOON`}),t(r),a(e,r)},$$slots:{default:!0}}),a(e,l),r()}var T,E,D,O,k,A,j,M,N,P,F,I;e((()=>{o(),m(),h(),S(),x(),f(),g(),T=e=>{y(e,{stroke:1.5,"aria-hidden":`true`})},E=e=>{b(e,{class:`size-6`,stroke:1.5,"aria-hidden":`true`})},D=e=>{y(e,{stroke:1.5,"aria-hidden":`true`})},O={title:`lib/components/MenuItem`,component:C,parameters:{layout:`padded`}},{Story:k}=_(O),A=l(`<div class="w-[25rem] max-w-full bg-layer-02 py-2xs pl-2xs"><!></div>`),j=l(`<div class="flex w-[25rem] max-w-full flex-col gap-2xs bg-layer-02 py-2xs pl-2xs"><!> <!> <!></div>`),M=l(`<!> <!>`,1),w.__docgen={data:[],name:`MenuItem.stories.svelte`},N=v(w,O),P=[`Playground`,`Overview`],F={...N.Playground,tags:[`svelte-csf-v5`]},I={...N.Overview,tags:[`svelte-csf-v5`]}}))();export{I as Overview,F as Playground,P as __namedExportsOrder,O as default};