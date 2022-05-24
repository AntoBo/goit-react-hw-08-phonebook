import ContactsList from 'components/ContactsList/ContactsList';
import FormNewContact from 'components/FormNewContact/FormNewContact';
import SearchContact from 'components/SearchContact/SearchContact';

const ContactPage = () => {
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
