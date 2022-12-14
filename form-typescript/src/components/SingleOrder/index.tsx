import React from "react";
import { Order } from "../../model/order";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "black",
    paddingTop: "10px",
    paddingBottom: "5px",
  },
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
});

type SingleOrderProps = {
  order: Order;
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
};

const SingleOrder = ({ order, orders, setOrders }: SingleOrderProps) => {
  const classes = useStyles();
  const [edit, setEdit] = React.useState<boolean>(false);
  const [editFoodItem, setEditFoodItem] = React.useState<string>(
    order.foodItem
  );
  const [editQuantity, setEditQuantity] = React.useState<string>(
    order.quantity
  );
  const [editAssignedChef, setEditAssignedChef] = React.useState<string>(
    order.assignedChef
  );
  const [editTableNo, setEditTableNo] = React.useState<string>(order.tableNo);

  // ============================== Methods =========================

  // toggles the value of isDone variable when checkbox is clicked
  const handleDone = (id: number) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, isDone: !order.isDone } : order
      )
    );
  };

  // updates the edited fields for a certain order entry
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id
          ? {
              ...order,
              foodItem: editFoodItem,
              quantity: editQuantity,
              assignedChef: editAssignedChef,
              tableNo: editTableNo,
            }
          : order
      )
    );
    setEdit(false);
  };

  // deletes a certain order entry
  const handleDelete = (id: number) => {
    setOrders((prev) => prev.filter((order) => order.id !== id));
  };

  // turns the edit mode on
  const editButtonClickHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setEdit(true);
  };

  return (
    <form className={classes.form}>
      <div>
        <input type="checkbox" onClick={() => handleDone(order.id)} />
      </div>
      <div>
        {edit ? (
          <input
            value={editFoodItem}
            onChange={(e) => setEditFoodItem(e.target.value)}
          />
        ) : order.isDone ? (
          <s>{order.foodItem}</s>
        ) : (
          <span>{order.foodItem}</span>
        )}
      </div>

      <div>
        {edit ? (
          <input
            value={editQuantity}
            onChange={(e) => setEditQuantity(e.target.value)}
          />
        ) : order.isDone ? (
          <s>{order.quantity}</s>
        ) : (
          <span>{order.quantity}</span>
        )}
      </div>

      <div>
        {edit ? (
          <input
            value={editAssignedChef}
            onChange={(e) => setEditAssignedChef(e.target.value)}
          />
        ) : order.isDone ? (
          <s>{order.assignedChef}</s>
        ) : (
          <span>{order.assignedChef}</span>
        )}
      </div>

      <div>
        {edit ? (
          <input
            value={editTableNo}
            onChange={(e) => setEditTableNo(e.target.value)}
          />
        ) : order.isDone ? (
          <s>{order.tableNo}</s>
        ) : (
          <span>{order.tableNo}</span>
        )}
      </div>

      <div>
        {!edit ? (
          <button
            className={classes.actionButton}
            onClick={editButtonClickHandler}
          >
            Edit
          </button>
        ) : (
          <button
            className={classes.actionButton}
            onClick={(e) => handleEdit(e, order.id)}
          >
            Update
          </button>
        )}
      </div>
      <div>
        <button
          className={classes.actionButton}
          onClick={() => handleDelete(order.id)}
        >
          Delete
        </button>
      </div>
    </form>
  );
};
export default SingleOrder;
