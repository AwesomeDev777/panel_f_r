"use strict";
exports.id = 7875;
exports.ids = [7875];
exports.modules = {

/***/ 2478:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pH": () => (/* binding */ loginUser),
/* harmony export */   "TX": () => (/* binding */ logoutUser)
/* harmony export */ });
/* unused harmony export setCurrentUser */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var utils_adminUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8367);
/* harmony import */ var utils_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5982);
/* harmony import */ var utils_setAuthToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1045);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5567);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils_setAuthToken__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_0__]);
([utils_setAuthToken__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);







const cookieExpireIn = 30 * 24 * 60 * 60;
const loginUser = (userData)=>(dispatch)=>{
        axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(utils_adminUrl__WEBPACK_IMPORTED_MODULE_1__/* .Admin_Sign_in */ .JO, userData).then((res)=>{
            const { token  } = res.data;
            nookies__WEBPACK_IMPORTED_MODULE_4___default().set(null, 'admintoken', token, {
                maxAge: cookieExpireIn,
                path: '/'
            });
            (0,utils_setAuthToken__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(token);
            const decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(token);
            dispatch(setCurrentUser(decoded));
        }).catch((err)=>{
            console.log(err);
            dispatch({
                type: utils_action__WEBPACK_IMPORTED_MODULE_5__/* .GET_ERRORS */ .C,
                payload: err.response.data
            });
        });
    }
;
const setCurrentUser = (decoded)=>{
    return {
        type: utils_action__WEBPACK_IMPORTED_MODULE_5__/* .SET_CURRENT_USER */ .u,
        payload: decoded
    };
};
const logoutUser = ()=>(dispatch)=>{
        (0,nookies__WEBPACK_IMPORTED_MODULE_4__.destroyCookie)(null, 'admintoken', {
            path: '/'
        });
        (0,utils_setAuthToken__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(false);
        dispatch(setCurrentUser({
        }));
    }
;

});

/***/ }),

/***/ 8294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ breadcrumbChange)
/* harmony export */ });
function breadcrumbChange(breadcrumbData) {
    return {
        type: 'BREADCRUMB_CHANGE',
        payload: breadcrumbData
    };
}


/***/ }),

/***/ 3285:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b6": () => (/* reexport safe */ _layoutAction__WEBPACK_IMPORTED_MODULE_0__.b6),
/* harmony export */   "Ep": () => (/* reexport safe */ _layoutAction__WEBPACK_IMPORTED_MODULE_0__.Ep),
/* harmony export */   "Pj": () => (/* reexport safe */ _layoutAction__WEBPACK_IMPORTED_MODULE_0__.Pj),
/* harmony export */   "bd": () => (/* reexport safe */ _offcanvasAction__WEBPACK_IMPORTED_MODULE_1__.b),
/* harmony export */   "hV": () => (/* reexport safe */ _offcanvasAction__WEBPACK_IMPORTED_MODULE_1__.h),
/* harmony export */   "r$": () => (/* reexport safe */ _menuAction__WEBPACK_IMPORTED_MODULE_2__.r),
/* harmony export */   "pP": () => (/* reexport safe */ _pageAction__WEBPACK_IMPORTED_MODULE_3__.p),
/* harmony export */   "Ww": () => (/* reexport safe */ _breadcrumbAction__WEBPACK_IMPORTED_MODULE_4__.W),
/* harmony export */   "pH": () => (/* reexport safe */ _admin_auth__WEBPACK_IMPORTED_MODULE_5__.pH),
/* harmony export */   "TX": () => (/* reexport safe */ _admin_auth__WEBPACK_IMPORTED_MODULE_5__.TX)
/* harmony export */ });
/* harmony import */ var _layoutAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1710);
/* harmony import */ var _offcanvasAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4940);
/* harmony import */ var _menuAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6380);
/* harmony import */ var _pageAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5440);
/* harmony import */ var _breadcrumbAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8294);
/* harmony import */ var _admin_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2478);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_admin_auth__WEBPACK_IMPORTED_MODULE_5__]);
_admin_auth__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];







});

/***/ }),

/***/ 1710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b6": () => (/* binding */ asideDekstopToggle),
/* harmony export */   "Pj": () => (/* binding */ asideMobileToggle),
/* harmony export */   "Ep": () => (/* binding */ asideMobileChange)
/* harmony export */ });
/* unused harmony export asideDekstopChange */
function asideDekstopToggle() {
    return {
        type: 'ASIDE_DESKTOP_TOGGLE'
    };
}
function asideMobileToggle() {
    return {
        type: 'ASIDE_MOBILE_TOGGLE'
    };
}
function asideDekstopChange(asideState) {
    return {
        type: 'ASIDE_DESKTOP_CHANGE',
        payload: asideState
    };
}
function asideMobileChange(asideState) {
    return {
        type: 'ASIDE_MOBILE_CHANGE',
        payload: asideState
    };
}


/***/ }),

/***/ 6380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ menuActiveLinkChange)
/* harmony export */ });
/* unused harmony export menuActiveLinkPartialChange */
function menuActiveLinkChange(linkName) {
    return {
        type: 'MENU_ACTIVE_LINK_CHANGE',
        payload: linkName
    };
}
function menuActiveLinkPartialChange(linkPartial) {
    return {
        type: 'MENU_ACTIVE_LINK_PARTIAL_CHANGE',
        payload: linkPartial
    };
}


/***/ }),

/***/ 4940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ offcanvasToggle),
/* harmony export */   "b": () => (/* binding */ offcanvasChange)
/* harmony export */ });
function offcanvasToggle(offcanvasKey) {
    return {
        type: 'OFFCANVAS_TOGGLE',
        payload: offcanvasKey
    };
}
function offcanvasChange(offcanvasState) {
    return {
        type: 'OFFCANVAS_CHANGE',
        payload: offcanvasState
    };
}


/***/ }),

/***/ 5440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ pageTitleChange)
/* harmony export */ });
function pageTitleChange(pageTitle) {
    return {
        type: 'PAGE_TITLE_CHANGE',
        payload: pageTitle
    };
}


/***/ }),

/***/ 5982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ SET_CURRENT_USER),
/* harmony export */   "C": () => (/* binding */ GET_ERRORS)
/* harmony export */ });
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const GET_ERRORS = 'GET_ERRORS';


/***/ }),

/***/ 4364:
/***/ ((module) => {


const isEmpty = (value)=>value === undefined || value == null || typeof value === 'object' && Object.keys(value).length === 0 || typeof value === 'string' && value.trim().length === 0
;
module.exports = isEmpty;


/***/ }),

/***/ 1045:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

const setAuthToken = (token)=>{
    if (token) {
        axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers.common.Authorization = token;
    } else {
        delete axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers.common.Authorization;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setAuthToken);

});

/***/ })

};
;