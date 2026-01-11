import { useState } from "react";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`app ${dark ? "dark" : "light"}`}>
      <div className="card">
        <h1>Theme Toggle SPA</h1>
        <p>Click the button to switch theme</p>

        <button onClick={() => setDark(!dark)}>
          {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default App;

