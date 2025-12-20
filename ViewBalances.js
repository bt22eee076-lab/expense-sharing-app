import React, { useEffect, useState } from "react";
import API from "../api/api";

export default function ViewBalances() {
  const [data, setData] = useState([]);

  const fetchBalances = async () => {
    const res = await API.get("/balances");
    setData(res.data);
  };

  useEffect(() => {
    fetchBalances();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>All Balances</h2>

      {data.map((item) => (
        <p key={item._id}>
          {item.user1?.name || item.user1} owes {item.user2?.name || item.user2} — ₹{item.amount}
        </p>
      ))}
    </div>
  );
}
