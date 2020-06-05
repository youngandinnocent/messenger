import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import { ProfilePage } from 'components/Profile';
import { profileLoad, profileChange } from 'actions/profile';

export default function ProfileContainer() {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [link, setLink] = useState(null);

  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const profileLoadCallback = useCallback(() => dispatch(profileLoad()));

  useEffect(() => {
    if (!profile.entries.name) {
      profileLoadCallback();
    }
  }, []);

  // eslint-disable-next-line no-shadow
  const handleForm = ({ name, description }) =>
    name ? setName(name) : setDescription(description);

  const changeProfile = useCallback(() => {
    if (profile.entries.content) {
      const newData = {};
      newData.name = name || profile.entries.name;
      newData.content = {
        ...profile.entries.content,
        description: description || profile.entries.content.description,
      };
      return dispatch(profileChange(newData));
    }
    return null;
  });

  useEffect(() => {
    changeProfile();
  }, [name, description]);

  // eslint-disable-next-line no-shadow
  const handleNavigate = (link) => setLink(link);

  useEffect(() => {
    if (link) {
      dispatch(push(link));
    }
  }, [link]);

  return (
    <ProfilePage
      name={profile.entries.name}
      content={profile.entries.content}
      isLoading={profile.loading}
      isError={profile.error}
      handleForm={handleForm}
      linkTo={handleNavigate}
    />
  );
}
