import React from "react";
import { Route, Routes } from "react-router-dom";
import Activity from "./Component/activity/Activity";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Account from "./Component/Pages/account/Account";
import Products from "./Component/products/Products";
import Users from "./Component/users/Users";
import Reports from "./Component/reports/Reports";
import Settings from "./Component/Pages/settings/Settings";

export default function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Activity" element={<Activity />} />
        <Route path="/Reports" element={<Reports />} />
      </Routes>
    </div>
  );
}
