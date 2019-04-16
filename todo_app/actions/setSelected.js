import { SET_SELECTED } from './types';

export const setSelected = id => {
  return {
    type: SET_SELECTED,
    payload: id,
  }
}