import React, { useState } from "react";

function UserForm() {

  const initialState = {
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    address: "",
    state: "",
    skills: []
  };

  const [formData, setFormData] = useState(initialState);

  const skillsList = ["HTML", "CSS", "JavaScript", "Java", "C/C++"];

  // handle inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // checkbox handler
  const handleSkillChange = (e) => {
    const { value, checked } = e.target;

    setFormData({
      ...formData,
      skills: checked
        ? [...formData.skills, value]
        : formData.skills.filter((s) => s !== value)
    });
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const today = new Date();
    const selectedDate = new Date(formData.dob);

    if (selectedDate > today) {
      alert("Date of Birth cannot be in future");
      return;
    }

    // ALERT MESSAGE
    alert(`
Registration Successful!

Name: ${formData.firstName} ${formData.lastName}
DOB: ${formData.dob}
Gender: ${formData.gender}
Address: ${formData.address}
State: ${formData.state}
Skills: ${formData.skills.join(", ")}
    `);

    setFormData(initialState);
  };

  // cancel
  const handleCancel = () => {
    setFormData(initialState);
  };

  return (
    <div className="form-card">
      <h2>Registration</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />

        <input
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />

        <input
          type="date"
          name="dob"
          value={formData.dob}
          max={new Date().toISOString().split("T")[0]}
          onChange={handleChange}
        />

        {/* Gender */}
        <div className="radio">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            /> Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            /> Female
          </label>
        </div>

        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />

        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
        >
          <option value="">Select State</option>
          <option>Madhya Pradesh</option>
          <option>Gujrat</option>
          <option>Rajasthan</option>
          <option>Punjab</option>
          <option>Delhi</option>
          <option>Haryana</option>
          <option>Maharashtra</option>
          <option>Bihar</option>
          <option>Jharkhand</option>
          <option>Chattisgarh</option>
          <option>West Bengal</option>
        </select>

        {/* Skills */}
        <div className="skills">
          {skillsList.map((skill) => (
            <label key={skill}>
              <input
                type="checkbox"
                value={skill}
                checked={formData.skills.includes(skill)}
                onChange={handleSkillChange}
              />
              {skill}
            </label>
          ))}
        </div>

        {/* Buttons */}
        <div className="btn-group">
          <button type="button" className="cancel" onClick={handleCancel}>
            Cancel
          </button>

          <button type="submit" className="submit">
            Submit
          </button>
        </div>

      </form>
    </div>
  );
}

export default UserForm;
