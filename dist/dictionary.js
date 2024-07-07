"use strict";var i=Object.defineProperty,m=Object.defineProperties,b=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var y=(t,e,r)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,s=(t,e)=>{for(var r in e||(e={}))T.call(e,r)&&y(t,r,e[r]);if(a)for(var r of a(e))h.call(e,r)&&y(t,r,e[r]);return t},l=(t,e)=>m(t,u(e));var c=(t,e)=>{for(var r in e)i(t,r,{get:e[r],enumerable:!0})},g=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of f(e))!T.call(t,o)&&o!==r&&i(t,o,{get:()=>e[o],enumerable:!(n=b(e,o))||n.enumerable});return t};var A=t=>g(i({},"__esModule",{value:!0}),t);var q={};c(q,{Dictionary:()=>d});module.exports=A(q);var d={};c(d,{contains:()=>p,empty:()=>D,filter:()=>j,find:()=>$,fromArray:()=>w,get:()=>R,isEmpty:()=>E,remove:()=>v,set:()=>x,sort:()=>k,toArray:()=>B});var D=()=>({byId:{},allIds:[]}),E=t=>t.allIds.length===0,p=(t,e)=>e in t.byId,R=(t,e)=>{if(!p(t,e))throw Error(`dictionary does not contain id: ${e}`);return t.byId[e]},x=(t,e)=>({byId:l(s({},t.byId),{[e.id]:e}),allIds:t.allIds.includes(e.id)?t.allIds:[...t.allIds,e.id]}),v=(t,e)=>{let r=s({},t.byId);return delete r[e],{byId:r,allIds:t.allIds.filter(n=>n!==e)}},w=t=>t.reduce((e,r)=>x(e,r),D()),B=t=>t.allIds.map(e=>t.byId[e]),$=(t,e)=>{let r=t.allIds.find(n=>e(t.byId[n]));return r?t.byId[r]:void 0},j=(t,e)=>t.allIds.reduce((n,o)=>{let I=t.byId[o];return e(I)&&(n.byId[o]=I,n.allIds.push(o)),n},{byId:{},allIds:[]}),k=(t,e)=>{let r=[...t.allIds].sort((n,o)=>e(t.byId[n],t.byId[o]));return{byId:t.byId,allIds:r}};0&&(module.exports={Dictionary});
