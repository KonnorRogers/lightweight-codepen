import{a as i}from"/light-pen/pull/4/bridgetown/static/chunks/chunk-PEDDUFLQ.js";import{a as o,b as l}from"/light-pen/pull/4/bridgetown/static/chunks/chunk-BJPFC4MP.js";import{c as t}from"/light-pen/pull/4/bridgetown/static/chunks/chunk-FOYQMOBX.js";import{b as a}from"/light-pen/pull/4/bridgetown/static/chunks/chunk-LCA6ZEZ3.js";import{a as e}from"/light-pen/pull/4/bridgetown/static/chunks/chunk-3FTJNOZ6.js";import"/light-pen/pull/4/bridgetown/static/chunks/chunk-HTPW2NLW.js";var s=e`
  ${o}

  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`;var r=class extends l{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};r.styles=s;t([a({type:Boolean,reflect:!0})],r.prototype,"vertical",2);t([i("vertical")],r.prototype,"handleVerticalChange",1);var p=r;r.define("sl-divider");export{p as default};
//# sourceMappingURL=/light-pen/pull/4/bridgetown/static/chunks/divider-FLRNYT4N.js.map
