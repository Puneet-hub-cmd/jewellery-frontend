import { useEffect, useState } from "react";
import axios from "axios";
import HomeNavbar from "../Components/HomeNavbar";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  // 🔹 SAME API CALL AS CART PAGE
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

  // 🔹 SAME CALCULATION
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const delivery = 0;
  const total = subtotal + delivery;

  // 🔹 ORDER PLACE FUNCTION
  const placeOrder = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:2000/api/order",
        {
          address,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Order placed successfully 💍");
      navigate("/home");
    } catch (err) {
      alert("Order failed ❌");
      console.log(err);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#111827", color: "white" }}>
      <HomeNavbar />

      <div
        style={{
          maxWidth: "900px",
          margin: "6rem auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            background: "#1F2937",
            padding: "25px",
            borderRadius: "10px",
          }}
        >
          <h2 style={{ color: "gold" }}>Delivery Address</h2>

          <textarea
            placeholder="House No, Street, City, State, Pincode"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{
              width: "100%",
              height: "120px",
              marginTop: "10px",
              padding: "12px",
              borderRadius: "6px",
            }}
          />
        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            background: "#1F2937",
            padding: "25px",
            borderRadius: "10px",
          }}
        >
          <h2 style={{ color: "gold" }}>Order Summary</h2>

          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
                fontSize: "14px",
              }}
            >
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}

          <hr style={{ margin: "15px 0", borderColor: "#444" }} />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Delivery</span>
            <span>FREE</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "18px",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            onClick={placeOrder}
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "14px",
              background: "gold",
              color: "black",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Place Order 💎
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;