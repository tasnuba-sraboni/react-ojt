import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import Customer from "./Customer";
import BasicInfo from "./BasicInfo";
import Email from "./Email";

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
  containerRight: {},
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

  const [customer, setCustomer] = React.useState<addCustomerType>(addCustomer);
  const [errors, setErrors] = React.useState<ErrorType>(initialError);
  //   const [isValid, setIsValid] = React.useState<boolean>(false);

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
              //   setIsValid={setIsValid}
              handelSetCustomer={handelSetCustomer}
            />

            <Email />
          </div>
        </div>
        <div className={classes.containerRight}></div>
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
      </form>
    </React.Fragment>
  );
};
export default FormApp;
