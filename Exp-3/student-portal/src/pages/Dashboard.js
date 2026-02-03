import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Dashboard</h2>

      <p>Welcome to the student portfolio dashboard.</p>

      <button onClick={() => navigate("/profile")}>Profile</button>
      <button onClick={() => navigate("/skills")}>Skills</button>
      <button onClick={() => navigate("/projects")}>Projects</button>
      <button onClick={() => navigate("/contact")}>Contact</button>
    </div>
  );
}

export default Dashboard;