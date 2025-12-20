import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{ padding: "15px", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "20px" }}>Add User</Link>
      <Link to="/group" style={{ marginRight: "20px" }}>Add Group</Link>
      <Link to="/expense" style={{ marginRight: "20px" }}>Add Expense</Link>
      <Link to="/balances" style={{ marginRight: "20px" }}>View Balances</Link>
      <Link to="/settle">Settle Balance</Link>
    </nav>
  );
}
