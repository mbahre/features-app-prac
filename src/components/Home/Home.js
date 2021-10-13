import React from "react";
import Card from "../UI/Card";

import classes from "./Home.module.css";

function Home() {
  return (
    <Card className={classes["main-home"]}>
      <h2>Welcome Page</h2>
    </Card>
  );
}

export default Home;
