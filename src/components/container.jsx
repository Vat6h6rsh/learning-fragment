import React from "react";
import style from "./container.module.css";

const Container = (props) => {
  return <div className={style.containr}>{props.children}</div>;
};

export default Container;