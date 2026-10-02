
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b462d3ad-f389-5b73-915a-b2ad3d820a46")}catch(e){}}();
import{u as d}from"./index-CVhO1mfm.js";import{S as t}from"./apiEndpoints-BbCkNzPE.js";import{u as m}from"./useLogisticsPIN-DX0Kedau.js";function v(){const e=m(r=>{var i;return(i=r.deliveryMan)==null?void 0:i.uid}),{data:n,error:o,isLoading:u,mutate:s}=d(e?`/api/menu/logistics/orders/${e}`:null,t,{dedupingInterval:1e4,refreshInterval:r=>(r==null?void 0:r.length)>0?3e4:12e4});return{orders:n,isLoading:u,isError:o,mutate:s}}export{v as u};

//# debugId=b462d3ad-f389-5b73-915a-b2ad3d820a46
