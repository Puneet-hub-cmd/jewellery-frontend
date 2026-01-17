

function JewelleryCard({ image, name, price, type, weight }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "15px",
      width: "220px"
    }}>
      <img
        src={image}
        alt={name}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <h3>{name}</h3>
      <p>{type}</p>
      <p>Weight: {weight}g</p>
      <h4>₹{price}</h4>
      <button>Add to Cart</button>
    </div>
  );
}

export default JewelleryCard;