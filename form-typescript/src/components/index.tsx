import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import OrderList from "./OrderList";
import AddOrder from "./AddOrder";
import SearchBar from "./SearchBar";

const FormApp: React.FC = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route element={<SearchBar />} path="/" />
          <Route element={<OrderList />} path="/" />
          <Route element={<AddOrder />} path="/add-order" />
        </Routes>
      </div>
    </div>
  );
};

export default FormApp;
