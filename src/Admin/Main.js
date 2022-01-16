import React from "react";
import UserDetails from "./UserDetails";
import Projects from "./Projects";

const Main = (props) => {
  if (props.index === 1) {
    return <Projects />;
  } else return <UserDetails />;
};

export default Main;
