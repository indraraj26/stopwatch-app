import ShowTimer from "../Showtimer/Showtimer";
import Button from "../Button/Button";

import classes from "./Stopwatch.module.css";

function Stopwatch() {
  return (
    <div className={classes.container}>
      <ShowTimer />
      <div className={classes.buttonContainer}>
        <div>
          <Button color="green">Start</Button>
        </div>
        <div>
          <Button color="red">Stop</Button>
        </div>
        <div>
          <Button color="grey">Reset</Button>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
