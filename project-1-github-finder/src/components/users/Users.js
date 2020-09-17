import React, { useContext } from 'react';
import UserItem from './UserItem';
import Loading from '../layout/Loading';
import GithubContext from '../../context/github/githubContext';
const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;

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

const userStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '1.0rem',
};
export default Users;
