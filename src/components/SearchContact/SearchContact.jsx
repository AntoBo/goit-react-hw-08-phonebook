import { useDispatch, useSelector } from 'react-redux';
import { getFilterSelector } from 'redux/contacts/contactsSelectors';
import { setFilter } from 'redux/contacts/contactsSlice';
// import s './SearchContact.module.scss';
import s from './SearchContact.module.scss';

const SearchContact = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(getFilterSelector);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={s.wrap}>
      <label className={s.label}>
        Find contact by name:
        <input
          className={s.input}
          type="text"
          name="filter"
          value={searchValue}
          required
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default SearchContact;
