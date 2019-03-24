(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("consumer", [], factory);
	else if(typeof exports === 'object')
		exports["consumer"] = factory();
	else
		root["TS"] = root["TS"] || {}, root["TS"]["consumer"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./another-package/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./another-package/index.js":
/*!**********************************!*\
  !*** ./another-package/index.js ***!
  \**********************************/
/*! exports provided: consumerFn */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_someConsumer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/someConsumer */ \"./another-package/src/someConsumer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"consumerFn\", function() { return _src_someConsumer__WEBPACK_IMPORTED_MODULE_0__[\"a\"]; });\n\n\n\n//# sourceURL=webpack://TS.%5Bname%5D/./another-package/index.js?");

/***/ }),

/***/ "./another-package/src/someConsumer.js":
/*!*********************************************!*\
  !*** ./another-package/src/someConsumer.js ***!
  \*********************************************/
/*! exports provided: consumerFn */
/*! exports used: consumerFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return consumerFn; });\n/* harmony import */ var _dist_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dist/core */ \"./dist/core.js\");\n/* harmony import */ var _dist_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_core__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction consumerFn(){\n    console.log(Object(_dist_core__WEBPACK_IMPORTED_MODULE_0__[\"cube\"])(3));\n}\n\n\n\n//# sourceURL=webpack://TS.%5Bname%5D/./another-package/src/someConsumer.js?");

/***/ }),

/***/ "./dist/core.js":
/*!**********************!*\
  !*** ./dist/core.js ***!
  \**********************/
/*! no static exports found */
/*! exports used: cube */
/***/ (function(module, exports, __webpack_require__) {

eval("(function webpackUniversalModuleDefinition(root, factory) {\n\tif(true)\n\t\tmodule.exports = factory();\n\telse {}\n})((typeof self !== 'undefined' ? self : this), function() {\nreturn /******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t}\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/\n/******/ \t// create a fake namespace object\n/******/ \t// mode & 1: value is a module id, require it\n/******/ \t// mode & 2: merge all properties of value into the ns\n/******/ \t// mode & 4: return value when already ns object\n/******/ \t// mode & 8|1: behave like require\n/******/ \t__webpack_require__.t = function(value, mode) {\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\n/******/ \t\tif(mode & 8) return value;\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\n/******/ \t\tvar ns = Object.create(null);\n/******/ \t\t__webpack_require__.r(ns);\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n/******/ \t\treturn ns;\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = \"./src/index.js\");\n/******/ })\n/************************************************************************/\n/******/ ({\n\n/***/ \"./src/index.js\":\n/*!**********************!*\\\n  !*** ./src/index.js ***!\n  \\**********************/\n/*! exports provided: cube, unusedFn */\n/*! all exports used */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ \\\"./src/math.js\\\");\\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \\\"cube\\\", function() { return _math_js__WEBPACK_IMPORTED_MODULE_0__[\\\"a\\\"]; });\\n\\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \\\"./src/utils.js\\\");\\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \\\"unusedFn\\\", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_1__[\\\"a\\\"]; });\\n\\n\\n\\n\\n//# sourceURL=webpack://TS.%5Bname%5D/./src/index.js?\");\n\n/***/ }),\n\n/***/ \"./src/math.js\":\n/*!*********************!*\\\n  !*** ./src/math.js ***!\n  \\*********************/\n/*! exports provided: square, cube */\n/*! exports used: cube */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"/* unused harmony export square */\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"a\\\", function() { return cube; });\\nfunction square(x) {\\n    return x * x;\\n  }\\n  \\n  function cube(x) {\\n    return x * x * x;\\n  }\\n\\n//# sourceURL=webpack://TS.%5Bname%5D/./src/math.js?\");\n\n/***/ }),\n\n/***/ \"./src/utils.js\":\n/*!**********************!*\\\n  !*** ./src/utils.js ***!\n  \\**********************/\n/*! exports provided: unusedFn */\n/*! exports used: unusedFn */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"a\\\", function() { return unusedFn; });\\nfunction unusedFn() {\\n    console.log(\\\"This Function shouldn't be in the consumer bundle!\\\");\\n  }\\n\\n//# sourceURL=webpack://TS.%5Bname%5D/./src/utils.js?\");\n\n/***/ })\n\n/******/ });\n});\n\n//# sourceURL=webpack://TS.%5Bname%5D/./dist/core.js?");

/***/ })

/******/ });
});