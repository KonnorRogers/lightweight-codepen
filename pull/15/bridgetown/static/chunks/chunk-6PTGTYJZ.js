function u(t){return s(t)}function i(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function s(t){for(let e=t;e;e=i(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=i(t);e;e=i(e)){if(!(e instanceof Element))continue;let o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||e.tagName==="BODY"))return e}return null}function f(t){let e=t.tagName.toLowerCase();return t.getAttribute("tabindex")==="-1"||t.hasAttribute("disabled")||t.hasAttribute("aria-disabled")&&t.getAttribute("aria-disabled")!=="false"||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||t.offsetParent===null&&u(t)===null||window.getComputedStyle(t).visibility==="hidden"?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(e)}function p(t){var e,o;let n=d(t),r=(e=n[0])!=null?e:null,a=(o=n[n.length-1])!=null?o:null;return{start:r,end:a}}function d(t){let e=[];function o(n){n instanceof Element&&(e.push(n),n.shadowRoot!==null&&n.shadowRoot.mode==="open"&&o(n.shadowRoot)),[...n.children].forEach(r=>o(r))}return o(t),e.filter(f).sort((n,r)=>{let a=Number(n.getAttribute("tabindex"))||0;return(Number(r.getAttribute("tabindex"))||0)-a})}export{u as a,p as b,d as c};
//# sourceMappingURL=/light-pen/pull/15/bridgetown/static/chunks/chunk-6PTGTYJZ.js.map
