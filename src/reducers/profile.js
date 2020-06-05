import update from 'react-addons-update';
import { handleActions } from 'redux-actions';
import { profileChange, profileRequest, profileSuccess, profileFailure } from 'actions/profile';

const initialState = {
  loading: false,
  error: false,
  entries: {},
};

export default handleActions(
  {
    [profileRequest]: (state) => ({
      ...state,
      loading: true,
      error: false,
    }),
    [profileSuccess]: (state, action) => ({
      ...state,
      loading: false,
      entries: action.payload,
    }),
    [profileFailure]: (state) => ({
      ...state,
      loading: false,
      error: true,
    }),
    [profileChange]: (state, action) =>
      update(state, {
        entries: {
          $merge: {
            name: action.payload.name,
            content: action.payload.content,
          },
        },
      }),
  },
  initialState,
);
