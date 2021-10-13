import React from "react";

import classes from "./MainNav.module.css";

function MainNav() {
  return (
    <nav className={classes["main-nav"]}>
      <ul>
        <li>
          <a href="/">Users</a>
        </li>
        <li>
          <a href="/">Admin</a>
        </li>
        <li>
          <button type="button">Logout</button>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
