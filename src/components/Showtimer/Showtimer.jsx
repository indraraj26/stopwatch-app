import classes from "./Showtimer.module.css";

function Showtimer({ timer }) {
  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>
        <span> {("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:</span>
        <span> {("0" + Math.floor((timer / 1000) % 60)).slice(-2)}.</span>
        <span> {("0" + ((timer / 10) % 100)).slice(-2)}</span>
      </h1>
    </div>
  );
}
export default Showtimer;
