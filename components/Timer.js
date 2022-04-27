import { useState, useEffect, forwardRef, useImperativeHandle } from "react";

const CountdownTimer = (
  {
    seconds,
    size,
    strokeBgColor,
    strokeWidth,
    strokeColor,
    showFailureModal,
    intervalId,
    setIntervalId,
  },
  ref
) => {
  const radius = size / 2;
  const circumference = size * Math.PI;
  const milliseconds = seconds * 1000;

  const [state, setState] = useState({
    countdown: milliseconds,
    isPlaying: false,
  });

  useEffect(() => {
    startTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (state.countdown === 0) {
      clearInterval(intervalId);
      setState({
        countdown: 0,
        isPlaying: false,
      });
      showFailureModal(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.countdown]);

  const strokeDashoffset = () =>
    circumference - (state.countdown / milliseconds) * circumference;

  const startTimer = () => {
    setState((state) => ({ ...state, isPlaying: true }));
    const interval = setInterval(() => {
      setState((state) => ({ ...state, countdown: state.countdown - 10 }));
      setIntervalId(interval);
      if (state.countdown === 0) {
        clearInterval(interval);
        setState({
          countdown: milliseconds,
          isPlaying: false,
        });
      }
    }, 10);
  };

  const countdownSizeStyles = {
    height: size,
    width: size,
  };

  const textStyles = {
    color: strokeColor,
    fontSize: size * 0.3,
  };

  useImperativeHandle(ref, () => ({
    resetTimer() {
      setState({
        countdown: milliseconds + 2500,
        isPlaying: false,
      });
      startTimer();
    },
  }));

  const sec = (state.countdown / 1000).toFixed();

  return (
    <div>
      <div
        style={{
          pointerEvents: state.isPlaying ? "none" : "all",
          opacity: state.isPlaying ? 0.4 : 1,
        }}
      ></div>
      <div
        style={Object.assign(
          {},
          styles.countdownContainer,
          countdownSizeStyles
        )}
      >
        <p style={textStyles}>{sec}s</p>
        <svg style={styles.svg}>
          <circle
            cx={radius}
            cy={radius}
            r={radius}
            fill="none"
            stroke={strokeBgColor}
            strokeWidth={strokeWidth}
          ></circle>
        </svg>
        <svg style={styles.svg}>
          <circle
            strokeDasharray={circumference}
            strokeDashoffset={state.isPlaying ? strokeDashoffset() : 0}
            r={radius}
            cx={radius}
            cy={radius}
            fill="none"
            strokeLinecap="round"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          ></circle>
        </svg>
      </div>
    </div>
  );
};

export const CircularTimer = forwardRef(CountdownTimer);

const styles = {
  countdownContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    margin: "auto",
  },
  svg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transform: "rotateY(-180deg) rotateZ(-90deg)",
    overflow: "visible",
  },
  button: {
    fontSize: 16,
    padding: "15px 40px",
    margin: "10px auto 30px",
    display: "block",
    backgroundColor: "#4d4d4d",
    color: "lightgray",
    border: "none",
    cursor: "pointer",
    outline: 0,
  },
};
