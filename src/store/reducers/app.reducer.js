import { INIT_APP } from '../actions/app.actions';

export default function (state = {}, action = {}) {
  switch (action.type) {
    case INIT_APP:
      return { ...state, isLoaded: action.payload };
    default:
      return state;
  }
}
