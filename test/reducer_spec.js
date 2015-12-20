import { Map, List, fromJS } from 'immutable';
import { expect } from 'chai';

import { reducer } from '../src/app/reducers/reducer';
import { actionTypes } from '../src/app/enums/actionType';

describe('reducer function', () => {

    it('has an initial state', () => {
    const initialState = undefined;
    const action = {type: actionTypes.get('SET_ENTRIES'), entries: List.of('Trainspotting')};
    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS({
      entries: List.of('Trainspotting')
    }));
  });


  it('handles SET_ENTRIES', () => {
    const initialState = Map();
    const action = {type: actionTypes.get('SET_ENTRIES'), entries: List.of('Trainspotting')};
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      entries: List.of('Trainspotting')
    }));
  });


  it('handles NEXT', () => {
    const initialState = fromJS({
      entries: ['Trainspotting', '28 Days Later']
    });
    const action = {type: actionTypes.get('NEXT')};
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: List.of('Trainspotting', '28 Days Later')
      },
      entries: List()
    }));
  });


  it('handles VOTE', () => {
    const initialState = fromJS({
      vote: {
        pair: List.of('Trainspotting', '28 Days Later')
      },
      entries: []
    });
    const action = {type: actionTypes.get('VOTE'), entry: 'Trainspotting'};
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: {
          'Trainspotting': 1
        }
      },
      entries: List()
    }));
  });

  it('can be used with reduce', () => {
    const actions = [
      {type: actionTypes.get('SET_ENTRIES'), entries: List.of('Trainspotting', '28 Days Later')},
      {type: actionTypes.get('NEXT')},
      {type: actionTypes.get('VOTE'), entry: 'Trainspotting'},
      {type: actionTypes.get('VOTE'), entry: '28 Days Later'},
      {type: actionTypes.get('VOTE'), entry: 'Trainspotting'},
      {type: actionTypes.get('NEXT')}
    ];
    const finalState = actions.reduce(reducer, Map());

    expect(finalState).to.equal(fromJS({
      winner: 'Trainspotting'
    }));
  });

});