import { TASK_MODAL } from './types';

export const taskModal = visible => {
  return {
    type: TASK_MODAL,
    payload: visible
  }
}