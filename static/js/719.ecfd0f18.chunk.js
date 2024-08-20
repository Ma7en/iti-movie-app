"use strict";(self.webpackChunkiti_movie_app=self.webpackChunkiti_movie_app||[]).push([[719],{5102:(e,t,s)=>{s.d(t,{A:()=>m});var a=s(5043),n=s(3003),i=s(3910),l=s(7929),d=s(2916),c=s(6865),r=s(462),o=s(3261),x=s(579);const m=function(e){let{movie:t}=e;const s=(0,n.wA)(),{darkMode:m,setDarkMode:g}=(0,a.useContext)(r.A),{language:h,setLanguage:p}=(0,a.useContext)(o.A),[u,j]=(0,a.useState)(!1),{watchlist:v}=(0,n.d4)((e=>e.watchlist));return(0,a.useEffect)((()=>{j(v.includes(t))}),[t,v]),(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(i.g,{className:` fs-3 ${u?"text-warning":m?"text-white":"text-black-50"} `,style:{right:"10px",top:"15px"},role:"button",onClick:()=>s((0,c.W4)(t)),icon:u?l.qcK:d.qcK})})}},7965:(e,t,s)=>{s.d(t,{A:()=>m});var a=s(5043),n=s(3216),i=s(462),l=s(3261),d=s(579);const c=function(e){let{rate:t}=e;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:"position-absolute",style:{top:"-40px",left:"15px"},children:(0,d.jsx)("div",{className:"circle-rating d-flex justify-content-center align-items-center mx-auto",style:{width:"50px",height:"50px",borderRadius:"50%",background:`conic-gradient(${10*t>=70?"#21ce79":"#ffc107"} ${10*t*3.6}deg, #e9ecef 0deg)`},children:(0,d.jsxs)("span",{className:"text-dark d-flex align-items-center justify-content-center text-bg-dark text-white rounded-circle fs-4 fw-bold",style:{width:"40px",height:"40px"},children:[10*t,(0,d.jsx)("span",{className:"position-absolute ",style:{right:"10px",top:"10px",fontSize:"8px"},children:"%"})]})})})})};var r=s(5102),o=s(5850),x=s(1757);const m=function(e){let{movie:t}=e;const s=(0,n.Zp)(),{darkMode:m,setDarkMode:g}=(0,a.useContext)(i.A),{language:h,setLanguage:p}=(0,a.useContext)(l.A);if(!t)return(0,d.jsx)(o.A,{});const{id:u,title:j,release_date:v,vote_average:b,poster_path:f,backdrop_path:N}=t;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:"col-12 col-md-4 col-lg-3 col-xl-2 ",children:(0,d.jsxs)("div",{className:"card mb-2 border-0 shadow flex-fill h-100 "+(m?"text-bg-dark":""),children:[(0,d.jsx)("img",{onClick:()=>s(`/movie/${u}`),role:"button",src:f?`https://image.tmdb.org/t/p/w500${f||N}`:`${x}`,className:"card-img-top img-fluid rounded-3 "+(m?"text-bg-dark":""),alt:`${j}`}),(0,d.jsxs)("div",{className:"card-body p-1 px-2 position-relative rounded mt-1 d-flex align-items-center justify-content-between "+(m?"text-bg-dark":""),children:[(0,d.jsxs)("div",{className:"mt-3",children:[(0,d.jsx)("h5",{onClick:()=>s(`/movie/${u}`),role:"button",className:"d-inline-block card-title mb-0 text-wrap",children:j}),(0,d.jsx)("p",{className:" m-0 text-secondary p-0",children:v})]}),(0,d.jsx)(c,{rate:parseInt(b)}),(0,d.jsx)("div",{className:"mt-3",children:(0,d.jsx)(r.A,{movie:t},u)})]})]})})})}},6473:(e,t,s)=>{s.d(t,{A:()=>d});var a=s(3910),n=s(7929),i=s(2916),l=s(579);const d=function(e){let{rating:t}=e;const s=Math.floor(t),d=t-s>=.25&&t-s<.99,c=5-s-(d?1:0);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"rating-stars my-3",children:[[...Array(s)].map(((e,t)=>(0,l.jsx)(a.g,{icon:n.yy,color:"#2fa023"},t))),d&&(0,l.jsx)(a.g,{icon:n.uAg,color:"#2fa023"}),[...Array(c)].map(((e,t)=>(0,l.jsx)(a.g,{icon:i.yy},t)))]})})}},3719:(e,t,s)=>{s.r(t),s.d(t,{default:()=>b});var a=s(5043),n=s(3216),i=s(6213),l=s(462),d=s(3261),c=s(5850),r=s(7965),o=s(579);const x=function(){const{darkMode:e,setDarkMode:t}=(0,a.useContext)(l.A),{language:s,setLanguage:n}=(0,a.useContext)(d.A);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"py-5 text-center",children:[(0,o.jsx)("h2",{className:"fw-bold text-capitalize",children:"en"===s?"No recommendation at this time":"\u0644\u0627 \u064a\u0648\u062c\u062f \u062a\u0648\u0635\u064a\u0629 \u0641\u064a \u0647\u0630\u0627 \u0627\u0644\u0648\u0642\u062a"}),(0,o.jsx)("h3",{className:"fw-bold text-capitalize",children:"en"===s?"will be added soon":"\u0633\u064a\u062a\u0645 \u0627\u0636\u0627\u0641\u062a\u0647\u0627 \u0642\u0631\u064a\u0628\u0627"})]})})};const m=function(){const{id:e}=(0,n.g)(),{darkMode:t,setDarkMode:s}=(0,a.useContext)(l.A),{language:m,setLanguage:g}=(0,a.useContext)(d.A),[h,p]=(0,a.useState)(null),[u,j]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{(async()=>{try{await i.A.get(`https://api.themoviedb.org/3/movie/${e}/recommendations?api_key=f0e69a1690e589b57b176ce0340d7a76&language=${"en"===m?"en-US":"ar"}`).then((e=>{p(e.data.results)}))}catch(u){console.log(u),j(!0)}})()}),[e,m]),h?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"Recommendations "+(t?"text-bg-dark":""),children:(0,o.jsxs)("div",{className:"container py-5",children:[(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h2",{className:"text-capitalize mb-4 fw-bold",children:"en"===m?"Recommendations":"\u0627\u0644\u062a\u0648\u0635\u064a\u0627\u062a"})})}),(0,o.jsx)("div",{children:h&&0!==(null===h||void 0===h?void 0:h.length)?(0,o.jsx)("div",{className:"row gy-5 gx-3 ",children:null===h||void 0===h?void 0:h.map(((e,t)=>(0,o.jsx)(a.Fragment,{children:(0,o.jsx)(r.A,{movie:e})},t)))}):(0,o.jsx)(x,{})})]})})}):(0,o.jsx)(c.A,{})};var g=s(3910),h=s(7929),p=s(5102),u=s(1757),j=s(6473);const v=function(){var e,t,s;const{id:r}=(0,n.g)(),{darkMode:x,setDarkMode:m}=(0,a.useContext)(l.A),{language:v,setLanguage:b}=(0,a.useContext)(d.A),[f,N]=(0,a.useState)(null),[k,y]=(0,a.useState)(!1);if((0,a.useEffect)((()=>{(async()=>{try{await i.A.get(`https://api.themoviedb.org/3/movie/${r}?api_key=f0e69a1690e589b57b176ce0340d7a76&language=${"en"===v?"en-US":"ar"}`).then((e=>{N(e.data)}))}catch(k){console.log(k),y(!0)}})()}),[r,v]),!f)return(0,o.jsx)(c.A,{});const{poster_path:w,backdrop_path:A,title:_,release_date:$,vote_average:C,vote_count:F,overview:S,genres:M,runtime:z,homepage:D,spoken_languages:L,production_companies:E}=f;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"moviedetails "+(x?"text-bg-dark":""),children:(0,o.jsx)("div",{className:"container py-5 border-bottom",children:(0,o.jsxs)("div",{className:"row g-4 ",children:[(0,o.jsx)("div",{className:"col-12 col-md-4 col-lg-4 rounded",children:(0,o.jsx)("div",{className:"image",style:{height:"100%"},children:(0,o.jsx)("img",{className:"rounded-4",style:{alignSelf:"center",height:"100%",maxWidth:"100%",backgroundSize:"cover",backgroundPosition:"center",backgroundImage:""},src:""+(w?`https://image.tmdb.org/t/p/w500${w||A}`:`${u}`),alt:`${_||"not found"}`})})}),(0,o.jsxs)("div",{className:"col-12 col-md-8 col-lg-8 ",children:[(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsxs)("div",{className:"d-flex align-items-start justify-content-between mb-3",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{className:"card-title fw-bolder d-inline text-capitalize",children:_||"not found"}),(0,o.jsx)("h5",{className:"fs-6 mt-1 "+(x?"text-bg-dark":"text-muted"),children:$})]}),(0,o.jsx)("div",{className:" fs-3",children:(0,o.jsx)(p.A,{movie:f},r)})]}),(0,o.jsxs)("div",{className:"d-flex align-items-center gap-3",children:[(0,o.jsx)(j.A,{className:"d-inline ",rating:C/2}),(0,o.jsx)("div",{children:(0,o.jsx)("p",{className:"d-inline ",children:F})})]})]}),(0,o.jsx)("div",{className:"my-3",children:(0,o.jsx)("p",{className:"card-text p-1 fw-medium",children:S})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{children:null===M||void 0===M?void 0:M.map(((e,t)=>(0,o.jsx)(a.Fragment,{children:(0,o.jsx)("span",{className:"badge badge-pill px-4 py-2 bg-warning text-dark me-2 mb-2 fw-normal rounded-5  text-capitalize",children:(null===e||void 0===e?void 0:e.name)||"not found"})},t)))}),(0,o.jsxs)("div",{className:"mt-3 ",children:[(0,o.jsxs)("p",{className:"d-inline",style:{fontSize:"15px"},children:[(0,o.jsxs)("span",{className:"fw-bold px-2",children:["en"===v?"Duration":"\u0627\u0644\u0645\u062f\u0629",":"]}),(0,o.jsxs)("span",{children:[(z/60).toFixed(2)," h"]})]}),(0,o.jsxs)("p",{className:"d-inline px-4 ",style:{fontSize:"15px"},children:[(0,o.jsxs)("span",{className:"fw-bold px-2 text-capitalize",children:["en"===v?"Languages":"\u0627\u0644\u0644\u063a\u0629",":"]}),(0,o.jsx)("span",{children:null===L||void 0===L?void 0:L.map(((e,t)=>(0,o.jsx)(a.Fragment,{children:(0,o.jsx)("span",{className:"px-2",children:(null===e||void 0===e?void 0:e.name)||"English"})},t)))})]})]}),(0,o.jsx)("div",{children:(0,o.jsx)("img",{style:{display:"block",width:"40%",height:"200px",padding:"30px 0px 30px 0px",objectFit:"fill"},src:null!==(e=E[0])&&void 0!==e&&e.logo_path?`https://image.tmdb.org/t/p/w500${null===(t=E[0])||void 0===t?void 0:t.logo_path}`:`${u}`,alt:`${(null===(s=E[0])||void 0===s?void 0:s.name)||"not found"}`})}),(0,o.jsx)("div",{children:(0,o.jsxs)("a",{className:"text-decoration-none badge border border-warning rounded-5 px-3 py-2  "+(x?"text-bg-dark":"text-secondary"),href:D,target:"_blank",rel:"noreferrer",children:[(0,o.jsx)("span",{className:"mx-2",children:"en"===v?"Website":"\u0627\u0644\u0645\u0648\u0642\u0639"}),(0,o.jsx)(g.g,{icon:h.CQO})]})})]})]})]})})})})};const b=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{}),(0,o.jsx)(m,{})]})}},1757:(e,t,s)=>{e.exports=s.p+"static/media/no-image-available.7b60afe83d420fcb5332.jpg"}}]);
//# sourceMappingURL=719.ecfd0f18.chunk.js.map