"use strict";
exports.id = 5886;
exports.ids = [5886];
exports.modules = {

/***/ 5886:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _authAdminVerifyCookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4114);
/* harmony import */ var config_page_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5004);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_authAdminVerifyCookie__WEBPACK_IMPORTED_MODULE_3__]);
_authAdminVerifyCookie__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const withAdminAuth = (PageComponent)=>{
    // Initialize wrapper component
    const WrapperComponent = (props)=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PageComponent, {
            ...props
        }));
    };
    WrapperComponent.getInitialProps = async (ctx)=>{
        // Get initial properties from page component
        const initialProps = PageComponent.getInitialProps ? await PageComponent.getInitialProps(ctx) : {
        };
        // Verify user token from cookie
        const userData = await (0,_authAdminVerifyCookie__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(ctx);
        // Check whether user token is not valid
        if (!userData) {
            // Redirect to login page
            if (ctx.res) {
                ctx.res.writeHead(302, {
                    Location: config_page_config__WEBPACK_IMPORTED_MODULE_4__/* ["default"].AdminloginPagePath */ .Z.AdminloginPagePath
                });
                ctx.res.end();
            } else {
                next_router__WEBPACK_IMPORTED_MODULE_2___default().push(config_page_config__WEBPACK_IMPORTED_MODULE_4__/* ["default"].AdminloginPagePath */ .Z.AdminloginPagePath);
            }
            return {
                ...initialProps,
                userData: null
            };
        }
        return {
            ...initialProps,
            userData
        };
    };
    // Inject page component attributes to wrapper component
    return Object.assign(WrapperComponent, PageComponent);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withAdminAuth);

});

/***/ })

};
;