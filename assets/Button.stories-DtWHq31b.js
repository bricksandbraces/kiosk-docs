import{i as e}from"./preload-helper-xPQekRTU.js";import{Nt as t,Pt as n,Q as r,Ut as i,_t as a,bt as o,et as s,s as c,t as l,vt as u,zt as d}from"./iframe-CMgJ9Iha.js";import{a as f,i as p,n as m,r as h,t as g}from"./create-runtime-stories-BPUFTapa.js";import{n as _,t as v}from"./Button-BU70urgH.js";import{Et as y,b,c as x,t as S}from"./icons-CzhUs2SR.js";function C(e,i){n(i,!1),c();var s=A(),l=u(s);O(l,{name:`Playground`,args:{kind:`primary`,size:`large`,label:`Start workout`},parameters:{docs:{description:{story:`Playground: every prop wired to live controls.`}},__svelteCsf:{rawCode:`<Button {...args} />`}}}),O(o(l,2),{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: all common variants composed in a single story.`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-6">
  <div class="flex flex-wrap items-center gap-3">
    <Button kind="primary" label="Primary" />
    <Button kind="secondary" label="Secondary" />
    <Button kind="tertiary" label="Tertiary" />
    <Button kind="ghost" label="Ghost" />
    <Button kind="danger" label="Danger" />
  </div>
  <div class="flex flex-wrap items-center gap-3">
    <Button kind="primary-with-icon" icon={plusIcon} aria-label="Add" />
    <Button kind="secondary-with-icon" icon={plusIcon} aria-label="Add" />
    <Button kind="icon" icon={trashIcon} aria-label="Delete" />
    <Button kind="ghost-with-icon" size="small" label="Lina" icon={backIcon} />
    <Button kind="primary-with-icon" icon={plusIcon} aria-label="Add" loading />
    <Button kind="secondary-with-icon" icon={plusIcon} aria-label="Add" disabled />
  </div>
  <div class="flex flex-wrap items-center gap-3">
    <Button kind="primary" size="small" label="Small" />
    <Button kind="primary" size="large" label="Large" />
  </div>
  <div class="flex flex-wrap items-center gap-3">
    <Button kind="primary" label="Loading" loading />
    <Button kind="primary" label="Disabled" disabled />
    <Button kind="ghost" size="small" label="I don't have a code" href="#" />
  </div>
</div>`}},children:(e,t)=>{var n=k(),i=a(n),s=a(i);v(s,{kind:`primary`,label:`Primary`});var c=o(s,2);v(c,{kind:`secondary`,label:`Secondary`});var l=o(c,2);v(l,{kind:`tertiary`,label:`Tertiary`});var u=o(l,2);v(u,{kind:`ghost`,label:`Ghost`}),v(o(u,2),{kind:`danger`,label:`Danger`}),d(i);var f=o(i,2),p=a(f);v(p,{kind:`primary-with-icon`,get icon(){return w},"aria-label":`Add`});var m=o(p,2);v(m,{kind:`secondary-with-icon`,get icon(){return w},"aria-label":`Add`});var h=o(m,2);v(h,{kind:`icon`,get icon(){return T},"aria-label":`Delete`});var g=o(h,2);v(g,{kind:`ghost-with-icon`,size:`small`,label:`Lina`,get icon(){return E}});var _=o(g,2);v(_,{kind:`primary-with-icon`,get icon(){return w},"aria-label":`Add`,loading:!0}),v(o(_,2),{kind:`secondary-with-icon`,get icon(){return w},"aria-label":`Add`,disabled:!0}),d(f);var y=o(f,2),b=a(y);v(b,{kind:`primary`,size:`small`,label:`Small`}),v(o(b,2),{kind:`primary`,size:`large`,label:`Large`}),d(y);var x=o(y,2),S=a(x);v(S,{kind:`primary`,label:`Loading`,loading:!0});var C=o(S,2);v(C,{kind:`primary`,label:`Disabled`,disabled:!0}),v(o(C,2),{kind:`ghost`,size:`small`,label:`I don't have a code`,href:`#`}),d(x),d(n),r(e,n)},$$slots:{default:!0}}),r(e,s),t()}var w,T,E,D,O,k,A,j,M,N,P;e((()=>{i(),f(),p(),_(),S(),l(),m(),w=e=>{b(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},T=e=>{x(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},E=e=>{y(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},D={title:`lib/components/Button`,component:v,parameters:{layout:`centered`},argTypes:{kind:{control:`select`,options:[`primary`,`primary-with-icon`,`secondary`,`secondary-with-icon`,`tertiary`,`ghost`,`ghost-with-icon`,`icon`,`danger`]},size:{control:`inline-radio`,options:[`small`,`large`]},disabled:{control:`boolean`},loading:{control:`boolean`}}},{Story:O}=h(D),k=s(`<div class="flex flex-col gap-6"><div class="flex flex-wrap items-center gap-3"><!> <!> <!> <!> <!></div> <div class="flex flex-wrap items-center gap-3"><!> <!> <!> <!> <!> <!></div> <div class="flex flex-wrap items-center gap-3"><!> <!></div> <div class="flex flex-wrap items-center gap-3"><!> <!> <!></div></div>`),A=s(`<!> <!>`,1),C.__docgen={data:[],name:`Button.stories.svelte`},j=g(C,D),M=[`Playground`,`Overview`],N={...j.Playground,tags:[`svelte-csf-v5`]},P={...j.Overview,tags:[`svelte-csf-v5`]}}))();export{P as Overview,N as Playground,M as __namedExportsOrder,D as default};