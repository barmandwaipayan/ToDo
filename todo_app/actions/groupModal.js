import { GROUP_MODAL } from './types';

export const groupModal = visible => {
  return {
    type: GROUP_MODAL,
    payload: visible
  }
}