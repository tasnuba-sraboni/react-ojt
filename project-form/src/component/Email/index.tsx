import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { addCustomerType } from "..";
import { cutomerDetails } from "..";
import { ErrorType } from "..";

const useStyles = makeStyles((theme) => ({
  emailInfo: {
    backgroundColor: "#98FB98",
    fontSize: "10px",
    paddingTop: "10px",
  },
  rows: {
    display: "grid",
    gridTemplateColumns: "repeat(9, 1fr)",
    alignItems: "center",
  },

  label: {
    gridColumn: "1",
    width: "75px",
    display: "inline-block",
    textAlign: "right",
    paddingRight: "10px",
  },
  input: {
    gridColumn: "2/9",
    border: "1px solid #000",
    borderRadius: "25px",
    margin: "2px",
    paddingInline: "10px",
    backgroundColor: "white",
    "& .MuiInputBase-input": {
      padding: theme.spacing(0),
    },
  },
  inputRemarks: {
    gridColumn: "2/9",
    border: "1px solid #000",
    borderRadius: "10px",
    margin: "2px",
    height: "40px",
    paddingInline: "10px",
    backgroundColor: "white",
    "& .MuiInputBase-input": {
      padding: theme.spacing(0),
    },
  },
}));

type EmailProps = {
  customer: addCustomerType;
  errors: ErrorType;
  handelSetCustomer: (cutomerDetails: cutomerDetails) => void;
};

const Email = ({ customer, errors, handelSetCustomer }: EmailProps) => {
  const classes = useStyles();
  return (
    <div className={classes.emailInfo}>
      <div className={classes.rows}>
        <label className={classes.label}>Email 1 </label>

        <TextField
          name="email1"
          id="email1"
          value={customer.email.email1}
          onChange={(event) => {
            handelSetCustomer({
              infoType: "email",
              name: event.target.name,
              value: event.target.value,
            });
          }}
          InputProps={{ disableUnderline: true }}
          className={classes.input}
          helperText={errors.email1}
          error={Boolean(errors.email1)}
        />
      </div>

      <div className={classes.rows}>
        <label className={classes.label}>Email 2 </label>

        <TextField
          name="email2"
          id="email2"
          value={customer.email.email2}
          onChange={(event) => {
            handelSetCustomer({
              infoType: "email",
              name: event.target.name,
              value: event.target.value,
            });
          }}
          InputProps={{ disableUnderline: true }}
          className={classes.input}
          helperText={errors.email2}
          error={Boolean(errors.email2)}
        />
      </div>

      <div className={classes.rows}>
        <label className={classes.label}>Email 3 </label>

        <TextField
          name="email3"
          id="email3"
          value={customer.email.email3}
          onChange={(event) => {
            handelSetCustomer({
              infoType: "email",
              name: event.target.name,
              value: event.target.value,
            });
          }}
          InputProps={{ disableUnderline: true }}
          className={classes.input}
          helperText={errors.email3}
          error={Boolean(errors.email3)}
        />
      </div>

      <div className={classes.rows}>
        <label className={classes.label}>remarks </label>

        <TextField
          name="remarks"
          id="remarks"
          value={customer.email.remarks}
          onChange={(event) => {
            handelSetCustomer({
              infoType: "email",
              name: event.target.name,
              value: event.target.value,
            });
          }}
          InputProps={{ disableUnderline: true }}
          className={classes.inputRemarks}
          helperText={errors.remarks}
          error={Boolean(errors.remarks)}
        />
      </div>
    </div>
  );
};
export default Email;
