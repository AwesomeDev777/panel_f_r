(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6964],{58860:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return t(50264)}])},74114:function(e,r,t){"use strict";var n=t(35666),o=t.n(n),i=t(62286),a=t.n(i),s=t(28367),c=t(6154);function l(e,r,t,n,o,i,a){try{var s=e[i](a),c=s.value}catch(l){return void t(l)}s.done?r(c):Promise.resolve(c).then(n,o)}var u,d=(u=o().mark((function e(r){var t,n,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a().get(r),void 0!==(n={Authorization:t.admintoken}).Authorization){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,(0,c.Z)({url:s.v3,method:"GET",headers:n});case 8:if((i=e.sent).data&&"Unauthorized"!=i.data){e.next=11;break}return e.abrupt("return",!1);case 11:return e.abrupt("return",i.data);case 12:case"end":return e.stop()}}),e)})),function(){var e=this,r=arguments;return new Promise((function(t,n){var o=u.apply(e,r);function i(e){l(o,t,n,i,a,"next",e)}function a(e){l(o,t,n,i,a,"throw",e)}i(void 0)}))});r.Z=d},55886:function(e,r,t){"use strict";var n=t(35666),o=t.n(n),i=t(85893),a=(t(67294),t(11163)),s=t(74114),c=t(85004);function l(e,r,t,n,o,i,a){try{var s=e[i](a),c=s.value}catch(l){return void t(l)}s.done?r(c):Promise.resolve(c).then(n,o)}function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){u(e,r,t[r])}))}return e}r.Z=function(e){var r,t=function(r){return(0,i.jsx)(e,d({},r))};return t.getInitialProps=(r=o().mark((function r(t){var n,i;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e.getInitialProps){r.next=6;break}return r.next=3,e.getInitialProps(t);case 3:r.t0=r.sent,r.next=7;break;case 6:r.t0={};case 7:return n=r.t0,r.next=10,(0,s.Z)(t);case 10:if(i=r.sent){r.next=14;break}return t.res?(t.res.writeHead(302,{Location:c.Z.AdminloginPagePath}),t.res.end()):a.default.push(c.Z.AdminloginPagePath),r.abrupt("return",d({},n,{userData:null}));case 14:return r.abrupt("return",d({},n,{userData:i}));case 15:case"end":return r.stop()}}),r)})),function(){var e=this,t=arguments;return new Promise((function(n,o){var i=r.apply(e,t);function a(e){l(i,n,o,a,s,"next",e)}function s(e){l(i,n,o,a,s,"throw",e)}a(void 0)}))}),Object.assign(t,e)}},50264:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return Z}});var n=t(85893),o=t(67294),i=t(55886),a=t(59417),s=t(45697),c=t.n(s);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=(0,o.forwardRef)((function(e,r){var t=e.color,n=void 0===t?"currentColor":t,i=e.size,a=void 0===i?24:i,s=u(e,["color","size"]);return o.createElement("svg",l({ref:r,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),o.createElement("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"}))}));d.propTypes={color:c().string,size:c().oneOfType([c().string,c().number])},d.displayName="Activity";var f=d;function h(){return(h=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var y=(0,o.forwardRef)((function(e,r){var t=e.color,n=void 0===t?"currentColor":t,i=e.size,a=void 0===i?24:i,s=p(e,["color","size"]);return o.createElement("svg",h({ref:r,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),o.createElement("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),o.createElement("polyline",{points:"17 6 23 6 23 12"}))}));y.propTypes={color:c().string,size:c().oneOfType([c().string,c().number])},y.displayName="TrendingUp";var v=y;function g(){return(g=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function j(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=(0,o.forwardRef)((function(e,r){var t=e.color,n=void 0===t?"currentColor":t,i=e.size,a=void 0===i?24:i,s=j(e,["color","size"]);return o.createElement("svg",g({ref:r,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),o.createElement("polyline",{points:"23 18 13.5 8.5 8.5 13.5 1 6"}),o.createElement("polyline",{points:"17 18 23 18 23 12"}))}));m.propTypes={color:c().string,size:c().oneOfType([c().string,c().number])},m.displayName="TrendingDown";var b=m;function x(){return(x=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function O(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var w=(0,o.forwardRef)((function(e,r){var t=e.color,n=void 0===t?"currentColor":t,i=e.size,a=void 0===i?24:i,s=O(e,["color","size"]);return o.createElement("svg",x({ref:r,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),o.createElement("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),o.createElement("polyline",{points:"13 2 13 9 20 9"}))}));w.propTypes={color:c().string,size:c().oneOfType([c().string,c().number])},w.displayName="File";var k=w;function P(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function S(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){P(e,r,t[r])}))}return e}function T(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function E(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var N=function(e){var r=e.title,t=e.highlight,o=e.progress,i=e.variant,s=e.icon,c=T(e,["title","highlight","progress","variant","icon"]);return(0,n.jsxs)(a.UV,S({},c,{children:[(0,n.jsxs)(a.UV.Group,{children:[(0,n.jsx)(a.UV.Display,{children:(0,n.jsxs)(a.X2,{children:[(0,n.jsx)(a.JX,{md:2,children:s}),(0,n.jsx)(a.JX,{md:10,children:(0,n.jsx)(a.UV.Subtitle,{children:r})})]})}),(0,n.jsx)(a.UV.Addon,{children:(0,n.jsx)(a.UV.Subtitle,{children:t})})]}),(0,n.jsx)(a.ko,{striped:!0,now:o,variant:i})]}))},A=function(){var e=E(o.useState([{title:"Invoices Awaiting Payment",highlight:"2/2",progress:100,isProgress:!0,variant:"success",icon:(0,n.jsx)(f,{})},{title:"Converted Leads",highlight:"0/0",progress:0,isProgress:!0,variant:"danger",icon:(0,n.jsx)(v,{})},{title:"Projects In Progress",highlight:"2/3",progress:67,isProgress:!0,variant:"primary",icon:(0,n.jsx)(b,{})},{title:"Tasks Not Finished",highlight:"0/1",progress:0,isProgress:!0,variant:"danger",icon:(0,n.jsx)(k,{})}]),1)[0];return(0,n.jsx)(a.X2,{className:"g-2",children:e.map((function(e,r){return(0,n.jsx)(a.JX,{sm:"3",children:(0,n.jsx)(a.kr,{children:(0,n.jsx)(a.kr.Body,{children:(0,n.jsx)(N,{title:e.title,highlight:e.highlight,variant:e.variant,icon:e.icon,progress:e.progress})})})},r)}))})},F=t(99603),I=t(74544);function z(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function L(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var X=function(e){var r=(0,a.Fg)().resolvedTheme,t=L(o.useState({theme:{mode:r,palette:"palette1"},chart:{background:"transparent"},plotOptions:{bar:{horizontal:!1,columnWidth:"55%"}},dataLabels:{enabled:!1},colors:["#F0E68C","#FF69B4"],stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},fill:{opacity:1},tooltip:{y:{formatter:function(e){return"$ ".concat(e)}}}}),2),i=(t[0],t[1]);return o.useEffect((function(){i((function(e){return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){z(e,r,t[r])}))}return e}({},e,{mode:r,palette:"palette1"})}))}),[r]),(0,n.jsx)(n.Fragment,{})},D=(new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}),function(){L(o.useState({title:"Payment Records"}),1)[0];var e=L(o.useState([{name:"This Week Payment",data:[69,25,10,15,58,63,60]},{name:"Last Week Payment",data:[85,101,98,87,105,91,114]}]),1)[0];return(0,n.jsxs)(a.kr,{children:[(0,n.jsxs)(a.kr.Header,{children:[(0,n.jsx)(a.kr.Icon,{children:(0,n.jsx)(F.G,{icon:I.hEy})}),(0,n.jsx)(a.kr.Title,{children:"Payment Record"})]}),(0,n.jsx)(a.kr.Body,{children:(0,n.jsx)(X,{series:e})})]})});function J(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function C(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var _=function(e){var r=(0,a.Fg)().resolvedTheme,t=C(o.useState({theme:{mode:r,palette:"palette1"},chart:{background:"transparent"},stroke:{colors:["dark"===r?"#424242":"#fff"]},labels:["Not Started","In Progress","On Hold","Cancelled","Finished"],colors:["#444444","#2196f3","#ff3333","#ffd700","#4caf50"],tooltip:{fillSeriesColor:!1,y:{formatter:function(e){return B.format(e)}}},legend:{show:!1},dataLabels:{enabled:!1}}),2),i=(t[0],t[1]);return o.useEffect((function(){i((function(e){return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){J(e,r,t[r])}))}return e}({},e,{mode:r,palette:"palette1",stroke:{colors:["dark"===r?"#424242":"#fff"]}})}))}),[r]),(0,n.jsx)(n.Fragment,{})},B=new Intl.NumberFormat("en-US",{minimumFractionDigits:0}),U=function(){var e=C(o.useState([(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Jx,{type:"dot",variant:"dark"})," 10% Not Started"]}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Jx,{type:"dot",variant:"success"})," 10% In Progress"]}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Jx,{type:"dot",variant:"danger"})," 0% On Hold"]}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Jx,{type:"dot",variant:"warning"})," 30% Cancelled"]}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Jx,{type:"dot",variant:"primary"})," 50% Finished"]})]),1)[0],r=C(o.useState([1,1,0,3,5]),1)[0];return(0,n.jsxs)(a.kr,{children:[(0,n.jsxs)(a.kr.Header,{bordered:!0,children:[(0,n.jsx)(a.kr.Icon,{children:(0,n.jsx)(F.G,{icon:I.wK3})}),(0,n.jsx)(a.kr.Title,{children:"Statistics by Project Status"})]}),(0,n.jsx)(a.kr.Body,{children:(0,n.jsx)(a.X2,{children:(0,n.jsxs)(a.JX,{children:[(0,n.jsx)(_,{series:r}),(0,n.jsx)("div",{className:"d-flex justify-content-around mt-4",children:e.map((function(e,r){return(0,n.jsx)("span",{className:"text-muted",children:e},r)}))})]})})})]})};function H(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var W=function(){var e=H(o.useState([{color:"success",body:"Oleksandr - Added Created the project",footer:"Project Name: Test",header:"3 days ago"},{color:"primary",body:"Oleksandr - Added Edited the project",footer:"Project Name: Test",header:"3 days ago"},{color:"danger",body:"Oleksandr - Added Deleted the project",footer:"Project Name: Test",header:"3 days ago"},{color:"primary",body:"Oleksandr - Added Edited the contract",footer:"Project Name: Test",header:"3 minutes ago"},{color:"danger",body:"Oleksandr - Added Deleted the project",footer:"Project Name: Test",header:"3 minutes ago"},{color:"success",body:"Oleksandr - Added Created the project",footer:"Project Name: Test",header:"3 minutes ago"}]),1)[0];return(0,n.jsxs)(a.kr,{children:[(0,n.jsxs)(a.kr.Header,{children:[(0,n.jsx)(a.kr.Icon,{children:(0,n.jsx)(F.G,{icon:I.zDS})}),(0,n.jsx)(a.kr.Title,{children:"Latest Project Activity"})]}),(0,n.jsx)(a.kr.Body,{children:(0,n.jsx)(a.kr,{noMargin:!0,className:"h-100",children:(0,n.jsx)(a.kr.Body,{children:(0,n.jsx)(a.TY,{children:e.map((function(e,r){return(0,n.jsx)(a.TY.Item,{pin:(0,n.jsx)(a.Jx,{type:"dot",variant:e.color}),children:(0,n.jsxs)(a.kr,{children:[(0,n.jsx)(a.rL.Time,{children:e.header}),(0,n.jsx)(a.kr.Header,{children:(0,n.jsx)(a.rL.Text,{children:e.body})}),(0,n.jsx)(a.kr.Body,{children:(0,n.jsx)(a.rL.Text,{children:e.footer})})]})},r)}))})})})})]})},V=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.X2,{children:(0,n.jsx)(a.JX,{children:(0,n.jsx)(A,{})})}),(0,n.jsxs)(a.X2,{children:[(0,n.jsx)(a.JX,{md:"8",children:(0,n.jsx)(a.X2,{children:(0,n.jsx)(a.JX,{children:(0,n.jsx)(D,{})})})}),(0,n.jsxs)(a.JX,{md:"4",children:[(0,n.jsx)(U,{}),(0,n.jsx)(W,{})]})]})]})};V.pageTitle="Dashboard",V.activeLink="dashboard";var Z=(0,i.Z)(V)}},function(e){e.O(0,[9774,2888,179],(function(){return r=58860,e(e.s=r);var r}));var r=e.O();_N_E=r}]);