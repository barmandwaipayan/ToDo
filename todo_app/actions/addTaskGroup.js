import { ADD_GROUP } from './types';

export const addGroup = (title) => {
  return {
    type: ADD_GROUP,
    payload: title
  }
}