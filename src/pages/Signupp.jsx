import React, { useState } from "react";
import bgImage from "../assets/Images/onebg.webp";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signupp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
        name,
        email,
        password,
      });

      // ✅ TOKEN SAVE (MOST IMPORTANT)
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      setMessage("Signup successful 🎉");
      setIsError(false);

      // ✅ DIRECT PROFILE PAGE
      navigate("/profile");

    } catch (err) {
      setMessage(err.response?.data?.message || "Signup failed");
      setIsError(true);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white/90 p-8 rounded-xl max-w-md w-[40rem] border border-yellow-400 shadow-lg shadow-yellow-200/50">
        <h2 className="text-2xl font-bold text-center mb-4 text-yellow-600">
          Jewellery 💎
        </h2>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
            autoComplete="name"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
            autoComplete="email"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
            autoComplete="new-password"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition mb-3"
          >
            Signup
          </button>
        </form>

        {message && (
          <p
            className={`text-center mb-2 ${
              isError ? "text-red-600" : "text-green-600"
            }`}
          >
            {message}
          </p>
        )}

        <p className="text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-yellow-600 font-semibold hover:underline ml-1"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signupp;
