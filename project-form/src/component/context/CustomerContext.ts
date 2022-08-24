import React from "react";
import { addCustomerType, ErrorType, cutomerDetails } from "..";



type BasicInfoProps = {
    customer: addCustomerType;
    errors: ErrorType;
    handelSetCustomer: (cutomerDetails: cutomerDetails) => void;
  };