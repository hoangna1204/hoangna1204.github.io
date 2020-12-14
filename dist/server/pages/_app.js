module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "0Sn8":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main": "Layout_main__2MAxM"
};


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ MyApp; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./styles/variables.scss
var variables = __webpack_require__("Dail");

// EXTERNAL MODULE: ./styles/global.scss
var global = __webpack_require__("6Fm8");

// EXTERNAL MODULE: ./components/layout/Header.module.scss
var Header_module = __webpack_require__("Enau");
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/icons/GitHub"
var GitHub_ = __webpack_require__("Px2O");
var GitHub_default = /*#__PURE__*/__webpack_require__.n(GitHub_);

// EXTERNAL MODULE: external "@material-ui/icons/LinkedIn"
var LinkedIn_ = __webpack_require__("V0nV");
var LinkedIn_default = /*#__PURE__*/__webpack_require__.n(LinkedIn_);

// EXTERNAL MODULE: external "@material-ui/icons/Message"
var Message_ = __webpack_require__("rgSn");
var Message_default = /*#__PURE__*/__webpack_require__.n(Message_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./components/layout/header.js








function Header() {
  const preventDefault = event => event.preventDefault();

  const prevScrollY = Object(external_react_["useRef"])(0);
  const {
    0: scrollUp,
    1: setScrollUp
  } = Object(external_react_["useState"])(false);
  const {
    0: headerBgEnabled,
    1: setHeaderBg
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (prevScrollY.current < currentScrollY && scrollUp) {
        setScrollUp(false);
      }

      if (prevScrollY.current > currentScrollY && !scrollUp) {
        setScrollUp(true);
      }

      prevScrollY.current = currentScrollY;

      if (currentScrollY > 1000) {
        setHeaderBg(true);
      } else {
        setHeaderBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollUp]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
    className: `${headerBgEnabled ? Header_module_default.a.headerWithBackground : Header_module_default.a.headerWithoutBackground}`,
    id: "header",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Link"], {
      href: "#",
      onClick: preventDefault,
      color: "inherit",
      style: {
        textDecoration: "none",
        fontWeight: "lighter"
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: Header_module_default.a.logo,
        children: "Hoang Nguyen"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Header_module_default.a.navigation,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Tooltip"], {
        title: "My github",
        "aria-label": "myGithub",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Link"], {
          href: "https://github.com/hoangna1204",
          target: "_blank",
          color: "inherit",
          style: {
            textDecoration: "none",
            fontWeight: "lighter"
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(GitHub_default.a, {})
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Tooltip"], {
        title: "My linkedin",
        "aria-label": "myLinkedin",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Link"], {
          href: "https://www.linkedin.com/in/hoang-nguyen-anh/",
          target: "_blank",
          color: "inherit",
          style: {
            textDecoration: "none",
            fontWeight: "lighter"
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LinkedIn_default.a, {})
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Tooltip"], {
        title: "Send me message",
        "aria-label": "myEmail",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Link"], {
          href: "mailto:hoangna1204@gmail.com",
          color: "inherit",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Message_default.a, {})
        })
      })]
    })]
  });
}
// CONCATENATED MODULE: ./components/layout/footer.js


function Footer() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("footer", {
    style: {
      backgroundColor: "#484848",
      minHeight: "30%",
      color: "white",
      display: "flex",
      alignItems: "flex-end",
      flexDirection: "row-reverse"
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: {
        textAlign: "right",
        padding: "0.5rem"
      },
      children: ["Background image is provided by: \xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        style: {
          color: "#ccc",
          textDecoration: "none"
        },
        href: "https://www.vecteezy.com/free-vector/mesh",
        children: "Mesh Vectors by Vecteezy"
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/layout/Banner.module.scss
var Banner_module = __webpack_require__("FDul");
var Banner_module_default = /*#__PURE__*/__webpack_require__.n(Banner_module);

// EXTERNAL MODULE: ./components/typingEffect/TypingEffect.module.css
var TypingEffect_module = __webpack_require__("Y4Vs");
var TypingEffect_module_default = /*#__PURE__*/__webpack_require__.n(TypingEffect_module);

// CONCATENATED MODULE: ./components/typingEffect/typingEffect.js



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class typingEffect_TypingEffect extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      runningText: "",
      index: 0
    });

    _defineProperty(this, "generateText", () => {
      //Clear existing time if running
      clearTimeout(this.timer);
      const {
        runningText,
        index
      } = this.state;
      const {
        text,
        wordsPerSecond
      } = this.props; //Speed of generting text

      const speed = 1000 / wordsPerSecond;

      if (index < text.length) {
        this.timer = setTimeout(() => {
          this.setState({
            runningText: runningText + text[index],
            index: index + 1
          });
        }, speed);
      } else {
        //Clear timer if generated completely
        clearTimeout(this.timer);
      }
    });
  }

  componentDidMount() {
    this.generateText();
  }

  componentDidUpdate() {
    this.generateText();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const {
      runningText
    } = this.state;
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [runningText, /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: TypingEffect_module_default.a.blinkingCursor
      })]
    });
  }

}

_defineProperty(typingEffect_TypingEffect, "defaultProps", {
  text: "Dummy text",
  wordsPerSecond: 20
});

/* harmony default export */ var typingEffect = (typingEffect_TypingEffect);
// CONCATENATED MODULE: ./components/layout/banner.js



function Banner() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: Banner_module_default.a.banner,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(typingEffect, {
      text: "Hi! My name is Hoang Nguyen. Welcome to my profile!!!",
      wordsPerSecond: 12
    })
  });
}
// EXTERNAL MODULE: ./components/layout/Layout.module.scss
var Layout_module = __webpack_require__("0Sn8");
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);

// EXTERNAL MODULE: ./components/navigator/Navigator.module.css
var Navigator_module = __webpack_require__("TIlG");
var Navigator_module_default = /*#__PURE__*/__webpack_require__.n(Navigator_module);

// EXTERNAL MODULE: external "@material-ui/icons/CardTravel"
var CardTravel_ = __webpack_require__("ROZi");
var CardTravel_default = /*#__PURE__*/__webpack_require__.n(CardTravel_);

// EXTERNAL MODULE: external "@material-ui/icons/SchoolOutlined"
var SchoolOutlined_ = __webpack_require__("y564");
var SchoolOutlined_default = /*#__PURE__*/__webpack_require__.n(SchoolOutlined_);

// EXTERNAL MODULE: external "@material-ui/icons/BuildOutlined"
var BuildOutlined_ = __webpack_require__("WZmX");
var BuildOutlined_default = /*#__PURE__*/__webpack_require__.n(BuildOutlined_);

// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__("I/1N");

// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__("2kat");

// CONCATENATED MODULE: ./components/navigator/navigator.js









function Navigator() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: Navigator_module_default.a.navigator,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["MenuList"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_scroll_["Link"], {
        to: "about",
        smooth: true,
        spy: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["MenuItem"], {
          style: {
            margin: "7px 0"
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Tooltip"], {
            title: "About me",
            "aria-label": "aboutMe",
            placement: "left",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["FaceOutlined"], {
              color: "primary",
              fontSize: "small"
            })
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Divider"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_scroll_["Link"], {
        to: "skills",
        smooth: true,
        spy: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["MenuItem"], {
          style: {
            margin: "7px 0"
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Tooltip"], {
            title: "My skills",
            "aria-label": "mySkills",
            placement: "left",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(BuildOutlined_default.a, {
              fontSize: "small",
              color: "primary"
            })
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Divider"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_scroll_["Link"], {
        to: "workHistory",
        smooth: true,
        spy: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["MenuItem"], {
          style: {
            margin: "7px 0"
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Tooltip"], {
            title: "My work history",
            "aria-label": "myWorkHistory",
            placement: "left",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CardTravel_default.a, {
              fontSize: "small",
              color: "primary"
            })
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Divider"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_scroll_["Link"], {
        to: "education",
        smooth: true,
        spy: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["MenuItem"], {
          style: {
            margin: "7px 0"
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Tooltip"], {
            title: "My education",
            "aria-label": "myEducation",
            placement: "left",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SchoolOutlined_default.a, {
              fontSize: "small",
              color: "primary"
            })
          })
        })
      })]
    })
  });
}
// CONCATENATED MODULE: ./components/layout/layout.js







function Layout({
  children
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: {
      height: "100%",
      width: "100%"
    },
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Header, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Banner, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Navigator, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("main", {
      className: Layout_module_default.a.main,
      id: "main",
      children: children
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer, {})]
  });
}
// CONCATENATED MODULE: ./pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Layout, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))
  });
}

/***/ }),

/***/ "2kat":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "6Fm8":
/***/ (function(module, exports) {



/***/ }),

/***/ "Dail":
/***/ (function(module, exports) {



/***/ }),

/***/ "Enau":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"headerWithoutBackground": "Header_headerWithoutBackground__MpLMD",
	"fadeOut": "Header_fadeOut__3W60q",
	"headerWithBackground": "Header_headerWithBackground__1I3El",
	"fadeIn": "Header_fadeIn__27IOn",
	"logo": "Header_logo__r9u9v",
	"navigation": "Header_navigation__13vhr"
};


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FDul":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"banner": "Banner_banner__1P_UI"
};


/***/ }),

/***/ "I/1N":
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "Px2O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/GitHub");

/***/ }),

/***/ "ROZi":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CardTravel");

/***/ }),

/***/ "TIlG":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"navigator": "Navigator_navigator__1XDRD",
	"active": "Navigator_active__2iaX5"
};


/***/ }),

/***/ "V0nV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LinkedIn");

/***/ }),

/***/ "WZmX":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/BuildOutlined");

/***/ }),

/***/ "Y4Vs":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"blinkingCursor": "TypingEffect_blinkingCursor__3P3TD",
	"blink": "TypingEffect_blink__3Zj66"
};


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "rgSn":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Message");

/***/ }),

/***/ "y564":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SchoolOutlined");

/***/ })

/******/ });