import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';

export function Filter({ filter, changeFilter }) {
  return (
    <label className={css.label}>
      <p className={css.text}>Find contacts by name</p>
      <input
        type="text"
        className={css.input}
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
}

Filter.prototype = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
