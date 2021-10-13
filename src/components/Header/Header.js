import React from "react";

import classes from "./Header.module.css";
import MainNav from "./MainNav";

function Header() {
  return (
    <header className={classes["main-header"]}>
      <div className={classes["main-logo"]}>
        <a href="/">Logo Here</a>
      </div>
      <MainNav></MainNav>
    </header>
  );
}

export default Header;
