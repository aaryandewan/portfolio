import Home from "./components/Home";
import About from "./components/About";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/a" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
