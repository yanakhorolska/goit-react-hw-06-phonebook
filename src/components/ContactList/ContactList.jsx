import './ContactList.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className="List_box">
      {contacts.map(contact => (
        <li className="List_item" key={contact.id}>
          <span>
            {contact.name}: <span className="List_span">{contact.number}</span>
          </span>
          <button
            className="List_button"
            onClick={() => deleteContact(contact.id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
