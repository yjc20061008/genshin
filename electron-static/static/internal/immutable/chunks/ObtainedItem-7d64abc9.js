import{S as fe,i as ue,s as ve,k as g,a as N,q as K,l as w,m as q,h as d,c as T,r as M,n as b,b as L,G as i,H as ne,u as P,f as J,g as re,d as ie,J as he,K as _e,t as R,a6 as ce,E as Z,F as de,o as me,a0 as pe,e as x,ah as be,v as ge,w as we,p as ee,x as qe,ag as Ee,y as Ie,A as ke}from"./index-c0d078cd.js";import{n as De}from"./index-123e2351.js";import{Y as ye}from"./runtime.esm-4bf604c8.js";import{h as z,I as Se}from"./WishResult-901333c5.js";import{a as Ve}from"./app-stores-358281e6.js";import{p as Ce}from"./audio-460a91c6.js";function te(l,t,a){const e=l.slice();return e[7]=t[a].item,e[8]=t[a].qty,e}function se(l,t,a){const e=l.slice();return e[11]=t[a],e}function ae(l){let t,a,e,o,c,p,D,I,V=l[8]+"",v,F,k,C=l[1](`shop.item.${l[7]}`)+"",H,G,y,S,A,B;o=new Se({props:{width:"100%",type:l[7]}});let O=Array(l[3](l[7])),_=[];for(let s=0;s<O.length;s+=1)_[s]=le(se(l,O,s));return{c(){t=g("div"),a=g("div"),e=g("div"),ge(o.$$.fragment),c=N(),p=g("div");for(let s=0;s<_.length;s+=1)_[s].c();D=N(),I=g("span"),v=K(V),F=N(),k=g("div"),H=K(C),G=N(),this.h()},l(s){t=w(s,"DIV",{class:!0});var m=q(t);a=w(m,"DIV",{class:!0});var E=q(a);e=w(E,"DIV",{class:!0,style:!0});var f=q(e);we(o.$$.fragment,f),c=T(f),p=w(f,"DIV",{class:!0});var r=q(p);for(let h=0;h<_.length;h+=1)_[h].l(r);r.forEach(d),f.forEach(d),D=T(E),I=w(E,"SPAN",{class:!0});var Y=q(I);v=M(Y,V),Y.forEach(d),E.forEach(d),F=T(m),k=w(m,"DIV",{class:!0});var n=q(k);H=M(n,C),n.forEach(d),G=T(m),m.forEach(d),this.h()},h(){b(p,"class","star svelte-1v6bqwa"),b(e,"class","pic svelte-1v6bqwa"),ee(e,"--bg","url('"+l[2][`${l[3](l[7])}star-bg.webp`]+"')"),b(I,"class","svelte-1v6bqwa"),b(a,"class","body svelte-1v6bqwa"),b(k,"class","name svelte-1v6bqwa"),b(t,"class",y="item "+l[7]+" svelte-1v6bqwa")},m(s,m){L(s,t,m),i(t,a),i(a,e),qe(o,e,null),i(e,c),i(e,p);for(let E=0;E<_.length;E+=1)_[E].m(p,null);i(a,D),i(a,I),i(I,v),i(t,F),i(t,k),i(k,H),i(t,G),S=!0,A||(B=ne(t,"mousedown",Ee(l[5])),A=!0)},p(s,m){const E={};if(m&1&&(E.type=s[7]),o.$set(E),m&1){O=Array(s[3](s[7]));let f;for(f=0;f<O.length;f+=1){const r=se(s,O,f);_[f]?_[f].p(r,m):(_[f]=le(),_[f].c(),_[f].m(p,null))}for(;f<_.length;f+=1)_[f].d(1);_.length=O.length}(!S||m&5)&&ee(e,"--bg","url('"+s[2][`${s[3](s[7])}star-bg.webp`]+"')"),(!S||m&1)&&V!==(V=s[8]+"")&&P(v,V),(!S||m&3)&&C!==(C=s[1](`shop.item.${s[7]}`)+"")&&P(H,C),(!S||m&1&&y!==(y="item "+s[7]+" svelte-1v6bqwa"))&&b(t,"class",y)},i(s){S||(J(o.$$.fragment,s),S=!0)},o(s){R(o.$$.fragment,s),S=!1},d(s){s&&d(t),Ie(o),ce(_,s),A=!1,B()}}}function le(l){let t;return{c(){t=g("i"),this.h()},l(a){t=w(a,"I",{class:!0}),q(t).forEach(d),this.h()},h(){b(t,"class","gi-star svelte-1v6bqwa")},m(a,e){L(a,t,e)},p:ke,d(a){a&&d(t)}}}function oe(l){let t,a,e=l[8]>0&&ae(l);return{c(){e&&e.c(),t=x()},l(o){e&&e.l(o),t=x()},m(o,c){e&&e.m(o,c),L(o,t,c),a=!0},p(o,c){o[8]>0?e?(e.p(o,c),c&1&&J(e,1)):(e=ae(o),e.c(),J(e,1),e.m(t.parentNode,t)):e&&(re(),R(e,1,1,()=>{e=null}),ie())},i(o){a||(J(e),a=!0)},o(o){R(e),a=!1},d(o){e&&e.d(o),o&&d(t)}}}function Oe(l){let t,a,e,o,c,p,D=l[1]("obtained")+"",I,V,v,F,k,C=l[1]("extra")+"",H,G,y,S,A,B=l[1]("pressToContinue")+"",O,_,s,m,E,f=l[0],r=[];for(let n=0;n<f.length;n+=1)r[n]=oe(te(l,f,n));const Y=n=>R(r[n],1,1,()=>{r[n]=null});return{c(){t=g("section"),a=g("div"),e=g("div"),o=N(),c=g("div"),p=g("h3"),I=K(D),V=N(),v=g("i"),F=N(),k=g("h4"),H=K(C),G=N(),y=g("div");for(let n=0;n<r.length;n+=1)r[n].c();S=N(),A=g("h4"),O=K(B),this.h()},l(n){t=w(n,"SECTION",{class:!0});var h=q(t);a=w(h,"DIV",{class:!0});var u=q(a);e=w(u,"DIV",{class:!0}),q(e).forEach(d),o=T(u),c=w(u,"DIV",{class:!0});var $=q(c);p=w($,"H3",{class:!0});var j=q(p);I=M(j,D),V=T(j),v=w(j,"I",{class:!0}),q(v).forEach(d),j.forEach(d),F=T($),k=w($,"H4",{class:!0});var U=q(k);H=M(U,C),U.forEach(d),G=T($),y=w($,"DIV",{class:!0});var W=q(y);for(let Q=0;Q<r.length;Q+=1)r[Q].l(W);W.forEach(d),S=T($),A=w($,"H4",{class:!0});var X=q(A);O=M(X,B),X.forEach(d),$.forEach(d),u.forEach(d),h.forEach(d),this.h()},h(){b(e,"class","bg svelte-1v6bqwa"),b(v,"class","gi-primo-star svelte-1v6bqwa"),b(p,"class","title svelte-1v6bqwa"),b(k,"class","svelte-1v6bqwa"),b(y,"class","milestone svelte-1v6bqwa"),b(A,"class","msg svelte-1v6bqwa"),b(c,"class","content svelte-1v6bqwa"),b(a,"class","container svelte-1v6bqwa"),b(t,"class","svelte-1v6bqwa")},m(n,h){L(n,t,h),i(t,a),i(a,e),i(a,o),i(a,c),i(c,p),i(p,I),i(p,V),i(p,v),i(c,F),i(c,k),i(k,H),i(c,G),i(c,y);for(let u=0;u<r.length;u+=1)r[u].m(y,null);i(c,S),i(c,A),i(A,O),s=!0,m||(E=ne(t,"mousedown",l[4]),m=!0)},p(n,[h]){if((!s||h&2)&&D!==(D=n[1]("obtained")+"")&&P(I,D),(!s||h&2)&&C!==(C=n[1]("extra")+"")&&P(H,C),h&15){f=n[0];let u;for(u=0;u<f.length;u+=1){const $=te(n,f,u);r[u]?(r[u].p($,h),J(r[u],1)):(r[u]=oe($),r[u].c(),J(r[u],1),r[u].m(y,null))}for(re(),u=f.length;u<r.length;u+=1)Y(u);ie()}(!s||h&2)&&B!==(B=n[1]("pressToContinue")+"")&&P(O,B)},i(n){if(!s){for(let h=0;h<f.length;h+=1)J(r[h]);_||he(()=>{_=_e(c,De,{start:0,duration:200}),_.start()}),s=!0}},o(n){r=r.filter(Boolean);for(let h=0;h<r.length;h+=1)R(r[h]);s=!1},d(n){n&&d(t),ce(r,n),m=!1,E()}}}function $e(l,t,a){let e,o;Z(l,ye,v=>a(1,e=v)),Z(l,Ve,v=>a(2,o=v));let{data:c=[{item:"primogem",qty:0}]}=t;const p=v=>v==="stardust"?4:5,D=de("closeObtained");me(()=>Ce("obtain"));const I=z.getScope();z("*","obtain",v=>{v.preventDefault(),D()}),z.setScope("obtain"),pe(()=>z.deleteScope("obtain",I));function V(v){be.call(this,l,v)}return l.$$set=v=>{"data"in v&&a(0,c=v.data)},[c,e,o,p,D,V]}class Ge extends fe{constructor(t){super(),ue(this,t,$e,Oe,ve,{data:0})}}export{Ge as default};
