(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4198],{93523:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/setting/currency",function(){return e(13636)}])},74114:function(n,t,e){"use strict";var r=e(35666),i=e.n(r),o=e(62286),c=e.n(o),u=e(28367),a=e(6154);function s(n,t,e,r,i,o,c){try{var u=n[o](c),a=u.value}catch(s){return void e(s)}u.done?t(a):Promise.resolve(a).then(r,i)}var l,f=(l=i().mark((function n(t){var e,r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=c().get(t),void 0!==(r={Authorization:e.admintoken}).Authorization){n.next=6;break}return n.abrupt("return",!1);case 6:return n.next=8,(0,a.Z)({url:u.v3,method:"GET",headers:r});case 8:if((o=n.sent).data&&"Unauthorized"!=o.data){n.next=11;break}return n.abrupt("return",!1);case 11:return n.abrupt("return",o.data);case 12:case"end":return n.stop()}}),n)})),function(){var n=this,t=arguments;return new Promise((function(e,r){var i=l.apply(n,t);function o(n){s(i,e,r,o,c,"next",n)}function c(n){s(i,e,r,o,c,"throw",n)}o(void 0)}))});t.Z=f},55886:function(n,t,e){"use strict";var r=e(35666),i=e.n(r),o=e(85893),c=(e(67294),e(11163)),u=e(74114),a=e(85004);function s(n,t,e,r,i,o,c){try{var u=n[o](c),a=u.value}catch(s){return void e(s)}u.done?t(a):Promise.resolve(a).then(r,i)}function l(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function f(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){l(n,t,e[t])}))}return n}t.Z=function(n){var t,e=function(t){return(0,o.jsx)(n,f({},t))};return e.getInitialProps=(t=i().mark((function t(e){var r,o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.getInitialProps){t.next=6;break}return t.next=3,n.getInitialProps(e);case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0={};case 7:return r=t.t0,t.next=10,(0,u.Z)(e);case 10:if(o=t.sent){t.next=14;break}return e.res?(e.res.writeHead(302,{Location:a.Z.AdminloginPagePath}),e.res.end()):c.default.push(a.Z.AdminloginPagePath),t.abrupt("return",f({},r,{userData:null}));case 14:return t.abrupt("return",f({},r,{userData:o}));case 15:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,i){var o=t.apply(n,e);function c(n){s(o,r,i,c,u,"next",n)}function u(n){s(o,r,i,c,u,"throw",n)}c(void 0)}))}),Object.assign(e,n)}},16862:function(n,t,e){"use strict";e.d(t,{M:function(){return u},A:function(){return a}});var r=e(78764),i=e.n(r),o=e(77630),c=e.n(o),u=c()(i().mixin({customClass:{confirmButton:"btn btn-label-success btn-wide mx-1",cancelButton:"btn btn-label-danger btn-wide mx-1"},buttonsStyling:!1})),a=c()(i().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}))},13636:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return v}});var r=e(85893),i=e(67294),o=e(59417),c=e(6154),u=e(16862),a=e(11163),s=e(60716),l=e(28367),f=e(62286);function d(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,i=!1,o=void 0;try{for(var c,u=n[Symbol.iterator]();!(r=(c=u.next()).done)&&(e.push(c.value),!t||e.length!==t);r=!0);}catch(a){i=!0,o=a}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h=e(44364),m=function(){var n=(0,a.useRouter)(),t={Authorization:(0,f.parseCookies)().admintoken},e=d(i.useState([]),2),m=e[0],p=e[1],x=d(i.useState(10),2),v=x[0],b=x[1],j=d(i.useState(1),2),y=j[0],g=j[1],w=d(i.useState(10),2),k=w[0],P=w[1],A=d(i.useState(),2),C=A[0],O=A[1],S=d(i.useState(.001),2),E=S[0],N=S[1],_=d(i.useState(),2),X=_[0],z=_[1],Z=d(i.useState(.001),2),I=Z[0],L=Z[1];i.useEffect((function(){c.Z.get(l.cH+"/".concat(y,"/").concat(v),{headers:t}).then((function(n){p(n.data.all),0==v||0==n.data.length?P(1):P(Math.ceil(n.data.length/v))})).catch((function(n){return console.log(n)}))}),[v,y,E,I]),i.useEffect((function(){h(C)||c.Z.delete(l.Ac+"/".concat(C),{headers:t}).then((function(n){N(Math.random())})).catch((function(n){return console.log(n)}))}),[C]),i.useEffect((function(){h(X)||c.Z.put(l.mC+"/".concat(X),{headers:t}).then((function(n){L(Math.random())})).catch((function(n){return console.log(n)}))}),[X]);var B={activeLinkNumber:y,paginationLength:k,chooseActiveLinkNumber:function(n){g(n)}},J=function(n){return(0,r.jsx)(o.zx,{variant:"text-danger",onClick:function(){u.M.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){t.isConfirmed&&(O(n.id),u.M.fire("Deleted!","Successfully deleted.","success"))}))},pill:!0,size:"sm",children:"delete"})},T=function(n,t){if(!n)return(0,r.jsx)(o.zx,{variant:"text-info",onClick:function(){z(t)},pill:!0,size:"sm",children:"default"})};return(0,r.jsxs)(o.kr,{children:[(0,r.jsxs)(o.kr.Body,{className:"pb-0",children:[(0,r.jsxs)(o.X2,{children:[(0,r.jsx)(o.JX,{md:3,children:(0,r.jsx)(o.zx,{variant:"primary",onClick:function(){return n.push("/admin/setting/currency/new")},children:" New Currency "})}),(0,r.jsx)(o.JX,{md:1,children:(0,r.jsxs)(o.l0.Select,{id:"sizeID",onChange:function(n){return b(parseInt(n.target.value))},defaultValue:"10",size:"lg",children:[(0,r.jsx)("option",{value:"10",children:"10"}),(0,r.jsx)("option",{value:"25",children:"25"}),(0,r.jsx)("option",{value:"50",children:"50"}),(0,r.jsx)("option",{value:"100",children:"100"}),(0,r.jsx)("option",{value:"0",children:"All"})]})}),(0,r.jsx)(o.JX,{md:6}),(0,r.jsx)(o.JX,{md:2})]}),(0,r.jsx)(o.X2,{children:(0,r.jsx)(o.JX,{md:12,children:(0,r.jsx)("p",{})})}),(0,r.jsxs)(o.iA,{responsive:!0,striped:!0,hover:!0,children:[(0,r.jsx)("thead",{className:"table-primary",children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{scope:"col",children:"* Name"}),(0,r.jsx)("th",{scope:"col",children:"* Symbol"}),(0,r.jsx)("th",{scope:"col",children:"Action"})]})}),(0,r.jsx)("tbody",{children:m.map((function(t){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:t.name}),(0,r.jsx)("td",{children:t.symbol}),(0,r.jsx)("td",{children:(0,r.jsxs)("div",{children:[(0,r.jsx)(o.zx,{variant:"text-primary",onClick:function(){return n.push({pathname:"/admin/setting/currency/[id]",query:{id:t._id}})},pill:!0,size:"sm",children:"view"}),(0,r.jsx)(J,{id:t._id}),T(t.isdefault,t._id)]})})]},t._id)}))})]})]}),(0,r.jsx)(o.kr.Footer,{children:(0,r.jsxs)(o.X2,{children:[(0,r.jsx)(o.JX,{md:9}),(0,r.jsx)(o.JX,{md:3,children:(0,r.jsx)(s.Z,{pagination:B})})]})})]})},p=e(55886),x=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.X2,{children:(0,r.jsx)(o.JX,{md:12,children:(0,r.jsx)(m,{})})})})};x.pageTitle="Currency",x.activeLink="admin/setting/currency";var v=(0,p.Z)(x)},60716:function(n,t,e){"use strict";var r=e(85893),i=e(59417),o=e(67294);function c(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function u(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,i=!1,o=void 0;try{for(var c,u=n[Symbol.iterator]();!(r=(c=u.next()).done)&&(e.push(c.value),!t||e.length!==t);r=!0);}catch(a){i=!0,o=a}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.Z=function(n){var t=u(o.useState(n.pagination.activeLinkNumber),2),e=t[0],a=t[1],s=n.pagination.paginationLength,l=[];return e>s&&a(s),e<1&&a(1),l=s<=7?Array.from({length:s},(function(n,t){return t+1})):e<=4?Array.from({length:7},(function(n,t){return t+1})):s-e>3?Array.from({length:7},(function(n,t){return e+t-3})):Array.from({length:7},(function(n,t){return s+t-6})),o.useEffect((function(){n.pagination.chooseActiveLinkNumber(e)}),[e]),o.useEffect((function(){a(n.pagination.activeLinkNumber)}),[n.pagination.activeLinkNumber]),(0,r.jsxs)(i.tl,function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){c(n,t,e[t])}))}return n}({},n,{children:[(0,r.jsx)(i.tl.Item,{onClick:function(){return a(e-1)},children:"PREV"}),l.map((function(n){return(0,r.jsx)(i.tl.Item,{active:n===e,onClick:function(){a(n)},children:n},n)})),(0,r.jsx)(i.tl.Item,{onClick:function(){return a(e+1)},children:"Next"})]}))}}},function(n){n.O(0,[1039,9774,2888,179],(function(){return t=93523,n(n.s=t);var t}));var t=n.O();_N_E=t}]);