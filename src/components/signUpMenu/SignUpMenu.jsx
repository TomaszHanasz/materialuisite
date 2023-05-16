import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import "./signUpMenu.style.css";

const SignUpMenu = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isStrongPassword, setIsStrongPassword] = useState(false);
  const [isSamePassword, setIsSamePassword] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const checkPasswordStrength = (value) => {
    if (value.length >= 8) {
      setIsStrongPassword(true);
    } else {
      setIsStrongPassword(false);
    }
  };

  const isConfirmPassword = (value) => {
    if (value === password) {
      setIsSamePassword(true);
    } else {
      setIsSamePassword(false);
    }
  };

  const handleButton = () => {
    setIsButtonPressed(true);
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        className="signup-form"
      >
        <div className="title">
          <h1>Sign Up</h1>
        </div>
        <TextField
          style={{ width: 207 }}
          id="outlined-required"
          label="First Name"
        />
        <TextField
          style={{ width: 207 }}
          id="outlined-required"
          label="Last Name"
        />
        <TextField
          style={{ width: 450 }}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            checkPasswordStrength(e.target.value);
            setIsButtonPressed(false);
          }}
        />
        <TextField
          style={{ width: 450 }}
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          value={confirmPassword}
          onChange={(e) => {
            isConfirmPassword(e.target.value);
            setConfirmPassword(e.target.value);
            setIsButtonPressed(false);
          }}
        />
        <FormControlLabel
          control={<Checkbox style={{ borderRadius: 0, color: "red" }} />}
          label="I agree to terms and conditions"
        />
        <Button
          style={{ borderRadius: 0, backgroundColor: "red" }}
          variant="contained"
          className="confirmBtn"
          onClick={handleButton}
        >
          Sign Up
        </Button>
        {isButtonPressed && isStrongPassword && isSamePassword && (
          <Alert severity="success" className="alert">
            <AlertTitle>Success</AlertTitle>
            Account created!
          </Alert>
        )}
        {isButtonPressed && !isStrongPassword && (
          <Alert severity="warning" className="alert">
            <AlertTitle>Warning</AlertTitle>
            Password must have at least 8 characters!
          </Alert>
        )}
        {isButtonPressed && !isSamePassword && (
          <Alert severity="error" className="alert-error">
            <AlertTitle>Error</AlertTitle>
            Password doesnt match.
          </Alert>
        )}
      </Box>
    </div>
  );
};

export default SignUpMenu;
