import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account)
  };
  const save = async () => {
    await client.updateUser(account);
  }
  useEffect(() => {
    fetchAccount();
  }, []);
  const goToUserTable = () => {
    navigate("/Kanbas/Admin/Users");
  }

  return (
    <div className="container">
      <h1>Account</h1>
      {account && (
        <div>
          <input value={account.password} className="form-control"
                 onChange={(e) => setAccount({ ...account,
                   password: e.target.value })}/>
          <input value={account.firstName} className="form-control"
                 onChange={(e) => setAccount({ ...account,
                   firstName: e.target.value })}/>
          <input value={account.lastName} className="form-control"
                 onChange={(e) => setAccount({ ...account,
                   lastName: e.target.value })}/>
          <input value={account.dob} className="form-control"
                 onChange={(e) => setAccount({ ...account,
                   dob: e.target.value })}/>
          <input value={account.email} className="form-control"
                 onChange={(e) => setAccount({ ...account,
                   email: e.target.value })}/>
          <select className="form-select" onChange={(e) => setAccount({ ...account,
            role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button className="btn btn-primary" onClick={save}>
            Save
          </button>
          <button className="btn btn-danger" onClick={goToUserTable}>
            Users
          </button>
        </div>
      )}
    </div>
  );
}
export default Account;