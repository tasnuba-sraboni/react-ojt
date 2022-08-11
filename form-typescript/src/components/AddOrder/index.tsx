import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { addOrderType } from "../index";
import { ErrorType } from "../index";

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

type AddOrderProps = {
  order: addOrderType;
  setOrder: React.Dispatch<React.SetStateAction<addOrderType>>;
  errors: ErrorType;
  setErrors: React.Dispatch<React.SetStateAction<ErrorType>>;
  addOrderHandler: (e: React.FormEvent) => void;
};

const AddOrder = ({
  order,
  setOrder,
  errors,
  setErrors,
  addOrderHandler,
}: AddOrderProps) => {
  let navigate = useNavigate();
  const classes = useStyles();
  const numericInput = "^[1-9][0-9]*$";
  const numericZero = "^[0][0-9]*$";

  // navigates to homepage
  const backButtonHandler = () => {
    navigate("/", { replace: true });
  };

  // takes inputs from form and merge them with previous order enties
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setOrder((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // validates the input fields of the form
  const isValid = () => {
    let hasError = false;
    const copyErrors: ErrorType = { ...errors };

    const validationFields = [
      "foodItem",
      "quantity",
      "assignedChef",
      "tableNo",
    ];

    for (let key in copyErrors) {
      if (
        validationFields.includes(key) &&
        order[key as keyof typeof order] === ""
      ) {
        copyErrors[key] = "required";
        hasError = true;
      } else {
        copyErrors[key] = ``;
      }
    }
    if (order.foodItem.length <= 3) {
      copyErrors.foodItem = "Must contain at least 4 characters";
      hasError = true;
    } else {
      copyErrors.foodItem = ``;
    }

    if (order.quantity.match(numericInput)) {
      copyErrors.quantity = ``;
    } else if (order.quantity.match(numericZero)) {
      copyErrors.quantity = "Value must not start with zero";
      hasError = true;
    } else {
      copyErrors.quantity = "Numeric values only";
      hasError = true;
    }
    if (order.tableNo.match(numericInput)) {
      copyErrors.tableNo = ``;
    } else if (order.tableNo.match(numericZero)) {
      copyErrors.tableNo = "Value must not start with zero";
      hasError = true;
    } else {
      copyErrors.tableNo = "Numeric values only";
      hasError = true;
    }

    setErrors(copyErrors);

    return hasError;
  };

  return (
    <React.Fragment>
      <div className={classes.container}>
        <form className={classes.root}>
          <button className={classes.backButton} onClick={backButtonHandler}>
            Back
          </button>
          <div className={classes.inputField}>
            <div>
              <TextField
                name="foodItem"
                id="foodItem"
                label="Food Item"
                value={order.foodItem}
                required={true}
                onChange={handleChange}
                helperText={errors.foodItem}
                error={Boolean(errors.foodItem)}
              />
            </div>
            <div>
              <TextField
                name="quantity"
                id="quantity"
                label="Quantity"
                value={order.quantity}
                required={true}
                onChange={handleChange}
                helperText={errors.quantity}
                error={Boolean(errors.quantity)}
              />
            </div>
            <div>
              <TextField
                select
                name="assignedChef"
                id="assignedChef"
                label="Assigned Chef"
                value={order.assignedChef}
                required={true}
                onChange={handleChange}
                helperText={errors.assignedChef}
                error={Boolean(errors.assignedChef)}
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
                name="tableNo"
                id="tableNo"
                label="Table No."
                value={order.tableNo}
                required={true}
                onChange={handleChange}
                helperText={errors.tableNo}
                error={Boolean(errors.tableNo)}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className={classes.submitButton}
              onClick={(e: React.FormEvent) => {
                if (isValid()) {
                  return;
                }
                addOrderHandler(e);
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
export default AddOrder;
