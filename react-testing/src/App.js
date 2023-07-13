// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  // const sayHello = () => {
  //   console.log("Hello");
  // };

  return (
    <div className="App">
      <h1 data-testid="counter">Counter:{count}</h1>
      <Button size={"large"} color={"red"} func={handleCount}>
        Click Me
      </Button>
    </div>
  );
}

export default App;
