import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import ProfileForm from 'components/Profile/ProfileForm';
import './Profile.css';

export function ProfilePage(props) {
  const { name, content, handleForm, linkTo, isLoading, isError } = props;

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Try reloading the page. Server is not available...</div>;
  }
  return (
    <div className="profile">
      <Header name={name} linkTo={linkTo} />
      <div className="profile-body">
        <>
          <h3>Application description</h3>
          <p>{content.description}</p>
          <p>
            <b>Intern: </b>
            {content.intern}
          </p>
          <p>
            <b>Teacher: </b>
            {content.teacher}
          </p>
          <p>
            <b>Course: </b>
            {content.course}
          </p>
          <p>
            <b>School: </b>
            {content.school}
          </p>
        </>
        <div className="profile-body_edit">
          <h3>Edit profile</h3>
          <ProfileForm onSend={handleForm} />
        </div>
      </div>
    </div>
  );
}

export const contentTypes = PropTypes.objectOf(PropTypes.string);

ProfilePage.propTypes = {
  handleForm: PropTypes.func,
  linkTo: PropTypes.func,
  content: contentTypes,
  name: PropTypes.string,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
};

ProfilePage.defaultProps = {
  handleForm: () => {},
  linkTo: () => {},
  name: 'messenger',
  content: {
    description: 'This is messenger prototype',
  },
  isLoading: false,
  isError: false,
};
