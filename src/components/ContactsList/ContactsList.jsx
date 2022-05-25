import ContactsItem from 'components/ContactsItem/ContactsItem';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contactsSelectors';

const ContactsList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <ul>
      {filteredContacts.map(contact => {
        return <ContactsItem contact={contact} key={contact.id} />;
      })}
    </ul>
  );
};

export default ContactsList;
