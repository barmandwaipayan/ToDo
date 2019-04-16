import { ADD_TASK } from './types';

export const addTask = (activity, from,to, description, completed, id) => {
  return {
    type: ADD_TASK,
    payload: {
      activity,
      from,
      to,
      description,
      completed,
      id,
    }
  }
}