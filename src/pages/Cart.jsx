function Cart({ cartItems }) {
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} style={{ display: "flex", gap: "10px", border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
            <img src={item.image} alt={item.name} style={{ width: "100px", height: "100px" }} />
            <div>
              <h2>{item.name}</h2>
              <p>Type: {item.type}</p>
              <p>Weight: {item.weight}g</p>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))
      )}
      <h2>Total: ₹{totalAmount}</h2>
    </div>
  );
}

export default Cart;
