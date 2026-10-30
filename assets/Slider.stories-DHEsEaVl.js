import{i as e}from"./preload-helper-xPQekRTU.js";import{$t as t,Ft as n,Ht as r,Lt as i,Pt as a,Ut as o,cn as s,ct as c,en as l,gn as u,qt as d,t as f,ut as p,xt as m}from"./iframe-CWHPWP5F.js";import{i as h,n as g,r as _,t as v}from"./create-runtime-stories-DaQ_TVmN.js";import{Jt as y,Xt as b,c as x,o as S,t as C}from"./tabler-icons-svelte-CgL8yHvM.js";import{n as w,t as T}from"./figmaDesign-BuxWJBGH.js";import{n as E,t as D}from"./Slider-DF0QwRRZ.js";function O(e,u){l(u,!0);let f=o(60),p=o(0),h=o(60),g=o(4500);var _=F(),v=n(_);{let e=d(()=>({value:60,orientation:`horizontal`,"aria-label":`Brightness`,icon:k,offIcon:A}));M(v,{name:`Playground`,get args(){return m(e)},parameters:{docs:{description:{story:`Playground: every prop wired to live controls.`}},__svelteCsf:{rawCode:`<Slider {...args} />`}}})}M(i(v,2),{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: both orientations, on/off icons at min, without icon, gradient and disabled.`}},__svelteCsf:{rawCode:`<div class="flex items-start gap-12 typography-body-small-semibold text-text-secondary">
  <div class="flex flex-col gap-3">
    <span>Horizontal</span>
    <Slider aria-label="Brightness" icon={bulb} offIcon={bulbOff} bind:value={brightness} />
    <span>Muted (at min)</span>
    <Slider aria-label="Volume" bind:value={volume}>
      {#snippet icon()}
        <IconVolume stroke={1.5} />
      {/snippet}
      {#snippet offIcon()}
        <IconVolumeOff stroke={1.5} />
      {/snippet}
    </Slider>
    <span>Without icon</span>
    <Slider aria-label="Brightness" bind:value={brightness} />
    <span>Temperature</span>
    <Slider
      aria-label="Color temperature"
      min={2700}
      max={9000}
      step={100}
      fill={KELVIN}
      track={KELVIN}
      formatValue={(k) => \`\${k} K\`}
      bind:value={kelvin}
    />
    <span>Disabled</span>
    <Slider aria-label="Brightness" icon={bulb} value={60} disabled />
  </div>
  <div class="flex flex-col gap-3">
    <span>Vertical</span>
    <Slider orientation="vertical" aria-label="Light" icon={bulb} offIcon={bulbOff} bind:value={light} />
  </div>
</div>`}},children:(e,t)=>{var n=P(),o=a(n),l=i(a(o),2);D(l,{"aria-label":`Brightness`,get icon(){return k},get offIcon(){return A},get value(){return m(f)},set value(e){r(f,e,!0)}});var u=i(l,4);D(u,{"aria-label":`Volume`,get value(){return m(p)},set value(e){r(p,e,!0)},icon:e=>{S(e,{stroke:1.5})},offIcon:e=>{x(e,{stroke:1.5})},$$slots:{icon:!0,offIcon:!0}});var d=i(u,4);D(d,{"aria-label":`Brightness`,get value(){return m(f)},set value(e){r(f,e,!0)}});var _=i(d,4);D(_,{"aria-label":`Color temperature`,min:2700,max:9e3,step:100,fill:N,track:N,formatValue:e=>`${e} K`,get value(){return m(g)},set value(e){r(g,e,!0)}}),D(i(_,4),{"aria-label":`Brightness`,get icon(){return k},value:60,disabled:!0}),s(o);var v=i(o,2);D(i(a(v),2),{orientation:`vertical`,"aria-label":`Light`,get icon(){return k},get offIcon(){return A},get value(){return m(h)},set value(e){r(h,e,!0)}}),s(v),s(n),c(e,n)},$$slots:{default:!0}}),c(e,_),t()}var k,A,j,M,N,P,F,I,L,R,z;e((()=>{u(),h(),C(),w(),E(),f(),g(),k=e=>{y(e,{stroke:1.5})},A=e=>{b(e,{stroke:1.5})},j={title:`lib/components/Slider`,component:D,parameters:{layout:`centered`,design:T(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=744-71`)},argTypes:{value:{control:{type:`range`,min:0,max:100}},min:{control:`number`},max:{control:`number`},step:{control:`number`},orientation:{control:`inline-radio`,options:[`horizontal`,`vertical`]},fill:{control:`text`},track:{control:`text`},disabled:{control:`boolean`}}},{Story:M}=_(j),N=`linear-gradient(to right, #ffa957, #ffc58f, #ffe4ce, #fff6ed, #f3f2ff, #d6e1ff)`,P=p(`<div class="flex items-start gap-12 typography-body-small-semibold text-text-secondary"><div class="flex flex-col gap-3"><span>Horizontal</span> <!> <span>Muted (at min)</span> <!> <span>Without icon</span> <!> <span>Temperature</span> <!> <span>Disabled</span> <!></div> <div class="flex flex-col gap-3"><span>Vertical</span> <!></div></div>`),F=p(`<!> <!>`,1),O.__docgen={data:[],name:`Slider.stories.svelte`},I=v(O,j),L=[`Playground`,`Overview`],R={...I.Playground,tags:[`svelte-csf-v5`]},z={...I.Overview,tags:[`svelte-csf-v5`]}}))();export{z as Overview,R as Playground,L as __namedExportsOrder,j as default};