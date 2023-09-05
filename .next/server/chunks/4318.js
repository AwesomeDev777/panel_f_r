"use strict";
exports.id = 4318;
exports.ids = [4318];
exports.modules = {

/***/ 6862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ swal),
/* harmony export */   "A": () => (/* binding */ toast)
/* harmony export */ });
/* harmony import */ var sweetalert2_dist_sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2584);
/* harmony import */ var sweetalert2_dist_sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3810);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_1__);


// Set SweetAlert options
const swal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_1___default()(sweetalert2_dist_sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
    customClass: {
        confirmButton: 'btn btn-label-success btn-wide mx-1',
        cancelButton: 'btn btn-label-danger btn-wide mx-1'
    },
    buttonsStyling: false
}));
// Set SweetAlert toast options
const toast = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_1___default()(sweetalert2_dist_sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true
}));


/***/ }),

/***/ 716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueupcode_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9167);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const PaginationStatesExample = (props)=>{
    const [activeLinkNumber, setActiveLinkNumber] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(props.pagination.activeLinkNumber);
    const paginationLength = props.pagination.paginationLength;
    var paginationLinkNumbers = [];
    if (activeLinkNumber > paginationLength) {
        setActiveLinkNumber(paginationLength);
    }
    if (activeLinkNumber < 1) {
        setActiveLinkNumber(1);
    }
    if (paginationLength <= 7) {
        paginationLinkNumbers = Array.from({
            length: paginationLength
        }, (_, i)=>i + 1
        );
    } else {
        if (activeLinkNumber <= 4) {
            paginationLinkNumbers = Array.from({
                length: 7
            }, (_, i)=>i + 1
            );
        } else {
            if (paginationLength - activeLinkNumber > 3) {
                paginationLinkNumbers = Array.from({
                    length: 7
                }, (_, i)=>activeLinkNumber + i - 3
                );
            } else {
                paginationLinkNumbers = Array.from({
                    length: 7
                }, (_, i)=>paginationLength + i - 6
                );
            }
        }
    }
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{
        props.pagination.chooseActiveLinkNumber(activeLinkNumber);
    }, [
        activeLinkNumber
    ]);
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{
        setActiveLinkNumber(props.pagination.activeLinkNumber);
    }, [
        props.pagination.activeLinkNumber
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Pagination */ .tl, {
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Pagination.Item */ .tl.Item, {
                onClick: ()=>setActiveLinkNumber(activeLinkNumber - 1)
                ,
                /*#__PURE__*/ children: "PREV"
            }),
            paginationLinkNumbers.map((paginationNumber)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Pagination.Item */ .tl.Item, {
                    active: paginationNumber === activeLinkNumber,
                    onClick: ()=>{
                        setActiveLinkNumber(paginationNumber);
                    },
                    children: paginationNumber
                }, paginationNumber)
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blueupcode_components__WEBPACK_IMPORTED_MODULE_1__/* .Pagination.Item */ .tl.Item, {
                onClick: ()=>setActiveLinkNumber(activeLinkNumber + 1)
                ,
                children: "Next"
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaginationStatesExample);


/***/ }),

/***/ 4364:
/***/ ((module) => {


const isEmpty = (value)=>value === undefined || value == null || typeof value === 'object' && Object.keys(value).length === 0 || typeof value === 'string' && value.trim().length === 0
;
module.exports = isEmpty;


/***/ })

};
;