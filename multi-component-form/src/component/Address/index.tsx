import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { userType } from "..";

const useStyles = makeStyles({
  container: {
    padding: "0 35px",
  },
  inputField: {
    border: "1px solid #C9BB8E",
    display: "grid",
    gap: "10px",
    padding: "30px",
    fontSize: "20px",
  },
});

type AddressProps = {
  newUser: userType;
  setNewUser: React.Dispatch<React.SetStateAction<userType>>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Address = ({ newUser, setNewUser, handleChange }: AddressProps) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.inputField}>
        <u>Address</u>
        <div>
          <TextField
            name="office"
            id="office"
            label="Office"
            value={newUser.office}
            // required={true}
            onChange={handleChange}
            // helperText={errors.foodItem}
            // error={Boolean(errors.foodItem)}
          />
        </div>
        <div>
          <TextField
            name="residence"
            id="residence"
            label="Residence"
            value={newUser.residence}
            // required={true}
            onChange={handleChange}
            // helperText={errors.quantity}
            // error={Boolean(errors.quantity)}
          />
        </div>
      </div>
    </div>
  );
};
export default Address;
