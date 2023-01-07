import React, { useRef } from "react";
import Helmet from "../components/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Link } from "react-router-dom";
import "../style/pages/Signup.scss";

const Signup = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="signup">
      <CommonSection title="Signup" />
      <div className="main-signup">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form onSubmit={submitHandler}>
          <h3>Signup Here</h3>
          {/* {error && <div className="matched">{error}</div>} */}
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Email or Phone"
            id="username"
            // ref={emailRef}
            // onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            // ref={passwordRef}
          />

          <label htmlFor="password-confirmation">Password Confirmation</label>
          <input
            type="password"
            placeholder="Password Confirmation"
            id="password-confirmation"
            // ref={passwordConfirmationRef}
          />

          <div className="sign-btn">
            <button type="submit">Signup</button>
          </div>
          <div className="log">
            Already have an account? <Link to="/login">Log in</Link>
          </div>
        </form>
      </div>
    </Helmet>
  );
};

export default Signup;
