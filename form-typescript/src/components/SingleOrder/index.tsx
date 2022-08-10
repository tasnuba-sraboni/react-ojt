import React, { useState } from "react";
import { Order } from "../../model/order";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  actionButton: {
    height: "30px",
    width: "80px",
    backgroundColor: "#C9BB8E",
    border: "2px solid white",
    borderRadius: "3px",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "transparent",
      border: "2px solid #BDA55D",
      color: "#C9BB8E",
    },
  },
}));

type SingleOrderProps = {
  order: Order;
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
};
const SingleOrder = ({ order, orders, setOrders }: SingleOrderProps) => {
  const classes = useStyles();

  const handleDone = (id: number) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, isDone: !order.isDone } : order
      )
    );
  };

  const handleDelete = (id: number) => {
    setOrders((prev) => prev.filter((order) => order.id !== id));
  };
  return (
    <>
      <div>
        <input type="checkbox" onClick={() => handleDone(order.id)} />
      </div>
      <div>{order.foodItem}</div>
      <div>{order.quantity}</div>
      <div>{order.assignedChef}</div>
      <div>{order.tableNo}</div>
      <div>
        <button className={classes.actionButton}>Update</button>
      </div>
      <div>
        <button
          className={classes.actionButton}
          onClick={() => handleDelete(order.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default SingleOrder;
