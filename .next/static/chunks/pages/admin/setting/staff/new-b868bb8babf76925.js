(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4129],{95053:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/setting/staff/new",function(){return t(17259)}])},16862:function(e,n,t){"use strict";t.d(n,{M:function(){return l},A:function(){return i}});var r=t(78764),a=t.n(r),o=t(77630),s=t.n(o),l=s()(a().mixin({customClass:{confirmButton:"btn btn-label-success btn-wide mx-1",cancelButton:"btn btn-label-danger btn-wide mx-1"},buttonsStyling:!1})),i=s()(a().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}))},17259:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return y}});var r=t(85893),a=t(67294),o=t(59417),s=t(35666),l=t.n(s),i=t(74544),c=t(99603),u=t(6154),d=t(16862),f=t(62286),h=t(12590),p=t(28367);function x(e,n,t,r,a,o,s){try{var l=e[o](s),i=l.value}catch(c){return void t(c)}l.done?n(i):Promise.resolve(i).then(r,a)}function m(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function s(e){x(o,r,a,s,l,"next",e)}function l(e){x(o,r,a,s,l,"throw",e)}s(void 0)}))}}function j(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(r=(s=l.next()).done)&&(t.push(s.value),!n||t.length!==n);r=!0);}catch(i){a=!0,o=i}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g=t(44364),v=function(){var e={Authorization:(0,f.parseCookies)().admintoken},n=j(a.useState(""),2),t=n[0],s=n[1],x=j(a.useState(""),2),v=x[0],b=x[1],y=j(a.useState(""),2),w=y[0],k=y[1],S=j(a.useState(""),2),C=S[0],I=S[1],_=j(a.useState(0),2),z=_[0],L=_[1],D=j(a.useState(""),2),E=D[0],G=D[1],O=j(a.useState(""),2),P=O[0],N=O[1],T=j(a.useState(""),2),X=T[0],B=T[1],A=j(a.useState(""),2),F=A[0],Z=A[1],J=j(a.useState("none"),2),R=J[0],H=J[1],M=j(a.useState(""),2),V=M[0],W=M[1],q=j(a.useState("none"),2),K=q[0],Q=q[1],U=j(a.useState(),2),Y=U[0],$=U[1],ee=j(a.useState([]),2),ne=ee[0],te=ee[1],re=j(a.useState(""),2),ae=re[0],oe=re[1],se=j(a.useState(""),2),le=se[0],ie=se[1],ce=j(a.useState({}),2),ue=ce[0],de=ce[1],fe=j(a.useState("password"),2),he=fe[0],pe=fe[1],xe=j(a.useState(!0),2),me=xe[0],je=xe[1],ge=j(a.useState({department:"",role:"",email:"",password:"",firstname:"",lastname:""}),2),ve=ge[0],be=ge[1],ye=j(a.useState([]),2),we=ye[0],ke=ye[1],Se=j(a.useState([]),2),Ce=Se[0],Ie=Se[1],_e=j(a.useState(!1),2),ze=_e[0],Le=_e[1],De=function(){return Le(!1)},Ee=j(a.useState(),2),Ge=Ee[0],Oe=Ee[1],Pe={color:"red"};a.useEffect((function(){u.Z.get(p._Z+"/1/0",{headers:e}).then((function(e){ke(e.data.all)})).catch((function(e){var n={department:"",role:"",email:"",password:"",firstname:"",lastname:""};!g(e.response.data.department)&&(n.department=e.response.data.department),be(n)}))}),[]),a.useEffect((function(){u.Z.get(p.cl+"/1/0",{headers:e}).then((function(e){Ie(e.data.all),$(e.data.all[0]._id)})).catch((function(e){var n={department:"",role:"",email:"",password:"",firstname:"",lastname:""};!g(e.response.data.role)&&(n.role=e.response.data.role),be(n)}))}),[]),a.useEffect((function(){de({email:v,firstname:w,lastname:C,hourly_rate:z,phonenumber:E,facebook:P,linkedin:X,skype:F,default_language:R,email_signature:V,direction:K,password:ae,departments:ne,role:Y})}),[v,w,C,z,E,P,X,F,R,V,K,ae,ne.length,Y]),a.useEffect((function(){pe(me?"password":"text")}),[me]);var Ne=function(){d.A.fire({icon:"success",title:"Success"})},Te=function(){d.A.fire({icon:"error",title:"Error exists. Maybe not Image file"})},Xe=m(l().mark((function n(){return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.post(p.P8,ue,{headers:e}).then((function(e){Ne(),s(e.data._id),ie(""),Le(!0)})).catch((function(e){var n={department:"",role:"",email:"",password:"",firstname:"",lastname:""};!g(e.response.data.email)&&(n.email=e.response.data.email),!g(e.response.data.password)&&(n.password=e.response.data.password),!g(e.response.data.firstname)&&(n.firstname=e.response.data.firstname),!g(e.response.data.lastname)&&(n.lastname=e.response.data.lastname),be(n)}));case 2:case"end":return n.stop()}}),n)}))),Be=m(l().mark((function e(){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=new FormData,null==Ge){e.next=5;break}return n.append("file",Ge),e.next=5,fetch("/api/upload",{method:"POST",body:n}).then((function(e){return e.json()})).then(m(l().mark((function e(n){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g(n.error)&&!g(n.filename)){e.next=4;break}Te(),e.next=11;break;case 4:if(g(le)){e.next=10;break}return(t=new FormData).append("text",le),e.next=9,fetch("/api/upload/remove",{method:"POST",body:t});case 9:e.sent;case 10:Ae(n.filename);case 11:case"end":return e.stop()}}),e)}))));case 5:case"end":return e.stop()}}),e)}))),Ae=m(l().mark((function n(r){return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null===r||""===r){n.next=5;break}return n.next=3,u.Z.put(p.n7+"/".concat(t),{profile_image:r},{headers:e}).then((function(e){Ne(),ie(r)})).catch((function(e){console.log(e)}));case 3:n.next=6;break;case 5:Te();case 6:case"end":return n.stop()}}),n)})));return(0,r.jsx)(o.X2,{children:(0,r.jsx)(o.JX,{md:"6",children:(0,r.jsxs)(o.kr,{children:[(0,r.jsx)(o.kr.Header,{bordered:!0,children:(0,r.jsx)(o.kr.Addon,{children:(0,r.jsx)("h4",{children:"New Member"})})}),(0,r.jsx)(o.kr.Body,{children:(0,r.jsxs)(o.X2,{children:[(0,r.jsx)(o.JX,{md:"2"}),(0,r.jsx)(o.JX,{md:"8",children:(0,r.jsxs)("div",{className:"d-grid gap-3",children:[(0,r.jsxs)(o.l0.Group,{controlId:"emailID",children:[(0,r.jsx)(o.l0.Label,{children:"*Email Address"}),(0,r.jsx)(o.l0.Control,{onChange:function(e){return b(e.target.value)},type:"email",size:"lg"}),(0,r.jsx)("p",{style:Pe,children:ve.email})]}),(0,r.jsxs)(o.l0.Group,{controlId:"firstnameID",children:[(0,r.jsx)(o.l0.Label,{children:"*First Name"}),(0,r.jsx)(o.l0.Control,{onChange:function(e){return k(e.target.value)},type:"text",size:"lg"}),(0,r.jsx)("p",{style:Pe,children:ve.firstname})]}),(0,r.jsxs)(o.l0.Group,{controlId:"lastnameID",children:[(0,r.jsx)(o.l0.Label,{children:"*Last Name"}),(0,r.jsx)(o.l0.Control,{onChange:function(e){return I(e.target.value)},type:"text",size:"lg"}),(0,r.jsx)("p",{style:Pe,children:ve.lastname})]}),(0,r.jsxs)(o.l0.Group,{controlId:"hourlyrateID",children:[(0,r.jsx)(o.l0.Label,{children:"*Hourly Rate"}),(0,r.jsx)(o.l0.Control,{onChange:function(e){return L(parseInt(e.target.value))},type:"number",size:"lg"})]}),(0,r.jsxs)(o.l0.Group,{controlId:"phonenumberID",children:[(0,r.jsx)(o.l0.Label,{children:"*Phone Number"}),(0,r.jsx)(o.l0.Control,{onChange:function(e){return G(e.target.value)},type:"text",size:"lg"})]}),(0,r.jsxs)(o.l0.Group,{controlId:"facebookID",children:[(0,r.jsx)(o.l0.Label,{children:"*Facebook"}),(0,r.jsx)(o.l0.Control,{onChange:function(e){return N(e.target.value)},type:"text",size:"lg"})]}),(0,r.jsxs)(o.l0.Group,{controlId:"linkedinID",children:[(0,r.jsx)(o.l0.Label,{children:"*Linkedin"}),(0,r.jsx)(o.l0.Control,{onChange:function(e){return B(e.target.value)},type:"text",size:"lg"})]}),(0,r.jsxs)(o.l0.Group,{controlId:"skypeID",children:[(0,r.jsx)(o.l0.Label,{children:"*Skype"}),(0,r.jsx)(o.l0.Control,{onChange:function(e){return Z(e.target.value)},type:"text",size:"lg"})]}),(0,r.jsxs)(o.l0.Group,{controlId:"defaultlangID",children:[(0,r.jsx)(o.l0.Label,{children:"*Default Language"}),(0,r.jsxs)(o.l0.Select,{onChange:function(e){return H(e.target.value)},defaultValue:"none",size:"lg",children:[(0,r.jsx)("option",{value:"none",children:"System Default"}),(0,r.jsx)("option",{value:"English",children:"English"}),(0,r.jsx)("option",{value:"Germany",children:"Germany"})]})]}),(0,r.jsxs)(o.l0.Group,{controlId:"emailsignatureID",children:[(0,r.jsx)(o.l0.Label,{children:"*Email Signature"}),(0,r.jsx)(o.l0.Control,{onChange:function(e){return W(e.target.value)},as:"textarea",rows:3})]}),(0,r.jsxs)(o.l0.Group,{controlId:"directionID",children:[(0,r.jsx)(o.l0.Label,{children:"*Direction"}),(0,r.jsxs)(o.l0.Select,{onChange:function(e){return Q(e.target.value)},defaultValue:"none",size:"lg",children:[(0,r.jsx)("option",{value:"none",children:"System Default"}),(0,r.jsx)("option",{value:"ltr",children:"LTR"}),(0,r.jsx)("option",{value:"rtl",children:"RTL"})]})]}),(0,r.jsx)(o.l0.Group,{controlId:"departmentsID",children:we.map((function(e){return(0,r.jsx)(o.l0.Check,{type:"checkbox",id:e._id,name:e._id,label:e.name,onChange:function(e){return function(e){var n=ne;console.log(n),n.indexOf(e)>-1?n.splice(n.indexOf(e),1):n.push(e),te(n)}(e.target.name)}},e._id)}))}),(0,r.jsxs)(o.l0.Group,{controlId:"roleID",children:[(0,r.jsx)(o.l0.Label,{children:"*Role"}),(0,r.jsx)(o.l0.Select,{onChange:function(e){return $(e.target.value)},size:"lg",children:Ce.map((function(e){return(0,r.jsx)("option",{value:e._id,children:e.name},e._id)}))})]}),(0,r.jsxs)(o.l0.Group,{controlId:"passwordID",children:[(0,r.jsx)(o.l0.Label,{children:"*Password"}),(0,r.jsxs)(o.BZ,{children:[(0,r.jsx)(o.l0.Control,{type:he,onChange:function(e){return oe(e.target.value)},size:"lg"}),(0,r.jsx)(o.zx,{variant:"outline-info",onClick:function(){return je(!me)},size:"lg",icon:!0,children:(0,r.jsx)(h.Z,{})})]}),(0,r.jsx)("p",{style:Pe,children:ve.password})]})]})}),(0,r.jsx)(o.JX,{md:"2"})]})}),(0,r.jsxs)(o.kr.Footer,{bordered:!0,align:"end",children:[(0,r.jsx)(o.zx,{onClick:Xe,type:"submit",variant:"primary",children:"Submit"}),(0,r.jsxs)(o.u_,{scrollable:!0,show:ze,onHide:De,children:[(0,r.jsxs)(o.u_.Header,{children:[(0,r.jsx)(o.u_.Title,{children:"Profile Image"}),(0,r.jsx)(o.zx,{icon:!0,variant:"label-danger",onClick:De,children:(0,r.jsx)(c.G,{icon:i.NBC})})]}),(0,r.jsx)(o.u_.Body,{children:(0,r.jsxs)(o.l0.Group,{controlId:"formFile",children:[(0,r.jsx)(o.l0.Label,{}),(0,r.jsx)(o.l0.Control,{type:"file",onChange:function(e){return function(e){if(e.target.files&&e.target.files[0]){var n=e.target.files[0];Oe(n)}}(e)}})]})}),(0,r.jsx)(o.u_.Footer,{children:(0,r.jsx)(o.zx,{onClick:Be,type:"submit",variant:"primary",children:"Submit"})})]})]})]})})})},b=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.X2,{children:(0,r.jsx)(o.JX,{md:12,children:(0,r.jsx)(v,{})})})})};b.pageTitle="New Staff",b.activeLink="admin/setting/staff/new";var y=b},12590:function(e,n,t){"use strict";var r=t(67294),a=t(45697),o=t.n(a);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=(0,r.forwardRef)((function(e,n){var t=e.color,a=void 0===t?"currentColor":t,o=e.size,i=void 0===o?24:o,c=l(e,["color","size"]);return r.createElement("svg",s({ref:n,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),r.createElement("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),r.createElement("circle",{cx:"12",cy:"12",r:"3"}))}));i.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},i.displayName="Eye",n.Z=i}},function(e){e.O(0,[1039,9774,2888,179],(function(){return n=95053,e(e.s=n);var n}));var n=e.O();_N_E=n}]);