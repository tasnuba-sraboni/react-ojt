import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Name from "./Name";
import Address from "./Address";
import Contact from "./Contact";
import Emergency from "./Emergency";

const useStyles = makeStyles({
  app: {
    display: "grid",
    gridTemplateRows: "1fr 1fr 1fr 1fr",
    gap: "10px",
    margin: "20px",
  },
  button: {
    position: "absolute",
    left: "50%",
  },
});

export type userType = {
  firstName: string;
  secondName: string;
  office: string;
  residence: string;
};
const user: userType = {
  firstName: "",
  secondName: "",
  office: "",
  residence: "",
};

const FormApp: React.FC = () => {
  const classes = useStyles();

  const [newUser, setNewUser] = React.useState<userType>(user);

  // stores the input value from input field
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setNewUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <React.Fragment>
      <div>
        <Header />
      </div>
      <div className={classes.app}>
        <div>
          <Name
            newUser={newUser}
            setNewUser={setNewUser}
            handleChange={handleChange}
          />
        </div>
        <div>
          <Address
            newUser={newUser}
            setNewUser={setNewUser}
            handleChange={handleChange}
          />
        </div>
        <div>
          <button
            className={classes.button}
            onClick={() => {
              console.log({ newUser });
            }}
          >
            Submit
          </button>
        </div>
      </div>

      {/* <Contact />
      <Emergency /> */}
    </React.Fragment>
  );
};
export default FormApp;
