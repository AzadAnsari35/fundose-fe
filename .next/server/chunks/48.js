"use strict";
exports.id = 48;
exports.ids = [48];
exports.modules = {

/***/ 4866:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FailureModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_illustration_failure_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1973);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_icons_reward_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8576);
/* harmony import */ var _public_icons_point_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3396);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9272);
/* harmony import */ var _mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _actions_quiz_act__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7470);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_quiz_act__WEBPACK_IMPORTED_MODULE_10__]);
_actions_quiz_act__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];















const defaultTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_12__.createTheme)();
const onMobile = defaultTheme.breakpoints.only("xs");
function FailureModal({
  currentScore,
  handleSound
}) {
  const classes = useStyles();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useDispatch)();

  const handleNextQuestion = () => {
    handleSound("button");
    dispatch((0,_actions_quiz_act__WEBPACK_IMPORTED_MODULE_10__/* .resetGame */ ._X)());
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    className: classes.failureModal,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
      src: _public_illustration_failure_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
      alt: "Picture of the author",
      width: 264,
      height: 160
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
      variant: "overline",
      component: "div",
      color: "#666666",
      children: "Bad luck"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
      variant: "body1",
      component: "div",
      color: "#EC536D",
      sx: {
        pb: 3
      },
      children: "Try Another Chance"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: classes.scores,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: classes.rank,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
          src: _public_icons_reward_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
          alt: "Reward Icon",
          width: 30,
          height: 30
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_7___default()), {
          sx: {
            pl: 1
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
            variant: "body2",
            component: "div",
            children: "5th Rank"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
            variant: "body2",
            component: "div",
            color: "#666666",
            children: "My Ranking"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: classes.points,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
          src: _public_icons_point_svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
          alt: "Reward Icon",
          width: 30,
          height: 30
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_7___default()), {
          sx: {
            pl: 1
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
            variant: "body2",
            component: "div",
            children: [currentScore, " Points"]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
            variant: "body2",
            component: "div",
            color: "#666666",
            children: "Points Earned"
          })]
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      variant: "contained",
      onClick: handleNextQuestion,
      children: "Go to Home"
    })]
  });
}
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_9__.makeStyles)({
  failureModal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 140px 28px",
    [onMobile]: {
      padding: "40px 30px 40px"
    }
  },
  scores: {
    display: "flex",
    paddingBottom: 28
  },
  rank: {
    display: "flex",
    paddingRight: 8,
    borderRight: "1px solid #e4e3e3"
  },
  points: {
    display: "flex",
    paddingLeft: 8
  },
  playAgain: {
    display: "flex",
    alignItems: "center",
    paddingBottom: 12,
    cursor: "pointer",
    "& svg": {
      color: "#666666",
      marginRight: 8,
      fontSize: "1.8rem"
    }
  }
});
});

/***/ }),

/***/ 101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useWarnIfUnsavedChanges */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


const useWarnIfUnsavedChanges = (unsavedChanges, isSuccess) => {
  const message = "Do you want to leave the game?";
  useEffect(() => {
    const routeChangeStart = url => {
      if (Router.asPath !== url && unsavedChanges && !confirm(message)) {
        Router.events.emit("routeChangeError");
        Router.replace(Router, Router.asPath); // onRouteChangePrevented();

        throw "Abort route change. Please ignore this error.";
      }
    };

    const beforeunload = e => {
      if (unsavedChanges) {
        e.preventDefault(); // onRouteChangePrevented();

        e.returnValue = message;
        return message;
      }
    };

    isSuccess && window.addEventListener("beforeunload", beforeunload);
    isSuccess && Router.events.on("routeChangeStart", routeChangeStart);
    return () => {
      window.removeEventListener("beforeunload", beforeunload);
      Router.events.off("routeChangeStart", routeChangeStart);
    };
  }, [unsavedChanges, isSuccess]);
};

/***/ }),

/***/ 4158:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Levels)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SuccessModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4724);
/* harmony import */ var _actions_quiz_act__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7470);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_quiz_act__WEBPACK_IMPORTED_MODULE_5__]);
_actions_quiz_act__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];








const backgroundimg = "/images/Background.png";
const levelArray = [{
  id: 1,
  label: "Trainee Level 1"
}, {
  id: 2,
  label: "Trainee Level 2"
}, {
  id: 3,
  label: "Trainee Level 3"
}, {
  id: 4,
  label: "Associate Level"
}, {
  id: 5,
  label: "Senior Associate Level"
}, {
  id: 6,
  label: "Assistant Manager Level"
}, {
  id: 7,
  label: "Manager Level"
}, {
  id: 8,
  label: "Associate Director Level"
}, {
  id: 9,
  label: "Director Level"
}, {
  id: 10,
  label: "Executive Partner Level"
}, {
  id: 11,
  label: "Partner Level"
}, {
  id: 12,
  label: "Senior Partner Level"
}];
const levelArr = levelArray.reverse();
const defaultTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.createTheme)();
const onMobile = defaultTheme.breakpoints.only("xs");
function Levels() {
  const classes = useStyles();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)(); // const [currentLevel, setCurrentLevel] = useState(1);

  const currentLevel = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.quiz.level);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const timer = setTimeout(() => {
      dispatch((0,_actions_quiz_act__WEBPACK_IMPORTED_MODULE_5__/* .incrementLevel */ .EE)());
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (levelArr.length === currentLevel) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_SuccessModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {});
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
    className: classes.container,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      className: classes.levels,
      children: levelArr.map(({
        id,
        label
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
        variant: "body2",
        component: "div",
        className: `${classes.level} ${currentLevel > id ? classes.visited : currentLevel === id ? classes.current : ""}`,
        children: label
      }, id))
    })
  });
}
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)({
  container: {
    width: "100%",
    minHeight: "100vh",
    margin: "0 auto",
    backgroundImage: `url(${backgroundimg})`,
    [onMobile]: {
      width: "100%",
      paddingTop: 0
    }
  },
  levels: {
    padding: "65px 300px 0px",
    [onMobile]: {
      padding: "35px 30px"
    }
  },
  level: {
    display: "flex",
    justifyContent: "center",
    background: "#FFFFFF",
    borderRadius: 8,
    padding: "12px 0px",
    marginBottom: "16px"
  },
  visited: {
    background: "#BABABA"
  },
  current: {
    background: "#2FBF0B"
  }
});
});

/***/ }),

/***/ 7048:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ QuizSection)
/* harmony export */ });
/* harmony import */ var _components_FailureModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4866);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9151);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5675);
/* harmony import */ var _public_icons_swap_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1198);
/* harmony import */ var _public_icons_fifty_fifty_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9787);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6211);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(3774);
/* harmony import */ var _actions_quiz_act__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7470);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8210);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_Level__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4158);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4529);
/* harmony import */ var react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_LeaveUserConfirmation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(101);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6197);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_FailureModal__WEBPACK_IMPORTED_MODULE_0__, _components_Level__WEBPACK_IMPORTED_MODULE_15__, framer_motion__WEBPACK_IMPORTED_MODULE_19__, _api_index__WEBPACK_IMPORTED_MODULE_12__, _actions_quiz_act__WEBPACK_IMPORTED_MODULE_13__]);
([_components_FailureModal__WEBPACK_IMPORTED_MODULE_0__, _components_Level__WEBPACK_IMPORTED_MODULE_15__, framer_motion__WEBPACK_IMPORTED_MODULE_19__, _api_index__WEBPACK_IMPORTED_MODULE_12__, _actions_quiz_act__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);

























const optionLabel = ["a", "b", "c", "d"];
const defaultTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_11__.createTheme)();
const LEVEL_MODAL_CLOSE_TIME = 2500;
const container = {
  hidden: {
    opacity: 1,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2
    }
  },
  exit: {
    x: "-100vh",
    transition: {
      ease: "easeInOut"
    }
  }
};
const item = {
  hidden: {
    y: 20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  }
};
function QuizSection({
  handleSound
}) {
  const classes = useStyles();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  const timerRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_16__.useRouter)();
  const {
    0: selectedOption,
    1: setSelectedOption
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
  const {
    0: showModal,
    1: setShowModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const {
    0: isSuccess,
    1: setIsSuccess
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const {
    0: currentScore,
    1: setCurrentScore
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0);
  const {
    0: intervalId,
    1: setIntervalId
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
  const {
    0: questionNumber,
    1: setQuestionNumber
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(1);
  const {
    0: countdown,
    1: setCountdown
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(45);
  const {
    0: timerKey,
    1: setTimerKey
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0);
  const questionObj = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.quiz.question);

  const handleSelect = async e => {
    handleSound("click");
    const choiceId = e.target.getAttribute("data-option");

    try {
      dispatch({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_21__/* .START_LOADER */ .ce
      });
      const response = await _api_index__WEBPACK_IMPORTED_MODULE_12__/* ["default"].post */ .Z.post("/quiz/submit-choice/", {
        question_choice_id: choiceId,
        enc_ts: enc_ts
      });
      const correctAnswer = !lodash_has__WEBPACK_IMPORTED_MODULE_14___default()(response, "game_status");
      setShowModal(true);
      setIsSuccess(correctAnswer);
      handleSound(correctAnswer ? "correct" : "wrong");
      setCurrentScore(response.current_game_score);

      if (correctAnswer) {
        dispatch((0,_actions_quiz_act__WEBPACK_IMPORTED_MODULE_13__/* .fetchQuestion */ .Ci)(response));
        setQuestionNumber(questionNumber => questionNumber + 1);
        setTimerKey(key => key + 1); // stopTimer();
        // timerRef.current.resetTimer();
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_21__/* .STOP_LOADER */ .zd
      });
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        handleModalClose();
      }, LEVEL_MODAL_CLOSE_TIME);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, showModal]);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    router.beforePopState(({
      as
    }) => {
      if (as !== router.asPath) {
        console.log("dialog"); // router.push(router.asPath);
        // return false;
        // Will run when leaving the current page; on back/forward actions
        // Add your logic here, like toggling the modal state
      }

      return true;
    });
    return () => {
      router.beforePopState(() => true);
    };
  }, [router]);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    if (countdown === 0) {
      onTimeOver();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [countdown]);

  const onTimeOver = async () => {
    setShowModal(true);
    await _api_index__WEBPACK_IMPORTED_MODULE_12__/* ["default"].post */ .Z.post("/quiz/submit-choice/", {
      question_choice_id: "",
      enc_ts: enc_ts
    });
  };

  const handleModalClose = (event, reason) => {
    if (reason && reason == "backdropClick") return;
    setShowModal(false);
  };

  const handleSwap = () => {
    console.log("Swap Question");
  };

  const handleFifty = () => {
    console.log("Fifty - fifty");
  };

  const stopTimer = () => {
    clearInterval(intervalId);
  };

  const renderTime = ({
    remainingTime
  }) => {
    setCountdown(remainingTime);
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
        variant: "h5",
        component: "div",
        color: "#Ffffff",
        children: [remainingTime, "s"]
      })
    });
  };

  const {
    ques,
    choices,
    enc_ts
  } = questionObj || {};
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
      className: classes.quizSection,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
        className: classes.questionNumber,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_19__.motion.div, {
          initial: {
            y: -250
          },
          animate: {
            y: 0
          },
          transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 120
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
            variant: "body1",
            component: "div",
            color: "common.white",
            children: ["Question ", questionNumber, "/12"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
            variant: "body1",
            component: "div",
            color: "#F0EE51",
            children: ["Score: ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("b", {
              children: currentScore
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
          display: "flex",
          justifyContent: "center",
          component: framer_motion__WEBPACK_IMPORTED_MODULE_19__.motion.div,
          initial: {
            y: -250
          },
          animate: {
            y: 0
          },
          transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 120
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_17__.CountdownCircleTimer, {
            isPlaying: true,
            duration: questionNumber === 1 ? 45 : 47,
            colors: "lavender",
            size: 100,
            strokeWidth: 9,
            trailColor: "#000000",
            children: renderTime
          }, timerKey)
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
        variant: "h5",
        color: "common.white",
        sx: {
          my: 5
        },
        component: framer_motion__WEBPACK_IMPORTED_MODULE_19__.motion.div,
        variants: containerVariants,
        initial: "hidden",
        animate: "visible",
        exit: "exit",
        children: ques === null || ques === void 0 ? void 0 : ques.title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
        container: true,
        spacing: 2,
        component: framer_motion__WEBPACK_IMPORTED_MODULE_19__.motion.div,
        sx: {
          display: "flex",
          justifyContent: "center"
        },
        onClick: handleSelect,
        variants: container,
        initial: "hidden",
        animate: "visible",
        children: choices && choices.map((choice, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
          item: true,
          component: framer_motion__WEBPACK_IMPORTED_MODULE_19__.motion.div,
          md: 6,
          xs: 12,
          variants: item,
          whileTap: {
            scale: 0.9
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
            variant: "body1",
            className: +selectedOption === choice.id ? `${classes.option} ${classes.selected}` : classes.option,
            "data-option": choice.id,
            children: [optionLabel[index], ")", `  `, " ", choice.label]
          })
        }, choice.id))
      })]
    }), isSuccess ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      open: showModal,
      handleClose: handleModalClose,
      fullScreen: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_Level__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      open: showModal,
      handleClose: handleModalClose,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_FailureModal__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
        currentScore: currentScore,
        handleSound: handleSound
      })
    })]
  });
}
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_5__.makeStyles)(() => {
  const onMobile = defaultTheme.breakpoints.only("xs");
  return (0,_mui_styles__WEBPACK_IMPORTED_MODULE_5__.createStyles)({
    quizSection: {
      padding: "140px 200px",
      [onMobile]: {
        padding: 0
      }
    },
    questionNumber: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 32px",
      backgroundColor: " #7386ff",
      boxShadow: "8px 8px 16px rgba(0, 0, 0, 0.1)",
      borderRadius: 8
    },
    level: {
      color: "#a1aeb7",
      textTransform: "uppercase",
      paddingTop: 12
    },
    option: {
      padding: 16,
      color: "#313245",
      borderRadius: 5,
      cursor: "pointer",
      backgroundColor: "#f1f1f1",
      "&:hover": {
        transitionDuration: "0.75s",
        transitionDelay: "0.1s",
        backgroundColor: "#2fbf0b",
        color: "#f1f1f1"
      }
    },
    selected: {
      transitionDuration: "0.75s",
      transitionDelay: "0.1s",
      backgroundColor: "#2fbf0b",
      color: "#f1f1f1"
    }
  });
});
});

/***/ }),

/***/ 4724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SuccessModal)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/styles"
var styles_ = __webpack_require__(9484);
;// CONCATENATED MODULE: ./public/illustration/success.svg
/* harmony default export */ const success = ({"src":"/_next/static/media/success.3e27d081.svg","height":162,"width":264});
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: ./public/icons/reward.svg
var reward = __webpack_require__(8576);
// EXTERNAL MODULE: ./public/icons/point.svg
var point = __webpack_require__(3396);
;// CONCATENATED MODULE: ./public/illustration/confetti.svg
/* harmony default export */ const confetti = ({"src":"/_next/static/media/confetti.4a070db4.svg","height":127,"width":650});
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/SuccessModal.js













function SuccessModal({
  handleClose
}) {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const classes = useStyles();

  const handleNextQuestion = () => {
    handleClose();
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.successModal,
    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
      className: classes.confettiIcon,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
        src: confetti,
        alt: "Confetti Illustration",
        width: 588,
        height: 80
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
      src: success,
      alt: "Success Illustration",
      width: 264,
      height: 160
    }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
      variant: "overline",
      component: "div",
      color: "#666666",
      children: "Congratulations"
    }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
      variant: "body1",
      component: "div",
      color: "#EC536D",
      sx: {
        pb: 3
      },
      children: "You have completed all the levels"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.scores,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.rank,
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
          src: reward/* default */.Z,
          alt: "Reward Icon",
          width: 30,
          height: 30
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Box_default()), {
          sx: {
            pl: 1
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            variant: "body2",
            component: "div",
            children: "5th Rank"
          }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            variant: "body2",
            component: "div",
            color: "#666666",
            children: "My Ranking"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.points,
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
          src: point/* default */.Z,
          alt: "Reward Icon",
          width: 30,
          height: 30
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Box_default()), {
          sx: {
            pl: 1
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            variant: "body2",
            component: "div",
            children: "434 Points"
          }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            variant: "body2",
            component: "div",
            color: "#666666",
            children: "Points Earned"
          })]
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
      variant: "contained",
      onClick: handleNextQuestion,
      children: "Next Question"
    })]
  });
}
const useStyles = (0,styles_.makeStyles)({
  successModal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    boxShadow: 24,
    padding: "60px 140px 28px",
    borderRadius: 16,
    "&:focus-visible ": {
      outline: "none"
    }
  },
  scores: {
    display: "flex",
    paddingBottom: 28
  },
  rank: {
    display: "flex",
    paddingRight: 8,
    borderRight: "1px solid #e4e3e3"
  },
  points: {
    display: "flex",
    paddingLeft: 8
  },
  confettiIcon: {
    position: "absolute",
    top: 0
  }
});

/***/ }),

/***/ 9787:
/***/ (() => {

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/fifty_fifty.cc771d6c.svg","height":77,"width":77});

/***/ }),

/***/ 1198:
/***/ (() => {

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/swap.e66d5473.svg","height":69,"width":69});

/***/ }),

/***/ 1973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/failure.e4d1dc01.svg","height":164,"width":262});

/***/ })

};
;