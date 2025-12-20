import React, { useState } from "react";
import API from "../api/api";

export default function AddExpense() {
  const [groupId, setGroupId] = useState("");
  const [paidBy, setPaidBy] = useState("");
  const [amount, setAmount] = useState("");
  const [participants, setParticipants] = useState("");

  const addExpense = async () => {
    try {
      await API.post("/expenses", {
        groupId,
        paidBy,
        amount,
        splitType: "EQUAL",
        participants: participants.split(",")
      });

      alert("Expense added!");
      setGroupId("");
      setPaidBy("");
      setAmount("");
      setParticipants("");

    } catch (err) {
      alert("Error adding expense");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Add Expense (Equal Split)</h2>

      <input placeholder="Group ID" value={groupId}
        onChange={e => setGroupId(e.target.value)} /><br /><br />

      <input placeholder="Paid By (User ID)" value={paidBy}
        onChange={e => setPaidBy(e.target.value)} /><br /><br />

      <input placeholder="Amount" value={amount}
        onChange={e => setAmount(e.target.value)} /><br /><br />

      <input placeholder="Participants (User IDs comma separated)"
        value={participants}
        onChange={e => setParticipants(e.target.value)} /><br /><br />

      <button onClick={addExpense}>Add Expense</button>
    </div>
  );
}
