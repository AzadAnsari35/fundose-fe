"use strict";
exports.id = 144;
exports.ids = [144];
exports.modules = {

/***/ 1144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ NotFound)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/styles"
var styles_ = __webpack_require__(9484);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: ./public/images/404.svg
/* harmony default export */ const _404 = ({"src":"/_next/static/media/404.8c254dd1.svg","height":439,"width":548});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/404.js










function NotFound() {
  const classes = useStyles();
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx((Box_default()), {
    className: classes.root,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Box_default()), {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
        src: _404,
        alt: "404 image",
        width: 500,
        height: 400
      }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
        variant: "h2",
        align: "center",
        component: "div",
        className: classes.heading,
        children: "OOPS"
      }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
        variant: "h3",
        align: "center",
        component: "div",
        color: "#666666",
        children: "Page Not Found"
      }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
        variant: "contained",
        sx: {
          mt: 3
        },
        className: classes.btn,
        onClick: () => router.push("/"),
        children: "Go to home"
      })]
    })
  });
}
const useStyles = (0,styles_.makeStyles)({
  root: {
    backgroundImage: `url(${"images/404_background.svg"})`
  },
  heading: {
    color: "#666666",
    fontWeight: "800 !important",
    paddingBottom: 12
  },
  btn: {
    width: 300,
    marginTop: 100
  }
});

/***/ })

};
;