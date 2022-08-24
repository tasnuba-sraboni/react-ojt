import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Size, Theme } from "@material-ui/core";
import { addCustomerType, ErrorType, cutomerDetails } from "..";

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  rows: {
    display: "grid",
    gridTemplateColumns: "repeat(9, 1fr)",
    alignItems: "center",
  },
  input: {
    // width: ({ inputFieldWidth }) => inputFieldWidth,
    // width: "120px",
    border: "1px solid #000",
    borderRadius: "25px",
    height: "19px",
    marginTop: "8px",
    marginBottom: "8px",
    paddingInline: "10px",
    backgroundColor: "white",
    "& .MuiInputBase-input": {
      padding: theme.spacing(0),
    },
    "& .MuiFormHelperText-root": {
      marginTop: "3px",
      lineHeight: "1",
      fontSize: "10px",
    },
  },
  label: {
    gridColumn: "1",
    width: "75px",
    display: "inline-block",
    textAlign: "right",
    paddingRight: "10px",
  },
}));

interface CustomTextFieldProps {
  name: string;
  id: string;
  label: string;
  size: string;
  value: String;
  infoType: string;
  errors: string;
  customer: addCustomerType;
  handelSetCustomer: (cutomerDetails: cutomerDetails) => void;
}
interface StyleProps {
  inputFieldWidth: string;
}

const CustomerTextField = ({
  name,
  id,
  label,
  size,
  value,
  infoType,
  errors,
  customer,
  handelSetCustomer,
}: CustomTextFieldProps) => {
  const styleProps: StyleProps = {
    inputFieldWidth: size,
  };

  const classes = useStyles(styleProps);

  return (
    <>
      <label className={classes.label}>{label} </label>
      <TextField
        name={name}
        id={id}
        value={value}
        onChange={(event) => {
          handelSetCustomer({
            infoType: infoType,
            name: event.target.name,
            value: event.target.value,
          });
        }}
        InputProps={{ disableUnderline: true }}
        className={classes.input}
        helperText={errors}
        error={Boolean(errors)}
        style={{ width: size }}
      />
    </>
  );
};

export default CustomerTextField;
