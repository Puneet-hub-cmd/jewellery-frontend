import React, { useState, useEffect } from "react";
import axios from "axios";
import HomeNavbar from "../Components/HomeNavbar";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({});
  const [editing, setEditing] = useState(false);

  const token = localStorage.getItem("token");

  // ================= FETCH PROFILE =================
  const fetchProfile = async () => {
    try {
      const res = await axios.get("http://localhost:2000/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(res.data);
      setFormData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (token) fetchProfile();
  }, [token]);

  // ================= HANDLE INPUT =================
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ================= SAVE PROFILE =================
  const handleSave = async () => {
    try {
      const res = await axios.put(
        "http://localhost:2000/api/profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(res.data);
      setEditing(false);
      alert("Profile updated successfully");
    } catch (err) {
      alert("Update failed");
    }
  };

  if (!user) {
    return (
      <p style={{ color: "white", textAlign: "center", paddingTop: "100px" }}>
        Loading...
      </p>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#1F2937",
        color: "white",
      }}
    >
      {/* ✅ FIXED NAVBAR */}
      <HomeNavbar />

      {/* ✅ SPACE FOR FIXED NAVBAR */}
      <div style={{ paddingTop: "90px" }}>
        <div
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            padding: "20px",
            background: "#374151",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "#FACC15",
            }}
          >
            My Profile
          </h2>

          <label>
            Name
            <input
              type="text"
              name="name"
              value={editing ? formData.name : user.name}
              onChange={handleChange}
              disabled={!editing}
              style={inputStyle}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              value={user.email}
              disabled
              style={inputStyle}
            />
          </label>

          <label>
            Phone
            <input
              type="text"
              name="phone"
              value={editing ? formData.phone || "" : user.phone || ""}
              onChange={handleChange}
              disabled={!editing}
              style={inputStyle}
            />
          </label>

          <label>
            Address
            <input
              type="text"
              name="address"
              value={editing ? formData.address || "" : user.address || ""}
              onChange={handleChange}
              disabled={!editing}
              style={inputStyle}
            />
          </label>

          {editing ? (
            <button onClick={handleSave} style={saveBtn}>
              Save
            </button>
          ) : (
            <button onClick={() => setEditing(true)} style={editBtn}>
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// ================= STYLES =================
const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "8px 0 15px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  background: "#1F2937",
  color: "white",
};

const editBtn = {
  width: "100%",
  padding: "10px",
  background: "#FACC15",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const saveBtn = {
  width: "100%",
  padding: "10px",
  background: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Profile;
