import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    backgroundColor: "gray",
    height: "60px",
    padding: "1px 34px 0 34px",
    color: "white",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <h2>Personal Information</h2>
    </div>
  );
};
export default Header;
