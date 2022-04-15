import{r as e,R as t,c as n}from"./vendor.afbfe189.js";function r(e,t,n,r){return new Promise((a=>{const l=e.animate(t,n),o=()=>{l.cancel()},s=()=>{r.removeEventListener("abort",o),l.removeEventListener("finish",s),a()};r.addEventListener("abort",o),l.addEventListener("finish",s)}))}function a(t){const[n,r]=e.exports.useState(),[a,l]=e.exports.useState();return function(t){const n=e.exports.useRef(t);e.exports.useEffect((()=>{n.current=t})),e.exports.useEffect((()=>{const e=()=>{"function"==typeof n.current&&n.current()};return requestAnimationFrame(e),window.addEventListener("resize",e,{passive:!0}),()=>{window.removeEventListener("resize",e)}}),[])}((()=>{r((e=>{var n;const r=null==(n=t.current)?void 0:n.getBoundingClientRect().width;return e!==r?r:e})),l((e=>{var n;const r=null==(n=t.current)?void 0:n.getBoundingClientRect().height;return e!==r?r:e}))})),{width:n,height:a}}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const l=({children:n,duration:l,easing:o,delay:s,reverse:i=!1})=>{const c=e.exports.useRef(null),u=e.exports.useRef(null),d=e.exports.useMemo((()=>({duration:l,easing:o,delay:s,iterations:1,fill:"forwards",direction:i?"reverse":"normal"})),[l,o,s,i]),{height:m}=a(c);return e.exports.useEffect((()=>{if(!m||!c.current||!u.current)return;const e=m,t=c.current,n=u.current,a=new AbortController;return async function l(){const o=[{transform:"translateY(0px)"},{transform:`translateY(${-1*e}px)`}],s=[{transform:`translateY(${e}px)`},{transform:"translateY(0px)"}],i=[{transform:`translateY(${-1*e}px)`},{transform:`translateY(${-2*e}px)`}],c=r(t,o,d,a.signal).then((()=>r(t,s,d,a.signal))),u=r(n,o,d,a.signal).then((()=>r(n,i,d,a.signal)));return Promise.all([c,u]).then((()=>l()))}(),()=>{a.abort()}}),[m,d]),t.createElement("div",{style:{overflow:"hidden",height:"100%"}},t.createElement("div",{ref:c},n),t.createElement("div",{ref:u},n))},o=({children:n,duration:l,easing:o,delay:s,reverse:i=!1})=>{const c=e.exports.useRef(null),u=e.exports.useRef(null),d=e.exports.useMemo((()=>({duration:l,easing:o,delay:s,iterations:1,fill:"forwards",direction:i?"reverse":"normal"})),[l,o,s,i]),{width:m}=a(c);return e.exports.useEffect((()=>{if(!m||!c.current||!u.current)return;const e=m,t=c.current,n=u.current,a=new AbortController;return async function l(){const o=[{transform:"translateX(0px)"},{transform:`translateX(${-1*e}px)`}],s=[{transform:`translateX(${e}px)`},{transform:"translateX(0px)"}],i=[{transform:`translateX(${-1*e}px)`},{transform:`translateX(${-2*e}px)`}],c=r(t,o,d,a.signal).then((()=>r(t,s,d,a.signal))),u=r(n,o,d,a.signal).then((()=>r(n,i,d,a.signal)));return Promise.all([c,u]).then((()=>l()))}(),()=>{a.abort()}}),[m,d]),t.createElement("div",{style:{overflow:"hidden",display:"flex",flexWrap:"nowrap",width:"100%"}},t.createElement("div",{ref:c,style:{display:"flex"}},n),t.createElement("div",{ref:u,style:{display:"flex"}},n))};const s=[{id:0,heading1:"Spring Hill",heading2:"Direct Applications Coordinator",backgroundColor:"hsl(119, 100%, 90.2%)"},{id:1,heading1:"Euless",heading2:"National Solutions Representative",backgroundColor:"hsl(210, 100%, 90.2%)"},{id:2,heading1:"Buena Park",heading2:"Chief Operations Liaison",backgroundColor:"hsl(273, 100%, 90.2%)"},{id:3,heading1:"Euclid",heading2:"Customer Mobility Facilitator",backgroundColor:"hsl(168, 100%, 90.2%)"},{id:4,heading1:"Madison",heading2:"Dynamic Applications Manager",backgroundColor:"hsl(161, 100%, 90.2%)"},{id:5,heading1:"Sammamish",heading2:"National Identity Manager",backgroundColor:"hsl(172, 100%, 90.2%)"}];function i(){const[n,r]=e.exports.useState(15e3),[a,i]=e.exports.useState(0),[c,u]=e.exports.useState("linear"),[d,m]=e.exports.useState(!1);return t.createElement("div",{className:"demo"},t.createElement("div",{className:"row"},t.createElement("div",{className:"options"},t.createElement("label",null,"Easing",t.createElement("select",{value:c,onChange:e=>{u(e.target.value)}},t.createElement("option",{value:"linear"},"linear"),t.createElement("option",{value:"ease-in"},"ease-in"),t.createElement("option",{value:"ease-out"},"ease-out"),t.createElement("option",{value:"ease-in-out"},"ease-in-out"))),t.createElement("label",null,"Duration",t.createElement("input",{value:n,type:"range",min:1e3,max:25e3,step:1e3,onChange:e=>{r(Number.parseInt(e.target.value))}}),t.createElement("output",null,n,"ms")),t.createElement("label",null,"Delay",t.createElement("input",{value:a,type:"range",min:0,max:5e3,step:1e3,onChange:e=>{i(Number.parseInt(e.target.value))}}),t.createElement("output",null,a,"ms")),t.createElement("label",null,"Reverse?",t.createElement("input",{checked:d,type:"checkbox",min:0,max:5e3,step:1e3,onChange:e=>{m(e.target.checked)}}),t.createElement("output",null,a,"ms"))),t.createElement("h1",null,"Vertical"),t.createElement("div",{style:{height:"500px"}},t.createElement(l,{duration:n,easing:c,delay:a,reverse:d},s.map((({id:e,backgroundColor:n,heading1:r,heading2:a})=>t.createElement("div",{className:"box-wrapper",key:e},t.createElement("div",{className:"box box--horizontal",style:{backgroundColor:n}},t.createElement("p",{className:"heading-1"},r),t.createElement("p",{className:"heading-2"},a)))))))),t.createElement("div",{className:"row"},t.createElement("h1",null,"Horizontal"),t.createElement(o,{duration:n,easing:c,delay:a,reverse:d},s.map((({id:e,backgroundColor:n,heading1:r,heading2:a})=>t.createElement("div",{className:"box-wrapper box-wrapper--vertical",key:e},t.createElement("div",{className:"box box--vertical",style:{backgroundColor:n}},t.createElement("p",{className:"heading-1"},r),t.createElement("p",{className:"heading-2"},a))))))))}n(document.getElementById("app")).render(t.createElement(t.StrictMode,null,t.createElement(i,null)));
