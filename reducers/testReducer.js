import {UPDATE_COUNT} from '../actions/countActions.js';

  const initialState = {
    count: 0,

  }

  export default function (state = initialState, action) {
    switch(action.type){
      case UPDATE_COUNT:
      return Object.assign({}, state, action.update);

      default:
      return state;
    }
  }
