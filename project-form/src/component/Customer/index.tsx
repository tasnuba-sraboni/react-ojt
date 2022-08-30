import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { addCustomerType, cutomerDetails, ErrorType } from "..";
import TextField from "@material-ui/core/TextField";
import CustomerTextField from "../CustomerTextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles((theme) => ({
  customer: {
    fontSize: "10px",
    padding: "10px 0",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  column: {
    display: "flex",
    alignItems: "center",
  },
  label: {
    width: "100px",
    display: "inline-block",
    textAlign: "right",
    paddingRight: "10px",
  },
  input: {
    border: "0",
    width: "60px",
  },
  radioButton: {
    gridColumn: "2/6",
    fontSize: "12px",
    "& .MuiFormGroup-root": {
      flexWrap: "noWrap",
      flexDirection: "row",
    },
    "& .MuiTypography-body1": {
      fontSize: theme.spacing(1.4),
    },
  },
}));
type CustomerProps = {
  customer: addCustomerType;
  errors: ErrorType;
  handelSetCustomer: (cutomerDetails: cutomerDetails) => void;
};

const Customer = ({ customer, errors, handelSetCustomer }: CustomerProps) => {
  const classes = useStyles();

  return (
    <div className={classes.customer}>
      <div className={classes.column}>
        <label className={classes.label}>Customer code:</label>
        <TextField
          name="customerCode"
          id="customerCode"
          value={customer.customer.customerCode}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handelSetCustomer({
              infoType: "customer",
              name: event.target.name,
              value: event.target.value,
            });
          }}
          InputProps={{ disableUnderline: true }}
          className={classes.input}
        />
      </div>
      <div className={classes.column}>
        <label className={classes.label}>Online Customer ID:</label>
        <TextField
          name="customerId"
          id="customerId"
          value={customer.customer.customerId}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handelSetCustomer({
              infoType: "customer",
              name: event.target.name,
              value: event.target.value,
            });
          }}
          InputProps={{ disableUnderline: true }}
          className={classes.input}
        />
      </div>

      <div>
        <div className={classes.radioButton}>
          <RadioGroup>
            <FormControlLabel
              name="customerType"
              value="Personal"
              control={
                <Radio
                  size="small"
                  color="primary"
                  onChange={(event) => {
                    handelSetCustomer({
                      infoType: "customer",
                      name: event.target.name,
                      value: event.target.value,
                    });
                  }}
                />
              }
              label="Personal"
            />

            <FormControlLabel
              name="customerType"
              value="Corporation"
              control={
                <Radio
                  size="small"
                  color="primary"
                  onChange={(event) => {
                    handelSetCustomer({
                      infoType: "customer",
                      name: event.target.name,
                      value: event.target.value,
                    });
                  }}
                />
              }
              label="Corporation"
            />
          </RadioGroup>
        </div>
      </div>

      {/* <input type="radio" name="category" />
        <label>Personal</label> <br />
        <input type="radio" name="category" />
        <label>Corporation</label> */}
    </div>
  );
};
export default Customer;
