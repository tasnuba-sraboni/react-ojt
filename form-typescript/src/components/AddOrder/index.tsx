import React, { useState } from "react";
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
    width: "50%",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  backButton: {
    width: "10%",
    height: "30px",
    position: "absolute",
    right: "24px",
    backgroundColor: "transparent",
    border: "2px solid #C9BB8E",
    borderRadius: "5px",
    color: "#BDA55D",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#C9BB8E",
      border: "2px solid #BDA55D",
      color: "white",
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

const AddOrder: React.FC = () => {
  const classes = useStyles();
  const [assignedChef, setAssignedChef] = useState<string>("EUR");

  const handleChange = (event: React.FormEvent) => {
    setAssignedChef((event.target as HTMLInputElement).value);
  };
  return (
    <>
      <div className={classes.container}>
        <button className={classes.backButton}>Back</button>
      </div>
      <div className={classes.container}>
        <form className={classes.root}>
          <div>
            <TextField id="food-item" label="Food Item" variant="filled" />
            <TextField
              id="quantity"
              label="Quantity"
              type="number"
              variant="filled"
            />
            <TextField
              id="chef"
              select
              label="Assigned Chef"
              variant="filled"
              value={assignedChef}
              onChange={handleChange}
            >
              {chefs.map((chef) => (
                <MenuItem key={chef.value} value={chef.value}>
                  {chef.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="table"
              label="Table No."
              type="number"
              variant="filled"
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddOrder;
