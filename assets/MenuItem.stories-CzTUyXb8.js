import{i as e}from"./preload-helper-xPQekRTU.js";import{At as t,Gt as n,Kt as r,Mt as i,Qt as a,en as o,it as s,kt as c,nn as l,o as u,ot as d,s as f,t as p}from"./iframe-D754ifGK.js";import{a as m,i as h,n as g,r as _,t as v}from"./create-runtime-stories-KtMAtb3r.js";import{n as y,t as b}from"./figmaDesign-BuxWJBGH.js";import{J as x,n as S,t as C}from"./icons-DMaA85q4.js";import{n as w,t as T}from"./MenuItem-BdPt5gar.js";function E(e,l){r(l,!1),f();var d=P(),p=t(d);j(p,{name:`Playground`,args:{label:`Workouts`,description:`All your predesigned workouts.`},template:(e,t=o)=>{var n=M();T(c(n),u(t,{get icon(){return D}})),a(n),s(e,n)},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: every prop wired to live controls, on the drawer's layer-02 surface
    with the panel's left-only inset.`}},__svelteCsf:{rawCode:`<div class="w-[25rem] max-w-full bg-layer-02 py-2xs pl-2xs">
  <MenuItem {...args} icon={workoutsIcon} />
</div>`}}}),j(i(p,2),{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: default, selected and disabled-with-tag, as they stack in the drawer.`}},__svelteCsf:{rawCode:`<div class="flex w-[25rem] max-w-full flex-col gap-2xs bg-layer-02 py-2xs pl-2xs">
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
</div>`}},children:(e,t)=>{var n=N(),r=c(n);T(r,{label:`Workouts`,description:`All your predesigned workouts.`,get icon(){return D}});var o=i(r,2);T(o,{label:`Session Workout`,description:`Design a one-time-workout.`,get icon(){return O},selected:!0}),T(i(o,2),{label:`Loop`,description:`Display information within your studio.`,get icon(){return k},disabled:!0,tag:`SOON`}),a(n),s(e,n)},$$slots:{default:!0}}),s(e,d),n()}var D,O,k,A,j,M,N,P,F,I,L,R;e((()=>{l(),m(),h(),y(),w(),C(),p(),g(),D=e=>{x(e,{stroke:1.5,"aria-hidden":`true`})},O=e=>{S(e,{class:`size-6`,stroke:1.5,"aria-hidden":`true`})},k=e=>{x(e,{stroke:1.5,"aria-hidden":`true`})},A={title:`lib/components/MenuItem`,component:T,parameters:{layout:`padded`,design:b(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=390-157`)}},{Story:j}=_(A),M=d(`<div class="w-[25rem] max-w-full bg-layer-02 py-2xs pl-2xs"><!></div>`),N=d(`<div class="flex w-[25rem] max-w-full flex-col gap-2xs bg-layer-02 py-2xs pl-2xs"><!> <!> <!></div>`),P=d(`<!> <!>`,1),E.__docgen={data:[],name:`MenuItem.stories.svelte`},F=v(E,A),I=[`Playground`,`Overview`],L={...F.Playground,tags:[`svelte-csf-v5`]},R={...F.Overview,tags:[`svelte-csf-v5`]}}))();export{R as Overview,L as Playground,I as __namedExportsOrder,A as default};