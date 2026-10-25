import{i as e}from"./preload-helper-xPQekRTU.js";import{$t as t,Ft as n,Lt as r,Pt as i,cn as a,ct as o,en as s,fn as c,gn as l,o as u,s as d,t as f,ut as p}from"./iframe-Q79ppa-8.js";import{a as m,i as h,n as g,r as _,t as v}from"./create-runtime-stories-hqqLbeTo.js";import{ct as y}from"./tabler-icons-svelte-B_X8x6A9.js";import{n as b,t as x}from"./figmaDesign-BuxWJBGH.js";import{n as S,t as C}from"./icons-C7STgp_H.js";import{n as w,t as T}from"./MenuItem-BAfiKhur.js";function E(e,l){s(l,!1),d();var f=P(),p=n(f);j(p,{name:`Playground`,args:{label:`Workouts`,description:`All your predesigned workouts.`},template:(e,t=c)=>{var n=M();T(i(n),u(t,{get icon(){return D}})),a(n),o(e,n)},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: every prop wired to live controls, on the drawer's layer-02 surface
    with the panel's left-only inset.`}},__svelteCsf:{rawCode:`<div class="w-[25rem] max-w-full bg-layer-02 py-2xs pl-2xs">
  <MenuItem {...args} icon={workoutsIcon} />
</div>`}}}),j(r(p,2),{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: default, selected and disabled-with-tag, as they stack in the drawer.`}},__svelteCsf:{rawCode:`<div class="flex w-[25rem] max-w-full flex-col gap-2xs bg-layer-02 py-2xs pl-2xs">
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
</div>`}},children:(e,t)=>{var n=N(),s=i(n);T(s,{label:`Workouts`,description:`All your predesigned workouts.`,get icon(){return D}});var c=r(s,2);T(c,{label:`Session Workout`,description:`Design a one-time-workout.`,get icon(){return O},selected:!0}),T(r(c,2),{label:`Loop`,description:`Display information within your studio.`,get icon(){return k},disabled:!0,tag:`SOON`}),a(n),o(e,n)},$$slots:{default:!0}}),o(e,f),t()}var D,O,k,A,j,M,N,P,F,I,L,R;e((()=>{l(),m(),h(),b(),w(),C(),f(),g(),D=e=>{y(e,{stroke:1.5,"aria-hidden":`true`})},O=e=>{S(e,{class:`size-6`,stroke:1.5,"aria-hidden":`true`})},k=e=>{y(e,{stroke:1.5,"aria-hidden":`true`})},A={title:`lib/components/MenuItem`,component:T,parameters:{layout:`padded`,design:x(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=390-157`)}},{Story:j}=_(A),M=p(`<div class="w-[25rem] max-w-full bg-layer-02 py-2xs pl-2xs"><!></div>`),N=p(`<div class="flex w-[25rem] max-w-full flex-col gap-2xs bg-layer-02 py-2xs pl-2xs"><!> <!> <!></div>`),P=p(`<!> <!>`,1),E.__docgen={data:[],name:`MenuItem.stories.svelte`},F=v(E,A),I=[`Playground`,`Overview`],L={...F.Playground,tags:[`svelte-csf-v5`]},R={...F.Overview,tags:[`svelte-csf-v5`]}}))();export{R as Overview,L as Playground,I as __namedExportsOrder,A as default};