import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { getToken } from "../../utils/HelperFunctions";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import { login } from "../../store/slices/authThunk";
import { useSelector, useDispatch } from "react-redux";
import history from "../../utils/history";
import Privacy from "../../assets/img/Privacy.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { token, loading } = useSelector((state) => state.auth);

  if (token || getToken()) {
    history.push("/home");
    // <Redirect to="/home" />
  }

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className="page">
      <form onSubmit={handleLogin}>
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <img className="img-fluid" src={Privacy} alt="Privacy" />
            </div>
            <div className="col-12 col-md-6">
              <div className="mb-4">
                <h2>Login</h2>
              </div>
              <p>

              </p>
              <FormInput
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                value={email}
              />
              <FormInput
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                value={password}
              />

              {loading ? (
                <div className="loading">
                  <span>Loading...</span>
                </div>
              ) : (
                <Button type="submit" name="Login" />
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
