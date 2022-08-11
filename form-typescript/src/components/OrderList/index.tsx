import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Order } from "../../model/order";
import SearchBar from "../SearchBar/index";
import SingleOrder from "../SingleOrder";

const useStyles = makeStyles({
  table: {
    margin: "24px",
    padding: "24px",
  },
  column: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    color: "#BDA55D",
    fontWeight: "bold",
    paddingBottom: "20px",
    borderBottom: "1px solid #C9BB8E",
  },
  order: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "black",
    paddingTop: "10px",
    paddingBottom: "5px",
  },
});

interface OrderListProps {
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
}

const OrderList = ({ orders, setOrders }: OrderListProps) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <SearchBar />
      <div className={classes.table}>
        <div className={classes.column}>
          <div>Done</div>
          <div>Food Item</div>
          <div>Quantity</div>
          <div>Assigned Chef</div>
          <div>Table No.</div>
          <div>Update</div>
          <div>Delete</div>
        </div>

        <div>
          {orders.map((order) => (
            <div className={classes.order}>
              <SingleOrder
                order={order}
                key={order.id}
                orders={orders}
                setOrders={setOrders}
              />
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
export default OrderList;
