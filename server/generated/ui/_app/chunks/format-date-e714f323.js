import{ax as a,ay as s,az as i,aA as f}from"./vendor-c58cc9e7.js";const t="yyyy-MM-dd z HH:mm:ss.SS";function c(e,n="UTC"){if(!e)return"";try{o(e)&&(e=m(e));const r=a(e);return n==="local"?s(r,t):n==="relative"?i(r)+" ago":f(r,"UTC",t)}catch{return""}}function m(e){if(!o(e))throw new TypeError("provided value is not a timestamp");const n=new Date(null);return n.setTime(Number(e.seconds)*1e3+e.nanos/1e3),n}function o(e){return typeof e=="object"?e.seconds!==void 0&&e.nanos!==void 0:!1}export{c as f};
