var ue=Object.defineProperty;var pe=(r,t,e)=>t in r?ue(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var u=(r,t,e)=>(pe(r,typeof t!="symbol"?t+"":t,e),e),xt=(r,t,e)=>{if(!t.has(r))throw TypeError("Cannot "+e)};var l=(r,t,e)=>(xt(r,t,"read from private field"),e?e.call(r):t.get(r)),p=(r,t,e)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,e)},m=(r,t,e,i)=>(xt(r,t,"write to private field"),i?i.call(r,e):t.set(r,e),e);var Lt=(r,t,e)=>(xt(r,t,"access private method"),e);var it=(r,t,e)=>new Promise((i,s)=>{var o=a=>{try{c(e.next(a))}catch(d){s(d)}},n=a=>{try{c(e.throw(a))}catch(d){s(d)}},c=a=>a.done?i(a.value):Promise.resolve(a.value).then(o,n);c((e=e.apply(r,t)).next())});(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=window,Pt=gt.ShadowRoot&&(gt.ShadyCSS===void 0||gt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ut=Symbol(),It=new WeakMap;class Zt{constructor(t,e,i){if(this._$cssResult$=!0,i!==Ut)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Pt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=It.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&It.set(e,t))}return t}toString(){return this.cssText}}const me=r=>new Zt(typeof r=="string"?r:r+"",void 0,Ut),S=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new Zt(e,r,Ut)},ge=(r,t)=>{Pt?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=gt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)})},Mt=Pt?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return me(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var St;const vt=window,Ht=vt.trustedTypes,fe=Ht?Ht.emptyScript:"",Bt=vt.reactiveElementPolyfillSupport,kt={toAttribute(r,t){switch(t){case Boolean:r=r?fe:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch(i){e=null}}return e}},Jt=(r,t)=>t!==r&&(t==t||r==r),Ct={attribute:!0,type:String,converter:kt,reflect:!1,hasChanged:Jt};class F extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=Ct){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ct}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Mt(s))}else t!==void 0&&e.push(Mt(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ge(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Ct){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const n=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:kt).toAttribute(e,i.type);this._$El=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const n=s.getPropertyOptions(o),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:kt;this._$El=o,this[o]=c.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Jt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}_$Ej(){return it(this,null,function*(){this.isUpdatePending=!0;try{yield this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&(yield t),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}F.finalized=!0,F.elementProperties=new Map,F.elementStyles=[],F.shadowRootOptions={mode:"open"},Bt==null||Bt({ReactiveElement:F}),((St=vt.reactiveElementVersions)!==null&&St!==void 0?St:vt.reactiveElementVersions=[]).push("1.4.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ot;const yt=window,X=yt.trustedTypes,Wt=X?X.createPolicy("lit-html",{createHTML:r=>r}):void 0,H=`lit$${(Math.random()+"").slice(9)}$`,Xt="?"+H,ve=`<${Xt}>`,Q=document,rt=(r="")=>Q.createComment(r),ot=r=>r===null||typeof r!="object"&&typeof r!="function",Qt=Array.isArray,ye=r=>Qt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",st=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zt=/-->/g,Dt=/>/g,W=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),jt=/'/g,Vt=/"/g,te=/^(?:script|style|textarea|title)$/i,be=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),w=be(1),tt=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Yt=new WeakMap,q=Q.createTreeWalker(Q,129,null,!1),$e=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":"",n=st;for(let a=0;a<e;a++){const d=r[a];let y,h,f=-1,E=0;for(;E<d.length&&(n.lastIndex=E,h=n.exec(d),h!==null);)E=n.lastIndex,n===st?h[1]==="!--"?n=zt:h[1]!==void 0?n=Dt:h[2]!==void 0?(te.test(h[2])&&(s=RegExp("</"+h[2],"g")),n=W):h[3]!==void 0&&(n=W):n===W?h[0]===">"?(n=s!=null?s:st,f=-1):h[1]===void 0?f=-2:(f=n.lastIndex-h[2].length,y=h[1],n=h[3]===void 0?W:h[3]==='"'?Vt:jt):n===Vt||n===jt?n=W:n===zt||n===Dt?n=st:(n=W,s=void 0);const I=n===W&&r[a+1].startsWith("/>")?" ":"";o+=n===st?d+ve:f>=0?(i.push(y),d.slice(0,f)+"$lit$"+d.slice(f)+H+I):d+H+(f===-2?(i.push(void 0),a):I)}const c=o+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Wt!==void 0?Wt.createHTML(c):c,i]};class nt{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const c=t.length-1,a=this.parts,[d,y]=$e(t,e);if(this.el=nt.createElement(d,i),q.currentNode=this.el.content,e===2){const h=this.el.content,f=h.firstChild;f.remove(),h.append(...f.childNodes)}for(;(s=q.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const f of s.getAttributeNames())if(f.endsWith("$lit$")||f.startsWith(H)){const E=y[n++];if(h.push(f),E!==void 0){const I=s.getAttribute(E.toLowerCase()+"$lit$").split(H),_=/([.?@])?(.*)/.exec(E);a.push({type:1,index:o,name:_[2],strings:I,ctor:_[1]==="."?Ee:_[1]==="?"?Ae:_[1]==="@"?xe:At})}else a.push({type:6,index:o})}for(const f of h)s.removeAttribute(f)}if(te.test(s.tagName)){const h=s.textContent.split(H),f=h.length-1;if(f>0){s.textContent=X?X.emptyScript:"";for(let E=0;E<f;E++)s.append(h[E],rt()),q.nextNode(),a.push({type:2,index:++o});s.append(h[f],rt())}}}else if(s.nodeType===8)if(s.data===Xt)a.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(H,h+1))!==-1;)a.push({type:7,index:o}),h+=H.length-1}o++}}static createElement(t,e){const i=Q.createElement("template");return i.innerHTML=t,i}}function et(r,t,e=r,i){var s,o,n,c;if(t===tt)return t;let a=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const d=ot(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==d&&((o=a==null?void 0:a._$AO)===null||o===void 0||o.call(a,!1),d===void 0?a=void 0:(a=new d(r),a._$AT(r,e,i)),i!==void 0?((n=(c=e)._$Co)!==null&&n!==void 0?n:c._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=et(r,a._$AS(r,t.values),a,i)),t}class we{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:Q).importNode(i,!0);q.currentNode=o;let n=q.nextNode(),c=0,a=0,d=s[0];for(;d!==void 0;){if(c===d.index){let y;d.type===2?y=new mt(n,n.nextSibling,this,t):d.type===1?y=new d.ctor(n,d.name,d.strings,this,t):d.type===6&&(y=new Se(n,this,t)),this.u.push(y),d=s[++a]}c!==(d==null?void 0:d.index)&&(n=q.nextNode(),c++)}return o}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class mt{constructor(t,e,i,s){var o;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=et(this,t,e),ot(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==tt&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ye(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==$&&ot(this._$AH)?this._$AA.nextSibling.data=t:this.T(Q.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=nt.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.p(i);else{const n=new we(o,this),c=n.v(this.options);n.p(i),this.T(c),this._$AH=n}}_$AC(t){let e=Yt.get(t.strings);return e===void 0&&Yt.set(t.strings,e=new nt(t)),e}k(t){Qt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new mt(this.O(rt()),this.O(rt()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class At{constructor(t,e,i,s,o){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=et(this,t,e,0),n=!ot(t)||t!==this._$AH&&t!==tt,n&&(this._$AH=t);else{const c=t;let a,d;for(t=o[0],a=0;a<o.length-1;a++)d=et(this,c[i+a],e,a),d===tt&&(d=this._$AH[a]),n||(n=!ot(d)||d!==this._$AH[a]),d===$?t=$:t!==$&&(t+=(d!=null?d:"")+o[a+1]),this._$AH[a]=d}n&&!s&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Ee extends At{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}}const _e=X?X.emptyScript:"";class Ae extends At{constructor(){super(...arguments),this.type=4}j(t){t&&t!==$?this.element.setAttribute(this.name,_e):this.element.removeAttribute(this.name)}}class xe extends At{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=et(this,t,e,0))!==null&&i!==void 0?i:$)===tt)return;const s=this._$AH,o=t===$&&s!==$||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==$&&(s===$||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Se{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){et(this,t)}}const Ft=yt.litHtmlPolyfillSupport;Ft==null||Ft(nt,mt),((Ot=yt.litHtmlVersions)!==null&&Ot!==void 0?Ot:yt.litHtmlVersions=[]).push("2.4.0");const Ce=(r,t,e)=>{var i,s;const o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let n=o._$litPart$;if(n===void 0){const c=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=n=new mt(t.insertBefore(rt(),c),c,void 0,e!=null?e:{})}return n._$AI(r),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Rt,Tt;class A extends F{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ce(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return tt}}A.finalized=!0,A._$litElement$=!0,(Rt=globalThis.litElementHydrateSupport)===null||Rt===void 0||Rt.call(globalThis,{LitElement:A});const qt=globalThis.litElementPolyfillSupport;qt==null||qt({LitElement:A});((Tt=globalThis.litElementVersions)!==null&&Tt!==void 0?Tt:globalThis.litElementVersions=[]).push("3.2.2");var lt,at;class Gt{constructor(t,e){p(this,lt,void 0);p(this,at,void 0);m(this,lt,t),m(this,at,e)}isIncluded(t){return l(this,lt)<=t&&t<=l(this,at)}}lt=new WeakMap,at=new WeakMap;var bt,$t,N,P,wt,ee;const T=class{constructor(t,e){p(this,N,void 0);p(this,P,void 0);m(this,N,t),m(this,P,e)}shifted(t){return new T(l(this,N)+l(t,N),l(this,P)+l(t,P))}isValid(){var t;return Lt(t=T,wt,ee).call(t,this.getRow())&&T.isColumnValid(this.getColumn())}static isColumnValid(t){return l(T,$t).isIncluded(t)}getRow(){return l(this,N)}getColumn(){return l(this,P)}equals(t){return this==t?!0:t==null?!1:l(this,P)===l(t,P)&&l(this,N)===l(t,N)}};let g=T;bt=new WeakMap,$t=new WeakMap,N=new WeakMap,P=new WeakMap,wt=new WeakSet,ee=function(t){return l(T,bt).isIncluded(t)},p(g,wt),u(g,"ORIGIN",new T(0,0)),u(g,"NUMBER_ROWS",6),p(g,bt,new Gt(0,T.NUMBER_ROWS-1)),u(g,"NUMBER_COLUMNS",7),p(g,$t,new Gt(0,T.NUMBER_COLUMNS-1));var dt;const M=class{constructor(t){p(this,dt,void 0);m(this,dt,t)}static values(){return[M.RED,M.YELLOW]}static get(t){return M.values()[t]}toString(){return l(this,dt)}};let L=M;dt=new WeakMap,u(L,"RED",new M("Red")),u(L,"YELLOW",new M("Yellow")),u(L,"NULL",new M(" "));var ct,U,ht;const Et=class{constructor(t){p(this,ct,void 0);p(this,U,void 0);p(this,ht,void 0);m(this,ct,t)}set(t){m(this,U,[l(this,ct)]);for(let e=1;e<Et.LENGTH;e++)l(this,U)[e]=l(this,U)[e-1].shifted(t.getCoordinate());m(this,ht,t.getOpposite())}shift(){for(let t=0;t<Et.LENGTH;t++)l(this,U)[t]=l(this,U)[t].shifted(l(this,ht).getCoordinate())}getCoordinates(){return l(this,U)}};let G=Et;ct=new WeakMap,U=new WeakMap,ht=new WeakMap,u(G,"LENGTH",4);var z;const b=class{constructor(t,e){p(this,z,void 0);m(this,z,new g(t,e))}getOpposite(){for(let t of b.values())if(l(t,z).shifted(l(this,z)).equals(g.ORIGIN))return t;return null}static values(){return[b.NORTH,b.NORTH_EAST,b.EAST,b.SOUTH_EAST,b.SOUTH,b.SOUTH_WEST,b.WEST,b.NORTH_WEST]}getCoordinate(){return l(this,z)}};let C=b;z=new WeakMap,u(C,"NORTH",new b(1,0)),u(C,"NORTH_EAST",new b(1,1)),u(C,"EAST",new b(0,1)),u(C,"SOUTH_EAST",new b(-1,1)),u(C,"SOUTH",new b(-1,0)),u(C,"SOUTH_WEST",new b(-1,-1)),u(C,"WEST",new b(0,-1)),u(C,"NORTH_WEST",new b(1,-1));var B,R;class Oe{constructor(){p(this,B,void 0);p(this,R,void 0);m(this,B,[]);for(let t=0;t<g.NUMBER_ROWS;t++)l(this,B)[t]=[];this.reset()}reset(){for(let t=0;t<g.NUMBER_ROWS;t++)for(let e=0;e<g.NUMBER_COLUMNS;e++)l(this,B)[t][e]=L.NULL}dropToken(t,e){for(m(this,R,new g(0,t));!this.isEmpty(l(this,R));)m(this,R,l(this,R).shifted(C.NORTH.getCoordinate()));l(this,B)[l(this,R).getRow()][l(this,R).getColumn()]=e}isComplete(t){if(t!==void 0)return!this.isEmpty(new g(g.NUMBER_ROWS-1,t));for(let e=0;e<g.NUMBER_COLUMNS;e++)if(!this.isComplete(e))return!1;return!0}isFinished(){return this.isComplete()||this.isWinner()}isWinner(){if(l(this,R)===void 0)return!1;let t=new G(l(this,R));for(let e of C.values().splice(0,3)){t.set(e);for(let i=0;i<G.LENGTH;i++){if(this.isConnect4(t))return!0;t.shift()}}return!1}isConnect4(t){let e=t.getCoordinates();for(let i=0;i<G.LENGTH;i++)if(!e[i].isValid()||i>0&&this.getColor(e[i-1])!=this.getColor(e[i]))return!1;return!0}isOccupied(t,e){return this.getColor(t)==e}isEmpty(t){return this.isOccupied(t,L.NULL)}getColor(t){return l(this,B)[t.getRow()][t.getColumn()]}}B=new WeakMap,R=new WeakMap;var K,Z;class ie{constructor(t,e){p(this,K,void 0);p(this,Z,void 0);m(this,K,t),m(this,Z,e)}getColor(){return l(this,K)}isComplete(t){return l(this,Z).isComplete(t)}dropToken(t){l(this,Z).dropToken(t,l(this,K))}accept(t){}}K=new WeakMap,Z=new WeakMap;class Re extends ie{constructor(t,e){super(t,e)}accept(t){t.visitUserPlayer(this)}}class Te extends ie{constructor(t,e){super(t,e)}accept(t){}getColumn(){}}class ke extends Te{constructor(t,e){super(t,e)}accept(t){t.visitMachinePlayer(this)}getColumn(){let t;do t=Math.floor(Math.random()*g.NUMBER_COLUMNS);while(this.isComplete(t));return t}}var ut,J,D,j;const _t=class{constructor(t){p(this,J,void 0);p(this,D,void 0);p(this,j,void 0);m(this,j,t),m(this,J,[]),this.reset()}reset(t){for(let e=0;e<l(_t,ut);e++)l(this,J)[e]=e<t?new Re(L.get(e),l(this,j)):new ke(L.get(e),l(this,j));m(this,D,0)}next(){l(this,j).isFinished()||m(this,D,(l(this,D)+1)%l(_t,ut))}getActivePlayer(){return l(this,J)[l(this,D)]}};let ft=_t;ut=new WeakMap,J=new WeakMap,D=new WeakMap,j=new WeakMap,p(ft,ut,2);var k,V;class Ne{constructor(){p(this,k,void 0);p(this,V,void 0);m(this,k,new Oe),m(this,V,new ft(l(this,k)))}reset(t){l(this,k).reset(),l(this,V).reset(t)}getColor(t){return l(this,k).getColor(t)}isComplete(){return l(this,k).isComplete()}isWinner(){return l(this,k).isWinner()}isFinished(){return l(this,k).isFinished()}getActivePlayer(){return l(this,V).getActivePlayer()}getActiveColor(){return this.getActivePlayer().getColor()}next(){l(this,V).next()}}k=new WeakMap,V=new WeakMap;var Y;const x=class{constructor(t){p(this,Y,void 0);m(this,Y,t)}setMessage(t){return m(this,Y,t),this}write(){this.dispatch("new-message")}append(){this.dispatch("append-message")}dispatch(t){document.dispatchEvent(new CustomEvent(t,{bubbles:!0,detail:{message:l(this,Y)}}))}toString(){return l(this,Y)}};let v=x;Y=new WeakMap,u(v,"TITLE",new x("--- Welcome to the CONNECT 4 game ---")),u(v,"NUM_PLAYERS",new x("Enter number of users")),u(v,"HORIZONTAL_LINE",new x("-")),u(v,"VERTICAL_LINE",new x("|")),u(v,"TURN",new x("Turn: ")),u(v,"ENTER_COLUMN_TO_DROP",new x("Enter a column to drop a token: ")),u(v,"INVALID_COLUMN",new x("Invalid columnn!!! Values [1-7]")),u(v,"COMPLETED_COLUMN",new x("Invalid column!!! It's completed")),u(v,"PLAYER_WIN",new x("#colorS WIN!!! : -)")),u(v,"PLAYERS_TIED",new x("TIED!!!")),u(v,"RESUME",new x("Do you want to continue"));var pt;class se extends A{constructor(){super();p(this,pt,void 0);m(this,pt,new v(""))}static get properties(){return{game:{type:Object},activePlayerColor:{type:String}}}render(){return w`
            <article class="player ${this.activePlayerColor=="Red"?"active":""}">
                <c4-token color="R"></c4-token>
                <span>Player red</span>
            </article>
            <article class="player ${this.activePlayerColor=="Yellow"?"active":""}">
                <c4-token color="Y"></c4-token>
                <span>Player Yellow</span>
            </article>
        `}dropToken(){let e=this.game.getActivePlayer();this.activePlayerColor=e.getColor(),e.accept(this)}visitUserPlayer(e){l(this,pt).setMessage(e.getColor().toString()+" player: ").write(),v.ENTER_COLUMN_TO_DROP.append(),this.dispatchEvent(new CustomEvent("catch-column"))}visitMachinePlayer(e){setTimeout(()=>{this.dispatchEvent(new CustomEvent("machine-player-column",{bubbles:!0,composed:!0,detail:{index:e.getColumn()}}))},400)}resetTurn(){this.activePlayerColor=void 0}}pt=new WeakMap,u(se,"styles",[S`
            :host {
                display: block;
                margin-top: 1.2rem;
            }
            .player {
                display: flex;
                flex-direction: row;
                margin: 0.75rem;
                align-items: center;
                opacity: 0.4;
            }
            c4-token {
                margin-right: 1rem;
            }
            .active {
                opacity: 1;
            }
        `]);customElements.define("c4-turn",se);class re extends A{static get properties(){return{color:{type:String},index:{type:String}}}render(){return w`
            <span class="${this.color}" @click=${this.dispatchSelected}>
            </span>
        `}dispatchSelected(){this.dispatchEvent(new CustomEvent("token-selected",{bubbles:!0,composed:!0,detail:{index:this.index}}))}}u(re,"styles",[S`
            :host {
                display: block;
            }
            span {
                display: inline-block;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background-color: #303030;
            }
            .R {
                background-color: red;
            }
            .Y {
                background-color: yellow;
            }
            @media(min-width: 350px) {
                span {
                    width: 35px;
                    height: 35px;
                }
            }
            @media(min-width: 400px) {
                span {
                    width: 40px;
                    height: 40px;
                }
            }
        `]);customElements.define("c4-token",re);class oe extends A{static get properties(){return{game:{type:Object},boardColors:{type:Array}}}constructor(){super(),this.boardColors=[]}render(){return w`
            ${this.boardColors.map((t,e)=>w`
                <c4-token 
                    color="${t}"
                    index="${e}"
                    @token-selected=${this.doTokenSelected}
                >${t}</c4-token>
            `)}
        `}updateBoard(){let t=[];for(let e=g.NUMBER_ROWS-1;e>=0;e--)for(let i=0;i<g.NUMBER_COLUMNS;i++){let s=this.game.getColor(new g(e,i)).toString()[0];t.push(s)}this.boardColors=t}doTokenSelected(t){let e=this.getColumnIndex(t.detail.index),i=g.isColumnValid(e);i?(i=!this.game.getActivePlayer().isComplete(e),i||v.COMPLETED_COLUMN.write()):v.INVALID_COLUMN.write(),i&&this.dispatchEvent(new CustomEvent("column-selected",{detail:{index:e}}))}getColumnIndex(t){return t%g.NUMBER_COLUMNS}}u(oe,"styles",[S`
            :host {
                max-width: 460px;
                margin: 1rem;
                display: grid;
                grid-template-columns: repeat(${g.NUMBER_COLUMNS}, auto);
                column-gap: 0.4rem;
                row-gap: 0.6rem;
            }
            @media(min-width: 380px) {
                :host {
                    column-gap: 0.7rem;
                    row-gap: 1rem;
                    
                }
            }
        `]);customElements.define("c4-board",oe);class ne extends A{static get properties(){return{disabled:{type:Boolean},name:{type:String}}}constructor(){super(),this.disabled=!1}static get styles(){return S`
      :host {
        display: inline-block;
      }
      button {
        cursor: pointer;
        padding-top: var(--dile-button-padding-y, 0.5rem);
        padding-bottom: var(--dile-button-padding-y, 0.5rem);
        padding-right: var(--dile-button-padding-x, 0.8rem);
        padding-left: var(--dile-button-padding-x, 0.8rem);
        border-radius: var(--dile-button-border-radius, 2px);
        border-width:  var(--dile-button-border-width, 1px);
        border-color:  var(--dile-button-border-color, #666666);
        background-color: var(--dile-button-background-color, #f5f5ff);
        transition-property: background-color, color;
        transition-duration: 0.3s;
        transition-timing-function: ease-in-out;
        border-style: solid;
        color: var(--dile-button-text-color, #303030); 
        font-size: var(--dile-button-font-size, 1rem);
        font-weight: var(--dile-button-font-weight, normal);
        text-transform: var(--dile-button-text-transform, none);
      }
      button:hover {
        background-color: var(--dile-button-hover-background-color, #b1ecf7);
        color: var(--dile-button-hover-text-color, #303030);
        border-color:  var(--dile-button-hover-border-color, #666666);
      }
      button:focus {
        outline: none;
        box-shadow: 0 0 0 calc(0px + var(--dile-button-ring-offset-width, 3px)) var(--dile-button-ring-color, #12c9e9);
        border-color: var(--dile-button-ring-color, #12c9e9);
      }

      :host([disabled]) button {
        cursor: auto;
        background-color: var(--dile-button-disabled-background-color, #ccc);
        color: var(--dile-button-disabled-text-color, #999);
        border-color: var(--dile-button-disabled-border-color, #aaa);
        border-style: none;
      }
      :host([disabled]) button:focus {
        outline: none;
        box-shadow: none;

      }
      :host([disabled]) button:active {
        outline: none;
        border-color: #aaa;
        box-shadow: none;
      }
      button {
        user-select: none;
      }
    `}render(){return w`
      <button @click="${this.doClick}"><slot></slot></button>
    `}doClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}}window.customElements.define("dile-button",ne);const Pe=S`
    .dile-icon path, .dile-icon polygon {
      fill: var(--dile-icon-color, #888);
    }
    .dile-icon path[fill="none"] {
      fill: transparent;
    }
    .dile-icon {
      width: var(--dile-icon-size, 24px);
      height: var(--dile-icon-size, 24px);
    }
  `,Ue=w`<svg class="dile-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>`;class Le extends A{static get properties(){return{icon:{type:Object}}}static get styles(){return[Pe,S`
        :host {
          display: inline-block;
        }
        span {
          display: flex;
          align-items: center;
        }
        path {
          transition-duration: 0.3s;
          transition-timing-function: ease-in-out;
          transition-property: fill;
        }
        :host([rounded]) {
          background-color: var(--dile-icon-rounded-background-color, #eee);
          border-radius: 50%;
          padding: 0.5rem;
        }
    `]}render(){return w`
      <span>${this.icon}</span>
    `}}window.customElements.define("dile-icon",Le);class Ie extends ne{static get properties(){return{icon:{type:Object}}}static get styles(){return[super.styles,S`
        button {
          display: flex;
          align-items: center;
        }
        dile-icon {
          margin-right: var(--dile-button-icon-separation, 0.3rem);
        }
        button:hover {
          --dile-icon-color: var(--dile-button-icon-hover-color, #303030);
        }
      `]}render(){return w`
      <button @click="${this.doClick}">
          <dile-icon .icon=${this.icon}></dile-icon>
          <slot></slot>
      </button>
    `}}window.customElements.define("dile-button-icon",Ie);class le extends A{static get properties(){return{icon:{type:Object},disabled:{type:Boolean}}}render(){return w`
            ${this.icon?w`<dile-button-icon ?disabled=${this.disabled} .icon="${this.icon}"><slot></slot></dile-button-icon>`:w`<dile-button ?disabled=${this.disabled}><slot></slot></dile-button>`}
        `}}u(le,"styles",[S`
            :host {
                display: inline-block;
                --dile-button-border-radius: 2rem;
                --dile-button-border-width: 2px;
                --dile-button-background-color: transparent;
                --dile-button-border-color: #fff;
                --dile-button-hover-border-color: #fff;
                --dile-button-text-color: #fff;
                --dile-icon-color: #fff;
            }

            :host([white]) {
                --dile-button-background-color: #fff;
                --dile-button-border-color: transparent;
                --dile-button-hover-border-color: transparent;
                --dile-button-text-color: #303030;
                --dile-icon-color: var(--primary-color);
            }
        `]);customElements.define("c4-button",le);class ae extends A{render(){return w`
            <h1>Select number of players</h1>
            <ul>
                <li><c4-button @click=${this.onePlayer}>One player</c4-button></li>
                <li><c4-button @click=${this.twoPlayers}>Two players</c4-button></li>
                <li><c4-button @click=${this.demo}>Demo (machine vs machine)</c4-button></li>
            </ul>
        `}onePlayer(){this.dispatchPlayers(1)}twoPlayers(){this.dispatchPlayers(2)}demo(){this.dispatchPlayers(0)}dispatchPlayers(t){this.dispatchEvent(new CustomEvent("players-selected",{detail:{numPlayers:t}}))}}u(ae,"styles",[S`
            :host {
                max-width: 460px;
                display: block;
                color: #fff;
                padding: 1rem;
            }
            h1 {
                font-weight: 300;
            }
            ul {
                margin: 0;
                padding: 0;
            }
            li {
                display: inline-block;
                padding: 0;
                margin: 0.5rem;
                list-style-type: none;
            }
            li:first-child {
                margin-left: 0;
            }
        `]);customElements.define("c4-player-selector",ae);class de extends A{static get properties(){return{message:{type:String}}}constructor(){super(),this.message="",window.addEventListener("new-message",t=>{this.message=t.detail.message}),window.addEventListener("append-message",t=>{this.message+=" "+t.detail.message})}render(){return w`${this.message}`}}u(de,"styles",[S`
            :host {
                display: flex;
                min-height: 1.5rem;
                align-items: center;
            }
        `]);customElements.define("c4-message",de);var O,Nt;class ce extends A{constructor(){super();p(this,O,void 0);p(this,Nt,void 0);m(this,O,new Ne),this.started=!1}static get properties(){return{started:{type:Boolean},isOnColumnInput:{type:Boolean}}}firstUpdated(){this.boardComponent=this.shadowRoot.querySelector("c4-board"),this.turnComponent=this.shadowRoot.querySelector("c4-turn"),v.NUM_PLAYERS.write()}render(){return w`
            <section>
                <header>
                    <h1>Connect<span>4</span></h1>
                    <nav>
                        <c4-button white .icon=${Ue} @click=${this.gameReset}>Reset game</c4-button>
                    </nav>
                    <c4-turn
                        .game=${l(this,O)}
                        @catch-column=${this.doCatchColumn}
                        @machine-player-column=${this.doMachineColumnSelected}
                    ></c4-turn>
                </header>
                <main>
                    <c4-board 
                        class="${this.started?"":"hidden"}"
                        .game=${l(this,O)}
                        @column-selected=${this.doColumnSelected}
                    ></c4-board>
                    <c4-player-selector
                        class="${this.started?"hidden":""}"
                        @players-selected=${this.definePlayers}
                    ></c4-player-selector>
                </main>
            </section>
            <footer>
                <c4-message></c4-message>
            </footer>
        `}gameReset(){this.started=!1,this.turnComponent.resetTurn(),v.NUM_PLAYERS.write()}definePlayers(e){this.started=!0,l(this,O).reset(e.detail.numPlayers),this.boardComponent.updateBoard(),this.turnComponent.dropToken()}doColumnSelected(e){this.isOnColumnInput&&this.putToken(e.detail.index)}doMachineColumnSelected(e){this.putToken(e.detail.index)}putToken(e){l(this,O).getActivePlayer().dropToken(e),this.isOnColumnInput=!1,this.boardComponent.updateBoard(),l(this,O).isFinished()?this.writeResults():(l(this,O).next(),this.turnComponent.dropToken())}doCatchColumn(){this.isOnColumnInput=!0}writeResults(){if(l(this,O).isWinner()){let e=v.PLAYER_WIN.toString();e=e.replace("#color",l(this,O).getActiveColor().toString()),new v(e).write()}else v.PLAYERS_TIED.write()}}O=new WeakMap,Nt=new WeakMap,u(ce,"styles",[S`
            :host {
                --primary-color: #09A5FF;
            }
            section {
                flex-direction: column;
                background-color: var(--primary-color);
                display: flex;
                align-items: stretch;
                width: 100%;
                min-height: 200px;
            }
            .hidden {
                display: none;
            }
            header {
                padding: 1rem;
                background-color: #31343D;
                color: #fff;
                min-width: 200px;
            }
            main {
                flex-grow: 1;
            }
            h1 { 
                font-size: 1.5rem;
                letter-spacing: 0.075em;
            }
            h1 span {
                color: #09A5FF;
            }
            nav {
                margin: 1rem 0;
            }
            footer {
                padding: 0.5rem 1rem;
                background-color: #ddd;
            }

            @media(min-width: 635px) {
                section {
                    flex-direction: row;
                }
            }
            @media(min-width: 550px) {
                :host {
                    box-shadow: 4px 4px 12px rgba(100, 100, 100, 0.5);
                    border: 8px solid #fff;
                    border-radius: 0.5rem;
                }
            }
        `]);customElements.define("c4-game",ce);const Me="modulepreload",He=function(r){return"/"+r},Kt={},Be=function(t,e,i){if(!e||e.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(e.map(o=>{if(o=He(o),o in Kt)return;Kt[o]=!0;const n=o.endsWith(".css"),c=n?'[rel="stylesheet"]':"";if(!!i)for(let y=s.length-1;y>=0;y--){const h=s[y];if(h.href===o&&(!n||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${c}`))return;const d=document.createElement("link");if(d.rel=n?"stylesheet":Me,n||(d.as="script",d.crossOrigin=""),d.href=o,document.head.appendChild(d),n)return new Promise((y,h)=>{d.addEventListener("load",y),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function We(r={}){const{immediate:t=!1,onNeedRefresh:e,onOfflineReady:i,onRegistered:s,onRegisteredSW:o,onRegisterError:n}=r;let c,a,d,y;const h=(E=!0)=>it(this,null,function*(){yield d,E&&(c==null||c.addEventListener("controlling",I=>{I.isUpdate&&window.location.reload()})),yield y==null?void 0:y()});function f(){return it(this,null,function*(){if("serviceWorker"in navigator){const{Workbox:E,messageSW:I}=yield Be(()=>import("./workbox-window.prod.es5.d2780aeb.js"),[]);y=()=>it(this,null,function*(){a&&a.waiting&&(yield I(a.waiting,{type:"SKIP_WAITING"}))}),c=new E("/sw.js",{scope:"/",type:"classic"}),c.addEventListener("activated",_=>{_.isUpdate||i==null||i()});{const _=()=>{e==null||e()};c.addEventListener("waiting",_),c.addEventListener("externalwaiting",_)}c.register({immediate:t}).then(_=>{a=_,o?o("/sw.js",_):s==null||s(_)}).catch(_=>{n==null||n(_)})}})}return d=f(),h}const ze=function(r){return class extends r{static get properties(){return{_opening:{type:Boolean},moveTop:{type:Number},moveLeft:{type:Number},_overlayClass:{state:!0,type:String},horizontalAlign:{type:String},verticalAlign:{type:String}}}constructor(){super(),this._opening=!1,this.moveTop=0,this.moveLeft=0,this._overlayClass="",this.horizontalAlign="under_left",this.verticalAlign="bottom",this.delayId=null}firstUpdated(){this.overlay=this.shadowRoot.getElementById("overlay"),this.trigger=this.shadowRoot.getElementById("trigger")}toggle(t){this._overlayClass?this.close():this.open()}cancelDelay(){this.reardo&&clearTimeout(this.delayId),this.delayId=null}close(){this.dispatchEvent(new CustomEvent("overlay-closed",{bubbles:!0,composed:!0})),!this._opening&&this._overlayClass=="opened"&&(this._overlayClass="",this.cancelDelay(),this.delayId=setTimeout(()=>{this.overlay.style.display="none"},500))}open(){this.dispatchEvent(new CustomEvent("overlay-opened",{bubbles:!0,composed:!0})),this._opening||(this._opening=!0,this.updatePosition(),this.closeAll&&this.closeAll(),this.overlay.style.display="block",this.cancelDelay(),this.delayId=setTimeout(()=>{this._overlayClass="opened",this._opening=!1,this.overlay.style.display="block"},50))}updatePosition(){let t=parseInt(this.trigger.offsetWidth),e=parseInt(this.trigger.offsetHeight),i=parseInt(this.moveTop),s=parseInt(this.moveLeft),o=this.overlay.style.display;this.overlay.style.top="-1000px",this.overlay.style.display="block";let n=parseInt(this.overlay.offsetWidth),c=parseInt(this.overlay.offsetHeight);switch(this.verticalAlign){case"top":this.overlay.style.top=0-c+i+"px";break;case"center":this.overlay.style.top="-"+((c-e/2)/2+i)+"px";break;default:this.overlay.style.top=e+10+i+"px"}switch(this.horizontalAlign){case"under_left":this.setOverlayStyleLeft("0px");break;case"under_right":this.setOverlayStyleLeft(`-${n-t}px`);break;case"left":this.setOverlayStyleLeft("-"+(n+s)+"px");break;case"right":this.setOverlayStyleLeft(t+s+"px");break;default:this.setOverlayStyleLeft("-"+((n-t)/2+s)+"px")}this.overlay.style.display=o}setOverlayStyleLeft(t){this.overlay.style.left=t;var e=this.overlay.getBoundingClientRect();let i=parseInt(this.overlay.style.left);e.left<0&&(this.overlay.style.left=i-e.left+10+"px");let s=document.querySelector("html").clientWidth;if(e.left+e.width>s){let o=i-(e.right-s)-15;this.overlay.style.left=o+"px"}}}};class De extends ze(A){static get styles(){return S`
      :host {
        display: inline;
        position: relative;
        box-sizing: border-box;
      }
      span {
        position: fixed;
        bottom: 0px;
        left: 0px;
        
        width: 0;
        height: 0;
      }
      :host([opened]) section {
        transform: translateX(0);
      }
      :host([right]) span {
        right: 0px;
        left: auto;
      }
      #overlay {
        box-sizing: border-box;
        color: var(--dile-toast-persistent-color, #fff);
        z-index: var(--dile-toast-persistent-z-index, 999);
        background-color: var(--dile-toast-persistent-background-color, #0e6ff6);
        border-radius: var(--dile-toast-persistent-border-radius, 0);
        width: var(--dile-toast-persistent-width, 300px);
        max-width: var(--dile-toast-persistent-max-width, 300px);
        box-shadow: var(--dile-toast-persistent-box-shadow, 0 0 2px rgba(200, 200, 200, 0.5));
        padding: var(--dile-toast-persistent-padding, 1px);
        display: none;
        position: absolute;
        opacity: 0;
        transition: var(--dile-toast-persistent-transition, ease 0.5s);
        transition-property: transform, opacity;
        transform: translateY(-10px);
      }
      #overlay.opened {
        opacity: 1;
        transform: translateY(0);
      }
      #trigger {
        display: flex;
      }
    `}static get properties(){return{right:{type:Boolean,reflect:!0},openOnInit:{type:Boolean}}}constructor(){super(),this.horizontalAlign="left",this.verticalAlign="top",this.moveLeft=-10,this.moveTop=-16}firstUpdated(){super.firstUpdated(),this.openOnInit&&setTimeout(()=>this.open(),200)}updated(t){t.has("right")&&this.right!==void 0&&(this.horizontalAlign=this.right?"left":"right")}render(){return w`
      <span id="trigger">
        <div
          id="overlay"
          class="${this._overlayClass}"
        >
          <slot></slot>
        </div>
      </span>
    `}}customElements.define("dile-toast-persistent",De);class he extends A{constructor(){super()}firstUpdated(){super.firstUpdated(),this.updatedmessage=this.shadowRoot.getElementById("updatedmessage"),this.initPwa()}render(){return w`
            <dile-toast-persistent id="updatedmessage">
                <p>
                    Update! there is a new version of this game...
                </p>
                <c4-button @click=${this.refreshApp}>Update</c4-button>
                <c4-button @click=${this.closeUpdatedToast}>Forget</c4-button>
            </dile-toast-persistent>
        `}initPwa(){this.refreshSW=We({inmediate:!0,onNeedRefresh:()=>{this.updatedmessage.open()}})}closeUpdatedToast(){this.updatedmessage.close()}refreshApp(){var t;console.log("refreshApp"),(t=this.refreshSW)==null||t.call(this,!0)}}u(he,"styles",[S`
            :host {
                display: block;
                --dile-toast-persistent-padding: 1rem;
                --dile-toast-persistent-background-color: var(--primary-dark-color);
            }

            p {
                margin: 0 0 10px;
            }
            
            @media(min-width: 400px) {
                :host {
                    --dile-toast-persistent-width: 360px;
                    --dile-toast-persistent-max-width: 360px;
                }   
            }
            
        `]);customElements.define("fct-pwa",he);
