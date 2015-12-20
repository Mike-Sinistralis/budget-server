"use strict";

import { actionTypes } from '../enums/actionType';
import { setEntries, next, vote, INITIAL_STATE } from '../core';

function reducer(state = INITIAL_STATE, action)
{
  switch(action.type)
  {
    case actionTypes.get('SET_ENTRIES'):
      return setEntries(state, action.entries);
    case actionTypes.get('NEXT'):
      return next(state);
    case actionTypes.get('VOTE'):
      return state.update('vote',
                  voteState => vote(voteState, action.entry));
  }
  return state;
}

export { reducer };