import { useEffect, useState } from "react";
import axios from "axios";
import HomeNavbar from "../Components/HomeNavbar";
import { useNavigate } from "react-router-dom";
import Chekout from "./Chekout.jsx";

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:2000/api/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCart(res.data);
    };

    fetchCart();
  }, []);

  // ✅ TOTAL CALCULATION
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ minHeight: "100vh", background: "#1F2937", color: "white" }}>
      <HomeNavbar />
      <h1 style={{ textAlign: "center", marginTop: "5.5rem" }}>My Cart 🛒</h1>

      {cart.length === 0 && (
        <p style={{ textAlign: "center" }}>Cart empty hai</p>
      )}

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            gap: "20px",
            padding: "15px",
            margin: "10px auto",
            width: "40%",
            border: "1px solid #555",
          }}
        >
          <img src={item.image} width="80" />
          <div>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <p>Qty: {item.quantity}</p>
            <p>Subtotal: ₹{item.price * item.quantity}</p>
          </div>
        </div>
      ))}

      {/* ✅ BUTTON ADD KIYA YAHA */}
      {cart.length > 0 && (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <h2>Total Amount: ₹{totalAmount}</h2>

          <button
            onClick={() => navigate("/Chekout")}
            style={{
              padding: "12px 30px",
              backgroundColor: "gold",
              color: "black",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
