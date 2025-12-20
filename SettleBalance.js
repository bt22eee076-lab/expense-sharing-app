import React, { useState } from "react";
import API from "../api/api";

export default function SettleBalance() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  const settle = async () => {
    try {
      await API.post("/balances/settle", {
        from,
        to,
        amount,
      });

      alert("Balance settled!");
      setFrom("");
      setTo("");
      setAmount("");
    } catch (error) {
      alert("Error settling balance");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Settle Balance</h2>

      <input placeholder="From (User ID)"
        value={from} onChange={e => setFrom(e.target.value)} /><br /><br />

      <input placeholder="To (User ID)"
        value={to} onChange={e => setTo(e.target.value)} /><br /><br />

      <input placeholder="Amount"
        value={amount} onChange={e => setAmount(e.target.value)} /><br /><br />

      <button onClick={settle}>Settle</button>
    </div>
  );
}
