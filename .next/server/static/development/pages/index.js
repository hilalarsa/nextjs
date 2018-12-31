module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Ads.js":
/*!***************************!*\
  !*** ./components/Ads.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\JavascriptRules\\nextjs\\components\\Ads.js";


var Ads = function Ads() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ads",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Ads);

/***/ }),

/***/ "./components/ArticleHeader.js":
/*!*************************************!*\
  !*** ./components/ArticleHeader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\JavascriptRules\\nextjs\\components\\ArticleHeader.js";



var ArticleHeader = function ArticleHeader(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3801141344",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3801141344",
    css: ".tag.jsx-3801141344{font-size:12px;color:grey;}a.jsx-3801141344{margin-right:7px;-webkit-text-decoration:none;text-decoration:none;}h2.jsx-3801141344{font-weight:400;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxKYXZhc2NyaXB0UnVsZXNcXG5leHRqc1xcY29tcG9uZW50c1xcQXJ0aWNsZUhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFZ0IsQUFHd0IsQUFJRSxBQUlELGVBUEwsQ0FRYixDQUp1QixTQUh2Qix5Q0FJQSIsImZpbGUiOiJEOlxcSmF2YXNjcmlwdFJ1bGVzXFxuZXh0anNcXGNvbXBvbmVudHNcXEFydGljbGVIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBcnRpY2xlSGVhZGVyID0gcHJvcHMgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC50YWcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgfVxyXG4gICAgICBhIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIDxoMj57cHJvcHMudGl0bGV9PC9oMj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnXCI+XHJcbiAgICAgIEJ5OiB7cHJvcHMuZGV0YWlsLmF1dGhvcn0gLyB7cHJvcHMuZGV0YWlsLmNvbXBhbnl9IHx7XCIgXCJ9XHJcbiAgICAgIHtwcm9wcy5kZXRhaWwuZGF0ZXRpbWV9XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgVGFnczp7XCIgXCJ9XHJcbiAgICAgICAge3Byb3BzLnRhZy5tYXAoKGl0ZW0sIGtleSkgPT4gKFxyXG4gICAgICAgICAgPGEgaHJlZj17aXRlbS51cmx9PntpdGVtLmxhYmVsfTwvYT5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUhlYWRlcjtcclxuIl19 */\n/*@ sourceURL=D:\\JavascriptRules\\nextjs\\components\\ArticleHeader.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-3801141344",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3801141344" + " " + "tag",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "By: ", props.detail.author, " / ", props.detail.company, " |", " ", props.detail.datetime), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3801141344" + " " + "tag",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3801141344",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Tags:", " ", props.tag.map(function (item, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: item.url,
      className: "jsx-3801141344",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, item.label);
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleHeader);

/***/ }),

/***/ "./components/Breadcrumb.js":
/*!**********************************!*\
  !*** ./components/Breadcrumb.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\JavascriptRules\\nextjs\\components\\Breadcrumb.js";



var linkStyle = {};

var Breadcrumb = function Breadcrumb(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1751867872" + " " + "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1751867872",
    css: "a.jsx-1751867872{margin:10px;font-size:12px;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxKYXZhc2NyaXB0UnVsZXNcXG5leHRqc1xcY29tcG9uZW50c1xcQnJlYWRjcnVtYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLZ0IsQUFHcUIsWUFDRyxlQUNNLGtEQUN2QiIsImZpbGUiOiJEOlxcSmF2YXNjcmlwdFJ1bGVzXFxuZXh0anNcXGNvbXBvbmVudHNcXEJyZWFkY3J1bWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBsaW5rU3R5bGUgPSB7fTtcclxuY29uc3QgQnJlYWRjcnVtYiA9IHByb3BzID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT17XCJsaW5rXCJ9PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICBhIHtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+SG9tZTwvYT5cclxuICAgIDwvTGluaz5cclxuICAgID5cclxuICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PlByb3BlcnR5IE5ld3M8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgICA+XHJcbiAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5OZXdzPC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnJlYWRjcnVtYjtcclxuIl19 */\n/*@ sourceURL=D:\\JavascriptRules\\nextjs\\components\\Breadcrumb.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: linkStyle,
    className: "jsx-1751867872",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Home")), ">", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: linkStyle,
    className: "jsx-1751867872",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Property News")), ">", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: linkStyle,
    className: "jsx-1751867872",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "News")));
};

/* harmony default export */ __webpack_exports__["default"] = (Breadcrumb);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\JavascriptRules\\nextjs\\components\\Header.js";



var Header = function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    key: "viewport",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Poppins",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\JavascriptRules\\nextjs\\components\\Post.js";





var Post = function Post(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-990019887",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "990019887",
    css: "p.jsx-990019887{text-align:justify;font-family:\"Open Sans\",sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxKYXZhc2NyaXB0UnVsZXNcXG5leHRqc1xcY29tcG9uZW50c1xcUG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLTyxBQUc4QixtQkFDaUIsbUNBQ3RDIiwiZmlsZSI6IkQ6XFxKYXZhc2NyaXB0UnVsZXNcXG5leHRqc1xcY29tcG9uZW50c1xcUG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XHJcbmNvbnN0IFBvc3QgPSBwcm9wcyA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgIHtgXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICAgIHtwcm9wcy5jb250ZW50ID09IHVuZGVmaW5lZCA/IChcclxuICAgICAgPHA+VGV4dCBmYWlsZWQgdG8gbG9hZCwgcGxlYXNlIHJlZnJlc2g8L3A+XHJcbiAgICApIDogKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17cHJvcHMuY29udGVudH0gZXNjYXBlSHRtbD17ZmFsc2V9IC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKX1cclxuICA8L2Rpdj5cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl19 */\n/*@ sourceURL=D:\\JavascriptRules\\nextjs\\components\\Post.js */",
    __self: this
  }), props.content == undefined ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-990019887",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Text failed to load, please refresh") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    source: props.content,
    escapeHtml: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./components/SocialMedia.js":
/*!***********************************!*\
  !*** ./components/SocialMedia.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_social_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-social-icons */ "react-social-icons");
/* harmony import */ var react_social_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_social_icons__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\JavascriptRules\\nextjs\\components\\SocialMedia.js";





var SocialMedia = function SocialMedia(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2397383426",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2397383426",
    css: ".icon.jsx-2397383426{margin:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxKYXZhc2NyaXB0UnVsZXNcXG5leHRqc1xcY29tcG9uZW50c1xcU29jaWFsTWVkaWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS2dCLEFBR29CLFdBQ2IiLCJmaWxlIjoiRDpcXEphdmFzY3JpcHRSdWxlc1xcbmV4dGpzXFxjb21wb25lbnRzXFxTb2NpYWxNZWRpYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgU29jaWFsSWNvbiB9IGZyb20gXCJyZWFjdC1zb2NpYWwtaWNvbnNcIjtcclxuXHJcbmNvbnN0IFNvY2lhbE1lZGlhID0gcHJvcHMgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5pY29uIHtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAge3Byb3BzLnNvY2lhbG1lZGlhLm1hcCgoaXRlbSwga2V5KSA9PiAoXHJcbiAgICAgIDxTb2NpYWxJY29uXHJcbiAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgdXJsPXtpdGVtLnVybH1cclxuICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDI3LCB3aWR0aDogMjcsIG1hcmdpbjogMiwgdGV4dEFsaWduOiBcImxlZnRcIiB9fVxyXG4gICAgICAvPlxyXG4gICAgKSl9XHJcbiAgPC9kaXY+XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IFNvY2lhbE1lZGlhO1xyXG4iXX0= */\n/*@ sourceURL=D:\\JavascriptRules\\nextjs\\components\\SocialMedia.js */",
    __self: this
  }), props.socialmedia.map(function (item, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_social_icons__WEBPACK_IMPORTED_MODULE_3__["SocialIcon"], {
      title: item.title,
      url: item.url,
      style: {
        height: 27,
        width: 27,
        margin: 2,
        textAlign: "left"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SocialMedia);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Ads__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Ads */ "./components/Ads.js");
/* harmony import */ var _components_ArticleHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ArticleHeader */ "./components/ArticleHeader.js");
/* harmony import */ var _components_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Breadcrumb */ "./components/Breadcrumb.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Post */ "./components/Post.js");
/* harmony import */ var _components_SocialMedia__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SocialMedia */ "./components/SocialMedia.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "D:\\JavascriptRules\\nextjs\\pages\\index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 //components






 // misc package

 // example json from apis (assuming posts is in html/markdown format)

var headers = {
  title: "Park View Mansions in second enbloc attempt this year",
  detail: {
    author: "Author name",
    company: "EdgeProp Singapore",
    datetime: moment__WEBPACK_IMPORTED_MODULE_10___default()().format("MMMM DD, YYYY HH:mm a")
  },
  tag: [{
    label: "property briefs",
    url: "google.com"
  }, {
    label: "Park View Mansions",
    url: "google.com"
  }, {
    label: "Jurong Lake Garden",
    url: "google.com"
  }, {
    label: "Huttons Asia",
    url: "google.com"
  }]
};
var content = "\n<p>The owners of Park View Mansions are attempting a second en bloc bid this year, and more than 80% of the 160 owners have agreed to a lower reserve price, says marketing agent Huttons Asia. The development has been launched for sale for $250 million, or $969 psf ppr after factoring an estimated differential premium and lease upgrading premium of $140.8 million.</p> \n<p>This is a 22% reduction to the reserve price when the 99-year leasehold development first launched a collective sale bid in March this year, at $320 million ($1,183 psf per plot ratio). A new development would have a breakeven price of about $1,450 psf, and owners are expected to receive $1.44 million to $1.6 million each from the sale.</p>  \n<img alt=\"Trulli\" src=\"/static/edgeprop.jpg\" title=\"Hello\"/>\n<figcaption>View of Jurong Lake from Park View Mansions (Credit: Huttons Asia)</figcaption>\n<p> Park View Mansions is on a 191,974 sq ft site that is zoned for residential use with a gross plot ratio of 2.1, and a potential gross floor area of 403,145 sq ft. The new development could yield up to 440 residential units of about 915 sq ft, based on URA\u2019s new unit size guidelines. A Pre-Application Feasibility Study is not required, but the development of the site is still subject to LTA conditions.</p>\n<p>The amount of housing stock in the Jurong East area has not changed since 4Q2016, says Angela Lim, deputy head of investment sales at Huttons Asia. The last private development was the 710-unit Lake Grande by MCL Land which was sold out in less than three years, she says. \u201CHence Park View Gardens is an opportune choice for developers to replenish their land bank to match the growing and pent up demand in the Jurong area\u201D.</p>\n<p>The public tender closes on January 18 next year.</p>\n";
var SosialMediaUrls = [{
  title: "Whatsapp",
  url: "http://api.whatsapp.com/"
}, {
  title: "LinkedIn",
  url: "http://linkedin.com/in/hilalarsa/"
}, {
  title: "WeChat",
  url: "http://wechat.com"
}, {
  title: "Facebook",
  url: "http://facebook.com/hilalarsa"
}, {
  title: "Email",
  url: "http://mailto.com/hilalarsa"
}];

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: headers.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3063686828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3063686828" + " " + "breadcrumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", {
        className: "jsx-3063686828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("style", {
        global: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "\n            body{\n              margin:0\n            }\n            div{\n              font-family: \"Poppins\";\n            }\n            p{\n              font-family: 'Open Sans', sans-serif;\n            }\n            hr{\n              border-color:#EEEEEE;\n              background-color:#EEEEEE;\n            }\n            img{\n              width: 100%;\n              max-width: 700px;\n              height: auto;\n            }\n            figcaption{\n              font-size:small;\n              font-style:italic;\n            }\n          "), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3063686828",
        css: ".flex-container.jsx-3063686828{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.breadcrumb.jsx-3063686828{margin:10px;}.post.jsx-3063686828{margin:auto;line-height:1.7;max-width:800px;padding:0 15px 15px 15px;}.socialmedia.jsx-3063686828{margin-bottom:10px;}@media (min-width:1000px){.ads-right.jsx-3063686828{width:33.3%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxKYXZhc2NyaXB0UnVsZXNcXG5leHRqc1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThGc0IsQUFHNEIsQUFHRCxBQUdBLEFBTU8sQUFJTCxZQVpoQixBQUdrQixBQVVoQixPQUpGLFNBTGtCLGdCQUNTLHlCQUMzQixLQVRBIiwiZmlsZSI6IkQ6XFxKYXZhc2NyaXB0UnVsZXNcXG5leHRqc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vY29tcG9uZW50c1xyXG5pbXBvcnQgQWRzIGZyb20gXCIuLi9jb21wb25lbnRzL0Fkc1wiO1xyXG5pbXBvcnQgQXJ0aWNsZUhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9BcnRpY2xlSGVhZGVyXCI7XHJcbmltcG9ydCBCcmVhZGNydW1iIGZyb20gXCIuLi9jb21wb25lbnRzL0JyZWFkY3J1bWJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IFBvc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdFwiO1xyXG5pbXBvcnQgU29jaWFsTWVkaWEgZnJvbSBcIi4uL2NvbXBvbmVudHMvU29jaWFsTWVkaWFcIjtcclxuXHJcbi8vIG1pc2MgcGFja2FnZVxyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuLy8gZXhhbXBsZSBqc29uIGZyb20gYXBpcyAoYXNzdW1pbmcgcG9zdHMgaXMgaW4gaHRtbC9tYXJrZG93biBmb3JtYXQpXHJcbmNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgdGl0bGU6IFwiUGFyayBWaWV3IE1hbnNpb25zIGluIHNlY29uZCBlbmJsb2MgYXR0ZW1wdCB0aGlzIHllYXJcIixcclxuICBkZXRhaWw6IHtcclxuICAgIGF1dGhvcjogXCJBdXRob3IgbmFtZVwiLFxyXG4gICAgY29tcGFueTogXCJFZGdlUHJvcCBTaW5nYXBvcmVcIixcclxuICAgIGRhdGV0aW1lOiBtb21lbnQoKS5mb3JtYXQoYE1NTU0gREQsIFlZWVkgSEg6bW0gYWApXHJcbiAgfSxcclxuICB0YWc6IFtcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwicHJvcGVydHkgYnJpZWZzXCIsXHJcbiAgICAgIHVybDogXCJnb29nbGUuY29tXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIlBhcmsgVmlldyBNYW5zaW9uc1wiLFxyXG4gICAgICB1cmw6IFwiZ29vZ2xlLmNvbVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJKdXJvbmcgTGFrZSBHYXJkZW5cIixcclxuICAgICAgdXJsOiBcImdvb2dsZS5jb21cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiSHV0dG9ucyBBc2lhXCIsXHJcbiAgICAgIHVybDogXCJnb29nbGUuY29tXCJcclxuICAgIH1cclxuICBdXHJcbn07XHJcbmNvbnN0IGNvbnRlbnQgPSBgXHJcbjxwPlRoZSBvd25lcnMgb2YgUGFyayBWaWV3IE1hbnNpb25zIGFyZSBhdHRlbXB0aW5nIGEgc2Vjb25kIGVuIGJsb2MgYmlkIHRoaXMgeWVhciwgYW5kIG1vcmUgdGhhbiA4MCUgb2YgdGhlIDE2MCBvd25lcnMgaGF2ZSBhZ3JlZWQgdG8gYSBsb3dlciByZXNlcnZlIHByaWNlLCBzYXlzIG1hcmtldGluZyBhZ2VudCBIdXR0b25zIEFzaWEuIFRoZSBkZXZlbG9wbWVudCBoYXMgYmVlbiBsYXVuY2hlZCBmb3Igc2FsZSBmb3IgJDI1MCBtaWxsaW9uLCBvciAkOTY5IHBzZiBwcHIgYWZ0ZXIgZmFjdG9yaW5nIGFuIGVzdGltYXRlZCBkaWZmZXJlbnRpYWwgcHJlbWl1bSBhbmQgbGVhc2UgdXBncmFkaW5nIHByZW1pdW0gb2YgJDE0MC44IG1pbGxpb24uPC9wPiBcclxuPHA+VGhpcyBpcyBhIDIyJSByZWR1Y3Rpb24gdG8gdGhlIHJlc2VydmUgcHJpY2Ugd2hlbiB0aGUgOTkteWVhciBsZWFzZWhvbGQgZGV2ZWxvcG1lbnQgZmlyc3QgbGF1bmNoZWQgYSBjb2xsZWN0aXZlIHNhbGUgYmlkIGluIE1hcmNoIHRoaXMgeWVhciwgYXQgJDMyMCBtaWxsaW9uICgkMSwxODMgcHNmIHBlciBwbG90IHJhdGlvKS4gQSBuZXcgZGV2ZWxvcG1lbnQgd291bGQgaGF2ZSBhIGJyZWFrZXZlbiBwcmljZSBvZiBhYm91dCAkMSw0NTAgcHNmLCBhbmQgb3duZXJzIGFyZSBleHBlY3RlZCB0byByZWNlaXZlICQxLjQ0IG1pbGxpb24gdG8gJDEuNiBtaWxsaW9uIGVhY2ggZnJvbSB0aGUgc2FsZS48L3A+ICBcclxuPGltZyBhbHQ9XCJUcnVsbGlcIiBzcmM9XCIvc3RhdGljL2VkZ2Vwcm9wLmpwZ1wiIHRpdGxlPVwiSGVsbG9cIi8+XHJcbjxmaWdjYXB0aW9uPlZpZXcgb2YgSnVyb25nIExha2UgZnJvbSBQYXJrIFZpZXcgTWFuc2lvbnMgKENyZWRpdDogSHV0dG9ucyBBc2lhKTwvZmlnY2FwdGlvbj5cclxuPHA+IFBhcmsgVmlldyBNYW5zaW9ucyBpcyBvbiBhIDE5MSw5NzQgc3EgZnQgc2l0ZSB0aGF0IGlzIHpvbmVkIGZvciByZXNpZGVudGlhbCB1c2Ugd2l0aCBhIGdyb3NzIHBsb3QgcmF0aW8gb2YgMi4xLCBhbmQgYSBwb3RlbnRpYWwgZ3Jvc3MgZmxvb3IgYXJlYSBvZiA0MDMsMTQ1IHNxIGZ0LiBUaGUgbmV3IGRldmVsb3BtZW50IGNvdWxkIHlpZWxkIHVwIHRvIDQ0MCByZXNpZGVudGlhbCB1bml0cyBvZiBhYm91dCA5MTUgc3EgZnQsIGJhc2VkIG9uIFVSQeKAmXMgbmV3IHVuaXQgc2l6ZSBndWlkZWxpbmVzLiBBIFByZS1BcHBsaWNhdGlvbiBGZWFzaWJpbGl0eSBTdHVkeSBpcyBub3QgcmVxdWlyZWQsIGJ1dCB0aGUgZGV2ZWxvcG1lbnQgb2YgdGhlIHNpdGUgaXMgc3RpbGwgc3ViamVjdCB0byBMVEEgY29uZGl0aW9ucy48L3A+XHJcbjxwPlRoZSBhbW91bnQgb2YgaG91c2luZyBzdG9jayBpbiB0aGUgSnVyb25nIEVhc3QgYXJlYSBoYXMgbm90IGNoYW5nZWQgc2luY2UgNFEyMDE2LCBzYXlzIEFuZ2VsYSBMaW0sIGRlcHV0eSBoZWFkIG9mIGludmVzdG1lbnQgc2FsZXMgYXQgSHV0dG9ucyBBc2lhLiBUaGUgbGFzdCBwcml2YXRlIGRldmVsb3BtZW50IHdhcyB0aGUgNzEwLXVuaXQgTGFrZSBHcmFuZGUgYnkgTUNMIExhbmQgd2hpY2ggd2FzIHNvbGQgb3V0IGluIGxlc3MgdGhhbiB0aHJlZSB5ZWFycywgc2hlIHNheXMuIOKAnEhlbmNlIFBhcmsgVmlldyBHYXJkZW5zIGlzIGFuIG9wcG9ydHVuZSBjaG9pY2UgZm9yIGRldmVsb3BlcnMgdG8gcmVwbGVuaXNoIHRoZWlyIGxhbmQgYmFuayB0byBtYXRjaCB0aGUgZ3Jvd2luZyBhbmQgcGVudCB1cCBkZW1hbmQgaW4gdGhlIEp1cm9uZyBhcmVh4oCdLjwvcD5cclxuPHA+VGhlIHB1YmxpYyB0ZW5kZXIgY2xvc2VzIG9uIEphbnVhcnkgMTggbmV4dCB5ZWFyLjwvcD5cclxuYDtcclxuY29uc3QgU29zaWFsTWVkaWFVcmxzID0gW1xyXG4gIHsgdGl0bGU6IFwiV2hhdHNhcHBcIiwgdXJsOiBcImh0dHA6Ly9hcGkud2hhdHNhcHAuY29tL1wiIH0sXHJcbiAgeyB0aXRsZTogXCJMaW5rZWRJblwiLCB1cmw6IFwiaHR0cDovL2xpbmtlZGluLmNvbS9pbi9oaWxhbGFyc2EvXCIgfSxcclxuICB7IHRpdGxlOiBcIldlQ2hhdFwiLCB1cmw6IFwiaHR0cDovL3dlY2hhdC5jb21cIiB9LFxyXG4gIHsgdGl0bGU6IFwiRmFjZWJvb2tcIiwgdXJsOiBcImh0dHA6Ly9mYWNlYm9vay5jb20vaGlsYWxhcnNhXCIgfSxcclxuICB7IHRpdGxlOiBcIkVtYWlsXCIsIHVybDogXCJodHRwOi8vbWFpbHRvLmNvbS9oaWxhbGFyc2FcIiB9XHJcbl07XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWRlciB0aXRsZT17aGVhZGVycy50aXRsZX0gLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmVhZGNydW1iXCI+XHJcbiAgICAgICAgICAgIDxCcmVhZGNydW1iIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgPHN0eWxlIGdsb2JhbD5cclxuICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgYm9keXtcclxuICAgICAgICAgICAgICBtYXJnaW46MFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpdntcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaHJ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiNFRUVFRUU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRUVFRUVFO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaWdjYXB0aW9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTpzbWFsbDtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOml0YWxpYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5mbGV4LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnJlYWRjcnVtYiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wb3N0IHtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNztcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweCAxNXB4IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNvY2lhbG1lZGlhIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAgICAgICAgICAgICAuYWRzLXJpZ2h0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zJTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxtZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgPEFydGljbGVIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2hlYWRlcnMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIGRldGFpbD17aGVhZGVycy5kZXRhaWx9XHJcbiAgICAgICAgICAgICAgICAgIHRhZz17aGVhZGVycy50YWd9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxTb2NpYWxNZWRpYSBzb2NpYWxtZWRpYT17U29zaWFsTWVkaWFVcmxzfSAvPlxyXG4gICAgICAgICAgICAgIDxQb3N0IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XHJcbiAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgPFNvY2lhbE1lZGlhIHNvY2lhbG1lZGlhPXtTb3NpYWxNZWRpYVVybHN9IC8+XHJcbiAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkcy1yaWdodFwiPlxyXG4gICAgICAgICAgICAgIDxBZHMgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXX0= */\n/*@ sourceURL=D:\\JavascriptRules\\nextjs\\pages\\index.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3063686828" + " " + "flex-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3063686828" + " " + "post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3063686828" + " " + "socialmedia",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_ArticleHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: headers.title,
        detail: headers.detail,
        tag: headers.tag,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_SocialMedia__WEBPACK_IMPORTED_MODULE_9__["default"], {
        socialmedia: SosialMediaUrls,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Post__WEBPACK_IMPORTED_MODULE_8__["default"], {
        content: content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", {
        className: "jsx-3063686828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_SocialMedia__WEBPACK_IMPORTED_MODULE_9__["default"], {
        socialmedia: SosialMediaUrls,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", {
        className: "jsx-3063686828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3063686828" + " " + "ads-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Ads__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      })))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "react-social-icons":
/*!*************************************!*\
  !*** external "react-social-icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-social-icons");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map