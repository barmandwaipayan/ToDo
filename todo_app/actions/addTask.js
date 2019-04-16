import { ADD_TASK } from './types';

export const addTask = (id, activity, from, to, completed) => {
  return {
    type: ADD_TASK,
    payload: {
      id,
      activity,
      from,
      to,
      completed
    }
  }
}