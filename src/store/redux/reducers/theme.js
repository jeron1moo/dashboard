import produce, { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const initialState = {};

/* eslint-disable no-param-reassign,  */
export default produce((draft, action) => {
  switch (action.type) {
    default:
      break;
  }
}, initialState);
