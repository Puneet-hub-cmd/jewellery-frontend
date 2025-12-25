import bgImage from "../assets/images/onebg.webp";
import { useNavigate } from "react-router-dom";

function Signupp() {
  const navigate = useNavigate(); // ✅ return se pehle

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

        <input
          type="text"
          placeholder="Name"
          className="w-full  border rounded  focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition mb-3">
          Signup
        </button>

        <p className="text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")} // ✅ lowercase
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
