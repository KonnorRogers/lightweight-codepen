var a="";function n(t){a=t}function o(t=""){if(!a){let s=[...document.getElementsByTagName("script")],c=s.find(e=>e.hasAttribute("data-shoelace"));if(c)n(c.getAttribute("data-shoelace"));else{let e=s.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src)),i="";e&&(i=e.getAttribute("src")),n(i.split("/").slice(0,-1).join("/"))}}return a.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}export{n as a,o as b};
//# sourceMappingURL=/light-pen/pull/13/bridgetown/static/chunks/chunk-NXCX5NXE.js.map
