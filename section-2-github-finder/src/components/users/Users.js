import React from 'react';
import UserItem from './UserItem';
import Loading from '../layout/Loading';
import PropTypes from 'prop-types';
const Users = ({ users, loading }) => {
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div style={userStyles}>
        {users.map((user) => (
          <UserItem key={user.id} user={user}></UserItem>
        ))}
      </div>
    );
  }
};

Users.PropTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const userStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '1.0rem',
};
export default Users;
