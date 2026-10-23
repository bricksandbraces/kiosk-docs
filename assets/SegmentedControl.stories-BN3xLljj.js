import{i as e}from"./preload-helper-xPQekRTU.js";import{$t as t,Ft as n,Gt as r,K as i,Lt as a,Pt as o,cn as s,ct as c,en as l,hn as u,s as d,t as f,ut as p,xt as m}from"./iframe-BzTDCJug.js";import{a as h,i as g,n as _,r as v,t as y}from"./create-runtime-stories-CDHdP2fv.js";import{n as b,t as x}from"./figmaDesign-BuxWJBGH.js";import{E as S,M as C,P as w}from"./tabler-icons-svelte-DJHJl3Bu.js";import{t as T}from"./icons-CLVTb0zT.js";import{n as E,t as D}from"./SegmentedControl-BGAcVacd.js";function O(e,u){l(u,!1);let f=[{value:`one`,label:`Play`,icon:k},{value:`two`,label:`Pause`,icon:A},{value:`three`,label:`Stop`,icon:j}];d();var p=z(),h=n(p);{let e=r(()=>({items:f,value:`one`,size:`large`,density:`default`,content:`label`,shape:`pill`,appearance:`primary`}));P(h,{name:`Playground`,get args(){return m(e)},parameters:{docs:{description:{story:`Playground: every prop wired to live controls.`}},__svelteCsf:{rawCode:`<SegmentedControl {...args} />`}}})}P(a(h,2),{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: all common variants composed in a single story.`}},__svelteCsf:{rawCode:`<div class="flex flex-col items-start gap-6">
  <div class="flex items-start gap-8">
    {#each ['primary', 'subtle'] as const as appearance (appearance)}
      <div class="flex flex-col items-start gap-6">
        {#each ['default', 'compact'] as const as density (density)}
          <div class="flex flex-col items-start gap-4">
            {#each ['large', 'medium', 'small'] as const as size (size)}
              <SegmentedControl aria-label="{appearance} {size} {density}" {items} value="one" {size} {density} {appearance} />
            {/each}
          </div>
        {/each}
      </div>
    {/each}
  </div>
  {#each ['pill', 'circle'] as const as shape (shape)}
    <div class="flex items-start gap-8">
      {#each ['primary', 'subtle'] as const as appearance (appearance)}
        <div class="flex flex-col items-start gap-4">
          {#each ['large', 'medium', 'small'] as const as size (size)}
            <SegmentedControl aria-label="{appearance} {size} icon only {shape}" items={iconItems} value="one" {size} {appearance} content="icon-only" {shape} />
          {/each}
        </div>
      {/each}
    </div>
  {/each}
  <SegmentedControl
    aria-label="View"
    items={[
      { value: 'day', label: 'Day' },
      { value: 'week', label: 'Week' },
      { value: 'month', label: 'Month' },
    ]}
    value="day"
  />
  <SegmentedControl
    aria-label="Two options"
    items={[
      { value: 'on', label: 'On' },
      { value: 'off', label: 'Off' },
    ]}
    value="off"
  />
  <SegmentedControl
    aria-label="With disabled item"
    items={[
      { value: 'a', label: 'Enabled' },
      { value: 'b', label: 'Selected' },
      { value: 'c', label: 'Disabled', disabled: true },
    ]}
    value="b"
  />
  <SegmentedControl aria-label="Fully disabled" {items} value="one" disabled />
</div>`}},children:(e,t)=>{var n=R(),r=o(n);i(r,4,()=>[`primary`,`subtle`],e=>e,(e,t)=>{var n=I();i(n,4,()=>[`default`,`compact`],e=>e,(e,n)=>{var r=F();i(r,4,()=>[`large`,`medium`,`small`],e=>e,(e,r)=>{D(e,{get"aria-label"(){return`${t??``} ${r??``} ${n??``}`},get items(){return M},value:`one`,get size(){return r},get density(){return n},get appearance(){return t}})}),s(r),c(e,r)}),s(n),c(e,n)}),s(r);var l=a(r,2);i(l,0,()=>[`pill`,`circle`],e=>e,(e,t)=>{var n=L();i(n,4,()=>[`primary`,`subtle`],e=>e,(e,n)=>{var r=F();i(r,4,()=>[`large`,`medium`,`small`],e=>e,(e,r)=>{D(e,{get"aria-label"(){return`${n??``} ${r??``} icon only ${t??``}`},get items(){return f},value:`one`,get size(){return r},get appearance(){return n},content:`icon-only`,get shape(){return t}})}),s(r),c(e,r)}),s(n),c(e,n)});var u=a(l,2);D(u,{"aria-label":`View`,items:[{value:`day`,label:`Day`},{value:`week`,label:`Week`},{value:`month`,label:`Month`}],value:`day`});var d=a(u,2);D(d,{"aria-label":`Two options`,items:[{value:`on`,label:`On`},{value:`off`,label:`Off`}],value:`off`});var p=a(d,2);D(p,{"aria-label":`With disabled item`,items:[{value:`a`,label:`Enabled`},{value:`b`,label:`Selected`},{value:`c`,label:`Disabled`,disabled:!0}],value:`b`}),D(a(p,2),{"aria-label":`Fully disabled`,get items(){return M},value:`one`,disabled:!0}),s(n),c(e,n)},$$slots:{default:!0}}),c(e,p),t()}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;e((()=>{u(),h(),g(),b(),E(),T(),f(),_(),k=e=>{C(e,{"aria-hidden":`true`})},A=e=>{w(e,{"aria-hidden":`true`})},j=e=>{S(e,{"aria-hidden":`true`})},M=[{value:`one`,label:`Item`},{value:`two`,label:`Item`},{value:`three`,label:`Item`}],N={title:`lib/components/SegmentedControl`,component:D,parameters:{layout:`centered`,design:x(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=286-5`)},argTypes:{size:{control:`inline-radio`,options:[`large`,`medium`,`small`]},density:{control:`inline-radio`,options:[`default`,`compact`]},content:{control:`inline-radio`,options:[`label`,`icon-only`]},shape:{control:`inline-radio`,options:[`pill`,`circle`]},appearance:{control:`inline-radio`,options:[`primary`,`subtle`]},disabled:{control:`boolean`}}},{Story:P}=v(N),F=p(`<div class="flex flex-col items-start gap-4"></div>`),I=p(`<div class="flex flex-col items-start gap-6"></div>`),L=p(`<div class="flex items-start gap-8"></div>`),R=p(`<div class="flex flex-col items-start gap-6"><div class="flex items-start gap-8"></div> <!> <!> <!> <!> <!></div>`),z=p(`<!> <!>`,1),O.__docgen={data:[],name:`SegmentedControl.stories.svelte`},B=y(O,N),V=[`Playground`,`Overview`],H={...B.Playground,tags:[`svelte-csf-v5`]},U={...B.Overview,tags:[`svelte-csf-v5`]}}))();export{U as Overview,H as Playground,V as __namedExportsOrder,N as default};