import{a as A,b as l,c as u,d as w,e as z,f,g as T,h,i as R,j as C,k as _,l as b,m as v,n as g,o as k,p as j,q as S,r as P,s as x,t as D,u as E,v as O,w as L}from"/light-pen/pull/3/_bridgetown/static/chunks/chunk-7Q6X3JMI.js";import{d}from"/light-pen/pull/3/_bridgetown/static/chunks/chunk-LHGYYUFY.js";var M=A`
[part~="sandbox-iframe"] {
  width: 100%;
  height: 100%;
}

[part~="sandbox"] {
  background-color: #e5e5e5;
  color:#272727;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: minmax(0, auto) minmax(0, 1fr);
}

[part~="summary"] {
  font-size: .8125rem;
  font-weight: bold;
  padding: 0.4rem 0.6rem;
}

[part~="summary"]:focus {
  outline: 2px solid blue;
}

[part~="sandbox-editor"] {
  display:grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: minmax(0, 1fr);
  column-gap: 0;
  row-gap: 0;
  position: relative;
  padding-top: 3px;
  max-height: var(--textarea-height, 33vh);
}

[part~="textarea"] {
  position: relative;
  color: transparent;
  background-color: transparent;
  caret-color: black;
  z-index: 1;
  resize: vertical;
}

[part~="pre"] {
  height: var(--textarea-height, auto);
  width: var(--textarea-width, auto);
}

[part~="pre"],
[part~="textarea"] {
  grid-area:1/1/2/2;
  margin-bottom:0;
  min-height:15em;
  margin: 0;
  padding: 0;
	display: block;
	line-height: 1.5;
  padding: 8px;
  border: none;
  overflow: auto;
  position: relative;

  /* this creates line-wrapping. */
	word-break: break-word;
  white-space: pre-wrap;

  /* No wrapping */
	/* word-break: break-all; */
  /* white-space: pre; */
  tab-size: 2;
}

[part~="details"]:not(:first-child) {
  margin-top: 4px;
}

[part~="pre"],
[part~="code"] {
	color: #272727;
	background-color: #f7f7f7;
}

[part~="base"] {
	word-wrap: break-word;
	color: inherit;
	font-size: 1em;
}


[part~="sandbox"],
[part~="base"] {
  height: 100%;
}

[part~="pre"],
[part~="code"],
[part~="textarea"] {
	font-family: Menlo, Monaco, "Courier New", monospace;
	font-size: 0.875rem;
}

[part~="sandbox-iframe"] {
  aspect-ratio:auto;
  background-color: #fff;
  margin-bottom: 0;
}

[part~="base"],
[part~="pre"],
[part~="code"],
[part~="sandbox-iframe"] {
  border-radius:.25em;
}

[part~='sandbox-header'],
[part~="sandbox-console"],
[part~="sandbox-console-result"] {
  background-color:#343d4d;
  color:#fff
}

[part~="sandbox-header"]
[part~="sandbox-console"] {
  padding-top:.125em;
  padding-bottom:.125em
}

[part~="sandbox-header"] {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
  border-top-left-radius:.25em;
  border-top-right-radius:.25em;
  font-size:.8125em;
}

[part~='sandbox-controls'] button {
  margin-bottom: 0;
}

[part~="sandbox-console"] {
  border-bottom-left-radius:.25em;
  border-bottom-right-radius:.25em
}

[part~="sandbox-console-log"] {
  font-family: Menlo,Monaco,"Courier New",monospace;
  font-size:.875em;
  min-height:1.2em;
}

.log-warn {
  color:#f9d767
}

.log-error {
  color:#f9c8c8
}

[part~="sandbox-header"],
[part~="sandbox-code"],
[part~="sandbox-iframe-wrapper"],
[part~="sandbox-console"],
[part~="sandbox-console-result"] {
  padding: 0.5em;
}

[part~="sandbox-code"] {
  max-height: 100%;
  overflow-y: auto;
}

button:where([part~="panel-resizer"]) {
  height: 100%;
  cursor: col-resize;
  background-color: white;
}

button[part~="panel-resizer"]:is(:active, :hover, .is-active) {
  cursor: col-resize;
}

[resizing],
[part~="panel-resizer"].is-active {
  cursor: col-resize;
}

[part~="sandbox-content"] {
  display:grid;
  grid-template-columns: minmax(0,var(--start-panel-width, 1fr)) minmax(0, auto) minmax(0, var(--end-panel-width, 1fr));
  grid-template-rows: minmax(0, 1fr);
}

[part~="sandbox-iframe-wrapper"] {
}

[part~="sandbox-console-result"] {
  border-top:1px solid #1f252f;
  border-bottom-left-radius:0;
}
`;var{I:K}=w;var N=i=>i.strings===void 0;var c=(i,e)=>{var t,s;let r=i._$AN;if(r===void 0)return!1;for(let o of r)(s=(t=o)._$AO)===null||s===void 0||s.call(t,e,!1),c(o,e);return!0},p=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while(t?.size===0)},H=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),B(e)}};function W(i){this._$AN!==void 0?(p(this),this._$AM=i,H(this)):this._$AM=i}function I(i,e=!1,t=0){let s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(s))for(let o=t;o<s.length;o++)c(s[o],!1),p(s[o]);else s!=null&&(c(s,!1),p(s));else c(this,i)}var B=i=>{var e,t,s,r;i.type==b.CHILD&&((e=(s=i)._$AP)!==null&&e!==void 0||(s._$AP=I),(t=(r=i)._$AQ)!==null&&t!==void 0||(r._$AQ=W))},m=class extends g{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),H(this),this.isConnected=e._$AU}_$AO(e,t=!0){var s,r;e!==this.isConnected&&(this.isConnected=e,e?(s=this.reconnected)===null||s===void 0||s.call(this):(r=this.disconnected)===null||r===void 0||r.call(this)),t&&(c(this,e),p(this))}setValue(e){if(N(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var $=new WeakMap,U=v(class extends m{render(i){return u}update(i,[e]){var t;let s=e!==this.G;return s&&this.G!==void 0&&this.ot(void 0),(s||this.rt!==this.lt)&&(this.G=e,this.dt=(t=i.options)===null||t===void 0?void 0:t.host,this.ot(this.lt=i.element)),u}ot(i){var e;if(typeof this.G=="function"){let t=(e=this.dt)!==null&&e!==void 0?e:globalThis,s=$.get(t);s===void 0&&(s=new WeakMap,$.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.dt,void 0),s.set(this.G,i),i!==void 0&&this.G.call(this.dt,i)}else this.G.value=i}get rt(){var i,e,t;return typeof this.G=="function"?(e=$.get((i=this.dt)!==null&&i!==void 0?i:globalThis))===null||e===void 0?void 0:e.get(this.G):(t=this.G)===null||t===void 0?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});h.registerLanguage("javascript",R);h.registerLanguage("xml",C);h.registerLanguage("css",_);var a=class extends j(z){constructor(){super(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.htmlResizeObserver=new ResizeObserver(e=>this.handleTextAreaResize(e)),this.jsResizeObserver=new ResizeObserver(e=>this.handleTextAreaResize(e)),this.cssResizeObserver=new ResizeObserver(e=>this.handleTextAreaResize(e)),this.resizePosition=50,this.openLanguages="",this.languages=["html","css","js"],this.result=this.getAttribute("result")==="console"?"console":"iframe",this.console="disabled",this.consoleText="",this.htmlReset="",this.cssReset="",this.jsReset="",this.cachedWidth=0,this.sandboxSettings="",this.resizing=!1}connectedCallback(){super.connectedCallback(),this.updateCachedWidth(),this.updateComplete.then(()=>{this.resizeObserver.observe(this),this.htmlReset=this.htmlTextArea?.value||"",this.cssReset=this.cssTextArea?.value||"",this.jsReset=this.jsTextArea?.value||""})}handleTextAreaResize(e){let{target:t}=e[0],{top:s,bottom:r}=e[0].contentRect,o=s+r;t.parentElement.style.setProperty("--textarea-height",`${o}px`)}updateCachedWidth(){let{left:e,right:t}=this.getBoundingClientRect(),s=e+t;this.cachedWidth=s}handleResize(e){let{left:t,right:s}=e[0].contentRect,r=t+s;this.cachedWidth=r}get iframeElem(){return this.shadowRoot?.querySelector("iframe")}highlightCode({code:e,language:t}){let s=this.constructor.languageMap[t];return e=this.unescapeCharacters(e),e=this.injectNewLine(e),h.highlight(e,{language:s}).value}unescapeCharacters(e){return e.replaceAll("&lt;/script>","<\/script>")}injectNewLine(e){return e[e.length-1]==`
`&&(e+=`
`),e}updateIframeContent(){if(this.iframeElem==null)return;let e=this.iframeElem.cloneNode();if(this.iframeElem.replaceWith(e),this.iframeElem.contentWindow==null)return;let t=`
      <!doctype html><html>
        <head><meta charset="utf-8">
          <style>${this.cssCode}</style>
          <base href="${document.baseURI}">
        </head>
        <body>
          ${this.htmlCode}
          <script type="module">
            ${this.jsCode}
          <\/script>
        </body>
      </html>
    `,s=this.shadowRoot?.querySelector("iframe");if(s){let r=this.blobUrl,o=new Blob([t],{type:"text/html"}),n=URL.createObjectURL(o);this.blobUrl=n,s&&(s.src=n),r&&setTimeout(()=>{URL.revokeObjectURL(r)},300)}}inputHandler(){this.updateCode()}willUpdate(e){this.languages.some(t=>e.has(t+"Code"))&&(this._iframeDebounce!=null&&window.clearTimeout(this._iframeDebounce),this._iframeDebounce=setTimeout(()=>this.updateIframeContent(),300)),e.has("resizePosition")&&this.updateResizePosition(),super.willUpdate(e)}disconnectedCallback(){super.disconnectedCallback(),this.htmlTextArea&&this.htmlResizeObserver.disconnect(),this.cssTextArea&&this.cssResizeObserver.disconnect(),this.jsTextArea&&this.jsResizeObserver.disconnect()}htmlTextAreaChanged(e){e&&(this.htmlTextArea=e,this.htmlResizeObserver.observe(e))}cssTextAreaChanged(e){e&&(this.cssTextArea=e,this.cssResizeObserver.observe(e))}jsTextAreaChanged(e){e&&(this.jsTextArea=e,this.jsResizeObserver.observe(e))}handleResizerKeydown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.resizePosition,s=(e.shiftKey?10:1)*1;e.preventDefault(),e.key==="ArrowLeft"&&(t-=s),e.key==="ArrowRight"&&(t+=s),e.key==="Home"&&(t=100),e.key==="End"&&(t=0),this.resizePosition=x(t,0,100)}}updateResizePosition(e=this.resizePosition){let t=e;if(t!=null){let s=100-t;this.style.setProperty("--start-panel-width",`${t}%`),this.style.setProperty("--end-panel-width",`${s}%`)}}updateCode(){this.cssCode=this.cssTextArea?.value,this.htmlCode=this.htmlTextArea?.value,this.jsCode=this.jsTextArea?.value}resetValues(){this.htmlTextArea&&(this.htmlCode=this.htmlReset,this.htmlTextArea.value=this.htmlReset),this.cssTextArea&&(this.cssCode=this.cssReset,this.cssTextArea.value=this.cssReset),this.jsTextArea&&(this.jsCode=this.jsReset,this.jsTextArea.value=this.jsReset)}keydownHandler(e){let t=e.target,s=e.key;if(["Tab","Escape"].includes(s)){if(e.preventDefault(),e.key==="Tab")return t.setRangeText("	",t.selectionStart,t.selectionEnd,"end");if(e.key==="Escape"){let r=t.closest("details");if(!r)return;r.querySelector("summary")?.focus()}}}handleTemplate(e){let t=e.target,s=t.getAttribute("name");if(s==null||!this.languages.includes(s))return;let r=s,o=t.assignedElements({flatten:!0}),n=D(this.unescapeCharacters(o.map(G=>G.innerHTML).join(`
`)));this[`${r}Code`]=n;let y=this[`${r}TextArea`];y&&n&&(y.value=n)}renderConsole(){return l`<div part="sandbox-console-log"></div>`}render(){return l`
      <!-- Where users can declaratively provide templates -->
      <div style="display: none;">
        <slot name="html" @slotchange=${this.handleTemplate}></slot>
        <slot name="css" @slotchange=${this.handleTemplate}></slot>
        <slot name="js" @slotchange=${this.handleTemplate}></slot>
      </div>

      <div part="base" ?resizing=${this.resizing}>
			  <div part="sandbox">
				  <div part="sandbox-header">
            <slot name="title">
					    <strong>
                Code Editor
              </strong>
            </slot>

					  <span part="sandbox-controls">
						  <button part="sandbox-controls-button sandbox-reset" @click=${this.resetValues}>
                Reset
              </button>

						  ${f(this.console==="enabled",()=>l`<button @click={}>Clear Console</button>`)}
					  </span>
				</div>
				<div part="sandbox-content">
					<div part="sandbox-code">
            ${this.renderDetails("html")}
            ${this.renderDetails("css")}
            ${this.renderDetails("js")}
					</div>

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
            <slot name="panel-resize-icon">
              ${L}
            </slot>
            <span class="visually-hidden">Resize Panel. Pull to left or right to resize.</span>
          </button>

					<div part="sandbox-iframe-wrapper">
						<iframe
              sandbox=${this.sandboxSettings||O}
              part="sandbox-iframe"
              frameborder="0"
             ></iframe>
					</div>
				</div>

        <!--
        ${f(this.console==="enabled",()=>l`
              <details class="sandbox-console" ?open=${console}>
                <summary part="summary summary-console" tabindex="0">Console</summary>
                ${this.consoleText}
              </details>
            `)}
        -->
			</div>
		</div>`}handleDrag(e){e.cancelable&&e.preventDefault(),this.iframeElem&&(this.iframeElem.style.pointerEvents="none"),this.resizing=!0,E(this,{onMove:(t,s)=>{this.resizing=!0;let r=t;this.resizePosition=x(this.pixelsToPercentage(r),0,100),this.updateResizePosition()},onStop:()=>{this.iframeElem&&(this.iframeElem.style.pointerEvents="auto"),this.resizing=!1},initialEvent:e})}pixelsToPercentage(e){return e/this.cachedWidth*100}renderDetails(e){let t=e.toUpperCase(),s=this[`${e}Code`];s=s?k(this.highlightCode({code:s,language:e})):"";let r=this.openLanguages.split(",").includes(e);return l`
      <details ?open=${r} part="details details-${e}">
				<summary part="summary summary-${e}">
          ${t}
        </summary>
				<label for="sandbox-${e}" class="visually-hidden">${t} code</label>
				<div class="sandbox-editor" part="sandbox-editor">
          <!-- This is where the fancy syntax highlighting comes in -->
					<pre
            id="pre-${e}"
            data-code-lang=${e}
            aria-hidden="true"
            part="pre pre-${e}"
          ><code
              part="code code-${e}"
              class="language-${e}"
            >${s}</code></pre>
          <!-- IMPORTANT! There must be no white-space above. -->
					<textarea
            ${U(this[`${e}TextAreaChanged`])}
            id="textarea-${e}"
            data-code-lang=${e}
            part="textarea textarea-${e}"
            spellcheck="false"
            autocorrect="off"
            autocapitalize="off"
            translate="no"
            @keydown=${this.keydownHandler}
            @input=${this.inputHandler}
            @input=${this.syncScroll}
            @scroll=${this.syncScroll}
            value=${this[`${e}Code`]}
          ></textarea>
				</div>
			</details>
		`}syncScroll(e){let t=e.target;if(t==null)return;let s=t.dataset.codeLang,r=this.shadowRoot?.querySelector(`#pre-${s}`);r!=null&&(r.scrollTop=t.scrollTop,r.scrollLeft=t.scrollLeft)}};d(a,"baseName","light-pen"),d(a,"styles",[S,P,T,M]),d(a,"languageMap",{html:"xml",css:"css",js:"javascript"}),d(a,"properties",{openLanguages:{reflect:!0,attribute:"open-languages"},resizePosition:{attribute:"resize-position",reflect:!0,type:Number},console:{reflect:!0},sandboxSettings:{reflect:!0,attribute:"sandbox-settings"},languages:{state:!0,type:Array},cssCode:{state:!0},htmlCode:{state:!0},jsCode:{state:!0},htmlResizeObserver:{state:!0},jsResizeObserver:{state:!0},cssResizeObserver:{state:!0},resizing:{state:!0}});export{a};
/*! Bundled license information:

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/light-pen/pull/3/_bridgetown/static/chunks/chunk-P6N7FAV6.js.map
