import{i as e}from"./preload-helper-xPQekRTU.js";import{At as t,Gt as n,H as r,Kt as i,Mt as a,Qt as o,_t as s,it as c,kt as l,nn as u,ot as d,s as f,t as p,zt as m}from"./iframe-D8juAyTU.js";import{a as h,i as g,n as _,r as v,t as y}from"./create-runtime-stories-Cc1oU7EP.js";import{n as b,t as x}from"./figmaDesign-BuxWJBGH.js";import{A as S,M as C,t as w,w as T}from"./icons-CnWMNWXy.js";import{n as E,t as D}from"./SegmentedControl-ejeUkXGv.js";function O(e,u){i(u,!1);let d=[{value:`one`,label:`Play`,icon:k},{value:`two`,label:`Pause`,icon:A},{value:`three`,label:`Stop`,icon:j}];f();var p=z(),h=t(p);{let e=m(()=>({items:d,value:`one`,size:`large`,density:`default`,content:`label`,shape:`pill`,appearance:`primary`}));P(h,{name:`Playground`,get args(){return s(e)},parameters:{docs:{description:{story:`Playground: every prop wired to live controls.`}},__svelteCsf:{rawCode:`<SegmentedControl {...args} />`}}})}P(a(h,2),{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: all common variants composed in a single story.`}},__svelteCsf:{rawCode:`<div class="flex flex-col items-start gap-6">
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
</div>`}},children:(e,t)=>{var n=R(),i=l(n);r(i,4,()=>[`primary`,`subtle`],e=>e,(e,t)=>{var n=I();r(n,4,()=>[`default`,`compact`],e=>e,(e,n)=>{var i=F();r(i,4,()=>[`large`,`medium`,`small`],e=>e,(e,r)=>{D(e,{get"aria-label"(){return`${t??``} ${r??``} ${n??``}`},get items(){return M},value:`one`,get size(){return r},get density(){return n},get appearance(){return t}})}),o(i),c(e,i)}),o(n),c(e,n)}),o(i);var s=a(i,2);r(s,0,()=>[`pill`,`circle`],e=>e,(e,t)=>{var n=L();r(n,4,()=>[`primary`,`subtle`],e=>e,(e,n)=>{var i=F();r(i,4,()=>[`large`,`medium`,`small`],e=>e,(e,r)=>{D(e,{get"aria-label"(){return`${n??``} ${r??``} icon only ${t??``}`},get items(){return d},value:`one`,get size(){return r},get appearance(){return n},content:`icon-only`,get shape(){return t}})}),o(i),c(e,i)}),o(n),c(e,n)});var u=a(s,2);D(u,{"aria-label":`View`,items:[{value:`day`,label:`Day`},{value:`week`,label:`Week`},{value:`month`,label:`Month`}],value:`day`});var f=a(u,2);D(f,{"aria-label":`Two options`,items:[{value:`on`,label:`On`},{value:`off`,label:`Off`}],value:`off`});var p=a(f,2);D(p,{"aria-label":`With disabled item`,items:[{value:`a`,label:`Enabled`},{value:`b`,label:`Selected`},{value:`c`,label:`Disabled`,disabled:!0}],value:`b`}),D(a(p,2),{"aria-label":`Fully disabled`,get items(){return M},value:`one`,disabled:!0}),o(n),c(e,n)},$$slots:{default:!0}}),c(e,p),n()}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;e((()=>{u(),h(),g(),b(),E(),w(),p(),_(),k=e=>{S(e,{"aria-hidden":`true`})},A=e=>{C(e,{"aria-hidden":`true`})},j=e=>{T(e,{"aria-hidden":`true`})},M=[{value:`one`,label:`Item`},{value:`two`,label:`Item`},{value:`three`,label:`Item`}],N={title:`lib/components/SegmentedControl`,component:D,parameters:{layout:`centered`,design:x(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=286-5`)},argTypes:{size:{control:`inline-radio`,options:[`large`,`medium`,`small`]},density:{control:`inline-radio`,options:[`default`,`compact`]},content:{control:`inline-radio`,options:[`label`,`icon-only`]},shape:{control:`inline-radio`,options:[`pill`,`circle`]},appearance:{control:`inline-radio`,options:[`primary`,`subtle`]},disabled:{control:`boolean`}}},{Story:P}=v(N),F=d(`<div class="flex flex-col items-start gap-4"></div>`),I=d(`<div class="flex flex-col items-start gap-6"></div>`),L=d(`<div class="flex items-start gap-8"></div>`),R=d(`<div class="flex flex-col items-start gap-6"><div class="flex items-start gap-8"></div> <!> <!> <!> <!> <!></div>`),z=d(`<!> <!>`,1),O.__docgen={data:[],name:`SegmentedControl.stories.svelte`},B=y(O,N),V=[`Playground`,`Overview`],H={...B.Playground,tags:[`svelte-csf-v5`]},U={...B.Overview,tags:[`svelte-csf-v5`]}}))();export{U as Overview,H as Playground,V as __namedExportsOrder,N as default};