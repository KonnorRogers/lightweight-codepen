function m(l,t){return{top:Math.round(l.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(l.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var n=new Set;function g(){let l=document.documentElement.clientWidth;return Math.abs(window.innerWidth-l)}function p(){let l=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(l)||!l?0:l}function h(l){if(n.add(l),!document.documentElement.classList.contains("sl-scroll-lock")){let t=g()+p(),o=getComputedStyle(document.documentElement).scrollbarGutter;(!o||o==="auto")&&(o="stable"),t<2&&(o=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",o),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function y(l){n.delete(l),n.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function a(l,t,o="vertical",e="smooth"){let d=m(l,t),s=d.top+t.scrollTop,c=d.left+t.scrollLeft,i=t.scrollLeft,f=t.scrollLeft+t.offsetWidth,u=t.scrollTop,r=t.scrollTop+t.offsetHeight;(o==="horizontal"||o==="both")&&(c<i?t.scrollTo({left:c,behavior:e}):c+l.clientWidth>f&&t.scrollTo({left:c-t.offsetWidth+l.clientWidth,behavior:e})),(o==="vertical"||o==="both")&&(s<u?t.scrollTo({top:s,behavior:e}):s+l.clientHeight>r&&t.scrollTo({top:s-t.offsetHeight+l.clientHeight,behavior:e}))}export{h as a,y as b,a as c};
//# sourceMappingURL=/light-pen/pull/26/bridgetown/static/chunks/chunk-CO35VKIY.js.map
