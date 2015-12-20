"use strict";

import { makeStore } from './app/store';
import { startServer } from './app/server';
import { actionTypes } from './app/enums/actionType';

const store = makeStore();
startServer(store);


store.dispatch({
  type: 'SET_ENTRIES',
  entries: [
    "Shallow Grave",
    "Trainspotting",
    "A Life Less Ordinary",
    "The Beach",
    "28 Days Later",
    "Millions",
    "Sunshine",
    "Slumdog Millionaire",
    "127 Hours",
    "Trance",
    "Steve Jobs"
  ]
});

store.dispatch({type: 'NEXT'});

export { store };