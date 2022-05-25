import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/contactsOperations';

const ContactsItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeContact(id));
  };

  return (
    <li>
      <span>
        {name}: {number}
      </span>
      <button className="buttonLink" onClick={handleDelete} type="button">
        Delete
      </button>
    </li>
  );
};

export default ContactsItem;
