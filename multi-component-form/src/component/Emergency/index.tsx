import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    backgroundColor: "gray",
    height: "60px",
    padding: "1px 34px 0 34px",
    color: "white",
  },
});

const Emergency = () => {
  const classes = useStyles();
  return <div className={classes.container}></div>;
};
export default Emergency;
