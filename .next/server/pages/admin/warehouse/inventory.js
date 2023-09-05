"use strict";
(() => {
var exports = {};
exports.id = 892;
exports.ids = [892];
exports.modules = {

/***/ 9801:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9167);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4563);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var utils_adminUrl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8367);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2765);
/* harmony import */ var components_sweetalert2_instance__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6862);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_9__, axios__WEBPACK_IMPORTED_MODULE_5__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_9__, axios__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);











const isEmpty = __webpack_require__(4364);
const List = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_7__.parseCookies)();
    const headers = {
        Authorization: cookies.admintoken
    };
    const danger = {
        color: "red"
    };
    const [wa_change, setWa_change] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(0.000001);
    const [warehouse_ID, setWarehouse_ID] = react__WEBPACK_IMPORTED_MODULE_4___default().useState("");
    const [warehouse_Name, setWarehouse_Name] = react__WEBPACK_IMPORTED_MODULE_4___default().useState("");
    const [lists, setLists] = react__WEBPACK_IMPORTED_MODULE_4___default().useState([]);
    react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(()=>{
        if (lists.length > 0 && warehouse_ID === "") {
            var ref, ref1;
            setWarehouse_ID((ref = lists[0]) === null || ref === void 0 ? void 0 : ref._id);
            setWarehouse_Name((ref1 = lists[0]) === null || ref1 === void 0 ? void 0 : ref1.warehouse_name);
        }
    }, [
        lists
    ]);
    react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(()=>{
        props.id({
            warehouse_ID,
            warehouse_Name
        });
    }, [
        warehouse_ID,
        warehouse_Name
    ]);
    const successAlert = ()=>{
        components_sweetalert2_instance__WEBPACK_IMPORTED_MODULE_10__/* .toast.fire */ .A.fire({
            icon: "success",
            title: "Success!"
        });
    };
    const Wa_Delete = (id)=>{
        const handleDelete = ()=>{
            components_sweetalert2_instance__WEBPACK_IMPORTED_MODULE_10__/* .swal.fire */ .M.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result)=>{
                if (result.isConfirmed) {
                    axios__WEBPACK_IMPORTED_MODULE_5__["default"]["delete"](utils_adminUrl__WEBPACK_IMPORTED_MODULE_8__/* .Admin_Warehouse_Delete */ .D7 + `/${id.id}`, {
                        headers
                    }).then((res)=>{
                        setWa_change(Math.random());
                        components_sweetalert2_instance__WEBPACK_IMPORTED_MODULE_10__/* .swal.fire */ .M.fire("Deleted!", "That Warehouse has been deleted.", "success");
                    }).catch((err)=>console.log(err)
                    );
                }
            });
        };
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .zx, {
            variant: "label-secondary",
            className: "ms-2",
            onClick: handleDelete,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faRemove
            })
        }));
    };
    react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(()=>{
        axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(utils_adminUrl__WEBPACK_IMPORTED_MODULE_8__/* .Admin_Warehouse_GetAll */ .kq, {
            headers
        }).then((res)=>{
            setLists(res.data.all);
        }).catch((err)=>console.log(err)
        );
    }, [
        wa_change
    ]);
    const handleList = (e)=>{
        setWarehouse_ID(e[0]);
        setWarehouse_Name(e[1]);
    };
    const Modal_Add_Warehouse = ()=>{
        const [show_ADD_Warehouse, setShow_ADD_Warehouse] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);
        const [newOne, setNewOne] = react__WEBPACK_IMPORTED_MODULE_4___default().useState({
        });
        ;
        const [wa_errors, setWa_errors] = react__WEBPACK_IMPORTED_MODULE_4___default().useState({
            name: "",
            code: ""
        });
        const [warehouse_code, setWarehouse_code] = react__WEBPACK_IMPORTED_MODULE_4___default().useState("");
        const [warehouse_name, setWarehouse_name] = react__WEBPACK_IMPORTED_MODULE_4___default().useState("");
        const [warehouse_address, setWarehouse_address] = react__WEBPACK_IMPORTED_MODULE_4___default().useState("");
        react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(()=>{
            setNewOne({
                warehouse_code,
                warehouse_name,
                warehouse_address
            });
        }, [
            warehouse_code,
            warehouse_name,
            warehouse_address
        ]);
        const handle_ADD_Warehouse_Hide = ()=>setShow_ADD_Warehouse(false)
        ;
        const handle_ADD_Warehouse_Show = ()=>setShow_ADD_Warehouse(true)
        ;
        const handle_ADD_Warehouse = async ()=>{
            await axios__WEBPACK_IMPORTED_MODULE_5__["default"].post(utils_adminUrl__WEBPACK_IMPORTED_MODULE_8__/* .Admin_Warehouse_ADD */ .uj, newOne, {
                headers
            }).then((res)=>{
                successAlert();
                setWa_errors({
                    name: "",
                    code: ""
                });
                setWa_change(Math.random());
            }).catch((err)=>{
                let error = {
                    name: "",
                    code: ""
                };
                !isEmpty(err.response.data.warehouse_code) ? error.code = err.response.data.warehouse_code : "";
                !isEmpty(err.response.data.warehouse_name) ? error.name = err.response.data.warehouse_name : "";
                setWa_errors(error);
            });
        };
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .zx, {
                    variant: "label-secondary",
                    size: "lg",
                    onClick: handle_ADD_Warehouse_Show,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faWarehouse,
                            className: "me-2"
                        }),
                        "Warehouse +"
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Modal */ .u_, {
                    show: show_ADD_Warehouse,
                    onHide: handle_ADD_Warehouse_Hide,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Modal.Header */ .u_.Header, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Modal.Title */ .u_.Title, {
                                    children: "Add a Warehouse"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .zx, {
                                    icon: true,
                                    variant: "label-danger",
                                    onClick: handle_ADD_Warehouse_Hide,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faTimes
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Modal.Body */ .u_.Body, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Form.Group */ .l0.Group, {
                                    controlId: "warehouse_code_ID",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Form.Label */ .l0.Label, {
                                            children: "Code"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Form.Control */ .l0.Control, {
                                            type: "text",
                                            onChange: (e)=>setWarehouse_code(e.target.value)
                                            ,
                                            placeholder: "123456"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            style: danger,
                                            children: wa_errors.code
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Form.Group */ .l0.Group, {
                                    controlId: "warehouse_name_ID",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Form.Label */ .l0.Label, {
                                            children: "Name"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Form.Control */ .l0.Control, {
                                            type: "text",
                                            onChange: (e)=>setWarehouse_name(e.target.value)
                                            ,
                                            placeholder: "warehouse 1"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            style: danger,
                                            children: wa_errors.name
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Form.Group */ .l0.Group, {
                                    controlId: "warehouse_address_ID",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Form.Label */ .l0.Label, {
                                            children: "Address"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Form.Control */ .l0.Control, {
                                            type: "text",
                                            onChange: (e)=>setWarehouse_address(e.target.value)
                                            ,
                                            placeholder: "Address. 1, Hlazunova Street Kyiv - 42, Ukraine, 01601."
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Modal.Footer */ .u_.Footer, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .zx, {
                                variant: "primary",
                                onClick: handle_ADD_Warehouse,
                                children: "Submit"
                            })
                        })
                    ]
                })
            ]
        }));
    };
    const Modal_Edit_Warehouse = (id)=>{
        const [show_Edit_Warehouse, setShow_Edit_Warehouse] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);
        const [newEdit, setNewEdit] = react__WEBPACK_IMPORTED_MODULE_4___default().useState({
        });
        ;
        const [wa_edit_errors, setWa_edit_errors] = react__WEBPACK_IMPORTED_MODULE_4___default().useState({
            name: "",
            code: ""
        });
        const [warehouse_code, setWarehouse_code] = react__WEBPACK_IMPORTED_MODULE_4___default().useState("");
        const [warehouse_name, setWarehouse_name] = react__WEBPACK_IMPORTED_MODULE_4___default().useState("");
        const [warehouse_address, setWarehouse_address] = react__WEBPACK_IMPORTED_MODULE_4___default().useState("");
        const handle_Edit_Warehouse_Hide = ()=>setShow_Edit_Warehouse(false)
        ;
        const handle_Edit_Warehouse_Show = ()=>setShow_Edit_Warehouse(true)
        ;
        react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(()=>{
            if (show_Edit_Warehouse == true) {
                axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(utils_adminUrl__WEBPACK_IMPORTED_MODULE_8__/* .Admin_Warehouse_GetOne */ .T + `/${id.id}`, {
                    headers
                }).then((res)=>{
                    setWarehouse_name(res.data.warehouse_name);
                    setWarehouse_code(res.data.warehouse_code);
                    setWarehouse_address(res.data.warehouse_address);
                }).catch((err)=>{
                    console.log(err);
                });
            }
        }, [
            show_Edit_Warehouse
        ]);
        react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(()=>{
            setNewEdit({
                warehouse_code,
                warehouse_name,
                warehouse_address
            });
        }, [
            warehouse_code,
            warehouse_name,
            warehouse_address
        ]);
        const handle_Edit_Warehouse = async ()=>{
            await axios__WEBPACK_IMPORTED_MODULE_5__["default"].put(utils_adminUrl__WEBPACK_IMPORTED_MODULE_8__/* .Admin_Warehouse_Edit */ .$B + `/${id.id}`, newEdit, {
                headers
            }).then((res)=>{
                successAlert();
                setWa_edit_errors({
                    name: "",
                    code: ""
                });
                setWa_change(Math.random());
            }).catch((err)=>{
                let error = {
                    name: "",
                    code: ""
                };
                !isEmpty(err.response.data.warehouse_code) ? error.code = err.response.data.warehouse_code : "";
                !isEmpty(err.response.data.warehouse_name) ? error.name = err.response.data.warehouse_name : "";
                setWa_edit_errors(error);
            });
        };
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .zx, {
                    variant: "label-secondary",
                    className: "ms-2",
                    onClick: handle_Edit_Warehouse_Show,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                        icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faEdit
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Modal */ .u_, {
                    show: show_Edit_Warehouse,
                    onHide: handle_Edit_Warehouse_Hide,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Modal.Header */ .u_.Header, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Modal.Title */ .u_.Title, {
                                    children: warehouse_name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .zx, {
                                    icon: true,
                                    variant: "label-danger",
                                    onClick: handle_Edit_Warehouse_Hide,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faTimes
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Modal.Body */ .u_.Body, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Form.Group */ .l0.Group, {
                                    controlId: "warehouse_code_ID",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Form.Label */ .l0.Label, {
                                            children: "Code"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Form.Control */ .l0.Control, {
                                            type: "text",
                                            defaultValue: warehouse_code,
                                            onChange: (e)=>setWarehouse_code(e.target.value)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            style: danger,
                                            children: wa_edit_errors.code
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Form.Group */ .l0.Group, {
                                    controlId: "warehouse_name_ID",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Form.Label */ .l0.Label, {
                                            children: "Name"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Form.Control */ .l0.Control, {
                                            type: "text",
                                            defaultValue: warehouse_name,
                                            onChange: (e)=>setWarehouse_name(e.target.value)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            style: danger,
                                            children: wa_edit_errors.name
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Form.Group */ .l0.Group, {
                                    controlId: "warehouse_address_ID",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Form.Label */ .l0.Label, {
                                            children: "Address"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Form.Control */ .l0.Control, {
                                            type: "text",
                                            defaultValue: warehouse_address,
                                            onChange: (e)=>setWarehouse_address(e.target.value)
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Modal.Footer */ .u_.Footer, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .zx, {
                                variant: "primary",
                                onClick: handle_Edit_Warehouse,
                                children: "Submit"
                            })
                        })
                    ]
                })
            ]
        }));
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Portlet */ .kr, {
        noMargin: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Portlet.Header */ .kr.Header, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Portlet.Title */ .kr.Title, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "d-grid gap-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Modal_Add_Warehouse, {
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Portlet.Body */ .kr.Body, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Timeline */ .TY, {
                    children: lists.map((list)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Timeline.Item */ .TY.Item, {
                            as: _blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .RichList */ .Of,
                            bordered: true,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .RichList.Item */ .Of.Item, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .RichList.Content */ .Of.Content, {
                                        style: {
                                            cursor: "pointer"
                                        },
                                        onClick: ()=>handleList([
                                                list._id,
                                                list.warehouse_name
                                            ])
                                        ,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .RichList.Paragraph */ .Of.Paragraph, {
                                            children: list.warehouse_name
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .RichList.Addon */ .Of.Addon, {
                                        addonType: "append",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Modal_Edit_Warehouse, {
                                                id: list._id
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wa_Delete, {
                                                id: list._id
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, list._id)
                    )
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);

});

/***/ }),

/***/ 2109:
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
/* harmony import */ var utils_apiCall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9106);
/* harmony import */ var utils_adminUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8367);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__, utils_apiCall__WEBPACK_IMPORTED_MODULE_5__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__, utils_apiCall__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);







const AddProductModal = ({ open , onClose , warehouseID , onAddSuccess  })=>{
    const { 0: newProduct , 1: setNewProduct  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        code: "",
        bin_location: "",
        comment: "",
        initial_stock: 0,
        name: ""
    });
    const handleInputChange = (e)=>{
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        });
    };
    const handleAddProduct = async ()=>{
        const resp = await (0,utils_apiCall__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(utils_adminUrl__WEBPACK_IMPORTED_MODULE_6__/* .Admin_Product_ADD */ .vU, "POST", {
            warehouse_ID: warehouseID,
            ...newProduct
        });
        onAddSuccess();
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Modal */ .u_, {
        show: open,
        onHide: onClose,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Modal.Header */ .u_.Header, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Modal.Title */ .u_.Title, {
                        children: "Add new product"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                        icon: true,
                        variant: "label-danger",
                        onClick: onClose,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Modal.Body */ .u_.Body, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                        controlId: "code_ID",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                children: "Code"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                type: "text",
                                name: "code",
                                placeholder: "Code",
                                onChange: handleInputChange
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                        controlId: "name_ID",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                children: "Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                type: "text",
                                name: "name",
                                onChange: handleInputChange,
                                placeholder: "Name"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                        controlId: "bin_location_ID",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                children: "Bin Location"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                type: "text",
                                name: "bin_location",
                                onChange: handleInputChange,
                                placeholder: "Bin location"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                        controlId: "expiration_data_ID",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                children: "Expiration date"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                type: "date",
                                name: "expiration_date",
                                onChange: handleInputChange
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                        controlId: "initial_stock_ID",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                children: "Initial Stock"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                type: "Number",
                                name: "initial_stock",
                                onChange: handleInputChange
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                        controlId: "comment_ID",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                children: "Comment"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                name: "comment",
                                as: "textarea",
                                rows: 3,
                                onChange: handleInputChange,
                                placeholder: "Comment"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Modal.Footer */ .u_.Footer, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                    variant: "secondary",
                    onClick: handleAddProduct,
                    children: "Submit"
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddProductModal);

});

/***/ }),

/***/ 6872:
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
/* harmony import */ var utils_apiCall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9106);
/* harmony import */ var utils_adminUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8367);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2765);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__, utils_apiCall__WEBPACK_IMPORTED_MODULE_5__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__, utils_apiCall__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








const EditProductModal = ({ onEditSuccess , productId  })=>{
    const { 0: product , 1: setProduct  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        code: "",
        bin_location: "",
        comment: "",
        initial_stock: 0,
        name: "",
        expiration_date: new Date().toISOString(),
        current_stock: 0,
        last_withdrawal: 0
    });
    const { 0: openAddModal , 1: setOpenAddModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (openAddModal) {
            (async function() {
                const resp = await (0,utils_apiCall__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(`${utils_adminUrl__WEBPACK_IMPORTED_MODULE_6__/* .Admin_Product_GetOne */ .jl}/${productId}`, "GET", {
                });
                setProduct({
                    code: resp.code,
                    bin_location: resp.bin_location,
                    comment: resp.comment,
                    initial_stock: resp.initial_stock,
                    name: resp.name,
                    expiration_date: resp.expiration_date,
                    current_stock: resp.current_stock,
                    last_withdrawal: resp.last_withdrawal
                });
            })();
        }
    }, [
        openAddModal
    ]);
    const handleInputChange = (e)=>{
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };
    const handleOpenModal = ()=>{
        setOpenAddModal(true);
    };
    const handleCloseModal = ()=>{
        setOpenAddModal(false);
    };
    const handleUpdateProduct = async ()=>{
        await (0,utils_apiCall__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(`${utils_adminUrl__WEBPACK_IMPORTED_MODULE_6__/* .Admin_Product_Edit */ .Ai}/${productId}`, "PUT", {
            ...product
        });
        handleCloseModal();
        onEditSuccess();
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                variant: "label-secondary",
                className: "ms-2",
                onClick: handleOpenModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faEdit
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Modal */ .u_, {
                show: openAddModal,
                onHide: handleCloseModal,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Modal.Header */ .u_.Header, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Modal.Title */ .u_.Title, {
                                children: "Edit product"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                icon: true,
                                variant: "label-danger",
                                onClick: handleCloseModal,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Modal.Body */ .u_.Body, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                                controlId: "code_ID",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                        children: "Code"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                        type: "text",
                                        name: "code",
                                        placeholder: "Code",
                                        onChange: handleInputChange,
                                        value: product.code
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                                controlId: "name_ID",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                        children: "Name"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                        type: "text",
                                        name: "name",
                                        onChange: handleInputChange,
                                        placeholder: "Name",
                                        value: product.name
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                                controlId: "bin_location_ID",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                        children: "Bin Location"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                        type: "text",
                                        name: "bin_location",
                                        onChange: handleInputChange,
                                        placeholder: "Bin location",
                                        value: product.bin_location
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                                controlId: "expiration_data_ID",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                        children: "Expiration date"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                        type: "date",
                                        name: "expiration_date",
                                        onChange: handleInputChange,
                                        defaultValue: product.expiration_date ? new Date(product.expiration_date).toISOString().substring(0, 10) : ""
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                                controlId: "initial_stock_ID",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                        children: "Initial Stock"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                        type: "Number",
                                        name: "initial_stock",
                                        onChange: handleInputChange,
                                        value: product.initial_stock
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                                controlId: "current_stock_ID",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                        children: "Current Stock"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                        type: "Number",
                                        name: "current_stock",
                                        onChange: handleInputChange,
                                        value: product.current_stock
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                                controlId: "last_withdrawal_ID",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                        children: "Last Withdrawal"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                        type: "Number",
                                        name: "last_withdrawal",
                                        onChange: handleInputChange,
                                        value: product.last_withdrawal
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                                controlId: "comment_ID",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                        children: "Comment"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                        name: "comment",
                                        as: "textarea",
                                        rows: 3,
                                        onChange: handleInputChange,
                                        placeholder: "Comment",
                                        value: product.comment
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Modal.Footer */ .u_.Footer, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                            variant: "secondary",
                            onClick: handleUpdateProduct,
                            children: "Submit"
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditProductModal);

});

/***/ }),

/***/ 9171:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4563);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9167);
/* harmony import */ var components_sweetalert2_instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6862);
/* harmony import */ var utils_apiCall__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9106);
/* harmony import */ var utils_adminUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8367);
/* harmony import */ var _EditProductModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6872);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__, _EditProductModal__WEBPACK_IMPORTED_MODULE_8__, utils_apiCall__WEBPACK_IMPORTED_MODULE_6__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__, _EditProductModal__WEBPACK_IMPORTED_MODULE_8__, utils_apiCall__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);

/* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */ 








const ProductsTable = ({ warehouseID , products , onChangeSort , onChangeFilter , onEditSuccess  })=>{
    const { 0: sortKey , 1: setSortKey  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        key: "unique_id",
        sort: 1
    });
    const { 0: filter , 1: setFilter  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        key: "",
        keyword: ""
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        onChangeSort(sortKey);
    }, [
        sortKey
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        onChangeFilter(filter);
    }, [
        filter
    ]);
    const handleSort = (key)=>{
        let sort = 1;
        if (key === sortKey.key) {
            if (sortKey.sort === -1) {
                sort = 1;
            } else {
                sort = -1;
            }
        } else {
            sort = -1;
        }
        setSortKey({
            key,
            sort
        });
    };
    const handleFilterChange = (e)=>{
        if (e.target.value === "") {
            setFilter({
                key: "",
                keyword: ""
            });
        } else {
            setFilter({
                key: e.target.name,
                keyword: e.target.value
            });
        }
    };
    const handleDeleteProduct = (id)=>{
        components_sweetalert2_instance__WEBPACK_IMPORTED_MODULE_5__/* .swal.fire */ .M.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result)=>{
            if (result.isConfirmed) {
                try {
                    await (0,utils_apiCall__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(`${utils_adminUrl__WEBPACK_IMPORTED_MODULE_7__/* .Admin_Product_Delete */ .ne}/${id}`, "DELETE", {
                    });
                    components_sweetalert2_instance__WEBPACK_IMPORTED_MODULE_5__/* .swal.fire */ .M.fire("Deleted!", "Successfully deleted.", "success");
                    onEditSuccess();
                } catch (error) {
                    components_sweetalert2_instance__WEBPACK_IMPORTED_MODULE_5__/* .swal.fire */ .M.fire("Failure!", "Deleting Product is failure, Try again.", "error");
                }
            }
        });
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_4__/* .Table */ .iA, {
        responsive: true,
        striped: true,
        hover: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            scope: "col",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_4__/* .Form.Group */ .l0.Group, {
                                controlId: "th_unique_ID",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        style: {
                                            cursor: "pointer"
                                        },
                                        onClick: ()=>{
                                            handleSort("unique_id");
                                        },
                                        children: [
                                            "Product ID",
                                            sortKey.key === "unique_id" && sortKey.sort === -1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faAngleUp,
                                                className: "me-2"
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faAngleDown,
                                                className: "me-2"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_4__/* .Form.Control */ .l0.Control, {
                                        name: "unique_id",
                                        type: "text",
                                        onChange: handleFilterChange,
                                        size: "sm"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            scope: "col",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_4__/* .Form.Group */ .l0.Group, {
                                controlId: "th_code_ID",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        style: {
                                            cursor: "pointer"
                                        },
                                        onClick: ()=>{
                                            handleSort("code");
                                        },
                                        children: [
                                            "Code",
                                            sortKey.key === "code" && sortKey.sort === -1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faAngleUp,
                                                className: "me-2"
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faAngleDown,
                                                className: "me-2"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_4__/* .Form.Control */ .l0.Control, {
                                        name: "code",
                                        type: "text",
                                        onChange: handleFilterChange,
                                        size: "sm"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            scope: "col",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_4__/* .Form.Group */ .l0.Group, {
                                controlId: "th_name_ID",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        style: {
                                            cursor: "pointer"
                                        },
                                        onClick: ()=>{
                                            handleSort("name");
                                        },
                                        children: [
                                            "Name",
                                            sortKey.key === "name" && sortKey.sort === -1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faAngleUp,
                                                className: "me-2"
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faAngleDown,
                                                className: "me-2"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_4__/* .Form.Control */ .l0.Control, {
                                        name: "name",
                                        type: "text",
                                        onChange: handleFilterChange,
                                        size: "sm"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            scope: "col",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_4__/* .Form.Group */ .l0.Group, {
                                controlId: "th_bin_location_ID",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        style: {
                                            cursor: "pointer"
                                        },
                                        onClick: ()=>{
                                            handleSort("bin_location");
                                        },
                                        children: [
                                            "Bin location",
                                            sortKey.key === "bin_location" && sortKey.sort === -1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faAngleUp,
                                                className: "me-2"
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faAngleDown,
                                                className: "me-2"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_4__/* .Form.Control */ .l0.Control, {
                                        name: "bin_location",
                                        type: "text",
                                        onChange: handleFilterChange,
                                        size: "sm"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            scope: "col",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_4__/* .Form.Group */ .l0.Group, {
                                controlId: "th_expiration_date_ID",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        style: {
                                            cursor: "pointer"
                                        },
                                        onClick: ()=>{
                                            handleSort("expiration_date");
                                        },
                                        children: [
                                            "Expiration date",
                                            sortKey.key === "expiration_date" && sortKey.sort === -1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faAngleUp,
                                                className: "me-2"
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faAngleDown,
                                                className: "me-2"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_4__/* .Form.Control */ .l0.Control, {
                                        name: "expiration_date",
                                        type: "Date",
                                        onChange: handleFilterChange,
                                        size: "sm"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            scope: "col",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_4__/* .Form.Group */ .l0.Group, {
                                controlId: "th_initial_stock_ID",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        style: {
                                            cursor: "pointer"
                                        },
                                        onClick: ()=>{
                                            handleSort("initial_stock");
                                        },
                                        children: [
                                            "Initial stock",
                                            sortKey.key === "initial_stock" && sortKey.sort === -1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faAngleUp,
                                                className: "me-2"
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faAngleDown,
                                                className: "me-2"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_4__/* .Form.Control */ .l0.Control, {
                                        name: "initial_stock",
                                        type: "Number",
                                        onChange: handleFilterChange,
                                        size: "sm"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            scope: "col",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_4__/* .Form.Group */ .l0.Group, {
                                controlId: "th_current_stock_ID",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        style: {
                                            cursor: "pointer"
                                        },
                                        onClick: ()=>{
                                            handleSort("current_stock");
                                        },
                                        children: [
                                            "Current stock",
                                            sortKey.key === "current_stock" && sortKey.sort === -1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faAngleUp,
                                                className: "me-2"
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faAngleDown,
                                                className: "me-2"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_4__/* .Form.Control */ .l0.Control, {
                                        name: "current_stock",
                                        type: "Number",
                                        onChange: handleFilterChange,
                                        size: "sm"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            scope: "col",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_4__/* .Form.Group */ .l0.Group, {
                                controlId: "th_last_withdrawal_ID",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        style: {
                                            cursor: "pointer"
                                        },
                                        onClick: ()=>{
                                            handleSort("last_withdrawal");
                                        },
                                        children: [
                                            "Last withdrawal",
                                            sortKey.key === "last_withdrawal" && sortKey.sort === -1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faAngleUp,
                                                className: "me-2"
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faAngleDown,
                                                className: "me-2"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_4__/* .Form.Control */ .l0.Control, {
                                        type: "Number",
                                        name: "last_withdrawal",
                                        onChange: handleFilterChange,
                                        size: "sm"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            scope: "col",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_4__/* .Form.Group */ .l0.Group, {
                                controlId: "th_comment_ID",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    style: {
                                        cursor: "pointer"
                                    },
                                    children: "Comment"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            scope: "col",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_4__/* .Form.Group */ .l0.Group, {
                                controlId: "th_action_ID",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    style: {
                                        cursor: "pointer"
                                    },
                                    children: "Action"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: product.unique_id
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: product.code
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: product.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: product.bin_location
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: new Date(product.expiration_date).toLocaleDateString()
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: product.initial_stock
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: product.current_stock
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: product.last_withdrawal
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: product.comment
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        display: "flex"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EditProductModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                            onEditSuccess: onEditSuccess,
                                            productId: product._id
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .zx, {
                                            variant: "label-secondary",
                                            className: "ms-2",
                                            onClick: ()=>{
                                                handleDeleteProduct(product._id);
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTrash
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }, product._id)
                )
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsTable);

});

/***/ }),

/***/ 2497:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5813);
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_csv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9167);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2765);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4563);
/* harmony import */ var utils_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(716);
/* harmony import */ var utils_apiCall__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9106);
/* harmony import */ var utils_adminUrl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8367);
/* harmony import */ var _ProductsTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9171);
/* harmony import */ var _AddProductModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2109);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AddProductModal__WEBPACK_IMPORTED_MODULE_11__, _ProductsTable__WEBPACK_IMPORTED_MODULE_10__, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__, utils_apiCall__WEBPACK_IMPORTED_MODULE_8__]);
([_AddProductModal__WEBPACK_IMPORTED_MODULE_11__, _ProductsTable__WEBPACK_IMPORTED_MODULE_10__, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__, utils_apiCall__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);












const Products = ({ warehouseID , warehouseName  })=>{
    const { 0: openAddModal , 1: setOpenAddModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: activeLinkNumber1 , 1: setActiveLinkNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { 0: paginationLength , 1: setPaginationLength  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);
    const { 0: products , 1: setProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: sortKey , 1: setSortKey  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        key: "unique_id",
        sort: 1
    });
    const { 0: filter , 1: setFilter  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        key: "",
        keyword: ""
    });
    const { 0: pageSize , 1: setPageSize  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);
    const { 0: productsLength , 1: setProductsLength  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const chooseActiveLinkNumber = (activeLinkNumber)=>{
        setActiveLinkNumber(activeLinkNumber);
    };
    const handleClickOpenAddProductModal = ()=>{
        setOpenAddModal(true);
    };
    const handleClickCloseAddProductModal = ()=>{
        setOpenAddModal(false);
    };
    const handleChangeSort = (s)=>{
        setSortKey(s);
    };
    const handleChangeFilter = (f)=>{
        setFilter(f);
    };
    const handleChangePageSize = (e)=>{
        setPageSize(e.target.value);
    };
    const handleGetProducts = async ()=>{
        const resp = await (0,utils_apiCall__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(`${utils_adminUrl__WEBPACK_IMPORTED_MODULE_9__/* .Admin_Product_GetAll */ .uk}/${activeLinkNumber1}/${pageSize}/warehouse:${warehouseID}/filterKey:${filter.key}/filterValue:${filter.keyword}/sortKey:${sortKey.key}/sort:${sortKey.sort}`, "GET", {
        });
        setProducts(resp.all);
        setProductsLength(resp.length);
    };
    const handleAddProductSuccess = ()=>{
        handleClickCloseAddProductModal();
        handleGetProducts();
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setPaginationLength(productsLength / pageSize + 1);
    }, [
        productsLength,
        pageSize
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        handleGetProducts();
    }, [
        activeLinkNumber1,
        pageSize,
        sortKey,
        filter,
        warehouseID
    ]);
    const pagination = {
        activeLinkNumber: activeLinkNumber1,
        paginationLength,
        chooseActiveLinkNumber
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Portlet */ .kr, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Portlet.Header */ .kr.Header, {
                        bordered: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Portlet.Title */ .kr.Title, {
                                children: warehouseName
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Portlet.Addon */ .kr.Addon, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .zx, {
                                        variant: "label-secondary",
                                        className: "me-2",
                                        onClick: handleClickOpenAddProductModal,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faAdd,
                                                className: "me-2"
                                            }),
                                            "Add new product"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_csv__WEBPACK_IMPORTED_MODULE_2__.CSVLink, {
                                        data: products,
                                        filename: "products.csv",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .zx, {
                                            variant: "label-secondary",
                                            className: "me-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                                    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faClipboard,
                                                    className: "me-2"
                                                }),
                                                "Export CSV"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .zx, {
                                        variant: "label-secondary",
                                        className: "me-2",
                                        children: "..."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Portlet.Body */ .kr.Body, {
                        className: "pb-0",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Row */ .X2, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Col */ .JX, {
                                        md: 2,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Form.Select */ .l0.Select, {
                                            id: "sizeID",
                                            onChange: handleChangePageSize,
                                            value: pageSize,
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Col */ .JX, {
                                        md: 3
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Col */ .JX, {
                                        md: 5,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(utils_Pagination__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                            pagination: pagination
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Row */ .X2, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Col */ .JX, {
                                    md: 12
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductsTable__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                warehouseID: warehouseID,
                                onChangeFilter: handleChangeFilter,
                                onChangeSort: handleChangeSort,
                                products: products,
                                onEditSuccess: handleAddProductSuccess
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Portlet.Footer */ .kr.Footer, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Row */ .X2, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Col */ .JX, {
                                    md: 5
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Col */ .JX, {
                                    md: 5,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(utils_Pagination__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        pagination: pagination
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Col */ .JX, {
                                    md: 5
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AddProductModal__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                open: openAddModal,
                onClose: handleClickCloseAddProductModal,
                warehouseID: warehouseID,
                onAddSuccess: handleAddProductSuccess
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Products);

});

/***/ }),

/***/ 3658:
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
/* harmony import */ var components_auth_withAdminAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5886);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9167);
/* harmony import */ var _components_admin_warehouse_inventory_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9801);
/* harmony import */ var _components_admin_warehouse_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2497);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_auth_withAdminAuth__WEBPACK_IMPORTED_MODULE_2__, _components_admin_warehouse_product__WEBPACK_IMPORTED_MODULE_5__, _components_admin_warehouse_inventory_list__WEBPACK_IMPORTED_MODULE_4__]);
([components_auth_withAdminAuth__WEBPACK_IMPORTED_MODULE_2__, _components_admin_warehouse_product__WEBPACK_IMPORTED_MODULE_5__, _components_admin_warehouse_inventory_list__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






const WarehouseInventoryHistoryPage = ()=>{
    const { 0: warehouseID , 1: setWarehouseID  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: warehouseName , 1: setWarehouseName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleWarehouseChange = (id)=>{
        setWarehouseID(id.warehouse_ID);
        setWarehouseName(id.warehouse_Name);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Row */ .X2, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Col */ .JX, {
                    md: "3",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_warehouse_inventory_list__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        id: handleWarehouseChange
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Col */ .JX, {
                    md: "9",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_warehouse_product__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        warehouseID: warehouseID,
                        warehouseName: warehouseName
                    })
                })
            ]
        })
    }));
};
WarehouseInventoryHistoryPage.pageTitle = "Warehouse Inventory History";
WarehouseInventoryHistoryPage.activeLink = "warehouseInventoryHistory";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,components_auth_withAdminAuth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(WarehouseInventoryHistoryPage));

});

/***/ }),

/***/ 9106:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ apiCall)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _is_empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4364);
/* harmony import */ var _is_empty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_is_empty__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)();
const headers = {
    Authorization: cookies.admintoken
};
function apiCall(url, method, data) {
    return new Promise((resolve, reject)=>{
        (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            url,
            method,
            data,
            headers
        }).then((res)=>{
            resolve(res.data);
        }).catch((e)=>{
            if (!_is_empty__WEBPACK_IMPORTED_MODULE_2___default()(e.response.data)) {
                if (e.response.data === "Unauthorized") {
                    resolve(e.response.data);
                } else {
                    reject(e);
                }
            }
            reject(e);
        });
    });
};

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

/***/ 5813:
/***/ ((module) => {

module.exports = require("react-csv");

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
var __webpack_exports__ = __webpack_require__.X(0, [9167,8367,6259,5886,4318], () => (__webpack_exec__(3658)));
module.exports = __webpack_exports__;

})();