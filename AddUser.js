import React, { useState } from "react";
import API from "../api/api";

export default function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const createUser = async () => {
    try {
      await API.post("/users", { name, email });
      alert("User created successfully!");
      setName("");
      setEmail("");
    } catch (error) {
      alert("Error creating user");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Add User</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br /><br />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br /><br />

      <button onClick={createUser}>Create User</button>
    </div>
  );
}
