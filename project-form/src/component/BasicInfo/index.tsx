import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { addCustomerType } from "..";
import { cutomerDetails } from "..";
import { ErrorType } from "..";
import CustomerTextField from "../CustomerTextField";
import TextField from "@material-ui/core/TextField";

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
  gridLabelMiddle: {
    gridColumn: "3",
  },
  gridLabelRight: {
    gridColumn: "9",
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
    width: "120px",
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

type BasicInfoProps = {
  customer: addCustomerType;
  errors: ErrorType;
  handelSetCustomer: (cutomerDetails: cutomerDetails) => void;
};

const BasicInfo = ({ customer, errors, handelSetCustomer }: BasicInfoProps) => {
  const classes = useStyles();
  const numericHyphen = "^[0-9-]+$|^$";

  return (
    <div className={classes.customer}>
      <div className={classes.rows}>
        <label className={classes.label}>phone number</label>
        <TextField
          name="phoneNumber"
          id="phoneNumber"
          value={customer.basicInfo.phoneNumber}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (!event.target.value.match(numericHyphen)) {
              errors.phoneNumber = "Digits and hyphen only";
              handelSetCustomer({
                infoType: "basicInfo",
                name: event.target.name,
                value: "",
              });
            } else {
              errors.phoneNumber = "";
              handelSetCustomer({
                infoType: "basicInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }
          }}
          InputProps={{ disableUnderline: true }}
          className={classes.input}
          helperText={errors.phoneNumber}
          error={Boolean(errors.phoneNumber)}
        />
      </div>
      <div className={classes.rows}>
        <CustomerTextField
          name="yourName"
          id="yourName"
          label="Your name"
          size="120px"
          value={customer.basicInfo.yourName}
          infoType="basicInfo"
          customer={customer}
          errors={errors.yourName}
          handelSetCustomer={handelSetCustomer}
        />
        <div className={`${classes.gridLabelMiddle} ${classes.rows}`}>
          <CustomerTextField
            name="title"
            id="title"
            label="title"
            size="40px"
            value={customer.basicInfo.title}
            infoType="basicInfo"
            customer={customer}
            errors={errors.yourName}
            handelSetCustomer={handelSetCustomer}
          />
        </div>
      </div>
      <div className={classes.rows}>
        <CustomerTextField
          name="furigana"
          id="furigana"
          label="Furigana"
          size="120px"
          value={customer.basicInfo.furigana}
          infoType="basicInfo"
          customer={customer}
          errors={errors.furigana}
          handelSetCustomer={handelSetCustomer}
        />
      </div>

      <div className={classes.rows}>
        <label className={classes.label}>T</label>
        <TextField
          name="t"
          id="t"
          value={customer.basicInfo.t}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (!event.target.value.match(numericHyphen)) {
              errors.t = "Digits and hyphen only";
              handelSetCustomer({
                infoType: "basicInfo",
                name: event.target.name,
                value: "",
              });
            } else {
              errors.t = "";
              handelSetCustomer({
                infoType: "basicInfo",
                name: event.target.name,
                value: event.target.value,
              });
            }
          }}
          InputProps={{ disableUnderline: true }}
          className={classes.input}
          helperText={errors.t}
          error={Boolean(errors.t)}
        />
        {/* <CustomerTextField
          name="t"
          id="t"
          label="T"
          size="120px"
          value={customer.basicInfo.t}
          infoType="basicInfo"
          customer={customer}
          errors={errors.t}
          handelSetCustomer={handelSetCustomer}
        /> */}

        <button className={classes.searchIcon}>
          <SearchIcon fontSize="inherit" />
        </button>

        <div className={`${classes.gridLabelRight} ${classes.rows}`}>
          <CustomerTextField
            name="sortCode"
            id="sortCode"
            label="sort code"
            size="120px"
            value={customer.basicInfo.sortCode}
            infoType="basicInfo"
            customer={customer}
            errors={errors.sortCode}
            handelSetCustomer={handelSetCustomer}
          />
        </div>
      </div>

      <div className={classes.rows}>
        <CustomerTextField
          name="prefectures"
          id="prefectures"
          label="Prefectures"
          size="40px"
          value={customer.basicInfo.prefectures}
          infoType="basicInfo"
          customer={customer}
          errors={errors.prefectures}
          handelSetCustomer={handelSetCustomer}
        />

        <div className={`${classes.gridLabelRight} ${classes.rows}`}>
          <CustomerTextField
            name="serviceLevel"
            id="serviceLevel"
            label="service level"
            size="120px"
            value={customer.basicInfo.serviceLevel}
            infoType="basicInfo"
            customer={customer}
            errors={errors.serviceLevel}
            handelSetCustomer={handelSetCustomer}
          />
        </div>
      </div>

      <div className={classes.rows}>
        <CustomerTextField
          name="addressLine1"
          id="addressLine1"
          label="Address Line 1"
          size="180px"
          value={customer.basicInfo.addressLine1}
          infoType="basicInfo"
          customer={customer}
          errors={errors.addressLine1}
          handelSetCustomer={handelSetCustomer}
        />

        <div className={`${classes.gridLabelRight} ${classes.rows}`}>
          <CustomerTextField
            name="groupCode"
            id="groupCode"
            label="group code"
            size="120px"
            value={customer.basicInfo.groupCode}
            infoType="basicInfo"
            customer={customer}
            errors={errors.groupCode}
            handelSetCustomer={handelSetCustomer}
          />
        </div>
      </div>

      <div className={classes.rows}>
        <CustomerTextField
          name="address2"
          id="address2"
          label="Address 2"
          size="180px"
          value={customer.basicInfo.address2}
          infoType="basicInfo"
          customer={customer}
          errors={errors.address2}
          handelSetCustomer={handelSetCustomer}
        />
      </div>

      <div className={classes.rows}>
        <CustomerTextField
          name="address3"
          id="address3"
          label="Address 3"
          size="180px"
          value={customer.basicInfo.address3}
          infoType="basicInfo"
          customer={customer}
          errors={errors.address3}
          handelSetCustomer={handelSetCustomer}
        />
      </div>

      <div className={classes.rows}>
        <CustomerTextField
          name="address4"
          id="address4"
          label="Address 4"
          size="180px"
          value={customer.basicInfo.address4}
          infoType="basicInfo"
          customer={customer}
          errors={errors.address4}
          handelSetCustomer={handelSetCustomer}
        />
      </div>

      <div className={classes.rows}>
        <CustomerTextField
          name="companyName"
          id="companyName"
          label="company name"
          size="250px"
          value={customer.basicInfo.companyName}
          infoType="basicInfo"
          customer={customer}
          errors={errors.companyName}
          handelSetCustomer={handelSetCustomer}
        />
      </div>

      <div className={classes.rows}>
        <CustomerTextField
          name="departmentName"
          id="departmentName"
          label="Department name"
          size="250px"
          value={customer.basicInfo.departmentName}
          infoType="basicInfo"
          customer={customer}
          errors={errors.departmentName}
          handelSetCustomer={handelSetCustomer}
        />
      </div>
    </div>
  );
};
export default BasicInfo;
