function JewelleryCard({ id, image, name, price, type, weight, addToCart }) {
  const handleAddToCart = () => {
    if (!addToCart) {
      console.error("addToCart function not provided!");
      return;
    }
    addToCart(id);
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        width: "220px",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "4px" }}
      />

      <h3 style={{ margin: "10px 0 5px 0", textAlign: "center" }}>{name}</h3>
      <p style={{ margin: "0", fontSize: "0.9rem", color: "#555" }}>{type}</p>
      <p style={{ margin: "5px 0", fontSize: "0.85rem", color: "#555" }}>
        Weight: {weight}g
      </p>
      <h4 style={{ margin: "5px 0", color: "#111" }}>₹{price}</h4>

      {/* 🔥 ADD TO CART BUTTON */}
      <button
        onClick={handleAddToCart}
        style={{
          marginTop: "10px",
          padding: "10px",
          width: "100%",
          cursor: "pointer",
          background: "#FACC15",
          border: "none",
          fontWeight: "bold",
          borderRadius: "4px",
          transition: "0.2s",
        }}
        onMouseEnter={(e) => (e.target.style.background = "#eab308")}
        onMouseLeave={(e) => (e.target.style.background = "#FACC15")}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default JewelleryCard;
