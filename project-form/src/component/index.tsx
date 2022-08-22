import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import Customer from "./Customer";
import BasicInfo from "./BasicInfo";
import Email from "./Email";
import BlackInfo from "./BlackInfo";
import SupplementaryInfo from "./SupplementaryInfo";

const useStyles = makeStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    padding: "0 20px",
  },
  containerLeft: {
    display: "grid",
    gridTemplateRows: "1fr 6fr",
  },
  containerLeftTop: {},
  containerLeftBottom: {
    display: "grid",
    gridTemplateRows: "4fr 2fr",
    padding: "0 10px",
    paddingBottom: "10px",
    backgroundColor: "#E0FFFF",
  },
  containerRight: {
    display: "grid",
    gridTemplateRows: "1fr 3fr 1fr",
    gap: "10px",
  },
  containerRightTop: {
    display: "grid",
    gridTemplateColumns: "5fr 1fr",
    alignItems: "center",
    border: "1px solid #000",
    marginTop: "25px",
  },
  containerRightBottom: {
    border: "1px solid #000",
    paddingInline: "10px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    // alignItems: "center",
  },
});

export type addCustomerType = {
  customer: {
    customerCode?: string;
    customerId?: string;
  };
  basicInfo: {
    phoneNumber: string;
    yourName: string;
    title: string;
    furigana: string;
    t: string;
    sortCode: string;
    prefectures: string;
    serviceLevel: string;
    addressLine1: string;
    groupCode: string;
    address2: string;
    address3: string;
    address4: string;
    companyName: string;
    departmentName: string;
  };
  email: {
    email1: string;
    email2: string;
    email3: string;
    remarks: string;
  };
};
const addCustomer: addCustomerType = {
  customer: {
    customerCode: "",
    customerId: "",
  },
  basicInfo: {
    phoneNumber: "",
    yourName: "",
    title: "",
    furigana: "",
    t: "",
    sortCode: "",
    prefectures: "",
    serviceLevel: "",
    addressLine1: "",
    groupCode: "",
    address2: "",
    address3: "",
    address4: "",
    companyName: "",
    departmentName: "",
  },
  email: {
    email1: "",
    email2: "",
    email3: "",
    remarks: "",
  },
};

export type ErrorType = {
  [key: string]: string;
};
const initialError: ErrorType = {
  customerCode: "",
  customerId: "",

  phoneNumber: "",
  yourName: "",
  title: "",
  furigana: "",
  t: "",
  sortCode: "",
  prefectures: "",
  serviceLevel: "",
  addressLine1: "",
  groupCode: "",
  address2: "",
  address3: "",
  address4: "",
  companyName: "",
  departmentName: "",

  email1: "",
  email2: "",
  email3: "",
  remarks: "",
};

export type cutomerDetails = {
  infoType: string;
  name: string;
  value: string;
};

const FormApp: React.FC = () => {
  const classes = useStyles();
  const numericZero = "^[0][1][0-9]*$";
  const numericInput = "^[1-9][0-9]*$";
  const emailInput =
    "^(([^<>()[]\\.,;:s@]+(.[^<>()[]\\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$";

  const [customer, setCustomer] = React.useState<addCustomerType>(addCustomer);
  const [errors, setErrors] = React.useState<ErrorType>(initialError);

  const handelSetCustomer = (cutomerDetails: cutomerDetails) => {
    setCustomer((prev) => {
      switch (cutomerDetails.infoType) {
        case "customer":
          return {
            ...prev,
            [cutomerDetails.infoType]: {
              ...prev.customer,
              [cutomerDetails.name]: cutomerDetails.value,
            },
          };
        case "basicInfo":
          return {
            ...prev,
            [cutomerDetails.infoType]: {
              ...prev.basicInfo,
              [cutomerDetails.name]: cutomerDetails.value,
            },
          };
        case "email":
          return {
            ...prev,
            [cutomerDetails.infoType]: {
              ...prev.email,
              [cutomerDetails.name]: cutomerDetails.value,
            },
          };
        default:
          return prev;
      }
    });
  };

  // validates the input fields of the form
  const isValid = () => {
    let hasError = false;
    const copyErrors: ErrorType = { ...errors };

    const validationFields = [
      "phoneNumber",
      "yourName",
      "title",
      "furigana",
      "t",
      "sortCode",
      "prefectures",
      "serviceLevel",
      "addressLine1",
      "groupCode",
      "address2",
      "address3",
      "address4",
      "companyName",
      "departmentName",
    ];

    const emailValidationFields = ["email1", "email2", "email3"];

    for (let key in copyErrors) {
      if (
        validationFields.includes(key) &&
        customer.basicInfo[key as keyof typeof customer.basicInfo] === ""
      ) {
        copyErrors[key] = "required";
        hasError = true;
      } else {
        copyErrors[key] = ``;
      }
    }

    // for (let key in copyErrors) {
    //   if (
    //     emailValidationFields.includes(key) &&
    //     customer.email[key as keyof typeof customer.email].match(emailInput)
    //   ) {
    //     copyErrors[key] = ``;
    //   } else {
    //     copyErrors[key] = "Not a valid email Id";
    //     hasError = true;
    //   }
    // }

    if (customer.basicInfo.phoneNumber.match(numericZero)) {
      copyErrors.phoneNumber = ``;
    } else if (customer.basicInfo.phoneNumber.match(numericInput)) {
      copyErrors.phoneNumber = "Not a valid phone number";
      hasError = true;
    } else if (customer.basicInfo.phoneNumber.length < 11) {
      copyErrors.phoneNumber = "Not a valid phone number";
      hasError = true;
    } else {
      copyErrors.phoneNumber = "Numeric values only";
      hasError = true;
    }

    if (customer.email.email1.match(emailInput)) {
      copyErrors.email1 = ``;
    } else {
      copyErrors.email1 = "Not a valid email Id";
      hasError = true;
    }

    // if (order.foodItem.length <= 3) {
    //   copyErrors.foodItem = "Must contain at least 4 characters";
    //   hasError = true;
    // } else {
    //   copyErrors.foodItem = ``;
    // }

    // if (order.quantity.match(numericInput)) {
    //   copyErrors.quantity = ``;
    // } else if (order.quantity.match(numericZero)) {
    //   copyErrors.quantity = "Value must not start with zero";
    //   hasError = true;
    // } else {
    //   copyErrors.quantity = "Numeric values only";
    //   hasError = true;
    // }
    // if (order.tableNo.match(numericInput)) {
    //   copyErrors.tableNo = ``;
    // } else if (order.tableNo.match(numericZero)) {
    //   copyErrors.tableNo = "Value must not start with zero";
    //   hasError = true;
    // } else {
    //   copyErrors.tableNo = "Numeric values only";
    //   hasError = true;
    // }

    setErrors(copyErrors);
    // setIsValid(!hasError);
    console.log(hasError);

    return hasError;
  };

  return (
    <React.Fragment>
      <div>
        <Header />
      </div>
      <form className={classes.container}>
        <div className={classes.containerLeft}>
          <div className={classes.containerLeftTop}>
            <Customer />
          </div>
          <div className={classes.containerLeftBottom}>
            <BasicInfo
              customer={customer}
              setCustomer={setCustomer}
              errors={errors}
              setErrors={setErrors}
              handelSetCustomer={handelSetCustomer}
            />

            <Email
              customer={customer}
              errors={errors}
              handelSetCustomer={handelSetCustomer}
            />
          </div>
        </div>
        <div className={classes.containerRight}>
          <div className={classes.containerRightTop}>
            <BlackInfo
              customer={customer}
              errors={errors}
              handelSetCustomer={handelSetCustomer}
            />
          </div>
          <div className={classes.containerRightBottom}>
            <SupplementaryInfo
              customer={customer}
              errors={errors}
              handelSetCustomer={handelSetCustomer}
            />
          </div>

          <div>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                if (!isValid()) {
                  console.log({ customer });
                }
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};
export default FormApp;
