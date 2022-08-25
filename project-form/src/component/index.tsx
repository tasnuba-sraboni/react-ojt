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
    gridTemplateRows: "1fr 8fr",
  },
  containerLeftTop: {},
  containerLeftBottom: {
    display: "grid",
    gridTemplateRows: "0.8fr 0.4fr",
    padding: "0 10px",
    paddingBottom: "10px",
    backgroundColor: "#CBFFF8",
  },
  containerRight: {
    display: "grid",
    gridTemplateRows: "0.8fr 3fr 1fr",
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
  supplementaryInfo: {
    checkbox1: string;
    checkbox2: string;
    receipt: string;
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
  supplementaryInfo: {
    checkbox1: "",
    checkbox2: "",
    receipt: "",
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
  const numericHyphen = "^[0-9-]+$|^$";
  const numericInput = "^[1-9][0-9]*$";
  const emailInput =
    "^(([^<>()[]\\.,;:s@]+(.[^<>()[]\\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$";

  const [customer, setCustomer] = React.useState<addCustomerType>(addCustomer);
  const [errors, setErrors] = React.useState<ErrorType>(initialError);

  // ============================== Methods =========================

  // stores data from form to state
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
        case "supplementaryInfo":
          return {
            ...prev,
            [cutomerDetails.infoType]: {
              ...prev.supplementaryInfo,
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
      "email1",
      "email2",
      "email3",
      "remarks",
    ];

    // const emailValidationFields = ["email1", "email2", "email3"];

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

    if (!customer.basicInfo.phoneNumber.match(numericHyphen)) {
      copyErrors.phoneNumber = "Invalid phone number";
      hasError = true;
    }

    if (!customer.basicInfo.t.match(numericHyphen)) {
      copyErrors.t = "Invalid postal code";
      hasError = true;
    }

    if (customer.email.email1.match(emailInput)) {
      copyErrors.email1 = ``;
    } else if (customer.email.email1 === "") {
      copyErrors.email1 = "required";
      hasError = true;
    } else {
      copyErrors.email1 = "Invalid email Id";
      hasError = true;
    }

    if (customer.email.email2 === "") {
      copyErrors.email2 = "required";
      hasError = true;
    } else if (customer.email.email2.match(emailInput)) {
      copyErrors.email2 = ``;
    } else {
      copyErrors.email2 = "Invalid email Id";
      hasError = true;
    }

    if (customer.email.email3 === "") {
      copyErrors.email3 = "required";
      hasError = true;
    } else if (customer.email.email3.match(emailInput)) {
      copyErrors.email3 = ``;
    } else {
      copyErrors.email3 = "Invalid email Id";
      hasError = true;
    }

    if (customer.email.remarks === "") {
      copyErrors.remarks = "required";
      hasError = true;
    } else {
      copyErrors.email3 = ``;
    }

    setErrors(copyErrors);
    // console.log(hasError);
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
              errors={errors}
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
                console.log(errors);
                if (!isValid()) {
                  console.log(customer);
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
