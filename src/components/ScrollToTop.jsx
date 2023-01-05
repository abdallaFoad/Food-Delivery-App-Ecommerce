import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import "../style/components/ScrollToTop.scss";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);
  window.addEventListener("scroll", () => {
    document.documentElement.scrollTop >= 200 ? setShow(true) : setShow(false);
  });

  const goTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className={`${show === true ? "come" : "go"} arrow`} onClick={goTop}>
      {<IoIosArrowUp />}
    </div>
  );
};

export default ScrollToTop;
