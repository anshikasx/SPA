import { useState, lazy, Suspense } from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import Loader from "./components/Loader";


const ContactDetails = lazy(() =>
  import("./components/ContactDetails")
);

function App() {

  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div className="app">

      <div className="header">
        Contacts Dashboard
      </div>

      <div className="container">

        <ContactList onSelect={setSelectedContact} />

        {selectedContact && (
          <Suspense fallback={<Loader />}>
            <ContactDetails contact={selectedContact} />
          </Suspense>
        )}

      </div>
    </div>
  );
}

export default App;