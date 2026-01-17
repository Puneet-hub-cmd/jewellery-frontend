import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:2000/login", {
        email,
        password,
      });

      setMessage(res.data.message);

      // Token localStorage me save
      localStorage.setItem("token", res.data.token);

      // Login success → redirect to dashboard or home
      if (res.status === 200) {
        setTimeout(() => {
          navigate("/Home"); // ya apna route
        }, 1000);
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div
      className="min-h-screen bg-fixed bg-cover flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://thumbs.dreamstime.com/b/sparkling-diamonds-background-luxury-diamond-jewelry-illustration-shimmering-gems-reflecting-light-precious-stones-glitter-384870969.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Login Box */}
      <div
        className="
          relative
          w-full
          max-w-[25rem]
          bg-white/90
          backdrop-blur-lg
          rounded-2xl
          shadow-2xl
          border-2
          border-white/40
          p-8
          sm:p-10
        "
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Welcome Back 👋
        </h2>
        <p className="text-gray-800 text-center mb-4">Login to continue</p>

        {message && (
          <p className="text-center text-red-600 mb-4">{message}</p>
        )}

        <form className="space-y-6" onSubmit={handleLogin}>
          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-600">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 rounded"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#" className="text-red-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 active:scale-95 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
