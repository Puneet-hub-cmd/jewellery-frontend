import React from "react";
import HomeNavbar from "../Components/HomeNavbar.jsx";

function About() {
  return (
    <div style={{ width: "100%", backgroundColor: "#1F2937", color: "white", fontFamily: "sans-serif" }}>
      <HomeNavbar />

      {/* Hero Section */}
      <section style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem", color: "#FACC15" }}>About Us 💎</h1>
        <p style={{ fontSize: "1.125rem", maxWidth: "600px", color: "#E5E7EB" }}>
          Welcome to our Jewellery store! We provide high-quality, handcrafted pieces 
          that add elegance and sparkle to your life. Our team is dedicated to unique 
          designs with attention to detail and perfection.
        </p>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: "5rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "3rem", backgroundColor: "#374151" }}>
        <div style={{ maxWidth: "400px", textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#FACC15" }}>Our Mission</h2>
          <p style={{ color: "#E5E7EB" }}>
            To craft timeless jewellery that brings joy and sophistication to our customers.
          </p>
        </div>
        <div style={{ maxWidth: "400px", textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#FACC15" }}>Our Vision</h2>
          <p style={{ color: "#E5E7EB" }}>
            To become the most trusted and innovative jewellery brand known for excellence.
          </p>
        </div>
      </section>

      {/* Features / Services */}
      <section style={{ padding: "5rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem", backgroundColor: "#1F2937" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem", textAlign: "center", color: "#FACC15" }}>Why Choose Us?</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem", maxWidth: "1200px", width: "100%" }}>
          <div style={{ backgroundColor: "#374151", padding: "2rem", borderRadius: "1rem", textAlign: "center", transition: "all 0.3s", cursor: "pointer" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>High Quality</h3>
            <p style={{ color: "#E5E7EB" }}>We use the finest materials to ensure long-lasting beauty.</p>
          </div>
          <div style={{ backgroundColor: "#374151", padding: "2rem", borderRadius: "1rem", textAlign: "center", transition: "all 0.3s", cursor: "pointer" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>Unique Designs</h3>
            <p style={{ color: "#E5E7EB" }}>Each piece is handcrafted to make you stand out.</p>
          </div>
          <div style={{ backgroundColor: "#374151", padding: "2rem", borderRadius: "1rem", textAlign: "center", transition: "all 0.3s", cursor: "pointer" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>Customer Support</h3>
            <p style={{ color: "#E5E7EB" }}>We provide 24/7 assistance to help you with your orders.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: "5rem 2rem", backgroundColor: "#374151", display: "flex", flexDirection: "column", alignItems: "center", gap: "3rem" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem", textAlign: "center", color: "#FACC15" }}>Meet Our Team</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem", maxWidth: "1200px", width: "100%" }}>
          <div style={{ backgroundColor: "#4B5563", padding: "1.5rem", borderRadius: "1rem", textAlign: "center" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>Puneet</h3>
            <p>Founder & Designer</p>
          </div>
          <div style={{ backgroundColor: "#4B5563", padding: "1.5rem", borderRadius: "1rem", textAlign: "center" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>Anjali</h3>
            <p>Marketing Head</p>
          </div>
          <div style={{ backgroundColor: "#4B5563", padding: "1.5rem", borderRadius: "1rem", textAlign: "center" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>Rahul</h3>
            <p>Customer Support Lead</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ padding: "5rem 2rem", backgroundColor: "#1F2937", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#FACC15" }}>Join Us Today!</h2>
        <p style={{ marginBottom: "2rem", maxWidth: "600px", color: "#E5E7EB" }}>
          Explore our exclusive collection and bring home jewellery that shines as bright as you.
        </p>
        <button style={{ backgroundColor: "#FACC15", color: "#111827", fontWeight: "bold", padding: "0.75rem 2rem", borderRadius: "1rem", cursor: "pointer", transition: "all 0.3s" }}
          onMouseOver={(e) => { e.target.style.boxShadow = "0 0 20px #FACC15"; e.target.style.transform = "scale(1.05)"; }}
          onMouseOut={(e) => { e.target.style.boxShadow = "none"; e.target.style.transform = "scale(1)"; }}
        >
          Shop Now
        </button>
      </section>

    </div>
  );
}

export default About;
