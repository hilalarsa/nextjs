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
        className: "jsx-3622207182",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", {
        className: "jsx-3622207182",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("style", {
        global: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "\n            div{\n              font-family: \"Poppins\";\n            }\n            p{\n              font-family: 'Open Sans', sans-serif;\n            }\n            hr{\n              border-color:#EEEEEE;\n              background-color:#EEEEEE;\n            }\n            img{\n              width: 100%;\n              max-width: 700px;\n              height: auto;\n            }\n            figcaption{\n              font-size:small;\n              font-style:italic;\n            }\n          "), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3622207182",
        css: ".flex-container.jsx-3622207182{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.post.jsx-3622207182{margin:auto;line-height:1.7;max-width:1200px;}.socialmedia.jsx-3622207182{margin-bottom:10px;}@media (min-width:1000px){.ads-right.jsx-3622207182{background-color:pink;width:33.3%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxKYXZhc2NyaXB0UnVsZXNcXG5leHRqc1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlGc0IsQUFHNEIsQUFHRCxBQUtPLEFBSUssWUFSUixPQUtsQixHQUlnQixNQVJHLE1BU2pCLFdBUkYsNkJBTEEiLCJmaWxlIjoiRDpcXEphdmFzY3JpcHRSdWxlc1xcbmV4dGpzXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy9jb21wb25lbnRzXHJcbmltcG9ydCBBZHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQWRzXCI7XHJcbmltcG9ydCBBcnRpY2xlSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0FydGljbGVIZWFkZXJcIjtcclxuaW1wb3J0IEJyZWFkY3J1bWIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQnJlYWRjcnVtYlwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgUG9zdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0XCI7XHJcbmltcG9ydCBTb2NpYWxNZWRpYSBmcm9tIFwiLi4vY29tcG9uZW50cy9Tb2NpYWxNZWRpYVwiO1xyXG5cclxuLy8gbWlzYyBwYWNrYWdlXHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG4vLyBleGFtcGxlIGpzb24gZnJvbSBhcGlzIChhc3N1bWluZyBwb3N0cyBpcyBpbiBodG1sL21hcmtkb3duIGZvcm1hdClcclxuY29uc3QgaGVhZGVycyA9IHtcclxuICB0aXRsZTogXCJQYXJrIFZpZXcgTWFuc2lvbnMgaW4gc2Vjb25kIGVuYmxvYyBhdHRlbXB0IHRoaXMgeWVhclwiLFxyXG4gIGRldGFpbDoge1xyXG4gICAgYXV0aG9yOiBcIkF1dGhvciBuYW1lXCIsXHJcbiAgICBjb21wYW55OiBcIkVkZ2VQcm9wIFNpbmdhcG9yZVwiLFxyXG4gICAgZGF0ZXRpbWU6IG1vbWVudCgpLmZvcm1hdChgTU1NTSBERCwgWVlZWSBISDptbSBhYClcclxuICB9LFxyXG4gIHRhZzogW1xyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJwcm9wZXJ0eSBicmllZnNcIixcclxuICAgICAgdXJsOiBcImdvb2dsZS5jb21cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiUGFyayBWaWV3IE1hbnNpb25zXCIsXHJcbiAgICAgIHVybDogXCJnb29nbGUuY29tXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIkp1cm9uZyBMYWtlIEdhcmRlblwiLFxyXG4gICAgICB1cmw6IFwiZ29vZ2xlLmNvbVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJIdXR0b25zIEFzaWFcIixcclxuICAgICAgdXJsOiBcImdvb2dsZS5jb21cIlxyXG4gICAgfVxyXG4gIF1cclxufTtcclxuY29uc3QgY29udGVudCA9IGBcclxuPHA+VGhlIG93bmVycyBvZiBQYXJrIFZpZXcgTWFuc2lvbnMgYXJlIGF0dGVtcHRpbmcgYSBzZWNvbmQgZW4gYmxvYyBiaWQgdGhpcyB5ZWFyLCBhbmQgbW9yZSB0aGFuIDgwJSBvZiB0aGUgMTYwIG93bmVycyBoYXZlIGFncmVlZCB0byBhIGxvd2VyIHJlc2VydmUgcHJpY2UsIHNheXMgbWFya2V0aW5nIGFnZW50IEh1dHRvbnMgQXNpYS4gVGhlIGRldmVsb3BtZW50IGhhcyBiZWVuIGxhdW5jaGVkIGZvciBzYWxlIGZvciAkMjUwIG1pbGxpb24sIG9yICQ5NjkgcHNmIHBwciBhZnRlciBmYWN0b3JpbmcgYW4gZXN0aW1hdGVkIGRpZmZlcmVudGlhbCBwcmVtaXVtIGFuZCBsZWFzZSB1cGdyYWRpbmcgcHJlbWl1bSBvZiAkMTQwLjggbWlsbGlvbi48L3A+IFxyXG48cD5UaGlzIGlzIGEgMjIlIHJlZHVjdGlvbiB0byB0aGUgcmVzZXJ2ZSBwcmljZSB3aGVuIHRoZSA5OS15ZWFyIGxlYXNlaG9sZCBkZXZlbG9wbWVudCBmaXJzdCBsYXVuY2hlZCBhIGNvbGxlY3RpdmUgc2FsZSBiaWQgaW4gTWFyY2ggdGhpcyB5ZWFyLCBhdCAkMzIwIG1pbGxpb24gKCQxLDE4MyBwc2YgcGVyIHBsb3QgcmF0aW8pLiBBIG5ldyBkZXZlbG9wbWVudCB3b3VsZCBoYXZlIGEgYnJlYWtldmVuIHByaWNlIG9mIGFib3V0ICQxLDQ1MCBwc2YsIGFuZCBvd25lcnMgYXJlIGV4cGVjdGVkIHRvIHJlY2VpdmUgJDEuNDQgbWlsbGlvbiB0byAkMS42IG1pbGxpb24gZWFjaCBmcm9tIHRoZSBzYWxlLjwvcD4gIFxyXG48aW1nIGFsdD1cIlRydWxsaVwiIHNyYz1cIi9zdGF0aWMvZWRnZXByb3AuanBnXCIgdGl0bGU9XCJIZWxsb1wiLz5cclxuPGZpZ2NhcHRpb24+VmlldyBvZiBKdXJvbmcgTGFrZSBmcm9tIFBhcmsgVmlldyBNYW5zaW9ucyAoQ3JlZGl0OiBIdXR0b25zIEFzaWEpPC9maWdjYXB0aW9uPlxyXG48cD4gUGFyayBWaWV3IE1hbnNpb25zIGlzIG9uIGEgMTkxLDk3NCBzcSBmdCBzaXRlIHRoYXQgaXMgem9uZWQgZm9yIHJlc2lkZW50aWFsIHVzZSB3aXRoIGEgZ3Jvc3MgcGxvdCByYXRpbyBvZiAyLjEsIGFuZCBhIHBvdGVudGlhbCBncm9zcyBmbG9vciBhcmVhIG9mIDQwMywxNDUgc3EgZnQuIFRoZSBuZXcgZGV2ZWxvcG1lbnQgY291bGQgeWllbGQgdXAgdG8gNDQwIHJlc2lkZW50aWFsIHVuaXRzIG9mIGFib3V0IDkxNSBzcSBmdCwgYmFzZWQgb24gVVJB4oCZcyBuZXcgdW5pdCBzaXplIGd1aWRlbGluZXMuIEEgUHJlLUFwcGxpY2F0aW9uIEZlYXNpYmlsaXR5IFN0dWR5IGlzIG5vdCByZXF1aXJlZCwgYnV0IHRoZSBkZXZlbG9wbWVudCBvZiB0aGUgc2l0ZSBpcyBzdGlsbCBzdWJqZWN0IHRvIExUQSBjb25kaXRpb25zLjwvcD5cclxuPHA+VGhlIGFtb3VudCBvZiBob3VzaW5nIHN0b2NrIGluIHRoZSBKdXJvbmcgRWFzdCBhcmVhIGhhcyBub3QgY2hhbmdlZCBzaW5jZSA0UTIwMTYsIHNheXMgQW5nZWxhIExpbSwgZGVwdXR5IGhlYWQgb2YgaW52ZXN0bWVudCBzYWxlcyBhdCBIdXR0b25zIEFzaWEuIFRoZSBsYXN0IHByaXZhdGUgZGV2ZWxvcG1lbnQgd2FzIHRoZSA3MTAtdW5pdCBMYWtlIEdyYW5kZSBieSBNQ0wgTGFuZCB3aGljaCB3YXMgc29sZCBvdXQgaW4gbGVzcyB0aGFuIHRocmVlIHllYXJzLCBzaGUgc2F5cy4g4oCcSGVuY2UgUGFyayBWaWV3IEdhcmRlbnMgaXMgYW4gb3Bwb3J0dW5lIGNob2ljZSBmb3IgZGV2ZWxvcGVycyB0byByZXBsZW5pc2ggdGhlaXIgbGFuZCBiYW5rIHRvIG1hdGNoIHRoZSBncm93aW5nIGFuZCBwZW50IHVwIGRlbWFuZCBpbiB0aGUgSnVyb25nIGFyZWHigJ0uPC9wPlxyXG48cD5UaGUgcHVibGljIHRlbmRlciBjbG9zZXMgb24gSmFudWFyeSAxOCBuZXh0IHllYXIuPC9wPlxyXG5gO1xyXG5jb25zdCBTb3NpYWxNZWRpYVVybHMgPSBbXHJcbiAgeyB0aXRsZTogXCJXaGF0c2FwcFwiLCB1cmw6IFwiaHR0cDovL2FwaS53aGF0c2FwcC5jb20vXCIgfSxcclxuICB7IHRpdGxlOiBcIkxpbmtlZEluXCIsIHVybDogXCJodHRwOi8vbGlua2VkaW4uY29tL2luL2hpbGFsYXJzYS9cIiB9LFxyXG4gIHsgdGl0bGU6IFwiV2VDaGF0XCIsIHVybDogXCJodHRwOi8vd2VjaGF0LmNvbVwiIH0sXHJcbiAgeyB0aXRsZTogXCJGYWNlYm9va1wiLCB1cmw6IFwiaHR0cDovL2ZhY2Vib29rLmNvbS9oaWxhbGFyc2FcIiB9LFxyXG4gIHsgdGl0bGU6IFwiRW1haWxcIiwgdXJsOiBcImh0dHA6Ly9tYWlsdG8uY29tL2hpbGFsYXJzYVwiIH1cclxuXTtcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVhZGVyIHRpdGxlPXtoZWFkZXJzLnRpdGxlfSAvPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8QnJlYWRjcnVtYiAvPlxyXG4gICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICA8c3R5bGUgZ2xvYmFsPlxyXG4gICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhye1xyXG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjojRUVFRUVFO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I0VFRUVFRTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmlnY2FwdGlvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6c21hbGw7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTppdGFsaWM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuZmxleC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnBvc3Qge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS43O1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zb2NpYWxtZWRpYSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAgICAgICAgICAgLmFkcy1yaWdodCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJhZHMtbGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxBZHMgLz5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbG1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICA8QXJ0aWNsZUhlYWRlclxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT17aGVhZGVycy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgZGV0YWlsPXtoZWFkZXJzLmRldGFpbH1cclxuICAgICAgICAgICAgICAgICAgdGFnPXtoZWFkZXJzLnRhZ31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPFNvY2lhbE1lZGlhIHNvY2lhbG1lZGlhPXtTb3NpYWxNZWRpYVVybHN9IC8+XHJcbiAgICAgICAgICAgICAgPFBvc3QgY29udGVudD17Y29udGVudH0gLz5cclxuICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICA8U29jaWFsTWVkaWEgc29jaWFsbWVkaWE9e1Nvc2lhbE1lZGlhVXJsc30gLz5cclxuICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRzLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgPEFkcyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\JavascriptRules\\nextjs\\pages\\index.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3622207182" + " " + "flex-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3622207182" + " " + "post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3622207182" + " " + "socialmedia",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_ArticleHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: headers.title,
        detail: headers.detail,
        tag: headers.tag,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_SocialMedia__WEBPACK_IMPORTED_MODULE_9__["default"], {
        socialmedia: SosialMediaUrls,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Post__WEBPACK_IMPORTED_MODULE_8__["default"], {
        content: content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", {
        className: "jsx-3622207182",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_SocialMedia__WEBPACK_IMPORTED_MODULE_9__["default"], {
        socialmedia: SosialMediaUrls,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", {
        className: "jsx-3622207182",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3622207182" + " " + "ads-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Ads__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
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