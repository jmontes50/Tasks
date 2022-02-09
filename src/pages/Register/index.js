import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { getToken } from "../../utils/HelperFunctions";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import { register } from "../../store/slices/authThunk";
import { useSelector, useDispatch } from "react-redux";
import history from "../../utils/history";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const dispatch = useDispatch();
  const { token, loading } = useSelector((state) => state.auth);

  if (token || getToken()) {
    history.push("/home");
  }

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(register({ fullName, email, password }));
  };

  return (
    <div className="page">
      <div>
        <h2>Registrate</h2>
      </div>

      <form onSubmit={handleLogin}>
      <FormInput
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Nombre Completo"
          type="text"
          value={fullName}
        />
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
      </form>
    </div>
  );
};

export default Login;
