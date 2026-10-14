import{i as e}from"./preload-helper-xPQekRTU.js";import{$t as t,Gt as n,Ot as r,Wt as i,Zt as a,it as o,jt as s,kt as c,o as l,ot as u,s as d,t as f,tn as p}from"./iframe-WFe9Szij.js";import{a as m,i as h,n as g,r as _,t as v}from"./create-runtime-stories-BVUMDC3M.js";import{n as y,t as b}from"./figmaDesign-BuxWJBGH.js";import{J as x,n as S,t as C}from"./icons-B5NrWHze.js";import{n as w,t as T}from"./MenuItem-D5VIMjwV.js";function E(e,u){n(u,!1),d();var f=P(),p=c(f);j(p,{name:`Playground`,args:{label:`Workouts`,description:`All your predesigned workouts.`},template:(e,n=t)=>{var i=M();T(r(i),l(n,{get icon(){return D}})),a(i),o(e,i)},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: every prop wired to live controls, on the drawer's layer-02 surface
    with the panel's left-only inset.`}},__svelteCsf:{rawCode:`<div class="w-[25rem] max-w-full bg-layer-02 py-2xs pl-2xs">
  <MenuItem {...args} icon={workoutsIcon} />
</div>`}}}),j(s(p,2),{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: default, selected and disabled-with-tag, as they stack in the drawer.`}},__svelteCsf:{rawCode:`<div class="flex w-[25rem] max-w-full flex-col gap-2xs bg-layer-02 py-2xs pl-2xs">
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
</div>`}},children:(e,t)=>{var n=N(),i=r(n);T(i,{label:`Workouts`,description:`All your predesigned workouts.`,get icon(){return D}});var c=s(i,2);T(c,{label:`Session Workout`,description:`Design a one-time-workout.`,get icon(){return O},selected:!0}),T(s(c,2),{label:`Loop`,description:`Display information within your studio.`,get icon(){return k},disabled:!0,tag:`SOON`}),a(n),o(e,n)},$$slots:{default:!0}}),o(e,f),i()}var D,O,k,A,j,M,N,P,F,I,L,R;e((()=>{p(),m(),h(),y(),w(),C(),f(),g(),D=e=>{x(e,{stroke:1.5,"aria-hidden":`true`})},O=e=>{S(e,{class:`size-6`,stroke:1.5,"aria-hidden":`true`})},k=e=>{x(e,{stroke:1.5,"aria-hidden":`true`})},A={title:`lib/components/MenuItem`,component:T,parameters:{layout:`padded`,design:b(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=390-157`)}},{Story:j}=_(A),M=u(`<div class="w-[25rem] max-w-full bg-layer-02 py-2xs pl-2xs"><!></div>`),N=u(`<div class="flex w-[25rem] max-w-full flex-col gap-2xs bg-layer-02 py-2xs pl-2xs"><!> <!> <!></div>`),P=u(`<!> <!>`,1),E.__docgen={data:[],name:`MenuItem.stories.svelte`},F=v(E,A),I=[`Playground`,`Overview`],L={...F.Playground,tags:[`svelte-csf-v5`]},R={...F.Overview,tags:[`svelte-csf-v5`]}}))();export{R as Overview,L as Playground,I as __namedExportsOrder,A as default};