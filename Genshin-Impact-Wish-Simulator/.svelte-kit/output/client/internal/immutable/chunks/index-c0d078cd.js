function x(){}const K=t=>t;function Ct(t,e){for(const n in e)t[n]=e[n];return t}function St(t){return t&&typeof t=="object"&&typeof t.then=="function"}function _t(t){return t()}function lt(){return Object.create(null)}function C(t){t.forEach(_t)}function H(t){return typeof t=="function"}function ee(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let q;function ne(t,e){return q||(q=document.createElement("a")),q.href=e,t===q.href}function Nt(t){return Object.keys(t).length===0}function Tt(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ie(t,e,n){t.$$.on_destroy.push(Tt(e,n))}function se(t,e,n,i){if(t){const s=ht(t,e,n,i);return t[0](s)}}function ht(t,e,n,i){return t[1]&&i?Ct(n.ctx.slice(),t[1](i(e))):n.ctx}function re(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)c[o]=e.dirty[o]|s[o];return c}return e.dirty|s}return e.dirty}function ce(t,e,n,i,s,c){if(s){const r=ht(e,n,i,c);t.p(r,s)}}function le(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function oe(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ae(t){const e={};for(const n in t)e[n]=!0;return e}function ue(t){return t??""}function fe(t,e,n){return t.set(n),e}function de(t){return t&&H(t.destroy)?t.destroy:x}const mt=typeof window<"u";let Q=mt?()=>window.performance.now():()=>Date.now(),et=mt?t=>requestAnimationFrame(t):x;const N=new Set;function pt(t){N.forEach(e=>{e.c(t)||(N.delete(e),e.f())}),N.size!==0&&et(pt)}function U(t){let e;return N.size===0&&et(pt),{promise:new Promise(n=>{N.add(e={c:t,f:n})}),abort(){N.delete(e)}}}let V=!1;function Mt(){V=!0}function jt(){V=!1}function Rt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Dt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const d=e[a];d.claim_order!==void 0&&l.push(d)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,d=(s>0&&e[n[s]].claim_order<=a?s+1:Rt(1,s,u=>e[n[u]].claim_order,a))-1;i[l]=n[d]+1;const f=d+1;n[f]=l,s=Math.max(f,s)}const c=[],r=[];let o=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);o>=l;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);c.reverse(),r.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<r.length;l++){for(;a<c.length&&r[l].claim_order>=c[a].claim_order;)a++;const d=a<c.length?c[a]:null;t.insertBefore(r[l],d)}}function gt(t,e){t.appendChild(e)}function yt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function zt(t){const e=X("style");return Bt(yt(t),e),e.sheet}function Bt(t,e){gt(t.head||t,e)}function Ht(t,e){if(V){for(Dt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Lt(t,e,n){t.insertBefore(e,n||null)}function Pt(t,e,n){V&&!n?Ht(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function R(t){t.parentNode.removeChild(t)}function _e(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function bt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function nt(t){return document.createTextNode(t)}function he(){return nt(" ")}function me(){return nt("")}function ot(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function pe(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ge(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function ye(t){return function(e){e.target===this&&t.call(this,e)}}function be(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function we(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function qt(t){return Array.from(t.childNodes)}function wt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function xt(t,e,n,i,s=!1){wt(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function kt(t,e,n,i){return xt(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||c.push(o.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function xe(t,e,n){return kt(t,e,n,X)}function ke(t,e,n){return kt(t,e,n,bt)}function Ot(t,e){return xt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>nt(e),!0)}function $e(t){return Ot(t," ")}function at(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function ve(t,e){const n=at(t,"HTML_TAG_START",0),i=at(t,"HTML_TAG_END",n);if(n===i)return new ut(void 0,e);wt(t);const s=t.splice(n,i-n+1);R(s[0]),R(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new ut(c,e)}function Ee(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ae(t,e){t.value=e??""}function Ce(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let O;function Wt(){if(O===void 0){O=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{O=!0}}return O}function Se(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=X("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=Wt();let c;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=ot(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=ot(i.contentWindow,"resize",e)}),gt(t,i),()=>{(s||c&&i.contentWindow)&&c(),R(i)}}function Ne(t,e,n){t.classList[n?"add":"remove"](e)}function $t(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function Te(t,e=document.body){return Array.from(e.querySelectorAll(t))}class Ft{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=bt(n.nodeName):this.e=X(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Lt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(R)}}class ut extends Ft{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Pt(this.t,this.n[n],e)}}const I=new Map;let J=0;function Gt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function It(t,e){const n={stylesheet:zt(e),rules:{}};return I.set(t,n),n}function D(t,e,n,i,s,c,r,o=0){const l=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=l){const y=e+(n-e)*c(m);a+=m*100+`%{${r(y,1-y)}}
`}const d=a+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Gt(d)}_${o}`,u=yt(t),{stylesheet:_,rules:h}=I.get(u)||It(u,t);h[f]||(h[f]=!0,_.insertRule(`@keyframes ${f} ${d}`,_.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${s}ms 1 both`,J+=1,f}function z(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),J-=s,J||Jt())}function Jt(){et(()=>{J||(I.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),I.clear())})}function Me(t,e,n,i){if(!e)return x;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return x;const{delay:c=0,duration:r=300,easing:o=K,start:l=Q()+c,end:a=l+r,tick:d=x,css:f}=n(t,{from:e,to:s},i);let u=!0,_=!1,h;function p(){f&&(h=D(t,0,1,r,c,o,f)),c||(_=!0)}function m(){f&&z(t,h),u=!1}return U(y=>{if(!_&&y>=l&&(_=!0),_&&y>=a&&(d(1,0),m()),!u)return!1;if(_){const b=y-l,w=0+1*o(b/r);d(w,1-w)}return!0}),p(),d(0,1),m}function je(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Kt(t,s)}}function Kt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let B;function E(t){B=t}function S(){if(!B)throw new Error("Function called outside component initialization");return B}function Re(t){S().$$.on_mount.push(t)}function De(t){S().$$.after_update.push(t)}function ze(t){S().$$.on_destroy.push(t)}function Be(){const t=S();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=$t(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function He(t,e){return S().$$.context.set(t,e),e}function Le(t){return S().$$.context.get(t)}function Pe(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const j=[],ft=[],F=[],dt=[],vt=Promise.resolve();let tt=!1;function Et(){tt||(tt=!0,vt.then(it))}function qe(){return Et(),vt}function T(t){F.push(t)}const Z=new Set;let W=0;function it(){const t=B;do{for(;W<j.length;){const e=j[W];W++,E(e),Qt(e.$$)}for(E(null),j.length=0,W=0;ft.length;)ft.pop()();for(let e=0;e<F.length;e+=1){const n=F[e];Z.has(n)||(Z.add(n),n())}F.length=0}while(j.length);for(;dt.length;)dt.pop()();tt=!1,Z.clear(),E(t)}function Qt(t){if(t.fragment!==null){t.update(),C(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}let M;function st(){return M||(M=Promise.resolve(),M.then(()=>{M=null})),M}function A(t,e,n){t.dispatchEvent($t(`${e?"intro":"outro"}${n}`))}const G=new Set;let v;function Ut(){v={r:0,c:[],p:v}}function Vt(){v.r||C(v.c),v=v.p}function rt(t,e){t&&t.i&&(G.delete(t),t.i(e))}function At(t,e,n,i){if(t&&t.o){if(G.has(t))return;G.add(t),v.c.push(()=>{G.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ct={duration:0};function Oe(t,e,n){let i=e(t,n),s=!1,c,r,o=0;function l(){c&&z(t,c)}function a(){const{delay:f=0,duration:u=300,easing:_=K,tick:h=x,css:p}=i||ct;p&&(c=D(t,0,1,u,f,_,p,o++)),h(0,1);const m=Q()+f,y=m+u;r&&r.abort(),s=!0,T(()=>A(t,!0,"start")),r=U(b=>{if(s){if(b>=y)return h(1,0),A(t,!0,"end"),l(),s=!1;if(b>=m){const w=_((b-m)/u);h(w,1-w)}}return s})}let d=!1;return{start(){d||(d=!0,z(t),H(i)?(i=i(),st().then(a)):a())},invalidate(){d=!1},end(){s&&(l(),s=!1)}}}function We(t,e,n){let i=e(t,n),s=!0,c;const r=v;r.r+=1;function o(){const{delay:l=0,duration:a=300,easing:d=K,tick:f=x,css:u}=i||ct;u&&(c=D(t,1,0,a,l,d,u));const _=Q()+l,h=_+a;T(()=>A(t,!1,"start")),U(p=>{if(s){if(p>=h)return f(0,1),A(t,!1,"end"),--r.r||C(r.c),!1;if(p>=_){const m=d((p-_)/a);f(1-m,m)}}return s})}return H(i)?st().then(()=>{i=i(),o()}):o(),{end(l){l&&i.tick&&i.tick(1,0),s&&(c&&z(t,c),s=!1)}}}function Fe(t,e,n,i){let s=e(t,n),c=i?0:1,r=null,o=null,l=null;function a(){l&&z(t,l)}function d(u,_){const h=u.b-c;return _*=Math.abs(h),{a:c,b:u.b,d:h,duration:_,start:u.start,end:u.start+_,group:u.group}}function f(u){const{delay:_=0,duration:h=300,easing:p=K,tick:m=x,css:y}=s||ct,b={start:Q()+_,b:u};u||(b.group=v,v.r+=1),r||o?o=b:(y&&(a(),l=D(t,c,u,h,_,p,y)),u&&m(0,1),r=d(b,h),T(()=>A(t,u,"start")),U(w=>{if(o&&w>o.start&&(r=d(o,h),o=null,A(t,r.b,"start"),y&&(a(),l=D(t,c,r.b,r.duration,0,p,s.css))),r){if(w>=r.end)m(c=r.b,1-c),A(t,r.b,"end"),o||(r.b?a():--r.group.r||C(r.group.c)),r=null;else if(w>=r.start){const L=w-r.start;c=r.a+r.d*p(L/r.duration),m(c,1-c)}}return!!(r||o)}))}return{run(u){H(s)?st().then(()=>{s=s(),f(u)}):f(u)},end(){a(),r=o=null}}}function Ge(t,e){const n=e.token={};function i(s,c,r,o){if(e.token!==n)return;e.resolved=o;let l=e.ctx;r!==void 0&&(l=l.slice(),l[r]=o);const a=s&&(e.current=s)(l);let d=!1;e.block&&(e.blocks?e.blocks.forEach((f,u)=>{u!==c&&f&&(Ut(),At(f,1,1,()=>{e.blocks[u]===f&&(e.blocks[u]=null)}),Vt())}):e.block.d(1),a.c(),rt(a,1),a.m(e.mount(),e.anchor),d=!0),e.block=a,e.blocks&&(e.blocks[c]=a),d&&it()}if(St(t)){const s=S();if(t.then(c=>{E(s),i(e.then,1,e.value,c),E(null)},c=>{if(E(s),i(e.catch,2,e.error,c),E(null),!e.hasCatch)throw c}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function Ie(t,e,n){const i=e.slice(),{resolved:s}=t;t.current===t.then&&(i[t.value]=s),t.current===t.catch&&(i[t.error]=s),t.block.p(i,n)}const Je=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Ke(t,e){t.d(1),e.delete(t.key)}function Xt(t,e){At(t,1,1,()=>{e.delete(t.key)})}function Qe(t,e){t.f(),Xt(t,e)}function Ue(t,e,n,i,s,c,r,o,l,a,d,f){let u=t.length,_=c.length,h=u;const p={};for(;h--;)p[t[h].key]=h;const m=[],y=new Map,b=new Map;for(h=_;h--;){const g=f(s,c,h),k=n(g);let $=r.get(k);$?i&&$.p(g,e):($=a(k,g),$.c()),y.set(k,m[h]=$),k in p&&b.set(k,Math.abs(h-p[k]))}const w=new Set,L=new Set;function Y(g){rt(g,1),g.m(o,d),r.set(g.key,g),d=g.first,_--}for(;u&&_;){const g=m[_-1],k=t[u-1],$=g.key,P=k.key;g===k?(d=g.first,u--,_--):y.has(P)?!r.has($)||w.has($)?Y(g):L.has(P)?u--:b.get($)>b.get(P)?(L.add($),Y(g)):(w.add(P),u--):(l(k,r),u--)}for(;u--;){const g=t[u];y.has(g.key)||l(g,r)}for(;_;)Y(m[_-1]);return m}function Ve(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],o=e[c];if(o){for(const l in r)l in o||(i[l]=1);for(const l in o)s[l]||(n[l]=o[l],s[l]=1);t[c]=o}else for(const l in r)s[l]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Xe(t){return typeof t=="object"&&t!==null?t:{}}function Ye(t){t&&t.c()}function Ze(t,e){t&&t.l(e)}function Yt(t,e,n,i){const{fragment:s,on_mount:c,on_destroy:r,after_update:o}=t.$$;s&&s.m(e,n),i||T(()=>{const l=c.map(_t).filter(H);r?r.push(...l):C(l),t.$$.on_mount=[]}),o.forEach(T)}function Zt(t,e){const n=t.$$;n.fragment!==null&&(C(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function te(t,e){t.$$.dirty[0]===-1&&(j.push(t),Et(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tn(t,e,n,i,s,c,r,o=[-1]){const l=B;E(t);const a=t.$$={fragment:null,ctx:null,props:c,update:x,not_equal:s,bound:lt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:lt(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};r&&r(a.root);let d=!1;if(a.ctx=n?n(t,e.props||{},(f,u,..._)=>{const h=_.length?_[0]:u;return a.ctx&&s(a.ctx[f],a.ctx[f]=h)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](h),d&&te(t,f)),u}):[],a.update(),d=!0,C(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){Mt();const f=qt(e.target);a.fragment&&a.fragment.l(f),f.forEach(R)}else a.fragment&&a.fragment.c();e.intro&&rt(t.$$.fragment),Yt(t,e.target,e.anchor,e.customElement),jt(),it()}E(l)}class en{$destroy(){Zt(this,1),this.$destroy=x}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Nt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Be as $,x as A,Tt as B,C,H as D,ie as E,Le as F,Ht as G,ot as H,We as I,T as J,Oe as K,Fe as L,Te as M,Ne as N,pe as O,He as P,Je as Q,se as R,en as S,ce as T,le as U,re as V,Ct as W,K as X,ne as Y,ye as Z,ae as _,he as a,ze as a0,ft as a1,ue as a2,bt as a3,ke as a4,Se as a5,_e as a6,Ge as a7,Ie as a8,ut as a9,ve as aa,de as ab,fe as ac,we as ad,Ue as ae,Ke as af,ge as ag,Pe as ah,oe as ai,Ae as aj,je as ak,Me as al,Qe as am,Ve as an,Xe as ao,Pt as b,$e as c,Vt as d,me as e,rt as f,Ut as g,R as h,tn as i,De as j,X as k,xe as l,qt as m,be as n,Re as o,Ce as p,nt as q,Ot as r,ee as s,At as t,Ee as u,Ye as v,Ze as w,Yt as x,Zt as y,qe as z};
