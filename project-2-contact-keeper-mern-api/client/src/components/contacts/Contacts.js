import React, { useContext, Fragment } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from '../contacts/ContactItem';
const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;
  if (contacts.length === 0) { // THIS DOESN"T WORK 
    return <h4>Add a contact </h4>;
  }
  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactItem key={contact.id} contact={contact}></ContactItem>
          ))
        : contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact}></ContactItem>
          ))}
    </Fragment>
  );
};
export default Contacts;
