import Stopwatch from "./components/Stopwatch/Stopwatch";
import Header from "./components/Header/Header";

import classes from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <Stopwatch />
      </div>
    </>
  );
}

export default App;
