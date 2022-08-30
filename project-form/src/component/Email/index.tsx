import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { addCustomerType, cutomerDetails, ErrorType } from "..";
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
    width: "450px",
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
  setErrors: React.Dispatch<React.SetStateAction<ErrorType>>;
  handelSetCustomer: (cutomerDetails: cutomerDetails) => void;
};

const Email = ({
  customer,
  errors,
  setErrors,
  handelSetCustomer,
}: EmailProps) => {
  const classes = useStyles();
  // const emailInput = "[a-z0-9]+@[a-z]+.[a-z]{2,3}";
  // const emailInput =
  //   "^(([^<>()[]\\.,;:s@]+(.[^<>()[]\\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$";
  const emailInput =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // console.log(customer.email);

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
      {/* <div className={classes.rows}>
        <label className={classes.label}>Email 1</label>
        <TextField
          name="email1"
          id="email1"
          value={customer.email.email1}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (!event.target.value.match(emailInput)) {
              console.log(event.target.value);

              // setErrors((prev) => ({
              //   ...prev,
              //   email1: "Invalid email",
              // }));
              errors.email1 = "Invalid email";
              handelSetCustomer({
                infoType: "email",
                name: event.target.name,
                value: "",
              });
            } else {
              errors.email1 = "";
              handelSetCustomer({
                infoType: "email",
                name: event.target.name,
                value: event.target.value,
              });
            }
          }}
          InputProps={{ disableUnderline: true }}
          className={classes.input}
          helperText={errors.email1}
          error={Boolean(errors.email1)}
        />
      </div> */}
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
