import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signuppp from "./pages/Signupp";
import HomePage from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signuppp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
