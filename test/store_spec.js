import { Map, List, fromJS } from 'immutable';
import { expect } from 'chai';

import { makeStore } from '../src/app/store';
import { actionTypes } from '../src/app/enums/actionType';

describe('store', () => {

  it('is a Redux store configured with the correct reducer', () => {
    const store = makeStore();
    expect(store.getState()).to.equal(Map());

    store.dispatch({
      type: actionTypes.get('SET_ENTRIES'),
      entries: List.of('Trainspotting', '28 Days Later')
    });

    expect(store.getState()).to.equal(fromJS({
      entries: List.of('Trainspotting', '28 Days Later')
    }));
  });

});