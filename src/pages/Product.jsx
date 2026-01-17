import { useEffect, useState } from "react";
import axios from "axios";
import JewelleryCard from "../Components/JewelleryCard";
import HomeNavbar from "../Components/HomeNavbar";

function Product() {
  const [jewellery, setJewellery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:2000/api/jewellery")
      .then((res) => {
        setJewellery(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ backgroundColor: "#1F2937", height: "100vh", color: "white" }}>
        <HomeNavbar />
        <h2 style={{ textAlign: "center", marginTop: "100px" }}>
          Jewellery loading...
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
      <section
        style={{
          textAlign: "center",
          padding: "4rem 2rem",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#FACC15",
            marginBottom: "1rem",
          }}
        >
          Jewellery Collection 💍
        </h1>
        <p style={{ color: "#E5E7EB" }}>
          Discover elegance crafted with perfection
        </p>
      </section>

      {/* PRODUCTS GRID */}
      <section
        style={{
          padding: "2rem 3rem 5rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        {jewellery.map((item) => (
          <JewelleryCard
            key={item.id}
            image={item.image}
            name={item.name}
            weight={item.weight}
            price={item.price}
            type={item.type}
          />
        ))}
      </section>
    </div>
  );
}

export default Product;
