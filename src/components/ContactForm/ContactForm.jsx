import './ContactForm.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };
  const nameChange = e => {
    setName(e.currentTarget.value);
  };

  const numberChange = e => {
    setNumber(e.currentTarget.value);
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <label className="Form_label">
        Name
        <input
          className="Form_input"
          type="text"
          name="name"
          value={name}
          onChange={nameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className="Form_label">
        Number
        <input
          className="Form_input"
          type="tel"
          name="number"
          value={number}
          onChange={numberChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className="Form_button" type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
