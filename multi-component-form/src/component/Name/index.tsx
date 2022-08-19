import React from "react";
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

type NameProps = {
  newUser: userType;
  setNewUser: React.Dispatch<React.SetStateAction<userType>>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Name = ({ newUser, setNewUser, handleChange }: NameProps) => {
  const classes = useStyles();
  const numericInput = "[0-9]";

  const [errorFirstname, setErrorFirstname] = React.useState<boolean>(false);
  const [errorMessageFirstname, setErrorMessageFirstname] =
    React.useState<string>("");
  const [errorSecondname, setErrorSecondname] = React.useState<boolean>(false);
  const [errorMessageSecondname, setErrorMessageSecondname] =
    React.useState<string>("");

  return (
    <div className={classes.container}>
      <div className={classes.inputField}>
        <u>Name</u>
        <div>
          <TextField
            name="firstName"
            id="firstName"
            label="First Name"
            value={newUser.firstName}
            required={true}
            onChange={(event) => {
              if (event.target.value === "") {
                setErrorFirstname(true);
                setErrorMessageFirstname("*Required");
                setNewUser((prev) => {
                  return {
                    ...prev,
                    firstName: event.target.value,
                  };
                });
              } else if (event.target.value.match(numericInput)) {
                setErrorFirstname(true);
                setErrorMessageFirstname("Characters only");
                setNewUser((prev) => {
                  return {
                    ...prev,
                    firstName: event.target.value,
                  };
                });
              } else if (event.target.value.length <= 3) {
                setErrorFirstname(true);
                setErrorMessageFirstname("Must contain at least 4 character");

                setNewUser((prev) => {
                  return {
                    ...prev,
                    firstName: event.target.value,
                  };
                });
              } else {
                setErrorFirstname(false);
                setNewUser((prev) => {
                  return {
                    ...prev,
                    firstName: event.target.value,
                  };
                });
              }
            }}
            helperText={errorFirstname && <span>{errorMessageFirstname}</span>}
            error={errorFirstname && true}
          />
        </div>
        <div>
          <TextField
            name="secondName"
            id="secondName"
            label="Second Name"
            value={newUser.secondName}
            required={true}
            onChange={(event) => {
              if (event.target.value === "") {
                setErrorSecondname(true);
                setErrorMessageSecondname("*Required");
                setNewUser((prev) => {
                  return {
                    ...prev,
                    secondName: event.target.value,
                  };
                });
              } else if (event.target.value.match(numericInput)) {
                setErrorSecondname(true);
                setErrorMessageSecondname("Characters only");
                setNewUser((prev) => {
                  return {
                    ...prev,
                    secondName: event.target.value,
                  };
                });
              } else if (event.target.value.length <= 3) {
                setErrorSecondname(true);
                setErrorMessageSecondname("Must contain at least 4 character");
                setNewUser((prev) => {
                  return {
                    ...prev,
                    secondName: event.target.value,
                  };
                });
              } else {
                setErrorSecondname(false);
                setNewUser((prev) => {
                  return {
                    ...prev,
                    secondName: event.target.value,
                  };
                });
              }
            }}
            helperText={
              errorSecondname && <span>{errorMessageSecondname}</span>
            }
            error={errorSecondname && true}
          />
        </div>
      </div>
    </div>
  );
};
export default Name;
