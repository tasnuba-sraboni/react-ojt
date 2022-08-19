import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  customer: {
    fontSize: "12px",
    padding: "10px 0",
  },
  label: {
    width: "85px",
    display: "inline-block",
    textAlign: "right",
    paddingRight: "12px",
  },
  titleLabel: {
    paddingLeft: "50px",
    paddingRight: "10px",
  },
  // input: {
  //   border: "1px solid black",
  //   borderRadius: "15px",
  //   outline: "none",
  //   margin: "2px 0",
  //   // marginRight: "30px",
  // },
  searchIcon: {
    height: "30px",
    width: "30px",
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "50%",
    marginLeft: "15px",
  },
  inputGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  inputGridRight: {
    position: "absolute",
    left: "410px",
  },
  input: {
    border: "1px solid #000",
    borderRadius: "25px",
    margin: "2px",
    backgroundColor: "white",
    "& .MuiInputBase-input": {
      padding: theme.spacing(0),
      width: theme.spacing(15),
    },
  },
}));

const BasicInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.customer}>
      <div>
        <label className={classes.label}>phone number </label>
        {/* <input size={12} className={classes.input} /> */}
        <TextField
          name="phoneNumber"
          id="phoneNumber"
          InputProps={{ disableUnderline: true }}
          className={classes.input}
        />
      </div>
      <div>
        <label className={classes.label}>Your name </label>
        <TextField
          name="yourName"
          id="yourName"
          InputProps={{ disableUnderline: true }}
          className={classes.input}
        />

        <label className={classes.titleLabel}>title </label>
        <input size={3} className={classes.input} />
      </div>
      <div>
        <label className={classes.label}>Furigana </label>
        <TextField
          name="furigana"
          id="furigana"
          InputProps={{ disableUnderline: true }}
          className={classes.input}
        />
      </div>
      <div className={classes.inputGrid}>
        <div>
          <label className={classes.label}> T </label>
          <input size={12} className={classes.input} />
          <button className={classes.searchIcon}>
            <SearchIcon fontSize="small" />
          </button>
        </div>
        <div className={classes.inputGridRight}>
          <label className={classes.label}> sort code </label>
          <TextField
            name="sortCode"
            id="sortCode"
            InputProps={{ disableUnderline: true }}
            className={classes.input}
          />
        </div>
      </div>
      <div className={classes.inputGrid}>
        <div>
          <label className={classes.label}> Prefectures </label>
          <input size={3} className={classes.input} />
        </div>
        <div className={classes.inputGridRight}>
          <label className={classes.label}> service level </label>
          <TextField
            name="serviceLevel"
            id="serviceLevel"
            InputProps={{ disableUnderline: true }}
            className={classes.input}
          />
        </div>
      </div>
      <div className={classes.inputGrid}>
        <div>
          <label className={classes.label}> Address Line 1 </label>
          <input className={classes.input} />
        </div>
        <div className={classes.inputGridRight}>
          <label className={classes.label}> group code </label>
          <TextField
            name="groupCode"
            id="groupCode"
            InputProps={{ disableUnderline: true }}
            className={classes.input}
          />
        </div>
      </div>
      <div>
        <label className={classes.label}> Address 2</label>
        <input className={classes.input} />
      </div>
      <div>
        <label className={classes.label}> Address 3</label>
        <input className={classes.input} />
      </div>
      <div>
        <label className={classes.label}> Address 4</label>
        <input className={classes.input} />
      </div>
      <div>
        <label className={classes.label}> company name</label>
        <input size={30} className={classes.input} />
      </div>
      <div>
        <label className={classes.label}> Department name</label>
        <input size={30} className={classes.input} />
      </div>
    </div>
  );
};
export default BasicInfo;
