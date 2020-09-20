import React, { useContext, Fragment } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from '../contacts/ContactItem';
const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactItem key={contact._id} contact={contact}></ContactItem>
          ))
        : contacts.map((contact) => (
            <ContactItem key={contact._id} contact={contact}></ContactItem>
          ))}
    </Fragment>
  );
};
export default Contacts;
