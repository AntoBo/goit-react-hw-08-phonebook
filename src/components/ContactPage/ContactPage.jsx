import ContactsList from 'components/ContactsList/ContactsList';
import FormNewContact from 'components/FormNewContact/FormNewContact';
import SearchContact from 'components/SearchContact/SearchContact';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsOperations';
import { isUserName } from 'redux/contacts/contactsSelectors';

const ContactPage = () => {
  const userHasName = useSelector(isUserName);

  const dispatch = useDispatch();
  useEffect(() => {
    userHasName && dispatch(getContacts());
  }, [userHasName]);

  return (
    <>
      <h1>Contact Page content</h1>
      <FormNewContact />
      <SearchContact />
      <ContactsList />
    </>
  );
};

export default ContactPage;
