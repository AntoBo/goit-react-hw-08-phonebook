import { useSelector } from 'react-redux';
import { getFilterSelector } from 'redux/contacts/contactsSelectors';

const SearchContact = () => {
  const searchValue = useSelector(getFilterSelector);

  const handleChange = e => {
    console.log('search changing');
  };

  return (
    <div className="searchWrap">
      <label>
        Find contact by name:
        <input
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
