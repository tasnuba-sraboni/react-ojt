import SearchIcon from "@material-ui/icons/Search";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "85% auto",
    padding: "15px 24px",
  },
  searchBar: {
    width: "40%",
    top: "100px",
    borderRadius: "10px",
    padding: "15px 30px",
    fontSize: "15px",
    border: "none",
    boxShadow: "inset 0 0 5px #C9BB8E",
    "&:focus": {
      outline: "none",
    },
  },
  searchIcon: {
    position: "absolute",
    padding: "12px 5px",
    pointerEvents: "none",
    opacity: "0.4",
  },
  addButton: {
    backgroundColor: "transparent",
    border: "2px solid #C9BB8E",
    borderRadius: "5px",
    color: "#BDA55D",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#C9BB8E",
      border: "2px solid #BDA55D",
      color: "white",
    },
  },
});

const SearchBar: React.FC = () => {
  let navigate = useNavigate();
  const classes = useStyles();

  // navigates to the create order form
  const handleAddButton = () => {
    navigate("/add-order", { replace: true });
  };

  return (
    <div className={classes.container}>
      <SearchIcon className={classes.searchIcon} />
      <input
        type="input"
        placeholder="Search order"
        className={classes.searchBar}
      />
      <button onClick={handleAddButton} className={classes.addButton}>
        Add Order
      </button>
    </div>
  );
};
export default SearchBar;
