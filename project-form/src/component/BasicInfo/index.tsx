import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
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
          size="120px"
          value={customer.basicInfo.phoneNumber}
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
        <CustomerTextField
          name="t"
          id="t"
          label="T"
          size="120px"
          value={customer.basicInfo.t}
          infoType="basicInfo"
          customer={customer}
          errors={errors.t}
          handelSetCustomer={handelSetCustomer}
        />

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
