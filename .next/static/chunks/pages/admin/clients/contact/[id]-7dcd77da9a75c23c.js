(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7627],{39805:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/clients/contact/[id]",function(){return t(38186)}])},16862:function(e,n,t){"use strict";t.d(n,{M:function(){return i},A:function(){return l}});var r=t(78764),a=t.n(r),o=t(77630),s=t.n(o),i=s()(a().mixin({customClass:{confirmButton:"btn btn-label-success btn-wide mx-1",cancelButton:"btn btn-label-danger btn-wide mx-1"},buttonsStyling:!1})),l=s()(a().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}))},38186:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var r=t(85893),a=t(67294),o=t(59417),s=t(35666),i=t.n(s),l=t(6154),u=t(16862),c=t(62286),d=t(12590),f=t(28367);function p(e,n,t,r,a,o,s){try{var i=e[o](s),l=i.value}catch(u){return void t(u)}i.done?n(l):Promise.resolve(l).then(r,a)}function h(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done)&&(t.push(s.value),!n||t.length!==n);r=!0);}catch(l){a=!0,o=l}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=t(44364),x=function(e){var n={Authorization:(0,c.parseCookies)().admintoken},t=e.id,s=h(a.useState({email:"",password:"",firstname:"",lastname:"",phonenumber:"",contact:""}),2),x=s[0],v=s[1],y={color:"red"},j=h(a.useState(""),2),b=j[0],g=j[1],w=h(a.useState(""),2),C=w[0],k=w[1],S=h(a.useState(""),2),E=S[0],I=S[1],z=h(a.useState(""),2),O=z[0],L=z[1],_=h(a.useState("none"),2),P=_[0],N=_[1],T=h(a.useState(""),2),A=(T[0],T[1]),D=h(a.useState(!1),2),B=D[0],G=D[1],V=h(a.useState({}),2),X=V[0],q=V[1],Z=h(a.useState("password"),2),R=Z[0],J=Z[1],F=h(a.useState(!0),2),M=F[0],H=F[1];a.useEffect((function(){l.Z.get(f.fq+"/".concat(t),{headers:n}).then((function(e){g(e.data.email),k(e.data.firstname),I(e.data.lastname),L(e.data.phonenumber),N(e.data.direction),G(e.data.isprimary)})).catch((function(e){var n={email:"",password:"",firstname:"",lastname:"",phonenumber:"",contact:""};n.contact=e.response.data.contact,v(n)}))}),[]),a.useEffect((function(){q({email:b,firstname:C,lastname:E,phonenumber:O,isprimary:B,direction:P})}),[b,C,E,O,P,B]),a.useEffect((function(){J(M?"password":"text")}),[M]);var W,K=(W=i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.put(f.tE+"/".concat(t),X,{headers:n}).then((function(e){u.A.fire({icon:"success",title:"Success!"}),v({email:"",password:"",firstname:"",lastname:"",phonenumber:"",contact:""})})).catch((function(e){var n={email:"",password:"",firstname:"",lastname:"",phonenumber:"",contact:""};!m(e.response.data.email)&&(n.email=e.response.data.email),!m(e.response.data.password)&&(n.password=e.response.data.password),!m(e.response.data.firstname)&&(n.firstname=e.response.data.firstname),!m(e.response.data.lastname)&&(n.lastname=e.response.data.lastname),!m(e.response.data.phonenumber)&&(n.phonenumber=e.response.data.phonenumber),v(n)}));case 2:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(t,r){var a=W.apply(e,n);function o(e){p(a,t,r,o,s,"next",e)}function s(e){p(a,t,r,o,s,"throw",e)}o(void 0)}))});return(0,r.jsxs)(o.kr,{children:[(0,r.jsxs)(o.kr.Body,{children:[(0,r.jsxs)(o.l0.Group,{controlId:"emailID",children:[(0,r.jsx)(o.l0.Label,{children:"*Email Address"}),(0,r.jsx)(o.l0.Control,{onChange:function(e){return g(e.target.value)},defaultValue:b,type:"email",size:"lg"}),(0,r.jsx)("p",{style:y,children:x.email})]}),(0,r.jsxs)(o.l0.Group,{controlId:"firstnameID",children:[(0,r.jsx)(o.l0.Label,{children:"*First Name"}),(0,r.jsx)(o.l0.Control,{onChange:function(e){return k(e.target.value)},defaultValue:C,type:"text",size:"lg"}),(0,r.jsx)("p",{style:y,children:x.firstname})]}),(0,r.jsxs)(o.l0.Group,{controlId:"lastnameID",children:[(0,r.jsx)(o.l0.Label,{children:"*Last Name"}),(0,r.jsx)(o.l0.Control,{onChange:function(e){return I(e.target.value)},defaultValue:E,type:"text",size:"lg"}),(0,r.jsx)("p",{style:y,children:x.lastname})]}),(0,r.jsxs)(o.l0.Group,{controlId:"phonenumberID",children:[(0,r.jsx)(o.l0.Label,{children:"*Phone Number"}),(0,r.jsx)(o.l0.Control,{onChange:function(e){return L(e.target.value)},defaultValue:O,type:"text",size:"lg"})]}),(0,r.jsx)("p",{}),(0,r.jsxs)(o.l0.Group,{controlId:"directionID",children:[(0,r.jsx)(o.l0.Label,{children:"*Direction"}),(0,r.jsxs)(o.l0.Select,{onChange:function(e){return N(e.target.value)},defaultValue:"none",size:"lg",children:[(0,r.jsx)("option",{value:"none",children:"System Default"}),(0,r.jsx)("option",{value:"ltr",children:"LTR"}),(0,r.jsx)("option",{value:"rtl",children:"RTL"})]})]}),(0,r.jsx)("p",{}),(0,r.jsxs)(o.l0.Group,{controlId:"passwordID",children:[(0,r.jsx)(o.l0.Label,{children:"*Password"}),(0,r.jsxs)(o.BZ,{children:[(0,r.jsx)(o.l0.Control,{type:R,onChange:function(e){return A(e.target.value)},size:"lg"}),(0,r.jsx)(o.zx,{variant:"outline-info",onClick:function(){return H(!M)},size:"lg",icon:!0,children:(0,r.jsx)(d.Z,{})})]}),(0,r.jsx)("p",{style:y,children:x.password})]}),(0,r.jsx)(o.l0.Check,{type:"checkbox",label:"Primary Contact",defaultChecked:B,onChange:function(e){return function(e){G(e.target.checked)}(e)}})]}),(0,r.jsx)(o.kr.Header,{children:(0,r.jsx)(o.zx,{onClick:K,type:"submit",variant:"primary",children:"Submit"})})]})},v=t(11163);function y(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done)&&(t.push(s.value),!n||t.length!==n);r=!0);}catch(l){a=!0,o=l}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var j=function(){var e=(0,v.useRouter)(),n=y(a.useState(),2),t=n[0],s=n[1],i=function(){return void 0!==t?(0,r.jsx)(x,{id:e.query.id}):(0,r.jsx)("p",{})};return a.useEffect((function(){if(void 0!=e.query){var n=e.query.id;s(String(n))}}),[e.query]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(o.X2,{children:[(0,r.jsx)(o.JX,{md:"2"}),(0,r.jsx)(o.JX,{md:8,children:(0,r.jsx)(i,{})}),(0,r.jsx)(o.JX,{md:"2"})]})})};j.pageTitle="View Contact",j.activeLink="admin/clients/contact/";var b=j},12590:function(e,n,t){"use strict";var r=t(67294),a=t(45697),o=t.n(a);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=(0,r.forwardRef)((function(e,n){var t=e.color,a=void 0===t?"currentColor":t,o=e.size,l=void 0===o?24:o,u=i(e,["color","size"]);return r.createElement("svg",s({ref:n,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),r.createElement("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),r.createElement("circle",{cx:"12",cy:"12",r:"3"}))}));l.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},l.displayName="Eye",n.Z=l}},function(e){e.O(0,[1039,9774,2888,179],(function(){return n=39805,e(e.s=n);var n}));var n=e.O();_N_E=n}]);