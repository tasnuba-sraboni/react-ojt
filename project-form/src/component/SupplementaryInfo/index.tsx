import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { addCustomerType } from "..";
import { cutomerDetails } from "..";
import { ErrorType } from "..";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SearchIcon from "@material-ui/icons/Search";

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
    width: "90px",
    display: "inline-block",
    textAlign: "right",
    paddingRight: "10px",
  },
  labelNote: {
    gridColumn: "1",
    width: "90px",
    display: "inline-block",
    textAlign: "right",
    paddingRight: "10px",
  },
  inputMedium: {
    gridColumn: "2/4",
    border: "1px solid #000",
    borderRadius: "25px",
    margin: "2px",
    paddingInline: "10px",
    backgroundColor: "white",
    "& .MuiInputBase-input": {
      padding: theme.spacing(0),
    },
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
  inputLarge: {
    gridColumn: "2/6",
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
    gridColumn: "3",
    height: "25px",
    width: "25px",
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "50%",
    marginLeft: "10px",
    padding: 0,
    paddingTop: "2px",
  },
  searchIcon: {
    height: "20px",
    width: "20px",
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "50%",
    marginLeft: "10px",
    padding: 0,
    paddingTop: "2px",
  },
  checkbox: {
    display: "grid",
    gridTemplateColumns: "1fr 1.6fr",
    fontSize: "10px",
    "& .MuiTypography-body1": {
      fontSize: theme.spacing(1.2),
    },
  },
  radioButton: {
    gridColumn: "2/6",
    fontSize: "10px",
    "& .MuiFormGroup-root": {
      flexWrap: "noWrap",
      flexDirection: "row",
    },
    "& .MuiTypography-body1": {
      fontSize: theme.spacing(1.2),
    },
  },
  registration: {
    gridColumn: "1/6",
    paddingTop: "20px",
  },
}));

type SupplementaryInfoProps = {
  customer: addCustomerType;
  errors: ErrorType;
  handelSetCustomer: (cutomerDetails: cutomerDetails) => void;
};

const SupplementaryInfo = ({
  customer,
  errors,
  handelSetCustomer,
}: SupplementaryInfoProps) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.blackInfo}>
        <b>Customer Supplementary information</b>
        <div className={classes.rows}>
          <label className={classes.label}>region code</label>

          <TextField
            name="regionCode"
            id="regionCode"
            //   value={customer.blackInfo.blackInformation}
            onChange={(event) => {
              handelSetCustomer({
                infoType: "supplementaryInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.inputMedium}
            helperText={errors.regionCode}
            error={Boolean(errors.regionCode)}
          />
        </div>
        <div className={classes.rows}>
          <label className={classes.label}>gender</label>

          <TextField
            name="gender"
            id="gender"
            //   value={customer.blackInfo.blackInformation}
            onChange={(event) => {
              handelSetCustomer({
                infoType: "supplementaryInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.gender}
            error={Boolean(errors.gender)}
          />
        </div>
        <div className={classes.rows}>
          <label className={classes.label}>age</label>

          <TextField
            name="age"
            id="age"
            //   value={customer.blackInfo.blackInformation}
            onChange={(event) => {
              handelSetCustomer({
                infoType: "supplementaryInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.inputLarge}
            helperText={errors.age}
            error={Boolean(errors.age)}
          />
        </div>
        <div className={classes.rows}>
          <label className={classes.label}>Customer factor</label>

          <TextField
            name="customerFactor"
            id="customerFactor"
            //   value={customer.blackInfo.blackInformation}
            onChange={(event) => {
              handelSetCustomer({
                infoType: "supplementaryInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.customerFactor}
            error={Boolean(errors.customerFactor)}
          />
        </div>
        <div className={classes.rows}>
          <label className={classes.labelNote}>Classification code</label>

          <TextField
            name="customerFactor"
            id="customerFactor"
            //   value={customer.blackInfo.blackInformation}
            onChange={(event) => {
              handelSetCustomer({
                infoType: "supplementaryInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.customerFactor}
            error={Boolean(errors.customerFactor)}
          />
        </div>
        <div className={classes.rows}>
          <label className={classes.label}>Order category</label>

          <TextField
            name="customerFactor"
            id="customerFactor"
            //   value={customer.blackInfo.blackInformation}
            onChange={(event) => {
              handelSetCustomer({
                infoType: "supplementaryInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.customerFactor}
            error={Boolean(errors.customerFactor)}
          />
        </div>
        <div className={classes.rows}>
          <label className={classes.labelNote}>Collection method</label>

          <TextField
            name="customerFactor"
            id="customerFactor"
            //   value={customer.blackInfo.blackInformation}
            onChange={(event) => {
              handelSetCustomer({
                infoType: "supplementaryInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.customerFactor}
            error={Boolean(errors.customerFactor)}
          />
        </div>
        <div className={classes.rows}>
          <label className={classes.label}>Last store CD</label>

          <TextField
            name="customerFactor"
            id="customerFactor"
            //   value={customer.blackInfo.blackInformation}
            onChange={(event) => {
              handelSetCustomer({
                infoType: "supplementaryInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.customerFactor}
            error={Boolean(errors.customerFactor)}
          />
        </div>
        <div className={classes.rows}>
          <label className={classes.label}>customer rank</label>

          <TextField
            name="customerFactor"
            id="customerFactor"
            //   value={customer.blackInfo.blackInformation}
            onChange={(event) => {
              handelSetCustomer({
                infoType: "supplementaryInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.customerFactor}
            error={Boolean(errors.customerFactor)}
          />
        </div>
        <div className={classes.rows}>
          <label className={classes.labelNote}>credit registration</label>
          none
          <button className={classes.moreIcon}>
            <MoreHorizIcon fontSize="small" />
          </button>
        </div>
        <b>Rejection management</b>
        <div className={classes.checkbox}>
          <FormControlLabel
            control={<Checkbox size="small" name="checkbox1" color="primary" />}
            label="do not send DM"
          />
          <FormControlLabel
            control={<Checkbox size="small" name="checkbox1" color="primary" />}
            label="do not issue a purchase order"
          />
        </div>
        First store CD Call center
      </div>
      <div className={classes.blackInfo}>
        <div className={classes.rows}>
          <label className={classes.label}>requester</label>

          <TextField
            name="regionCode"
            id="regionCode"
            //   value={customer.blackInfo.blackInformation}
            onChange={(event) => {
              handelSetCustomer({
                infoType: "supplementaryInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.inputMedium}
            helperText={errors.regionCode}
            error={Boolean(errors.regionCode)}
          />
          <button className={classes.searchIcon}>
            <SearchIcon fontSize="inherit" />
          </button>
        </div>
        <div className={classes.rows}>
          <label className={classes.label}>receipt</label>
          <div className={classes.radioButton}>
            <RadioGroup>
              <FormControlLabel
                value="requirement"
                control={<Radio size="small" color="primary" />}
                label="Requirement"
              />
              <FormControlLabel
                value="dontwant"
                control={<Radio size="small" color="primary" />}
                label="don't want"
              />
            </RadioGroup>
          </div>
        </div>
        <div className={classes.rows}>
          <label className={classes.label}>Receipt address</label>

          <TextField
            name="age"
            id="age"
            //   value={customer.blackInfo.blackInformation}
            onChange={(event) => {
              handelSetCustomer({
                infoType: "supplementaryInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.inputMedium}
            helperText={errors.age}
            error={Boolean(errors.age)}
          />
        </div>
        <div className={classes.rows}>
          <label className={classes.label}>discount rate</label>
          <TextField
            name="customerFactor"
            id="customerFactor"
            //   value={customer.blackInfo.blackInformation}
            onChange={(event) => {
              handelSetCustomer({
                infoType: "supplementaryInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.customerFactor}
            error={Boolean(errors.customerFactor)}
          />
          %
        </div>
        <div className={classes.rows}>
          <label className={classes.labelNote}>discount rate memo</label>

          <button className={classes.moreIcon}>
            <MoreHorizIcon fontSize="small" />
          </button>
        </div>
        <div className={classes.rows}>
          <label className={classes.labelNote}>Urge to distinguish</label>

          <TextField
            name="customerFactor"
            id="customerFactor"
            //   value={customer.blackInfo.blackInformation}
            onChange={(event) => {
              handelSetCustomer({
                infoType: "supplementaryInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.customerFactor}
            error={Boolean(errors.customerFactor)}
          />
        </div>
        <div className={classes.rows}>
          <label className={classes.labelNote}>
            Closing date classification
          </label>

          <TextField
            name="customerFactor"
            id="customerFactor"
            //   value={customer.blackInfo.blackInformation}
            onChange={(event) => {
              handelSetCustomer({
                infoType: "supplementaryInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.customerFactor}
            error={Boolean(errors.customerFactor)}
          />
        </div>
        <div className={classes.rows}>
          <label className={classes.labelNote}>Customer generic 1</label>

          <TextField
            name="customerFactor"
            id="customerFactor"
            //   value={customer.blackInfo.blackInformation}
            onChange={(event) => {
              handelSetCustomer({
                infoType: "supplementaryInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.customerFactor}
            error={Boolean(errors.customerFactor)}
          />
        </div>
        <div className={classes.rows}>
          <label className={classes.labelNote}>Customer generic 2</label>

          <TextField
            name="customerFactor"
            id="customerFactor"
            //   value={customer.blackInfo.blackInformation}
            onChange={(event) => {
              handelSetCustomer({
                infoType: "supplementaryInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.customerFactor}
            error={Boolean(errors.customerFactor)}
          />
        </div>
        <div className={classes.rows}>
          <label className={classes.labelNote}>Customer generic 3</label>

          <TextField
            name="customerFactor"
            id="customerFactor"
            //   value={customer.blackInfo.blackInformation}
            onChange={(event) => {
              handelSetCustomer({
                infoType: "supplementaryInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.customerFactor}
            error={Boolean(errors.customerFactor)}
          />
        </div>
        <div className={classes.rows}>
          <label className={classes.labelNote}>Customer generic 4</label>

          <TextField
            name="customerFactor"
            id="customerFactor"
            //   value={customer.blackInfo.blackInformation}
            onChange={(event) => {
              handelSetCustomer({
                infoType: "supplementaryInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.customerFactor}
            error={Boolean(errors.customerFactor)}
          />
        </div>
        <div className={classes.rows}>
          <label className={classes.labelNote}>Customer generic 5</label>
          <TextField
            name="customerFactor"
            id="customerFactor"
            //   value={customer.blackInfo.blackInformation}
            onChange={(event) => {
              handelSetCustomer({
                infoType: "supplementaryInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.customerFactor}
            error={Boolean(errors.customerFactor)}
          />
        </div>
        <div className={classes.registration}>registration date 17-08-22</div>
      </div>
    </>
  );
};
export default SupplementaryInfo;
