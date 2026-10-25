import{i as e}from"./preload-helper-xPQekRTU.js";import{$t as t,Ft as n,K as r,Lt as i,Pt as a,Z as o,cn as s,ct as c,en as l,fn as u,gn as d,kt as f,lt as p,ot as m,s as h,sn as g,t as _,ut as v}from"./iframe-Q79ppa-8.js";import{a as y,i as b,n as x,r as S,t as C}from"./create-runtime-stories-hqqLbeTo.js";import{A as w,Ht as T,n as E}from"./tabler-icons-svelte-B_X8x6A9.js";import{n as D,t as O}from"./figmaDesign-BuxWJBGH.js";import{t as k}from"./icons-C7STgp_H.js";import{n as A,t as j}from"./Toggle-bAKm55J6.js";function M(e,o){l(o,!1),h();var u=B(),d=n(u);I(d,{name:`Playground`,args:{checked:!0,label:`Sound`},parameters:{docs:{description:{story:`Playground: every prop wired to live controls.`}},__svelteCsf:{rawCode:`<Toggle {...args} />`}}});var p=i(d,2);I(p,{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: all common variants composed in a single story.`}},__svelteCsf:{rawCode:`<div class="grid grid-cols-[auto_auto_auto] items-center gap-x-8 gap-y-6 typography-body-small-semibold text-text-secondary">
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
</div>`}},children:(e,t)=>{var n=L(),r=i(a(n),8);j(r,{"aria-label":`On`,checked:!0});var o=i(r,2);j(o,{"aria-label":`On, disabled`,checked:!0,disabled:!0});var l=i(o,4);j(l,{"aria-label":`Off`});var u=i(l,2);j(u,{"aria-label":`Off, disabled`,disabled:!0});var d=i(u,4);j(d,{"aria-label":`Icon per state`,get icon(){return N},checked:!0});var f=i(d,2);j(f,{"aria-label":`Icon per state, disabled`,get icon(){return N},disabled:!0});var p=i(f,4);j(p,{"aria-label":`Same icon`,get icon(){return P},checked:!0});var m=i(p,2);j(m,{"aria-label":`Same icon, disabled`,get icon(){return P},disabled:!0});var h=i(m,4);j(h,{label:`Sound`,checked:!0});var _=i(h,2);j(_,{label:`Sound`,disabled:!0});var v=i(_,4);j(v,{label:`Sound`,labelPosition:`end`,checked:!0}),j(i(v,6),{id:`toggle-sound`,checked:!0}),g(2),s(n),c(e,n)},$$slots:{default:!0}}),I(i(p,2),{name:`Sizes`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Sizes: small (52x32), medium (65x40) and large (78x48), on and off.`}},__svelteCsf:{rawCode:`<div class="grid grid-cols-[auto_auto_auto_auto] items-center gap-x-8 gap-y-6 typography-body-small-semibold text-text-secondary">
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
</div>`}},children:(e,t)=>{var o=z(),l=i(a(o),8);r(l,0,()=>[`small`,`medium`,`large`],e=>e,(e,t)=>{var r=R(),o=n(r),l=a(o,!0);s(o);var u=i(o,2);j(u,{get"aria-label"(){return`${t??``}, on`},get size(){return t},checked:!0});var d=i(u,2);j(d,{get"aria-label"(){return`${t??``}, off`},get size(){return t}}),j(i(d,2),{get"aria-label"(){return`${t??``}, disabled`},get size(){return t},checked:!0,disabled:!0}),f(()=>m(l,t)),c(e,r)}),r(i(l,2),0,()=>[`small`,`medium`,`large`],e=>e,(e,t)=>{var r=R(),o=n(r),l=a(o);s(o);var u=i(o,2);j(u,{get"aria-label"(){return`${t??``}, icon, on`},get size(){return t},get icon(){return N},checked:!0});var d=i(u,2);j(d,{get"aria-label"(){return`${t??``}, icon, off`},get size(){return t},get icon(){return N}}),j(i(d,2),{get"aria-label"(){return`${t??``}, icon, disabled`},get size(){return t},get icon(){return N},checked:!0,disabled:!0}),f(()=>m(l,`${t??``}, icon`)),c(e,r)}),s(o),c(e,o)},$$slots:{default:!0}}),c(e,u),t()}var N,P,F,I,L,R,z,B,V,H,U,W,G;e((()=>{d(),y(),b(),D(),A(),k(),_(),x(),N=(e,t=u)=>{var r=p(),i=n(r),a=e=>{T(e,{stroke:2})},s=e=>{E(e,{stroke:2})};o(i,e=>{t()?e(a):e(s,-1)}),c(e,r)},P=e=>{w(e,{stroke:2})},F={title:`lib/components/Toggle`,component:j,parameters:{layout:`centered`,design:O(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=595-1712`)},argTypes:{size:{control:`inline-radio`,options:[`small`,`medium`,`large`]},checked:{control:`boolean`},disabled:{control:`boolean`},label:{control:`text`},labelPosition:{control:`inline-radio`,options:[`start`,`end`]}}},{Story:I}=S(F),L=v(`<div class="grid grid-cols-[auto_auto_auto] items-center gap-x-8 gap-y-6 typography-body-small-semibold text-text-secondary"><span></span> <span>Enabled</span> <span>Disabled</span> <span>On</span> <!> <!> <span>Off</span> <!> <!> <span>Icon per state</span> <!> <!> <span>Same icon</span> <!> <!> <span>Label</span> <!> <!> <span>Label at end</span> <!> <span></span> <label for="toggle-sound" class="typography-body-regular text-text">External label</label> <!> <span></span></div>`),R=v(`<span class="capitalize"> </span> <!> <!> <!>`,1),z=v(`<div class="grid grid-cols-[auto_auto_auto_auto] items-center gap-x-8 gap-y-6 typography-body-small-semibold text-text-secondary"><span></span> <span>On</span> <span>Off</span> <span>Disabled</span> <!> <!></div>`),B=v(`<!> <!> <!>`,1),M.__docgen={data:[],name:`Toggle.stories.svelte`},V=C(M,F),H=[`Playground`,`Overview`,`Sizes`],U={...V.Playground,tags:[`svelte-csf-v5`]},W={...V.Overview,tags:[`svelte-csf-v5`]},G={...V.Sizes,tags:[`svelte-csf-v5`]}}))();export{W as Overview,U as Playground,G as Sizes,H as __namedExportsOrder,F as default};