import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    symptoms: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setSubmitted(false);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // optional: reset form after submit
    setFormData({
      name: "",
      phone: "",
      doctor: "",
      date: "",
      time: "",
      symptoms: "",
    });
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            HealthCare Clinic
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#book">
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h1 className="fw-bold">Book Doctor Appointment</h1>
          <p className="text-muted mb-0">
            ( Simple SPA using Bootstrap components )
          </p>
        </div>
      </div>

      {/* Doctors Cards */}
      <div className="container my-5">
        <h3 className="text-center fw-bold mb-4">Available Doctors</h3>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">Dr. Ananya Sharma</h5>
                <p className="card-text text-muted mb-1">General Physician</p>
                <span className="badge bg-success">Available</span>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">Dr. Rohan Mehta</h5>
                <p className="card-text text-muted mb-1">Dermatologist</p>
                <span className="badge bg-success">Available</span>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">Dr. Neha Verma</h5>
                <p className="card-text text-muted mb-1">Pediatrician</p>
                <span className="badge bg-warning text-dark">Limited Slots</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="container mb-5" id="book">
        <h3 className="text-center fw-bold mb-4">Appointment Form</h3>

        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="card shadow-sm">
              <div className="card-body">
                {submitted && (
                  <div className="alert alert-success" role="alert">
                    ✅ Appointment booked successfully!
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Patient Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Select Doctor
                    </label>
                    <select
                      className="form-select"
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleChange}
                      required
                    >
                      <option value="">-- Choose Doctor --</option>
                      <option value="Dr. Ananya Sharma">
                        Dr. Ananya Sharma (General Physician)
                      </option>
                      <option value="Dr. Rohan Mehta">
                        Dr. Rohan Mehta (Dermatologist)
                      </option>
                      <option value="Dr. Neha Verma">
                        Dr. Neha Verma (Pediatrician)
                      </option>
                    </select>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">Date</label>
                      <input
                        type="date"
                        className="form-control"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">Time</label>
                      <input
                        type="time"
                        className="form-control"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Symptoms</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      name="symptoms"
                      value={formData.symptoms}
                      onChange={handleChange}
                      placeholder="Write symptoms (optional)"
                    ></textarea>
                  </div>

                  <button className="btn btn-primary w-100" type="submit">
                    Book Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">© 2026 HealthCare Clinic | SPA using Bootstrap</p>
      </footer>
    </div>
  );
}