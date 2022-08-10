import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import OrderList from "./OrderList";
import AddOrder from "./AddOrder";
import { Order } from "../model/order";

const FormApp: React.FC = () => {
  const [foodItem, setFoodItem] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [assignedChef, setAssignedChef] = useState<string>("");
  const [tableNo, setTableNo] = useState<number>(0);
  const [orders, setOrders] = useState<Order[]>([]);

  const addOrderHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setOrders((prev) => [
      ...prev,
      {
        id: Date.now(),
        foodItem: foodItem,
        quantity: quantity,
        assignedChef: assignedChef,
        tableNo: tableNo,
        isDone: false,
      },
    ]);
    setFoodItem("");
    setQuantity(0);
    setAssignedChef("");
    setTableNo(0);
  };
  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <Routes>
          <Route
            element={<OrderList orders={orders} setOrders={setOrders} />}
            path="/"
          />
          <Route
            element={
              <AddOrder
                foodItem={foodItem}
                setFoodItem={setFoodItem}
                quantity={quantity}
                setQuantity={setQuantity}
                assignedChef={assignedChef}
                setAssignedChef={setAssignedChef}
                tableNo={tableNo}
                setTableNo={setTableNo}
                addOrderHandler={addOrderHandler}
              />
            }
            path="/add-order"
          />
        </Routes>
      </div>
    </div>
  );
};

export default FormApp;
