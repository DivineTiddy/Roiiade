import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Join from "./Pages/Join";
import Future from "./Pages/Future";


function App() {
  return (
    
    <div className="flex flex-col items-center   w-[375px] h-auto ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/join" element={<Join/>}></Route>
          <Route path="/future" element={<Future/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
