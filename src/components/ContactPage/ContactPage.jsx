import ContactsList from 'components/ContactsList/ContactsList';
import FormNewContact from 'components/FormNewContact/FormNewContact';
import Notification from 'components/Notification/Notification';
import SearchContact from 'components/SearchContact/SearchContact';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsOperations';
import {
  getFilteredContacts,
  isUserName,
} from 'redux/contacts/contactsSelectors';

const ContactPage = () => {
  const userHasName = useSelector(isUserName);
  const gotContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();
  useEffect(() => {
    userHasName && dispatch(getContacts());
  }, [userHasName]);

  return (
    <div className="container">
      {/* <h1>Contact Page content</h1> */}
      <FormNewContact />
      {gotContacts.length > 0 ? (
        <SearchContact />
      ) : (
        <Notification message={'Phonebook is empty, add someone'} />
      )}
      <ContactsList />
    </div>
  );
};

export default ContactPage;
