import{i as e}from"./preload-helper-xPQekRTU.js";import{At as t,Gt as n,H as r,Kt as i,Mt as a,Qt as o,Zt as s,at as c,en as l,it as u,kt as d,nn as f,nt as p,ot as m,q as h,s as g,t as _,wt as v}from"./iframe-DphDD8Dh.js";import{a as y,i as b,n as x,r as S,t as C}from"./create-runtime-stories-Cf7yfCMR.js";import{n as w,t as T}from"./figmaDesign-BuxWJBGH.js";import{St as E,b as D,i as O,t as k}from"./icons-mE3sbh9i.js";import{n as A,t as j}from"./Toggle-CyheZtMd.js";function M(e,c){i(c,!1),g();var l=B(),f=t(l);I(f,{name:`Playground`,args:{checked:!0,label:`Sound`},parameters:{docs:{description:{story:`Playground: every prop wired to live controls.`}},__svelteCsf:{rawCode:`<Toggle {...args} />`}}});var m=a(f,2);I(m,{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: all common variants composed in a single story.`}},__svelteCsf:{rawCode:`<div class="grid grid-cols-[auto_auto_auto] items-center gap-x-8 gap-y-6 typography-body-small-semibold text-text-secondary">
  <span></span>
  <span>Enabled</span>
  <span>Disabled</span>

  <span>On</span>
  <Toggle aria-label="On" checked />
  <Toggle aria-label="On, disabled" checked disabled />

  <span>Off</span>
  <Toggle aria-label="Off" />
  <Toggle aria-label="Off, disabled" disabled />

  <span>Icon per state</span>
  <Toggle aria-label="Icon per state" icon={checkIcon} checked />
  <Toggle aria-label="Icon per state, disabled" icon={checkIcon} disabled />

  <span>Same icon</span>
  <Toggle aria-label="Same icon" icon={powerIcon} checked />
  <Toggle aria-label="Same icon, disabled" icon={powerIcon} disabled />

  <span>Label</span>
  <Toggle label="Sound" checked />
  <Toggle label="Sound" disabled />

  <span>Label at end</span>
  <Toggle label="Sound" labelPosition="end" checked />
  <span></span>

  <label for="toggle-sound" class="typography-body-regular text-text">External label</label>
  <Toggle id="toggle-sound" checked />
  <span></span>
</div>`}},children:(e,t)=>{var n=L(),r=a(d(n),8);j(r,{"aria-label":`On`,checked:!0});var i=a(r,2);j(i,{"aria-label":`On, disabled`,checked:!0,disabled:!0});var c=a(i,4);j(c,{"aria-label":`Off`});var l=a(c,2);j(l,{"aria-label":`Off, disabled`,disabled:!0});var f=a(l,4);j(f,{"aria-label":`Icon per state`,get icon(){return N},checked:!0});var p=a(f,2);j(p,{"aria-label":`Icon per state, disabled`,get icon(){return N},disabled:!0});var m=a(p,4);j(m,{"aria-label":`Same icon`,get icon(){return P},checked:!0});var h=a(m,2);j(h,{"aria-label":`Same icon, disabled`,get icon(){return P},disabled:!0});var g=a(h,4);j(g,{label:`Sound`,checked:!0});var _=a(g,2);j(_,{label:`Sound`,disabled:!0});var v=a(_,4);j(v,{label:`Sound`,labelPosition:`end`,checked:!0}),j(a(v,6),{id:`toggle-sound`,checked:!0}),s(2),o(n),u(e,n)},$$slots:{default:!0}}),I(a(m,2),{name:`Sizes`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Sizes: small (52x32), medium (65x40) and large (78x48), on and off.`}},__svelteCsf:{rawCode:`<div class="grid grid-cols-[auto_auto_auto_auto] items-center gap-x-8 gap-y-6 typography-body-small-semibold text-text-secondary">
  <span></span>
  <span>On</span>
  <span>Off</span>
  <span>Disabled</span>
  {#each ['small', 'medium', 'large'] as const as size (size)}
    <span class="capitalize">{size}</span>
    <Toggle aria-label="{size}, on" {size} checked />
    <Toggle aria-label="{size}, off" {size} />
    <Toggle aria-label="{size}, disabled" {size} checked disabled />
  {/each}
  {#each ['small', 'medium', 'large'] as const as size (size)}
    <span class="capitalize">{size}, icon</span>
    <Toggle aria-label="{size}, icon, on" {size} icon={checkIcon} checked />
    <Toggle aria-label="{size}, icon, off" {size} icon={checkIcon} />
    <Toggle aria-label="{size}, icon, disabled" {size} icon={checkIcon} checked disabled />
  {/each}
</div>`}},children:(e,n)=>{var i=z(),s=a(d(i),8);r(s,0,()=>[`small`,`medium`,`large`],e=>e,(e,n)=>{var r=R(),i=t(r),s=d(i,!0);o(i);var c=a(i,2);j(c,{get"aria-label"(){return`${n??``}, on`},get size(){return n},checked:!0});var l=a(c,2);j(l,{get"aria-label"(){return`${n??``}, off`},get size(){return n}}),j(a(l,2),{get"aria-label"(){return`${n??``}, disabled`},get size(){return n},checked:!0,disabled:!0}),v(()=>p(s,n)),u(e,r)}),r(a(s,2),0,()=>[`small`,`medium`,`large`],e=>e,(e,n)=>{var r=R(),i=t(r),s=d(i);o(i);var c=a(i,2);j(c,{get"aria-label"(){return`${n??``}, icon, on`},get size(){return n},get icon(){return N},checked:!0});var l=a(c,2);j(l,{get"aria-label"(){return`${n??``}, icon, off`},get size(){return n},get icon(){return N}}),j(a(l,2),{get"aria-label"(){return`${n??``}, icon, disabled`},get size(){return n},get icon(){return N},checked:!0,disabled:!0}),v(()=>p(s,`${n??``}, icon`)),u(e,r)}),o(i),u(e,i)},$$slots:{default:!0}}),u(e,l),n()}var N,P,F,I,L,R,z,B,V,H,U,W,G;e((()=>{f(),y(),b(),w(),A(),k(),_(),x(),N=(e,n=l)=>{var r=c(),i=t(r),a=e=>{E(e,{stroke:2})},o=e=>{O(e,{stroke:2})};h(i,e=>{n()?e(a):e(o,-1)}),u(e,r)},P=e=>{D(e,{stroke:2})},F={title:`lib/components/Toggle`,component:j,parameters:{layout:`centered`,design:T(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=595-1712`)},argTypes:{size:{control:`inline-radio`,options:[`small`,`medium`,`large`]},checked:{control:`boolean`},disabled:{control:`boolean`},label:{control:`text`},labelPosition:{control:`inline-radio`,options:[`start`,`end`]}}},{Story:I}=S(F),L=m(`<div class="grid grid-cols-[auto_auto_auto] items-center gap-x-8 gap-y-6 typography-body-small-semibold text-text-secondary"><span></span> <span>Enabled</span> <span>Disabled</span> <span>On</span> <!> <!> <span>Off</span> <!> <!> <span>Icon per state</span> <!> <!> <span>Same icon</span> <!> <!> <span>Label</span> <!> <!> <span>Label at end</span> <!> <span></span> <label for="toggle-sound" class="typography-body-regular text-text">External label</label> <!> <span></span></div>`),R=m(`<span class="capitalize"> </span> <!> <!> <!>`,1),z=m(`<div class="grid grid-cols-[auto_auto_auto_auto] items-center gap-x-8 gap-y-6 typography-body-small-semibold text-text-secondary"><span></span> <span>On</span> <span>Off</span> <span>Disabled</span> <!> <!></div>`),B=m(`<!> <!> <!>`,1),M.__docgen={data:[],name:`Toggle.stories.svelte`},V=C(M,F),H=[`Playground`,`Overview`,`Sizes`],U={...V.Playground,tags:[`svelte-csf-v5`]},W={...V.Overview,tags:[`svelte-csf-v5`]},G={...V.Sizes,tags:[`svelte-csf-v5`]}}))();export{W as Overview,U as Playground,G as Sizes,H as __namedExportsOrder,F as default};