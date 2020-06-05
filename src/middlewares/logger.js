/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
export default (store) => (next) => (action) => {
  // console.log('Log. Action: ', action);
  // console.log('prevState: ', store.getState());
  const result = next(action);
  // console.log('nextState: ', store.getState());
  // console.log('result: ', result);
  return result;
};
