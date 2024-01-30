// ContactList.js
import React, { Component } from 'react';
import styles from './ContactList.module.css';

class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <ul className={styles.contactList}>
        {contacts.map(contact => (
          <li key={contact.id} className={styles.contactItem}>
            {contact.name} - {contact.number}
            <button
              className={styles.deleteButton}
              type="button"
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
