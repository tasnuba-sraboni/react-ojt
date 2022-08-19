import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#393D47",
    height: "35px",
    padding: "0 20px",
    color: "white",
    fontSize: "12px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
  },
  headerLeft: {
    display: "grid",
    justifyContent: "end",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div>Customer registration</div>
      <div className={classes.headerLeft}>
        <CloseIcon />
      </div>
    </div>
  );
};
export default Header;
