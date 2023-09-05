"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

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


/***/ }),

/***/ 6220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyDocument)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(6859);
;// CONCATENATED MODULE: ./src/config/analytics.config.ts
/*
 * Analytics Configuration
 * the object below is representation of analytics configuration
 */ const ANALYTICS = {
    enabledAnalytics: false,
    googleAnalyticsId: 'G-XXXXXXXXXX'
};
/* harmony default export */ const analytics_config = (ANALYTICS);

// EXTERNAL MODULE: ./src/config/page.config.ts
var page_config = __webpack_require__(5004);
;// CONCATENATED MODULE: ./src/pages/_document.tsx




class MyDocument extends next_document["default"] {
    render() {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Html, {
            dir: page_config/* default.defaultDirection */.Z.defaultDirection,
            lang: "en",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Head, {
                    children: [
                        analytics_config.enabledAnalytics && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("script", {
                                    async: true,
                                    src: `https://www.googletagmanager.com/gtag/js?id=${analytics_config.googleAnalyticsId}`
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("script", {
                                    dangerouslySetInnerHTML: {
                                        __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${analytics_config.googleAnalyticsId}', {
                      page_path: window.location.pathname,
                    });
                  `
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "shortcut icon",
                            type: "image/x-icon",
                            href: page_config/* default.favicon */.Z.favicon
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "stylesheet",
                            href: "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&family=Roboto+Mono&display=swap"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.Main, {
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.NextScript, {
                        })
                    ]
                })
            ]
        }));
    }
}



/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6859], () => (__webpack_exec__(6220)));
module.exports = __webpack_exports__;

})();