import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import { addCustomerType } from "..";
import { cutomerDetails } from "..";
import { ErrorType } from "..";

const useStyles = makeStyles((theme) => ({
  customer: {
    fontSize: "10px",
    padding: "10px 0",
  },
  rows: {
    display: "grid",
    gridTemplateColumns: "repeat(9, 1fr)",
    alignItems: "center",
  },
  gridLabel: {
    gridColumn: "1",
  },
  gridLabelMiddle: {
    gridColumn: "4",
  },
  gridLabelRight: {
    gridColumn: "7",
  },
  gridInput: {
    gridColumn: "2/4",
  },
  gridInputLeft: {
    gridColumn: "2",
  },
  gridInputMiddle: {
    gridColumn: "5",
  },
  gridInputRight: {
    gridColumn: "8/10",
  },
  gridInputMedium: {
    gridColumn: "2/5",
  },
  gridInputLarge: {
    gridColumn: "2/6",
    "& .MuiInputBase-input": {
      width: theme.spacing(32),
    },
  },
  gridSearchButton: {
    gridColumn: "4",
  },
  label: {
    width: "75px",
    display: "inline-block",
    textAlign: "right",
    paddingRight: "10px",
  },
  titleLabel: {
    paddingLeft: "40px",
    // paddingRight: "10px",
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

  input: {
    border: "1px solid #000",
    borderRadius: "25px",
    margin: "2px",
    paddingInline: "10px",
    backgroundColor: "white",
    "& .MuiInputBase-input": {
      padding: theme.spacing(0),
      // width: theme.spacing(18),
    },
  },
}));

type BasicInfoProps = {
  customer: addCustomerType;
  setCustomer: React.Dispatch<React.SetStateAction<addCustomerType>>;
  errors: ErrorType;
  setErrors: React.Dispatch<React.SetStateAction<ErrorType>>;
  handelSetCustomer: (cutomerDetails: cutomerDetails) => void;
};

const BasicInfo = ({
  customer,
  setCustomer,
  errors,
  setErrors,

  handelSetCustomer,
}: BasicInfoProps) => {
  const classes = useStyles();

  return (
    <div className={classes.customer}>
      <div className={classes.rows}>
        <div className={classes.gridLabel}>
          <label className={classes.label}>phone number </label>
        </div>

        <div className={classes.gridInput}>
          <TextField
            name="phoneNumber"
            id="phoneNumber"
            value={customer.basicInfo.phoneNumber}
            onChange={(event) => {
              handelSetCustomer({
                infoType: "basicInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.phoneNumber}
            error={Boolean(errors.phoneNumber)}
          />
        </div>
      </div>
      <div className={classes.rows}>
        <div className={classes.gridLabel}>
          <label className={classes.label}>Your name </label>
        </div>
        <div className={classes.gridInput}>
          <TextField
            name="yourName"
            id="yourName"
            onChange={(event) => {
              handelSetCustomer({
                infoType: "basicInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.yourName}
            error={Boolean(errors.yourName)}
          />
        </div>
        <div className={classes.gridLabelMiddle}>
          <label className={classes.titleLabel}>title </label>
        </div>
        <div className={classes.gridInputMiddle}>
          <TextField
            name="title"
            id="title"
            onChange={(event) => {
              handelSetCustomer({
                infoType: "basicInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.title}
            error={Boolean(errors.title)}
          />
        </div>
      </div>
      <div className={classes.rows}>
        <div className={classes.gridLabel}>
          <label className={classes.label}>Furigana </label>
        </div>
        <div className={classes.gridInput}>
          <TextField
            name="furigana"
            id="furigana"
            onChange={(event) => {
              handelSetCustomer({
                infoType: "basicInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.furigana}
            error={Boolean(errors.furigana)}
          />
        </div>
      </div>
      <div className={classes.rows}>
        <div className={classes.gridLabel}>
          <label className={classes.label}> T </label>
        </div>

        <div className={classes.gridInput}>
          <TextField
            name="t"
            id="t"
            onChange={(event) => {
              handelSetCustomer({
                infoType: "basicInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.t}
            error={Boolean(errors.t)}
          />
        </div>
        <div className={classes.gridSearchButton}>
          <button className={classes.searchIcon}>
            <SearchIcon fontSize="inherit" />
          </button>
        </div>

        <div className={classes.gridLabelRight}>
          <label className={classes.label}> sort code </label>
        </div>

        <div className={classes.gridInputRight}>
          <TextField
            name="sortCode"
            id="sortCode"
            onChange={(event) => {
              handelSetCustomer({
                infoType: "basicInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.sortCode}
            error={Boolean(errors.sortCode)}
          />
        </div>
      </div>
      <div className={classes.rows}>
        <div className={classes.gridLabel}>
          <label className={classes.label}> Prefectures </label>
        </div>
        <div className={classes.gridInputLeft}>
          <TextField
            name="prefectures"
            id="prefectures"
            onChange={(event) => {
              handelSetCustomer({
                infoType: "basicInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.prefectures}
            error={Boolean(errors.prefectures)}
          />
        </div>
        <div className={classes.gridLabelRight}>
          <label className={classes.label}> service level </label>
        </div>
        <div className={classes.gridInputRight}>
          <TextField
            name="serviceLevel"
            id="serviceLevel"
            onChange={(event) => {
              handelSetCustomer({
                infoType: "basicInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.serviceLevel}
            error={Boolean(errors.serviceLevel)}
          />
        </div>
      </div>

      <div className={classes.rows}>
        <div className={classes.gridLabel}>
          <label className={classes.label}> Address Line 1 </label>
        </div>
        <div className={classes.gridInputMedium}>
          <TextField
            name="addressLine1"
            id="addressLine1"
            onChange={(event) => {
              handelSetCustomer({
                infoType: "basicInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.addressLine1}
            error={Boolean(errors.addressLine1)}
          />
        </div>
        <div className={classes.gridLabelRight}>
          <label className={classes.label}> group code </label>
        </div>

        <div className={classes.gridInputRight}>
          <TextField
            name="groupCode"
            id="groupCode"
            onChange={(event) => {
              handelSetCustomer({
                infoType: "basicInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.groupCode}
            error={Boolean(errors.groupCode)}
          />
        </div>
      </div>

      <div className={classes.rows}>
        <div className={classes.gridLabel}>
          <label className={classes.label}> Address 2</label>
        </div>
        <div className={classes.gridInputMedium}>
          <TextField
            name="address2"
            id="address2"
            onChange={(event) => {
              handelSetCustomer({
                infoType: "basicInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.address2}
            error={Boolean(errors.address2)}
          />
        </div>
      </div>
      <div className={classes.rows}>
        <div className={classes.gridLabel}>
          <label className={classes.label}> Address 3</label>
        </div>
        <div className={classes.gridInputMedium}>
          <TextField
            name="address3"
            id="address3"
            onChange={(event) => {
              handelSetCustomer({
                infoType: "basicInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.address3}
            error={Boolean(errors.address3)}
          />
        </div>
      </div>
      <div className={classes.rows}>
        <div className={classes.gridLabel}>
          <label className={classes.label}> Address 4</label>
        </div>
        <div className={classes.gridInputMedium}>
          <TextField
            name="address4"
            id="address4"
            onChange={(event) => {
              handelSetCustomer({
                infoType: "basicInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.address4}
            error={Boolean(errors.address4)}
          />
        </div>
      </div>

      <div className={classes.rows}>
        <div className={classes.gridLabel}>
          <label className={classes.label}> company name</label>
        </div>
        <div className={classes.gridInputLarge}>
          <TextField
            name="companyName"
            id="companyName"
            onChange={(event) => {
              handelSetCustomer({
                infoType: "basicInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.companyName}
            error={Boolean(errors.companyName)}
          />
        </div>
      </div>

      <div className={classes.rows}>
        <div className={classes.gridLabel}>
          <label className={classes.label}> Department name</label>
        </div>
        <div className={classes.gridInputLarge}>
          <TextField
            name="departmentName"
            id="departmentName"
            onChange={(event) => {
              handelSetCustomer({
                infoType: "basicInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.input}
            helperText={errors.departmentName}
            error={Boolean(errors.departmentName)}
          />
        </div>
      </div>
    </div>
  );
};
export default BasicInfo;
