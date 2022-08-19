import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  customer: {
    fontSize: "12px",
    padding: "10px 0",
    display: "grid",
    gridTemplateColumns: "2fr 2fr 1fr",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  input: {
    border: "0",
  },
});

const Customer = () => {
  const classes = useStyles();
  return (
    <div className={classes.customer}>
      <div>
        <label>Customer code: </label>
        <input size={3} className={classes.input} />
      </div>
      <div>
        <label>Online Customer ID: </label>
        <input size={3} className={classes.input} />
      </div>
      <div>
        <input type="radio" name="category" />
        <label>Personal</label> <br />
        <input type="radio" name="category" />
        <label>Corporation</label>
      </div>
    </div>
  );
};
export default Customer;
