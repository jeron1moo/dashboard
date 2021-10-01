import produce from 'immer';
import { SET_MENU } from '../constants/customizaiton';

const initialState = {
  opened: true
};

/* eslint-disable no-param-reassign,  */
export default produce((draft, action) => {
  switch (action.type) {
    case SET_MENU:
      draft.opened = action.payload;
      break;
    default:
      break;
  }
}, initialState);
