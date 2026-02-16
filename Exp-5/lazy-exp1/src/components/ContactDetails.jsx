export default function ContactDetails({ contact }) {

    let total = 0;
    for (let i = 0; i < 80000000; i++) {
      total += i;
    }
  
    return (
      <div className="card">
        <h3>Contact Details</h3>
        <p>Name: {contact.name}</p>
        <p>Email: {contact.name.toLowerCase()}@gmail.com</p>
        <p>Phone: 9876543210</p>
      </div>
    );
  }