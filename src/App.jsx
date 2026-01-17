import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signuppp from "./pages/Signupp";
import HomePage from "./pages/HomePage";
import Contact from './pages/Contact';
import "./index.css";
import About from "./pages/About";
import Profile from "./pages/Profile.jsx";
import Product from "./pages/Product.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signuppp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
