import{i as e}from"./preload-helper-xPQekRTU.js";import{$t as t,At as n,Ft as r,Ht as i,K as a,Lt as o,Pt as s,Ut as c,Wt as l,Z as u,a as d,b as f,cn as p,ct as m,dn as h,en as g,hn as _,i as v,kt as y,l as b,o as x,ot as S,qt as C,rt as w,s as ee,sn as te,t as T,ut as E,xt as D,y as ne}from"./iframe-BzTDCJug.js";import{a as O,i as k,n as A,r as j,t as M}from"./create-runtime-stories-CDHdP2fv.js";import{n as N,t as re}from"./cn-CrEoEzpq.js";import{a as P,o as ie}from"./spring-Chbl86hd.js";import{i as F,n as I,r as ae,t as oe}from"./TiltGlare-C9YC0Sj8.js";function L(e,t,n){let r=e.createShader(t);if(!r)throw Error(`CalloutCard: could not create shader`);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw Error(`CalloutCard: shader compile failed: ${e.getShaderInfoLog(r)??`unknown error`}`);return r}function se(e){let t=e.createProgram();if(!t)throw Error(`CalloutCard: could not create program`);if(e.attachShader(t,L(e,e.VERTEX_SHADER,B)),e.attachShader(t,L(e,e.FRAGMENT_SHADER,V)),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw Error(`CalloutCard: program link failed: ${e.getProgramInfoLog(t)??`unknown error`}`);return t}function ce(e,t){e.style.color=t;let n=getComputedStyle(e).color.match(/[\d.]+/g);return!n||n.length<3?[0,0,0]:[Number(n[0])/255,Number(n[1])/255,Number(n[2])/255]}function R(e,a){g(a,!0);let _=v(a,`colors`,3,le),y=v(a,`surface`,3,`silk`),x=v(a,`speed`,3,1),S=v(a,`scale`,3,1),ee=v(a,`tilt`,3,!0),T=d(a,H),E=c(void 0),O=c(void 0),k=c(void 0),A=c(!1),j=C(()=>y()===`silk`),M=ae(()=>({disabled:!ee()})),N=c(0);n(()=>{let e=new MutationObserver(()=>l(N));return e.observe(document.documentElement,{attributes:!0}),()=>e.disconnect()});let P=C(()=>(D(N),D(k)?_().map(e=>ce(D(k),e)):null));n(()=>{if(!D(O)||!D(E)||!D(P))return;let e=D(O).getContext(`webgl`,{antialias:!1,premultipliedAlpha:!1});if(!e){i(A,!0);return}let t;try{t=se(e)}catch(e){console.error(e),i(A,!0);return}e.useProgram(t);let n=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);let r=e.getAttribLocation(t,`a_pos`);e.enableVertexAttribArray(r),e.vertexAttribPointer(r,2,e.FLOAT,!1,0,0);let a=e.getUniformLocation(t,`u_res`),o=e.getUniformLocation(t,`u_time`),s=e.getUniformLocation(t,`u_scale`),[c,l,u]=D(P);e.uniform3fv(e.getUniformLocation(t,`u_c0`),c),e.uniform3fv(e.getUniformLocation(t,`u_c1`),l),e.uniform3fv(e.getUniformLocation(t,`u_c2`),u),e.uniform1f(s,S());let d=ie()||x()===0,f=40,p=performance.now(),m=0,h=!0,g=()=>{e.viewport(0,0,D(O).width,D(O).height),e.uniform2f(a,D(O).width,D(O).height),e.uniform1f(o,f),e.drawArrays(e.TRIANGLES,0,3)},_=e=>{f+=(e-p)/1e3*x(),p=e,g(),m=requestAnimationFrame(_)},v=()=>{d||m||!h||(p=performance.now(),m=requestAnimationFrame(_))},y=()=>{cancelAnimationFrame(m),m=0},b=()=>{let e=Math.min(devicePixelRatio,z),{width:t,height:n}=D(E).getBoundingClientRect();D(O).width=Math.max(1,Math.round(t*e)),D(O).height=Math.max(1,Math.round(n*e)),g()},C=new ResizeObserver(b);C.observe(D(E));let w=new IntersectionObserver(([e])=>{h=e.isIntersecting,h?v():y()});return w.observe(D(E)),b(),v(),()=>{y(),C.disconnect(),w.disconnect(),e.deleteBuffer(n),e.deleteProgram(t)}});var F=G();f(F,e=>({class:e,...M.handlers,...T,[ne]:{transform:M.transform,"--callout-card-fallback":`linear-gradient(160deg, ${_()[2]??``}, ${_()[1]??``} 45%, ${_()[0]??``})`}}),[()=>re(`relative isolate aspect-[3/4] overflow-hidden rounded-xl`,D(j)?`text-[#fff]`:`text-text`,y()===`raised`&&`bg-layer-01`,D(j)&&D(A)&&`bg-(--callout-card-fallback)`,a.class)]);var I=s(F);b(I,e=>i(k,e),()=>D(k));var L=o(I,2),R=e=>{var t=W(),n=r(t),a=e=>{var t=U();b(t,e=>i(O,e),()=>D(O)),m(e,t)};u(n,e=>{D(A)||e(a)}),te(2),m(e,t)};u(L,e=>{D(j)&&e(R)});var B=o(L,2);oe(B,{get glare(){return M.glare},class:`-z-10`});var V=o(B,4);w(s(V),()=>a.children??h),p(V),p(F),b(F,e=>i(E,e),()=>D(E)),m(e,F),t()}var le,z,B,V,H,U,W,G,ue=e((()=>{_(),T(),N(),P(),F(),I(),le=[`var(--color-primary)`,`var(--color-secondary)`,`var(--color-tertiary)`],z=1.5,B=`
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`,V=`
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform float u_scale;
uniform vec3 u_c0;
uniform vec3 u_c1;
uniform vec3 u_c2;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 rot = mat2(0.8, 0.6, -0.6, 0.8);
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = rot * p * 2.0 + 17.0;
    a *= 0.45;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  vec2 p = (uv - 0.5) * vec2(u_res.x / u_res.y, 1.0) * u_scale * 1.6;
  float t = u_time * 0.12;

  vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, 1.3) - t * 0.8));
  vec2 r = vec2(fbm(p + 3.2 * q + vec2(1.7, 9.2) + t * 1.2),
                fbm(p + 3.2 * q + vec2(8.3, 2.8) - t));
  float f = fbm(p + 3.6 * r);

  float fold = smoothstep(0.15, 0.95, length(q));
  float sheen = pow(clamp(r.x * r.x * 1.8 + f * 0.5 - 0.22, 0.0, 1.0), 2.2);

  vec3 col = mix(u_c0, u_c1, smoothstep(0.18, 0.78, f * f * 2.6));
  col = mix(col, u_c0 * 0.55, fold * 0.4);
  col = mix(col, u_c2, sheen);
  gl_FragColor = vec4(col, 1.0);
}
`,H=new Set([`$$slots`,`$$events`,`$$legacy`,`colors`,`surface`,`speed`,`scale`,`tilt`,`children`,`class`]),U=E(`<canvas class="absolute inset-0 -z-10 size-full rounded-[inherit]" aria-hidden="true"></canvas>`),W=E(`<!> <span class="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] bg-linear-to-t from-[#000]/35 via-transparent to-[#000]/10" aria-hidden="true"></span>`,1),G=E(`<div><span class="hidden" aria-hidden="true"></span> <!> <!> <span class="pointer-events-none absolute inset-0 rounded-[inherit] border-[0.03125rem] border-border" aria-hidden="true"></span> <div class="relative h-full"><!></div></div>`),R.__docgen={data:[{name:`children`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`function`,text:`Snippet<[]>`},static:!1,readonly:!1},{name:`colors`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`array`,text:`CalloutCardColors`},static:!1,readonly:!1,defaultValue:`...`},{name:`surface`,visibility:`public`,description:"`silk` paints the flowing shader, `raised` the layer surface, `none` leaves the card transparent.",keywords:[],kind:`let`,type:{kind:`union`,type:[{kind:`const`,type:`string`,value:`none`,text:`"none"`},{kind:`const`,type:`string`,value:`silk`,text:`"silk"`},{kind:`const`,type:`string`,value:`raised`,text:`"raised"`}],text:`"none" | "silk" | "raised"`},static:!1,readonly:!1,defaultValue:`"silk"`},{name:`speed`,visibility:`public`,description:`Flow speed multiplier; 0 freezes the silk.`,keywords:[],kind:`let`,type:{kind:`type`,type:`number`,text:`number`},static:!1,readonly:!1,defaultValue:`1`},{name:`scale`,visibility:`public`,description:`Size of the folds; larger values give more, smaller folds.`,keywords:[],kind:`let`,type:{kind:`type`,type:`number`,text:`number`},static:!1,readonly:!1,defaultValue:`1`},{name:`tilt`,visibility:`public`,description:`Tilt towards the pointer while pressed.`,keywords:[],kind:`let`,type:{kind:`type`,type:`boolean`,text:`boolean`},static:!1,readonly:!1,defaultValue:`true`},{name:`class`,visibility:`public`,keywords:[],kind:`let`,type:{kind:`type`,type:`string`,text:`string`},static:!1,readonly:!1}],name:`CalloutCard.svelte`}}));function de(e,n){g(n,!1),ee();var i=he(),c=r(i);J(c,{name:`Playground`,args:{surface:`silk`,speed:1,scale:1,tilt:!0},template:(e,t=h)=>{R(e,x(t,{class:`w-[16rem]`,children:(e,t)=>{K(e)},$$slots:{default:!0}}))},$$slots:{template:!0},parameters:{docs:{description:{story:`Playground: press and drag on the card to tilt it.`}},__svelteCsf:{rawCode:`<CalloutCard {...args} class="w-[16rem]">
  {@render invite()}
</CalloutCard>`}}}),J(o(c,2),{name:`Overview`,asChild:!0,parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`Overview: an event invite on the default palette (primary, secondary, tertiary), three pricing tiers on reordered token palettes, and the same invite on the raised surface and without surface.`}},__svelteCsf:{rawCode:`<div class="flex flex-wrap items-start gap-l">
  <CalloutCard class="w-[14rem]">
    {@render invite()}
  </CalloutCard>
  {#each tiers as tier (tier.name)}
    <CalloutCard colors={tier.colors} class="w-[11rem]">
      <div class="flex h-full flex-col justify-between p-l">
        <span class="typography-body-semibold">{tier.name}</span>
        <div class="flex items-baseline gap-3xs">
          <span class="typography-display-04-bold">{tier.price}</span>
          <span class="typography-body-small-regular opacity-80">/ month</span>
        </div>
      </div>
    </CalloutCard>
  {/each}
  <CalloutCard surface="raised" class="w-[14rem]">
    {@render invite()}
  </CalloutCard>
  <CalloutCard surface="none" class="w-[14rem]">
    {@render invite()}
  </CalloutCard>
</div>`}},children:(e,t)=>{var n=me(),r=s(n);R(r,{class:`w-[14rem]`,children:(e,t)=>{K(e)},$$slots:{default:!0}});var i=o(r,2);a(i,1,()=>fe,e=>e.name,(e,t)=>{R(e,{get colors(){return D(t).colors},class:`w-[11rem]`,children:(e,n)=>{var r=Q(),i=s(r),a=s(i,!0);p(i);var c=o(i,2),l=s(c),u=s(l,!0);p(l),te(2),p(c),p(r),y(()=>{S(a,D(t).name),S(u,D(t).price)}),m(e,r)},$$slots:{default:!0}})});var c=o(i,2);R(c,{surface:`raised`,class:`w-[14rem]`,children:(e,t)=>{K(e)},$$slots:{default:!0}}),R(o(c,2),{surface:`none`,class:`w-[14rem]`,children:(e,t)=>{K(e)},$$slots:{default:!0}}),p(n),m(e,n)},$$slots:{default:!0}}),m(e,i),t()}var K,q,J,Y,X,Z,fe,pe,Q,me,he,$,ge,_e,ve;e((()=>{_(),O(),k(),ue(),T(),A(),K=e=>{m(e,pe())},q={title:`lib/components/CalloutCard`,component:R,parameters:{layout:`centered`},argTypes:{speed:{control:{type:`range`,min:0,max:4,step:.1}},scale:{control:{type:`range`,min:.4,max:3,step:.1}},surface:{control:`inline-radio`,options:[`silk`,`raised`,`none`]},tilt:{control:`boolean`},colors:{control:`object`}}},{Story:J}=j(q),Y=`var(--color-primary)`,X=`var(--color-secondary)`,Z=`var(--color-tertiary)`,fe=[{name:`Starter`,price:`€19`,colors:[Z,Y,X]},{name:`Studio`,price:`€39`,colors:[X,Z,Y]},{name:`Chain`,price:`€99`,colors:[Y,X,Z]}],pe=E(`<div class="flex h-full flex-col justify-between p-xl"><span class="typography-label-semibold tracking-[0.2em] uppercase opacity-80">You're invited</span> <div class="flex flex-col gap-s"><span class="typography-display-03-bold">After<br/>Dark</span> <div class="flex flex-col"><span class="typography-body-semibold">October 14</span> <span class="typography-body-small-regular opacity-80">10 AM · Storm Studio</span></div></div></div>`),Q=E(`<div class="flex h-full flex-col justify-between p-l"><span class="typography-body-semibold"> </span> <div class="flex items-baseline gap-3xs"><span class="typography-display-04-bold"> </span> <span class="typography-body-small-regular opacity-80">/ month</span></div></div>`),me=E(`<div class="flex flex-wrap items-start gap-l"><!> <!> <!> <!></div>`),he=E(`<!> <!>`,1),de.__docgen={data:[],name:`CalloutCard.stories.svelte`},$=M(de,q),ge=[`Playground`,`Overview`],_e={...$.Playground,tags:[`svelte-csf-v5`]},ve={...$.Overview,tags:[`svelte-csf-v5`]}}))();export{ve as Overview,_e as Playground,ge as __namedExportsOrder,q as default};