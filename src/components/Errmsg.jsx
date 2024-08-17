import React from "react";

const Errmsg = ({ foods }) => {
  return <>{foods.length === 0 ? <h1>No foods found</h1> : null}</>;
};

export default Errmsg;
