import{i as e}from"./preload-helper-xPQekRTU.js";import{$t as t,Ft as n,Gt as r,K as i,Lt as a,Pt as o,cn as s,ct as c,en as l,fn as u,gn as d,o as f,q as p,s as m,t as h,ut as g,xt as _}from"./iframe-BZqrn_BQ.js";import{a as v,i as y,n as b,r as x,t as S}from"./create-runtime-stories-Ck609_5v.js";import{n as C,t as w}from"./figmaDesign-BuxWJBGH.js";import{n as T,t as E}from"./LightCard-CBiPYj17.js";function D(e,t){k.getChannel().emit(`updateStoryArgs`,{storyId:e,updatedArgs:{selected:t}})}function O(e,d){l(d,!1),m();var h=z(),g=n(h);j(g,{name:`Playground`,args:{title:`Warm up`,subtitle:`Subtitle`,layout:`large`,selected:!1},template:(e,t=u,n=u)=>{E(e,f(t,{onchange:e=>D(n().id,e)}))},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: tap the card to toggle selection - the light switches on and off with it.`}},__svelteCsf:{rawCode:`<LightCard {...args} onchange={(selected) => setSelected(context.id, selected)} />`}}}),j(a(g,2),{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: every layout in enabled, disabled and selected, for both kinds, then custom light colors,
    the rainbow light and a danger subtitle. Tap a card to toggle it - the glow grows out of the light.`}},__svelteCsf:{rawCode:`<div class="flex flex-wrap gap-3xl">
  {#each kinds as kind (kind)}
    <div class="flex flex-col gap-2xl">
      {#each layouts as layout (layout)}
        <div class="flex items-start gap-2xl">
          {#each states as state, i (i)}
            <LightCard
              {kind}
              {layout}
              title="Title"
              subtitle="Subtitle"
              selected={state.selected}
              disabled={state.disabled}
            />
          {/each}
        </div>
      {/each}
    </div>
  {/each}
  <div class="flex flex-col gap-2xl">
    <div class="flex items-start gap-2xl">
      {#each colors as { title, color }, i (title)}
        <LightCard {title} subtitle="Light color" lightColor={color} selected={i % 2 === 0} />
      {/each}
    </div>
    <div class="flex items-start gap-2xl">
      <LightCard title="Rainbow" subtitle="Rainbow light" lightVariant="rainbow" selected />
      <LightCard title="Rainbow" subtitle="Rainbow light" lightVariant="rainbow" layout="vertical" selected />
      <LightCard title="Hall 2" subtitle="Not reachable" subtitleTone="danger" layout="horizontal" />
      <LightCard title="Hall 3" subtitle="Not reachable" subtitleTone="danger" layout="horizontal" selected />
    </div>
  </div>
</div>`}},children:(e,t)=>{var n=R(),l=o(n);i(l,1,()=>N,e=>e,(e,t)=>{var n=L();i(n,5,()=>M,e=>e,(e,n)=>{var r=I();i(r,5,()=>P,p,(e,r)=>{E(e,{get kind(){return _(t)},get layout(){return _(n)},title:`Title`,subtitle:`Subtitle`,get selected(){return _(r).selected},get disabled(){return _(r).disabled}})}),s(r),c(e,r)}),s(n),c(e,n)});var u=a(l,2),d=o(u);i(d,7,()=>F,({title:e,color:t})=>e,(e,t,n)=>{let i=()=>_(t).title,a=()=>_(t).color;{let t=r(()=>_(n)%2==0);E(e,{get title(){return i()},subtitle:`Light color`,get lightColor(){return a()},get selected(){return _(t)}})}}),s(d);var f=a(d,2),m=o(f);E(m,{title:`Rainbow`,subtitle:`Rainbow light`,lightVariant:`rainbow`,selected:!0});var h=a(m,2);E(h,{title:`Rainbow`,subtitle:`Rainbow light`,lightVariant:`rainbow`,layout:`vertical`,selected:!0});var g=a(h,2);E(g,{title:`Hall 2`,subtitle:`Not reachable`,subtitleTone:`danger`,layout:`horizontal`}),E(a(g,2),{title:`Hall 3`,subtitle:`Not reachable`,subtitleTone:`danger`,layout:`horizontal`,selected:!0}),s(f),s(u),s(n),c(e,n)},$$slots:{default:!0}}),c(e,h),t()}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;e((()=>{d(),v(),y(),C(),T(),h(),b(),{addons:k}=__STORYBOOK_MODULE_PREVIEW_API__,A={title:`lib/components/LightCard`,component:E,parameters:{layout:`centered`,design:w(`https://www.figma.com/design/T6TXRdKEdKc1oKiIs0zZiD/Kiosk-Design-System?node-id=642-4155`)},argTypes:{tilt:{control:`boolean`},pressEffect:{control:`inline-radio`,options:[`tilt`,`shrink`]},title:{control:`text`},subtitle:{control:`text`},layout:{control:`inline-radio`,options:[`large`,`medium`,`medium-reversed`,`horizontal`,`vertical`]},kind:{control:`inline-radio`,options:[`default`,`variant`]},selected:{control:`boolean`},disabled:{control:`boolean`},lightVariant:{control:`inline-radio`,options:[`solid`,`rainbow`]},lightOn:{control:`boolean`},lightColor:{control:`color`},subtitleTone:{control:`inline-radio`,options:[`default`,`danger`]}}},{Story:j}=x(A),M=[`large`,`medium`,`medium-reversed`,`horizontal`,`vertical`],N=[`default`,`variant`],P=[{selected:!1,disabled:!1},{selected:!1,disabled:!0},{selected:!0,disabled:!1}],F=[{title:`Warm up`,color:`#f3b9a0`},{title:`Interval`,color:`#ace7cb`},{title:`Break`,color:`#f6e03a`},{title:`Cool down`,color:`#7fb4f0`}],I=g(`<div class="flex items-start gap-2xl"></div>`),L=g(`<div class="flex flex-col gap-2xl"></div>`),R=g(`<div class="flex flex-wrap gap-3xl"><!> <div class="flex flex-col gap-2xl"><div class="flex items-start gap-2xl"></div> <div class="flex items-start gap-2xl"><!> <!> <!> <!></div></div></div>`),z=g(`<!> <!>`,1),O.__docgen={data:[],name:`LightCard.stories.svelte`},B=S(O,A),V=[`Playground`,`Overview`],H={...B.Playground,tags:[`svelte-csf-v5`]},U={...B.Overview,tags:[`svelte-csf-v5`]}}))();export{U as Overview,H as Playground,V as __namedExportsOrder,A as default};