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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-social-icons");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(3);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/Ads.js


var Ads_Ads = function Ads() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
    className: "ads"
  }));
};

/* harmony default export */ var components_Ads = (Ads_Ads);
// CONCATENATED MODULE: ./components/ArticleHeader.js



var ArticleHeader_ArticleHeader = function ArticleHeader(props) {
  return external_react_default.a.createElement("div", {
    className: "jsx-3801141344"
  }, external_react_default.a.createElement(style_default.a, {
    styleId: "3801141344",
    css: [".tag.jsx-3801141344{font-size:12px;color:grey;}", "a.jsx-3801141344{margin-right:7px;-webkit-text-decoration:none;text-decoration:none;}", "h2.jsx-3801141344{font-weight:400;}"]
  }), external_react_default.a.createElement("h2", {
    className: "jsx-3801141344"
  }, props.title), external_react_default.a.createElement("div", {
    className: "jsx-3801141344" + " " + "tag"
  }, "By: ", props.detail.author, " / ", props.detail.company, " |", " ", props.detail.datetime), external_react_default.a.createElement("div", {
    className: "jsx-3801141344" + " " + "tag"
  }, external_react_default.a.createElement("div", {
    className: "jsx-3801141344"
  }, "Tags:", " ", props.tag.map(function (item, key) {
    return external_react_default.a.createElement("a", {
      href: item.url,
      className: "jsx-3801141344"
    }, item.label);
  }))));
};

/* harmony default export */ var components_ArticleHeader = (ArticleHeader_ArticleHeader);
// CONCATENATED MODULE: ./components/Breadcrumb.js



var linkStyle = {};

var Breadcrumb_Breadcrumb = function Breadcrumb(props) {
  return external_react_default.a.createElement("div", {
    className: "jsx-1751867872" + " " + "link"
  }, external_react_default.a.createElement(style_default.a, {
    styleId: "1751867872",
    css: ["a.jsx-1751867872{margin:10px;font-size:12px;-webkit-text-decoration:none;text-decoration:none;}"]
  }), external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", {
    style: linkStyle,
    className: "jsx-1751867872"
  }, "Home")), ">", external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", {
    style: linkStyle,
    className: "jsx-1751867872"
  }, "Property News")), ">", external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", {
    style: linkStyle,
    className: "jsx-1751867872"
  }, "News")));
};

/* harmony default export */ var components_Breadcrumb = (Breadcrumb_Breadcrumb);
// CONCATENATED MODULE: ./components/Header.js



var Header_Header = function Header(props) {
  return external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, props.title), external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    key: "viewport"
  }), external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Poppins",
    rel: "stylesheet"
  }));
};

/* harmony default export */ var components_Header = (Header_Header);
// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__(4);
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_);

// CONCATENATED MODULE: ./components/Post.js





var Post_Post = function Post(props) {
  return external_react_default.a.createElement("div", {
    className: "jsx-990019887"
  }, external_react_default.a.createElement(style_default.a, {
    styleId: "990019887",
    css: ["p.jsx-990019887{text-align:justify;font-family:\"Open Sans\",sans-serif;}"]
  }), props.content == undefined ? external_react_default.a.createElement("p", {
    className: "jsx-990019887"
  }, "Text failed to load, please refresh") : external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_react_markdown_default.a, {
    source: props.content,
    escapeHtml: false
  })));
};

/* harmony default export */ var components_Post = (Post_Post);
// EXTERNAL MODULE: external "react-social-icons"
var external_react_social_icons_ = __webpack_require__(5);

// CONCATENATED MODULE: ./components/SocialMedia.js





var SocialMedia_SocialMedia = function SocialMedia(props) {
  return external_react_default.a.createElement("div", {
    className: "jsx-2397383426"
  }, external_react_default.a.createElement(style_default.a, {
    styleId: "2397383426",
    css: [".icon.jsx-2397383426{margin:5px;}"]
  }), props.socialmedia.map(function (item, key) {
    return external_react_default.a.createElement(external_react_social_icons_["SocialIcon"], {
      title: item.title,
      url: item.url,
      style: {
        height: 27,
        width: 27,
        margin: 2,
        textAlign: "left"
      }
    });
  }));
};

/* harmony default export */ var components_SocialMedia = (SocialMedia_SocialMedia);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(6);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./pages/index.js


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
    datetime: external_moment_default()().format("MMMM DD, YYYY HH:mm a")
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

var pages_App =
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
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(components_Header, {
        title: headers.title
      }), external_react_default.a.createElement("div", {
        className: "jsx-3063686828"
      }, external_react_default.a.createElement("div", {
        className: "jsx-3063686828" + " " + "breadcrumb"
      }, external_react_default.a.createElement(components_Breadcrumb, null)), external_react_default.a.createElement("hr", {
        className: "jsx-3063686828"
      }), external_react_default.a.createElement("style", {
        global: true
      }, "\n            body{\n              margin:0\n            }\n            div{\n              font-family: \"Poppins\";\n            }\n            p{\n              font-family: 'Open Sans', sans-serif;\n            }\n            hr{\n              border-color:#EEEEEE;\n              background-color:#EEEEEE;\n            }\n            img{\n              width: 100%;\n              max-width: 700px;\n              height: auto;\n            }\n            figcaption{\n              font-size:small;\n              font-style:italic;\n            }\n          "), external_react_default.a.createElement(style_default.a, {
        styleId: "3063686828",
        css: [".flex-container.jsx-3063686828{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".breadcrumb.jsx-3063686828{margin:10px;}", ".post.jsx-3063686828{margin:auto;line-height:1.7;max-width:800px;padding:0 15px 15px 15px;}", ".socialmedia.jsx-3063686828{margin-bottom:10px;}", "@media (min-width:1000px){.ads-right.jsx-3063686828{width:33.3%;}}"]
      }), external_react_default.a.createElement("div", {
        className: "jsx-3063686828" + " " + "flex-container"
      }, external_react_default.a.createElement("div", {
        className: "jsx-3063686828" + " " + "post"
      }, external_react_default.a.createElement("div", {
        className: "jsx-3063686828" + " " + "socialmedia"
      }, external_react_default.a.createElement(components_ArticleHeader, {
        title: headers.title,
        detail: headers.detail,
        tag: headers.tag
      })), external_react_default.a.createElement(components_SocialMedia, {
        socialmedia: SosialMediaUrls
      }), external_react_default.a.createElement(components_Post, {
        content: content
      }), external_react_default.a.createElement("hr", {
        className: "jsx-3063686828"
      }), external_react_default.a.createElement(components_SocialMedia, {
        socialmedia: SosialMediaUrls
      }), external_react_default.a.createElement("hr", {
        className: "jsx-3063686828"
      })), external_react_default.a.createElement("div", {
        className: "jsx-3063686828" + " " + "ads-right"
      }, external_react_default.a.createElement(components_Ads, null)))));
    }
  }]);

  return App;
}(external_react_default.a.Component);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_App);

/***/ })
/******/ ]);