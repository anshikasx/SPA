import myPhoto from "../assets/my_photo.png";

function Profile() {
  return (
    <div className="container">
      <h2>Profile</h2>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src={myPhoto}
          alt="Profile"
          width="180"
          style={{
            borderRadius: "6px",
            border: "3px solid #2a5298"
          }}
        />
      </div>

      <p><b>Name:</b> Anshika Sinha</p>
      <p><b>Email:</b> anshikasinha1805@gmail.com</p>
      <p><b>Position:</b> Aspiring Software Engineer</p>

      <p>
        Computer Science student with strong fundamentals in programming,
        Data Structures and Algorithms, and web development using React.
      </p>

      <h4>Professional Profiles</h4>
      <ul>
        <li>
          <a
            href="https://github.com/anshikasx"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/anshika-sinha-064201282/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://leetcode.com/u/anshikasinha1805/"
            target="_blank"
            rel="noreferrer"
          >
            LeetCode
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Profile;