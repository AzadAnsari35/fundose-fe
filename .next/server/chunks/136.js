"use strict";
exports.id = 136;
exports.ids = [136];
exports.modules = {

/***/ 1931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Footer() {
  return /*#__PURE__*/_jsx(Box, {
    component: "footer",
    sx: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#e6e8f0"
    },
    children: /*#__PURE__*/_jsx("p", {
      children: "Copyright \xA9 Fundose 2022"
    })
  });
}

/***/ }),

/***/ 6568:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_icons_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9223);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_common_act__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5840);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _actions_auth_act__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3216);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_auth_act__WEBPACK_IMPORTED_MODULE_8__]);
_actions_auth_act__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];















const defaultTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_10__.createTheme)();
const onMobile = defaultTheme.breakpoints.only("xs");
function Header({
  handleSound
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const classes = useStyles();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  const isLoggedIn = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.auth.isLoggedIn);
  const currentUser = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.auth.currentUser);

  const handleLogout = () => {
    handleSound("text");
    dispatch((0,_actions_auth_act__WEBPACK_IMPORTED_MODULE_8__/* .logout */ .kS)());
    router.push("/");
  };

  const handleLogin = () => {
    handleSound("text");
    dispatch((0,_actions_common_act__WEBPACK_IMPORTED_MODULE_12__/* .showModal */ .K4)("LOGIN_FORM"));
  };

  const handleRegister = () => {
    handleSound("text");
    dispatch((0,_actions_common_act__WEBPACK_IMPORTED_MODULE_12__/* .showModal */ .K4)("SIGNUP_FORM"));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
    component: "header",
    className: classes.header,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
      className: classes.imageContainer,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(next_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
        src: _public_icons_logo_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
        alt: "Picture of the author",
        onClick: () => router.push("/")
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
      display: "flex",
      alignItems: "center",
      className: classes.navlink,
      children: isLoggedIn ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default()), {
          variant: "body1",
          component: "div",
          align: "center",
          color: "primary",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(next_link__WEBPACK_IMPORTED_MODULE_9__["default"], {
            href: "/profile",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("a", {
              children: [currentUser === null || currentUser === void 0 ? void 0 : currentUser.first_name, " ", currentUser === null || currentUser === void 0 ? void 0 : currentUser.last_name]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default()), {
          variant: "body1",
          component: "div",
          align: "center",
          color: "primary",
          onClick: handleLogout,
          children: "Logout"
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default()), {
          variant: "body1",
          component: "div",
          align: "center",
          color: "primary",
          onClick: handleLogin,
          children: "Login"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default()), {
          variant: "body1",
          component: "div",
          align: "center",
          color: "primary",
          onClick: handleRegister,
          children: "Register"
        })]
      })
    })]
  });
}
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_6__.makeStyles)({
  header: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: "12px 40px",
    width: "80%",
    position: "absolute",
    top: 20,
    left: "50%",
    transform: "translate(-50%, 0)",
    borderRadius: 50,
    [onMobile]: {
      width: "100%",
      padding: "12px 25px"
    }
  },
  navlink: {
    "& div": {
      padding: "0px 20px",
      cursor: "pointer",
      [onMobile]: {
        padding: "0px 10px"
      }
    }
  },
  imageContainer: {
    height: "100%",
    [onMobile]: {
      width: "30%",
      height: 28
    }
  }
});
});

/***/ }),

/***/ 6390:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6568);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1931);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9292);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_1__]);
_Header__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






function Layout({
  title,
  keywords,
  description,
  children,
  handleSound
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("title", {
        children: title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("meta", {
        name: "description",
        content: description
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("meta", {
        name: "keywords",
        content: keywords
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Loader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      handleSound: handleSound
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "container",
      children: children
    })]
  });
}
Layout.defaultProps = {
  title: "Fundose | Start the quiz",
  description: "Become master of everything",
  keywords: "fundose, quiz game"
};
});

/***/ }),

/***/ 9292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9048);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function Loader() {
  const isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.common.isLoading);
  const classes = useStyles();
  return isLoading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    className: classes.loader,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_1___default()), {
      classes: {
        root: classes.loaderRoot
      }
    })
  });
}
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)({
  loader: {
    position: "fixed",
    backgroundColor: "rgba(0,0,0,0.3)",
    width: "100%",
    height: "100%",
    zIndex: 1301
  },
  loaderRoot: {
    position: "fixed",
    right: "50%",
    top: "50%"
  }
});

/***/ }),

/***/ 9223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.b5cf26f6.svg","height":44,"width":160});

/***/ }),

/***/ 3396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/point.4c13754b.svg","height":34,"width":34});

/***/ }),

/***/ 8576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/reward.a804c7e6.svg","height":34,"width":30});

/***/ })

};
;