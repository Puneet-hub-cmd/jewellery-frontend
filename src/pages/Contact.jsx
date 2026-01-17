import React, { useRef, useState } from "react";
import HomeNavbar from "../Components/HomeNavbar.jsx";
import axios from "axios";

function Contact() {
  const productRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await axios.post("http://localhost:2000/api/contact", formData);
      setStatus("Message sent successfully ✅");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Something went wrong ❌");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1F2937",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      {/* NAVBAR */}
      <HomeNavbar productRef={productRef} />

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
            marginBottom: "0.5rem",
          }}
        >
          Contact Us 📞
        </h1>
        <p style={{ color: "#E5E7EB" }}>
          We'd love to hear from you
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section
        style={{
          padding: "2rem 3rem 5rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "2.5rem",
          justifyContent: "center",
        }}
      >
        {/* CONTACT FORM */}
        <div
          style={{
            backgroundColor: "#374151",
            borderRadius: "1rem",
            padding: "2.5rem",
            width: "100%",
            maxWidth: "450px",
          }}
        >
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: "bold",
              marginBottom: "1.5rem",
              color: "#FACC15",
            }}
          >
            Get in Touch
          </h2>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                padding: "0.75rem",
                borderRadius: "9999px",
                backgroundColor: loading ? "#9CA3AF" : "#FACC15",
                color: "#111827",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p style={{ marginTop: "0.5rem", fontWeight: "bold" }}>
                {status}
              </p>
            )}
          </form>
        </div>

        {/* CONTACT INFO */}
        <div
          style={{
            backgroundColor: "#374151",
            borderRadius: "1rem",
            padding: "2.5rem",
            width: "100%",
            maxWidth: "350px",
          }}
        >
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "#FACC15",
            }}
          >
            Contact Info
          </h2>

          <p style={{ color: "#E5E7EB" }}>
            <b>📍 Office:</b> Murlidhar Vyas Colony, Bikaner
          </p>
          <p style={{ color: "#E5E7EB" }}>
            <b>📞 Phone:</b> +91 9373752890
          </p>
          <p style={{ color: "#E5E7EB" }}>
            <b>✉ Email:</b> punitsuthar896@gmail.com
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#111827",
          color: "#9CA3AF",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        © 2025 Jewellery Store. All rights reserved.
      </footer>
    </div>
  );
}

const inputStyle = {
  padding: "0.75rem 1rem",
  borderRadius: "0.75rem",
  border: "none",
  outline: "none",
  backgroundColor: "#1F2937",
  color: "white",
};

export default Contact;
