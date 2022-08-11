import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import OrderList from "./OrderList";
import AddOrder from "./AddOrder";
import { Order } from "../model/order";

export type addOrderType = {
  id?: number;
  foodItem: string;
  quantity: string;
  assignedChef: string;
  tableNo: string;
  isDone?: boolean;
};
const addOrder: addOrderType = {
  foodItem: "",
  quantity: "",
  assignedChef: "",
  tableNo: "",
};
export type ErrorType = {
  [key: string]: string;
};
const initialError: ErrorType = {
  foodItem: "",
  quantity: "",
  assignedChef: "",
  tableNo: "",
};

const FormApp: React.FC = () => {
  const [order, setOrder] = React.useState<addOrderType>(addOrder);
  const [errors, setErrors] = React.useState(initialError);
  const [orders, setOrders] = React.useState<Order[]>([]);

  // takes input from form and creates new order and then sets the initial values to empty string
  const addOrderHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setOrders((prev) => [
      ...prev,
      {
        id: Date.now(),
        foodItem: order.foodItem,
        quantity: order.quantity,
        assignedChef: order.assignedChef,
        tableNo: order.tableNo,
        isDone: false,
      },
    ]);
    setOrder({
      foodItem: "",
      quantity: "",
      assignedChef: "",
      tableNo: "",
    });
  };
  return (
    <React.Fragment>
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
                order={order}
                setOrder={setOrder}
                errors={errors}
                setErrors={setErrors}
                addOrderHandler={addOrderHandler}
              />
            }
            path="/add-order"
          />
        </Routes>
      </div>
    </React.Fragment>
  );
};
export default FormApp;
