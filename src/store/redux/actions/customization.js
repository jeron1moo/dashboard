import { SET_MENU } from '../constants/customizaiton';

export const setMenu = (value) => ({
  type: SET_MENU,
  payload: value
});

export default { setMenu };
