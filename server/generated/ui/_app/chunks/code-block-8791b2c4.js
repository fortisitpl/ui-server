import{S as U,i as j,s as A,e as k,k as D,w as I,c as p,a as v,d,m as V,x as z,b as _,R as q,g as S,M as C,y as G,T as K,q as N,o as E,B as L,l as O,n as Q,p as W,v as X,C as B,U as F,am as Y,an as Z,t as x,h as $,j as ee}from"./index-e4881ae7.js";import{e as H,g as M,F as ae}from"./index.es-2b23329e.js";function P(n){let a,l,e,t,c,m,u,f,h,s,r,b,T;function R(o,i){return o[4]?le:te}let g=R(n)(n);return f=new ae({props:{icon:n[0]?H:M,color:"white"}}),{c(){a=k("div"),l=k("pre"),e=k("code"),g.c(),m=D(),u=k("button"),I(f.$$.fragment),this.h()},l(o){a=p(o,"DIV",{class:!0,"data-cy":!0});var i=v(a);l=p(i,"PRE",{class:!0});var y=v(l);e=p(y,"CODE",{class:!0,"data-cy":!0});var J=v(e);g.l(J),J.forEach(d),y.forEach(d),m=V(i),u=p(i,"BUTTON",{class:!0});var w=v(u);z(f.$$.fragment,w),w.forEach(d),i.forEach(d),this.h()},h(){_(e,"class",t="language-"+n[3]),_(e,"data-cy",c=n[7]["data-cy"]),_(l,"class","p-4 rounded-lg w-full overflow-x-scroll"),q(l,"h-full",!n[2]),_(u,"class","absolute top-4 right-4"),_(a,"class",h="relative w-full rounded-lg h-auto "+n[7].class+" "+(n[2]?"":"lg:h-full")),_(a,"data-cy",s=n[7].dataCy)},m(o,i){S(o,a,i),C(a,l),C(l,e),g.m(e,null),C(a,m),C(a,u),G(f,u,null),r=!0,b||(T=K(u,"click",n[5]),b=!0)},p(o,i){g.p(o,i),(!r||i&8&&t!==(t="language-"+o[3]))&&_(e,"class",t),(!r||i&128&&c!==(c=o[7]["data-cy"]))&&_(e,"data-cy",c),i&4&&q(l,"h-full",!o[2]);const y={};i&1&&(y.icon=o[0]?H:M),f.$set(y),(!r||i&132&&h!==(h="relative w-full rounded-lg h-auto "+o[7].class+" "+(o[2]?"":"lg:h-full")))&&_(a,"class",h),(!r||i&128&&s!==(s=o[7].dataCy))&&_(a,"data-cy",s)},i(o){r||(N(f.$$.fragment,o),r=!0)},o(o){E(f.$$.fragment,o),r=!1},d(o){o&&d(a),g.d(),L(f),b=!1,T()}}}function te(n){let a,l;return{c(){a=new Y,l=O(),this.h()},l(e){a=Z(e),l=O(),this.h()},h(){a.a=l},m(e,t){a.m(n[1],e,t),S(e,l,t)},p(e,t){t&2&&a.p(e[1])},d(e){e&&d(l),e&&a.d()}}}function le(n){let a=n[6](n[1])+"",l;return{c(){l=x(a)},l(e){l=$(e,a)},m(e,t){S(e,l,t)},p(e,t){t&2&&a!==(a=e[6](e[1])+"")&&ee(l,a)},d(e){e&&d(l)}}}function ne(n){let a,l,e=(n[1]||n[1]===null)&&P(n);return{c(){e&&e.c(),a=O()},l(t){e&&e.l(t),a=O()},m(t,c){e&&e.m(t,c),S(t,a,c),l=!0},p(t,[c]){t[1]||t[1]===null?e?(e.p(t,c),c&2&&N(e,1)):(e=P(t),e.c(),N(e,1),e.m(a.parentNode,a)):e&&(Q(),E(e,1,1,()=>{e=null}),W())},i(t){l||(N(e),l=!0)},o(t){E(e),l=!1},d(t){e&&e.d(t),t&&d(a)}}}function se(n,a,l){let{content:e}=a,{copied:t=!1}=a,{inline:c=!1}=a,{language:m="json"}=a;const u=m==="json",f=()=>navigator.clipboard.writeText(u?h(JSON.stringify(e)):e).then(()=>{l(0,t=!t),setTimeout(()=>l(0,t=!1),2e3)}).catch(s=>console.error(s)),h=s=>{if(!s)return;let r;try{r=JSON.parse(s)}catch{r=s}return JSON.stringify(r,void 0,c?0:2)};return X(()=>{window.Prism.highlightAll()}),n.$$set=s=>{l(7,a=B(B({},a),F(s))),"content"in s&&l(1,e=s.content),"copied"in s&&l(0,t=s.copied),"inline"in s&&l(2,c=s.inline),"language"in s&&l(3,m=s.language)},a=F(a),[t,e,c,m,u,f,h,a]}class re extends U{constructor(a){super(),j(this,a,se,ne,A,{content:1,copied:0,inline:2,language:3})}}export{re as C};
