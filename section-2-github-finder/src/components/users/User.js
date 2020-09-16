import React, { useEffect, Fragment, useContext } from 'react';
import Loading from '../layout/Loading';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ getUserRepos, repos, match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user } = githubContext;
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    company,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  if (loading) return <Loading />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back To Home
      </Link>
      Hireable:{' '}
      {hireable ? (
        <i className='fa fa-check text-success' />
      ) : (
        <i className='fa fa-times-circle text-danger' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            alt='profile'
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio:</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>username: </strong>
                  {login}
                </Fragment>
              )}
            </li>

            <li>
              {company && (
                <Fragment>
                  <strong>company: </strong>
                  {company}
                </Fragment>
              )}
            </li>

            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong>
                  {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers {followers}</div>
        <div className='badge badge-success'>Following {following}</div>
        <div className='badge badge-danger'>Public Repos {public_repos}</div>
        <div className='badge badge-dark'>Gists {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};
User.propTypes = {
  getUserRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
};

export default User;
