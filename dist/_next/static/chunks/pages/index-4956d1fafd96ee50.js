(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(1852)}])},6541:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return _}});let i=r(8754),n=r(1757),s=r(5893),o=n._(r(7294)),a=i._(r(3935)),l=i._(r(7828)),c=r(7367),d=r(7903),u=r(4938);r(1997);let f=r(9953),h=i._(r(6663)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/2025-conf/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e,t,r,i,n,s,o){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function m(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}let b=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:n,height:a,width:l,decoding:c,className:d,style:u,fetchPriority:f,placeholder:h,loading:g,unoptimized:b,fill:j,onLoadRef:_,onLoadingCompleteRef:x,setBlurComplete:w,setShowAltText:v,sizesInput:z,onLoad:y,onError:k,...S}=e;return(0,s.jsx)("img",{...S,...m(f),loading:g,width:l,height:a,decoding:c,"data-nimg":j?"fill":"1",className:d,style:u,sizes:n,srcSet:i,src:r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(k&&(e.src=e.src),e.complete&&p(e,h,_,x,w,b,z))},[r,h,_,x,w,k,b,z,t]),onLoad:e=>{p(e.currentTarget,h,_,x,w,b,z)},onError:e=>{v(!0),"empty"!==h&&w(!0),k&&k(e)}})});function j(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...m(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,i),null):(0,s.jsx)(l.default,{children:(0,s.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let _=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(f.RouterContext),i=(0,o.useContext)(u.ImageConfigContext),n=(0,o.useMemo)(()=>{let e=g||i||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:a,onLoadingComplete:l}=e,p=(0,o.useRef)(a);(0,o.useEffect)(()=>{p.current=a},[a]);let m=(0,o.useRef)(l);(0,o.useEffect)(()=>{m.current=l},[l]);let[_,x]=(0,o.useState)(!1),[w,v]=(0,o.useState)(!1),{props:z,meta:y}=(0,c.getImgProps)(e,{defaultLoader:h.default,imgConf:n,blurComplete:_,showAltText:w});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(b,{...z,unoptimized:y.unoptimized,placeholder:y.placeholder,fill:y.fill,onLoadRef:p,onLoadingCompleteRef:m,setBlurComplete:x,setShowAltText:v,sizesInput:e.sizes,ref:t}),y.priority?(0,s.jsx)(j,{isAppRouter:!r,imgAttributes:z}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7367:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(1997);let i=r(9919),n=r(7903);function s(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,l,c,{src:d,sizes:u,unoptimized:f=!1,priority:h=!1,loading:g,className:p,quality:m,width:b,height:j,fill:_=!1,style:x,overrideSrc:w,onLoad:v,onLoadingComplete:z,placeholder:y="empty",blurDataURL:k,fetchPriority:S,layout:C,objectFit:N,objectPosition:E,lazyBoundary:P,lazyRoot:I,...O}=e,{imgConf:R,showAltText:M,blurComplete:B,defaultLoader:H}=t,F=R||n.imageConfigDefault;if("allSizes"in F)a=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,t)=>e-t),t=F.deviceSizes.sort((e,t)=>e-t);a={...F,allSizes:e,deviceSizes:t}}if(void 0===H)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let D=O.loader||H;delete O.loader,delete O.srcSet;let A="__next_img_default"in D;if(A){if("custom"===a.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:r,...i}=t;return e(i)}}if(C){"fill"===C&&(_=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(x={...x,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!u&&(u=t)}let G="",L=o(b),J=o(j);if("object"==typeof(r=d)&&(s(r)||void 0!==r.src)){let e=s(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,c=e.blurHeight,k=k||e.blurDataURL,G=e.src,!_){if(L||J){if(L&&!J){let t=L/e.width;J=Math.round(e.height*t)}else if(!L&&J){let t=J/e.height;L=Math.round(e.width*t)}}else L=e.width,J=e.height}}let T=!h&&("lazy"===g||void 0===g);(!(d="string"==typeof d?d:G)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,T=!1),a.unoptimized&&(f=!0),A&&d.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),h&&(S="high");let W=o(m),V=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:N,objectPosition:E}:{},M?{}:{color:"transparent"},x),U=B||"empty"===y?null:"blur"===y?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:L,heightInt:J,blurWidth:l,blurHeight:c,blurDataURL:k||"",objectFit:V.objectFit})+'")':'url("'+y+'")',X=U?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:U}:{},Y=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:s,sizes:o,loader:a}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,o),d=l.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:l.map((e,i)=>a({config:t,src:r,quality:s,width:e})+" "+("w"===c?e:i+1)+c).join(", "),src:a({config:t,src:r,quality:s,width:l[d]})}}({config:a,src:d,unoptimized:f,width:L,quality:W,sizes:u,loader:D});return{props:{...O,loading:T?"lazy":g,fetchPriority:S,width:L,height:J,decoding:"async",className:p,style:{...V,...X},sizes:Y.sizes,srcSet:Y.srcSet,src:w||Y.src},meta:{unoptimized:f,priority:h,placeholder:y,fill:_}}}},9919:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:s,objectFit:o}=e,a=i?40*i:t,l=n?40*n:r,c=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5666:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return a}});let i=r(8754),n=r(7367),s=r(6541),o=i._(r(6663));function a(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/2025-conf/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=s.Image},6663:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},1852:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var i=r(5893),n=r(8693),s=r.n(n),o=r(9008),a=r.n(o),l=r(5675),c=r.n(l),d=r(2003),u=r.n(d);function f(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a(),{children:[(0,i.jsx)("title",{children:"BrazilJS Conf 2025"}),(0,i.jsx)("meta",{name:"description",content:"BrazilJS is the biggest JavaScript conference in the world"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"icon",href:"/braziljs-conf-logo-transparente.png"})]}),(0,i.jsxs)("main",{className:"".concat(u().main," ").concat(s().className),children:[(0,i.jsxs)("div",{className:u().description,children:[(0,i.jsxs)("div",{className:u()["btns-container"],children:[(0,i.jsx)("a",{href:"https://conf.braziljs.org/BrazilJS%20Conf%202024-media-kit.pdf",target:"_blank",className:u()["like-a-button"],children:"Become early sponsor"}),(0,i.jsx)("a",{href:"https://www.braziljs.org/p/coc",target:"_blank",className:u()["like-a-button"],children:"Code Of Conduct"})]}),(0,i.jsx)("div",{children:(0,i.jsxs)("a",{href:"https://dex01.com.br",target:"_blank",rel:"noopener noreferrer",children:["By"," ","DEx01"]})})]}),(0,i.jsxs)("div",{className:u().center,children:[(0,i.jsx)(c(),{className:u().logo,src:"/braziljs-conf-logo-transparente.png",alt:"Next.js Logo",width:300,height:267,priority:!0}),"Comming soon"]}),(0,i.jsxs)("div",{className:u().grid,children:[(0,i.jsxs)("span",{href:"https://braziljs.org",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsxs)("a",{href:"https://braziljs.org",target:"_blank",children:[(0,i.jsxs)("h2",{children:["BrazilJS ",(0,i.jsx)("span",{children:"->"})]}),(0,i.jsxs)("p",{children:["News, articles, updates and more",(0,i.jsx)("br",{})]})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("a",{href:"https://dex01.com.br",target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsxs)("h2",{children:["DEx01 ",(0,i.jsx)("span",{children:"->"})]}),(0,i.jsx)("p",{children:"Get to know our company."})]})]}),(0,i.jsxs)("span",{className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)("h2",{children:"Social networks"}),(0,i.jsxs)("p",{children:[(0,i.jsx)("a",{href:"https://twitter.com/braziljs",target:"_blank",children:"X/Twitter"}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://www.instagram.com/brazil.js",target:"_blank",children:"Instagram"}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://www.linkedin.com/company/braziljs",target:"_blank",children:"LinkedIn"}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://www.facebook.com/braziljs",target:"_blank",children:"Facebook"}),(0,i.jsx)("br",{})]})]}),(0,i.jsxs)("a",{href:"https://youtube.com/braziljs",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsxs)("h2",{children:["Videos ",(0,i.jsx)("span",{children:"->"})]}),(0,i.jsx)("p",{children:"News of the week and all the talks from previous conferences."})]}),(0,i.jsxs)("span",{className:u().card,href:"https://dex01.com.br",target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)("h2",{children:"Previous Events"}),(0,i.jsxs)("p",{className:u().grid,children:[(0,i.jsx)("a",{href:"https://conf.braziljs.org",target:"_blank",children:"2024"}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://2019.braziljs.org",target:"_blank",children:"2019"}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://2018.braziljs.org",target:"_blank",children:"2018"}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://2017.braziljs.org",target:"_blank",children:"2017"}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://2016.braziljs.org",target:"_blank",children:"2016"}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://2015.braziljs.org",target:"_blank",children:"2015"}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://2014.braziljs.org",target:"_blank",children:"2014"}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://2013.braziljs.org",target:"_blank",children:"2013"}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://2012.braziljs.org",target:"_blank",children:"2012"}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://2011.braziljs.org",target:"_blank",children:"2011"}),(0,i.jsx)("br",{})]})]})]})]})]})}},8693:function(e){e.exports={style:{fontFamily:"'__Inter_0f0a97', '__Inter_Fallback_0f0a97'",fontStyle:"normal"},className:"__className_0f0a97"}},2003:function(e){e.exports={main:"Home_main__2uIek",description:"Home_description__zHUB6","like-a-button":"Home_like-a-button__S8zeb",code:"Home_code__BZK8z","btns-container":"Home_btns-container__WIGj9",grid:"Home_grid__vo_ES",card:"Home_card__HIlp_",center:"Home_center__Y_rV4",logo:"Home_logo__ZEOng",content:"Home_content__Qnbja",rotate:"Home_rotate__x60Ft"}},9008:function(e,t,r){e.exports=r(7828)},5675:function(e,t,r){e.exports=r(5666)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);