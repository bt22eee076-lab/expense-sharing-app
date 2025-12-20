import React, { useState } from "react";
import API from "../api/api";

export default function AddGroup() {
  const [name, setName] = useState("");
  const [members, setMembers] = useState("");

  const createGroup = async () => {
    try {
      const membersArray = members.split(",").map(id => id.trim()) ;
      await API.post("/groups", {
        name,
        members: membersArray,
      });
      alert("Group created!");
      setName("");
      setMembers("");
    } catch (error) {
      alert("Error creating group");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Add Group</h2>

      <input
        placeholder="Group Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br /><br />

      <input
        placeholder="Member IDs (comma separated)"
        value={members}
        onChange={(e) => setMembers(e.target.value)}
      /><br /><br />

      <button onClick={createGroup}>Create Group</button>
    </div>
  );
}
