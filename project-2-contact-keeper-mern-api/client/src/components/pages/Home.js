import React from 'react';
import Contacts from '../contacts/Contacts';
export const Home = () => {
  return (
    <div className='grid-2'>
      <div>{/* CONTACT FORM */}</div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};
export default Home;
