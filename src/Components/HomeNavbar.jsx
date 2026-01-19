import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomeNavbar({ productRef }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false); // mobile menu close
  };

  const navButton = {
    color: "white",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "16px",
    padding: "10px",
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 9999,
        background: "rgba(17,24,39,0.95)",
        backdropFilter: "blur(6px)",
      }}
    >
      {/* ===== TOP BAR ===== */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 20px",
        }}
      >
        {/* Logo */}
        <h1
          style={{
            color: "#FACC15",
            fontSize: "22px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Jewellery 💎
        </h1>

        {/* ===== DESKTOP MENU ===== */}
        <div
          className="desktop-menu"
          style={{
            display: "flex",
            gap: "24px",
          }}
        >
          <button style={navButton} onClick={() => handleNavigate("/home")}>Home</button>
          <button style={navButton} onClick={() => handleNavigate("/product")}>Products</button>
          <button style={navButton} onClick={() => handleNavigate("/about")}>About</button>
          <button style={navButton} onClick={() => handleNavigate("/contact")}>Contact</button>
          <button style={navButton} onClick={() => handleNavigate("/profile")}>Profile</button>
          <button style={navButton} onClick={() => handleNavigate("/cart")}>Cart</button>
        </div>

        {/* ===== HAMBURGER (MOBILE) ===== */}
        <div
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            fontSize: "26px",
            color: "white",
            cursor: "pointer",
          }}
        >
          ☰
        </div>
      </div>

      {/* ===== MOBILE DROPDOWN ===== */}
      {menuOpen && (
        <div
          style={{
            background: "#111827",
            display: "flex",
            flexDirection: "column",
            padding: "10px 20px",
          }}
        >
          <button style={navButton} onClick={() => handleNavigate("/home")}>Home</button>
          <button style={navButton} onClick={() => handleNavigate("/product")}>Products</button>
          <button style={navButton} onClick={() => handleNavigate("/about")}>About</button>
          <button style={navButton} onClick={() => handleNavigate("/contact")}>Contact</button>
          <button style={navButton} onClick={() => handleNavigate("/profile")}>Profile</button>
          <button style={navButton} onClick={() => handleNavigate("/cart")}>Cart</button>
        </div>
      )}

      {/* ===== RESPONSIVE CSS ===== */}
      <style>
        {`
          @media (max-width: 768px) {
            .desktop-menu {
              display: none;
            }
            .mobile-menu-btn {
              display: block;
            }
          }
        `}
      </style>
    </nav>
  );
}

export default HomeNavbar;
