import React, { useRef } from "react";
import Helmet from "../components/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import '../style/pages/Login.scss';

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <div className="main-login">
        <div class="main">
          <div class="login">
            <form onSubmit={submitHandler}>
              <label htmlFor="chk" aria-hidden="true">
                Log In
              </label>
              <input
                type="text"
                name="text"
                placeholder="Your Name"
                ref={loginNameRef}
                onFocus={(e) => e.target.placeholder(" ")}
                onBlur={(e) => e.target.placeholder("Your Name")}
              />
              <input
                type="password"
                name="pswd"
                placeholder="Password"
                ref={loginPasswordRef}
                onFocus={(e) => e.target.placeholder(" ")}
                onBlur={(e) => e.target.placeholder("Password")}
              />
              <button type="submit">Login</button>

              <div className="forgotPass">
                <Link to="/forgotPassword">Forgot Password</Link>
              </div>

              <div className="sign">
                <span>Don't have an account?</span>
                <Link to="/signup">Create an account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Login;
