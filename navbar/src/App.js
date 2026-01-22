import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <section id="home" className="section">
        <h1>Home Page</h1>
        <p>Welcome to our responsive navbar project.</p>
      </section>

      <section id="about" className="section">
        <h1>About</h1>
        <p>This navbar is responsive, modern and clean.</p>
      </section>

      <section id="services" className="section">
        <h1>Services</h1>
        <p>We provide frontend UI and web development projects.</p>
      </section>

      <section id="contact" className="section">
        <h1>Contact</h1>
        <p>Email: navbarproject@gmail.com</p>
      </section>
    </div>
  );
}

export default App;