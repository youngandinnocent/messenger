import React from 'react';
import PropTypes from 'prop-types';

import ProfileForm from 'components/Profile/ProfileForm';
import { contentTypes } from 'components/Profile';
import './Profile.css';

export default function MobileProfilePage(props) {
  const { content, handleForm, isLoading, isError } = props;

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Try reloading the page. Server is not available...</div>;
  }
  return (
    <div className="profile">
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

MobileProfilePage.propTypes = {
  handleForm: PropTypes.func,
  content: contentTypes,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
};

MobileProfilePage.defaultProps = {
  handleForm: () => {},
  content: {
    description: 'This is messenger prototype',
  },
  isLoading: false,
  isError: false,
};
