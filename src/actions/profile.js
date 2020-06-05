import { createAction } from 'redux-actions';

export const profileChange = createAction('[Profile] Change');
export const profileRequest = createAction('[Profile] Request');
export const profileSuccess = createAction('[Profile] Success');
export const profileFailure = createAction('[Profile] Failure');

export const profileLoad = () => async (dispatch) => {
  try {
    dispatch(profileRequest());
    const result = await fetch('/api/profile.json');
    dispatch(profileSuccess(await result.json()));
  } catch (error) {
    dispatch(profileFailure(error));
  }
};
