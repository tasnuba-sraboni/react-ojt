import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    margin: "24px",
    padding: "24px",
    borderBottom: "1px solid #C9BB8E",
  },
  column: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#BDA55D",
    fontWeight: "bold",
  },
});

const OrderList: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.table}>
      <div className={classes.column}>
        <div>Done</div>
        <div>Food Item</div>
        <div>Quantity</div>
        <div>Assigned Chef</div>
        <div>Table No.</div>
        <div>Update</div>
        <div>Delete</div>
      </div>
    </div>
  );
};
export default OrderList;
