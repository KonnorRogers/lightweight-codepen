function h(o,t){return{top:Math.round(o.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(o.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var f=new Set;function g(){let o=document.documentElement.clientWidth;return Math.abs(window.innerWidth-o)}function p(o){if(f.add(o),!document.body.classList.contains("sl-scroll-lock")){let t=g();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function m(o){f.delete(o),f.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function y(o,t,l="vertical",s="smooth"){let d=h(o,t),c=d.top+t.scrollTop,e=d.left+t.scrollLeft,i=t.scrollLeft,n=t.scrollLeft+t.offsetWidth,u=t.scrollTop,r=t.scrollTop+t.offsetHeight;(l==="horizontal"||l==="both")&&(e<i?t.scrollTo({left:e,behavior:s}):e+o.clientWidth>n&&t.scrollTo({left:e-t.offsetWidth+o.clientWidth,behavior:s})),(l==="vertical"||l==="both")&&(c<u?t.scrollTo({top:c,behavior:s}):c+o.clientHeight>r&&t.scrollTo({top:c-t.offsetHeight+o.clientHeight,behavior:s}))}export{p as a,m as b,y as c};
//# sourceMappingURL=/light-pen/pull/5/bridgetown/static/chunks/chunk-REAMNMMW.js.map
