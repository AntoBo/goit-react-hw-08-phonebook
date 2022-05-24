const ContactsItem = ({ name, number, id }) => {
  const handleClick = () => {
    console.log('remove contact cklick');
  };

  return (
    <li>
      <span>
        {name}: {number}
      </span>
      <button onClick={handleClick} type="button">
        x
      </button>
    </li>
  );
};

export default ContactsItem;
