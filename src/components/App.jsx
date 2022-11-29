import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import shortid from 'shortid';
import './App.css';

const mountContacts = localStorage.getItem('contacts');
const parseContacts = JSON.parse(mountContacts);

const App = () => {
  const [contacts, setContacts] = useState(parseContacts);
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return false;
    }
    setContacts(prevState => [newContact, ...prevState]);
    return true;
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filterChanger = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className="Phonebook_box">
      <h1 className="Phonebook_title">Wizard's phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2 className="Phonebook_second-title">Contacts</h2>
      <Filter value={filter} filterChanger={filterChanger} />
      <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
    </div>
  );
};
export default App;
