import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button size={"large"} color={"red"}>
        Click Me
      </Button>
    </div>
  );
}

export default App;
