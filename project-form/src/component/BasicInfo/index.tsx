import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import { addCustomerType } from "..";
import { cutomerDetails } from "..";
import { ErrorType } from "..";
import CustomerTextField from "../CustomerTextField";

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
  gridInputLarge: {
    gridColumn: "2/6",
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

  gridSearchButton: {
    gridColumn: "4",
  },
  label: {
    gridColumn: "1",
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
}));

type BasicInfoProps = {
  customer: addCustomerType;
  errors: ErrorType;
  handelSetCustomer: (cutomerDetails: cutomerDetails) => void;
};

const BasicInfo = ({ customer, errors, handelSetCustomer }: BasicInfoProps) => {
  const classes = useStyles();

  return (
    <div className={classes.customer}>
      <div className={classes.rows}>
        <CustomerTextField
          name="phoneNumber"
          id="phoneNumber"
          label="phone number"
          size="2/4"
          infoType="basicInfo"
          customer={customer}
          errors={errors.phoneNumber}
          handelSetCustomer={handelSetCustomer}
        />
      </div>
      <div className={classes.rows}>
        <CustomerTextField
          name="yourName"
          id="yourName"
          label="Your name"
          size="2/4"
          infoType="basicInfo"
          customer={customer}
          errors={errors.yourName}
          handelSetCustomer={handelSetCustomer}
        />
        <div className={classes.gridLabelMiddle}>
          <label className={classes.titleLabel}>title </label>
        </div>
        <div className={classes.gridInputMiddle}>
          <TextField
            name="title"
            id="title"
            value={customer.basicInfo.title}
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
            value={customer.basicInfo.furigana}
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
            value={customer.basicInfo.t}
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
            value={customer.basicInfo.sortCode}
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
            value={customer.basicInfo.prefectures}
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
            value={customer.basicInfo.serviceLevel}
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
        <label className={classes.label}> Address Line 1 </label>
        <TextField
          name="addressLine1"
          id="addressLine1"
          value={customer.basicInfo.addressLine1}
          onChange={(event) => {
            handelSetCustomer({
              infoType: "basicInfo",
              name: event.target.name,
              value: event.target.value,
            });
          }}
          InputProps={{ disableUnderline: true }}
          className={classes.gridInputMedium}
          helperText={errors.addressLine1}
          error={Boolean(errors.addressLine1)}
        />

        <div className={classes.gridLabelRight}>
          <label className={classes.label}> group code </label>
        </div>

        <div className={classes.gridInputRight}>
          <TextField
            name="groupCode"
            id="groupCode"
            value={customer.basicInfo.groupCode}
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
        <label className={classes.label}> Address 2</label>
        <TextField
          name="address2"
          id="address2"
          value={customer.basicInfo.address2}
          onChange={(event) => {
            handelSetCustomer({
              infoType: "basicInfo",
              name: event.target.name,
              value: event.target.value,
            });
          }}
          InputProps={{ disableUnderline: true }}
          className={classes.gridInputMedium}
          helperText={errors.address2}
          error={Boolean(errors.address2)}
        />
      </div>
      <div className={classes.rows}>
        <label className={classes.label}> Address 3</label>
        <TextField
          name="address3"
          id="address3"
          value={customer.basicInfo.address3}
          onChange={(event) => {
            handelSetCustomer({
              infoType: "basicInfo",
              name: event.target.name,
              value: event.target.value,
            });
          }}
          InputProps={{ disableUnderline: true }}
          className={classes.gridInputMedium}
          helperText={errors.address3}
          error={Boolean(errors.address3)}
        />
      </div>
      <div className={classes.rows}>
        <label className={classes.label}> Address 4</label>

        <TextField
          name="address4"
          id="address4"
          value={customer.basicInfo.address4}
          onChange={(event) => {
            handelSetCustomer({
              infoType: "basicInfo",
              name: event.target.name,
              value: event.target.value,
            });
          }}
          InputProps={{ disableUnderline: true }}
          className={classes.gridInputMedium}
          helperText={errors.address4}
          error={Boolean(errors.address4)}
        />
      </div>

      <div className={classes.rows}>
        <label className={classes.label}> company name</label>
        <TextField
          name="companyName"
          id="companyName"
          value={customer.basicInfo.companyName}
          onChange={(event) => {
            handelSetCustomer({
              infoType: "basicInfo",
              name: event.target.name,
              value: event.target.value,
            });
          }}
          InputProps={{ disableUnderline: true }}
          className={classes.gridInputLarge}
          helperText={errors.companyName}
          error={Boolean(errors.companyName)}
        />
      </div>

      <div className={classes.rows}>
        <label className={classes.label}> Department name</label>

        <TextField
          name="departmentName"
          id="departmentName"
          value={customer.basicInfo.departmentName}
          onChange={(event) => {
            handelSetCustomer({
              infoType: "basicInfo",
              name: event.target.name,
              value: event.target.value,
            });
          }}
          InputProps={{ disableUnderline: true }}
          className={classes.gridInputLarge}
          helperText={errors.departmentName}
          error={Boolean(errors.departmentName)}
        />
      </div>
    </div>
  );
};
export default BasicInfo;
