import React from "react";
import { Link, useNavigate } from "react-router-dom";

function HomeNavbar({ productRef }) {
  const navigate = useNavigate();
  

  // Scroll to Products safely
  const handleProductClick = () => {
    productRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const buttonStyle = {
    color: "white",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "16px",
    padding: "6px 12px",
    transition: "all 0.3s ease",
  };

  const buttonHover = {
    color: "#FACC15",
    textShadow: "0 0 8px #FACC15",
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.target.style, buttonHover);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.target.style, {
      color: "white",
      textShadow: "none",
    });
  };

  return (
    <nav
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        background: "transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        {/* Logo */}
        <h1
          style={{
            color: "#FACC15",
            fontSize: "24px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          Jewellery 💎
        </h1>

        {/* Menu */}
        <div style={{ display: "flex", gap: "24px" }}>
          <button
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() =>
              navigate("/home")
            }
          >
            Home
          </button>

          <button
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate("/Product")}
          >
            Products
          </button>

          <button
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={()=> navigate("/About")}
          >
            About
          </button>

          {/* Contact Button */}
          <button
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate("/contact")} // ✅ Correct way
          >
            Contact
          </button>
           <button
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate("/Profile")} // ✅ Correct way
          >
             Profile
          </button>
          <button
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate("/Cart")} // ✅ Correct way
          >
             Cart
          </button>
        </div>
      </div>
    </nav>
  );
}

export default HomeNavbar;
