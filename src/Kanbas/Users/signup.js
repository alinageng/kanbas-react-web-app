import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/Kanbas/Account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="container">
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <label htmlFor="username"> username </label>
      <input className="form-control" id="username"
        value={credentials.username}
        onChange={(e) => setCredentials({
          ...credentials,
          username: e.target.value })} />
      <label htmlFor="password"> password </label>
      <input className="form-control" type="password"  id="password"
        value={credentials.password}
        onChange={(e) => setCredentials({
          ...credentials,
          password: e.target.value })} />
      <button className="btn btn-primary w-100"
        onClick={signup}>
        Signup
      </button>
    </div>
  );
}
export default Signup;