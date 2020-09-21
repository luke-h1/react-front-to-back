import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <h4>LOading...</h4>
      )}
    </Fragment>
  );
};

export default Contacts;

// import React, { useContext, Fragment, useEffect } from 'react';
// import ContactContext from '../../context/contact/contactContext';
// import ContactItem from '../contacts/ContactItem';
// const Contacts = () => {
//   const contactContext = useContext(ContactContext);
//   const { contacts, filtered, getContacts, loading } = contactContext;

//   useEffect(() => {
//     getContacts();
//     // eslint-disable-next-line
//   }, []);

//   return (
//     <Fragment>
//       {filtered !== null
//         ? filtered.map((contact) => (
//             <ContactItem key={contact._id} contact={contact}></ContactItem>
//           ))
//         : contacts.map((contact) => (
//             <ContactItem key={contact._id} contact={contact}></ContactItem>
//           ))}
//     </Fragment>
//   );
// };
// export default Contacts;
