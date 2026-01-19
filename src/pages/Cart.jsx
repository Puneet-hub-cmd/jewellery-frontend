import { useEffect, useState } from "react";
import axios from "axios";
import HomeNavbar from "../Components/HomeNavbar";

function Cart() {
  const [cart, setCart] = useState([]);

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

  return (
    <div style={{ minHeight: "100vh", background: "#1F2937", color: "white" }}>
      <HomeNavbar />
      <h1 style={{ textAlign: "center", margin: "1rem" }}>My Cart 🛒</h1>

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
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
