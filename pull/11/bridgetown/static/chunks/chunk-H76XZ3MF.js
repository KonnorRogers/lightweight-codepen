var c=new Set,v=new MutationObserver(f),s=new Map,g=document.documentElement.dir||"ltr",m=document.documentElement.lang||navigator.language,l;v.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function d(...o){o.map(e=>{let t=e.$code.toLowerCase();s.has(t)?s.set(t,Object.assign(Object.assign({},s.get(t)),e)):s.set(t,e),l||(l=e)}),f()}function f(){g=document.documentElement.dir||"ltr",m=document.documentElement.lang||navigator.language,[...c.keys()].map(o=>{typeof o.requestUpdate=="function"&&o.requestUpdate()})}var i=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){c.add(this.host)}hostDisconnected(){c.delete(this.host)}dir(){return`${this.host.dir||g}`.toLowerCase()}lang(){return`${this.host.lang||m}`.toLowerCase()}getTranslationData(e){var t,n;let r=new Intl.Locale(e),a=r?.language.toLowerCase(),u=(n=(t=r?.region)===null||t===void 0?void 0:t.toLowerCase())!==null&&n!==void 0?n:"",h=s.get(`${a}-${u}`),p=s.get(a);return{locale:r,language:a,region:u,primary:h,secondary:p}}exists(e,t){var n;let{primary:r,secondary:a}=this.getTranslationData((n=t.lang)!==null&&n!==void 0?n:this.lang());return t=Object.assign({includeFallback:!1},t),!!(r&&r[e]||a&&a[e]||t.includeFallback&&l&&l[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),a;if(n&&n[e])a=n[e];else if(r&&r[e])a=r[e];else if(l&&l[e])a=l[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof a=="function"?a(...t):a}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}};var b=class extends i{};var w={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(o,e)=>`Go to slide ${o} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:o=>o===0?"No options selected":o===1?"1 option selected":`${o} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:o=>`Slide ${o}`,toggleColorFormat:"Toggle color format"};d(w);export{b as a};
//# sourceMappingURL=/light-pen/pull/11/bridgetown/static/chunks/chunk-H76XZ3MF.js.map
