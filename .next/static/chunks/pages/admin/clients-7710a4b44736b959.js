(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8053],{34286:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/clients",function(){return e(24537)}])},74114:function(n,t,e){"use strict";var r=e(35666),i=e.n(r),c=e(62286),o=e.n(c),a=e(28367),u=e(6154);function s(n,t,e,r,i,c,o){try{var a=n[c](o),u=a.value}catch(s){return void e(s)}a.done?t(u):Promise.resolve(u).then(r,i)}var l,d=(l=i().mark((function n(t){var e,r,c;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=o().get(t),void 0!==(r={Authorization:e.admintoken}).Authorization){n.next=6;break}return n.abrupt("return",!1);case 6:return n.next=8,(0,u.Z)({url:a.v3,method:"GET",headers:r});case 8:if((c=n.sent).data&&"Unauthorized"!=c.data){n.next=11;break}return n.abrupt("return",!1);case 11:return n.abrupt("return",c.data);case 12:case"end":return n.stop()}}),n)})),function(){var n=this,t=arguments;return new Promise((function(e,r){var i=l.apply(n,t);function c(n){s(i,e,r,c,o,"next",n)}function o(n){s(i,e,r,c,o,"throw",n)}c(void 0)}))});t.Z=d},55886:function(n,t,e){"use strict";var r=e(35666),i=e.n(r),c=e(85893),o=(e(67294),e(11163)),a=e(74114),u=e(85004);function s(n,t,e,r,i,c,o){try{var a=n[c](o),u=a.value}catch(s){return void e(s)}a.done?t(u):Promise.resolve(u).then(r,i)}function l(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function d(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){l(n,t,e[t])}))}return n}t.Z=function(n){var t,e=function(t){return(0,c.jsx)(n,d({},t))};return e.getInitialProps=(t=i().mark((function t(e){var r,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.getInitialProps){t.next=6;break}return t.next=3,n.getInitialProps(e);case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0={};case 7:return r=t.t0,t.next=10,(0,a.Z)(e);case 10:if(c=t.sent){t.next=14;break}return e.res?(e.res.writeHead(302,{Location:u.Z.AdminloginPagePath}),e.res.end()):o.default.push(u.Z.AdminloginPagePath),t.abrupt("return",d({},r,{userData:null}));case 14:return t.abrupt("return",d({},r,{userData:c}));case 15:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,i){var c=t.apply(n,e);function o(n){s(c,r,i,o,a,"next",n)}function a(n){s(c,r,i,o,a,"throw",n)}o(void 0)}))}),Object.assign(e,n)}},16862:function(n,t,e){"use strict";e.d(t,{M:function(){return a},A:function(){return u}});var r=e(78764),i=e.n(r),c=e(77630),o=e.n(c),a=o()(i().mixin({customClass:{confirmButton:"btn btn-label-success btn-wide mx-1",cancelButton:"btn btn-label-danger btn-wide mx-1"},buttonsStyling:!1})),u=o()(i().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}))},24537:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return w}});var r=e(85893),i=e(67294),c=e(59417),o=e(35666),a=e.n(o),u=e(6154),s=e(16862),l=e(11163),d=e(60716),h=e(28367),f=e(62286),p=e(99603),x=e(74544);function v(n,t,e,r,i,c,o){try{var a=n[c](o),u=a.value}catch(s){return void e(s)}a.done?t(u):Promise.resolve(u).then(r,i)}function m(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,i=!1,c=void 0;try{for(var o,a=n[Symbol.iterator]();!(r=(o=a.next()).done)&&(e.push(o.value),!t||e.length!==t);r=!0);}catch(u){i=!0,c=u}finally{try{r||null==a.return||a.return()}finally{if(i)throw c}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var j=e(44364),b=function(){var n=(0,l.useRouter)(),t={Authorization:(0,f.parseCookies)().admintoken},e=m(i.useState(10),2),o=e[0],b=e[1],g=m(i.useState([]),2),y=g[0],w=g[1],k=m(i.useState(1),2),C=k[0],P=k[1],A=m(i.useState(10),2),S=A[0],_=A[1],O=m(i.useState(),2),E=O[0],N=O[1],z=m(i.useState(.001),2),X=z[0],Z=z[1],I=m(i.useState(""),2),L=I[0],B=I[1],T=m(i.useState(1),2),J=T[0],D=T[1];i.useEffect((function(){u.Z.get(h.Pe+"/".concat(C,"/").concat(o,"/search:").concat(L,"/sort:").concat(J),{headers:t}).then((function(n){w(n.data.all),0==o||0==n.data.length?_(1):_(Math.ceil(n.data.length/o))})).catch((function(n){return console.log(n)}))}),[o,L,C,J,X]),i.useEffect((function(){j(E)||u.Z.delete(h.qO+"/".concat(E),{headers:t}).then((function(n){Z(Math.random())})).catch((function(n){return console.log(n)}))}),[E]);var M,G={activeLinkNumber:C,paginationLength:S,chooseActiveLinkNumber:function(n){P(n)}},Y=function(n){return(0,r.jsx)(c.zx,{variant:"text-danger",onClick:function(){s.M.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){t.isConfirmed&&(N(n.id),s.M.fire("Deleted!","That Client has been deleted.","success"))}))},pill:!0,size:"sm",children:"delete"})},q=(M=a().mark((function n(e,r){var i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i={active:e.target.checked},n.next=3,u.Z.put(h.tY+"/".concat(r),i,{headers:t}).then((function(n){s.A.fire({icon:"success",title:"Success!"})})).catch((function(n){console.log(n)}));case 3:case"end":return n.stop()}}),n)})),function(){var n=this,t=arguments;return new Promise((function(e,r){var i=M.apply(n,t);function c(n){v(i,e,r,c,o,"next",n)}function o(n){v(i,e,r,c,o,"throw",n)}c(void 0)}))}),F=function(n){return 1==n.icon?(0,r.jsx)(p.G,{icon:x.onQ}):(0,r.jsx)(p.G,{icon:x.gc2})};return(0,r.jsxs)(c.kr,{children:[(0,r.jsx)(c.kr.Header,{children:(0,r.jsxs)(c.kr.Addon,{children:[(0,r.jsx)(c.zx,{variant:"primary",onClick:function(){return n.push("/admin/clients/client")},children:" Create Client "}),(0,r.jsx)(c.zx,{variant:"text-primary",onClick:function(){return n.push("/admin/clients/contact")},children:" Contacts "})]})}),(0,r.jsxs)(c.kr.Body,{className:"pb-0",children:[(0,r.jsxs)(c.X2,{children:[(0,r.jsx)(c.JX,{md:1,children:(0,r.jsxs)(c.l0.Select,{id:"size_id",onChange:function(n){return b(parseInt(n.target.value))},defaultValue:"10",size:"lg",children:[(0,r.jsx)("option",{value:"10",children:"10"}),(0,r.jsx)("option",{value:"25",children:"25"}),(0,r.jsx)("option",{value:"50",children:"50"}),(0,r.jsx)("option",{value:"100",children:"100"}),(0,r.jsx)("option",{value:"0",children:"All"})]})}),(0,r.jsx)(c.JX,{md:9}),(0,r.jsx)(c.JX,{md:2,children:(0,r.jsx)(c._b,{controlId:"search_id",label:"Search",children:(0,r.jsx)(c.l0.Control,{type:"text",onChange:function(n){return B(n.target.value)},placeholder:"name",size:"lg"})})})]}),(0,r.jsx)(c.X2,{children:(0,r.jsx)(c.JX,{md:12,children:(0,r.jsx)("p",{})})}),(0,r.jsxs)(c.iA,{responsive:!0,striped:!0,hover:!0,children:[(0,r.jsx)("thead",{className:"table-primary",children:(0,r.jsxs)("tr",{children:[(0,r.jsxs)("th",{scope:"col",onClick:function(){D(-1==J?1:-1)},children:["Company ",(0,r.jsx)(F,{icon:J})]}),(0,r.jsx)("th",{scope:"col",children:"Contact"}),(0,r.jsx)("th",{scope:"col",children:"Email"}),(0,r.jsx)("th",{scope:"col",children:"Phone"}),(0,r.jsx)("th",{scope:"col",children:"Groups"}),(0,r.jsx)("th",{scope:"col",children:"Date Created"}),(0,r.jsx)("th",{scope:"col",children:"Active"}),(0,r.jsx)("th",{scope:"col",children:"Action"})]})}),(0,r.jsx)("tbody",{children:y.map((function(t){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:t.company}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:t.phonenumber}),(0,r.jsx)("td",{children:t.groups.toString()}),(0,r.jsx)("td",{children:t.created_at}),(0,r.jsx)("td",{children:(0,r.jsx)(c.l0.Switch,{id:t._id,onChange:function(n){return q(n,t._id)},defaultChecked:t.active})}),(0,r.jsxs)("td",{children:[(0,r.jsx)(c.zx,{variant:"text-primary",onClick:function(){return n.push({pathname:"/admin/clients/[id]",query:{id:t._id}})},pill:!0,size:"sm",children:"view / Edit"}),(0,r.jsx)(Y,{id:t._id})]})]},t._id)}))})]})]}),(0,r.jsx)(c.kr.Footer,{children:(0,r.jsxs)(c.X2,{children:[(0,r.jsx)(c.JX,{md:9}),(0,r.jsx)(c.JX,{md:3,children:(0,r.jsx)(d.Z,{pagination:G})})]})})]})},g=e(55886),y=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(c.X2,{children:(0,r.jsx)(c.JX,{md:12,children:(0,r.jsx)(b,{})})})})};y.pageTitle="Client",y.activeLink="admin/client";var w=(0,g.Z)(y)},60716:function(n,t,e){"use strict";var r=e(85893),i=e(59417),c=e(67294);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,i=!1,c=void 0;try{for(var o,a=n[Symbol.iterator]();!(r=(o=a.next()).done)&&(e.push(o.value),!t||e.length!==t);r=!0);}catch(u){i=!0,c=u}finally{try{r||null==a.return||a.return()}finally{if(i)throw c}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.Z=function(n){var t=a(c.useState(n.pagination.activeLinkNumber),2),e=t[0],u=t[1],s=n.pagination.paginationLength,l=[];return e>s&&u(s),e<1&&u(1),l=s<=7?Array.from({length:s},(function(n,t){return t+1})):e<=4?Array.from({length:7},(function(n,t){return t+1})):s-e>3?Array.from({length:7},(function(n,t){return e+t-3})):Array.from({length:7},(function(n,t){return s+t-6})),c.useEffect((function(){n.pagination.chooseActiveLinkNumber(e)}),[e]),c.useEffect((function(){u(n.pagination.activeLinkNumber)}),[n.pagination.activeLinkNumber]),(0,r.jsxs)(i.tl,function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){o(n,t,e[t])}))}return n}({},n,{children:[(0,r.jsx)(i.tl.Item,{onClick:function(){return u(e-1)},children:"PREV"}),l.map((function(n){return(0,r.jsx)(i.tl.Item,{active:n===e,onClick:function(){u(n)},children:n},n)})),(0,r.jsx)(i.tl.Item,{onClick:function(){return u(e+1)},children:"Next"})]}))}}},function(n){n.O(0,[1039,9774,2888,179],(function(){return t=34286,n(n.s=t);var t}));var t=n.O();_N_E=t}]);