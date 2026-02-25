import React from "react";

function Dashboard({ users, deleteUser }) {

  const initials = (f,l) =>
    (f?.[0] || "") + (l?.[0] || "");

  return (
    <div className="dashboard">
      <h2>Dashboard ({users.length})</h2>

      <div className="card-grid">
        {users.map((u,i)=>(
          <div className="user-card" key={i}>

            <div className="avatar">
              {initials(u.firstName,u.lastName)}
            </div>

            <h3>{u.firstName} {u.lastName}</h3>
            <p><b>DOB:</b> {u.dob}</p>
            <p><b>Gender:</b> {u.gender}</p>
            <p><b>State:</b> {u.state}</p>
            <p><b>Skills:</b> {u.skills.join(", ")}</p>

            <button
              className="delete"
              onClick={()=>deleteUser(i)}
            >
              Remove
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;