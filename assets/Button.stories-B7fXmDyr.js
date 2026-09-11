import{i as e}from"./preload-helper-xPQekRTU.js";import{Bt as t,Dt as n,Tt as r,Vt as i,Zt as a,et as o,nt as s,qt as c,s as l,t as u,wt as d}from"./iframe-BRGrjxrt.js";import{a as f,i as p,n as m,o as h,r as g,s as _,t as v}from"./create-runtime-stories-CTRa-s8D.js";import{r as y,t as b}from"./Button-BTV_Ljr7.js";import{At as x,S,t as C,u as w}from"./icons-C9IEFCjo.js";function T(e,a){i(a,!1),l();var s=M(),u=r(s);A(u,{name:`Playground`,args:{kind:`primary`,size:`large`,label:`Start workout`},parameters:{docs:{description:{story:`Playground: every prop wired to live controls.`}},__svelteCsf:{rawCode:`<Button {...args} />`}}}),A(n(u,2),{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: all common variants composed in a single story.`}},__svelteCsf:{rawCode:`<div class="flex flex-col gap-6">
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
</div>`}},children:(e,t)=>{var r=j(),i=d(r),a=d(i);b(a,{kind:`primary`,label:`Primary`});var s=n(a,2);b(s,{kind:`secondary`,label:`Secondary`});var l=n(s,2);b(l,{kind:`tertiary`,label:`Tertiary`});var u=n(l,2);b(u,{kind:`ghost`,label:`Ghost`}),b(n(u,2),{kind:`danger`,label:`Danger`}),c(i);var f=n(i,2),p=d(f);b(p,{kind:`primary-with-icon`,get icon(){return E},"aria-label":`Add`});var m=n(p,2);b(m,{kind:`secondary-with-icon`,get icon(){return E},"aria-label":`Add`});var h=n(m,2);b(h,{kind:`icon`,get icon(){return D},"aria-label":`Delete`});var g=n(h,2);b(g,{kind:`ghost-with-icon`,size:`small`,label:`Lina`,get icon(){return O}});var _=n(g,2);b(_,{kind:`primary-with-icon`,get icon(){return E},"aria-label":`Add`,loading:!0}),b(n(_,2),{kind:`secondary-with-icon`,get icon(){return E},"aria-label":`Add`,disabled:!0}),c(f);var v=n(f,2),y=d(v);b(y,{kind:`primary`,size:`small`,label:`Small`}),b(n(y,2),{kind:`primary`,size:`large`,label:`Large`}),c(v);var x=n(v,2),S=d(x);b(S,{kind:`primary`,label:`Loading`,loading:!0});var C=n(S,2);b(C,{kind:`primary`,label:`Disabled`,disabled:!0}),b(n(C,2),{kind:`ghost`,size:`small`,label:`I don't have a code`,href:`#`}),c(x),c(r),o(e,r)},$$slots:{default:!0}}),o(e,s),t()}var E,D,O,k,A,j,M,N,P,F,I;e((()=>{a(),_(),h(),p(),y(),C(),u(),m(),E=e=>{S(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},D=e=>{w(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},O=e=>{x(e,{class:`size-full`,stroke:1.5,"aria-hidden":`true`})},k={title:`lib/components/Button`,component:b,parameters:{layout:`centered`,design:g(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=8-434`)},argTypes:{kind:{control:`select`,options:[`primary`,`primary-with-icon`,`secondary`,`secondary-with-icon`,`tertiary`,`ghost`,`ghost-with-icon`,`icon`,`danger`]},size:{control:`inline-radio`,options:[`small`,`large`]},disabled:{control:`boolean`},loading:{control:`boolean`}}},{Story:A}=f(k),j=s(`<div class="flex flex-col gap-6"><div class="flex flex-wrap items-center gap-3"><!> <!> <!> <!> <!></div> <div class="flex flex-wrap items-center gap-3"><!> <!> <!> <!> <!> <!></div> <div class="flex flex-wrap items-center gap-3"><!> <!></div> <div class="flex flex-wrap items-center gap-3"><!> <!> <!></div></div>`),M=s(`<!> <!>`,1),T.__docgen={data:[],name:`Button.stories.svelte`},N=v(T,k),P=[`Playground`,`Overview`],F={...N.Playground,tags:[`svelte-csf-v5`]},I={...N.Overview,tags:[`svelte-csf-v5`]}}))();export{I as Overview,F as Playground,P as __namedExportsOrder,k as default};