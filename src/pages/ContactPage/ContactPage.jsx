import ContactsList from 'components/ContactsList/ContactsList';
import FormNewContact from 'components/FormNewContact/FormNewContact';
import Notification from 'components/Notification/Notification';
import SearchContact from 'components/SearchContact/SearchContact';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsOperations';
import {
  getFilteredContacts,
  getFilterSelector,
  isUserName,
} from 'redux/contacts/contactsSelectors';

const ContactPage = () => {
  const userHasName = useSelector(isUserName);
  const filter = useSelector(getFilterSelector);
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();
  useEffect(() => {
    userHasName && dispatch(getContacts());
  }, [userHasName]);

  return (
    <div className="container">
      {/* <h1>Contact Page content</h1> */}
      <FormNewContact />
      <SearchContact />
      {contacts.length > 0 ? (
        <ContactsList />
      ) : (
        !filter && <Notification message={'Phonebook is empty, add someone'} />
      )}
    </div>
  );
};

export default ContactPage;
