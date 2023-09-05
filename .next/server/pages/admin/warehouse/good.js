"use strict";
(() => {
var exports = {};
exports.id = 1967;
exports.ids = [1967];
exports.modules = {

/***/ 3287:
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







const AddGoodModal = ({ open , onClose , onAddSuccess  })=>{
    const { 0: newGood , 1: setNewGood  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        vendorName: "",
        deliveryDate: new Date().toISOString(),
        purchaseOrderNumber: "",
        invoiceNumber: "",
        warehouseId: "",
        name: "",
        description: "",
        purchasePrice: 0,
        expirationDate: new Date().toISOString(),
        quantity: 0,
        totalAmount: 0
    });
    const { 0: warehouses , 1: setWarehouses  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async function() {
            const data = await (0,utils_apiCall__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(utils_adminUrl__WEBPACK_IMPORTED_MODULE_6__/* .Admin_Warehouse_GetAll */ .kq, "GET", {
            });
            setWarehouses(data.all);
        })();
    }, []);
    const handleInputChange = (e)=>{
        setNewGood({
            ...newGood,
            [e.target.name]: e.target.value
        });
    };
    const handleAddGood = async ()=>{
        await (0,utils_apiCall__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(utils_adminUrl__WEBPACK_IMPORTED_MODULE_6__/* .Admin_Good_ADD */ .ds, "POST", {
            ...newGood
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
                        children: "Add new good"
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
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                children: "Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                type: "text",
                                name: "name",
                                placeholder: "Name",
                                onChange: handleInputChange
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                children: "Vendor Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                type: "text",
                                name: "vendorName",
                                onChange: handleInputChange,
                                placeholder: "Vendor Name"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                children: "Warehouse"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Select */ .l0.Select, {
                                onChange: handleInputChange,
                                name: "warehouseId",
                                size: "lg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "",
                                        children: "Select Warehouse"
                                    }),
                                    warehouses.map((w)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: w._id,
                                            children: w.warehouse_name
                                        }, w._id)
                                    )
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                children: "Delivery Date"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                type: "date",
                                name: "deliveryDate",
                                onChange: handleInputChange,
                                placeholder: "Delivery Date"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                children: "Purchase Order Number"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                type: "text",
                                name: "purchaseOrderNumber",
                                onChange: handleInputChange,
                                placeholder: "Purchase Order Number"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                children: "Invoice Number"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                type: "text",
                                name: "invoiceNumber",
                                onChange: handleInputChange,
                                placeholder: "Invoice Number"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                children: "Purchase Price"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                type: "number",
                                name: "purchasePrice",
                                onChange: handleInputChange,
                                placeholder: "Purchase Price"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                children: "Quantity"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                type: "number",
                                name: "quantity",
                                onChange: handleInputChange,
                                placeholder: "Quantity"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                children: "Total Amount"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                type: "number",
                                name: "totalAmount",
                                onChange: handleInputChange,
                                placeholder: "Total Amount"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                children: "Expiration date"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                type: "date",
                                name: "expirationDate",
                                onChange: handleInputChange,
                                placeholder: "Expiration date"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                children: "Description"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                name: "description",
                                as: "textarea",
                                rows: 3,
                                onChange: handleInputChange,
                                placeholder: "Description"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Modal.Footer */ .u_.Footer, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                    variant: "secondary",
                    onClick: handleAddGood,
                    children: "Submit"
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddGoodModal);

});

/***/ }),

/***/ 670:
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








const EditGoodModal = ({ onEditSuccess , goodId  })=>{
    const { 0: good , 1: setGood  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        vendorName: "",
        deliveryDate: "",
        purchaseOrderNumber: "",
        invoiceNumber: "",
        warehouseId: {
        },
        name: "",
        description: "",
        purchasePrice: 0,
        expirationDate: "",
        quantity: 0,
        totalAmount: 0
    });
    const { 0: openAddModal , 1: setOpenAddModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: warehouses , 1: setWarehouses  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (openAddModal) {
            (async function() {
                const resp = await (0,utils_apiCall__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(`${utils_adminUrl__WEBPACK_IMPORTED_MODULE_6__/* .Admin_Good_GetOne */ .Qp}/${goodId}`, "GET", {
                });
                setGood({
                    vendorName: resp.vendorName,
                    deliveryDate: resp.deliveryDate,
                    purchaseOrderNumber: resp.purchaseOrderNumber,
                    invoiceNumber: resp.invoiceNumber,
                    warehouseId: resp.warehouseId,
                    name: resp.name,
                    description: resp.description,
                    purchasePrice: resp.purchasePrice,
                    expirationDate: resp.expirationDate,
                    quantity: resp.quantity,
                    totalAmount: resp.totalAmount
                });
            })();
        }
    }, [
        openAddModal
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async function() {
            const data = await (0,utils_apiCall__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(utils_adminUrl__WEBPACK_IMPORTED_MODULE_6__/* .Admin_Warehouse_GetAll */ .kq, "GET", {
            });
            setWarehouses(data.all);
        })();
    }, []);
    const handleInputChange = (e)=>{
        setGood({
            ...good,
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
        await (0,utils_apiCall__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(`${utils_adminUrl__WEBPACK_IMPORTED_MODULE_6__/* .Admin_Good_Edit */ .oe}/${goodId}`, "PUT", {
            ...good
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
                                children: "Edit good"
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
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                        children: "Name"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                        type: "text",
                                        name: "name",
                                        placeholder: "Name",
                                        onChange: handleInputChange,
                                        value: good.name
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                        children: "Vendor Name"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                        type: "text",
                                        name: "vendorName",
                                        onChange: handleInputChange,
                                        placeholder: "Vendor Name",
                                        value: good.vendorName
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                        children: "Warehouse"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Select */ .l0.Select, {
                                        onChange: handleInputChange,
                                        name: "warehouseId",
                                        size: "lg",
                                        value: good.warehouseId._id,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "",
                                                children: "Select Warehouse"
                                            }),
                                            warehouses.map((w)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: w._id,
                                                    children: w.warehouse_name
                                                }, w._id)
                                            )
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                        children: "Delivery Date"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                        type: "date",
                                        name: "deliveryDate",
                                        onChange: handleInputChange,
                                        placeholder: "Delivery Date",
                                        defaultValue: good.deliveryDate ? new Date(good.deliveryDate).toISOString().substring(0, 10) : ""
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                        children: "Purchase Order Number"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                        type: "text",
                                        name: "purchaseOrderNumber",
                                        onChange: handleInputChange,
                                        placeholder: "Purchase Order Number",
                                        value: good.purchaseOrderNumber
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                        children: "Invoice Number"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                        type: "text",
                                        name: "invoiceNumber",
                                        onChange: handleInputChange,
                                        placeholder: "Invoice Number",
                                        value: good.invoiceNumber
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                        children: "Purchase Price"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                        type: "number",
                                        name: "purchasePrice",
                                        onChange: handleInputChange,
                                        placeholder: "Purchase Price",
                                        value: good.purchasePrice
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                        children: "Quantity"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                        type: "number",
                                        name: "quantity",
                                        onChange: handleInputChange,
                                        placeholder: "Quantity",
                                        value: good.quantity
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                        children: "Total Amount"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                        type: "number",
                                        name: "totalAmount",
                                        onChange: handleInputChange,
                                        placeholder: "Total Amount",
                                        value: good.totalAmount
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                        children: "Expiration date"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                        type: "date",
                                        name: "expirationDate",
                                        onChange: handleInputChange,
                                        placeholder: "Expiration date",
                                        defaultValue: good.expirationDate ? new Date(good.expirationDate).toISOString().substring(0, 10) : ""
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Group */ .l0.Group, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Label */ .l0.Label, {
                                        children: "Description"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Control */ .l0.Control, {
                                        name: "description",
                                        as: "textarea",
                                        rows: 3,
                                        onChange: handleInputChange,
                                        placeholder: "Description",
                                        value: good.description
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditGoodModal);

});

/***/ }),

/***/ 1416:
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
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4563);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9167);
/* harmony import */ var components_sweetalert2_instance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6862);
/* harmony import */ var utils_apiCall__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9106);
/* harmony import */ var utils_adminUrl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8367);
/* harmony import */ var _EditGoodModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(670);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__, _EditGoodModal__WEBPACK_IMPORTED_MODULE_9__, utils_apiCall__WEBPACK_IMPORTED_MODULE_7__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__, _EditGoodModal__WEBPACK_IMPORTED_MODULE_9__, utils_apiCall__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);

/* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */ 









const ProductsTable = ({ warehouseID , goods , onChangeSort , onChangeFilter , onEditSuccess  })=>{
    const { 0: sortKey , 1: setSortKey  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        key: "_id",
        sort: 1
    });
    const { 0: filter , 1: setFilter  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        key: "",
        keyword: ""
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        onChangeSort(sortKey);
    }, [
        sortKey
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
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
    const handleDeleteGood = (id)=>{
        components_sweetalert2_instance__WEBPACK_IMPORTED_MODULE_6__/* .swal.fire */ .M.fire({
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
                    await (0,utils_apiCall__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(`${utils_adminUrl__WEBPACK_IMPORTED_MODULE_8__/* .Admin_Good_Delete */ .FM}/${id}`, "DELETE", {
                    });
                    components_sweetalert2_instance__WEBPACK_IMPORTED_MODULE_6__/* .swal.fire */ .M.fire("Deleted!", "Successfully deleted.", "success");
                    onEditSuccess();
                } catch (error) {
                    components_sweetalert2_instance__WEBPACK_IMPORTED_MODULE_6__/* .swal.fire */ .M.fire("Failure!", "Deleting Product is failure, Try again.", "error");
                }
            }
        });
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_5__/* .Table */ .iA, {
        responsive: true,
        striped: true,
        hover: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            scope: "col",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_5__/* .Form.Group */ .l0.Group, {
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
                                            sortKey.key === "name" && sortKey.sort === -1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faAngleUp,
                                                className: "me-2"
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faAngleDown,
                                                className: "me-2"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_5__/* .Form.Control */ .l0.Control, {
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
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_5__/* .Form.Group */ .l0.Group, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        style: {
                                            cursor: "pointer"
                                        },
                                        onClick: ()=>{
                                            handleSort("vendorName");
                                        },
                                        children: [
                                            "Vendor Name",
                                            sortKey.key === "vendorName" && sortKey.sort === -1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faAngleUp,
                                                className: "me-2"
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faAngleDown,
                                                className: "me-2"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_5__/* .Form.Control */ .l0.Control, {
                                        name: "vendorName",
                                        type: "text",
                                        onChange: handleFilterChange,
                                        size: "sm"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            scope: "col",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_5__/* .Form.Group */ .l0.Group, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        style: {
                                            cursor: "pointer"
                                        },
                                        onClick: ()=>{
                                            handleSort("warehouse");
                                        },
                                        children: [
                                            "Warehouse",
                                            sortKey.key === "warehouse" && sortKey.sort === -1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faAngleUp,
                                                className: "me-2"
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faAngleDown,
                                                className: "me-2"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_5__/* .Form.Control */ .l0.Control, {
                                        name: "warehouse",
                                        type: "text",
                                        onChange: handleFilterChange,
                                        size: "sm"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            scope: "col",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_5__/* .Form.Group */ .l0.Group, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        style: {
                                            cursor: "pointer"
                                        },
                                        onClick: ()=>{
                                            handleSort("quantity");
                                        },
                                        children: [
                                            "Quantity",
                                            sortKey.key === "quantity" && sortKey.sort === -1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faAngleUp,
                                                className: "me-2"
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faAngleDown,
                                                className: "me-2"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_5__/* .Form.Control */ .l0.Control, {
                                        name: "quantity",
                                        type: "text",
                                        onChange: handleFilterChange,
                                        size: "sm"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                children: goods.map((good)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: good.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: good.vendorName
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: good.quantity
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        display: "flex"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                            href: `/admin/warehouse/good/${good._id}`,
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .zx, {
                                                variant: "label-secondary",
                                                className: "ms-2",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faEye
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EditGoodModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            onEditSuccess: onEditSuccess,
                                            goodId: good._id
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .zx, {
                                            variant: "label-secondary",
                                            className: "ms-2",
                                            onClick: ()=>{
                                                handleDeleteGood(good._id);
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTrash
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }, good._id)
                )
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsTable);

});

/***/ }),

/***/ 6202:
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
/* harmony import */ var _GoodsTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1416);
/* harmony import */ var _AddGoodModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3287);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AddGoodModal__WEBPACK_IMPORTED_MODULE_11__, _GoodsTable__WEBPACK_IMPORTED_MODULE_10__, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__, utils_apiCall__WEBPACK_IMPORTED_MODULE_8__]);
([_AddGoodModal__WEBPACK_IMPORTED_MODULE_11__, _GoodsTable__WEBPACK_IMPORTED_MODULE_10__, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__, utils_apiCall__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);












const Goods = ({ warehouseID  })=>{
    const { 0: openAddModal , 1: setOpenAddModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: activeLinkNumber1 , 1: setActiveLinkNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { 0: paginationLength , 1: setPaginationLength  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);
    const { 0: goods , 1: setGoods  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: sortKey , 1: setSortKey  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        key: "_id",
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
    const handleClickOpenAddGoodModal = ()=>{
        setOpenAddModal(true);
    };
    const handleClickCloseAddGoodModal = ()=>{
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
        const resp = await (0,utils_apiCall__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(`${utils_adminUrl__WEBPACK_IMPORTED_MODULE_9__/* .Admin_Good_GetAll */ .eV}/${activeLinkNumber1}/${pageSize}/filterKey:${filter.key}/filterValue:${filter.keyword}/sortKey:${sortKey.key}/sort:${sortKey.sort}`, "GET", {
        });
        setGoods(resp.all);
        setProductsLength(resp.length);
    };
    const handleAddProductSuccess = ()=>{
        handleClickCloseAddGoodModal();
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
        filter
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Portlet.Header */ .kr.Header, {
                        bordered: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Portlet.Addon */ .kr.Addon, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .zx, {
                                    variant: "label-secondary",
                                    className: "me-2",
                                    onClick: handleClickOpenAddGoodModal,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faAdd,
                                            className: "me-2"
                                        }),
                                        "Add new good"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_csv__WEBPACK_IMPORTED_MODULE_2__.CSVLink, {
                                    data: goods,
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GoodsTable__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                warehouseID: warehouseID,
                                onChangeFilter: handleChangeFilter,
                                onChangeSort: handleChangeSort,
                                goods: goods,
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AddGoodModal__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                open: openAddModal,
                onClose: handleClickCloseAddGoodModal,
                onAddSuccess: handleAddProductSuccess
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Goods);

});

/***/ }),

/***/ 691:
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
/* harmony import */ var _components_admin_warehouse_good__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6202);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_auth_withAdminAuth__WEBPACK_IMPORTED_MODULE_2__, _components_admin_warehouse_good__WEBPACK_IMPORTED_MODULE_4__]);
([components_auth_withAdminAuth__WEBPACK_IMPORTED_MODULE_2__, _components_admin_warehouse_good__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





const WarehouseGoodReceiptPage = ()=>{
    const { 0: warehouseID , 1: setWarehouseID  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: warehouseName , 1: setWarehouseName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Row */ .X2, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_3__/* .Col */ .JX, {
                md: "12",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_warehouse_good__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    warehouseID: warehouseID
                })
            })
        })
    }));
};
WarehouseGoodReceiptPage.pageTitle = "Warehouse Good Receipt";
WarehouseGoodReceiptPage.activeLink = "warehouseGoodReceipt";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,components_auth_withAdminAuth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(WarehouseGoodReceiptPage));

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

/***/ 5061:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [7190,1664,9167,8367,6259,5886,4318], () => (__webpack_exec__(691)));
module.exports = __webpack_exports__;

})();