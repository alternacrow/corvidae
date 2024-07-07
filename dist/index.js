"use strict";var i=Object.defineProperty,b=Object.defineProperties,u=Object.getOwnPropertyDescriptor,f=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var T=(t,e,r)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,d=(t,e)=>{for(var r in e||(e={}))c.call(e,r)&&T(t,r,e[r]);if(l)for(var r of l(e))R.call(e,r)&&T(t,r,e[r]);return t},m=(t,e)=>b(t,f(e));var a=(t,e)=>{for(var r in e)i(t,r,{get:e[r],enumerable:!0})},g=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of h(e))!c.call(t,n)&&n!==r&&i(t,n,{get:()=>e[n],enumerable:!(o=u(e,n))||o.enumerable});return t};var A=t=>g(i({},"__esModule",{value:!0}),t);var q={};a(q,{Dictionary:()=>y,SeedRandom:()=>s});module.exports=A(q);var y={};a(y,{contains:()=>x,empty:()=>D,filter:()=>$,find:()=>S,fromArray:()=>w,get:()=>M,isEmpty:()=>E,remove:()=>v,set:()=>p,sort:()=>j,toArray:()=>B});var D=()=>({byId:{},allIds:[]}),E=t=>t.allIds.length===0,x=(t,e)=>e in t.byId,M=(t,e)=>{if(!x(t,e))throw Error(`dictionary does not contain id: ${e}`);return t.byId[e]},p=(t,e)=>({byId:m(d({},t.byId),{[e.id]:e}),allIds:t.allIds.includes(e.id)?t.allIds:[...t.allIds,e.id]}),v=(t,e)=>{let r=d({},t.byId);return delete r[e],{byId:r,allIds:t.allIds.filter(o=>o!==e)}},w=t=>t.reduce((e,r)=>p(e,r),D()),B=t=>t.allIds.map(e=>t.byId[e]),S=(t,e)=>{let r=t.allIds.find(o=>e(t.byId[o]));return r?t.byId[r]:void 0},$=(t,e)=>t.allIds.reduce((o,n)=>{let I=t.byId[n];return e(I)&&(o.byId[n]=I,o.allIds.push(n)),o},{byId:{},allIds:[]}),j=(t,e)=>{let r=[...t.allIds].sort((o,n)=>e(t.byId[o],t.byId[n]));return{byId:t.byId,allIds:r}};var s={};a(s,{mulberry32:()=>k});var k=(t=0)=>{let e=t;return()=>{e+=1831565813;let r=e;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296}};0&&(module.exports={Dictionary,SeedRandom});
