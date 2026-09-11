import{i as e}from"./preload-helper-xPQekRTU.js";import{Ct as t,Gt as n,It as r,Lt as i,Q as a,Ut as o,bt as s,et as c,o as l,qt as u,s as d,t as f,xt as p}from"./iframe-BaC-WV1j.js";import{a as m,i as h,n as g,o as _,r as v,s as y,t as b}from"./create-runtime-stories-C2ZVi18f.js";import{J as x,n as S,t as C}from"./icons-C33GnhSW.js";import{n as w,t as T}from"./MenuItem-BsQRxo7q.js";function E(e,c){i(c,!1),d();var u=P(),f=p(u);j(f,{name:`Playground`,args:{label:`Workouts`,description:`All your predesigned workouts.`},template:(e,t=n)=>{var r=M();T(s(r),l(t,{get icon(){return D}})),o(r),a(e,r)},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: every prop wired to live controls, on the drawer's layer-02 surface
    with the panel's left-only inset.`}},__svelteCsf:{rawCode:`<div class="w-[25rem] max-w-full bg-layer-02 py-2xs pl-2xs">
  <MenuItem {...args} icon={workoutsIcon} />
</div>`}}}),j(t(f,2),{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: default, selected and disabled-with-tag, as they stack in the drawer.`}},__svelteCsf:{rawCode:`<div class="flex w-[25rem] max-w-full flex-col gap-2xs bg-layer-02 py-2xs pl-2xs">
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
</div>`}},children:(e,n)=>{var r=N(),i=s(r);T(i,{label:`Workouts`,description:`All your predesigned workouts.`,get icon(){return D}});var c=t(i,2);T(c,{label:`Session Workout`,description:`Design a one-time-workout.`,get icon(){return O},selected:!0}),T(t(c,2),{label:`Loop`,description:`Display information within your studio.`,get icon(){return k},disabled:!0,tag:`SOON`}),o(r),a(e,r)},$$slots:{default:!0}}),a(e,u),r()}var D,O,k,A,j,M,N,P,F,I,L,R;e((()=>{u(),y(),_(),h(),w(),C(),f(),g(),D=e=>{x(e,{stroke:1.5,"aria-hidden":`true`})},O=e=>{S(e,{class:`size-6`,stroke:1.5,"aria-hidden":`true`})},k=e=>{x(e,{stroke:1.5,"aria-hidden":`true`})},A={title:`lib/components/MenuItem`,component:T,parameters:{layout:`padded`,design:v(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=390-157`)}},{Story:j}=m(A),M=c(`<div class="w-[25rem] max-w-full bg-layer-02 py-2xs pl-2xs"><!></div>`),N=c(`<div class="flex w-[25rem] max-w-full flex-col gap-2xs bg-layer-02 py-2xs pl-2xs"><!> <!> <!></div>`),P=c(`<!> <!>`,1),E.__docgen={data:[],name:`MenuItem.stories.svelte`},F=b(E,A),I=[`Playground`,`Overview`],L={...F.Playground,tags:[`svelte-csf-v5`]},R={...F.Overview,tags:[`svelte-csf-v5`]}}))();export{R as Overview,L as Playground,I as __namedExportsOrder,A as default};