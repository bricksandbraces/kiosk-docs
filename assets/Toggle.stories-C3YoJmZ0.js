import{i as e}from"./preload-helper-xPQekRTU.js";import{At as t,Dt as n,K as r,Ot as i,Qt as a,St as o,Ut as s,V as c,Wt as l,Xt as u,Yt as d,at as f,en as p,it as m,rt as h,s as g,t as _,tt as v}from"./iframe-BWy7FP4p.js";import{a as y,i as b,n as x,r as S,t as C}from"./create-runtime-stories-jhEyAF5N.js";import{n as w,t as T}from"./figmaDesign-BuxWJBGH.js";import{b as E,bt as D,i as O,t as k}from"./icons-OE8kPevM.js";import{n as A,t as j}from"./Toggle-BNAtocBn.js";function M(e,r){l(r,!1),g();var a=B(),f=i(a);I(f,{name:`Playground`,args:{checked:!0,label:`Sound`},parameters:{docs:{description:{story:`Playground: every prop wired to live controls.`}},__svelteCsf:{rawCode:`<Toggle {...args} />`}}});var p=t(f,2);I(p,{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: all common variants composed in a single story.`}},__svelteCsf:{rawCode:`<div class="grid grid-cols-[auto_auto_auto] items-center gap-x-8 gap-y-6 typography-body-small-semibold text-text-secondary">
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
</div>`}},children:(e,r)=>{var i=L(),a=t(n(i),8);j(a,{"aria-label":`On`,checked:!0});var o=t(a,2);j(o,{"aria-label":`On, disabled`,checked:!0,disabled:!0});var s=t(o,4);j(s,{"aria-label":`Off`});var c=t(s,2);j(c,{"aria-label":`Off, disabled`,disabled:!0});var l=t(c,4);j(l,{"aria-label":`Icon per state`,get icon(){return N},checked:!0});var f=t(l,2);j(f,{"aria-label":`Icon per state, disabled`,get icon(){return N},disabled:!0});var p=t(f,4);j(p,{"aria-label":`Same icon`,get icon(){return P},checked:!0});var m=t(p,2);j(m,{"aria-label":`Same icon, disabled`,get icon(){return P},disabled:!0});var g=t(m,4);j(g,{label:`Sound`,checked:!0});var _=t(g,2);j(_,{label:`Sound`,disabled:!0});var v=t(_,4);j(v,{label:`Sound`,labelPosition:`end`,checked:!0}),j(t(v,6),{id:`toggle-sound`,checked:!0}),d(2),u(i),h(e,i)},$$slots:{default:!0}}),I(t(p,2),{name:`Sizes`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Sizes: small (52x32), medium (65x40) and large (78x48), on and off.`}},__svelteCsf:{rawCode:`<div class="grid grid-cols-[auto_auto_auto_auto] items-center gap-x-8 gap-y-6 typography-body-small-semibold text-text-secondary">
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
</div>`}},children:(e,r)=>{var a=z(),s=t(n(a),8);c(s,0,()=>[`small`,`medium`,`large`],e=>e,(e,r)=>{var a=R(),s=i(a),c=n(s,!0);u(s);var l=t(s,2);j(l,{get"aria-label"(){return`${r??``}, on`},get size(){return r},checked:!0});var d=t(l,2);j(d,{get"aria-label"(){return`${r??``}, off`},get size(){return r}}),j(t(d,2),{get"aria-label"(){return`${r??``}, disabled`},get size(){return r},checked:!0,disabled:!0}),o(()=>v(c,r)),h(e,a)}),c(t(s,2),0,()=>[`small`,`medium`,`large`],e=>e,(e,r)=>{var a=R(),s=i(a),c=n(s);u(s);var l=t(s,2);j(l,{get"aria-label"(){return`${r??``}, icon, on`},get size(){return r},get icon(){return N},checked:!0});var d=t(l,2);j(d,{get"aria-label"(){return`${r??``}, icon, off`},get size(){return r},get icon(){return N}}),j(t(d,2),{get"aria-label"(){return`${r??``}, icon, disabled`},get size(){return r},get icon(){return N},checked:!0,disabled:!0}),o(()=>v(c,`${r??``}, icon`)),h(e,a)}),u(a),h(e,a)},$$slots:{default:!0}}),h(e,a),s()}var N,P,F,I,L,R,z,B,V,H,U,W,G;e((()=>{p(),y(),b(),w(),A(),k(),_(),x(),N=(e,t=a)=>{var n=m(),o=i(n),s=e=>{D(e,{stroke:2})},c=e=>{O(e,{stroke:2})};r(o,e=>{t()?e(s):e(c,-1)}),h(e,n)},P=e=>{E(e,{stroke:2})},F={title:`lib/components/Toggle`,component:j,parameters:{layout:`centered`,design:T(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=595-1712`)},argTypes:{size:{control:`inline-radio`,options:[`small`,`medium`,`large`]},checked:{control:`boolean`},disabled:{control:`boolean`},label:{control:`text`},labelPosition:{control:`inline-radio`,options:[`start`,`end`]}}},{Story:I}=S(F),L=f(`<div class="grid grid-cols-[auto_auto_auto] items-center gap-x-8 gap-y-6 typography-body-small-semibold text-text-secondary"><span></span> <span>Enabled</span> <span>Disabled</span> <span>On</span> <!> <!> <span>Off</span> <!> <!> <span>Icon per state</span> <!> <!> <span>Same icon</span> <!> <!> <span>Label</span> <!> <!> <span>Label at end</span> <!> <span></span> <label for="toggle-sound" class="typography-body-regular text-text">External label</label> <!> <span></span></div>`),R=f(`<span class="capitalize"> </span> <!> <!> <!>`,1),z=f(`<div class="grid grid-cols-[auto_auto_auto_auto] items-center gap-x-8 gap-y-6 typography-body-small-semibold text-text-secondary"><span></span> <span>On</span> <span>Off</span> <span>Disabled</span> <!> <!></div>`),B=f(`<!> <!> <!>`,1),M.__docgen={data:[],name:`Toggle.stories.svelte`},V=C(M,F),H=[`Playground`,`Overview`,`Sizes`],U={...V.Playground,tags:[`svelte-csf-v5`]},W={...V.Overview,tags:[`svelte-csf-v5`]},G={...V.Sizes,tags:[`svelte-csf-v5`]}}))();export{W as Overview,U as Playground,G as Sizes,H as __namedExportsOrder,F as default};