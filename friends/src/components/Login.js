import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      width: 200,
      margin: "auto"
    }
  },

  formItems: {
    marginTop: 5
  }
}));

export default function Login(props) {
  const classes = useStyles();
  const [creds, setCreds] = useState({ username: "", password: "" });

  const handleChange = e => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value
    });
  };

  //username: 'Lambda School', password: 'i<3Lambd4'
  const login = e => {
    console.log("creds on post", creds);
    e.preventDefault();
    axiosWithAuth()
      .post("/login", creds)
      .then(res => {
        console.log("response", res);
        window.localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch(err => console.log("ERROR: ", err));
  };

  return (
    <div className={classes.root}>
      <form onSubmit={login} className={classes.form} autoComplete="off">
        <TextField
          className={classes.formItems}
          label="Username"
          name="username"
          value={creds.username || ""}
          onChange={handleChange}
        />
        <TextField
          className={classes.formItems || ""}
          type="password"
          label="Password"
          name="password"
          value={creds.password}
          onChange={handleChange}
        />
        <Button
          className={classes.formItems}
          type="submit"
          color="primary"
          fullWidth
        >
          Login
        </Button>
      </form>
    </div>
  );
}
