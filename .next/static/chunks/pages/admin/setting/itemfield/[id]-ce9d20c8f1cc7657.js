(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9788],{5763:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/setting/itemfield/[id]",function(){return t(23635)}])},16862:function(n,e,t){"use strict";t.d(e,{M:function(){return o},A:function(){return s}});var r=t(78764),i=t.n(r),a=t(77630),u=t.n(a),o=u()(i().mixin({customClass:{confirmButton:"btn btn-label-success btn-wide mx-1",cancelButton:"btn btn-label-danger btn-wide mx-1"},buttonsStyling:!1})),s=u()(i().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}))},23635:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return w}});var r=t(85893),i=t(67294),a=t(59417),u=t(35666),o=t.n(u),s=t(6154),c=t(16862),l=t(62286),d=t(28367);function f(n,e,t,r,i,a,u){try{var o=n[a](u),s=o.value}catch(c){return void t(c)}o.done?e(s):Promise.resolve(s).then(r,i)}function h(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function u(n){f(a,r,i,u,o,"next",n)}function o(n){f(a,r,i,u,o,"throw",n)}u(void 0)}))}}function m(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,i=!1,a=void 0;try{for(var u,o=n[Symbol.iterator]();!(r=(u=o.next()).done)&&(t.push(u.value),!e||t.length!==e);r=!0);}catch(s){i=!0,a=s}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=t(44364),v=function(n){var e={Authorization:(0,l.parseCookies)().admintoken},t=n.id,u=m(i.useState({name:"",slug:"",field:""}),2),f=u[0],v=u[1],x=m(i.useState({}),2),g=x[0],y=x[1],w=m(i.useState(""),2),j=w[0],b=w[1],k=m(i.useState(""),2),S=k[0],_=k[1],C={color:"red"};i.useEffect((function(){s.Z.get(d.A1+"/".concat(t),{headers:e}).then(h(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:b(e.data.name),_(e.data.slug);case 2:case"end":return n.stop()}}),n)})))).catch((function(n){var e={name:"",slug:"",field:""};e.field=n.response.data.field,v(e)}))}),[]),i.useEffect((function(){y({name:j,slug:S})}),[j,S]);var E=h(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.put(d.Cg+"/".concat(t),g,{headers:e}).then((function(n){c.A.fire({icon:"success",title:"Success!"}),v({name:"",slug:"",field:""})})).catch((function(n){var e={name:"",slug:"",field:""};!p(n.response.data.slug)&&(e.slug=n.response.data.slug),!p(n.response.data.name)&&(e.name=n.response.data.name),!p(n.response.data.field)&&(e.field=n.response.data.field),v(e)}));case 2:case"end":return n.stop()}}),n)})));return(0,r.jsx)(a.X2,{children:(0,r.jsx)(a.JX,{md:"6",children:(0,r.jsxs)(a.kr,{children:[(0,r.jsxs)(a.kr.Body,{children:[(0,r.jsxs)(a.l0.Group,{controlId:"nameID",children:[(0,r.jsx)(a.l0.Label,{children:"* Name"}),(0,r.jsx)(a.l0.Control,{onChange:function(n){return b(n.target.value)},defaultValue:j,type:"text",size:"lg"}),(0,r.jsx)("p",{style:C,children:f.name})]}),(0,r.jsxs)(a.l0.Group,{controlId:"slugID",children:[(0,r.jsx)(a.l0.Label,{children:"* Slug"}),(0,r.jsx)(a.l0.Control,{onChange:function(n){return _(n.target.value)},defaultValue:S,type:"text",size:"lg"}),(0,r.jsx)("p",{style:C,children:f.slug})]})]}),(0,r.jsx)(a.kr.Footer,{children:(0,r.jsx)(a.kr.Footer,{bordered:!0,align:"end",children:(0,r.jsx)(a.zx,{onClick:E,type:"submit",variant:"primary",children:"Submit"})})})]})})})},x=t(11163);function g(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,i=!1,a=void 0;try{for(var u,o=n[Symbol.iterator]();!(r=(u=o.next()).done)&&(t.push(u.value),!e||t.length!==e);r=!0);}catch(s){i=!0,a=s}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var y=function(){var n=(0,x.useRouter)(),e=g(i.useState(),2),t=e[0],u=e[1],o=function(){return void 0!==t?(0,r.jsx)(v,{id:n.query.id}):(0,r.jsx)("p",{})};return i.useEffect((function(){if(void 0!=n.query){var e=n.query.id;u(String(e))}}),[n.query]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.X2,{children:(0,r.jsx)(a.JX,{md:12,children:(0,r.jsx)(o,{})})})})};y.pageTitle="View ItemField",y.activeLink="admin/setting/itemfield/";var w=y}},function(n){n.O(0,[1039,9774,2888,179],(function(){return e=5763,n(n.s=e);var e}));var e=n.O();_N_E=e}]);