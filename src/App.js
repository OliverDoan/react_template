import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { v4 as uuidv4 } from "uuid";
function App(props) {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);

  const addContactHandler = (name, email) => {
    // console.log("hé lô");
    // console.log(contact);
    setContacts([...contacts, { id: uuidv4(), name: name, email: email }]);
  };

  const removeContactHandler = (id) => {
    const removedArr = [...contacts].filter((contact) => contact.id !== id);
    setContacts(removedArr);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route
            path="add"
            element={
              <AddContact
                contacts={contacts}
                addContactHandler={addContactHandler}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
