import classes from "./Button.module.css";

function Button({ children, color, ...rest }) {
  return (
    <button
      className={classes.button}
      style={{ backgroundColor: color }}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
