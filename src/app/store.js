"use strict";

import { createStore } from 'redux';
import { reducer } from './reducers/reducer';

function makeStore()
{
  return createStore(reducer);
}

export { makeStore };