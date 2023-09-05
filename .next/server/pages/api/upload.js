"use strict";
(() => {
var exports = {};
exports.id = 5039;
exports.ids = [5039];
exports.modules = {

/***/ 2616:
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

/***/ 9932:
/***/ ((module) => {

module.exports = require("mv");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 8894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2616);
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);


var mv = __webpack_require__(9932);
const config = {
    api: {
        bodyParser: false
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    const data = await new Promise((resolve, reject)=>{
        const form = new formidable__WEBPACK_IMPORTED_MODULE_0__.IncomingForm();
        form.parse(req, (err, fields, files)=>{
            const type = files.file.mimetype;
            if (err) return reject(err);
            if (type.indexOf("image") !== -1) {
                var newFilename = files.file.newFilename.concat("", files.file.originalFilename.slice(files.file.originalFilename.lastIndexOf(".")));
                var oldPath = files.file.filepath;
                var newPath = `./public/uploads/profile_images/${newFilename}`;
                mv(oldPath, newPath, function(err) {
                });
                res.status(200).json({
                    filename: newFilename
                });
            } else {
                res.status(200).json({
                    error: "Not Image file"
                });
            }
        });
    });
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8894));
module.exports = __webpack_exports__;

})();