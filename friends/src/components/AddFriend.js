import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";

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

export default function AddFriend() {
  const classes = useStyles();

  const [newFriend, setNewFriend] = useState({ name: "", age: "", email: "" });

  const handleChange = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    });
  };

  const addFriend = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", newFriend)
      .then(res => {
        setNewFriend({
          ...newFriend,
          name: "",
          age: "",
          email: ""
        });
      })
      .catch(err => console.log(err));
  };
  return (
    <div className={classes.root}>
      <h1>ADD NEW FRIENDS HERE!</h1>
      <form onSubmit={addFriend} className={classes.form} autoComplete="off">
        <TextField
          className={classes.formItems}
          label="Enter name"
          name="name"
          value={newFriend.name}
          onChange={handleChange}
        />
        <TextField
          className={classes.formItems}
          label="Enter age"
          name="age"
          value={newFriend.age}
          onChange={handleChange}
        />
        <TextField
          className={classes.formItems}
          label="Enter email"
          name="email"
          value={newFriend.email}
          onChange={handleChange}
        />
        <Button
          className={classes.formItems}
          type="submit"
          color="primary"
          fullWidth
        >
          Add friend
        </Button>
      </form>
    </div>
  );
}
