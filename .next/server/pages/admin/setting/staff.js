"use strict";
(() => {
var exports = {};
exports.id = 6053;
exports.ids = [6053];
exports.modules = {

/***/ 2494:
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2765);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4563);
/* harmony import */ var components_sweetalert2_instance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6862);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var utils_Pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(716);
/* harmony import */ var utils_adminUrl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8367);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5675);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__, axios__WEBPACK_IMPORTED_MODULE_4__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__, axios__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);













const isEmpty = __webpack_require__(4364);
const StaffComponent = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_11__.parseCookies)();
    const headers = {
        "Authorization": cookies.admintoken
    };
    const [size, setSize] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(10);
    const [staffs, setStaffs] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [search_staff, setSearch_staff] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('');
    const [activeLinkNumber1, setActiveLinkNumber] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(1);
    const [paginationLength, setPaginationLength] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(10);
    const [deletestaff, setDeletestaff] = react__WEBPACK_IMPORTED_MODULE_1___default().useState();
    const [deletesucess, setDeletesucess] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0.001);
    const [sort, setSort] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(1);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(utils_adminUrl__WEBPACK_IMPORTED_MODULE_10__/* .Admin_Staff_GetAll */ .hP + `/${activeLinkNumber1}/${size}/search:${search_staff}/sort:${sort}`, {
            headers
        }).then((res)=>{
            setStaffs(res.data.all);
            if (size == 0) {
                setPaginationLength(1);
            } else {
                if (res.data.length == 0) {
                    setPaginationLength(1);
                } else {
                    setPaginationLength(Math.ceil(res.data.length / size));
                }
            }
        }).catch((err)=>console.log(err)
        );
    }, [
        size,
        search_staff,
        activeLinkNumber1,
        sort,
        deletesucess
    ]);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (!isEmpty(deletestaff)) {
            axios__WEBPACK_IMPORTED_MODULE_4__["default"]["delete"](utils_adminUrl__WEBPACK_IMPORTED_MODULE_10__/* .Admin_Staff_Delete */ .BM + `/${deletestaff}`, {
                headers
            }).then((res)=>{
                setDeletesucess(Math.random());
            }).catch((err)=>console.log(err)
            );
        }
    }, [
        deletestaff
    ]);
    const chooseActiveLinkNumber = (activeLinkNumber)=>{
        setActiveLinkNumber(activeLinkNumber);
    };
    const pagination = {
        activeLinkNumber: activeLinkNumber1,
        paginationLength,
        chooseActiveLinkNumber
    };
    const Swal7 = (id)=>{
        const handleClick = ()=>{
            components_sweetalert2_instance__WEBPACK_IMPORTED_MODULE_7__/* .swal.fire */ .M.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result)=>{
                if (result.isConfirmed) {
                    if (id.id[1] !== undefined) {
                        let body = new FormData();
                        body.append("text", id.id[1]);
                        const response = await fetch("/api/upload/remove", {
                            method: "POST",
                            body
                        });
                    }
                    setDeletestaff(id.id[0]);
                    components_sweetalert2_instance__WEBPACK_IMPORTED_MODULE_7__/* .swal.fire */ .M.fire('Deleted!', 'That staff has been deleted.', 'success');
                }
            });
        };
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
            variant: "text-danger",
            onClick: handleClick,
            pill: true,
            size: "sm",
            children: "delete"
        }));
    };
    const successAlert = ()=>{
        components_sweetalert2_instance__WEBPACK_IMPORTED_MODULE_7__/* .toast.fire */ .A.fire({
            icon: 'success',
            title: 'Success!'
        });
    };
    const change = async (e, id)=>{
        const active = {
            active: e.target.checked
        };
        await axios__WEBPACK_IMPORTED_MODULE_4__["default"].put(utils_adminUrl__WEBPACK_IMPORTED_MODULE_10__/* .Admin_Staff_Active */ .mh + `/${id}`, active, {
            headers
        }).then((res)=>{
            successAlert();
        }).catch((err)=>{
            console.log(err);
        });
    };
    const displayImage = (name)=>{
        const profile_image = name;
        const src = '/uploads/profile_images/' + profile_image;
        if (profile_image === undefined || isEmpty(profile_image)) {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faUser
            }));
        } else {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    position: "relative",
                    width: "35px",
                    height: "35px"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_12__["default"], {
                    src: src,
                    layout: "fill",
                    alt: "Avatar image"
                })
            }));
        }
    };
    const handleSort = ()=>{
        if (sort == -1) {
            setSort(1);
        } else {
            setSort(-1);
        }
    };
    const FontSort = (props)=>{
        if (props.icon == 1) {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faAngleUp
            }));
        } else {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faAngleDown
            }));
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet */ .kr, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Body */ .kr.Body, {
                className: "pb-0",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Row */ .X2, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Col */ .JX, {
                                md: 2,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                    variant: "primary",
                                    onClick: ()=>router.push('/admin/setting/staff/new')
                                    ,
                                    children: " New Staff "
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Col */ .JX, {
                                md: 1,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Select */ .l0.Select, {
                                    id: "size_id",
                                    onChange: (e)=>setSize(parseInt(e.target.value))
                                    ,
                                    defaultValue: "10",
                                    size: "lg",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "10",
                                            children: "10"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "25",
                                            children: "25"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "50",
                                            children: "50"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "100",
                                            children: "100"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "0",
                                            children: "All"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Col */ .JX, {
                                md: 7
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Col */ .JX, {
                                md: 2,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .FloatingLabel */ ._b, {
                                    controlId: "search_id",
                                    label: "Search",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                        type: "text",
                                        onChange: (e)=>setSearch_staff(e.target.value)
                                        ,
                                        placeholder: "name",
                                        size: "lg"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Row */ .X2, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Col */ .JX, {
                            md: 12,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Table */ .iA, {
                        responsive: true,
                        striped: true,
                        hover: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                className: "table-primary",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
                                            scope: "col",
                                            onClick: handleSort,
                                            children: [
                                                "Full Name ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FontSort, {
                                                    icon: sort
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            scope: "col",
                                            children: "Email"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            scope: "col",
                                            children: "Role"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            scope: "col",
                                            children: "Last Login"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            scope: "col",
                                            children: "Active"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                children: staffs.map((staff)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Avatar */ .qE, {
                                                        display: true,
                                                        children: displayImage(staff.profile_image)
                                                    }),
                                                    staff.firstname,
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                                                variant: "text-primary",
                                                                onClick: ()=>router.push({
                                                                        pathname: '/admin/setting/staff/[id]',
                                                                        query: {
                                                                            id: staff._id
                                                                        }
                                                                    })
                                                                ,
                                                                pill: true,
                                                                size: "sm",
                                                                children: "view"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Swal7, {
                                                                id: [
                                                                    staff._id,
                                                                    staff.profile_image
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: staff.email
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: staff.role.name
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: staff.last_login
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Switch */ .l0.Switch, {
                                                    id: staff._id,
                                                    onChange: (e)=>change(e, staff._id)
                                                    ,
                                                    defaultChecked: staff.active
                                                })
                                            })
                                        ]
                                    }, staff._id)
                                )
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Portlet.Footer */ .kr.Footer, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Row */ .X2, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Col */ .JX, {
                            md: 9
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Col */ .JX, {
                            md: 3,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(utils_Pagination__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                pagination: pagination
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StaffComponent);

});

/***/ }),

/***/ 3544:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9167);
/* harmony import */ var components_admin_setting_staff_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2494);
/* harmony import */ var components_auth_withAdminAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5886);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_auth_withAdminAuth__WEBPACK_IMPORTED_MODULE_4__, components_admin_setting_staff_index__WEBPACK_IMPORTED_MODULE_3__]);
([components_auth_withAdminAuth__WEBPACK_IMPORTED_MODULE_4__, components_admin_setting_staff_index__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





const StaffPage = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Row */ .X2, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Col */ .JX, {
                md: 12,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_admin_setting_staff_index__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                })
            })
        })
    }));
};
StaffPage.pageTitle = 'Staff';
StaffPage.activeLink = 'admin/setting/staff';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,components_auth_withAdminAuth__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(StaffPage));

});

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

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

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

/***/ 7967:
/***/ ((module) => {

module.exports = require("react-transition-group/Transition");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3810:
/***/ ((module) => {

module.exports = require("sweetalert2-react-content");

/***/ }),

/***/ 2584:
/***/ ((module) => {

module.exports = require("sweetalert2/dist/sweetalert2");

/***/ }),

/***/ 3372:
/***/ ((module) => {

module.exports = require("uncontrollable");

/***/ }),

/***/ 5548:
/***/ ((module) => {

module.exports = require("warning");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7190,5675,9167,8367,6259,5886,4318], () => (__webpack_exec__(3544)));
module.exports = __webpack_exports__;

})();