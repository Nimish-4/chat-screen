import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App2 from "./Profile";
import Home from "./Home";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App2 />} />  
        <Route exact path="/home" element={<Home grad='linear-gradient(150deg, #4da8d5 23.17%, #2cea6e 94.92%)'/>} />
       
      </Routes>
    </BrowserRouter>
  );
}