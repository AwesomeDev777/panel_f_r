"use strict";
exports.id = 6259;
exports.ids = [6259];
exports.modules = {

/***/ 4114:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_adminUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8367);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const authVerifyCookie = async (ctx)=>{
    // Get cookies from context
    const cookies = nookies__WEBPACK_IMPORTED_MODULE_0___default().get(ctx);
    const headers = {
        Authorization: cookies.admintoken
    };
    if (headers.Authorization === undefined) {
        return false;
    } else {
        // // Get absolute origin url
        const resp = await (0,axios__WEBPACK_IMPORTED_MODULE_2__["default"])({
            url: utils_adminUrl__WEBPACK_IMPORTED_MODULE_1__/* .Admin_Verify */ .v3,
            method: "GET",
            headers
        });
        if (!resp.data || resp.data == "Unauthorized") {
            return false;
        }
        return resp.data;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authVerifyCookie);

});

/***/ }),

/***/ 5004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * Page Configuration
 * you can customize general page configuration in the object below
 */ const PAGE = {
    appName: 'Vlblum',
    favicon: '/images/favicon.ico',
    enableContainerFluid: true,
    defaultLayoutName: 'default',
    defaultDirection: 'ltr',
    menuLinkSeparator: '.',
    loginPagePath: '/login',
    homePagePath: '/',
    AdminhomePagePath: '/admin/',
    AdminloginPagePath: '/admin/login'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PAGE);


/***/ })

};
;