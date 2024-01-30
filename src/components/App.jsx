import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import styles from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = newContact => {
    const isNameExists = contacts.some(
      contact => contact.name === newContact.name
    );
    if (isNameExists) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const handleDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;




// export class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       contacts: [],
//       filter: '',
//     };
//   }

//   componentDidMount() {
//     const storedContacts = localStorage.getItem('contacts');
//     if (storedContacts) {
//       this.setState({ contacts: JSON.parse(storedContacts) });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   handleAddContact = newContact => {
//     const { contacts } = this.state;

//     const isNameExists = contacts.some(
//       contact => contact.name === newContact.name
//     );

//     if (isNameExists) {
//       alert(`${newContact.name} is already in contacts.`);
//       return;
//     }

//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, newContact],
//     }));
//   };

//   handleFilterChange = event => {
//     this.setState({
//       filter: event.target.value,
//     });
//   };

//   handleDeleteContact = id => {
//     this.setState(prev => ({
//       ...prev,
//       contacts: prev.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   render() {
//     const { contacts, filter } = this.state;

//     const filteredContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );

//     return (
//       <div className={styles.container}>
//         <h1>Phonebook</h1>
//         <ContactForm onAddContact={this.handleAddContact} />

//         <h2>Contacts</h2>
//         <Filter filter={filter} onFilterChange={this.handleFilterChange} />
//         <ContactList
//           contacts={filteredContacts}
//           onDeleteContact={this.handleDeleteContact}
//         />
//       </div>
//     );
//   }
// }
