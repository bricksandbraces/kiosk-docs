import{i as e}from"./preload-helper-xPQekRTU.js";import{Nt as t,Pt as n,Q as r,Ut as i,Vt as a,_t as o,bt as s,et as c,o as l,s as u,t as d,vt as f,zt as p}from"./iframe-BYEIQZtN.js";import{a as m,i as h,n as g,r as _,t as v}from"./create-runtime-stories-DnohYm1n.js";import{J as y,n as b,t as x}from"./icons-DhgbXXYb.js";import{n as S,t as C}from"./MenuItem-Bd5Osljk.js";function w(e,i){n(i,!1),u();var c=M(),d=f(c);k(d,{name:`Playground`,args:{label:`Workouts`,description:`All your predesigned workouts.`},template:(e,t=a)=>{var n=A();C(o(n),l(t,{get icon(){return T}})),p(n),r(e,n)},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: every prop wired to live controls, on the drawer's layer-02 surface
    with the panel's left-only inset.`}},__svelteCsf:{rawCode:`<div class="w-[25rem] max-w-full bg-layer-02 py-2xs pl-2xs">
  <MenuItem {...args} icon={workoutsIcon} />
</div>`}}}),k(s(d,2),{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: default, selected and disabled-with-tag, as they stack in the drawer.`}},__svelteCsf:{rawCode:`<div class="flex w-[25rem] max-w-full flex-col gap-2xs bg-layer-02 py-2xs pl-2xs">
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
</div>`}},children:(e,t)=>{var n=j(),i=o(n);C(i,{label:`Workouts`,description:`All your predesigned workouts.`,get icon(){return T}});var a=s(i,2);C(a,{label:`Session Workout`,description:`Design a one-time-workout.`,get icon(){return E},selected:!0}),C(s(a,2),{label:`Loop`,description:`Display information within your studio.`,get icon(){return D},disabled:!0,tag:`SOON`}),p(n),r(e,n)},$$slots:{default:!0}}),r(e,c),t()}var T,E,D,O,k,A,j,M,N,P,F,I;e((()=>{i(),m(),h(),S(),x(),d(),g(),T=e=>{y(e,{stroke:1.5,"aria-hidden":`true`})},E=e=>{b(e,{class:`size-6`,stroke:1.5,"aria-hidden":`true`})},D=e=>{y(e,{stroke:1.5,"aria-hidden":`true`})},O={title:`lib/components/MenuItem`,component:C,parameters:{layout:`padded`}},{Story:k}=_(O),A=c(`<div class="w-[25rem] max-w-full bg-layer-02 py-2xs pl-2xs"><!></div>`),j=c(`<div class="flex w-[25rem] max-w-full flex-col gap-2xs bg-layer-02 py-2xs pl-2xs"><!> <!> <!></div>`),M=c(`<!> <!>`,1),w.__docgen={data:[],name:`MenuItem.stories.svelte`},N=v(w,O),P=[`Playground`,`Overview`],F={...N.Playground,tags:[`svelte-csf-v5`]},I={...N.Overview,tags:[`svelte-csf-v5`]}}))();export{I as Overview,F as Playground,P as __namedExportsOrder,O as default};