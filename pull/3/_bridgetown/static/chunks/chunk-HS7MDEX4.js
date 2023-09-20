import{a as b,b as a,e as v,f as m,g as w,h as d,i as y,j as x,k as z,o as h,p as C,q as $,r as S,s as g,t as M,u as R,v as O,w as D}from"/light-pen/pull/3/_bridgetown/static/chunks/chunk-7Q6X3JMI.js";import{d as s}from"/light-pen/pull/3/_bridgetown/static/chunks/chunk-LHGYYUFY.js";var k=b`
:host {
  --border-color: lightgray;
}
:host,
[part~="base"] {
  max-width: 100%;
}

:host([resizing]) [part=~"base"] {
  cursor: col-resize;
}

[part~="base"] {
  border: 1px solid var(--border-color);
  border-radius: 3px;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: minmax(0, auto) minmax(0, 1fr) minmax(0, auto);
  height: 100%;
}

[part~="panel-resizer"] {
  border-radius: 0;
  border-inline-start: 1px solid var(--border-color);
}

:host(:not([resize-position="100"])) [part~="panel-resizer"] {
  border-inline-end: 1px solid var(--border-color);
}

[part~="preview"] {
  display: grid;
  grid-template-columns: minmax(0, var(--start-panel-width, 1fr)) minmax(0, auto) minmax(0, var(--end-panel-width, auto));
  overflow: auto;
  max-height: 100%;
  resize: vertical;
}

[part~="start-panel"] {
  padding: 1rem;
}

iframe {
  min-height: 100%;
  min-width: 100%;
}

[part~="pre"] {
  padding: 1rem;
  margin: 0;
  overflow: auto;
}

[part~="pre"],
[part~="code"] {
  line-height: 1.6;
}

[part~="end-panel"] {
  background-color: rgba(0,0,0,0.025);
}

[part~="code-wrapper"] {
  border-top: 1px solid var(--border-color);
}

[part~="pre"],
[part~="code"] {
	color: #272727;
	background-color: #f7f7f7;
}

[part~="actions"] {
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-template-columns: minmax(0, 1fr) repeat(auto-fill, minmax(0, auto));
}

button[part~="source-code-toggle"] {
  display: grid;
  grid-auto-flow: column;
  align-items:r center;
  justify-content: center;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top: 1px solid var(--border-color);
  min-height: 100%;
  font-size: 1rem;
}

[part~="source-code-toggle"][aria-expanded="true"] svg {
  transform: rotate(180deg);
}
`;function P(n,e=" "){let t=[];for(let[i,o]of Object.entries(n))o&&t.push(i);return t.join(e)}function f(n,e=0){let t=null;return(...i)=>{t&&window.clearTimeout(t),t=window.setTimeout(()=>{n.apply(null,i)},e)}}var T="Show source code",r=class extends C(v){constructor(){super(),this.sandboxSettings=O,this.summary=T,this.highlightLanguage="html",this.inlinePreview=!1,this.resizing=!1,this.disableHighlight=!1,this.code="",this.baseURL="",this.previewCode="",this.open=!1,this.resizePosition=100,this.iframeSrcDoc="",this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.__mutationObserverConfig={childList:!0,subtree:!0,characterData:!0},this.previewCodeDebounce=f(()=>this.handleMutation("preview-code"),20),this.codeDebounce=f(()=>this.handleMutation("code"),20)}resetIframeCodeMutationObserver(){this.previewCodeMutationObserver&&this.previewCodeMutationObserver.disconnect(),this.previewCodeMutationObserver=new MutationObserver((...t)=>this.previewCodeDebounce());let e=this.findSlot("preview-code")?.assignedElements({flatten:!0})||[];for(let t of e)this.previewCodeMutationObserver.observe(t,this.__mutationObserverConfig)}resetCodeMutationObserver(){this.codeMutationObserver&&this.codeMutationObserver.disconnect(),this.codeMutationObserver=new MutationObserver((...t)=>this.codeDebounce());let e=this.findSlot("code")?.assignedElements({flatten:!0})||[];for(let t of e)this.codeMutationObserver.observe(t,this.__mutationObserverConfig)}handleMutation(e){if(e==="preview-code"){this.handleTemplate({target:this.findSlot("preview-code")});return}if(e==="code"){this.handleTemplate({target:this.findSlot("code")});return}}findSlot(e){return this.shadowRoot?.querySelector(`slot[name='${e}']`)}handleTemplate(e){let t=e.target;if(t==null)return;let i=t.getAttribute("name");if(["preview-code","code"].includes(i||"")===!1)return;let o="type"in e&&e.type==="slotchange",p=t.assignedElements({flatten:!0}).map(u=>u.innerHTML).join(`
`);if(i==="preview-code"){o&&this.resetIframeCodeMutationObserver(),this.previewCode=p;return}if(i==="code"){o&&this.resetCodeMutationObserver(),this.code=p;return}}unescapePreviewCode(){return this.unescapeCharacters(this.previewCode||this.code)}updateIframeContent(){let e=this.unescapePreviewCode(),t=`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <base href="${this.baseURL||document.baseURI}">
        </head>
        <body>
          ${e}
        </body>
      </html>`;this.iframeSrcDoc=t}escapeCharacters(e){return e.replaceAll(new RegExp("<","g"),"&lt;").replaceAll(new RegExp(">","g"),"&gt;")}unescapeCharacters(e){return e.replaceAll(/&lt;\/([\w\d\.-_]+)>/g,"</$1>")}willUpdate(e){["previewCode","code","baseURL"].some(t=>e.has(t))&&(this._iframeDebounce!=null&&window.clearTimeout(this._iframeDebounce),this._iframeDebounce=setTimeout(()=>this.updateIframeContent(),300)),e.has("resizePosition")&&this.updateResizePosition(),super.willUpdate(e)}updateCachedWidth(){let{left:e,right:t}=this.getBoundingClientRect(),i=e+t;this.cachedWidth=i}handleResize(e){let{left:t,right:i}=e[0].contentRect,o=t+i;this.cachedWidth=o}connectedCallback(){super.connectedCallback(),this.updateCachedWidth(),this.updateComplete.then(()=>{this.resizeObserver.observe(this),this.resetIframeCodeMutationObserver(),this.resetCodeMutationObserver()})}highlight(e=this.code){return e}render(){let e=this.highlightLanguage;return a`
      <div part=${P({base:!0})}>
        <div part="preview">
          ${m(this.inlinePreview,()=>a`<div part="start-panel preview-div">${h(this.unescapePreviewCode())}</div>`,()=>a`
                <iframe part="start-panel iframe" frameborder="0" srcdoc=${this.iframeSrcDoc}></iframe>
              `)}
          <button
            id="panel-resizer"
            part="panel-resizer"
            role="separator"
            aria-valuenow=${this.resizePosition}
            aria-valuemin="0"
            aria-valuemax="100"
            @keydown=${this.handleResizerKeydown}
            @pointerdown=${this.handleDrag}
            @touchstart=${this.handleDrag}
            class=${this.resizing?"is-active":""}
          >
            <slot name="resize-icon">
              ${D}
            </slot>
          </button>

          <div part="end-panel"></div>
        </div>


        <details id="details" ?open=${this.open} part="source-details" aria-labelledby="summary">
          <summary style="display: none;"></summary>
          <div part="code-wrapper">
            ${m(this.highlight,()=>a`
					      <pre
                  id="pre-${e}"
                  data-code-lang=${e}
                  aria-hidden="true"
                  part="pre pre-${e}"
                  tabindex="0"
                  aria-labelledby="source-code-label"
                  role="region"
                ><code
                    part="code code-${e}"
                    class="language-${e}"
                  >${h(this.highlight())}</code></pre>`,()=>a`${h(this.code)}`)}
          </div>
        </details>

        <div part="actions">
          <button part="source-code-toggle" aria-expanded=${this.open} aria-controls="details" @click=${()=>this.open=!this.open} type="button">
            <slot name="summary">${this.summary||T}</slot>
            <slot name="source-code-toggle-icon">
              <svg part="source-code-toggle-icon" viewBox="0 0 24 24" height="24" width="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </slot>
          </button>

          <slot name="actions"></slot>
        </div>
      </div>

      <div hidden>
        <slot name="preview-code" @slotchange=${this.handleTemplate}></slot>
        <slot name="code" @slotchange=${this.handleTemplate}></slot>
      </div>
    `}get panelResizer(){return this.shadowRoot?.querySelector("[part~='panel-resizer']")}handleDrag(e){e.cancelable&&e.preventDefault();let t=this.shadowRoot?.querySelector("iframe");t&&(t.style.pointerEvents="none"),this.resizing=!0;let o=(e.currentTarget?.offsetWidth||0)/2;R(this,{onMove:(l,p)=>{let u=l+o;this.resizePosition=g(0,this.pixelsToPercentage(u),100),this.updateResizePosition(),this.resizing=!0},onStop:()=>{let l=this.shadowRoot?.querySelector("iframe");l&&(l.style.pointerEvents="auto"),this.resizing=!1},initialEvent:e})}updateResizePosition(e=this.resizePosition){let t=e;if(t!=null){let i=100-t;this.style.setProperty("--start-panel-width",`clamp(275px, ${t}%, 100%)`),this.style.setProperty("--end-panel-width",`${i}%`)}}handleResizerKeydown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.resizePosition,i=(e.shiftKey?10:1)*1;e.preventDefault(),e.key==="ArrowLeft"&&(t-=i),e.key==="ArrowRight"&&(t+=i),e.key==="Home"&&(t=100),e.key==="End"&&(t=0),this.resizePosition=g(0,t,100)}}pixelsToPercentage(e){return e/this.cachedWidth*100}};s(r,"baseName","light-preview"),s(r,"styles",[$,S,k]),s(r,"properties",{summary:{},sandboxSettings:{reflect:!0,attribute:"sandbox-settings"},highlightLanguage:{reflect:!0,attribute:"highlight-language"},inlinePreview:{type:Boolean,attribute:"inline-preview"},disableHighlight:{type:Boolean,attribute:"disable-highlight"},open:{reflect:!0,type:Boolean},baseURL:{reflect:!0,attribute:"base-url"},resizePosition:{reflect:!0,type:Number,attribute:"resize-position"},resizing:{reflect:!0,type:Boolean},iframeSrcDoc:{reflect:!0,attribute:"iframe-src-doc"},code:{state:!0},previewCode:{state:!0}});d.registerLanguage("html",x);d.registerLanguage("css",z);d.registerLanguage("javascript",y);var c=class extends r{highlight(e=this.code){return d.highlight(M(this.unescapeCharacters(e)),{language:this.highlightLanguage||this.codeLanguage}).value}};s(c,"styles",r.styles.concat([w]));export{c as a};
//# sourceMappingURL=/light-pen/pull/3/_bridgetown/static/chunks/chunk-HS7MDEX4.js.map
