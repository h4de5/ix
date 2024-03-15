"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73283],{354:(t,e,n)=>{n.d(e,{a:()=>lt,b:()=>L,c:()=>st,f:()=>R,i:()=>A,o:()=>C,s:()=>O});const o=Math.min,i=Math.max,r=Math.round,l=Math.floor,s=t=>({x:t,y:t}),c={left:"right",right:"left",bottom:"top",top:"bottom"},a={start:"end",end:"start"};function f(t,e,n){return i(t,o(e,n))}function u(t,e){return"function"==typeof t?t(e):t}function d(t){return t.split("-")[0]}function h(t){return t.split("-")[1]}function m(t){return"x"===t?"y":"x"}function p(t){return"y"===t?"height":"width"}function g(t){return["top","bottom"].includes(d(t))?"y":"x"}function y(t){return m(g(t))}function v(t){return t.replace(/start|end/g,(t=>a[t]))}function b(t){return t.replace(/left|right|bottom|top/g,(t=>c[t]))}function w(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function x(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function E(t,e,n){let{reference:o,floating:i}=t;const r=g(e),l=y(e),s=p(l),c=d(e),a="y"===r,f=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,m=o[s]/2-i[s]/2;let v;switch(c){case"top":v={x:f,y:o.y-i.height};break;case"bottom":v={x:f,y:o.y+o.height};break;case"right":v={x:o.x+o.width,y:u};break;case"left":v={x:o.x-i.width,y:u};break;default:v={x:o.x,y:o.y}}switch(h(e)){case"start":v[l]-=m*(n&&a?-1:1);break;case"end":v[l]+=m*(n&&a?-1:1)}return v}async function T(t,e){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:l,elements:s,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:f="viewport",elementContext:d="floating",altBoundary:h=!1,padding:m=0}=u(e,t),p=w(m),g=s[h?"floating"===d?"reference":"floating":d],y=x(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(g)))||n?g:g.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(s.floating)),boundary:a,rootBoundary:f,strategy:c})),v="floating"===d?{...l.floating,x:o,y:i}:l.reference,b=await(null==r.getOffsetParent?void 0:r.getOffsetParent(s.floating)),E=await(null==r.isElement?void 0:r.isElement(b))&&await(null==r.getScale?void 0:r.getScale(b))||{x:1,y:1},T=x(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:b,strategy:c}):v);return{top:(y.top-T.top+p.top)/E.y,bottom:(T.bottom-y.bottom+p.bottom)/E.y,left:(y.left-T.left+p.left)/E.x,right:(T.right-y.right+p.right)/E.x}}const L=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:i,placement:r,rects:l,platform:s,elements:c}=e,{element:a,padding:d=0}=u(t,e)||{};if(null==a)return{};const m=w(d),g={x:n,y:i},v=y(r),b=p(v),x=await s.getDimensions(a),E="y"===v,T=E?"top":"left",L=E?"bottom":"right",R=E?"clientHeight":"clientWidth",k=l.reference[b]+l.reference[v]-g[v]-l.floating[b],A=g[v]-l.reference[v],C=await(null==s.getOffsetParent?void 0:s.getOffsetParent(a));let O=C?C[R]:0;O&&await(null==s.isElement?void 0:s.isElement(C))||(O=c.floating[R]||l.floating[b]);const S=k/2-A/2,P=O/2-x[b]/2-1,_=o(m[T],P),D=o(m[L],P),B=_,H=O-x[b]-D,W=O/2-x[b]/2+S,F=f(B,W,H),M=null!=h(r)&&W!=F&&l.reference[b]/2-(W<B?_:D)-x[b]/2<0?W<B?B-W:H-W:0;return{[v]:g[v]-M,data:{[v]:F,centerOffset:W-F+M}}}}),R=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:o,middlewareData:i,rects:r,initialPlacement:l,platform:s,elements:c}=e,{mainAxis:a=!0,crossAxis:f=!0,fallbackPlacements:m,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:x=!0,...E}=u(t,e),L=d(o),R=d(l)===l,k=await(null==s.isRTL?void 0:s.isRTL(c.floating)),A=m||(R||!x?[b(l)]:function(t){const e=b(t);return[v(t),e,v(e)]}(l));m||"none"===w||A.push(...function(t,e,n,o){const i=h(t);let r=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:l;default:return[]}}(d(t),"start"===n,o);return i&&(r=r.map((t=>t+"-"+i)),e&&(r=r.concat(r.map(v)))),r}(l,x,w,k));const C=[l,...A],O=await T(e,E),S=[];let P=(null==(n=i.flip)?void 0:n.overflows)||[];if(a&&S.push(O[L]),f){const t=function(t,e,n){void 0===n&&(n=!1);const o=h(t),i=y(t),r=p(i);let l="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[r]>e.floating[r]&&(l=b(l)),[l,b(l)]}(o,r,k);S.push(O[t[0]],O[t[1]])}if(P=[...P,{placement:o,overflows:S}],!S.every((t=>t<=0))){var _,D;const t=((null==(_=i.flip)?void 0:_.index)||0)+1,e=C[t];if(e)return{data:{index:t,overflows:P},reset:{placement:e}};let n=null==(D=P.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:D.placement;if(!n)switch(g){case"bestFit":{var B;const t=null==(B=P.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:B[0];t&&(n=t);break}case"initialPlacement":n=l}if(o!==n)return{reset:{placement:n}}}return{}}}};function k(t){const e=o(...t.map((t=>t.left))),n=o(...t.map((t=>t.top)));return{x:e,y:n,width:i(...t.map((t=>t.right)))-e,height:i(...t.map((t=>t.bottom)))-n}}const A=function(t){return void 0===t&&(t={}),{name:"inline",options:t,async fn(e){const{placement:n,elements:r,rects:l,platform:s,strategy:c}=e,{padding:a=2,x:f,y:h}=u(t,e),m=Array.from(await(null==s.getClientRects?void 0:s.getClientRects(r.reference))||[]),p=function(t){const e=t.slice().sort(((t,e)=>t.y-e.y)),n=[];let o=null;for(let i=0;i<e.length;i++){const t=e[i];!o||t.y-o.y>o.height/2?n.push([t]):n[n.length-1].push(t),o=t}return n.map((t=>x(k(t))))}(m),y=x(k(m)),v=w(a);const b=await s.getElementRects({reference:{getBoundingClientRect:function(){if(2===p.length&&p[0].left>p[1].right&&null!=f&&null!=h)return p.find((t=>f>t.left-v.left&&f<t.right+v.right&&h>t.top-v.top&&h<t.bottom+v.bottom))||y;if(p.length>=2){if("y"===g(n)){const t=p[0],e=p[p.length-1],o="top"===d(n),i=t.top,r=e.bottom,l=o?t.left:e.left,s=o?t.right:e.right;return{top:i,bottom:r,left:l,right:s,width:s-l,height:r-i,x:l,y:i}}const t="left"===d(n),e=i(...p.map((t=>t.right))),r=o(...p.map((t=>t.left))),l=p.filter((n=>t?n.left===r:n.right===e)),s=l[0].top,c=l[l.length-1].bottom;return{top:s,bottom:c,left:r,right:e,width:e-r,height:c-s,x:r,y:s}}return y}},floating:r.floating,strategy:c});return l.reference.x!==b.reference.x||l.reference.y!==b.reference.y||l.reference.width!==b.reference.width||l.reference.height!==b.reference.height?{reset:{rects:b}}:{}}}};const C=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,i=await async function(t,e){const{placement:n,platform:o,elements:i}=t,r=await(null==o.isRTL?void 0:o.isRTL(i.floating)),l=d(n),s=h(n),c="y"===g(n),a=["left","top"].includes(l)?-1:1,f=r&&c?-1:1,m=u(e,t);let{mainAxis:p,crossAxis:y,alignmentAxis:v}="number"==typeof m?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...m};return s&&"number"==typeof v&&(y="end"===s?-1*v:v),c?{x:y*f,y:p*a}:{x:p*a,y:y*f}}(e,t);return{x:n+i.x,y:o+i.y,data:i}}}},O=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:l=!1,limiter:s={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...c}=u(t,e),a={x:n,y:o},h=await T(e,c),p=g(d(i)),y=m(p);let v=a[y],b=a[p];if(r){const t="y"===y?"bottom":"right";v=f(v+h["y"===y?"top":"left"],v,v-h[t])}if(l){const t="y"===p?"bottom":"right";b=f(b+h["y"===p?"top":"left"],b,b-h[t])}const w=s.fn({...e,[y]:v,[p]:b});return{...w,data:{x:w.x-n,y:w.y-o}}}}};function S(t){return D(t)?(t.nodeName||"").toLowerCase():"#document"}function P(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function _(t){var e;return null==(e=(D(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function D(t){return t instanceof Node||t instanceof P(t).Node}function B(t){return t instanceof Element||t instanceof P(t).Element}function H(t){return t instanceof HTMLElement||t instanceof P(t).HTMLElement}function W(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof P(t).ShadowRoot)}function F(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=j(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function M(t){return["table","td","th"].includes(S(t))}function z(t){const e=$(),n=j(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function $(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function V(t){return["html","body","#document"].includes(S(t))}function j(t){return P(t).getComputedStyle(t)}function q(t){return B(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function I(t){if("html"===S(t))return t;const e=t.assignedSlot||t.parentNode||W(t)&&t.host||_(t);return W(e)?e.host:e}function N(t){const e=I(t);return V(e)?t.ownerDocument?t.ownerDocument.body:t.body:H(e)&&F(e)?e:N(e)}function U(t,e){var n;void 0===e&&(e=[]);const o=N(t),i=o===(null==(n=t.ownerDocument)?void 0:n.body),r=P(o);return i?e.concat(r,r.visualViewport||[],F(o)?o:[]):e.concat(o,U(o))}function K(t){const e=j(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=H(t),l=i?t.offsetWidth:n,s=i?t.offsetHeight:o,c=r(n)!==l||r(o)!==s;return c&&(n=l,o=s),{width:n,height:o,$:c}}function X(t){return B(t)?t:t.contextElement}function Y(t){const e=X(t);if(!H(e))return s(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:l}=K(e);let c=(l?r(n.width):n.width)/o,a=(l?r(n.height):n.height)/i;return c&&Number.isFinite(c)||(c=1),a&&Number.isFinite(a)||(a=1),{x:c,y:a}}const G=s(0);function J(t){const e=P(t);return $()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:G}function Q(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1);const i=t.getBoundingClientRect(),r=X(t);let l=s(1);e&&(o?B(o)&&(l=Y(o)):l=Y(t));const c=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==P(t))&&e}(r,n,o)?J(r):s(0);let a=(i.left+c.x)/l.x,f=(i.top+c.y)/l.y,u=i.width/l.x,d=i.height/l.y;if(r){const t=P(r),e=o&&B(o)?P(o):o;let n=t.frameElement;for(;n&&o&&e!==t;){const t=Y(n),e=n.getBoundingClientRect(),o=j(n),i=e.left+(n.clientLeft+parseFloat(o.paddingLeft))*t.x,r=e.top+(n.clientTop+parseFloat(o.paddingTop))*t.y;a*=t.x,f*=t.y,u*=t.x,d*=t.y,a+=i,f+=r,n=P(n).frameElement}}return x({width:u,height:d,x:a,y:f})}function Z(t){return Q(_(t)).left+q(t).scrollLeft}function tt(t,e,n){let o;if("viewport"===e)o=function(t,e){const n=P(t),o=_(t),i=n.visualViewport;let r=o.clientWidth,l=o.clientHeight,s=0,c=0;if(i){r=i.width,l=i.height;const t=$();(!t||t&&"fixed"===e)&&(s=i.offsetLeft,c=i.offsetTop)}return{width:r,height:l,x:s,y:c}}(t,n);else if("document"===e)o=function(t){const e=_(t),n=q(t),o=t.ownerDocument.body,r=i(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),l=i(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Z(t);const c=-n.scrollTop;return"rtl"===j(o).direction&&(s+=i(e.clientWidth,o.clientWidth)-r),{width:r,height:l,x:s,y:c}}(_(t));else if(B(e))o=function(t,e){const n=Q(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=H(t)?Y(t):s(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:i*r.x,y:o*r.y}}(e,n);else{const n=J(t);o={...e,x:e.x-n.x,y:e.y-n.y}}return x(o)}function et(t,e){const n=I(t);return!(n===e||!B(n)||V(n))&&("fixed"===j(n).position||et(n,e))}function nt(t,e,n){const o=H(e),i=_(e),r="fixed"===n,l=Q(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const a=s(0);if(o||!o&&!r)if(("body"!==S(e)||F(i))&&(c=q(e)),o){const t=Q(e,!0,r,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else i&&(a.x=Z(i));return{x:l.left+c.scrollLeft-a.x,y:l.top+c.scrollTop-a.y,width:l.width,height:l.height}}function ot(t,e){return H(t)&&"fixed"!==j(t).position?e?e(t):t.offsetParent:null}function it(t,e){const n=P(t);if(!H(t))return n;let o=ot(t,e);for(;o&&M(o)&&"static"===j(o).position;)o=ot(o,e);return o&&("html"===S(o)||"body"===S(o)&&"static"===j(o).position&&!z(o))?n:o||function(t){let e=I(t);for(;H(e)&&!V(e);){if(z(e))return e;e=I(e)}return null}(t)||n}const rt={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=H(n),r=_(n);if(n===r)return e;let l={scrollLeft:0,scrollTop:0},c=s(1);const a=s(0);if((i||!i&&"fixed"!==o)&&(("body"!==S(n)||F(r))&&(l=q(n)),H(n))){const t=Q(n);c=Y(n),a.x=t.x+n.clientLeft,a.y=t.y+n.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-l.scrollLeft*c.x+a.x,y:e.y*c.y-l.scrollTop*c.y+a.y}},getDocumentElement:_,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:r,strategy:l}=t;const s="clippingAncestors"===n?function(t,e){const n=e.get(t);if(n)return n;let o=U(t).filter((t=>B(t)&&"body"!==S(t))),i=null;const r="fixed"===j(t).position;let l=r?I(t):t;for(;B(l)&&!V(l);){const e=j(l),n=z(l);n||"fixed"!==e.position||(i=null),(r?!n&&!i:!n&&"static"===e.position&&i&&["absolute","fixed"].includes(i.position)||F(l)&&!n&&et(t,l))?o=o.filter((t=>t!==l)):i=e,l=I(l)}return e.set(t,o),o}(e,this._c):[].concat(n),c=[...s,r],a=c[0],f=c.reduce(((t,n)=>{const r=tt(e,n,l);return t.top=i(r.top,t.top),t.right=o(r.right,t.right),t.bottom=o(r.bottom,t.bottom),t.left=i(r.left,t.left),t}),tt(e,a,l));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}},getOffsetParent:it,getElementRects:async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||it,r=this.getDimensions;return{reference:nt(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){return K(t)},getScale:Y,isElement:B,isRTL:function(t){return"rtl"===j(t).direction}};function lt(t,e,n,r){void 0===r&&(r={});const{ancestorScroll:s=!0,ancestorResize:c=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:f="function"==typeof IntersectionObserver,animationFrame:u=!1}=r,d=X(t),h=s||c?[...d?U(d):[],...U(e)]:[];h.forEach((t=>{s&&t.addEventListener("scroll",n,{passive:!0}),c&&t.addEventListener("resize",n)}));const m=d&&f?function(t,e){let n,r=null;const s=_(t);function c(){clearTimeout(n),r&&r.disconnect(),r=null}return function a(f,u){void 0===f&&(f=!1),void 0===u&&(u=1),c();const{left:d,top:h,width:m,height:p}=t.getBoundingClientRect();if(f||e(),!m||!p)return;const g={rootMargin:-l(h)+"px "+-l(s.clientWidth-(d+m))+"px "+-l(s.clientHeight-(h+p))+"px "+-l(d)+"px",threshold:i(0,o(1,u))||1};let y=!0;function v(t){const e=t[0].intersectionRatio;if(e!==u){if(!y)return a();e?a(!1,e):n=setTimeout((()=>{a(!1,1e-7)}),100)}y=!1}try{r=new IntersectionObserver(v,{...g,root:s.ownerDocument})}catch(b){r=new IntersectionObserver(v,g)}r.observe(t)}(!0),c}(d,n):null;let p,g=-1,y=null;a&&(y=new ResizeObserver((t=>{let[o]=t;o&&o.target===d&&y&&(y.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{y&&y.observe(e)}))),n()})),d&&!u&&y.observe(d),y.observe(e));let v=u?Q(t):null;return u&&function e(){const o=Q(t);!v||o.x===v.x&&o.y===v.y&&o.width===v.width&&o.height===v.height||n();v=o,p=requestAnimationFrame(e)}(),n(),()=>{h.forEach((t=>{s&&t.removeEventListener("scroll",n),c&&t.removeEventListener("resize",n)})),m&&m(),y&&y.disconnect(),y=null,u&&cancelAnimationFrame(p)}}const st=(t,e,n)=>{const o=new Map,i={platform:rt,...n},r={...i.platform,_c:o};return(async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:l}=n,s=r.filter(Boolean),c=await(null==l.isRTL?void 0:l.isRTL(e));let a=await l.getElementRects({reference:t,floating:e,strategy:i}),{x:f,y:u}=E(a,o,c),d=o,h={},m=0;for(let p=0;p<s.length;p++){const{name:n,fn:r}=s[p],{x:g,y:y,data:v,reset:b}=await r({x:f,y:u,initialPlacement:o,placement:d,strategy:i,middlewareData:h,rects:a,platform:l,elements:{reference:t,floating:e}});f=null!=g?g:f,u=null!=y?y:u,h={...h,[n]:{...h[n],...v}},b&&m<=50&&(m++,"object"==typeof b&&(b.placement&&(d=b.placement),b.rects&&(a=!0===b.rects?await l.getElementRects({reference:t,floating:e,strategy:i}):b.rects),({x:f,y:u}=E(a,d,c))),p=-1)}return{x:f,y:u,placement:d,strategy:i,middlewareData:h}})(t,e,{...i,platform:r})}},73283:(t,e,n)=>{n.r(e),n.d(e,{ix_tooltip:()=>c});var o=n(94975),i=n(354),r=n(84906);var l=function(t,e,n,o){var i,r=arguments.length,l=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(l=(r<3?i(l):r>3?i(e,n,l):i(e,n))||l);return r>3&&l&&Object.defineProperty(e,n,l),l};const s=t=>null!=t?`${t}px`:"",c=class{constructor(t){(0,o.r)(this,t),this.onEnterElementBind=this.onTooltipShow.bind(this),this.onLeaveElementBind=this.onTooltipHide.bind(this),this.tooltipCloseTimeInMS=50,this.for=void 0,this.titleContent=void 0,this.interactive=!1,this.placement="top",this.animationFrame=!1,this.visible=!1}get arrowElement(){return this.hostElement.shadowRoot.querySelector(".arrow")}destroyAutoUpdate(){void 0!==this.disposeAutoUpdate&&this.disposeAutoUpdate()}onTooltipShow(t){this.showTooltip(t.target)}onTooltipHide(){this.hideTooltip()}async showTooltip(t){clearTimeout(this.hideTooltipTimeout),await this.computeTooltipPosition(t),this.visible=!0}async hideTooltip(){this.hideTooltipTimeout=setTimeout((()=>{this.visible=!1}),this.tooltipCloseTimeInMS),this.destroyAutoUpdate()}computeArrowPosition(t){let{placement:e,middlewareData:n}=t,{x:o,y:i}=n.arrow;return e.startsWith("top")?{left:s(o),top:s(i)}:e.startsWith("right")?{left:s(-4),top:s(i)}:e.startsWith("bottom")?{left:s(o),top:s(-4)}:e.startsWith("left")?{right:s(-4),top:s(i)}:void 0}async computeTooltipPosition(t){if(t)return new Promise((e=>{this.disposeAutoUpdate=(0,i.a)(t,this.hostElement,(async()=>{setTimeout((async()=>{const n=await(0,i.c)(t,this.hostElement,{strategy:"fixed",placement:this.placement,middleware:[(0,i.s)(),(0,i.o)(8),(0,i.b)({element:this.arrowElement}),(0,i.f)({fallbackStrategy:"initialPlacement",padding:10})]});if(n.middlewareData.arrow){const t=this.computeArrowPosition(n);Object.assign(this.arrowElement.style,t)}const{x:o,y:r}=n;Object.assign(this.hostElement.style,{left:null!==o?`${o}px`:"",top:null!==r?`${r}px`:""}),e()}))}),{ancestorResize:!0,ancestorScroll:!0,elementResize:!0,animationFrame:this.animationFrame})}))}clearHideTimeout(){this.interactive&&clearTimeout(this.hideTooltipTimeout)}queryAnchorElements(){return Array.from(document.querySelectorAll(this.for))}registerTriggerListener(){const t=this.queryAnchorElements();this.disposeListener&&this.disposeListener(),t.forEach((t=>{t.addEventListener("mouseenter",this.onEnterElementBind),t.addEventListener("mouseleave",this.onLeaveElementBind),t.addEventListener("focusin",this.onEnterElementBind),t.addEventListener("focusout",this.onLeaveElementBind),this.disposeListener=()=>{t.removeEventListener("mouseenter",this.onEnterElementBind),t.removeEventListener("mouseleave",this.onLeaveElementBind),t.removeEventListener("focusin",this.onEnterElementBind),t.removeEventListener("focusout",this.onLeaveElementBind)}}))}registerTooltipListener(){const{hostElement:t}=this;t.addEventListener("mouseenter",(()=>this.clearHideTimeout())),t.addEventListener("focusin",(()=>this.clearHideTimeout())),t.addEventListener("mouseleave",(()=>this.onTooltipHide())),t.addEventListener("focusout",(()=>this.onTooltipHide()))}async onKeydown(t){"Escape"===t.code&&this.onTooltipHide()}componentWillLoad(){this.registerTriggerListener()}componentDidLoad(){this.interactive&&(this.tooltipCloseTimeInMS=150),this.observer=new MutationObserver((()=>{this.registerTriggerListener()})),this.observer.observe(document.body,{attributes:!0,attributeFilter:["data-ix-tooltip"],childList:!0,subtree:!0}),this.registerTooltipListener()}disconnectedCallback(){var t;null===(t=this.observer)||void 0===t||t.disconnect(),this.destroyAutoUpdate()}render(){return(0,o.h)(o.H,{key:"c297ba0961f7dc7ad8823f4f9a5022cb10ed7a77",class:{visible:this.visible},role:"tooltip"},(0,o.h)("div",{key:"21bf5211c142329a9475ef37fb5d2b5f5e4f5f19",class:"tooltip-title"},(0,o.h)("slot",{key:"8e4b3e91a0a161efa871a717a3d4871cb08224d2",name:"title-icon"}),(0,o.h)("ix-typography",{key:"7715a464de0154206a72f3a9ed97247eb5e4954c",variant:"default-title"},this.titleContent,(0,o.h)("slot",{key:"16cc59a0d2a7aa11ab584be7738084b811d2320d",name:"title-content"}))),(0,o.h)("div",{key:"4390c36d7d326a7a0ffd8e0a7f2308c6bdacd02b",class:{"tooltip-content":!0}},(0,o.h)("slot",{key:"b21343921ee51073ad3c7e26f1ace94f46ec29e3"})),(0,o.h)("div",{key:"4e578ce3e101c8b479a7c334a81dafde3dc105a5",class:"arrow"}))}get hostElement(){return(0,o.g)(this)}};l([(0,r.O)("keydown",(t=>t.visible))],c.prototype,"onKeydown",null),c.style=':host{display:inline-block;position:fixed;left:0px;top:0px;z-index:var(--theme-z-index-tooltip);max-width:18.25rem;opacity:0;visibility:collapse !important;overflow-wrap:break-word;border-radius:0.25rem;background-color:var(--theme-tootlip--background);padding:0.375rem 0.75rem 0.375rem 0.875rem;box-shadow:var(--theme-shadow-4)}:host .tooltip-title{display:flex;align-items:center}:host .tooltip-title ::slotted(ix-icon){margin-right:0.35rem}:host(.visible){opacity:1;visibility:visible !important}:host(.visible) .arrow,:host(.visible) .arrow::before{position:absolute;width:8px;height:8px;background:inherit}:host(.visible) .arrow{visibility:hidden}:host(.visible) .arrow::before{visibility:visible;content:"";transform:rotate(45deg);background-color:var(--theme-tootlip--background)}'},84906:(t,e,n)=>{n.d(e,{O:()=>r});var o=n(94975);const i={target:"window",defaultEnabled:!0};function r(t,e){return(n,r)=>{const{componentWillLoad:l,componentWillRender:s,disconnectedCallback:c}=n;e&&(n.componentWillRender=function(){var t;return null===(t=(0,o.g)(this)[`__ix__${r}`])||void 0===t||t.enable(e(this)),s&&s.call(this)}),n.componentWillLoad=function(){const e=function(t,e){void 0===e&&(e={});const n=Object.assign(Object.assign({},i),e);let o;const r=t=>{o(t)},l={on:t=>{o=t},isEnabled:n.defaultEnabled,enable:e=>{l.isEnabled=e,e?addEventListener(t,r):removeEventListener(t,r)},destroy:()=>{l.enable(!1)}};return l.enable(n.defaultEnabled),l}(t),n=(0,o.g)(this),s=this[r];return n[`__ix__${r}`]=e,e.on(s.bind(this)),l&&l.call(this)},n.disconnectedCallback=function(){var t;const e=(0,o.g)(this);return e&&e[`__ix__${r}`]&&(null===(t=e[`__ix__${r}`])||void 0===t||t.destroy(),e[`__ix__${r}`]=null),c&&c.call(this)}}}}}]);