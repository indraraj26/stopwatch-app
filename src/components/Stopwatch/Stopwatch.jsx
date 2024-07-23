import ShowTimer from "../Showtimer/Showtimer";
import Button from "../Button/Button";

import classes from "./Stopwatch.module.css";
import { useEffect, useState } from "react";

function Stopwatch() {
  const [active, setActive] = useState(false);
  const [timer, setTimer] = useState(0);
  const [reset, setReset] = useState(false);
  const [previousTimer, setPreviousTimer] = useState(0);
  const [showPreviousTimer, setShowPreviousTimer] = useState(false);

  useEffect(() => {
    let intervalId;
    if (active) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 10);
      }, 10);
    }
    if (reset) {
      clearInterval(intervalId);
      setReset(false);
    }
    return () => clearInterval(intervalId);
  }, [active, reset]);

  const startPauseHandler = () => {
    setActive(!active);
  };

  const stopHandler = () => {
    if (active) {
      setPreviousTimer(timer);
      setShowPreviousTimer(true);
      setActive(false);
      setTimer(0);
    }
  };

  const resetHandler = () => {
    setTimer(0);
    setPreviousTimer(0);
    setActive(false);
    setReset(true);
    setShowPreviousTimer(false);
  };

  return (
    <div className={classes.container}>
      <ShowTimer timer={timer} />
      {showPreviousTimer && (
        <div className={classes.previousElapsedTime}>
          <div>Previous Elapsed Time</div>
          <ShowTimer timer={previousTimer} />
        </div>
      )}
      <div className={classes.buttonContainer}>
        <div>
          <Button
            color={active ? "#947505" : "#308952"}
            onClick={startPauseHandler}
          >
            {active ? "Pause" : "Start"}
          </Button>
        </div>
        <div>
          <Button color="#cf4343" onClick={stopHandler}>
            Stop
          </Button>
        </div>
        <div>
          <Button color="grey" onClick={resetHandler}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
