import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { v4 as uuidv4 } from "uuid";
import ContactDetail from "./components/ContactDetail";
import EditContact from "./components/EditContact";
import api from "./api/contacts";
function App(props) {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //RetrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = async (name, email) => {
    const request = {
      id: uuidv4(),
      name: name,
      email: email,
    };

    const response = await api.post("/contacts", request);
    console.log(response);
    setContacts([...contacts, response.data]);
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const removedArr = [...contacts].filter((contact) => contact.id !== id);
    setContacts(removedArr);
  };
  const updateContactHandler = async (id, name, email) => {
    const request = {
      id: id,
      name: name,
      email: email,
    };
    const response = await api.put(`/contacts/${id}`, request);
    // const { id, name, email } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  const searchHandler = (searchTerm) => {
    console.log(searchTerm);
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        console.log(Object.values(contact).join(" "));
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };

  useEffect(() => {
    const getAllCOntacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };

    getAllCOntacts();
  }, []);

  useEffect(() => {}, [contacts]);

  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={searchTerm.length < 1 ? contacts : searchResults}
                term={searchTerm}
                searchKeyword={searchHandler}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route
            path="/add"
            element={
              <AddContact
                contacts={contacts}
                addContactHandler={addContactHandler}
              />
            }
          />
          <Route
            path="/edit"
            element={
              <EditContact
                contacts={contacts}
                updateContactHandler={updateContactHandler}
              />
            }
          />
          <Route path="/contact/:id" element={<ContactDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
