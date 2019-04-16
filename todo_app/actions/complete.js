import { COMPLETE } from './types';

export const complete = id => {
  return {
    type: COMPLETE,
    payload: id
  }
}