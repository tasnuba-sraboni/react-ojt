import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  emailInfo: {
    backgroundColor: "#98FB98",
    fontSize: "12px",
    paddingTop: "10px",
  },
  label: {
    width: "85px",
    display: "inline-block",
    textAlign: "right",
    paddingRight: "12px",
  },
  input: {
    border: "1px solid black",
    borderRadius: "15px",
    outline: "none",
    margin: "2px 0",
    // marginRight: "30px",
  },
  inputRemarks: {
    border: "1px solid black",
    borderRadius: "10px",
    outline: "none",
    margin: "2px 0",
    height: "40px",
  },
});

const Email = () => {
  const classes = useStyles();
  return (
    <div className={classes.emailInfo}>
      <div>
        <label className={classes.label}> Email 1</label>
        <input size={50} className={classes.input} />
      </div>
      <div>
        <label className={classes.label}> Email 2</label>
        <input size={50} className={classes.input} />
      </div>
      <div>
        <label className={classes.label}> Email 3</label>
        <input size={50} className={classes.input} />
      </div>
      <div>
        <label className={classes.label}> remarks</label>
        <input size={50} className={classes.inputRemarks} />
      </div>
    </div>
  );
};
export default Email;
