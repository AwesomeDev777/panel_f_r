(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8121],{66969:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/setting/clientgroup/new",function(){return t(38224)}])},16862:function(n,e,t){"use strict";t.d(e,{M:function(){return u},A:function(){return c}});var r=t(78764),i=t.n(r),o=t(77630),a=t.n(o),u=a()(i().mixin({customClass:{confirmButton:"btn btn-label-success btn-wide mx-1",cancelButton:"btn btn-label-danger btn-wide mx-1"},buttonsStyling:!1})),c=a()(i().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}))},38224:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return v}});var r=t(85893),i=t(67294),o=t(59417),a=t(35666),u=t.n(a),c=t(6154),s=t(16862),l=t(62286),d=t(28367);function f(n,e,t,r,i,o,a){try{var u=n[o](a),c=u.value}catch(s){return void t(s)}u.done?e(c):Promise.resolve(c).then(r,i)}function h(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,i=!1,o=void 0;try{for(var a,u=n[Symbol.iterator]();!(r=(a=u.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=t(44364),p=function(){var n={Authorization:(0,l.parseCookies)().admintoken},e=h(i.useState({}),2),t=e[0],a=e[1],p=h(i.useState(""),2),x=p[0],v=p[1],w=h(i.useState({name:""}),2),b=w[0],j=w[1];i.useEffect((function(){a({name:x})}),[x]);var y,k=(y=u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.post(d.t$,t,{headers:n}).then((function(n){s.A.fire({icon:"success",title:"Success!"}),j({name:""})})).catch((function(n){var e={name:""};!m(n.response.data.name)&&(e.name=n.response.data.name),j(e)}));case 2:case"end":return e.stop()}}),e)})),function(){var n=this,e=arguments;return new Promise((function(t,r){var i=y.apply(n,e);function o(n){f(i,t,r,o,a,"next",n)}function a(n){f(i,t,r,o,a,"throw",n)}o(void 0)}))});return(0,r.jsx)(o.X2,{children:(0,r.jsx)(o.JX,{md:"6",children:(0,r.jsxs)(o.kr,{children:[(0,r.jsx)(o.kr.Header,{bordered:!0,children:(0,r.jsx)(o.kr.Addon,{children:(0,r.jsx)("h4",{children:"* New Client Group"})})}),(0,r.jsx)(o.kr.Body,{children:(0,r.jsxs)(o.l0.Group,{controlId:"nameID",children:[(0,r.jsx)(o.l0.Label,{children:"* Client Group Name"}),(0,r.jsx)(o.l0.Control,{onChange:function(n){return v(n.target.value)},type:"text",size:"lg"}),(0,r.jsx)("p",{style:{color:"red"},children:b.name})]})}),(0,r.jsx)(o.kr.Footer,{children:(0,r.jsx)(o.kr.Footer,{bordered:!0,align:"end",children:(0,r.jsx)(o.zx,{onClick:k,type:"submit",variant:"primary",children:"Submit"})})})]})})})},x=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.X2,{children:(0,r.jsx)(o.JX,{md:12,children:(0,r.jsx)(p,{})})})})};x.pageTitle="New Client Group",x.activeLink="admin/setting/clientgroup/new";var v=x}},function(n){n.O(0,[1039,9774,2888,179],(function(){return e=66969,n(n.s=e);var e}));var e=n.O();_N_E=e}]);