import React, { useState } from "react";
import { Fade } from "react-reveal";

import "../style/components/TabsFoodDetails.scss";

const TabsFoodDetails = ({ desc }) => {
  const [tab, setTab] = useState("desc");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [reviewMsg, setReviewMsg] = useState("");

  const handelPrevent = (e) => {
    e.preventDefault();
    console.log(enteredName, enteredEmail, reviewMsg);
  };

  return (
    <div className="tabs_food-details">
      <div className="tabs d-flex align-items-center gap-5 py-3">
        <h6
          className={` ${tab === "desc" && "tab__active"}`}
          onClick={() => setTab("desc")}
        >
          Description
        </h6>
        <h6
          className={` ${tab === "rev" && "tab__active"}`}
          onClick={() => setTab("rev")}
        >
          Review
        </h6>
      </div>

      {tab === "desc" ? (
        <Fade bottom>
          <div className="tab__content">
            <p>{desc}</p>
          </div>
        </Fade>
      ) : (
        <Fade bottom>
          <div className="tab__form mb-3">
            <div className="review pt-5">
              <p className="user__name mb-0">Abdalla Foad</p>
              <p className="user__email">abdalla22@gmail.com</p>
              <p className="feedback__text">great product</p>
            </div>

            <div className="review">
              <p className="user__name mb-0">Abdalla Foad</p>
              <p className="user__email">abdalla22@gmail.com</p>
              <p className="feedback__text">great product</p>
            </div>

            <div className="review">
              <p className="user__name mb-0">Abdalla Foad</p>
              <p className="user__email">abdalla22@gmail.com</p>
              <p className="feedback__text">great product</p>
            </div>
            <form className="form" onSubmit={handelPrevent}>
              <div className="form__group">
                <input
                  type="text"
                  placeholder="Enter your name"
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = "Enter your name")}
                  onChange={(e) => setEnteredName(e.target.value)}
                  required
                />
              </div>

              <div className="form__group">
                <input
                  type="text"
                  placeholder="Enter your email"
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = "Enter your email")}
                  onChange={(e) => setEnteredEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form__group">
                <textarea
                  rows={5}
                  type="text"
                  placeholder="Write your review"
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = "Write your review")}
                  onChange={(e) => setReviewMsg(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="addTOCart__btn">
                Submit
              </button>
            </form>
          </div>
        </Fade>
      )}
    </div>
  );
};

export default TabsFoodDetails;
