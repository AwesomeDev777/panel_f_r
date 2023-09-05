(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[971],{46654:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/contract/[id]",function(){return n(4989)}])},16862:function(t,e,n){"use strict";n.d(e,{M:function(){return c},A:function(){return u}});var r=n(78764),a=n.n(r),o=n(77630),i=n.n(o),c=i()(a().mixin({customClass:{confirmButton:"btn btn-label-success btn-wide mx-1",cancelButton:"btn btn-label-danger btn-wide mx-1"},buttonsStyling:!1})),u=i()(a().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}))},4989:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return g}});var r=n(85893),a=n(67294),o=n(59417),i=n(35666),c=n.n(i),u=n(6154),l=n(16862),s=n(62286),d=n(28367);function f(t,e,n,r,a,o,i){try{var c=t[o](i),u=c.value}catch(l){return void n(l)}c.done?e(u):Promise.resolve(u).then(r,a)}function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n(44364);var x=function(t){var e={Authorization:(0,s.parseCookies)().admintoken},n=t.id,i=h(a.useState({}),2),x=(i[0],i[1]),j=h(a.useState({}),2),p=j[0],v=j[1],g=h(a.useState(""),2),y=g[0],m=g[1],b=h(a.useState(""),2),S=b[0],C=b[1],w=h(a.useState(0),2),_=w[0],I=w[1],E=h(a.useState(""),2),k=E[0],D=E[1],X=h(a.useState(),2),z=X[0],L=X[1],A=h(a.useState(),2),G=A[0],N=A[1],P=h(a.useState(""),2),B=P[0],J=P[1],T=h(a.useState(""),2),Z=T[0],q=T[1],O=h(a.useState([]),2),V=O[0],F=O[1],M=h(a.useState([]),2),H=M[0],R=M[1],U=h(a.useState([]),2),Y=U[0],K=U[1];a.useEffect((function(){u.Z.get(d.fM+"/".concat(n),{headers:e}).then((function(t){m(t.data.client),C(t.data.subject),I(t.data.contract_value),D(t.data.contract_type),L(t.data.datestart),N(t.data.dateend),J(t.data.description)})).catch((function(t){console.log(t)}))}),[]),a.useEffect((function(){u.Z.get(d.U5,{headers:e}).then((function(t){F(t.data.data)})).catch((function(t){return console.log(t)}))}),[]),a.useEffect((function(){u.Z.get(d.Ol+"/1/0",{headers:e}).then((function(t){R(t.data.all)})).catch((function(t){return console.log(t)}))}),[]),a.useEffect((function(){u.Z.get(d.IY+"/1/0",{headers:e}).then((function(t){K(t.data.all)})).catch((function(t){return console.log(t)}))}),[]),a.useEffect((function(){v({client:y,subject:S,contract_type:k,contract_value:_,datestart:z,dateend:G,project:Z,description:B})}),[y,S,k,_,z,G,Z,B]);var Q,W=(Q=c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.put(d.Eo+"/".concat(n),p,{headers:e}).then((function(t){l.A.fire({icon:"success",title:"Success!"}),x({})})).catch((function(t){console.log(t)}));case 2:case"end":return t.stop()}}),t)})),function(){var t=this,e=arguments;return new Promise((function(n,r){var a=Q.apply(t,e);function o(t){f(a,n,r,o,i,"next",t)}function i(t){f(a,n,r,o,i,"throw",t)}o(void 0)}))}),$=function(t){return String(t).slice(0,9)};return(0,r.jsx)(o.X2,{children:(0,r.jsx)(o.JX,{md:"6",children:(0,r.jsxs)(o.kr,{children:[(0,r.jsx)(o.kr.Header,{bordered:!0,children:(0,r.jsx)(o.kr.Addon,{children:(0,r.jsx)("h4",{children:"* Contract Information"})})}),(0,r.jsx)(o.kr.Body,{children:(0,r.jsx)(o.X2,{children:(0,r.jsx)(o.JX,{children:(0,r.jsxs)("div",{className:"d-grid gap-3",children:[(0,r.jsxs)(o.l0.Group,{controlId:"clientID",children:[(0,r.jsx)(o.l0.Label,{children:"*Client"}),(0,r.jsx)(o.l0.Select,{onChange:function(t){return m(t.target.value)},size:"lg",children:V.map((function(t){return(0,r.jsx)("option",{value:t._id,children:t.company},t._id)}))})]}),(0,r.jsxs)(o.l0.Group,{controlId:"subjectID",children:[(0,r.jsx)(o.l0.Label,{children:"*Subject"}),(0,r.jsx)(o.l0.Control,{onChange:function(t){return C(t.target.value)},defaultValue:S,type:"text",size:"lg"})]}),(0,r.jsxs)(o.l0.Group,{controlId:"contractvalueID",children:[(0,r.jsx)(o.l0.Label,{children:"*Contract value"}),(0,r.jsx)(o.l0.Control,{onChange:function(t){return I(parseInt(t.target.value))},value:_,type:"Number",size:"lg"})]}),(0,r.jsxs)(o.l0.Group,{controlId:"contracttypeID",children:[(0,r.jsx)(o.l0.Label,{children:"*Contract type"}),(0,r.jsx)(o.l0.Select,{onChange:function(t){return D(t.target.value)},size:"lg",children:Y.map((function(t){return(0,r.jsx)("option",{value:t._id,children:t.name},t._id)}))})]}),(0,r.jsxs)(o.l0.Group,{controlId:"projectID",children:[(0,r.jsx)(o.l0.Label,{children:"*Project"}),(0,r.jsxs)(o.l0.Select,{onChange:function(t){return q(t.target.value)},size:"lg",children:[(0,r.jsx)("option",{value:""}),H.map((function(t){return(0,r.jsx)("option",{value:t._id,children:t.name},t._id)}))]})]}),(0,r.jsxs)(o.X2,{children:[(0,r.jsx)(o.JX,{children:(0,r.jsxs)(o.l0.Group,{controlId:"startdateID",children:[(0,r.jsxs)(o.l0.Label,{children:["*Start Date : ",$(z)]}),(0,r.jsx)(o.l0.Control,{onChange:function(t){return L(new Date(t.target.value))},type:"date",size:"lg"})]})}),(0,r.jsx)(o.JX,{children:(0,r.jsxs)(o.l0.Group,{controlId:"enddateID",children:[(0,r.jsxs)(o.l0.Label,{children:["*End Date : ",$(G)]}),(0,r.jsx)(o.l0.Control,{onChange:function(t){return N(new Date(t.target.value))},type:"date",size:"lg"})]})})]}),(0,r.jsxs)(o.l0.Group,{controlId:"descriptionID",children:[(0,r.jsx)(o.l0.Label,{children:"*Description"}),(0,r.jsx)(o.l0.Control,{onChange:function(t){return J(t.target.value)},defaultValue:B,as:"textarea",rows:3})]})]})})})}),(0,r.jsx)(o.kr.Footer,{bordered:!0,align:"end",children:(0,r.jsx)(o.zx,{onClick:W,type:"submit",variant:"primary",children:"Submit"})})]})})})},j=n(11163);function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v=function(){var t=(0,j.useRouter)(),e=p(a.useState(),2),n=e[0],i=e[1],c=function(){return void 0!==n?(0,r.jsx)(x,{id:t.query.id}):(0,r.jsx)("p",{})};return a.useEffect((function(){if(void 0!=t.query){var e=t.query.id;i(String(e))}}),[t.query]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.X2,{children:(0,r.jsx)(o.JX,{md:12,children:(0,r.jsx)(c,{})})})})};v.pageTitle="View Contract",v.activeLink="admin/contract/";var g=v}},function(t){t.O(0,[1039,9774,2888,179],(function(){return e=46654,t(t.s=e);var e}));var e=t.O();_N_E=e}]);