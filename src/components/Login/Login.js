import React from "react";
import Card from "../UI/Card";

import classes from "./Login.module.css";

function Login() {
  const onSubmitHandler = function (e) {
    e.preventDefault();
  };

  return (
    <Card className={classes["full-form"]}>
      <form onSubmit={onSubmitHandler}>
        <div className={classes.fields}>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" />
        </div>
        <div className={classes.fields}>
          <label htmlFor="pw">Password: </label>
          <input type="password" id="pw" />
        </div>
        <div className={classes.btn}>
          <button type="submit">Login</button>
        </div>
      </form>
    </Card>
  );
}

export default Login;
