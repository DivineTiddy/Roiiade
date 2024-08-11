import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Join from "./Pages/Join";


function App() {
  return (
    
    <div className="flex flex-col items-center   w-[375px] h-auto border-solid border-2 border-sky-800">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/join" element={<Join/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
