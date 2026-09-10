import{i as e}from"./preload-helper-xPQekRTU.js";import{Ct as t,Gt as n,It as r,Lt as i,Q as a,Ut as o,bt as s,et as c,o as l,qt as u,s as d,t as f,xt as p}from"./iframe-CIRq0HXM.js";import{a as m,i as h,n as g,r as _,t as v}from"./create-runtime-stories-7PQW_Jro.js";import{J as y,n as b,t as x}from"./icons-BD3KpF_Q.js";import{n as S,t as C}from"./MenuItem-CVkeCDpO.js";function w(e,c){i(c,!1),d();var u=M(),f=p(u);k(f,{name:`Playground`,args:{label:`Workouts`,description:`All your predesigned workouts.`},template:(e,t=n)=>{var r=A();C(s(r),l(t,{get icon(){return T}})),o(r),a(e,r)},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: every prop wired to live controls, on the drawer's layer-02 surface
    with the panel's left-only inset.`}},__svelteCsf:{rawCode:`<div class="w-[25rem] max-w-full bg-layer-02 py-2xs pl-2xs">
  <MenuItem {...args} icon={workoutsIcon} />
</div>`}}}),k(t(f,2),{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: default, selected and disabled-with-tag, as they stack in the drawer.`}},__svelteCsf:{rawCode:`<div class="flex w-[25rem] max-w-full flex-col gap-2xs bg-layer-02 py-2xs pl-2xs">
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
</div>`}},children:(e,n)=>{var r=j(),i=s(r);C(i,{label:`Workouts`,description:`All your predesigned workouts.`,get icon(){return T}});var c=t(i,2);C(c,{label:`Session Workout`,description:`Design a one-time-workout.`,get icon(){return E},selected:!0}),C(t(c,2),{label:`Loop`,description:`Display information within your studio.`,get icon(){return D},disabled:!0,tag:`SOON`}),o(r),a(e,r)},$$slots:{default:!0}}),a(e,u),r()}var T,E,D,O,k,A,j,M,N,P,F,I;e((()=>{u(),m(),h(),S(),x(),f(),g(),T=e=>{y(e,{stroke:1.5,"aria-hidden":`true`})},E=e=>{b(e,{class:`size-6`,stroke:1.5,"aria-hidden":`true`})},D=e=>{y(e,{stroke:1.5,"aria-hidden":`true`})},O={title:`lib/components/MenuItem`,component:C,parameters:{layout:`padded`}},{Story:k}=_(O),A=c(`<div class="w-[25rem] max-w-full bg-layer-02 py-2xs pl-2xs"><!></div>`),j=c(`<div class="flex w-[25rem] max-w-full flex-col gap-2xs bg-layer-02 py-2xs pl-2xs"><!> <!> <!></div>`),M=c(`<!> <!>`,1),w.__docgen={data:[],name:`MenuItem.stories.svelte`},N=v(w,O),P=[`Playground`,`Overview`],F={...N.Playground,tags:[`svelte-csf-v5`]},I={...N.Overview,tags:[`svelte-csf-v5`]}}))();export{I as Overview,F as Playground,P as __namedExportsOrder,O as default};