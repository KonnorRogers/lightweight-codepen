import{a as o,b as s}from"/light-pen/pull/15/bridgetown/static/chunks/chunk-MK4KTOZZ.js";var a=new Map,f=new WeakMap;function c(e){return e??{keyframes:[],options:{duration:0}}}function u(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function p(e,t){a.set(e,c(t))}function g(e,t,r){let n=f.get(e);if(n?.[t])return u(n[t],r.dir);let i=a.get(t);return i?u(i,r.dir):{keyframes:[],options:{duration:0}}}function A(e,t){return new Promise(r=>{function n(i){i.target===e&&(e.removeEventListener(t,n),r())}e.addEventListener(t,n)})}function v(e,t,r){return new Promise(n=>{if(r?.duration===1/0)throw new Error("Promise-based animations must be finite.");let i=e.animate(t,s(o({},r),{duration:d()?0:r.duration}));i.addEventListener("cancel",n,{once:!0}),i.addEventListener("finish",n,{once:!0})})}function d(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function E(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{let n=requestAnimationFrame(r);t.addEventListener("cancel",()=>n,{once:!0}),t.addEventListener("finish",()=>n,{once:!0}),t.cancel()})))}export{p as a,g as b,A as c,v as d,E as e};
//# sourceMappingURL=/light-pen/pull/15/bridgetown/static/chunks/chunk-FTZXBJ6N.js.map
