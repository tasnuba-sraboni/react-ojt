import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  appBar: {
    height: "70px",
    backgroundColor: "#C9BB8E",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    display: "grid",
    gridTemplateColumns: "auto auto",
    alignItems: "center",
    padding: "0 24px",
  },
  menu: {
    position: "absolute",
    right: "24px",
  },
  menuButton: {
    backgroundColor: "transparent",
    fontSize: "18px",
    border: "none",
    color: "white",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#E6DBAC",
    },
  },
  title: {
    color: "white",
  },
});

const navItems = ["Home", "Menu", "Chefs", "Waiters"];

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.appBar}>
      <div className={classes.title}>
        <h2>List of Orders</h2>
      </div>
      <div className={classes.menu}>
        {navItems.map((item) => (
          <button className={classes.menuButton}> {item} </button>
        ))}
      </div>
    </div>
  );
};
export default Header;
