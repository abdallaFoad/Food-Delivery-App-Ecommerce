import React, { useRef } from "react";
import Helmet from "../components/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Link } from "react-router-dom";
import "../style/pages/ForgotPassword.scss";

const ForgotPassword = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <Helmet title="forgotPassword">
      <CommonSection title="Forgot Password" />
      <div className="main-forgot">
        <form class="login" onSubmit={handelSubmit}>
          <h1>Rest Password</h1>
          <input type="email" placeholder="Email" />
          <button >Rest Password</button>
          {/* {error && <div className="error">{error}</div>} */}
          {/* {message && <div className="message">{message}</div>} */}
          <div className="forgotPass">
            <Link to="/login">log In</Link>
          </div>
          <div className="sign">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
    </Helmet>
  );
};

export default ForgotPassword;
