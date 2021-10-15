import React, { useState } from "react";
import Card from "../UI/Card";

import classes from "./Login.module.css";

function Login() {
  const [username, setUsername] = useState("");
  const [pw, setPw] = useState("");

  const onUsernameHandler = function (e) {
    setUsername(e.target.value);
  };

  const onPasswordHandler = function (e) {
    setPw(e.target.value);
  };

  const onSubmitHandler = function (e) {
    const userInfo = {
      user: username,
      pw: pw,
    };

    console.log(userInfo);

    e.preventDefault();
  };

  return (
    <Card className={classes["full-form"]}>
      <form onSubmit={onSubmitHandler}>
        <div className={classes.fields}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={onUsernameHandler}
          />
        </div>
        <div className={classes.fields}>
          <label htmlFor="pw">Password: </label>
          <input
            type="password"
            id="pw"
            value={pw}
            onChange={onPasswordHandler}
          />
        </div>
        <div className={classes.btn}>
          <button type="submit">Login</button>
        </div>
      </form>
    </Card>
  );
}

export default Login;
