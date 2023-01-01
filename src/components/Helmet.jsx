import React from "react";

const Helmet = ({title, children}) => {
  document.title = `Food ordering app - ${title}`;
  return <div className="w-100">{children}</div>;
};

export default Helmet;
