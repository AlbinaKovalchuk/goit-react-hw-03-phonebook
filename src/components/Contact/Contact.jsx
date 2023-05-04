import PropTypes from 'prop-types';
import { FaUserCircle,FaTrashAlt } from 'react-icons/fa';
import css from '../Contact/Contact.module.css';

export function Contact({ name, number, onDeleteContact, contactID }) {
  return (
    <>
      <div className={css.wrapper}>
        <span className={css.icon}>
          <FaUserCircle />
        </span>
        <p>{name}</p>
      </div>
      <div className={css.wrapper}>
        <p className={css.number}>{number}</p>
        <button
          className={css.button}
          type="button"
          onClick={() => onDeleteContact(contactID)}
        >
          <FaTrashAlt/>
        </button>
      </div>
    </>
  );
}

Contact.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
