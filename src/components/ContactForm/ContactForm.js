import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleAddContact = () => {
    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter a valid name and number.');
      return;
    }

    onAddContact({
      id: nanoid(),
      name: name,
      number: number,
    });

    setName('');
    setNumber('');
  };

  return (
    <div className={styles.formContainer}>
      <input
        className={styles.inputField}
        type="text"
        name="name"
        placeholder="Enter name"
        value={name}
        onChange={handleNameChange}
      />

      <input
        className={styles.inputField}
        type="tel"
        name="number"
        placeholder="Enter number"
        value={number}
        onChange={handleNumberChange}
      />

      <button
        className={styles.addButton}
        type="button"
        onClick={handleAddContact}
      >
        Add Contact
      </button>
    </div>
  );
};

export default ContactForm;
