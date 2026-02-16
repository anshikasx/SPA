export default function ContactList({ onSelect }) {

    const contacts = [
      { id: 1, name: "Anshika" },
      { id: 2, name: "Harshita" },
      { id: 3, name: "Archisman" },
      { id: 4, name: "Vani" }
    ];
  
    return (
      <div className="card">
        <h3>Contacts</h3>
  
        {contacts.map(c => (
          <div
            key={c.id}
            className="contact"
            onClick={() => onSelect(c)}
          >
            {c.name}
          </div>
        ))}
      </div>
    );
  }