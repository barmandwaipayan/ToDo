import { ADD_GROUP } from './types';

export const addGroup = (taskGroup) => {
  return {
    type: ADD_GROUP,
    payload: taskGroup

  }
}