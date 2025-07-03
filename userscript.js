// ==UserScript==
// @name         xx
// @version      0.1.0
// @description  xx
// @author       xx
// @match        *
// ==/UserScript==


// 添加一个window.onload回调
window.onload = () => {
  // 创建根元素
  const root = document.createElement("div");
  root.id = "root";
  root.style.position = "fixed"; // 固定定位
  root.style.bottom = "64px";    // 距离底部 20px
  root.style.right = "64px";     // 距离右侧 20px
  root.style.width = "600px";    // 窗口宽度
  root.style.height = "400px";   // 窗口高度
  root.style.backgroundColor = "rgba(255, 255, 255, 0.7)"; // 半透明背景
  root.style.backdropFilter = "blur(10px)"; // 毛玻璃效果
  root.style.webkitBackdropFilter = "blur(10px)"; // Safari 兼容
  root.style.padding = "2px";   // 内边距
  root.style.borderRadius = "8px"; // 圆角
  root.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"; // 轻微阴影增加层次感
  root.style.zIndex = 999999;
  root.style.transition = "all 0.3s ease"; // 添加过渡效果

  // 创建最小化按钮
  const minimizeButton = document.createElement("button");
  minimizeButton.innerText = "hide";
  minimizeButton.style.position = "absolute";
  minimizeButton.style.top = "10px";
  minimizeButton.style.right = "10px";
  minimizeButton.style.background = "none";
  minimizeButton.style.border = "none";
  minimizeButton.style.cursor = "pointer";
  minimizeButton.style.fontSize = "14px";
  minimizeButton.style.zIndex = 1000000;

  // 将最小化按钮添加到根元素中
  root.appendChild(minimizeButton);

  // 将根元素添加到页面中
  document.body.appendChild(root);

  // 标记窗口是否处于最小化状态
  let isMinimized = false;

  // 最小化按钮点击事件
  minimizeButton.addEventListener("click", () => {
    if (isMinimized) {
      // 如果窗口已经最小化，则恢复窗口
      root.style.width = "600px";
      root.style.height = "400px";
      root.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
      minimizeButton.innerText = "hide";

    } else {
      // 如果窗口未最小化，则最小化窗口
      root.style.width = "58px";
      root.style.height = "36px";
      root.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
      minimizeButton.innerText = "show";

    }
    isMinimized = !isMinimized; // 切换最小化状态
  });
  run();
};


function run() {
  (function(){"use strict";try{if(typeof document<"u"){var n=document.createElement("style");n.appendChild(document.createTextNode("*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5)}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5)}.py-20{padding-top:5rem;padding-bottom:5rem}.text-center{text-align:center}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-green-700{--un-text-opacity:1;color:rgb(21 128 61 / var(--un-text-opacity))}")),document.head.appendChild(n)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
  (function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();const H=!1;let M=F;const w=1,m=2,P={owned:null,cleanups:null,context:null,owner:null};var u=null;let T=null,W=null,a=null,p=null,d=null,C=0;function _(e,t){const n=a,s=u,l=e.length===0,i=t===void 0?s:t,f=l?P:{owned:null,cleanups:null,context:i?i.context:null,owner:i},o=l?e:()=>e(()=>S(()=>A(f)));u=f,a=null;try{return b(o,!0)}finally{a=n,u=s}}function L(e,t,n){const s=D(e,t,!1,w);U(s)}function j(e,t,n){M=X;const s=D(e,t,!1,w);s.user=!0,d?d.push(s):U(s)}function S(e){if(a===null)return e();const t=a;a=null;try{return e()}finally{a=t}}function K(e){j(()=>S(e))}function Q(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&b(()=>{for(let l=0;l<e.observers.length;l+=1){const i=e.observers[l],f=T&&T.running;f&&T.disposed.has(i),(f?!i.tState:!i.state)&&(i.pure?p.push(i):d.push(i),i.observers&&R(i)),f||(i.state=w)}if(p.length>1e6)throw p=[],new Error},!1)),t}function U(e){if(!e.fn)return;A(e);const t=C;$(e,e.value,t)}function $(e,t,n){let s;const l=u,i=a;a=u=e;try{s=e.fn(t)}catch(f){return e.pure&&(e.state=w,e.owned&&e.owned.forEach(A),e.owned=null),e.updatedAt=n+1,V(f)}finally{a=i,u=l}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Q(e,s):e.value=s,e.updatedAt=n)}function D(e,t,n,s=w,l){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:u,context:u?u.context:null,pure:n};return u===null||u!==P&&(u.owned?u.owned.push(i):u.owned=[i]),i}function x(e){if(e.state===0)return;if(e.state===m)return O(e);if(e.suspense&&S(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<C);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===w)U(e);else if(e.state===m){const s=p;p=null,b(()=>O(e,t[0]),!1),p=s}}function b(e,t){if(p)return e();let n=!1;t||(p=[]),d?n=!0:d=[],C++;try{const s=e();return J(n),s}catch(s){n||(d=null),p=null,V(s)}}function J(e){if(p&&(F(p),p=null),e)return;const t=d;d=null,t.length&&b(()=>M(t),!1)}function F(e){for(let t=0;t<e.length;t++)x(e[t])}function X(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:x(s)}for(t=0;t<n;t++)x(e[t])}function O(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const l=s.state;l===w?s!==t&&(!s.updatedAt||s.updatedAt<C)&&x(s):l===m&&O(s,t)}}}function R(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=m,n.pure?p.push(n):d.push(n),n.observers&&R(n))}}function A(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),l=n.observers;if(l&&l.length){const i=l.pop(),f=n.observerSlots.pop();s<l.length&&(i.sourceSlots[f]=s,l[s]=i,n.observerSlots[s]=f)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)A(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)A(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Y(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function V(e,t=u){throw Y(e)}function Z(e,t){return S(()=>e(t||{}))}function q(e,t,n){let s=n.length,l=t.length,i=s,f=0,o=0,r=t[l-1].nextSibling,h=null;for(;f<l||o<i;){if(t[f]===n[o]){f++,o++;continue}for(;t[l-1]===n[i-1];)l--,i--;if(l===f){const c=i<s?o?n[o-1].nextSibling:n[i-o]:r;for(;o<i;)e.insertBefore(n[o++],c)}else if(i===o)for(;f<l;)(!h||!h.has(t[f]))&&t[f].remove(),f++;else if(t[f]===n[i-1]&&n[o]===t[l-1]){const c=t[--l].nextSibling;e.insertBefore(n[o++],t[f++].nextSibling),e.insertBefore(n[--i],c),t[l]=n[i]}else{if(!h){h=new Map;let g=o;for(;g<i;)h.set(n[g],g++)}const c=h.get(t[f]);if(c!=null)if(o<c&&c<i){let g=f,N=1,v;for(;++g<l&&g<i&&!((v=h.get(t[g]))==null||v!==c+N);)N++;if(N>c-o){const G=t[f];for(;o<c;)e.insertBefore(n[o++],G)}else e.replaceChild(n[o++],t[f++])}else f++;else t[f++].remove()}}}function z(e,t,n,s={}){let l;return _(i=>{l=i,t===document?e():ee(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{l(),t.textContent=""}}function k(e,t,n,s){let l;const i=()=>{const o=document.createElement("template");return o.innerHTML=e,o.content.firstChild},f=()=>(l||(l=i())).cloneNode(!0);return f.cloneNode=f,f}function ee(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return E(e,t,s,n);L(l=>E(e,t(),l,n),s)}function E(e,t,n,s,l){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,f=s!==void 0;if(e=f&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(i==="number"&&(t=t.toString(),t===n))return n;if(f){let o=n[0];o&&o.nodeType===3?o.data!==t&&(o.data=t):o=document.createTextNode(t),n=y(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean")n=y(e,n,s);else{if(i==="function")return L(()=>{let o=t();for(;typeof o=="function";)o=o();n=E(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],r=n&&Array.isArray(n);if(B(o,t,n,l))return L(()=>n=E(e,o,n,s,!0)),()=>n;if(o.length===0){if(n=y(e,n,s),f)return n}else r?n.length===0?I(e,o,s):q(e,n,o):(n&&y(e),I(e,o));n=o}else if(t.nodeType){if(Array.isArray(n)){if(f)return n=y(e,n,s,t);y(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function B(e,t,n,s){let l=!1;for(let i=0,f=t.length;i<f;i++){let o=t[i],r=n&&n[e.length],h;if(!(o==null||o===!0||o===!1))if((h=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))l=B(e,o,r)||l;else if(h==="function")if(s){for(;typeof o=="function";)o=o();l=B(e,Array.isArray(o)?o:[o],Array.isArray(r)?r:[r])||l}else e.push(o),l=!0;else{const c=String(o);r&&r.nodeType===3&&r.data===c?e.push(r):e.push(document.createTextNode(c))}}return l}function I(e,t,n=null){for(let s=0,l=t.length;s<l;s++)e.insertBefore(t[s],n)}function y(e,t,n,s){if(n===void 0)return e.textContent="";const l=s||document.createTextNode("");if(t.length){let i=!1;for(let f=t.length-1;f>=0;f--){const o=t[f];if(l!==o){const r=o.parentNode===e;!i&&!f?r?e.replaceChild(l,o):e.insertBefore(l,n):r&&o.remove()}else i=!0}}else e.insertBefore(l,n);return[l]}var te=k('<p class="text-4xl text-green-700 text-center py-20">Hello World');const ne=()=>(K(()=>{}),te()),se=document.getElementById("root");z(()=>Z(ne,{}),se);
}
