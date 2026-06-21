import{i as e}from"./preload-helper-xPQekRTU.js";import{Nt as t,Pt as n,Q as r,Ut as i,_t as a,bt as o,et as s,s as c,t as l,vt as u,zt as d}from"./iframe-Cjnv228u.js";import{a as f,i as p,n as m,r as h,t as g}from"./create-runtime-stories-Bxf99jrC.js";import{n as _,t as v}from"./Button-Ok1h0yC0.js";function y(e,i){n(i,!1),c();var s=C(),l=u(s);x(l,{name:`Playground`,args:{kind:`primary`,size:`large`,label:`Start workout`},parameters:{docs:{description:{story:`Playground: every prop wired to live controls.`}},__svelteCsf:{rawCode:`<Button {...args} />`}}}),x(o(l,2),{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: all common variants composed in a single story.`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-6">
  <div class="flex flex-wrap items-center gap-3">
    <Button kind="primary" label="Primary" />
    <Button kind="secondary" label="Secondary" />
    <Button kind="tertiary" label="Tertiary" />
    <Button kind="ghost" label="Ghost" />
    <Button kind="danger" label="Danger" />
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
</div>`}},children:(e,t)=>{var n=S(),i=a(n),s=a(i);v(s,{kind:`primary`,label:`Primary`});var c=o(s,2);v(c,{kind:`secondary`,label:`Secondary`});var l=o(c,2);v(l,{kind:`tertiary`,label:`Tertiary`});var u=o(l,2);v(u,{kind:`ghost`,label:`Ghost`}),v(o(u,2),{kind:`danger`,label:`Danger`}),d(i);var f=o(i,2),p=a(f);v(p,{kind:`primary`,size:`small`,label:`Small`}),v(o(p,2),{kind:`primary`,size:`large`,label:`Large`}),d(f);var m=o(f,2),h=a(m);v(h,{kind:`primary`,label:`Loading`,loading:!0});var g=o(h,2);v(g,{kind:`primary`,label:`Disabled`,disabled:!0}),v(o(g,2),{kind:`ghost`,size:`small`,label:`I don't have a code`,href:`#`}),d(m),d(n),r(e,n)},$$slots:{default:!0}}),r(e,s),t()}var b,x,S,C,w,T,E,D;e((()=>{i(),f(),p(),_(),l(),m(),b={title:`lib/components/Button`,component:v,parameters:{layout:`centered`},argTypes:{kind:{control:`select`,options:[`primary`,`secondary`,`tertiary`,`ghost`,`ghost-with-icon`,`icon`,`danger`]},size:{control:`inline-radio`,options:[`small`,`large`]},disabled:{control:`boolean`},loading:{control:`boolean`}}},{Story:x}=h(b),S=s(`<div class="flex flex-col gap-6"><div class="flex flex-wrap items-center gap-3"><!> <!> <!> <!> <!></div> <div class="flex flex-wrap items-center gap-3"><!> <!></div> <div class="flex flex-wrap items-center gap-3"><!> <!> <!></div></div>`),C=s(`<!> <!>`,1),y.__docgen={data:[],name:`Button.stories.svelte`},w=g(y,b),T=[`Playground`,`Overview`],E={...w.Playground,tags:[`svelte-csf-v5`]},D={...w.Overview,tags:[`svelte-csf-v5`]}}))();export{D as Overview,E as Playground,T as __namedExportsOrder,b as default};