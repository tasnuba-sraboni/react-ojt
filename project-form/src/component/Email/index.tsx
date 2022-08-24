import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { addCustomerType } from "..";
import { cutomerDetails } from "..";
import { ErrorType } from "..";
import CustomerTextField from "../CustomerTextField";

const useStyles = makeStyles((theme) => ({
  emailInfo: {
    backgroundColor: "#D0FFBA",
    fontSize: "10px",
    padding: "10px 0 20px 0",
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
    height: "19px",
    marginBottom: "9px",
    paddingInline: "10px",
    backgroundColor: "white",
    "& .MuiInputBase-input": {
      padding: theme.spacing(0),
    },
    "& .MuiFormHelperText-root": {
      marginTop: "-1px",
      lineHeight: "1",
      fontSize: "10px",
    },
  },
  inputRemarks: {
    gridColumn: "2/9",
    border: "1px solid #000",
    borderRadius: "10px",
    height: "40px",
    marginBottom: "9px",
    paddingInline: "10px",
    backgroundColor: "white",
    "& .MuiInputBase-input": {
      padding: theme.spacing(0),
    },
    "& .MuiFormHelperText-root": {
      marginTop: "22px",
      lineHeight: "1",
      fontSize: "10px",
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
        <CustomerTextField
          name="email1"
          id="email1"
          label="Email 1"
          size="450px"
          value={customer.email.email1}
          infoType="email"
          customer={customer}
          errors={errors.email1}
          handelSetCustomer={handelSetCustomer}
        />
      </div>
      <div className={classes.rows}>
        <CustomerTextField
          name="email2"
          id="email2"
          label="Email 2"
          size="450px"
          value={customer.email.email2}
          infoType="email"
          customer={customer}
          errors={errors.email2}
          handelSetCustomer={handelSetCustomer}
        />
      </div>

      <div className={classes.rows}>
        <CustomerTextField
          name="email3"
          id="email3"
          label="Email 3"
          size="450px"
          value={customer.email.email3}
          infoType="email"
          customer={customer}
          errors={errors.email3}
          handelSetCustomer={handelSetCustomer}
        />
      </div>

      <div className={classes.rows}>
        <CustomerTextField
          name="remarks"
          id="remarks"
          label="remarks"
          size="450px"
          value={customer.email.remarks}
          infoType="email"
          customer={customer}
          errors={errors.remarks}
          handelSetCustomer={handelSetCustomer}
        />
      </div>
    </div>
  );
};
export default Email;
