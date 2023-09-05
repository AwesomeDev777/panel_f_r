"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 5034:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthProvider),
/* harmony export */   "a": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_adminUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8367);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__]);
axios__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





// Set timer constants
const cookieExpireIn = (/* unused pure expression or super */ null && (30 * 24 * 60 * 60));
const refreshTokenIn = (/* unused pure expression or super */ null && (10 * 60 * 1000));
const cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_2__.parseCookies)().admintoken;
// Set authentication context
const AuthContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({
    userData: null,
    setUserData: ()=>{
    }
});
// Set authentication provider
const AuthProvider = ({ children  })=>{
    const [userData, setUserData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    const headers = {
        "Authorization": cookies
    };
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (headers.Authorization !== undefined) {
            axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(utils_adminUrl__WEBPACK_IMPORTED_MODULE_3__/* .Admin_Verify */ .v3, {
                headers
            }).then((res)=>{
                setUserData(res.data);
            }).catch((err)=>{
                console.log(err);
            });
        }
    }, []);
    // React.useEffect(() => {
    // 	// Set timer for refreshing user token
    // 	const interval = setInterval(async () => {
    // 		const user = firebaseAuth.currentUser
    // 		// Forced refresh user token
    // 		if (user) await user.getIdToken(true)
    // 	}, refreshTokenIn)
    // 	// Clear timer
    // 	return () => clearInterval(interval)
    // }, [])
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            userData,
            setUserData
        },
        children: children
    }));
};
// Set authentication hook
const useAuth = ()=>{
    return react__WEBPACK_IMPORTED_MODULE_1___default().useContext(AuthContext);
};

});

/***/ }),

/***/ 7330:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9167);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3285);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4563);
/* harmony import */ var _AsideNavigationMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9518);
/* harmony import */ var hooks_useSimplebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9134);
/* harmony import */ var config_page_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5004);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([store_actions__WEBPACK_IMPORTED_MODULE_5__, _AsideNavigationMenu__WEBPACK_IMPORTED_MODULE_8__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__]);
([store_actions__WEBPACK_IMPORTED_MODULE_5__, _AsideNavigationMenu__WEBPACK_IMPORTED_MODULE_8__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);











const LayoutAside = (props)=>{
    const simplebarInstance = (0,hooks_useSimplebar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const viewportBreakpoint = 1025;
    const desktopMinimized = props.layout.asideDesktopMinimized;
    const mobileMinimized = props.layout.asideMobileMinimized;
    const backdropOnClick = ()=>props.asideMobileChange(true)
    ;
    const asideToggle = ()=>{
        if (window.innerWidth >= viewportBreakpoint) {
            props.asideDekstopToggle();
        } else {
            props.asideMobileToggle();
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Aside */ .xN, {
        desktopMinimized: desktopMinimized,
        mobileMinimized: mobileMinimized,
        backdropOnClick: backdropOnClick,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Aside.Header */ .xN.Header, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Aside.Title */ .xN.Title, {
                        children: config_page_config__WEBPACK_IMPORTED_MODULE_10__/* ["default"].appName */ .Z.appName
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Aside.Addon */ .xN.Addon, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                            icon: true,
                            size: "lg",
                            variant: "label-primary",
                            onClick: asideToggle,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faTimes,
                                    className: "aside-icon-minimize"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faThumbtack,
                                    className: "aside-icon-maximize"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Aside.Body */ .xN.Body, {
                ref: simplebarInstance,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AsideNavigationMenu__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                })
            })
        ]
    }));
};
function mapStateToProps(state) {
    return {
        layout: state.layout
    };
}
function mapDispatchToProps(dispatch) {
    return (0,redux__WEBPACK_IMPORTED_MODULE_4__.bindActionCreators)({
        asideMobileChange: store_actions__WEBPACK_IMPORTED_MODULE_5__/* .asideMobileChange */ .Ep,
        asideMobileToggle: store_actions__WEBPACK_IMPORTED_MODULE_5__/* .asideMobileToggle */ .Pj,
        asideDekstopToggle: store_actions__WEBPACK_IMPORTED_MODULE_5__/* .asideDekstopToggle */ .b6
    }, dispatch);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(LayoutAside));

});

/***/ }),

/***/ 9518:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9167);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var config_page_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5004);
/* harmony import */ var config_aside_menu_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8550);
/* harmony import */ var _AsideNavigationMenuLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2317);
/* harmony import */ var _AsideNavigationMenuSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2645);
/* harmony import */ var _AsideNavigationMenuSubmenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1940);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AsideNavigationMenuLink__WEBPACK_IMPORTED_MODULE_6__, _AsideNavigationMenuSection__WEBPACK_IMPORTED_MODULE_7__, config_aside_menu_config__WEBPACK_IMPORTED_MODULE_5__]);
([_AsideNavigationMenuLink__WEBPACK_IMPORTED_MODULE_6__, _AsideNavigationMenuSection__WEBPACK_IMPORTED_MODULE_7__, config_aside_menu_config__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









const AsideNavigationMenu = ({ menu: { activeLinkPartial  }  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Menu */ .v2, {
        children: config_aside_menu_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].map */ .Z.map((rootMenu)=>{
            // Define root menu key
            const rootMenuKey = rootMenu.name;
            // Define active state
            const rootMenuActive = activeLinkPartial[0] == rootMenu.name;
            // Check menu item type
            switch(rootMenu.type){
                case 'link':
                    // Render link item
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AsideNavigationMenuLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        title: rootMenu.title,
                        link: rootMenu.link,
                        active: rootMenuActive,
                        icon: rootMenu.icon,
                        addon: rootMenu.addon
                    }, rootMenuKey));
                case 'section':
                    // Render link section
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AsideNavigationMenuSection__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        title: rootMenu.title,
                        children: rootMenu.child.map((middleMenu)=>{
                            // Define middle menu key
                            const middleMenuKey = rootMenuKey + config_page_config__WEBPACK_IMPORTED_MODULE_4__/* ["default"].menuLinkSeparator */ .Z.menuLinkSeparator + middleMenu.name;
                            // Define active state
                            const middleMenuActive = rootMenuActive && activeLinkPartial[1] == middleMenu.name;
                            // Check menu item type
                            switch(middleMenu.type){
                                case 'link':
                                    // Render link item
                                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AsideNavigationMenuLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        title: middleMenu.title,
                                        link: middleMenu.link,
                                        active: middleMenuActive,
                                        icon: middleMenu.icon,
                                        addon: middleMenu.addon
                                    }, middleMenuKey));
                                case 'group':
                                    // Render link group
                                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AsideNavigationMenuSubmenu__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        title: middleMenu.title,
                                        active: middleMenuActive,
                                        icon: middleMenu.icon,
                                        children: middleMenu.child.map((childMenu)=>{
                                            // Define child menu key
                                            const childMenuKey = middleMenuKey + config_page_config__WEBPACK_IMPORTED_MODULE_4__/* ["default"].menuLinkSeparator */ .Z.menuLinkSeparator + childMenu.name;
                                            // Define active state
                                            const childMenuActive = middleMenuActive && activeLinkPartial[2] == childMenu.name;
                                            // Check menu item type
                                            switch(childMenu.type){
                                                // Render link item
                                                case 'link':
                                                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AsideNavigationMenuLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                        title: childMenu.title,
                                                        link: childMenu.link,
                                                        active: childMenuActive,
                                                        icon: childMenu.icon,
                                                        addon: childMenu.addon,
                                                        bullet: true
                                                    }, childMenuKey));
                                                default:
                                                    return null;
                                            }
                                        })
                                    }, middleMenuKey));
                                default:
                                    return null;
                            }
                        })
                    }, rootMenuKey));
                case 'group':
                    // Render link group
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AsideNavigationMenuSubmenu__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        title: rootMenu.title,
                        active: rootMenuActive,
                        icon: rootMenu.icon,
                        children: rootMenu.child.map((childMenu)=>{
                            // Define child menu key
                            const childMenuKey = rootMenu + config_page_config__WEBPACK_IMPORTED_MODULE_4__/* ["default"].menuLinkSeparator */ .Z.menuLinkSeparator + childMenu.name;
                            // Define active state
                            const childMenuActive = rootMenuActive && activeLinkPartial[2] == childMenu.name;
                            // Check menu item type
                            switch(childMenu.type){
                                // Render link item
                                case 'link':
                                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AsideNavigationMenuLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        title: childMenu.title,
                                        link: childMenu.link,
                                        active: childMenuActive,
                                        icon: childMenu.icon,
                                        addon: childMenu.addon,
                                        bullet: true
                                    }, childMenuKey));
                                case 'group':
                                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AsideNavigationMenuSubmenu__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        title: childMenu.title,
                                        active: childMenuActive,
                                        icon: childMenu.icon,
                                        children: childMenu.child.map((childMenu2)=>{
                                            // Define child menu key
                                            const childMenu2Key = childMenuKey + config_page_config__WEBPACK_IMPORTED_MODULE_4__/* ["default"].menuLinkSeparator */ .Z.menuLinkSeparator + childMenu2.name;
                                            // Define active state
                                            const childMenu2Active = childMenuActive && activeLinkPartial[3] == childMenu2.name;
                                            // Check menu item type
                                            switch(childMenu2.type){
                                                // Render link item
                                                case 'link':
                                                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AsideNavigationMenuLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                        title: childMenu2.title,
                                                        link: childMenu2.link,
                                                        active: childMenu2Active,
                                                        icon: childMenu2.icon,
                                                        addon: childMenu2.addon,
                                                        bullet: true
                                                    }, childMenu2Key));
                                                default:
                                                    return null;
                                            }
                                        })
                                    }, childMenuKey));
                                default:
                                    return null;
                            }
                        })
                    }, rootMenuKey));
                default:
                    return null;
            }
        })
    }));
};
function mapStateToProps(state) {
    return {
        menu: state.menu
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps)(AsideNavigationMenu));

});

/***/ }),

/***/ 2317:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9167);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3285);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([store_actions__WEBPACK_IMPORTED_MODULE_6__]);
store_actions__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];







const AsideNavigationMenuLink = ({ title , link , bullet , active , icon , addon , asideMobileChange ,  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Menu.Item */ .v2.Item, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
            href: link,
            passHref: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Menu.Link */ .v2.Link, {
                active: active,
                href: link,
                icon: icon,
                bullet: bullet,
                addon: addon,
                onClick: ()=>asideMobileChange(false)
                ,
                children: title
            })
        })
    }));
};
function mapDispatchToProps(dispatch) {
    return (0,redux__WEBPACK_IMPORTED_MODULE_5__.bindActionCreators)({
        asideMobileChange: store_actions__WEBPACK_IMPORTED_MODULE_6__/* .asideMobileChange */ .Ep
    }, dispatch);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(null, mapDispatchToProps)(AsideNavigationMenuLink));

});

/***/ }),

/***/ 2645:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9167);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const AsideNavigationMenuSection = ({ title , children  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Menu.Section */ .v2.Section, {
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faEllipsisH
                }),
                children: title
            }),
            children
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AsideNavigationMenuSection);

});

/***/ }),

/***/ 1940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9167);



const AsideNavigationMenuSubmenu = ({ title , children , active , icon ,  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Menu.Submenu */ .v2.Submenu, {
        defaultActive: active,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Menu.Toggle */ .v2.Toggle, {
                icon: icon,
                caret: true,
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Menu.SubmenuMenu */ .v2.SubmenuMenu, {
                children: children
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AsideNavigationMenuSubmenu);


/***/ }),

/***/ 3962:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9167);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const LayoutFloatingButton = ()=>{
    const { resolvedTheme: theme , setTheme  } = (0,_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .useTheme */ .Fg)();
    const { dir , setDir  } = (0,_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .useDirection */ .gm)();
    const handleToggleTheme = ()=>{
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    };
    const handleToggleDir = ()=>{
        if (dir === 'rtl') {
            setDir('ltr');
        } else {
            setDir('rtl');
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .FloatingButton */ .Tv, {
        align: "end",
        className: "d-grid gap-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .zx, {
                icon: true,
                variant: "flat-primary",
                onClick: handleToggleTheme,
                children: theme && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                    icon: theme === 'dark' ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faSun : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faMoon
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .zx, {
                icon: true,
                variant: "flat-primary",
                onClick: handleToggleDir,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faSync
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutFloatingButton);

});

/***/ }),

/***/ 4471:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9167);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2765);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4563);
/* harmony import */ var config_page_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5004);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






const LayoutFooter = ()=>{
    const copyrightYear = new Date().getFullYear();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Footer */ .$_, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .W2, {
            fluid: config_page_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].enableContainerFluid */ .Z.enableContainerFluid,
            className: "g-4",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .X2, {
                className: "g-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Col */ .JX, {
                        sm: "6",
                        className: "text-center text-sm-start",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "mb-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCopyright
                                }),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: copyrightYear
                                }),
                                " ",
                                config_page_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].appName */ .Z.appName,
                                ". All rights reserved"
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Col */ .JX, {
                        sm: "6",
                        className: "text-center text-sm-end",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "mb-0",
                            children: [
                                "Hand-crafted and made with ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faHeart,
                                    className: "text-danger"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutFooter);

});

/***/ }),

/***/ 8383:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getLayout)
/* harmony export */ });
/* unused harmony export layoutOptions */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _template_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6875);
/* harmony import */ var _template_BackgroundLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5858);
/* harmony import */ var _template_BlankLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8295);
/* harmony import */ var config_page_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5004);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_template_BlankLayout__WEBPACK_IMPORTED_MODULE_3__, _template_BackgroundLayout__WEBPACK_IMPORTED_MODULE_2__, _template_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__]);
([_template_BlankLayout__WEBPACK_IMPORTED_MODULE_3__, _template_BackgroundLayout__WEBPACK_IMPORTED_MODULE_2__, _template_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





const layoutOptions = {
    default: _template_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
    background: _template_BackgroundLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    blank: _template_BlankLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
};
function getLayout(layoutName) {
    if (layoutName in layoutOptions) {
        return layoutOptions[layoutName];
    }
    return layoutOptions[config_page_config__WEBPACK_IMPORTED_MODULE_4__/* ["default"].defaultLayoutName */ .Z.defaultLayoutName];
};

});

/***/ }),

/***/ 9409:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9167);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2765);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4563);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3285);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8297);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var config_page_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5004);
/* harmony import */ var _HeaderNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8700);
/* harmony import */ var _HeaderChat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(91);
/* harmony import */ var _HeaderNotification__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5191);
/* harmony import */ var _HeaderAdminUser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6786);
/* harmony import */ var _HeaderBreadcrumb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7962);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([store_actions__WEBPACK_IMPORTED_MODULE_8__, _HeaderAdminUser__WEBPACK_IMPORTED_MODULE_14__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__, _HeaderChat__WEBPACK_IMPORTED_MODULE_12__, _HeaderNotification__WEBPACK_IMPORTED_MODULE_13__, _HeaderNav__WEBPACK_IMPORTED_MODULE_11__]);
([store_actions__WEBPACK_IMPORTED_MODULE_8__, _HeaderAdminUser__WEBPACK_IMPORTED_MODULE_14__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__, _HeaderChat__WEBPACK_IMPORTED_MODULE_12__, _HeaderNotification__WEBPACK_IMPORTED_MODULE_13__, _HeaderNav__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
















const LayoutHeader = (props)=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Header */ .h4, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_stickynode__WEBPACK_IMPORTED_MODULE_9___default()), {
                top: 0,
                bottomBoundary: 0,
                className: "sticky-header",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Header.Holder */ .h4.Holder, {
                    shown: "desktop",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Header.Container */ .h4.Container, {
                        fluid: config_page_config__WEBPACK_IMPORTED_MODULE_10__/* ["default"].enableContainerFluid */ .Z.enableContainerFluid,
                        className: "g-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Header.Wrap */ .h4.Wrap, {
                                justify: "start",
                                block: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderNav__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Header.Wrap */ .h4.Wrap, {
                                className: "hstack gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderNotification__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        variant: "flat-primary"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderChat__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        variant: "flat-primary"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                        variant: "flat-primary",
                                        icon: true,
                                        onClick: ()=>props.offcanvasToggle('setting')
                                        ,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                            icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faListAlt
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                        variant: "flat-primary",
                                        icon: true,
                                        onClick: ()=>props.offcanvasToggle('agenda')
                                        ,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                            icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCalendarAlt
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderAdminUser__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        variant: "flat-primary"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_stickynode__WEBPACK_IMPORTED_MODULE_9___default()), {
                top: 0,
                bottomBoundary: 0,
                className: "sticky-header",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Header.Holder */ .h4.Holder, {
                    shown: "mobile",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Header.Container */ .h4.Container, {
                        fluid: config_page_config__WEBPACK_IMPORTED_MODULE_10__/* ["default"].enableContainerFluid */ .Z.enableContainerFluid,
                        className: "g-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Header.Wrap */ .h4.Wrap, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                    variant: "flat-primary",
                                    icon: true,
                                    onClick: ()=>props.asideMobileToggle()
                                    ,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faBars
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Header.Wrap */ .h4.Wrap, {
                                block: true,
                                justify: "start",
                                className: "px-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Header.Brand */ .h4.Brand, {
                                    children: config_page_config__WEBPACK_IMPORTED_MODULE_10__/* ["default"].appName */ .Z.appName
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Header.Wrap */ .h4.Wrap, {
                                className: "hstack gap-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderAdminUser__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    variant: "flat-primary"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Header.Holder */ .h4.Holder, {
                shown: "mobile",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Header.Container */ .h4.Container, {
                    fluid: config_page_config__WEBPACK_IMPORTED_MODULE_10__/* ["default"].enableContainerFluid */ .Z.enableContainerFluid,
                    className: "g-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Header.Wrap */ .h4.Wrap, {
                        block: true,
                        justify: "start",
                        className: "w-100",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderBreadcrumb__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        })
                    })
                })
            })
        ]
    }));
};
function mapStateToProps(state) {
    return {
        pageTitle: state.page.pageTitle
    };
}
function mapDispatchToProps(dispatch) {
    return (0,redux__WEBPACK_IMPORTED_MODULE_7__.bindActionCreators)({
        asideMobileToggle: store_actions__WEBPACK_IMPORTED_MODULE_8__/* .asideMobileToggle */ .Pj,
        offcanvasToggle: store_actions__WEBPACK_IMPORTED_MODULE_8__/* .offcanvasToggle */ .hV
    }, dispatch);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_6__.connect)(mapStateToProps, mapDispatchToProps)(LayoutHeader));

});

/***/ }),

/***/ 6786:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9167);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2765);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4563);
/* harmony import */ var components_auth_authContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5034);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var config_page_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5004);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3285);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5675);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__, store_actions__WEBPACK_IMPORTED_MODULE_10__, components_auth_authContext__WEBPACK_IMPORTED_MODULE_6__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__, store_actions__WEBPACK_IMPORTED_MODULE_10__, components_auth_authContext__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);













const isEmpty = __webpack_require__(4364);
const LayoutHeaderAdminUser = ({ variant  })=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const userDataFromStore = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state)=>state.auth.user
    );
    const [email, setEmail] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('');
    const [firstname, setFirstname] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('');
    const [profile_image1, setProfile_image] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('');
    const [id, setId] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('');
    const { userData  } = (0,components_auth_authContext__WEBPACK_IMPORTED_MODULE_6__/* .useAuth */ .a)();
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (userDataFromStore.email !== undefined) {
            setEmail(userDataFromStore.email);
            setFirstname(userDataFromStore.firstname);
            setProfile_image(userDataFromStore.profile_image);
            setId(userDataFromStore._id);
        } else {
            setEmail(userData === null || userData === void 0 ? void 0 : userData.email);
            setFirstname(userData === null || userData === void 0 ? void 0 : userData.firstname);
            setProfile_image(userData === null || userData === void 0 ? void 0 : userData.profile_image);
            setId(userData === null || userData === void 0 ? void 0 : userData._id);
        }
    }, [
        userData
    ]);
    const handleClick = (data)=>{
        if (data.title == 'Profile') {
            router.push({
                pathname: '/admin/profile',
                query: {
                    id: id
                }
            });
        }
    };
    const DisplayImage = (props)=>{
        const profile_image = props.image;
        const src = '/uploads/profile_images/' + profile_image;
        if (profile_image === undefined || isEmpty(profile_image)) {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faUserAlt
            }));
        } else {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    position: "relative",
                    width: "31px",
                    height: "31px"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    src: src,
                    layout: "fill",
                    alt: "Avatar image"
                })
            }));
        }
    };
    const handleLogout = async ()=>{
        // Sign out with Firebase
        await dispatch((0,store_actions__WEBPACK_IMPORTED_MODULE_10__/* .logoutUser */ .TX)());
        // Redirect to login page
        next_router__WEBPACK_IMPORTED_MODULE_7___default().push(config_page_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].AdminloginPagePath */ .Z.AdminloginPagePath);
    };
    const [navigationData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([
        [
            {
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faAddressCard
                }),
                title: 'Profile'
            },
            {
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCalendarTimes
                }),
                title: 'Timesheets'
            },
            {
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faLanguage
                }),
                title: 'Language'
            }, 
        ]
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown */ .Lt, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Widget13 */ .m8, {
                variant: variant,
                noCaret: true,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Widget13.Text */ .m8.Text, {
                        children: [
                            "Hi ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                children: firstname
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Widget13.Avatar */ .m8.Avatar, {
                        variant: "info",
                        display: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DisplayImage, {
                            image: profile_image1
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown.Menu */ .Lt.Menu, {
                wide: true,
                animated: true,
                align: "end",
                className: "overflow-hidden py-0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet */ .kr, {
                    scroll: true,
                    className: "border-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Header */ .kr.Header, {
                            className: "bg-primary rounded-0",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .RichList.Item */ .Of.Item, {
                                className: "w-100 p-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .RichList.Addon */ .Of.Addon, {
                                        addonType: "prepend",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Avatar */ .qE, {
                                            variant: "label-light",
                                            display: true,
                                            circle: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DisplayImage, {
                                                image: profile_image1
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .RichList.Content */ .Of.Content, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .RichList.Title */ .Of.Title, {
                                                className: "text-white",
                                                children: firstname ?? 'Guest'
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .RichList.Subtitle */ .Of.Subtitle, {
                                                className: "text-white",
                                                children: email ?? 'No email'
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Body */ .kr.Body, {
                            className: "p-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .GridNav */ .ex, {
                                flush: true,
                                action: true,
                                noRounded: true,
                                children: navigationData.map((navigationRow, index1)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .GridNav.Row */ .ex.Row, {
                                        children: navigationRow.map((nativationItem, index)=>{
                                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .GridNav.Item */ .ex.Item, {
                                                icon: nativationItem.icon,
                                                onClick: ()=>handleClick(nativationItem)
                                                ,
                                                children: nativationItem.title
                                            }, index));
                                        })
                                    }, index1)
                                )
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Footer */ .kr.Footer, {
                            bordered: true,
                            className: "rounded-0",
                            onClick: handleLogout,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                variant: "label-danger",
                                children: "Sign out"
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutHeaderAdminUser);

});

/***/ }),

/***/ 7962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9167);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9101);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);






const LayoutHeaderBreadcrumb = ({ breadcrumbData  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Breadcrumb */ .aG, {
        transparent: true,
        className: "mb-0",
        children: breadcrumbData.map((data, index)=>{
            const BreadcrumbItemIcon = index === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__.Home, {
            }) : undefined;
            const BreadcrumbItem = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Breadcrumb.Item */ .aG.Item, {
                icon: BreadcrumbItemIcon,
                children: data.text
            });
            if (data.link) {
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    passHref: true,
                    href: data.link,
                    children: BreadcrumbItem
                }, index));
            }
            return BreadcrumbItem;
        })
    }));
};
function mapStateToProps(state) {
    return {
        breadcrumbData: state.breadcrumb.breadcrumbData
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps)(LayoutHeaderBreadcrumb));


/***/ }),

/***/ 91:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9167);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4563);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2765);
/* harmony import */ var hooks_useSimplebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9134);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








const LayoutHeaderChat = ({ variant  })=>{
    const simplebarInstance = (0,hooks_useSimplebar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const [userData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
        name: 'Garrett Winters',
        title: 'UX Designer',
        avatar: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Avatar */ .qE, {
            display: true,
            circle: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_7__["default"], {
                src: "/images/avatar/blank.webp",
                layout: "fill",
                alt: "Avatar image"
            })
        })
    });
    const [conversationData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([
        {
            align: 'start',
            time: '3 min ago',
            bubbles: [
                {
                    variant: 'primary',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, eius.'
                },
                {
                    variant: 'primary',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, eius.'
                }, 
            ]
        },
        {
            align: 'end',
            time: '2 min ago',
            bubbles: [
                {
                    variant: undefined,
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, eius.'
                }, 
            ]
        },
        {
            align: 'start',
            time: '1 min ago',
            bubbles: [
                {
                    variant: 'primary',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, eius.'
                }, 
            ]
        }, 
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown */ .Lt, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown.Toggle */ .Lt.Toggle, {
                variant: variant,
                icon: true,
                noCaret: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                        icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faComments
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Button.Marker */ .zx.Marker, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Marker */ .Jx, {
                            type: "dot",
                            variant: "primary"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown.Menu */ .Lt.Menu, {
                wide: true,
                animated: true,
                align: "end",
                className: "overflow-hidden py-0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet */ .kr, {
                    scroll: true,
                    className: "border-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Header */ .kr.Header, {
                            bordered: true,
                            className: "rounded-0",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .RichList.Item */ .Of.Item, {
                                className: "w-100 p-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .RichList.Addon */ .Of.Addon, {
                                        addonType: "prepend",
                                        children: userData.avatar
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .RichList.Content */ .Of.Content, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .RichList.Title */ .Of.Title, {
                                                children: userData.name
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .RichList.Subtitle */ .Of.Subtitle, {
                                                children: userData.title
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Body */ .kr.Body, {
                            ref: simplebarInstance,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Chat */ .en, {
                                children: conversationData.map((conversation, index1)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Chat.Item */ .en.Item, {
                                        align: conversation.align,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Chat.Content */ .en.Content, {
                                            children: [
                                                conversation.bubbles.map((bubble, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Chat.Bubble */ .en.Bubble, {
                                                        variant: bubble.variant,
                                                        children: bubble.content
                                                    }, index)
                                                ),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Chat.Time */ .en.Time, {
                                                    children: conversation.time
                                                })
                                            ]
                                        })
                                    }, index1)
                                )
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Footer */ .kr.Footer, {
                            bordered: true,
                            className: "rounded-0",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .InputGroup */ .BZ, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .FormControl */ .NI, {
                                        type: "text",
                                        placeholder: "Type..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                        icon: true,
                                        variant: "primary",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faPaperPlane
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutHeaderChat);

});

/***/ }),

/***/ 8700:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9167);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const LayoutHeaderNav = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown */ .Lt, {
            className: "d-inline",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown.Toggle */ .Lt.Toggle, {
                    variant: "flat-primary",
                    width: "wider",
                    noCaret: true,
                    active: true,
                    children: "Quick"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown.Menu */ .Lt.Menu, {
                    align: "start",
                    animated: true,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown.Item */ .Lt.Item, {
                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faBoxes
                            }),
                            addon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Badge */ .Ct, {
                                variant: "warning",
                                pill: true,
                                children: "20"
                            }),
                            children: "Inventory Manager"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown.Submenu */ .Lt.Submenu, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown.Item */ .Lt.Item, {
                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faProjectDiagram
                                    }),
                                    caret: true,
                                    children: "Project manager"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown.SubmenuMenu */ .Lt.SubmenuMenu, {
                                    align: "end",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown.Item */ .Lt.Item, {
                                            bullet: true,
                                            children: "Create project"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown.Item */ .Lt.Item, {
                                            bullet: true,
                                            children: "Delete project"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown.Item */ .Lt.Item, {
                                            bullet: true,
                                            children: "Ongoing project"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown.Item */ .Lt.Item, {
                                            bullet: true,
                                            children: "Completed project"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown.Item */ .Lt.Item, {
                                            bullet: true,
                                            children: "Urgent project"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown.Submenu */ .Lt.Submenu, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown.Item */ .Lt.Item, {
                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTasks
                                    }),
                                    caret: true,
                                    children: "Task manager"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown.SubmenuMenu */ .Lt.SubmenuMenu, {
                                    align: "end",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown.Item */ .Lt.Item, {
                                            bullet: true,
                                            children: "Show task"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown.Item */ .Lt.Item, {
                                            bullet: true,
                                            children: "Assign task"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown.Item */ .Lt.Item, {
                                            bullet: true,
                                            children: "Assign member"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown.Item */ .Lt.Item, {
                                            bullet: true,
                                            children: "Completed task"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown.Item */ .Lt.Item, {
                                            bullet: true,
                                            children: "Urgent task"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown.Item */ .Lt.Item, {
                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faDollarSign
                            }),
                            children: "Invoice"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown.Item */ .Lt.Item, {
                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faUserCog
                            }),
                            children: "My Account"
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutHeaderNav);

});

/***/ }),

/***/ 5191:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9167);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4563);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2765);
/* harmony import */ var hooks_useSimplebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9134);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__]);
([_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);







const LayoutHeaderNotification = ({ variant  })=>{
    const simplebarInstance = (0,hooks_useSimplebar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const [notificationData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([
        {
            avatar: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Avatar */ .qE, {
                display: true,
                variant: "label-info",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faFileInvoice
                })
            }),
            content: 'New report has been received',
            time: '2 min ago'
        },
        {
            avatar: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Avatar */ .qE, {
                display: true,
                variant: "label-success",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faShoppingBasket
                })
            }),
            content: 'Last order was completed',
            time: '1 hrs ago'
        },
        {
            avatar: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Avatar */ .qE, {
                display: true,
                variant: "label-danger",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faUsers
                })
            }),
            content: 'Company meeting canceled',
            time: '5 hrs ago'
        },
        {
            avatar: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Avatar */ .qE, {
                display: true,
                variant: "label-warning",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faPaperPlane
                })
            }),
            content: 'New feedback received',
            time: '6 hrs ago'
        },
        {
            avatar: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Avatar */ .qE, {
                display: true,
                variant: "label-primary",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faDownload
                })
            }),
            content: 'New update was available',
            time: '1 day ago'
        },
        {
            avatar: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Avatar */ .qE, {
                display: true,
                variant: "label-success",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faAsterisk
                })
            }),
            content: 'Your password was changed',
            time: '2 day ago'
        },
        {
            avatar: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Avatar */ .qE, {
                display: true,
                variant: "label-info",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faUserPlus
                })
            }),
            content: 'New account has been registered',
            time: '5 day ago'
        }, 
    ]);
    const notificationCount = notificationData.length;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown */ .Lt, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown.Toggle */ .Lt.Toggle, {
                variant: variant,
                icon: true,
                noCaret: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                        icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faBell
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Button.Marker */ .zx.Marker, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Marker */ .Jx, {
                            type: "dot",
                            variant: "primary"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown.Menu */ .Lt.Menu, {
                wide: true,
                animated: true,
                align: "end",
                className: "overflow-hidden py-0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet */ .kr, {
                    scroll: true,
                    className: "border-0",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Header */ .kr.Header, {
                            className: "bg-info rounded-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Icon */ .kr.Icon, {
                                    className: "text-white",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faBell
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Title */ .kr.Title, {
                                    className: "text-white",
                                    children: "Notification"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Addon */ .kr.Addon, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Badge */ .Ct, {
                                        variant: "label-light",
                                        className: "fs-6",
                                        children: notificationCount > 9 ? '9+' : notificationCount
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Body */ .kr.Body, {
                            ref: simplebarInstance,
                            className: "p-0 rounded-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .RichList */ .Of, {
                                action: true,
                                children: notificationData.map((notification, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .RichList.Item */ .Of.Item, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .RichList.Addon */ .Of.Addon, {
                                                addonType: "prepend",
                                                children: notification.avatar
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .RichList.Content */ .Of.Content, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .RichList.Title */ .Of.Title, {
                                                        children: notification.content
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .RichList.Subtitle */ .Of.Subtitle, {
                                                        children: notification.time
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .RichList.Addon */ .Of.Addon, {
                                                addonType: "append",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Caret */ .Fj, {
                                                    className: "mx-2"
                                                })
                                            })
                                        ]
                                    }, index)
                                )
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutHeaderNotification);

});

/***/ }),

/***/ 5472:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9167);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4563);
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3285);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_layout_widget_WidgetTimeline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6779);
/* harmony import */ var components_layout_widget_WidgetContacts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(315);
/* harmony import */ var hooks_useSimplebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9134);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([store_actions__WEBPACK_IMPORTED_MODULE_5__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__, components_layout_widget_WidgetContacts__WEBPACK_IMPORTED_MODULE_9__, components_layout_widget_WidgetTimeline__WEBPACK_IMPORTED_MODULE_8__]);
([store_actions__WEBPACK_IMPORTED_MODULE_5__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__, components_layout_widget_WidgetContacts__WEBPACK_IMPORTED_MODULE_9__, components_layout_widget_WidgetTimeline__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);











const offcanvasName = 'agenda';
const OffcanvasAgenda = ({ show , offcanvasChange  })=>{
    const simplebarInstance = (0,hooks_useSimplebar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
    const handleHide = ()=>offcanvasChange({
            name: offcanvasName,
            value: false
        })
    ;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Offcanvas */ .TB, {
        placement: "end",
        show: show,
        onHide: handleHide,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Offcanvas.Header */ .TB.Header, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Offcanvas.Title */ .TB.Title, {
                        children: "May 14, 2020"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                        icon: true,
                        variant: "label-danger",
                        onClick: handleHide,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Offcanvas.Body */ .TB.Body, {
                ref: simplebarInstance,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_widget_WidgetTimeline__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        title: "Upcoming events",
                        timeline: [
                            {
                                time: '12:00',
                                text: 'Donec laoreet fringilla justo a pellentesque',
                                marker: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Marker */ .Jx, {
                                    type: "circle",
                                    variant: "primary"
                                })
                            },
                            {
                                time: '13:20',
                                text: 'Nunc quis massa nec enim',
                                marker: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Marker */ .Jx, {
                                    type: "circle",
                                    variant: "success"
                                })
                            },
                            {
                                time: '14:00',
                                text: 'Praesent sit amet',
                                marker: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Marker */ .Jx, {
                                    type: "circle",
                                    variant: "danger"
                                })
                            }, 
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_widget_WidgetContacts__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        contacts: [
                            {
                                name: 'Charlie Stone',
                                title: 'Art Director',
                                time: '1 min',
                                link: '#',
                                image: '/images/avatar/blank.webp',
                                count: 1,
                                online: false,
                                avatarMarker: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Avatar.Icon */ .qE.Icon, {
                                    variant: "info",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faThumbtack
                                    })
                                })
                            },
                            {
                                name: 'Freddie Stevens',
                                title: 'Journalist',
                                time: '2 hour',
                                link: '#',
                                image: '/images/avatar/blank.webp',
                                count: 12,
                                online: true
                            },
                            {
                                name: 'Tyler Clark',
                                title: 'Programmer',
                                time: '5 hour',
                                link: '#',
                                image: '/images/avatar/blank.webp',
                                count: 0,
                                online: true
                            },
                            {
                                name: 'Darcy Harrison',
                                title: 'Internet Marketer',
                                time: '1 day',
                                link: '#',
                                image: '/images/avatar/blank.webp',
                                count: 2,
                                online: false,
                                avatarMarker: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Avatar.Icon */ .qE.Icon, {
                                    variant: "success",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck
                                    })
                                })
                            },
                            {
                                name: 'Victor Payne',
                                title: 'Accountant',
                                time: '1 day',
                                link: '#',
                                image: '/images/avatar/blank.webp',
                                count: 5,
                                online: true
                            },
                            {
                                name: 'Alberta Harris',
                                title: 'UI Designer',
                                time: '2 day',
                                link: '#',
                                image: '/images/avatar/blank.webp',
                                count: 4,
                                online: false
                            }, 
                        ]
                    })
                ]
            })
        ]
    }));
};
function mapStateToProps(state) {
    return {
        show: state.offcanvas[offcanvasName]
    };
}
function mapDispatchToProps(dispatch) {
    return (0,redux__WEBPACK_IMPORTED_MODULE_6__.bindActionCreators)({
        offcanvasChange: store_actions__WEBPACK_IMPORTED_MODULE_5__/* .offcanvasChange */ .bd
    }, dispatch);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_7__.connect)(mapStateToProps, mapDispatchToProps)(OffcanvasAgenda));

});

/***/ }),

/***/ 7284:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9167);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4563);
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3285);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_layout_widget_WidgetOptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4455);
/* harmony import */ var components_layout_widget_WidgetPerformance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7123);
/* harmony import */ var hooks_useSimplebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9134);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([store_actions__WEBPACK_IMPORTED_MODULE_5__, components_layout_widget_WidgetPerformance__WEBPACK_IMPORTED_MODULE_9__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__]);
([store_actions__WEBPACK_IMPORTED_MODULE_5__, components_layout_widget_WidgetPerformance__WEBPACK_IMPORTED_MODULE_9__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);











const offcanvasName = 'setting';
const OffcanvasSetting = ({ show , offcanvasChange  })=>{
    const simplebarInstance = (0,hooks_useSimplebar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
    const handleHide = ()=>offcanvasChange({
            name: offcanvasName,
            value: false
        })
    ;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Offcanvas */ .TB, {
        placement: "end",
        show: show,
        onHide: handleHide,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Offcanvas.Header */ .TB.Header, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Offcanvas.Title */ .TB.Title, {
                        children: "Settings"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                        icon: true,
                        variant: "label-danger",
                        onClick: handleHide,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Offcanvas.Body */ .TB.Body, {
                ref: simplebarInstance,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_widget_WidgetPerformance__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        performances: [
                            {
                                title: 'CPU Load',
                                subtitle: '60%',
                                variant: 'info',
                                now: 60
                            },
                            {
                                title: 'CPU Temparature',
                                subtitle: '42\xb0',
                                variant: 'success',
                                now: 30
                            },
                            {
                                title: 'RAM Usage',
                                subtitle: '6,532 MB',
                                variant: 'danger',
                                now: 80
                            }, 
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_widget_WidgetOptions__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        title: "Customer care",
                        defaultSettings: {
                            setting1: {
                                checked: false,
                                label: 'Enable notifications'
                            },
                            setting2: {
                                checked: true,
                                label: 'Enable case tracking'
                            },
                            setting3: {
                                checked: false,
                                label: 'Support portal'
                            }
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_widget_WidgetOptions__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        title: "Reports",
                        defaultSettings: {
                            setting1: {
                                checked: false,
                                label: 'Generate reports'
                            },
                            setting2: {
                                checked: true,
                                label: 'Enable report export'
                            },
                            setting3: {
                                checked: false,
                                label: 'Allow data'
                            }
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_widget_WidgetOptions__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        title: "Projects",
                        defaultSettings: {
                            setting1: {
                                checked: false,
                                label: 'Enable create projects'
                            },
                            setting2: {
                                checked: true,
                                label: 'Enable custom projects'
                            },
                            setting3: {
                                checked: false,
                                label: 'Enable project review'
                            }
                        }
                    })
                ]
            })
        ]
    }));
};
function mapStateToProps(state) {
    return {
        show: state.offcanvas[offcanvasName]
    };
}
function mapDispatchToProps(dispatch) {
    return (0,redux__WEBPACK_IMPORTED_MODULE_6__.bindActionCreators)({
        offcanvasChange: store_actions__WEBPACK_IMPORTED_MODULE_5__/* .offcanvasChange */ .bd
    }, dispatch);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_7__.connect)(mapStateToProps, mapDispatchToProps)(OffcanvasSetting));

});

/***/ }),

/***/ 5858:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9167);
/* harmony import */ var _floating_button_FloatingButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3962);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_floating_button_FloatingButton__WEBPACK_IMPORTED_MODULE_3__]);
_floating_button_FloatingButton__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const BackgroundLayout = ({ children  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Structure */ .vA, {
                type: "holder",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Structure */ .vA, {
                    type: "wrapper",
                    className: "bg-primary",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Structure */ .vA, {
                        type: "content",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W2, {
                            fluid: true,
                            className: "g-4",
                            children: children
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_floating_button_FloatingButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackgroundLayout);

});

/***/ }),

/***/ 8295:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9167);
/* harmony import */ var _floating_button_FloatingButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3962);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_floating_button_FloatingButton__WEBPACK_IMPORTED_MODULE_3__]);
_floating_button_FloatingButton__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const BlankLayout = ({ children  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Structure */ .vA, {
                type: "holder",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Structure */ .vA, {
                    type: "wrapper",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Structure */ .vA, {
                        type: "content",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W2, {
                            fluid: true,
                            className: "g-4",
                            children: children
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_floating_button_FloatingButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlankLayout);

});

/***/ }),

/***/ 6875:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9167);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3285);
/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9409);
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4471);
/* harmony import */ var _aside_Aside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7330);
/* harmony import */ var _offcanvas_agenda_OffcanvasAgenda__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5472);
/* harmony import */ var _offcanvas_setting_OffcanvasSetting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7284);
/* harmony import */ var _floating_button_FloatingButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3962);
/* harmony import */ var config_page_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5004);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([store_actions__WEBPACK_IMPORTED_MODULE_5__, _floating_button_FloatingButton__WEBPACK_IMPORTED_MODULE_11__, _offcanvas_setting_OffcanvasSetting__WEBPACK_IMPORTED_MODULE_10__, _offcanvas_agenda_OffcanvasAgenda__WEBPACK_IMPORTED_MODULE_9__, _footer_Footer__WEBPACK_IMPORTED_MODULE_7__, _header_Header__WEBPACK_IMPORTED_MODULE_6__, _aside_Aside__WEBPACK_IMPORTED_MODULE_8__]);
([store_actions__WEBPACK_IMPORTED_MODULE_5__, _floating_button_FloatingButton__WEBPACK_IMPORTED_MODULE_11__, _offcanvas_setting_OffcanvasSetting__WEBPACK_IMPORTED_MODULE_10__, _offcanvas_agenda_OffcanvasAgenda__WEBPACK_IMPORTED_MODULE_9__, _footer_Footer__WEBPACK_IMPORTED_MODULE_7__, _header_Header__WEBPACK_IMPORTED_MODULE_6__, _aside_Aside__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);













const DefaultLayout = ({ children , activeLink , menuActiveLinkChange , breadcrumb , breadcrumbChange , pageTitle , pageTitleChange  })=>{
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (activeLink) {
            menuActiveLinkChange(activeLink);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        activeLink
    ]);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (breadcrumb) {
            breadcrumbChange(breadcrumb);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        breadcrumb
    ]);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (pageTitle) {
            pageTitleChange(pageTitle);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pageTitle
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Structure */ .vA, {
                type: "holder",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_aside_Aside__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Structure */ .vA, {
                        type: "wrapper",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header_Header__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Structure */ .vA, {
                                type: "content",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W2, {
                                    fluid: config_page_config__WEBPACK_IMPORTED_MODULE_12__/* ["default"].enableContainerFluid */ .Z.enableContainerFluid,
                                    className: "g-4",
                                    children: children
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_footer_Footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_offcanvas_agenda_OffcanvasAgenda__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_offcanvas_setting_OffcanvasSetting__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_floating_button_FloatingButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            })
        ]
    }));
};
function mapDispatchToProps(dispatch) {
    return (0,redux__WEBPACK_IMPORTED_MODULE_4__.bindActionCreators)({
        menuActiveLinkChange: store_actions__WEBPACK_IMPORTED_MODULE_5__/* .menuActiveLinkChange */ .r$,
        breadcrumbChange: store_actions__WEBPACK_IMPORTED_MODULE_5__/* .breadcrumbChange */ .Ww,
        pageTitleChange: store_actions__WEBPACK_IMPORTED_MODULE_5__/* .pageTitleChange */ .pP
    }, dispatch);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(null, mapDispatchToProps)(DefaultLayout));

});

/***/ }),

/***/ 315:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9167);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4563);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






const WidgetContacts = ({ contacts  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet */ .kr, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Header */ .kr.Header, {
                bordered: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Icon */ .kr.Icon, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faUsers
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Title */ .kr.Title, {
                        children: "Contacts"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Addon */ .kr.Addon, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                            icon: true,
                            variant: "label-primary",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPlus
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Body */ .kr.Body, {
                className: "p-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .RichList */ .Of, {
                    flush: true,
                    action: true,
                    children: contacts.map((contact, index)=>{
                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .RichList.Item */ .Of.Item, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .RichList.Addon */ .Of.Addon, {
                                    addonType: "prepend",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Avatar */ .qE, {
                                        circle: true,
                                        children: [
                                            contact.avatarMarker && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Avatar.Addon */ .qE.Addon, {
                                                position: "top",
                                                children: contact.avatarMarker
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Avatar.Display */ .qE.Display, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                    src: contact.image,
                                                    layout: "fill",
                                                    alt: contact.name
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Avatar.Addon */ .qE.Addon, {
                                                position: "bottom",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Marker */ .Jx, {
                                                    type: "dot",
                                                    variant: contact.online ? 'success' : 'secondary'
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .RichList.Content */ .Of.Content, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .RichList.Title */ .Of.Title, {
                                            children: contact.name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .RichList.Subtitle */ .Of.Subtitle, {
                                            children: contact.title
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .RichList.Addon */ .Of.Addon, {
                                    addonType: "append",
                                    className: "flex-column align-items-end",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-muted text-nowrap",
                                            children: contact.time
                                        }),
                                        contact.count > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Badge */ .Ct, {
                                            variant: "success",
                                            pill: true,
                                            children: contact.count
                                        })
                                    ]
                                })
                            ]
                        }, index));
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WidgetContacts);

});

/***/ }),

/***/ 4455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9167);



const WidgetOptions = ({ title , defaultSettings  })=>{
    const [settings, setSettings] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(defaultSettings);
    const handleChange = (settingKey, checked)=>{
        setSettings((prevSettings)=>({
                ...prevSettings,
                [settingKey]: {
                    ...prevSettings[settingKey],
                    checked
                }
            })
        );
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet */ .kr, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Header */ .kr.Header, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Title */ .kr.Title, {
                    children: title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Body */ .kr.Body, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "d-grid gap-1",
                    children: Object.keys(settings).map((settingKey)=>{
                        const setting = settings[settingKey];
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Check */ .l0.Check, {
                                type: "switch",
                                label: setting.label,
                                checked: setting.checked,
                                onChange: (e)=>handleChange(settingKey, e.target.checked)
                            })
                        }, settingKey));
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WidgetOptions);


/***/ }),

/***/ 7123:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9167);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4563);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const WidgetPerformance = ({ performances  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet */ .kr, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Header */ .kr.Header, {
                bordered: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Icon */ .kr.Icon, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faBolt
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Title */ .kr.Title, {
                        children: "Performance"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Body */ .kr.Body, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "d-grid gap-3",
                    children: performances.map((performance, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Widget4 */ .UV, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Widget4.Group */ .UV.Group, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Widget4.Display */ .UV.Display, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Widget4.Subtitle */ .UV.Subtitle, {
                                                children: performance.title
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Widget4.Addon */ .UV.Addon, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Widget4.Subtitle */ .UV.Subtitle, {
                                                className: `text-${performance.variant}`,
                                                children: performance.subtitle
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .ProgressBar */ .ko, {
                                    now: performance.now,
                                    variant: performance.variant,
                                    size: "sm"
                                })
                            ]
                        }, index)
                    )
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WidgetPerformance);

});

/***/ }),

/***/ 6779:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9167);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const WidgetTimeline = ({ title , timeline  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet */ .kr, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Header */ .kr.Header, {
                bordered: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Icon */ .kr.Icon, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTasks
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Title */ .kr.Title, {
                        children: title
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Body */ .kr.Body, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Timeline */ .TY, {
                    className: "rich-list-bordered",
                    children: timeline.map((timelineItem, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Timeline.Item */ .TY.Item, {
                            pin: timelineItem.marker,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .RichList.Item */ .Of.Item, {
                                content: true,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .RichList.Title */ .Of.Title, {
                                        children: timelineItem.time
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .RichList.Subtitle */ .Of.Subtitle, {
                                        children: timelineItem.text
                                    })
                                ]
                            })
                        }, index)
                    )
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WidgetTimeline);

});

/***/ }),

/***/ 8550:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4563);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2765);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(303);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__]);
([_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





/*
 * Aside Menu Configuration
 * the object below is representation of the side navigation menu configuration
 * there are some property you can use to customize your menu
 */ const ASIDE_MENU = [
    {
        type: "link",
        name: "Admindashboard",
        title: "Dashboard",
        link: "/admin/",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faDesktop
        })
    },
    {
        type: "link",
        name: "client",
        title: "Client",
        link: "/admin/clients",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faUser
        })
    },
    {
        type: "group",
        name: "accounting",
        title: "Accounting",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faDollar
        }),
        child: [
            {
                type: "link",
                name: "transaction",
                title: "Transaction",
                link: "/admin/accounting/transaction"
            },
            {
                type: "link",
                name: "journalEntry",
                title: "Journal Entry",
                link: "/admin/accounting/journalEntry",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faJournalWhills
                })
            },
            {
                type: "link",
                name: "transfer",
                title: "Transfer",
                link: "/admin/accounting/transfer",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faMoneyBillTransfer
                })
            },
            {
                type: "link",
                name: "chartAccount",
                title: "Chart of Accounts",
                link: "/admin/accounting/chart",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faLineChart
                })
            }
        ]
    },
    {
        type: "group",
        name: "warehouse",
        title: "Warehouse",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faWarehouse
        }),
        child: [
            {
                type: "link",
                name: "warehouseInventoryHistory",
                title: "Inventory History",
                link: "/admin/warehouse/inventory"
            },
            {
                type: "link",
                name: "warehouseGoodReceipt",
                title: "Good Receipt",
                link: "/admin/warehouse/good"
            }
        ]
    },
    {
        type: "link",
        name: "contract",
        title: "Contract",
        link: "/admin/contract",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faFileContract
        })
    },
    {
        type: "link",
        name: "project",
        title: "Project",
        link: "/admin/project",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faProjectDiagram
        })
    },
    {
        type: "group",
        name: "setting",
        title: "Setting",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCog
        }),
        child: [
            {
                type: "link",
                name: "staff",
                title: "Staff",
                link: "/admin/setting/staff",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faStaffAesculapius
                })
            },
            {
                type: "group",
                name: "finance",
                title: "Finance",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faEuroSign
                }),
                child: [
                    {
                        type: "link",
                        name: "currency",
                        title: "Currency",
                        link: "/admin/setting/currency"
                    },
                    {
                        type: "link",
                        name: "taxes",
                        title: "Taxes",
                        link: "/admin/setting/tax"
                    },
                    {
                        type: "link",
                        name: "paymentmode",
                        title: "Payment Mode",
                        link: "/admin/setting/paymentmode"
                    },
                    {
                        type: "link",
                        name: "expensecategory",
                        title: "Expense Category",
                        link: "/admin/setting/expensecategory"
                    }
                ]
            },
            {
                type: "group",
                name: "clients",
                title: "Clients",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faUser
                }),
                child: [
                    {
                        type: "link",
                        name: "clientgroup",
                        title: "Client Group",
                        link: "/admin/setting/clientgroup",
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faUserGroup
                        })
                    },
                    {
                        type: "link",
                        name: "clientfield",
                        title: "Client Field",
                        link: "/admin/setting/clientfield",
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faUsersViewfinder
                        })
                    }
                ]
            },
            {
                type: "group",
                name: "support",
                title: "Support",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faGoodreads
                }),
                child: [
                    {
                        type: "link",
                        name: "department",
                        title: "Department",
                        link: "/admin/setting/department",
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                            icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faAddressCard
                        })
                    }
                ]
            },
            {
                type: "group",
                name: "contract",
                title: "Contract",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faFileContract
                }),
                child: [
                    {
                        type: "link",
                        name: "contractType",
                        title: "Contract Type",
                        link: "/admin/setting/contract",
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faFileContract
                        })
                    }
                ]
            },
            {
                type: "group",
                name: "item",
                title: "Item",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faListAlt
                }),
                child: [
                    {
                        type: "link",
                        name: "itemField",
                        title: "Item Field",
                        link: "/admin/setting/itemfield",
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faList12
                        })
                    }
                ]
            },
            {
                type: "link",
                name: "role",
                title: "Role",
                link: "/admin/setting/role",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faQuestionCircle
                })
            }
        ]
    }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ASIDE_MENU);

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


/***/ }),

/***/ 9134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ useSimplebar)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "simplebar"
const external_simplebar_namespaceObject = require("simplebar");
var external_simplebar_default = /*#__PURE__*/__webpack_require__.n(external_simplebar_namespaceObject);
;// CONCATENATED MODULE: ./src/hooks/useSimplebar.ts


function useSimplebar() {
    const simplebarInstance = external_react_default().useRef();
    const simplebarCallback = external_react_default().useCallback((node)=>{
        if (node) {
            simplebarInstance.current = new (external_simplebar_default())(node);
        }
    }, []);
    return simplebarCallback;
};


/***/ }),

/***/ 682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ progress)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
;// CONCATENATED MODULE: ./src/modules/progress/index.tsx





class Progress extends (external_react_default()).Component {
    render() {
        const { color , height  } = this.props;
        return jsx_runtime_.jsx((style_default()), {
            id: "17e4448b52f9d248",
            dynamic: [
                height,
                color,
                color,
                color
            ],
            children: `#nprogress {pointer-events:none}
#nprogress .bar {position:fixed;
z-index:9999;
top:0;
left:0;
width:100%;
height:${height}px;
background:${color}}
#nprogress .peg {display:block;
position:absolute;
right:0px;
width:100px;
height:100%;
opacity:1;
box-shadow:none;
-webkit-transform:rotate(3deg) translate(0px, -4px);
-ms-transform:rotate(3deg) translate(0px, -4px);
-webkit-transform:rotate(3deg) translate(0px, -4px);
-moz-transform:rotate(3deg) translate(0px, -4px);
-ms-transform:rotate(3deg) translate(0px, -4px);
transform:rotate(3deg) translate(0px, -4px)}
#nprogress .spinner {display:block;
position:fixed;
z-index:9999;
top:15px;
right:15px}
#nprogress .spinner-icon {width:18px;
height:18px;
box-sizing:border-box;
border:solid 2px transparent;
border-top-color:${color};
border-left-color:${color};
border-radius:50%;
-webkit-animation:nprogresss-spinner 400ms linear infinite;
-webkit-animation:nprogress-spinner 400ms linear infinite;
animation:nprogress-spinner 400ms linear infinite}
.nprogress-custom-parent {overflow:hidden;
position:relative}
.nprogress-custom-parent #nprogress .spinner, .nprogress-custom-parent #nprogress .bar {position:absolute}
@keyframes nprogress-spinner {0% {-webkit-transform:rotate(0deg)}100% {-webkit-transform:rotate(360deg)}}
@keyframes nprogress-spinner {0% {transform:rotate(0deg)}100% {transform:rotate(360deg)}}`
        });
    }
    componentDidMount() {
        const { options  } = this.props;
        if (options) {
            external_nprogress_default().configure(options);
        }
        router_default().events.on('routeChangeStart', this.routeChangeStart);
        router_default().events.on('routeChangeComplete', this.routeChangeEnd);
        router_default().events.on('routeChangeError', this.routeChangeEnd);
    }
    constructor(...args){
        super(...args);
        this.routeChangeStart = ()=>{
            external_nprogress_default().set(this.props.startPosition);
            external_nprogress_default().start();
        };
        this.routeChangeEnd = ()=>{
            if (this.timer) {
                clearTimeout(this.timer);
            }
            this.timer = setTimeout(()=>{
                external_nprogress_default().done(true);
            }, this.props.stopDelayMs);
        };
    }
}
Progress.defaultProps = {
    color: '#2196f3',
    startPosition: 0.3,
    stopDelayMs: 200,
    height: 3,
    options: {
        showSpinner: false
    }
};
/* harmony default export */ const progress = (Progress);


/***/ }),

/***/ 2957:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9167);
/* harmony import */ var components_auth_authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5034);
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3490);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _blueupcode_progress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(682);
/* harmony import */ var components_layout_getLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8383);
/* harmony import */ var config_page_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5004);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_auth_authContext__WEBPACK_IMPORTED_MODULE_2__, components_layout_getLayout__WEBPACK_IMPORTED_MODULE_6__]);
([components_auth_authContext__WEBPACK_IMPORTED_MODULE_2__, components_layout_getLayout__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
















function MyApp({ Component , pageProps  }) {
    const Layout = (0,components_layout_getLayout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(Component.layoutName ?? config_page_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].defaultLayoutName */ .Z.defaultLayoutName);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .SSRProvider */ .HK, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_auth_authContext__WEBPACK_IMPORTED_MODULE_2__/* .AuthProvider */ .H, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .ThemeProvider */ .f6, {
                forcedTheme: Component.theme,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .DirectionProvider */ ._9, {
                    defaultDirection: config_page_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].defaultDirection */ .Z.defaultDirection,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                                children: [
                                    Component.pageTitle ?? 'Untitled',
                                    " | ",
                                    config_page_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].appName */ .Z.appName
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Layout, {
                            activeLink: Component.activeLink,
                            pageTitle: Component.pageTitle,
                            breadcrumb: Component.breadcrumb,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_progress__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                    ...pageProps
                                })
                            ]
                        })
                    ]
                })
            })
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store__WEBPACK_IMPORTED_MODULE_3__/* .wrapper.withRedux */ .Y.withRedux(MyApp));

});

/***/ }),

/***/ 3490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ wrapper)
});

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: external "@redux-devtools/extension"
const extension_namespaceObject = require("@redux-devtools/extension");
;// CONCATENATED MODULE: ./src/store/reducers/layoutReducer.ts

const InitialState = {
    asideDesktopMinimized: false,
    asideMobileMinimized: true
};
const layoutReducer = (state = InitialState, action)=>{
    switch(action.type){
        case external_next_redux_wrapper_namespaceObject.HYDRATE:
            return {
                ...state,
                ...action.payload
            };
        case 'ASIDE_DESKTOP_TOGGLE':
            return {
                ...state,
                asideDesktopMinimized: !state.asideDesktopMinimized
            };
        case 'ASIDE_MOBILE_TOGGLE':
            return {
                ...state,
                asideMobileMinimized: !state.asideMobileMinimized
            };
        case 'ASIDE_DESKTOP_CHANGE':
            return {
                ...state,
                asideDesktopMinimized: action.payload
            };
        case 'ASIDE_MOBILE_CHANGE':
            return {
                ...state,
                asideMobileMinimized: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_layoutReducer = (layoutReducer);

;// CONCATENATED MODULE: ./src/store/reducers/menuReducer.ts

const menuReducer_InitialState = {
    activeLink: '',
    activeLinkPartial: []
};
const menuReducer = (state = menuReducer_InitialState, action)=>{
    switch(action.type){
        case external_next_redux_wrapper_namespaceObject.HYDRATE:
            return {
                ...state,
                ...action.payload
            };
        case 'MENU_ACTIVE_LINK_CHANGE':
            return {
                ...state,
                activeLink: action.payload
            };
        case 'MENU_ACTIVE_LINK_PARTIAL_CHANGE':
            return {
                ...state,
                activeLinkPartial: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_menuReducer = (menuReducer);

;// CONCATENATED MODULE: ./src/store/reducers/offcanvasReducer.ts

const offcanvasReducer_InitialState = {
    agenda: false,
    setting: false,
    navigation: false
};
const offcanvasReducer = (state = offcanvasReducer_InitialState, action)=>{
    switch(action.type){
        case external_next_redux_wrapper_namespaceObject.HYDRATE:
            return {
                ...state,
                ...action.payload
            };
        case 'OFFCANVAS_TOGGLE':
            return {
                ...state,
                [action.payload]: !state[action.payload]
            };
        case 'OFFCANVAS_CHANGE':
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_offcanvasReducer = (offcanvasReducer);

;// CONCATENATED MODULE: ./src/store/reducers/breadcrumbReducer.ts

const breadcrumbReducer_InitialState = {
    breadcrumbData: []
};
const breadcrumbReducer = (state = breadcrumbReducer_InitialState, action)=>{
    switch(action.type){
        case external_next_redux_wrapper_namespaceObject.HYDRATE:
            return {
                ...state,
                ...action.payload
            };
        case 'BREADCRUMB_CHANGE':
            return {
                ...state,
                breadcrumbData: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_breadcrumbReducer = (breadcrumbReducer);

;// CONCATENATED MODULE: ./src/store/reducers/pageReducer.ts

const pageReducer_InitialState = {
    pageTitle: ''
};
const pageReducer = (state = pageReducer_InitialState, action)=>{
    switch(action.type){
        case external_next_redux_wrapper_namespaceObject.HYDRATE:
            return {
                ...state,
                ...action.payload
            };
        case 'PAGE_TITLE_CHANGE':
            return {
                ...state,
                pageTitle: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_pageReducer = (pageReducer);

// EXTERNAL MODULE: ./src/utils/action.tsx
var utils_action = __webpack_require__(5982);
;// CONCATENATED MODULE: ./src/store/reducers/admin/authReducer.tsx


const isEmpty = __webpack_require__(4364);
const initialState = {
    isAuthenticated: false,
    user: {
    }
};
const authReducer = (state = initialState, action)=>{
    switch(action.type){
        case external_next_redux_wrapper_namespaceObject.HYDRATE:
            return {
                ...state,
                ...action.payload
            };
        case utils_action/* SET_CURRENT_USER */.u:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const admin_authReducer = (authReducer);

;// CONCATENATED MODULE: ./src/store/reducers/admin/errorsReducer.tsx


const errorsReducer_isEmpty = __webpack_require__(4364);
const errorsReducer_initialState = {
    errors: {
    }
};
const errorsReducer = (state = errorsReducer_initialState, action)=>{
    switch(action.type){
        case external_next_redux_wrapper_namespaceObject.HYDRATE:
            return {
                ...state,
                ...action.payload
            };
        case utils_action/* GET_ERRORS */.C:
            return {
                ...state,
                errors: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const admin_errorsReducer = (errorsReducer);

;// CONCATENATED MODULE: ./src/store/reducers/index.ts








const reducers = (0,external_redux_.combineReducers)({
    errors: admin_errorsReducer,
    auth: admin_authReducer,
    layout: reducers_layoutReducer,
    breadcrumb: reducers_breadcrumbReducer,
    offcanvas: reducers_offcanvasReducer,
    menu: reducers_menuReducer,
    page: reducers_pageReducer
});
/* harmony default export */ const store_reducers = (reducers);

;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: ./src/store/index.ts





// import createSagaMiddleware from 'redux-saga'
// import rootSaga from './sagas'
// const sagaMiddleware = createSagaMiddleware()
const makeStore = (context)=>{
    // const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)))
    // sagaMiddleware.run(rootSaga)
    const store = (0,external_redux_.createStore)(store_reducers, (0,extension_namespaceObject.composeWithDevTools)((0,external_redux_.applyMiddleware)((external_redux_thunk_default()))));
    return store;
};
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore);


/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 6449:
/***/ ((module) => {

module.exports = require("@restart/hooks/useCallbackRef");

/***/ }),

/***/ 5205:
/***/ ((module) => {

module.exports = require("@restart/hooks/useEventCallback");

/***/ }),

/***/ 5756:
/***/ ((module) => {

module.exports = require("@restart/hooks/useIsomorphicEffect");

/***/ }),

/***/ 3282:
/***/ ((module) => {

module.exports = require("@restart/hooks/useMergedRefs");

/***/ }),

/***/ 2541:
/***/ ((module) => {

module.exports = require("@restart/hooks/useTimeout");

/***/ }),

/***/ 6816:
/***/ ((module) => {

module.exports = require("@restart/hooks/useWillUnmount");

/***/ }),

/***/ 5303:
/***/ ((module) => {

module.exports = require("@restart/ui/Anchor");

/***/ }),

/***/ 9642:
/***/ ((module) => {

module.exports = require("@restart/ui/Button");

/***/ }),

/***/ 451:
/***/ ((module) => {

module.exports = require("@restart/ui/Dropdown");

/***/ }),

/***/ 1328:
/***/ ((module) => {

module.exports = require("@restart/ui/DropdownContext");

/***/ }),

/***/ 9638:
/***/ ((module) => {

module.exports = require("@restart/ui/DropdownItem");

/***/ }),

/***/ 6784:
/***/ ((module) => {

module.exports = require("@restart/ui/DropdownMenu");

/***/ }),

/***/ 7566:
/***/ ((module) => {

module.exports = require("@restart/ui/DropdownToggle");

/***/ }),

/***/ 7528:
/***/ ((module) => {

module.exports = require("@restart/ui/Modal");

/***/ }),

/***/ 328:
/***/ ((module) => {

module.exports = require("@restart/ui/ModalManager");

/***/ }),

/***/ 8180:
/***/ ((module) => {

module.exports = require("@restart/ui/Nav");

/***/ }),

/***/ 5822:
/***/ ((module) => {

module.exports = require("@restart/ui/NavItem");

/***/ }),

/***/ 6372:
/***/ ((module) => {

module.exports = require("@restart/ui/NoopTransition");

/***/ }),

/***/ 2962:
/***/ ((module) => {

module.exports = require("@restart/ui/Overlay");

/***/ }),

/***/ 6638:
/***/ ((module) => {

module.exports = require("@restart/ui/SelectableContext");

/***/ }),

/***/ 4515:
/***/ ((module) => {

module.exports = require("@restart/ui/TabContext");

/***/ }),

/***/ 7753:
/***/ ((module) => {

module.exports = require("@restart/ui/TabPanel");

/***/ }),

/***/ 4636:
/***/ ((module) => {

module.exports = require("@restart/ui/Tabs");

/***/ }),

/***/ 2035:
/***/ ((module) => {

module.exports = require("@restart/ui/ssr");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("dom-helpers/addClass");

/***/ }),

/***/ 5918:
/***/ ((module) => {

module.exports = require("dom-helpers/addEventListener");

/***/ }),

/***/ 7719:
/***/ ((module) => {

module.exports = require("dom-helpers/camelize");

/***/ }),

/***/ 7107:
/***/ ((module) => {

module.exports = require("dom-helpers/canUseDOM");

/***/ }),

/***/ 6375:
/***/ ((module) => {

module.exports = require("dom-helpers/contains");

/***/ }),

/***/ 7836:
/***/ ((module) => {

module.exports = require("dom-helpers/css");

/***/ }),

/***/ 7674:
/***/ ((module) => {

module.exports = require("dom-helpers/hasClass");

/***/ }),

/***/ 2902:
/***/ ((module) => {

module.exports = require("dom-helpers/ownerDocument");

/***/ }),

/***/ 6117:
/***/ ((module) => {

module.exports = require("dom-helpers/querySelectorAll");

/***/ }),

/***/ 2590:
/***/ ((module) => {

module.exports = require("dom-helpers/removeClass");

/***/ }),

/***/ 8951:
/***/ ((module) => {

module.exports = require("dom-helpers/removeEventListener");

/***/ }),

/***/ 7233:
/***/ ((module) => {

module.exports = require("dom-helpers/scrollbarSize");

/***/ }),

/***/ 6479:
/***/ ((module) => {

module.exports = require("dom-helpers/transitionEnd");

/***/ }),

/***/ 7644:
/***/ ((module) => {

module.exports = require("invariant");

/***/ }),

/***/ 5567:
/***/ ((module) => {

module.exports = require("jwt-decode");

/***/ }),

/***/ 5061:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 3053:
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 9101:
/***/ ((module) => {

module.exports = require("react-feather");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 8297:
/***/ ((module) => {

module.exports = require("react-stickynode");

/***/ }),

/***/ 7967:
/***/ ((module) => {

module.exports = require("react-transition-group/Transition");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 3372:
/***/ ((module) => {

module.exports = require("uncontrollable");

/***/ }),

/***/ 5548:
/***/ ((module) => {

module.exports = require("warning");

/***/ }),

/***/ 303:
/***/ ((module) => {

module.exports = import("@fortawesome/free-brands-svg-icons");;

/***/ }),

/***/ 2765:
/***/ ((module) => {

module.exports = import("@fortawesome/free-regular-svg-icons");;

/***/ }),

/***/ 4563:
/***/ ((module) => {

module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7190,1664,5675,9167,8367,7875], () => (__webpack_exec__(2957)));
module.exports = __webpack_exports__;

})();