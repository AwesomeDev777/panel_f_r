(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3689],{5296:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/register",function(){return n(55124)}])},74114:function(e,r,n){"use strict";var t=n(35666),i=n.n(t),a=n(62286),o=n.n(a),s=n(28367),l=n(6154);function c(e,r,n,t,i,a,o){try{var s=e[a](o),l=s.value}catch(c){return void n(c)}s.done?r(l):Promise.resolve(l).then(t,i)}var u,d=(u=i().mark((function e(r){var n,t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=o().get(r),void 0!==(t={Authorization:n.admintoken}).Authorization){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,(0,l.Z)({url:s.v3,method:"GET",headers:t});case 8:if((a=e.sent).data&&"Unauthorized"!=a.data){e.next=11;break}return e.abrupt("return",!1);case 11:return e.abrupt("return",a.data);case 12:case"end":return e.stop()}}),e)})),function(){var e=this,r=arguments;return new Promise((function(n,t){var i=u.apply(e,r);function a(e){c(i,n,t,a,o,"next",e)}function o(e){c(i,n,t,a,o,"throw",e)}a(void 0)}))});r.Z=d},77382:function(e,r,n){"use strict";var t=n(35666),i=n.n(t),a=n(85893),o=(n(67294),n(11163)),s=n(74114),l=n(85004);function c(e,r,n,t,i,a,o){try{var s=e[a](o),l=s.value}catch(c){return void n(c)}s.done?r(l):Promise.resolve(l).then(t,i)}function u(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){u(e,r,n[r])}))}return e}r.Z=function(e){var r,n=function(r){return(0,a.jsx)(e,d({},r))};return n.getInitialProps=(r=i().mark((function r(n){var t,a;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e.getInitialProps){r.next=6;break}return r.next=3,e.getInitialProps(n);case 3:r.t0=r.sent,r.next=7;break;case 6:r.t0={};case 7:return t=r.t0,r.next=10,(0,s.Z)(n);case 10:if(!(a=r.sent)){r.next=14;break}return n.res?(n.res.writeHead(302,{Location:n.query.redirect||l.Z.AdminhomePagePath}),n.res.end()):o.default.push(o.default.query.redirect||l.Z.AdminhomePagePath),r.abrupt("return",d({},t,{userData:a}));case 14:return r.abrupt("return",d({},t,{userData:null}));case 15:case"end":return r.stop()}}),r)})),function(){var e=this,n=arguments;return new Promise((function(t,i){var a=r.apply(e,n);function o(e){c(a,t,i,o,s,"next",e)}function s(e){c(a,t,i,o,s,"throw",e)}o(void 0)}))}),Object.assign(n,e)}},16862:function(e,r,n){"use strict";n.d(r,{M:function(){return s},A:function(){return l}});var t=n(78764),i=n.n(t),a=n(77630),o=n.n(a),s=o()(i().mixin({customClass:{confirmButton:"btn btn-label-success btn-wide mx-1",cancelButton:"btn btn-label-danger btn-wide mx-1"},buttonsStyling:!1})),l=o()(i().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}))},55124:function(e,r,n){"use strict";n.r(r);var t=n(35666),i=n.n(t),a=n(85893),o=n(67294),s=n(77382),l=n(59417),c=n(99603),u=n(74544),d=n(87536),f=n(47533),m=n(74231),p=n(41664),h=n(14416),v=n(11163),x=n(85004),b=n(16862),j=n(44364),y=n.n(j),g=n(39106),w=n(28367);function P(e,r,n,t,i,a,o){try{var s=e[a](o),l=s.value}catch(c){return void n(c)}s.done?r(l):Promise.resolve(l).then(t,i)}function k(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function O(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){k(e,r,n[r])}))}return e}var C=function(){return(0,a.jsx)(l.X2,{className:"g-0 align-items-center justify-content-center h-100",children:(0,a.jsx)(l.JX,{sm:8,md:6,lg:4,xl:3,children:(0,a.jsx)(l.kr,{children:(0,a.jsxs)(l.kr.Body,{children:[(0,a.jsx)("div",{className:"text-center mt-4 mb-5",children:(0,a.jsx)(l.mI,{circle:!0,display:!0,variant:"label-primary",children:(0,a.jsx)(c.G,{icon:u.U6l})})}),(0,a.jsx)(I,{})]})})})})},_=m.Ry().shape({firstname:m.Z_().required("First Name field must be required"),lastname:m.Z_().required("Last Name field must be required"),email:m.Z_().email("Your email is not valid").required("Please enter your email"),password:m.Z_().min(6,"Please enter at least 6 characters").required("Please provide your password"),passwordConfirm:m.Z_().min(6,"Please enter at least 6 characters").required("Please provide your password")}),I=function(){(0,h.I0)();var e=(0,h.v9)((function(e){return e.errors.errors}));o.useEffect((function(){y()(e)||b.M.fire({text:e,icon:"error"})}),[e]);var r,n=(0,d.cI)({resolver:(0,f.X)(_),defaultValues:{firstname:"",lastname:"",email:"",password:"",passwordConfirm:""}}),t=n.control,s=n.handleSubmit,c=(r=i().mark((function e(r){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.Z)(w._x,"POST",r);case 2:v.default.push(x.Z.AdminloginPagePath);case 3:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(t,i){var a=r.apply(e,n);function o(e){P(a,t,i,o,s,"next",e)}function s(e){P(a,t,i,o,s,"throw",e)}o(void 0)}))});return(0,a.jsxs)(l.l0,{onSubmit:s(c),className:"d-grid gap-3",children:[(0,a.jsx)(d.Qr,{name:"firstname",control:t,render:function(e){var r=e.field,n=e.fieldState,t=n.invalid,i=n.error;return(0,a.jsx)(l.l0.Group,{controlId:"firstname",children:(0,a.jsxs)(l.l0.Floating,{children:[(0,a.jsx)(l.l0.Control,O({type:"text",size:"lg",placeholder:"Please insert your First name",isInvalid:t},r)),(0,a.jsx)(l.l0.Label,{children:"First Name"}),t&&(0,a.jsx)(l.l0.Control.Feedback,{type:"invalid",children:null===i||void 0===i?void 0:i.message})]})})}}),(0,a.jsx)(d.Qr,{name:"lastname",control:t,render:function(e){var r=e.field,n=e.fieldState,t=n.invalid,i=n.error;return(0,a.jsx)(l.l0.Group,{controlId:"lastname",children:(0,a.jsxs)(l.l0.Floating,{children:[(0,a.jsx)(l.l0.Control,O({type:"text",size:"lg",placeholder:"Please insert your Last name",isInvalid:t},r)),(0,a.jsx)(l.l0.Label,{children:"Last Name"}),t&&(0,a.jsx)(l.l0.Control.Feedback,{type:"invalid",children:null===i||void 0===i?void 0:i.message})]})})}}),(0,a.jsx)(d.Qr,{name:"email",control:t,render:function(e){var r=e.field,n=e.fieldState,t=n.invalid,i=n.error;return(0,a.jsx)(l.l0.Group,{controlId:"email",children:(0,a.jsxs)(l.l0.Floating,{children:[(0,a.jsx)(l.l0.Control,O({type:"email",size:"lg",placeholder:"Please insert your email",isInvalid:t},r)),(0,a.jsx)(l.l0.Label,{children:"Email"}),t&&(0,a.jsx)(l.l0.Control.Feedback,{type:"invalid",children:null===i||void 0===i?void 0:i.message})]})})}}),(0,a.jsx)(d.Qr,{name:"password",control:t,render:function(e){var r=e.field,n=e.fieldState,t=n.invalid,i=n.error;return(0,a.jsx)(l.l0.Group,{controlId:"password",children:(0,a.jsxs)(l.l0.Floating,{children:[(0,a.jsx)(l.l0.Control,O({type:"password",size:"lg",placeholder:"Please insert your password",isInvalid:t},r)),(0,a.jsx)(l.l0.Label,{children:"Password"}),t&&(0,a.jsx)(l.l0.Control.Feedback,{type:"invalid",children:null===i||void 0===i?void 0:i.message})]})})}}),(0,a.jsx)(d.Qr,{name:"passwordConfirm",control:t,render:function(e){var r=e.field,n=e.fieldState,t=n.invalid,i=n.error;return(0,a.jsx)(l.l0.Group,{controlId:"password",children:(0,a.jsxs)(l.l0.Floating,{children:[(0,a.jsx)(l.l0.Control,O({type:"password",size:"lg",placeholder:"Please insert your password",isInvalid:t},r)),(0,a.jsx)(l.l0.Label,{children:"Password"}),t&&(0,a.jsx)(l.l0.Control.Feedback,{type:"invalid",children:null===i||void 0===i?void 0:i.message})]})})}}),(0,a.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,a.jsxs)("span",{children:["Already have an account? ",(0,a.jsx)(p.default,{href:"/admin/login",children:"Login"})]}),(0,a.jsx)(l.zx,{type:"submit",variant:"label-primary",size:"lg",width:"widest",children:"Register"})]})]})};C.pageTitle="AdminRegister",C.layoutName="blank",r.default=(0,s.Z)(C)},39106:function(e,r,n){"use strict";n.d(r,{Z:function(){return l}});var t=n(6154),i=n(62286),a=n(44364),o=n.n(a),s={Authorization:(0,i.parseCookies)().admintoken};function l(e,r,n){return new Promise((function(i,a){(0,t.Z)({url:e,method:r,data:n,headers:s}).then((function(e){i(e.data)})).catch((function(e){o()(e.response.data)||("Unauthorized"===e.response.data?i(e.response.data):a(e)),a(e)}))}))}}},function(e){e.O(0,[1039,9491,9774,2888,179],(function(){return r=5296,e(e.s=r);var r}));var r=e.O();_N_E=r}]);