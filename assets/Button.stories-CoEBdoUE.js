import{i as e}from"./preload-helper-xPQekRTU.js";import{Bt as t,Nt as n,Pt as r,Q as i,Wt as a,_t as o,bt as s,et as c,s as l,t as u,vt as d}from"./iframe-BYa6-XSo.js";import{a as f,i as p,n as m,r as h,t as g}from"./create-runtime-stories--IWq-U-Y.js";import{n as _,t as v}from"./Button-CuQ9rpEs.js";import{At as y,S as b,t as x,u as S}from"./icons-C_vjixP_.js";function C(e,a){r(a,!1),l();var c=A(),u=d(c);O(u,{name:`Playground`,args:{kind:`primary`,size:`large`,label:`Start workout`},parameters:{docs:{description:{story:`Playground: every prop wired to live controls.`}},__svelteCsf:{rawCode:`<Button {...args} />`}}}),O(s(u,2),{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: all common variants composed in a single story.`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-6">
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
</div>`}},children:(e,n)=>{var r=k(),a=o(r),c=o(a);v(c,{kind:`primary`,label:`Primary`});var l=s(c,2);v(l,{kind:`secondary`,label:`Secondary`});var u=s(l,2);v(u,{kind:`tertiary`,label:`Tertiary`});var d=s(u,2);v(d,{kind:`ghost`,label:`Ghost`}),v(s(d,2),{kind:`danger`,label:`Danger`}),t(a);var f=s(a,2),p=o(f);v(p,{kind:`primary-with-icon`,get icon(){return w},"aria-label":`Add`});var m=s(p,2);v(m,{kind:`secondary-with-icon`,get icon(){return w},"aria-label":`Add`});var h=s(m,2);v(h,{kind:`icon`,get icon(){return T},"aria-label":`Delete`});var g=s(h,2);v(g,{kind:`ghost-with-icon`,size:`small`,label:`Lina`,get icon(){return E}});var _=s(g,2);v(_,{kind:`primary-with-icon`,get icon(){return w},"aria-label":`Add`,loading:!0}),v(s(_,2),{kind:`secondary-with-icon`,get icon(){return w},"aria-label":`Add`,disabled:!0}),t(f);var y=s(f,2),b=o(y);v(b,{kind:`primary`,size:`small`,label:`Small`}),v(s(b,2),{kind:`primary`,size:`large`,label:`Large`}),t(y);var x=s(y,2),S=o(x);v(S,{kind:`primary`,label:`Loading`,loading:!0});var C=s(S,2);v(C,{kind:`primary`,label:`Disabled`,disabled:!0}),v(s(C,2),{kind:`ghost`,size:`small`,label:`I don't have a code`,href:`#`}),t(x),t(r),i(e,r)},$$slots:{default:!0}}),i(e,c),n()}var w,T,E,D,O,k,A,j,M,N,P;e((()=>{a(),f(),p(),_(),x(),u(),m(),w=e=>{b(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},T=e=>{S(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},E=e=>{y(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},D={title:`lib/components/Button`,component:v,parameters:{layout:`centered`},argTypes:{kind:{control:`select`,options:[`primary`,`primary-with-icon`,`secondary`,`secondary-with-icon`,`tertiary`,`ghost`,`ghost-with-icon`,`icon`,`danger`]},size:{control:`inline-radio`,options:[`small`,`large`]},disabled:{control:`boolean`},loading:{control:`boolean`}}},{Story:O}=h(D),k=c(`<div class="flex flex-col gap-6"><div class="flex flex-wrap items-center gap-3"><!> <!> <!> <!> <!></div> <div class="flex flex-wrap items-center gap-3"><!> <!> <!> <!> <!> <!></div> <div class="flex flex-wrap items-center gap-3"><!> <!></div> <div class="flex flex-wrap items-center gap-3"><!> <!> <!></div></div>`),A=c(`<!> <!>`,1),C.__docgen={data:[],name:`Button.stories.svelte`},j=g(C,D),M=[`Playground`,`Overview`],N={...j.Playground,tags:[`svelte-csf-v5`]},P={...j.Overview,tags:[`svelte-csf-v5`]}}))();export{P as Overview,N as Playground,M as __namedExportsOrder,D as default};