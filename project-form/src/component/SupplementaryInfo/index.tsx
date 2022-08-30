import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
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
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import CustomerTextField from "../CustomerTextField";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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
  discountInput: {
    border: "1px solid #000",
    borderRadius: "25px",
    height: "19px",
    width: "70px",
    margin: "8px 2px",
    paddingInline: "10px",
    backgroundColor: "white",
    "& .MuiInputBase-input": {
      padding: theme.spacing(0),
    },
    "& .MuiFormHelperText-root": {
      marginTop: "-15px",
      marginLeft: "100px",
      lineHeight: "1",
      fontSize: "10px",
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
  paper: {
    position: "absolute",
    width: "250px",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 2),
  },
  close: {
    backgroundColor: "transparent",
    border: 0,
    position: "absolute",
    right: "5%",
    cursor: "pointer",
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
  const numericDecimal = "^([0-9]+.?[0-9]*|.[0-9]+)$";
  const [checked, setChecked] = React.useState([true, false]);
  const [selectedValue, setSelectedValue] = React.useState("don't want");
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [gender, setGender] = React.useState("");

  console.log(customer.supplementaryInfo);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSet = (e: React.FormEvent<HTMLFormElement>) => {
    handelSetCustomer({
      infoType: "supplementaryInfo",
      name: "gender",
      value: gender,
    });
  };

  return (
    <>
      <div className={classes.blackInfo}>
        <b>Customer Supplementary information</b>
        <div className={classes.rows}>
          <CustomerTextField
            name="regionCode"
            id="regionCode"
            label="region code"
            size="85px"
            labelWidth="90px"
            value={customer.supplementaryInfo.regionCode}
            infoType="supplementaryInfo"
            customer={customer}
            errors={errors.regionCode}
            handelSetCustomer={handelSetCustomer}
          />
        </div>
        <div className={classes.rows}>
          <label className={classes.label}>gender</label>
          <Modal
            open={open}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <div style={modalStyle} className={classes.paper}>
              <form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  handleSet(e);
                  handleClose();
                }}
              >
                <button className={classes.close} onClick={handleClose}>
                  <CloseIcon />
                </button>

                <h4 id="simple-modal-title">Select one</h4>
                <div className={classes.radioButton}>
                  <RadioGroup>
                    <FormControlLabel
                      name="gender"
                      value="Male"
                      control={
                        <Radio
                          size="small"
                          color="primary"
                          onChange={(event) => {
                            setGender(event.target.value);
                          }}
                        />
                      }
                      label="Male"
                    />

                    <FormControlLabel
                      name="gender"
                      value="Female"
                      control={
                        <Radio
                          size="small"
                          color="primary"
                          onChange={(event) => {
                            setGender(event.target.value);
                          }}
                        />
                      }
                      label="Female"
                    />
                    <FormControlLabel
                      name="gender"
                      value="Others"
                      control={
                        <Radio
                          size="small"
                          color="primary"
                          onChange={(event) => {
                            setGender(event.target.value);
                          }}
                        />
                      }
                      label="Others"
                    />
                  </RadioGroup>
                </div>
                <button type="submit">Submit </button>
              </form>
            </div>
          </Modal>

          <TextField
            onClick={handleOpen}
            value={customer.supplementaryInfo.gender}
            InputProps={{ disableUnderline: true }}
            className={classes.inputMedium}
            helperText={errors.gender}
            error={Boolean(errors.gender)}
          />
        </div>
        <div className={classes.rows}>
          <CustomerTextField
            name="age"
            id="age"
            label="age"
            size="170px"
            labelWidth="90px"
            value={customer.supplementaryInfo.age}
            infoType="supplementaryInfo"
            customer={customer}
            errors={errors.age}
            handelSetCustomer={handelSetCustomer}
          />
        </div>
        <div className={classes.rows}>
          <CustomerTextField
            name="customerFactor"
            id="customerFactor"
            label="Customer factor"
            size="40px"
            labelWidth="90px"
            value={customer.supplementaryInfo.customerFactor}
            infoType="supplementaryInfo"
            customer={customer}
            errors={errors.customerFactor}
            handelSetCustomer={handelSetCustomer}
          />
        </div>
        <div className={classes.rows}>
          <CustomerTextField
            name="classificationCode"
            id="classificationCode"
            label="Classification Code"
            size="40px"
            labelWidth="90px"
            value={customer.supplementaryInfo.classificationCode}
            infoType="supplementaryInfo"
            customer={customer}
            errors={errors.classificationCode}
            handelSetCustomer={handelSetCustomer}
          />
        </div>
        <div className={classes.rows}>
          <CustomerTextField
            name="orderCategory"
            id="orderCategory"
            label="Order category"
            size="40px"
            labelWidth="90px"
            value={customer.supplementaryInfo.orderCategory}
            infoType="supplementaryInfo"
            customer={customer}
            errors={errors.orderCategory}
            handelSetCustomer={handelSetCustomer}
          />
        </div>
        <div className={classes.rows}>
          <CustomerTextField
            name="collectionMethod"
            id="collectionMethod"
            label="Collection method"
            size="40px"
            labelWidth="90px"
            value={customer.supplementaryInfo.collectionMethod}
            infoType="supplementaryInfo"
            customer={customer}
            errors={errors.collectionMethod}
            handelSetCustomer={handelSetCustomer}
          />
        </div>
        <div className={classes.rows}>
          <CustomerTextField
            name="lastStoreCD"
            id="lastStoreCD"
            label="Last store CD"
            size="40px"
            labelWidth="90px"
            value={customer.supplementaryInfo.lastStoreCD}
            infoType="supplementaryInfo"
            customer={customer}
            errors={errors.lastStoreCD}
            handelSetCustomer={handelSetCustomer}
          />
        </div>
        <div className={classes.rows}>
          <CustomerTextField
            name="customerRank"
            id="customerRank"
            label="customer rank"
            size="40px"
            labelWidth="90px"
            value={customer.supplementaryInfo.customerRank}
            infoType="supplementaryInfo"
            customer={customer}
            errors={errors.customerRank}
            handelSetCustomer={handelSetCustomer}
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
            control={
              <Checkbox
                size="small"
                name="checkbox1"
                color="primary"
                value="do not send DM"
                onChange={(event) => {
                  handelSetCustomer({
                    infoType: "supplementaryInfo",
                    name: event.target.name,
                    value: event.target.value,
                  });
                }}
              />
            }
            label="do not send DM"
          />
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                name="checkbox2"
                color="primary"
                value="do not issue a purchase order"
                onChange={(event) => {
                  handelSetCustomer({
                    infoType: "supplementaryInfo",
                    name: event.target.name,
                    value: event.target.value,
                  });
                }}
              />
            }
            label="do not issue a purchase order"
          />
        </div>
        First store CD Call center
      </div>
      <div className={classes.blackInfo}>
        <div className={classes.rows}>
          <CustomerTextField
            name="requester"
            id="requester"
            label="requester"
            size="85px"
            labelWidth="90px"
            value={customer.supplementaryInfo.requester}
            infoType="supplementaryInfo"
            customer={customer}
            errors={errors.requester}
            handelSetCustomer={handelSetCustomer}
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
                name="receipt"
                value="requirement"
                control={
                  <Radio
                    size="small"
                    color="primary"
                    onChange={(event) => {
                      setSelectedValue(event.target.value);
                      handelSetCustomer({
                        infoType: "supplementaryInfo",
                        name: event.target.name,
                        value: event.target.value,
                      });
                    }}
                  />
                }
                label="Requirement"
              />

              <FormControlLabel
                name="receipt"
                value="dontwant"
                control={
                  <Radio
                    size="small"
                    color="primary"
                    onChange={(event) => {
                      setSelectedValue(event.target.value);
                      handelSetCustomer({
                        infoType: "supplementaryInfo",
                        name: event.target.name,
                        value: event.target.value,
                      });
                    }}
                  />
                }
                label="don't want"
              />
            </RadioGroup>
          </div>
        </div>
        <div className={classes.rows}>
          <CustomerTextField
            name="receiptAddress"
            id="receiptAddress"
            label="Receipt address"
            size="85px"
            labelWidth="90px"
            value={customer.supplementaryInfo.receiptAddress}
            infoType="supplementaryInfo"
            customer={customer}
            errors={errors.receiptAddress}
            handelSetCustomer={handelSetCustomer}
          />
        </div>
        <div className={classes.rows}>
          <label className={classes.label}>discount rate</label>
          <TextField
            name="discountRate"
            id="discountRate"
            value={customer.supplementaryInfo.discountRate}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (!event.target.value.match(numericDecimal)) {
                errors.discountRate = "Digits and decimal point only";
                handelSetCustomer({
                  infoType: "supplementaryInfo",
                  name: event.target.name,
                  value: "",
                });
              } else {
                errors.discountRate = "";
                handelSetCustomer({
                  infoType: "supplementaryInfo",
                  name: event.target.name,
                  value: event.target.value,
                });
              }
            }}
            InputProps={{ disableUnderline: true }}
            className={classes.discountInput}
            helperText={errors.discountRate}
            error={Boolean(errors.discountRate)}
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
          <CustomerTextField
            name="urgeToDistinguish"
            id="urgeToDistinguish"
            label="Urge to distinguish"
            size="40px"
            labelWidth="90px"
            value={customer.supplementaryInfo.urgeToDistinguish}
            infoType="supplementaryInfo"
            customer={customer}
            errors={errors.urgeToDistinguish}
            handelSetCustomer={handelSetCustomer}
          />
        </div>
        <div className={classes.rows}>
          <CustomerTextField
            name="closingDateClassification"
            id="closingDateClassification"
            label="Closing date classification"
            size="40px"
            labelWidth="115px"
            value={customer.supplementaryInfo.closingDateClassification}
            infoType="supplementaryInfo"
            customer={customer}
            errors={errors.closingDateClassification}
            handelSetCustomer={handelSetCustomer}
          />
        </div>
        <div className={classes.rows}>
          <CustomerTextField
            name="customerGeneric1"
            id="customerGeneric1"
            label="Customer generic 1"
            size="40px"
            labelWidth="90px"
            value={customer.supplementaryInfo.customerGeneric1}
            infoType="supplementaryInfo"
            customer={customer}
            errors={errors.customerGeneric1}
            handelSetCustomer={handelSetCustomer}
          />
        </div>
        <div className={classes.rows}>
          <CustomerTextField
            name="customerGeneric2"
            id="customerGeneric2"
            label="Customer generic 2"
            size="40px"
            labelWidth="90px"
            value={customer.supplementaryInfo.customerGeneric2}
            infoType="supplementaryInfo"
            customer={customer}
            errors={errors.customerGeneric2}
            handelSetCustomer={handelSetCustomer}
          />
        </div>
        <div className={classes.rows}>
          <CustomerTextField
            name="customerGeneric3"
            id="customerGeneric3"
            label="Customer generic 3"
            size="40px"
            labelWidth="90px"
            value={customer.supplementaryInfo.customerGeneric3}
            infoType="supplementaryInfo"
            customer={customer}
            errors={errors.customerGeneric3}
            handelSetCustomer={handelSetCustomer}
          />
        </div>
        <div className={classes.rows}>
          <CustomerTextField
            name="customerGeneric4"
            id="customerGeneric4"
            label="Customer generic 4"
            size="40px"
            labelWidth="90px"
            value={customer.supplementaryInfo.customerGeneric4}
            infoType="supplementaryInfo"
            customer={customer}
            errors={errors.customerGeneric4}
            handelSetCustomer={handelSetCustomer}
          />
        </div>
        <div className={classes.rows}>
          <CustomerTextField
            name="customerGeneric5"
            id="customerGeneric5"
            label="Customer generic 5"
            size="40px"
            labelWidth="90px"
            value={customer.supplementaryInfo.customerGeneric5}
            infoType="supplementaryInfo"
            customer={customer}
            errors={errors.customerGeneric5}
            handelSetCustomer={handelSetCustomer}
          />
        </div>
        <div className={classes.registration}>registration date 17-08-22</div>
      </div>
    </>
  );
};
export default SupplementaryInfo;
