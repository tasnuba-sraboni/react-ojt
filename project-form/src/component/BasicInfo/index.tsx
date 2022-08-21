import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  customer: {
    fontSize: "10px",
    padding: "10px 0",
  },
  rows: {
    display: "grid",
    gridTemplateColumns: "repeat(9, 1fr)",
    alignItems: "center",
  },
  gridLabel: {
    gridColumn: "1",
  },
  gridLabelMiddle: {
    gridColumn: "4",
  },
  gridLabelRight: {
    gridColumn: "7",
  },
  gridInput: {
    gridColumn: "2/4",
  },
  gridInputLeft: {
    gridColumn: "2",
  },
  gridInputMiddle: {
    gridColumn: "5",
  },
  gridInputRight: {
    gridColumn: "8/10",
  },
  gridInputMedium: {
    gridColumn: "2/5",
  },
  gridInputLarge: {
    gridColumn: "2/6",
    "& .MuiInputBase-input": {
      width: theme.spacing(32),
    },
  },
  gridSearchButton: {
    gridColumn: "4",
  },
  label: {
    width: "75px",
    display: "inline-block",
    textAlign: "right",
    paddingRight: "10px",
  },
  titleLabel: {
    paddingLeft: "40px",
    // paddingRight: "10px",
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

  input: {
    border: "1px solid #000",
    borderRadius: "25px",
    margin: "2px",
    paddingInline: "10px",
    backgroundColor: "white",
    "& .MuiInputBase-input": {
      padding: theme.spacing(0),
      // width: theme.spacing(18),
    },
  },
}));

const BasicInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.customer}>
      <div className={classes.rows}>
        <div className={classes.gridLabel}>
          <label className={classes.label}>phone number </label>
        </div>

        <div className={classes.gridInput}>
          <TextField
            name="phoneNumber"
            id="phoneNumber"
            InputProps={{ disableUnderline: true }}
            className={classes.input}
          />
        </div>
      </div>
      <div className={classes.rows}>
        <div className={classes.gridLabel}>
          <label className={classes.label}>Your name </label>
        </div>
        <div className={classes.gridInput}>
          <TextField
            name="yourName"
            id="yourName"
            InputProps={{ disableUnderline: true }}
            className={classes.input}
          />
        </div>
        <div className={classes.gridLabelMiddle}>
          <label className={classes.titleLabel}>title </label>
        </div>
        <div className={classes.gridInputMiddle}>
          <TextField
            name="title"
            id="title"
            InputProps={{ disableUnderline: true }}
            className={classes.input}
          />
        </div>
      </div>
      <div className={classes.rows}>
        <div className={classes.gridLabel}>
          <label className={classes.label}>Furigana </label>
        </div>
        <div className={classes.gridInput}>
          <TextField
            name="furigana"
            id="furigana"
            InputProps={{ disableUnderline: true }}
            className={classes.input}
          />
        </div>
      </div>
      <div className={classes.rows}>
        <div className={classes.gridLabel}>
          <label className={classes.label}> T </label>
        </div>

        <div className={classes.gridInput}>
          <TextField
            name="t"
            id="t"
            InputProps={{ disableUnderline: true }}
            className={classes.input}
          />
        </div>
        <div className={classes.gridSearchButton}>
          <button className={classes.searchIcon}>
            <SearchIcon fontSize="inherit" />
          </button>
        </div>

        <div className={classes.gridLabelRight}>
          <label className={classes.label}> sort code </label>
        </div>

        <div className={classes.gridInputRight}>
          <TextField
            name="sortCode"
            id="sortCode"
            InputProps={{ disableUnderline: true }}
            className={classes.input}
          />
        </div>
      </div>
      <div className={classes.rows}>
        <div className={classes.gridLabel}>
          <label className={classes.label}> Prefectures </label>
        </div>
        <div className={classes.gridInputLeft}>
          <TextField
            name="prefectures"
            id="prefectures"
            InputProps={{ disableUnderline: true }}
            className={classes.input}
          />
        </div>
        <div className={classes.gridLabelRight}>
          <label className={classes.label}> service level </label>
        </div>
        <div className={classes.gridInputRight}>
          <TextField
            name="serviceLevel"
            id="serviceLevel"
            InputProps={{ disableUnderline: true }}
            className={classes.input}
          />
        </div>
      </div>

      <div className={classes.rows}>
        <div className={classes.gridLabel}>
          <label className={classes.label}> Address Line 1 </label>
        </div>
        <div className={classes.gridInputMedium}>
          <TextField
            name="addressLine1"
            id="addressLine1"
            InputProps={{ disableUnderline: true }}
            className={classes.input}
          />
        </div>
        <div className={classes.gridLabelRight}>
          <label className={classes.label}> group code </label>
        </div>

        <div className={classes.gridInputRight}>
          <TextField
            name="groupCode"
            id="groupCode"
            InputProps={{ disableUnderline: true }}
            className={classes.input}
          />
        </div>
      </div>

      <div className={classes.rows}>
        <div className={classes.gridLabel}>
          <label className={classes.label}> Address 2</label>
        </div>
        <div className={classes.gridInputMedium}>
          <TextField
            name="address2"
            id="address2"
            InputProps={{ disableUnderline: true }}
            className={classes.input}
          />
        </div>
      </div>
      <div className={classes.rows}>
        <div className={classes.gridLabel}>
          <label className={classes.label}> Address 3</label>
        </div>
        <div className={classes.gridInputMedium}>
          <TextField
            name="address3"
            id="address3"
            InputProps={{ disableUnderline: true }}
            className={classes.input}
          />
        </div>
      </div>
      <div className={classes.rows}>
        <div className={classes.gridLabel}>
          <label className={classes.label}> Address 4</label>
        </div>
        <div className={classes.gridInputMedium}>
          <TextField
            name="address4"
            id="address4"
            InputProps={{ disableUnderline: true }}
            className={classes.input}
          />
        </div>
      </div>

      <div className={classes.rows}>
        <div className={classes.gridLabel}>
          <label className={classes.label}> company name</label>
        </div>
        <div className={classes.gridInputLarge}>
          <TextField
            name="companyName"
            id="companyName"
            InputProps={{ disableUnderline: true }}
            className={classes.input}
          />
        </div>
      </div>

      <div className={classes.rows}>
        <div className={classes.gridLabel}>
          <label className={classes.label}> Department name</label>
        </div>
        <div className={classes.gridInputLarge}>
          <TextField
            name="departmentName"
            id="departmentName"
            InputProps={{ disableUnderline: true }}
            className={classes.input}
          />
        </div>
      </div>
    </div>
  );
};
export default BasicInfo;
