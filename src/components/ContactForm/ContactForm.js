import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value,
    });
  };

  handleNumberChange = event => {
    this.setState({
      number: event.target.value,
    });
  };

  handleAddContact = () => {
    if (this.state.name.trim() === '' || this.state.number.trim() === '') {
      alert('Please enter a valid name and number.');
      return;
    }

    this.props.onAddContact({
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    });

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div className={styles.formContainer}>
        <input
          className={styles.inputField}
          type="text"
          name="name"
          placeholder="Enter name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />

        <input
          className={styles.inputField}
          type="tel"
          name="number"
          placeholder="Enter number"
          value={this.state.number}
          onChange={this.handleNumberChange}
        />

        <button
          className={styles.addButton}
          type="button"
          onClick={this.handleAddContact}
        >
          Add Contact
        </button>
      </div>
    );
  }
}

export default ContactForm;
