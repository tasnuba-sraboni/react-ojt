import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { addCustomerType } from "..";
import { cutomerDetails } from "..";
import { ErrorType } from "..";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const useStyles = makeStyles((theme) => ({
  blackInfo: {
    fontSize: "10px",
  },
  rows: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    alignItems: "center",
  },

  label: {
    gridColumn: "1",
    display: "inline-block",
    textAlign: "left",
    paddingInline: "10px",
  },
  labelNote: {
    gridColumn: "1/3",
    display: "inline-block",
    textAlign: "left",
    paddingInline: "10px",
  },
  input: {
    gridColumn: "2",
    border: "1px solid #000",
    borderRadius: "25px",
    margin: "2px",
    paddingInline: "10px",
    backgroundColor: "white",
    "& .MuiInputBase-input": {
      padding: theme.spacing(0),
    },
  },
  moreIcon: {
    gridColumn: "4",
    height: "25px",
    width: "25px",
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "50%",
    marginLeft: "10px",
    padding: 0,
    paddingTop: "2px",
  },
}));

type BlackInfoProps = {
  customer: addCustomerType;
  errors: ErrorType;
  handelSetCustomer: (cutomerDetails: cutomerDetails) => void;
};

const BlackInfo = ({ customer, errors, handelSetCustomer }: BlackInfoProps) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.blackInfo}>
        <div className={classes.rows}>
          <label className={classes.label}>black information </label>

          <TextField
            name="blackInformation"
            id="blackInformation"
            //   value={customer.blackInfo.blackInformation}
            onChange={(event) => {
              handelSetCustomer({
                infoType: "blackInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.blackInformation}
            error={Boolean(errors.blackInformation)}
          />
        </div>

        <div className={classes.rows}>
          <label className={classes.labelNote}>black information note </label>

          {/* <TextField
          name="blackInformation"
          id="blackInformation"
          //   value={customer.blackInfo.blackInformation}
          onChange={(event) => {
            handelSetCustomer({
              infoType: "blackInfo",
              name: event.target.name,
              value: event.target.value,
            });
          }}
          InputProps={{ disableUnderline: true }}
          className={classes.input}
          helperText={errors.blackInformation}
          error={Boolean(errors.blackInformation)}
        /> */}
        </div>
      </div>
      <div className={classes.rows}>
        <button className={classes.moreIcon}>
          <MoreHorizIcon fontSize="small" />
        </button>
      </div>
    </>
  );
};
export default BlackInfo;
