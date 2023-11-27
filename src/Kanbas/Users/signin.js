import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({username:"",password:""});
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account");
  }
  return (
    <div className="container">
      <h1>Signin</h1>
      <label for="username"> username </label>
      <input className="form-control" id="username" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      <label for="password"> password </label>
      <input className="form-control" id="username" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      <button className="btn btn-primary"onClick={signin}> Signin </button>
    </div>
  );
}
export default Signin;