import React, { useEffect, useState } from "react";
import axios from "axios";
import JewelleryCard from "../Components/JewelleryCard.jsx";
import HomeNavbar from "../Components/HomeNavbar.jsx";

function HomePage() {
  const [jewellery, setJewellery] = useState([]);

  // 🔥 Fetch products from backend
  useEffect(() => {
    axios
      .get("http://localhost:2000/api/jewellery")
      .then((res) => {
        setJewellery(res.data);
      })
      .catch((err) => {
        console.log("Error fetching jewellery:", err);
      });
  }, []);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>
      
      {/* ✅ Navbar */}
      <HomeNavbar />

      {/* ✅ Hero Section */}
      <section
        style={{
          height: "220px",
          background: "linear-gradient(to right, #81a6e7ff, #fca5a5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "28px", fontWeight: "800" }}>
            Premium Gold Jewellery
          </h1>
          <p style={{ marginTop: "8px", color: "#374151" }}>
            Pure • Trusted • Hallmarked
          </p>
        </div>
      </section>

      {/* ✅ Products */}
      <section style={{ padding: "24px" }}>
        <h3
          style={{
            fontSize: "20px",
            fontWeight: "700",
            marginBottom: "16px",
          }}
        >
          Featured Products
        </h3>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {jewellery.slice(0, 4).map((item) => (
            <JewelleryCard
              key={item.id}
              image={item.image}
              name={item.name}
              weight={item.weight}
              price={item.price}
              type={item.type}
            />
          ))}
        </div>
      </section>

      {/* ✅ Footer */}
      <footer
        style={{
          marginTop: "40px",
          padding: "16px",
          backgroundColor: "#111827",
          color: "#ffffff",
          textAlign: "center",
          fontSize: "13px",
        }}
      >
        © 2026 Jewellery Store. All rights reserved.
      </footer>
    </div>
  );
}

export default HomePage;
