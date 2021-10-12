import React from "react";
import Card from "../UI/Card";

import classes from "./Login.module.css";

function Login() {
  return (
    <Card className={classes["full-form"]}>
      <form>
        <div className={classes.fields}>
          <label>Username: </label>
          <input type="text" />
        </div>
        <div className={classes.fields}>
          <label>Password: </label>
          <input type="password" />
        </div>
        <div className={classes.btn}>
          <button>Login</button>
        </div>
      </form>
    </Card>
  );
}

export default Login;
