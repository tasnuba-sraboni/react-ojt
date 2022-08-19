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

const FormApp: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div>
        <Header />
      </div>
      <div className={classes.container}>
        <div className={classes.containerLeft}>
          <div className={classes.containerLeftTop}>
            <Customer />
          </div>
          <div className={classes.containerLeftBottom}>
            <BasicInfo />

            <Email />
          </div>
        </div>
        <div className={classes.containerRight}></div>
      </div>
    </React.Fragment>
  );
};
export default FormApp;
