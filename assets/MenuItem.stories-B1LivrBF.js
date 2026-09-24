import{i as e}from"./preload-helper-xPQekRTU.js";import{Bt as t,Dt as n,Tt as r,Vt as i,Yt as a,Zt as o,et as s,nt as c,o as l,qt as u,s as d,t as f,wt as p}from"./iframe-jy6kbBjD.js";import{a as m,i as h,n as g,o as _,r as v,s as y,t as b}from"./create-runtime-stories-DqQPwOwK.js";import{J as x,n as S,t as C}from"./icons-C06IOHKX.js";import{n as w,t as T}from"./MenuItem-DjAul_q8.js";function E(e,o){i(o,!1),d();var c=P(),f=r(c);j(f,{name:`Playground`,args:{label:`Workouts`,description:`All your predesigned workouts.`},template:(e,t=a)=>{var n=M();T(p(n),l(t,{get icon(){return D}})),u(n),s(e,n)},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: every prop wired to live controls, on the drawer's layer-02 surface
    with the panel's left-only inset.`}},__svelteCsf:{rawCode:`<div class="w-[25rem] max-w-full bg-layer-02 py-2xs pl-2xs">
  <MenuItem {...args} icon={workoutsIcon} />
</div>`}}}),j(n(f,2),{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: default, selected and disabled-with-tag, as they stack in the drawer.`}},__svelteCsf:{rawCode:`<div class="flex w-[25rem] max-w-full flex-col gap-2xs bg-layer-02 py-2xs pl-2xs">
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
</div>`}},children:(e,t)=>{var r=N(),i=p(r);T(i,{label:`Workouts`,description:`All your predesigned workouts.`,get icon(){return D}});var a=n(i,2);T(a,{label:`Session Workout`,description:`Design a one-time-workout.`,get icon(){return O},selected:!0}),T(n(a,2),{label:`Loop`,description:`Display information within your studio.`,get icon(){return k},disabled:!0,tag:`SOON`}),u(r),s(e,r)},$$slots:{default:!0}}),s(e,c),t()}var D,O,k,A,j,M,N,P,F,I,L,R;e((()=>{o(),y(),_(),h(),w(),C(),f(),g(),D=e=>{x(e,{stroke:1.5,"aria-hidden":`true`})},O=e=>{S(e,{class:`size-6`,stroke:1.5,"aria-hidden":`true`})},k=e=>{x(e,{stroke:1.5,"aria-hidden":`true`})},A={title:`lib/components/MenuItem`,component:T,parameters:{layout:`padded`,design:v(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=390-157`)}},{Story:j}=m(A),M=c(`<div class="w-[25rem] max-w-full bg-layer-02 py-2xs pl-2xs"><!></div>`),N=c(`<div class="flex w-[25rem] max-w-full flex-col gap-2xs bg-layer-02 py-2xs pl-2xs"><!> <!> <!></div>`),P=c(`<!> <!>`,1),E.__docgen={data:[],name:`MenuItem.stories.svelte`},F=b(E,A),I=[`Playground`,`Overview`],L={...F.Playground,tags:[`svelte-csf-v5`]},R={...F.Overview,tags:[`svelte-csf-v5`]}}))();export{R as Overview,L as Playground,I as __namedExportsOrder,A as default};