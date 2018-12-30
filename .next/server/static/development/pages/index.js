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
    className: "jsx-2201131353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2201131353",
    css: ".tag.jsx-2201131353{font-size:12px;color:grey;}a.jsx-2201131353{margin-right:7px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxKYXZhc2NyaXB0UnVsZXNcXG5leHRqc1xcY29tcG9uZW50c1xcQXJ0aWNsZUhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFZ0IsQUFHd0IsQUFJRSxlQUhOLEVBSWIsU0FIQSIsImZpbGUiOiJEOlxcSmF2YXNjcmlwdFJ1bGVzXFxuZXh0anNcXGNvbXBvbmVudHNcXEFydGljbGVIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBcnRpY2xlSGVhZGVyID0gcHJvcHMgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC50YWcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgfVxyXG4gICAgICBhIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgPGgyPntwcm9wcy50aXRsZX08L2gyPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdcIj5cclxuICAgICAgQnk6IHtwcm9wcy5kZXRhaWwuYXV0aG9yfSAvIHtwcm9wcy5kZXRhaWwuY29tcGFueX0gfHtcIiBcIn1cclxuICAgICAge3Byb3BzLmRldGFpbC5kYXRldGltZX1cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICBUYWdzOntcIiBcIn1cclxuICAgICAgICB7cHJvcHMudGFnLm1hcCgoaXRlbSwga2V5KSA9PiAoXHJcbiAgICAgICAgICA8YSBocmVmPXtpdGVtLnVybH0+e2l0ZW0ubGFiZWx9PC9hPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlSGVhZGVyO1xyXG4iXX0= */\n/*@ sourceURL=D:\\JavascriptRules\\nextjs\\components\\ArticleHeader.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-2201131353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2201131353" + " " + "tag",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "By: ", props.detail.author, " / ", props.detail.company, " |", " ", props.detail.datetime), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2201131353" + " " + "tag",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2201131353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Tags:", " ", props.tag.map(function (item, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: item.url,
      className: "jsx-2201131353",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\JavascriptRules\\nextjs\\components\\Breadcrumb.js";


var linkStyle = {};

var Breadcrumb = function Breadcrumb(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: props.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Home")), "> ", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Property News")), ">", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
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



var Header = function Header() {
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
  }, "Article title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
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
    className: "jsx-2558275121",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2558275121",
    css: "p.jsx-2558275121{background-color:pink;text-align:justify;font-family:\"Open Sans\",sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxKYXZhc2NyaXB0UnVsZXNcXG5leHRqc1xcY29tcG9uZW50c1xcUG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLTyxBQUdpQyxzQkFDSCxtQkFDaUIsbUNBQ3RDIiwiZmlsZSI6IkQ6XFxKYXZhc2NyaXB0UnVsZXNcXG5leHRqc1xcY29tcG9uZW50c1xcUG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XHJcbmNvbnN0IFBvc3QgPSBwcm9wcyA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgIHtgXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgICB7cHJvcHMuY29udGVudCA9PSB1bmRlZmluZWQgPyAoXHJcbiAgICAgIDxwPlRleHQgZmFpbGVkIHRvIGxvYWQsIHBsZWFzZSByZWZyZXNoPC9wPlxyXG4gICAgKSA6IChcclxuICAgICAgPD5cclxuICAgICAgICB7Y29uc29sZS5sb2coXHJcbiAgICAgICAgICA8UmVhY3RNYXJrZG93biBzb3VyY2U9e3Byb3BzLmNvbnRlbnR9IGVzY2FwZUh0bWw9e2ZhbHNlfSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXtwcm9wcy5jb250ZW50fSBlc2NhcGVIdG1sPXtmYWxzZX0gLz5cclxuICAgICAgPC8+XHJcbiAgICApfVxyXG4gIDwvZGl2PlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG4iXX0= */\n/*@ sourceURL=D:\\JavascriptRules\\nextjs\\components\\Post.js */",
    __self: this
  }), props.content == undefined ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2558275121",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Text failed to load, please refresh") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, console.log(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    source: props.content,
    escapeHtml: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    source: props.content,
    escapeHtml: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
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

var SocialMedia = function SocialMedia(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2397383426",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2397383426",
    css: ".icon.jsx-2397383426{margin:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxKYXZhc2NyaXB0UnVsZXNcXG5leHRqc1xcY29tcG9uZW50c1xcU29jaWFsTWVkaWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWdCLEFBR29CLFdBQ2IiLCJmaWxlIjoiRDpcXEphdmFzY3JpcHRSdWxlc1xcbmV4dGpzXFxjb21wb25lbnRzXFxTb2NpYWxNZWRpYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgU29jaWFsSWNvbiB9IGZyb20gXCJyZWFjdC1zb2NpYWwtaWNvbnNcIjtcclxuXHJcbmNvbnN0IFNvc2lhbE1lZGlhVXJscyA9IFtcclxuICB7IHRpdGxlOiBcIldoYXRzYXBwXCIsIHVybDogXCJodHRwOi8vYXBpLndoYXRzYXBwLmNvbS9cIiB9LFxyXG4gIHsgdGl0bGU6IFwiTGlua2VkSW5cIiwgdXJsOiBcImh0dHA6Ly9saW5rZWRpbi5jb20vaW4vaGlsYWxhcnNhL1wiIH0sXHJcbiAgeyB0aXRsZTogXCJXZUNoYXRcIiwgdXJsOiBcImh0dHA6Ly93ZWNoYXQuY29tXCIgfSxcclxuICB7IHRpdGxlOiBcIkZhY2Vib29rXCIsIHVybDogXCJodHRwOi8vZmFjZWJvb2suY29tL2hpbGFsYXJzYVwiIH0sXHJcbiAgeyB0aXRsZTogXCJFbWFpbFwiLCB1cmw6IFwiaHR0cDovL21haWx0by5jb20vaGlsYWxhcnNhXCIgfVxyXG5dO1xyXG5jb25zdCBTb2NpYWxNZWRpYSA9IHByb3BzID0+IChcclxuICA8ZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuaWNvbiB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIHtTb3NpYWxNZWRpYVVybHMubWFwKChpdGVtLCBrZXkpID0+IChcclxuICAgICAgPFNvY2lhbEljb25cclxuICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICB1cmw9e2l0ZW0udXJsfVxyXG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogMjcsIHdpZHRoOiAyNywgbWFyZ2luOiAyLCB0ZXh0QWxpZ246IFwibGVmdFwiIH19XHJcbiAgICAgIC8+XHJcbiAgICApKX1cclxuICA8L2Rpdj5cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgU29jaWFsTWVkaWE7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\JavascriptRules\\nextjs\\components\\SocialMedia.js */",
    __self: this
  }), SosialMediaUrls.map(function (item, key) {
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
        lineNumber: 19
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









 //icons

var headers = {
  title: "Park View Mansions in second enbloc attempt this year",
  detail: {
    author: "Someone",
    company: "Something",
    datetime: Date()
  },
  tag: [{
    label: "property briefs",
    url: "haha.com"
  }, {
    label: "Park View Mansions",
    url: "haha.com"
  }, {
    label: "Jurong Lake Garden",
    url: "haha.com"
  }, {
    label: "Huttons Asia",
    url: "haha.com"
  }]
};
var content = "\n<p>The owners of Park View Mansions are attempting a second en bloc bid this year, and more than 80% of the 160 owners have agreed to a lower reserve price, says marketing agent Huttons Asia. The development has been launched for sale for $250 million, or $969 psf ppr after factoring an estimated differential premium and lease upgrading premium of $140.8 million.</p> \n<p>This is a 22% reduction to the reserve price when the 99-year leasehold development first launched a collective sale bid in March this year, at $320 million ($1,183 psf per plot ratio). A new development would have a breakeven price of about $1,450 psf, and owners are expected to receive $1.44 million to $1.6 million each from the sale.</p>  \n<img alt=\"Trulli\" src=\"/static/edgeprop.jpg\" title=\"Hello\"/>\n<figcaption>View of Jurong Lake from Park View Mansions (Credit: Huttons Asia)</figcaption>\n<p> Park View Mansions is on a 191,974 sq ft site that is zoned for residential use with a gross plot ratio of 2.1, and a potential gross floor area of 403,145 sq ft. The new development could yield up to 440 residential units of about 915 sq ft, based on URA\u2019s new unit size guidelines. A Pre-Application Feasibility Study is not required, but the development of the site is still subject to LTA conditions.</p>\n<p>The amount of housing stock in the Jurong East area has not changed since 4Q2016, says Angela Lim, deputy head of investment sales at Huttons Asia. The last private development was the 710-unit Lake Grande by MCL Land which was sold out in less than three years, she says. \u201CHence Park View Gardens is an opportune choice for developers to replenish their land bank to match the growing and pent up demand in the Jurong area\u201D.</p>\n<p>The public tender closes on January 18 next year.</p>\n";

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
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3901290424",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "breadcrumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", {
        className: "jsx-3901290424",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("style", {
        global: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "\n            div{\n              font-family: \"Poppins\";\n            }\n            hr{\n              border-color:#EEEEEE;\n              background-color:#EEEEEE;\n            }\n            img{\n            }\n            figcaption{\n              font-size:small;\n              font-style:italic;\n            }\n          "), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3901290424",
        css: ".flex-container.jsx-3901290424{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.breadcrumb.jsx-3901290424{margin-right:10;}.post.jsx-3901290424{margin:0 auto;line-height:1.7;width:66.6%;}.ads-left.jsx-3901290424{width:5%;background-color:pink;}.ads-right.jsx-3901290424{width:33.3%;background-color:pink;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxKYXZhc2NyaXB0UnVsZXNcXG5leHRqc1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFc0IsQUFHNEIsQUFHRyxBQUdGLEFBS0wsQUFJRyxTQUhVLEdBSUEsRUFUTixFQUhsQixjQUljLENBS2QsR0FJQSxRQVJBLGdDQVJBIiwiZmlsZSI6IkQ6XFxKYXZhc2NyaXB0UnVsZXNcXG5leHRqc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFkcyBmcm9tIFwiLi4vY29tcG9uZW50cy9BZHNcIjtcclxuaW1wb3J0IEFydGljbGVIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXJ0aWNsZUhlYWRlclwiO1xyXG5pbXBvcnQgQnJlYWRjcnVtYiBmcm9tIFwiLi4vY29tcG9uZW50cy9CcmVhZGNydW1iXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBQb3N0IGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RcIjtcclxuaW1wb3J0IFNvY2lhbE1lZGlhIGZyb20gXCIuLi9jb21wb25lbnRzL1NvY2lhbE1lZGlhXCI7XHJcbi8vaWNvbnNcclxuY29uc3QgaGVhZGVycyA9IHtcclxuICB0aXRsZTogXCJQYXJrIFZpZXcgTWFuc2lvbnMgaW4gc2Vjb25kIGVuYmxvYyBhdHRlbXB0IHRoaXMgeWVhclwiLFxyXG4gIGRldGFpbDoge1xyXG4gICAgYXV0aG9yOiBcIlNvbWVvbmVcIixcclxuICAgIGNvbXBhbnk6IFwiU29tZXRoaW5nXCIsXHJcbiAgICBkYXRldGltZTogRGF0ZSgpXHJcbiAgfSxcclxuICB0YWc6IFtcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwicHJvcGVydHkgYnJpZWZzXCIsXHJcbiAgICAgIHVybDogXCJoYWhhLmNvbVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJQYXJrIFZpZXcgTWFuc2lvbnNcIixcclxuICAgICAgdXJsOiBcImhhaGEuY29tXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIkp1cm9uZyBMYWtlIEdhcmRlblwiLFxyXG4gICAgICB1cmw6IFwiaGFoYS5jb21cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiSHV0dG9ucyBBc2lhXCIsXHJcbiAgICAgIHVybDogXCJoYWhhLmNvbVwiXHJcbiAgICB9XHJcbiAgXVxyXG59O1xyXG5jb25zdCBjb250ZW50ID0gYFxyXG48cD5UaGUgb3duZXJzIG9mIFBhcmsgVmlldyBNYW5zaW9ucyBhcmUgYXR0ZW1wdGluZyBhIHNlY29uZCBlbiBibG9jIGJpZCB0aGlzIHllYXIsIGFuZCBtb3JlIHRoYW4gODAlIG9mIHRoZSAxNjAgb3duZXJzIGhhdmUgYWdyZWVkIHRvIGEgbG93ZXIgcmVzZXJ2ZSBwcmljZSwgc2F5cyBtYXJrZXRpbmcgYWdlbnQgSHV0dG9ucyBBc2lhLiBUaGUgZGV2ZWxvcG1lbnQgaGFzIGJlZW4gbGF1bmNoZWQgZm9yIHNhbGUgZm9yICQyNTAgbWlsbGlvbiwgb3IgJDk2OSBwc2YgcHByIGFmdGVyIGZhY3RvcmluZyBhbiBlc3RpbWF0ZWQgZGlmZmVyZW50aWFsIHByZW1pdW0gYW5kIGxlYXNlIHVwZ3JhZGluZyBwcmVtaXVtIG9mICQxNDAuOCBtaWxsaW9uLjwvcD4gXHJcbjxwPlRoaXMgaXMgYSAyMiUgcmVkdWN0aW9uIHRvIHRoZSByZXNlcnZlIHByaWNlIHdoZW4gdGhlIDk5LXllYXIgbGVhc2Vob2xkIGRldmVsb3BtZW50IGZpcnN0IGxhdW5jaGVkIGEgY29sbGVjdGl2ZSBzYWxlIGJpZCBpbiBNYXJjaCB0aGlzIHllYXIsIGF0ICQzMjAgbWlsbGlvbiAoJDEsMTgzIHBzZiBwZXIgcGxvdCByYXRpbykuIEEgbmV3IGRldmVsb3BtZW50IHdvdWxkIGhhdmUgYSBicmVha2V2ZW4gcHJpY2Ugb2YgYWJvdXQgJDEsNDUwIHBzZiwgYW5kIG93bmVycyBhcmUgZXhwZWN0ZWQgdG8gcmVjZWl2ZSAkMS40NCBtaWxsaW9uIHRvICQxLjYgbWlsbGlvbiBlYWNoIGZyb20gdGhlIHNhbGUuPC9wPiAgXHJcbjxpbWcgYWx0PVwiVHJ1bGxpXCIgc3JjPVwiL3N0YXRpYy9lZGdlcHJvcC5qcGdcIiB0aXRsZT1cIkhlbGxvXCIvPlxyXG48ZmlnY2FwdGlvbj5WaWV3IG9mIEp1cm9uZyBMYWtlIGZyb20gUGFyayBWaWV3IE1hbnNpb25zIChDcmVkaXQ6IEh1dHRvbnMgQXNpYSk8L2ZpZ2NhcHRpb24+XHJcbjxwPiBQYXJrIFZpZXcgTWFuc2lvbnMgaXMgb24gYSAxOTEsOTc0IHNxIGZ0IHNpdGUgdGhhdCBpcyB6b25lZCBmb3IgcmVzaWRlbnRpYWwgdXNlIHdpdGggYSBncm9zcyBwbG90IHJhdGlvIG9mIDIuMSwgYW5kIGEgcG90ZW50aWFsIGdyb3NzIGZsb29yIGFyZWEgb2YgNDAzLDE0NSBzcSBmdC4gVGhlIG5ldyBkZXZlbG9wbWVudCBjb3VsZCB5aWVsZCB1cCB0byA0NDAgcmVzaWRlbnRpYWwgdW5pdHMgb2YgYWJvdXQgOTE1IHNxIGZ0LCBiYXNlZCBvbiBVUkHigJlzIG5ldyB1bml0IHNpemUgZ3VpZGVsaW5lcy4gQSBQcmUtQXBwbGljYXRpb24gRmVhc2liaWxpdHkgU3R1ZHkgaXMgbm90IHJlcXVpcmVkLCBidXQgdGhlIGRldmVsb3BtZW50IG9mIHRoZSBzaXRlIGlzIHN0aWxsIHN1YmplY3QgdG8gTFRBIGNvbmRpdGlvbnMuPC9wPlxyXG48cD5UaGUgYW1vdW50IG9mIGhvdXNpbmcgc3RvY2sgaW4gdGhlIEp1cm9uZyBFYXN0IGFyZWEgaGFzIG5vdCBjaGFuZ2VkIHNpbmNlIDRRMjAxNiwgc2F5cyBBbmdlbGEgTGltLCBkZXB1dHkgaGVhZCBvZiBpbnZlc3RtZW50IHNhbGVzIGF0IEh1dHRvbnMgQXNpYS4gVGhlIGxhc3QgcHJpdmF0ZSBkZXZlbG9wbWVudCB3YXMgdGhlIDcxMC11bml0IExha2UgR3JhbmRlIGJ5IE1DTCBMYW5kIHdoaWNoIHdhcyBzb2xkIG91dCBpbiBsZXNzIHRoYW4gdGhyZWUgeWVhcnMsIHNoZSBzYXlzLiDigJxIZW5jZSBQYXJrIFZpZXcgR2FyZGVucyBpcyBhbiBvcHBvcnR1bmUgY2hvaWNlIGZvciBkZXZlbG9wZXJzIHRvIHJlcGxlbmlzaCB0aGVpciBsYW5kIGJhbmsgdG8gbWF0Y2ggdGhlIGdyb3dpbmcgYW5kIHBlbnQgdXAgZGVtYW5kIGluIHRoZSBKdXJvbmcgYXJlYeKAnS48L3A+XHJcbjxwPlRoZSBwdWJsaWMgdGVuZGVyIGNsb3NlcyBvbiBKYW51YXJ5IDE4IG5leHQgeWVhci48L3A+XHJcbmA7XHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxCcmVhZGNydW1iIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJcIiAvPlxyXG4gICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICA8c3R5bGUgZ2xvYmFsPlxyXG4gICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhye1xyXG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjojRUVFRUVFO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I0VFRUVFRTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmlnY2FwdGlvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6c21hbGw7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTppdGFsaWM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuZmxleC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJyZWFkY3J1bWIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnBvc3Qge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDY2LjYlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hZHMtbGVmdCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUlO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmFkcy1yaWdodCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDMzLjMlO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZHMtbGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxBZHMgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgIDxBcnRpY2xlSGVhZGVyXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17aGVhZGVycy50aXRsZX1cclxuICAgICAgICAgICAgICAgIGRldGFpbD17aGVhZGVycy5kZXRhaWx9XHJcbiAgICAgICAgICAgICAgICB0YWc9e2hlYWRlcnMudGFnfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFNvY2lhbE1lZGlhIC8+XHJcbiAgICAgICAgICAgICAgPFBvc3QgY29udGVudD17Y29udGVudH0gLz5cclxuICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICA8U29jaWFsTWVkaWEgLz5cclxuICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRzLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgPEFkcyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\JavascriptRules\\nextjs\\pages\\index.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3901290424" + " " + "flex-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3901290424" + " " + "ads-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Ads__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3901290424" + " " + "post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_ArticleHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: headers.title,
        detail: headers.detail,
        tag: headers.tag,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_SocialMedia__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Post__WEBPACK_IMPORTED_MODULE_8__["default"], {
        content: content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", {
        className: "jsx-3901290424",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_SocialMedia__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", {
        className: "jsx-3901290424",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3901290424" + " " + "ads-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Ads__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
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