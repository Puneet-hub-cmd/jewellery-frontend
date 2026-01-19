import { useEffect, useState } from "react";
import axios from "axios";
import JewelleryCard from "../Components/JewelleryCard";
import HomeNavbar from "../Components/HomeNavbar";

function Product() {
  const [jewellery, setJewellery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ================= ADD TO CART =================
  const addToCart = async (productId) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Login required");
        return;
      }

      const res = await axios.post(
        "http://localhost:2000/api/cart/add",
        { productId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // ✅ Server message alert
      alert(res.data.message);
    } catch (err) {
      console.error("Add to cart error:", err.response ? err.response.data : err.message);
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  // ================= FETCH JEWELLERY =================
  useEffect(() => {
    const fetchJewellery = async () => {
      try {
        const res = await axios.get("http://localhost:2000/api/jewellery");
        setJewellery(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Fetch jewellery error:", err);
        setError("Failed to load jewellery items");
        setLoading(false);
      }
    };

    fetchJewellery();
  }, []);

  if (loading) {
    return (
      <div style={{ backgroundColor: "#1F2937", minHeight: "100vh", color: "white" }}>
        <HomeNavbar />
        <h2 style={{ textAlign: "center", marginTop: "100px" }}>
          Jewellery loading...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ backgroundColor: "#1F2937", minHeight: "100vh", color: "white" }}>
        <HomeNavbar />
        <h2 style={{ textAlign: "center", marginTop: "100px", color: "red" }}>
          {error}
        </h2>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#1F2937",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      {/* NAVBAR */}
      <HomeNavbar />

      {/* HEADER */}
      <section style={{ textAlign: "center", padding: "3rem", marginTop: "2rem" }}>
        <h1 style={{ color: "#FACC15", fontSize: "2.5rem" }}>
          Jewellery Collection 💍
        </h1>
        <p style={{ color: "#E5E7EB", marginTop: "0.5rem" }}>
          Discover elegance crafted with perfection
        </p>
      </section>

      {/* PRODUCTS GRID */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
          paddingBottom: "3rem",
        }}
      >
        {jewellery.map((item) => (
          <JewelleryCard
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            weight={item.weight}
            price={item.price}
            type={item.type}
            addToCart={addToCart} // 🔥 Add to cart function
          />
        ))}
      </section>
    </div>
  );
}

export default Product;
