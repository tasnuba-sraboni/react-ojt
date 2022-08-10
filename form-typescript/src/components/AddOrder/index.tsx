import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr",
    padding: "24px",
    margin: "24px",
    alignItems: "center",
    justifyItems: "center",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  inputField: {
    border: "1px solid #C9BB8E",

    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    justifyContent: "space-around",
    padding: "40px",
    boxShadow: "0 0 10px 1200px rgba(0, 0, 0, 0.5)",
  },
  backButton: {
    marginLeft: "86%",
    height: "30px",
    width: "80px",
    backgroundColor: "#C9BB8E",
    border: "2px solid white",
    borderRadius: "3px",
    color: "white",
    fontWeight: "bold",
    marginBottom: "20px",
    "&:hover": {
      backgroundColor: "transparent",
      border: "2px solid #BDA55D",
    },
  },
  submitButton: {
    height: "35px",
    width: "90px",
    backgroundColor: "#C9BB8E",
    border: "2px solid white",
    borderRadius: "3px",
    color: "white",
    fontWeight: "bold",
    marginTop: "20px",
    "&:hover": {
      backgroundColor: "transparent",
      border: "2px solid #BDA55D",
    },
  },
}));

const chefs = [
  {
    value: "Chef 1",
    label: "Chef 1",
  },
  {
    value: "Chef 2",
    label: "Chef 2",
  },
  {
    value: "Chef 3",
    label: "Chef 3",
  },
  {
    value: "Chef 4",
    label: "Chef 4",
  },
  {
    value: "Chef 5",
    label: "Chef 5",
  },
];

interface AddOrderProps {
  foodItem: string;
  setFoodItem: React.Dispatch<React.SetStateAction<string>>;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  assignedChef: string;
  setAssignedChef: React.Dispatch<React.SetStateAction<string>>;
  tableNo: number;
  setTableNo: React.Dispatch<React.SetStateAction<number>>;
  addOrderHandler: (e: React.FormEvent) => void;
}

const AddOrder = ({
  foodItem,
  setFoodItem,
  quantity,
  setQuantity,
  assignedChef,
  setAssignedChef,
  tableNo,
  setTableNo,
  addOrderHandler,
}: AddOrderProps) => {
  let navigate = useNavigate();
  const classes = useStyles();

  const backButtonHandler = () => {
    navigate("/", { replace: true });
  };

  // const setQuantityHandler = (quantity: string) => {
  //   setQuantity(parseInt(quantity));
  // };

  // const setTableNoHandler = (tableNo: string) => {
  //   setTableNo(parseInt(tableNo));
  // };

  return (
    <>
      <div className={classes.container}>
        <form
          className={classes.root}
          onSubmit={(e) => {
            addOrderHandler(e);
          }}
        >
          <button className={classes.backButton} onClick={backButtonHandler}>
            Back
          </button>
          <div className={classes.inputField}>
            <div>
              <TextField
                id="food-item"
                label="Food Item"
                value={foodItem}
                onChange={(e) => setFoodItem(e.target.value)}
              />
            </div>
            <div>
              <TextField
                id="quantity"
                label="Quantity"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </div>
            <div>
              <TextField
                id="chef"
                select
                label="Assigned Chef"
                value={assignedChef}
                onChange={(e) => setAssignedChef(e.target.value)}
              >
                {chefs.map((chef) => (
                  <MenuItem key={chef.value} value={chef.value}>
                    {chef.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div>
              <TextField
                id="table"
                label="Table No."
                type="number"
                value={tableNo}
                onChange={(e) => setTableNo(Number(e.target.value))}
              />
            </div>
          </div>
          <div>
            <button type="submit" className={classes.submitButton}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddOrder;
