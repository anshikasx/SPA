import React, { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  /* ---------- VALIDATION ---------- */
  const validateForm = (e) => {
    e.preventDefault();

    setEmailError("");
    setPassError("");
    setSuccessMsg("");

    let valid = true;

    // Email validation
    const emailPattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|[a-z]{2,})$/;

    const beforeAt = email.split("@")[0];

    if (beforeAt.includes(".com")) {
      setEmailError("'.com' cannot appear before '@'");
      valid = false;
    } else if (!emailPattern.test(email)) {
      setEmailError("Enter valid email (.com / .in / country code)");
      valid = false;
    }

  
    const passwordPattern =
      /^[A-Z](?=.*[0-9])(?=.*[!@#$%^&*]).{4,}$/;

    if (!passwordPattern.test(password)) {
      setPassError(
        "Start with capital letter, include number & special character, min 5 chars."
      );
      valid = false;
    }

    if (valid) {
      setSuccessMsg("Form submitted successfully ✅");
    }
  };

  /* ---------- RESET FUNCTION ---------- */
  const handleReset = () => {
    setEmail("");
    setPassword("");
    setEmailError("");
    setPassError("");
    setSuccessMsg("");
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Registration</h2>

        <form onSubmit={validateForm}>
          <label>Email ID</label>
          <input
            style={styles.input}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p style={styles.error}>{emailError}</p>

          <label>Password</label>
          <input
            style={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p style={styles.error}>{passError}</p>

          <div style={styles.buttonGroup}>
            <button type="submit" style={styles.submitBtn}>
              Submit
            </button>

            <button
              type="button"
              onClick={handleReset}
              style={styles.resetBtn}
            >
              Reset
            </button>
          </div>

          <p style={styles.success}>{successMsg}</p>
        </form>
      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */
const styles = {
  page: {
    backgroundColor: "#f5efe6", // beige background
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Segoe UI, sans-serif",
  },

  container: {
    backgroundColor: "#fffaf3",
    padding: "30px",
    width: "360px",
    borderRadius: "12px",
    boxShadow: "0 6px 18px rgba(101,67,33,0.2)",
  },

  heading: {
    textAlign: "center",
    color: "#6b4226", // brown
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginTop: "6px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #c4a484",
    backgroundColor: "#fff",
  },

  buttonGroup: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },

  submitBtn: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#8b5e3c",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  resetBtn: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#d2b48c",
    color: "#4b2e2e",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  error: {
    color: "#b00020",
    fontSize: "13px",
    marginTop: "-8px",
  },

  success: {
    color: "#5c4033",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "15px",
  },
};