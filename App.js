import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddUser from "./pages/AddUser";
import AddGroup from "./pages/AddGroup";
import AddExpense from "./pages/AddExpense";
import ViewBalances from "./pages/ViewBalances";
import SettleBalance from "./pages/SettleBalance";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<AddUser />} />
        <Route path="/group" element={<AddGroup />} />
        <Route path="/expense" element={<AddExpense />} />
        <Route path="/balances" element={<ViewBalances />} />
        <Route path="/settle" element={<SettleBalance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
